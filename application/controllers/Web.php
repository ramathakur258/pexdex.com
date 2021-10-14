<?php

defined('BASEPATH') OR exit('No direct script access allowed');



class Web extends CI_Controller {



	public function __construct() {

        parent::__construct();
		$this->load->helper(['url','form']);
        $this->load->library(['form_validation','pagination','session']);
        $this->load->model(['common']);
     
    }

    

	public function index()

	{

		if($this->input->server('REQUEST_METHOD')=='POST')

		{
			$data['email'] = $this->input->post('email');
			$user=$this->common->record('shop_enquiry_user', $data);

			if($user){
				$password=md5($this->input->post('password')); 
		
						if($user->password==$password){
						
							$user_data = array(
								'user_id'  => $user->id,
								'display_name'  => $user->first_name,
							);
							$this->session->set_userdata($user_data); 
							redirect('profile');
						}else{

						}
             }

		

		}

		
		$this->data['content']='web/index';
		$this->load->view('template', $this->data);
		// $this->load->view('web/index');
	}

	public function form()

	{

	   	if($this->input->server('REQUEST_METHOD')=='POST')

	   	{

			
			$savedata['first_name'] = $this->input->post('first_name');
			$savedata['middle_name'] = $this->input->post('middle_name');
			$savedata['last_name'] = $this->input->post('last_name');
			$savedata['gender'] = $this->input->post('gender');
			$savedata['mobile'] = $this->input->post('mobile');
			// $password= password_hash($this->input->post('password'), PASSWORD_DEFAULT); 
			$password= md5($this->input->post('password')); 
			$savedata['password'] = $password;
			$savedata['dob'] = $this->input->post('dob');
			$savedata['email'] = $this->input->post('email');
			

			$save['shop_name'] = $this->input->post('shop_name');
			$save['app_shop_name'] = $this->input->post('shop_name');
			$save['aadhar_number'] = $this->input->post('aadhar');
			$save['pan_number'] = $this->input->post('pan_number');
			$save['retailer_type'] = $this->input->post('retailer_type');
			$save['firm_type'] = $this->input->post('firm_type');
			$save['address1'] = $this->input->post('address1');
			$save['address2'] = $this->input->post('address2');
			$save['land_mark'] = $this->input->post('land_mark');
			$save['pincode'] = $this->input->post('pincode');
			$save['city'] = $this->input->post('city');
			$save['state'] = $this->input->post('state');
			$save['busineess_duration'] = $this->input->post('busineess_duration');
			$save['why_online'] = $this->input->post('why_online');
			$save['products'] =  implode(', ', $this->input->post('products'));;
			$save['how_hear_about_chaloonline'] = $this->input->post('how_hear_about_chaloonline');
			$save['annual_sales_volume'] = $this->input->post('annual_sales_volume');
			$save['geographic_reach'] = $this->input->post('geographic_reach');
			$save['sales_people_number'] = $this->input->post('sales_people_number');
			$save['monthly_market_budget'] = $this->input->post('monthly_market_budget');
			$save['sales_goals'] = $this->input->post('sales_goals');
			$save['gst_number'] = $this->input->post('gst_number');
			
			
			$config['upload_path'] = 'uploads/documents/';
			$config['allowed_types'] = 'gif|jpg|png|jpeg';
			$config['max_size'] = 2000;
			$config['max_width'] = 1500;
			$config['max_height'] = 1500;
			$this->load->library('upload', $config);
			
			if(isset($_FILES["photo"]["name"]))  {
				if ($this->upload->do_upload('photo')) {

					$image = $this->upload->data();
					$savedata['photo']=$image['file_name'];
					

				}
				}
			if(isset($_FILES["address_proof"]["name"]))  {
				if ($this->upload->do_upload('address_proof')) {

					$image = $this->upload->data();
					$save['address_proof']=$image['file_name'];
					

				}
			}
			if(isset($_FILES["pan_card"]["name"]))  {
				if ($this->upload->do_upload('pan_card')) {

					$image = $this->upload->data();
					$save['pan_card']=$image['file_name'];
					

		    	}
			}


			$insert_id = $this->common->save('shop_enquiry_user',$savedata);
		
			if($insert_id){
				$save['user_id'] = $insert_id;
				$this->common->save('shop_enquiry_user_detail',$save);
				$setdata['user_id']= $insert_id;
				$setdata['amount']= 0;
				$this->common->save('shop_user_approval',$setdata);
				$this->session->set_flashdata('success','Thank you!, we will connect to you.');
				redirect('web/index');
			}
	   	    

	   	}

		$this->load->view('web/form');

	}

	public function profile()
	{
		$id = $this->session->userdata("user_id");
	
		$this->data['record']=$this->common->details($id);
	
		$this->data['content']='web/profile';
		$this->load->view('template', $this->data);

		//$this->load->view('web/profile', $data);

	}

	public function notification()

	{
		$id = $this->session->userdata("user_id");
		$this->data['record']=$this->common->details($id);
		if($this->data['record']){
			$this->data['features']= explode(",",$this->data['record']->features);
		}
	
	
		$this->data['content']='web/notification';
		$this->load->view('template', $this->data);

		//$this->load->view('web/notification', $data);

	}

	public function logout()

	{
		session_destroy();
		redirect();

	}

	public function check_email()
	{
		
		$email = $_REQUEST["email"];
        $data['email']= $email;
		$find=$this->common->record('shop_enquiry_user',$data);
		$find_email_in_user=$this->common->record('users',$data);

		if($find){
	
			$valid = "false";
			
		}else if($find_email_in_user){
			
			$valid = "false";
			
		}else{
		
		    $valid = "true";
		
		}
	      echo $valid;
		
	}

