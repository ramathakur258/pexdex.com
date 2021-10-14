<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Auth extends CI_Model 
{
    public function __construct() 
    {
        parent::__construct();  
        $this->load->database();     
        $this->load->helper(["api","universal_helper"]); 
        $this->load->model("common");  
        $this->load->library(['form_validation','pagination']);
        $this->load->library('upload');
    }
    //login API
    public function Login($request=[],$response=[])
    {
        $user = $this->common->record('delapp_drivers',['mobile'=>$request->mobile]);    
        if($user) {   
        if(md5($request->password) == $user->password) {                 
        $access_token = uniqid().md5(time());
        $updatedata=[
            'access_token'=>$access_token,
            'device_type'=>$request->device_type,
        ];
            if($this->common->update('delapp_drivers', $updatedata, ['id'=>$user->id])) { 
            $user=$this->common->record('delapp_drivers',['id'=>$user->id]); 
            if($user){
                $response = ['code'=>200,'status'=>'success','message'=>'Login successful','data'=> $user];
                $url =  "https://storage.googleapis.com/texcutiveapp/uploads/";
                $return = [     
                            'id' =>$user->id,
                            'first_name' =>$user->first_name,
                            'last_name' =>$user->last_name,
                            'mobile' =>$user->mobile,
                            'email' =>$user->email,
                            'password' =>$user->password,
                            'otp' =>$user->otp,
                            'profile'=> $url.$user->profile, 
                            'identity_front_img'=>$url.$user->identity_front_img,
                            'identity_back_img'=>$url.$user->identity_back_img,
                            'driving_license' =>$url.$user->driving_license,
                            'vehicle_insurance' =>$url.$user->vehicle_insurance,
                            'vehicle_registration' =>$url.$user->vehicle_registration,
                            'national_id' => $url.$user->national_id,
                            'access_token' =>$user->access_token,
                            'fcm_token' =>$user->fcm_token,
                            'device_type' =>$user->device_type,
                            'registration_status' =>$user->registration_status,
                            'created_at' =>$user->created_at,
                            'updated_at' =>$user->updated_at
                            ];
                $response = ['code'=>200,'status'=>'success','message'=>'Login successful','data'=> $return]; 
            }  
            }else{ 
            $response=['code'=>200,'status'=>'fail','message'=>'Network fail'];
            }
        }else{	
        $response=['code'=>200,'status'=>'fail','message'=>'Password is Wrong'];
        }            
    }else{
    $response=["code"=>200,'status'=>'fail','message'=>'Invalid Mobile Number' ];
}
    return $response;
    }
    //Registration Step1
    public function registerStep1($request=[],$response=[])
    {
        $saverow['first_name'] = $request->first_name;
        $saverow['last_name'] = $request->last_name;
        $saverow['mobile'] = $request->mobile;  
        $saverow['email'] = $request->email; 
        $saverow['password'] = $request->password; 
        $this->form_validation->set_data($saverow);
        $this->form_validation->set_rules('first_name', 'First Name', 'trim|required|alpha');
        $this->form_validation->set_rules('last_name', 'Last Name', 'trim|required|alpha');
        $this->form_validation->set_rules('mobile', 'mobile', 'trim|required|numeric|is_unique[delapp_drivers.mobile]|min_length[10]|max_length[10])');
        $this->form_validation->set_rules('email', 'Email', 'trim|required|valid_email');
        $this->form_validation->set_rules('password', 'Password', 'trim|required|min_length[8]|max_length[8]');

        if($this->form_validation->run() !== FALSE){ 
            if(!empty($_FILES['identity_front_img']['name']) && !empty($_FILES['identity_back_img']['name']) && !empty($_FILES['profile']['name'])){
               
                $img = $this->upload->data();   
                $extension1 =  pathinfo($_FILES['identity_front_img']['name'],PATHINFO_EXTENSION);
                $extension2 =  pathinfo($_FILES['identity_back_img']['name'],PATHINFO_EXTENSION);
                $extension3 =  pathinfo($_FILES['profile']['name'],PATHINFO_EXTENSION);    
                $filename1 =   '-'.strtolower(str_replace(' ','-',$_FILES['identity_front_img']['name']));
                $filename2 =   '-'.strtolower(str_replace(' ','-',$_FILES['identity_back_img']['name']));
                $filename3 =   '-'.strtolower(str_replace(' ','-',$_FILES['profile']['name']));
                $fileContent = file_get_contents($_FILES["identity_front_img"]["tmp_name"]);
                $fileContent = file_get_contents($_FILES["identity_back_img"]["tmp_name"]);
                $fileContent = file_get_contents($_FILES["profile"]["tmp_name"]);
                $Path1 = rand(1000,9999).time(). $filename1 ;
                $Path2 = rand(1000,9999).time(). $filename2 ;
                $Path3 = rand(1000,9999).time(). $filename3 ;
                $status=CloudFileUpload($Path1,$fileContent);
                $status=CloudFileUpload($Path2,$fileContent);
                $status=CloudFileUpload($Path3,$fileContent);
                $saverow['identity_front_img'] = $Path1;
                $saverow['identity_back_img'] = $Path2;
                $saverow['profile'] = $Path3;
                $saverow['password'] = md5($request->password);
                $access_token = uniqid().md5(time());
                $saverow['access_token']=$access_token;
                $this->db->insert('delapp_drivers', $saverow);
                $insertId = $this->db->insert_id();   
                if($insertId){
                    $vehicle['driver_id'] = $insertId;
                    $data = ['access_token'=>$access_token,'user_id'=>$insertId];
                    $this->db->insert('delapp_vehicles', $vehicle);
                    $response = ['code'=>200,'status'=>'success','message'=>'Data Inserted','data'=>$data]; 
                }       
            }else{
                $response=["code"=>200,'status'=>'fail','message'=>"All Images are required"]; 
            }
        }else{
            $error = validation_errors();
            if(form_error('first_name')){
                $error=form_error('first_name');
            }elseif(form_error('last_name')){
                $error=form_error('last_name');
            }elseif(form_error('email')){
                $error=form_error('email');
            }elseif(form_error('phone')){
                $error=form_error('phone');
            }elseif(form_error('password')){
                $error=form_error('password');
            }
            $response=["code"=>200,'status'=>'fail','message'=>strip_tags($error)];  
        }
        return $response;
    }
    //Registration step2
    public function registerStep2($request=[],$response=[])
    {        
            $token_check = verifyToken();
            if($token_check){
            $saverow['vehicle_name'] = $request->vehicle_name;
            $saverow['vehicle_model_no'] = $request->vehicle_model_no;
            $saverow['vehicle_plate_no'] = $request->vehicle_plate_no;
            $saverow['vehicle_reg_no'] = $request->vehicle_reg_no; 
            $saverow['driver_id'] =$request->user_id;  
            $this->form_validation->set_rules('vehicle_name','Vehicle Name','trim|required');
            $this->form_validation->set_rules('vehicle_model_no' ,'Vehicle Model Number','trim|required');
            $this->form_validation->set_rules('vehicle_plate_no', 'Vehicle Plate Number' , 'trim|required');
            $this->form_validation->set_rules('vehicle_reg_no', 'Vehicle Registration Number' ,'trim|required');
            if($this->form_validation->run() !== FALSE){ 
        
            if(!empty($_FILES['vehicle_front_img']['name']) && !empty($_FILES['vehicle_back_img']['name'])){
                $img = $this->upload->data();   
                $extension1 =  pathinfo($_FILES['vehicle_front_img']['name'],PATHINFO_EXTENSION);
                $extension2 =  pathinfo($_FILES['vehicle_back_img']['name'],PATHINFO_EXTENSION);
                $filename1 =   '-'.strtolower(str_replace(' ','-',$_FILES['vehicle_front_img']['name']));
                $filename2 =   '-'.strtolower(str_replace(' ','-',$_FILES['vehicle_back_img']['name'])); 
                $fileContent = file_get_contents($_FILES["vehicle_front_img"]["tmp_name"]);
                $fileContent = file_get_contents($_FILES["vehicle_back_img"]["tmp_name"]);
                $Path1 = rand(1000,9999).time().$filename1 ;
                $Path2 = rand(1000,9999).time().$filename2 ;
                $status = CloudFileUpload($Path1,$fileContent);
                $status = CloudFileUpload($Path2,$fileContent);
                $saverow['vehicle_front_img'] = $Path1;
                $saverow['vehicle_back_img'] = $Path2;
                if($this->db->insert('delapp_vehicles', $saverow)){
                    $this->db->update('delapp_drivers',['registration_status'=>"2"],['id'=>$request->user_id]); 
                    $response = ['code'=>200,'status'=>'success','message'=>'Data Inserted','user_id'=>$request->user_id]; 
                } 
             }else{
                 $response = ['code'=>200, 'status'=>'fail','message'=>'All images are required'];
            }     
            }else{
                $error = validation_errors();
                if(form_error('vehicle_name')){
                    $error =form_error('vehicle_name');
                }elseif(form_error('vehicle_model_no')){
                    $error = form_error('vehicle_model_no');  
                }elseif(form_error('vehicle_plate_no')){
                    $error = form_error('vehicle_plate_no');
                }elseif(form_error('vehicle_reg_no')){
                    $error = form_error('vehicle_reg_no');
                }
                $response = ["code"=>200,'status'=>'fail','message'=>strip_tags($error)];  
            }
           }else{
                $response = ['code'=>200 , 'status'=>'fail' , 'message'=>'Invalid Token'];
            }
        return $response;
    }
    //Registration step3
    public function registerStep3($request=[],$response=[])
    {
        $token_check = verifyToken();
        if($token_check){
        if(!empty($_FILES['driving_license']['name']) && !empty($_FILES['vehicle_insurance']['name']) && !empty($_FILES['vehicle_registration']['name']) && !empty($_FILES['national_id']['name'])){
            $img = $this->upload->data();      
            $extension =  pathinfo($_FILES['driving_license']['name'],PATHINFO_EXTENSION);
            $filename1=   '-'.strtolower(str_replace(' ','-',$_FILES['driving_license']['name']));
            $filename2=   '-'.strtolower(str_replace(' ','-',$_FILES['vehicle_insurance']['name']));
            $filename3=   '-'.strtolower(str_replace(' ','-',$_FILES['vehicle_registration']['name']));
            $filename4=   '-'.strtolower(str_replace(' ','-',$_FILES['national_id']['name']));
            $fileContent = file_get_contents($_FILES["driving_license"]["tmp_name"]);
            $fileContent = file_get_contents($_FILES["vehicle_insurance"]["tmp_name"]);
            $fileContent = file_get_contents($_FILES["vehicle_registration"]["tmp_name"]);
            $fileContent = file_get_contents($_FILES["national_id"]["tmp_name"]);
            $Path1 = rand(1000,9999).time(). $filename1 ;
            $Path2 = rand(1000,9999).time(). $filename2 ;
            $Path3 = rand(1000,9999).time(). $filename3 ;
            $Path4 = rand(1000,9999).time(). $filename4 ;
            $status=CloudFileUpload($Path1,$fileContent);
            $status=CloudFileUpload($Path2,$fileContent);
            $status=CloudFileUpload($Path3,$fileContent);
            $status=CloudFileUpload($Path4,$fileContent);
            $save['driving_license'] = $filename1;
            $save['vehicle_insurance'] = $filename2;
            $save['vehicle_registration'] = $filename3;
            $save['national_id'] = $filename4;
            $save['id'] =$request->user_id; 
            $save['registration_status'] =$request->registration_status;    
            if(!$status){
                $response = ['code'=>200 , 'status'=>'fail' , 'message'=>'Image Updation fail']; 
            }
        else{
            $update = $this->common->update('delapp_drivers', $save , ['id'=>$request->user_id]);
            $data =   $this->common->record('delapp_drivers',array('id'=>$request->user_id));
            // $return = [
            //     'driving_license'=> UPLOADS_URL."driving_license/".$data->driving_license,
            //     'vehicle_insurance'=>UPLOADS_URL."vehicle_insurance/".$data->vehicle_insurance,
            //     'vehicle_registration'=>UPLOADS_URL."vehicle_registration/".$data->vehicle_registration,
            //     'national_id'=>UPLOADS_URL."national_id/".$data->national_id
            // ];
            $response = ['code'=>200,'status'=>'success','message'=>'Registration done sucessfully']; 
            }
        }else{
            $response = ['code'=>200,'status'=>'success','message'=>'All images are Required']; 
        }
        }else{
            $response = ['code'=>200 , 'status'=>'fail' , 'message'=>'Invalid Token'];
        }
        return $response;
   } 
   //Update User Profile(with images)
   public function update_profile($request=[],$response=[]){
    $token_check = verifyToken();
    if($token_check){
       $saverow['first_name'] = $request->first_name;
       $saverow['last_name'] = $request->last_name;
       $saverow['email'] = $request->email;
       $saverow['mobile'] =  $request->mobile;
       $this->form_validation->set_data($saverow);
       $this->form_validation->set_rules('first_name' , 'First Name' ,'required');
       $this->form_validation->set_rules('last_name' , 'Last Name' , 'required');
       $this->form_validation->set_rules('email' , 'Email' , 'required|valid_email');
       $this->form_validation->set_rules('mobile' ,'Mobile' , 'required|numeric|exact_length[10])');
       if($this->form_validation->run() !== FALSE){
           if(!empty($_FILES['profile']['name'])){
            $img = $this->upload->data();      
            $extension =  pathinfo($_FILES['profile']['name'],PATHINFO_EXTENSION);
            $filename=   '-'.strtolower(str_replace(' ','-',$_FILES['profile']['name']));
            $fileContent = file_get_contents($_FILES["profile"]["tmp_name"]);
            $Path = rand(1000,9999).time().$filename ;
            $status = CloudFileUpload($Path,$fileContent);
            $saverow['profile'] = $Path;
           }
            $update  = $this->common->update('delapp_drivers' ,$saverow , ['id'=>$request->id]);
           if($update){
            $response = ['code'=>200 , 'status'=>'success' , 'message'=>'Profile Updated Successfully'];
           }else{
            $response =  ['code'=>200 , 'status'=>'fail' ,'message'=>'fail To Update Profile']; 
           }
       }else{
           $error = validation_errors();
           if(form_error('first_name')){
           $error = form_error('first_name');  
           }elseif(form_error('last_name')){
           $error = form_error('last_name');
           }elseif(form_error('email')){
           $error = form_error('email');
           }elseif(form_error('mobile')){
           $error = form_error('mobile');
           }
           $response = ['code'=>200, 'status'=>'fail' , 'message'=>strip_tags($error)];
        }
      }else{
           $response = ['code'=>200, 'status'=>'fail' , 'message'=>'Invalid Token']; 
      }
           return $response;
    }
     //forgot password
     public function forgot_password($request=[],$response=[]){
        $user = $this->common->record('delapp_drivers' ,['mobile'=>$request->mobile]);
            if($user){
                $save['otp'] = rand(100000,999999);
                $message = urlencode("Your Verification Code Is" .$save['otp']);
                SendOtpMessage($message,$user->mobile,$save['otp']);
                $this->common->update("delapp_drivers",$save,['id'=>$user->id]);
                $response = ['code'=>200 , 'status'=>'success' , 'message'=>'OTP Send successfully'];
            }else{
                $response = ['code'=>200 , 'status'=>'fail' , 'message'=>'Mobile Number is Not Registered'];
            }
           return $response;
     }

     //Reset Password
     public function reset_password($request=[],$response=[]){
        $saverow['password'] = $request->password;
        $this->form_validation->set_data($saverow);
        $this->form_validation->set_rules('password' , 'Password' ,'required|min_length[8]|max_length[8]');
        if($this->form_validation->run() !== FALSE){
                $save['password'] = md5($request->password);
                $update = $this->common->update('delapp_drivers' , $save, ['id'=>$request->id]);
                if($update){
                    $response = ['code'=>200 , 'status'=>'success', 'message'=>'Password Reset successfully'];
                }else{
                    $response = ['code'=>200 , 'status'=>'failed' , 'message'=>'fail To Reset Password'];
                }
        }else{
                $error = validation_errors();
                if(form_error('password')){
                $error = form_error('password');
                }
                $response = ['code'=>200 , 'status'=>'fail' , 'message'=>strip_tags($error)];
        }
            return $response;
     }

     //OTP Verification
     public function verify_otp($request=[],$response=[]){
        $user = $this->common->record('delapp_drivers' ,['mobile'=>$request->mobile]);
        if($user){
            if($user->otp==$request->otp){
                $response = ['code'=>200 , 'status'=>'success' , 'message'=>'OTP Verified ','data'=> $user];
            }else{
                $response = ['code'=>200 , 'status'=>'fail' , 'message'=>'Invalid OTP'];
            }       
        }else{
                $response = ['code'=>200 , 'status'=>'fail' , 'message'=>'Invalid User'];
        }
        return $response;
    }
   //Order Detail
    public function order_detail($request=[],$response=[]){ 
            $token_check = verifyToken();
            if($token_check){
                if(!empty($request->order_id)){
                    $data = $this->common->checkOrderId($token_check->id);
                    if($data->order_id == $request->order_id){
                $data = $this->common->order_detail($token_check->id,$request->order_id);
                $return = [
                        'order_id'=>$data->order_id,
                        'item_name'=>$data->item_name,
                        'amount'=>$data->paid_amount,
                        'qyt'=>$data->qyt,
                        'user_name' =>$data->user_name,
                        'mobile' =>$data->mobile,
                        'total_amount' => $data->paid_amount,
                        'date'=> date('d M g:i A' , strtotime($data->created_at)),
                        'status'=>$data->status,
                        'gift'=>$data->gift,
                        'urgent'=>$data->urgent,
                        'delicate'=>$data->delicate
                ];
                $response = ['code'=>200 , 'status'=>'success' ,'message'=>'Record Found' , 'data'=>$return];
                }else{
                        $response = ['code'=>200 , 'status'=>'fail' , 'message'=>'Invalid Order Id'];       
                }
                }else{
                        $response = ['code'=>200 , 'status'=>'fail' ,'message'=>'Record Not Found'];
                }
                }else{
                    $response = ['code'=>200 , 'status'=>'fail' , 'message'=>'Invalid Token'];
                }
            return $response;
    } 
    //Order History Detail
    public function order_history($request=[],$response=[]){
        $token_check = verifyToken();
        if($token_check){
            $id = $token_check->id;
            $config = getPagination();
            $config["page_no"]=5;
            $config['total_rows'] = $this->common->ActiveOrderCount($id);
            $this->pagination->initialize($config);
            $page = isset($_GET['page_no']) ? ($_GET['page_no'] - 1) * $config["page_no"] : 0;
            $count =   $config['total_rows'];
                if(!empty($id)){
                    $data = $this->common->order_history($config["page_no"], $page,$id);
                }
                if(!$data){
                    $response = ['code'=>200 , 'status'=>'fail' , 'message'=>'Record Not Found'];
                
                }else{
                    $response = ['code'=>200 , 'status'=>'success' ,'message'=>'Record Found' , 'count'=>  $count, 'data'=>$data];
                }
      
            }else{
                $response = ['code'=>200 , 'status'=>'fail' , 'message'=>'Invalid Token'];
            }
            return $response;    
    }
      //Order status update by delivery boy
      public function order_status($request=[],$response=[]){ 
        $token_check = verifyToken();
       if($token_check){
           $data =$this->common->SingleActiveOrder($token_check->id); 
           $saverow['status'] = $request->status;
           $save['status'] = $request->status;
           $save['driver_id'] = $token_check->id;
           $save['order_id'] = $data->order_id;
           $save['activity_type'] = "Status Change";
           $save['comment'] = "Status is change by delivery boy";
           $this->form_validation->set_data($saverow);
           $this->form_validation->set_rules('status' , 'Status' ,'required');

           if($this->form_validation->run() !== FALSE){
               if(!empty($request->order_id)){
                   if($request->order_id ==  $data->order_id){
                   $update  = $this->common->update('delapp_deliveries' ,$saverow , ['order_id'=>$request->order_id]);
                   $update_order  = $this->common->save('delapp_activity' ,$save );
                   $users =$this->common->record('delapp_deliveries' ,array('order_id'=>$request->order_id)); 
                   if($update &&  $update_order){
                               if($users->status==1){
                                   $response = ['code'=>200 , 'status'=>'success', 'message'=>'Parcel is Shipped'];
                               }elseif($users->status==2){
                                   $response = ['code'=>200 , 'status'=>'success', 'message'=>'Parcel is On the way'];
                               }elseif($users->status==3){
                                   $response = ['code'=>200 , 'status'=>'success', 'message'=>'Parcel is Delivered'];
                               }
                   }else{
                       $response = ['code'=>200 , 'status'=>'fail' , 'message'=>'fail to update'];
                   }
                   }else{
                   $response = ['code'=>200 , 'status'=>'fail' , 'message'=>'Invalid Order Id'];
                   }
               }else{
                   $response = ['code'=>200 , 'status'=>'fail' , 'message'=>'Order Id Not Found'];
               }            
           }else{
               $error = validation_errors();
               if(form_error('status')){
               $error = form_error('status');  
               }
               $response = ['code'=>200, 'status'=>'fail' , 'message'=>strip_tags($error)];
           }
       }else{
           $response = ['code'=>200 , 'status'=>'fail' , 'message'=>'Invalid Token'];
       }
       return $response;
   }    
    //Update Fcm Token
     public function updateFcmToken($request=[],$response=[]){
        $token_check =  verifyToken(); 
        if($token_check){
            $saverow['fcm_token'] = $request->fcm_token;
            $this->form_validation->set_data($saverow);
            $this->form_validation->set_rules('fcm_token' , 'fcm_token' ,'required');
            if($this->form_validation->run() !== FALSE){
                    $update  = $this->common->update('delapp_drivers' ,$saverow , ['id'=>$request->id]);
                    $data =   $this->common->record('delapp_drivers',array('id'=>$request->id));
                    $response = ['code'=>200 , 'status'=>'success' ,'message'=>'Token Update Successfully'];
              }
        }else{
                $response = ['code'=>200 , 'status'=>'fail' , 'message'=>'Invalid Token']; 
        }
        return $response;
    }
    //Active Order List assigned by admin
    public function active_order($request=[],$response=[]){
        $token_check = verifyToken();
        if($token_check){
            $config = getPagination();
            $config["page_no"]=5;
            $config['total_rows'] = $this->common->ActiveOrderCount($token_check->id);
            $this->pagination->initialize($config);
            $page = isset($_GET['page_no']) ? ($_GET['page_no'] - 1) * $config["page_no"] : 0;
            $count =   $config['total_rows'];
            if(!empty($token_check->id)){
                $data = $this->common->ActiveOrder($config["page_no"], $page,$token_check->id);
                if(!$data){
                    $response = ['code'=>200 , 'status'=>'fail' , 'message'=>'Record Not Found'];               
                }else{
                    $response = ['code'=>200 , 'status'=>'success' ,'message'=>'Record Found' , 'count'=>  $count, 'data'=>$data];
                }
            }
        }else{
            $response = ['code'=>200 , 'status'=>'fail' , 'message'=>'Invalid Token'];
        }
        return $response;      
    }
     //Accept and Reject order 
     public function active_order_status($request=[],$response=[]){
        $token_check = verifyToken();
        if($token_check){
            $saverow['order_status'] = $request->order_status;
            $data =$this->common->SingleActiveOrder($token_check->id); 
            $save['order_status'] = $request->order_status;
            $save['driver_id'] = $token_check->id;
            $save['order_id'] = $data->order_id;
            $save['activity_type'] = "Order Status Change";
            $save['comment'] = "Order Status Change by delivery boy";
            $this->form_validation->set_data($saverow);
            $this->form_validation->set_rules('order_status' , 'Order Status' ,'required');
            if($this->form_validation->run() !== FALSE){
                if(!empty($request->order_id)){
                    $update  = $this->common->update('delapp_deliveries' ,$saverow , ['order_id'=>$request->order_id]);
                    $update_order  = $this->common->save('delapp_activity' ,$save );
                    $users =$this->common->record('delapp_deliveries' ,array('order_id'=>$request->order_id)); 
                    if($update && $update_order){
                            if($users->order_status==1){
                                $response = ['code'=>200 , 'status'=>'success', 'message'=>'Order is Accepted'];
                            }elseif($users->order_status==2){
                                $response = ['code'=>200 , 'status'=>'success', 'message'=>'Order is Rejected'];
                            }
                    }else{
                    $response = ['code'=>200 , 'status'=>'fail' , 'message'=>'fail to update'];
                    }
                }else{
                    $response = ['code'=>200 , 'status'=>'success', 'message'=>'Order is Null'];
                }           
            }else{
                $error = validation_errors();
                if(form_error('order_status')){
                $error = form_error('order_status');  
                }
                $response = ['code'=>200, 'status'=>'fail' , 'message'=>strip_tags($error)];
            }
        }else{
            $response = ['code'=>200 , 'status'=>'fail' , 'message'=>'Invalid Token'];
        }
        return $response;       
    }
     //Notification List  
    public function notificationList($request=[],$response=[]){
        $token_check = verifyToken();
        if($token_check){
            $id = $token_check->id;
            $config = getPagination();
            $config["page_no"]=5;
            $config['total_rows'] = $this->common->ActiveOrderCount($id);
            $this->pagination->initialize($config);
            $page = isset($_GET['page_no']) ? ($_GET['page_no'] - 1) * $config["page_no"] : 0;
            $count =   $config['total_rows'];
              if(!empty($id)){
                $data = $this->common->notificationlist($config["page_no"], $page,$id);
              }
            if(!$data){
                $response = ['code'=>200 , 'status'=>'fail' , 'message'=>'Record Not Found']; 
            }else{
                $response = ['code'=>200 , 'status'=>'success' ,'message'=>'Record Found' , 'count'=>  $count, 'data'=>$data];
          }
        }else{
            $response = ['code'=>200 , 'status'=>'fail' , 'message'=>'Invalid Token'];
        }
        return $response;  
    }
    // complete order and total earning of delivery boy
    public function complete_orders($request=[],$response=[]){
        $token_check = verifyToken();
        if($token_check){
            $data = $this->common->completeOrder($token_check->id);
                if($data){
                    $response = ['code'=>200 , 'status'=>'success' ,'message'=>'Record Found' , 'data'=>$data];
                }else{
                    $response = ['code'=>200 , 'status'=>'fail' , 'message'=>'Record Not Found'];
                }
        }else{
            $response = ['code'=>200 , 'status'=>'fail' , 'message'=>'Invalid Token'];
        }
        return $response;       
    }
     //logout 
    public function logout($request=[],$response=[]){
         $token_check = verifyToken();
        if($token_check){
        $this->common->deleteField($token_check->fcm_token); 
        $data = $this->common->record('delapp_drivers',['id'=>$token_check->id]);
            if($data->fcm_token == ''){
                $response = ['code'=>200 , 'status'=>'success' ,'message'=>'Logout Successfully'];
            }else{
                $response = ['code'=>200 , 'status'=>'fail' , 'message'=>'Something Went Wrong'];
            }
            }else{
                $response = ['code'=>200 , 'status'=>'fail' , 'message'=>'Invalid Token'];
            }
        return $response;
    }
     
}