	public function check_phone()
	{

		$mobile = $_REQUEST["mobile"];
        $data['mobile']=$mobile;
		$d['phone']=$mobile;
		$find=$this->common->record('shop_enquiry_user',$data);
		$find_phone_in_user=$this->common->record('users',$d);

		if($find){
	
			$valid = "false";
			
		}else if($find_phone_in_user){
			
			$valid = "false";
			
		}else{
		
		    $valid = "true";
		
		}
	      echo $valid;
		
	}


	public function pay_now()
    {
		require_once APPPATH.'third_party/paytm/config_paytm.php';
		require_once APPPATH.'third_party/paytm/encdec_paytm.php';
		$ReturnUrl=base_url('apis/paytm/PurchaseMembershipResponse');
		$id = $this->session->userdata("user_id");

		$txn_id = $id.time();
		$data['user_id']=$id;
		$result=$this->common->record('shop_user_approval', $data);
           $amount = $result->amount;


        $paramList["MID"] = PAYTM_MERCHANT_MID;
        
		$paramList["ORDER_ID"] = $txn_id;
        $paramList["CUST_ID"] = $this->session->userdata("user_id");
        $paramList["INDUSTRY_TYPE_ID"] =  PAYTM_INDUSTRY_TYPE_ID;
        $paramList["CHANNEL_ID"] = PAYTM_CHANNEL_ID;
        $paramList["TXN_AMOUNT"] = $amount ;
        $paramList["WEBSITE"] = PAYTM_MERCHANT_WEBSITE;
   
         $paramList["CALLBACK_URL"] = 'https://chaloonline.in/web/response';
  
        $checkSum = getChecksumFromArray($paramList,PAYTM_MERCHANT_KEY);

		$set['user_id']=$id ;
		$set['order_id']=$txn_id ;
		$set['payment_status']='fail';
		$set['amount']=$amount ;
		$insert_id = $this->common->save('shop_app_payment',$set);

		if($insert_id){

			?>

		

			<!--submit form to payment gateway OR in api environment you can pass this form data-->
	   
			<form id="myForm" action="<?php echo PAYTM_TXN_URL ?>" method="post">
			<?php
			 foreach ($paramList as $a => $b) {
			echo '<input type="hidden" name="'.htmlentities($a).'" value="'.htmlentities($b).'">';
		   }
		   ?>
				<input type="hidden" name="CHECKSUMHASH" value="<?php echo $checkSum ?>">
			</form>
			<script type="text/javascript">
				document.getElementById('myForm').submit();
			 </script>
	 
    	<?php



		}

       
    }



	public function response()
    {
	
		if($this->input->post('STATUS') =='TXN_SUCCESS'){

			$data['order_id']= $this->input->post('ORDERID');
			$result=$this->common->record('shop_app_payment', $data);

			$user_data=$this->common->details($result->user_id);

			$set['user_id']= $result->user_id;
			$set['txn_id']= $this->input->post('TXNID');
			$set['payment_type']='online';
			$set['payment_status']= $this->input->post('STATUS');
			$set['amount']=$this->input->post('TXNAMOUNT');
			$set['order_id']=$this->input->post('ORDERID');   
			$set['response_msg']=$this->input->post('RESPMSG'); 
			$update = $this->common->update('shop_app_payment',$set, $data);

			$save['payment_status']='completed';
			$user['user_id']= $result->user_id;
			$update_final = $this->common->update('shop_user_approval',$save, $user);

			if($update_final){

				$save['first_name']=  $user_data->first_name;
				$save['last_name']=  $user_data->last_name;
				$save['email']= $user_data->email; 
				$save['phone']= $user_data->mobile; 
				$save['password']= $user_data->password; 
				$save['gender']= $user_data->gender; 
				$save['dob']= $user_data->dob ;
				$save['city']= $user_data->city; 
				$save['state']= $user_data->state ;
				$save['address']= $user_data->address1 ;
				$save['zip_code']= $user_data->pincode; 
				$save['user_group']= 2;
				$save['customer_type']= 1;
				$save['status']= 1;
				$save['shop_enquiry_id']= $result->user_id;
				$save['role_id']= 8;

				$email_found=$this->common->record('users', ['email'=>$user_data->email]);
				$phone_found=$this->common->record('users', ['phone'=>$user_data->mobile]);

				if($phone_found){
				    	$updatedata['customer_type']= 1;
        				$updatedata['status']= 1;
        				$updatedata['shop_enquiry_id']= $result->user_id;
        				$phone['phone']= $user_data->mobile; 
				    	 $this->common->update('users',$updatedata, $phone);
					redirect('web/final/'.$data['order_id']);
				}elseif($email_found){
					redirect('web/final/'.$data['order_id']);
				}else{
					$register_user = $this->common->save('users',$save);

					if($register_user){
					 redirect('web/final/'.$data['order_id']);
					}
				}
			

			}
			
		}else{
			$data['order_id']= $this->input->post('ORDERID');
			$result=$this->common->record('shop_app_payment', $data);

			$user_data=$this->common->details($result->user_id);


			$set['user_id']= $result->user_id;
			$set['txn_id']= $this->input->post('TXNID');
			$set['payment_type']='online';
			$set['payment_status']= $this->input->post('STATUS');
			$set['amount']=$this->input->post('TXNAMOUNT');
			$set['order_id']=$this->input->post('ORDERID');
			$set['response_msg']=$this->input->post('RESPMSG'); 
			$update = $this->common->update('shop_app_payment',$set, $data);

			if($update){
			    
			      redirect('web/final/'.$data['order_id']);
			}
		
			
		}

		
    }

	public function final($request)
	{
		$data['order_id']=$request;
		$this->data['record']=$this->common->record('shop_app_payment', $data);
		$this->data['content']='web/final';
		$this->load->view('template', $this->data);
	}




}

