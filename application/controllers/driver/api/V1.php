<?php
defined('BASEPATH') OR exit('No direct script access allowed');
date_default_timezone_set("Asia/Calcutta"); 

class V1 extends CI_Controller
{
	private $modelPath='driver/api/v1/';
	private $request=[];
	public function __construct() {
		parent::__construct();
		$this->load->helper('api_helper');
        $this->request=params();
        $this->load->model('common');
		$this->load->library('form_validation');
    }

    //login
    public function Login(){	 
	    if($this->input->server('REQUEST_METHOD')=='POST'){
	     	$this->load->model($this->modelPath.'auth');
			 $request = (object)$this->input->post();
			 $response = [];
             $result = $this->auth->login($request,$response);
			 return  response($result);

		}else{
			return $this->invalidMethod();
		}	    
	}
    //Registration Step1
    public function registerStep1(){	 
	    if($this->input->server('REQUEST_METHOD')=='POST'){
	        $this->load->model($this->modelPath.'auth');
		    $request = (object)$this->input->post();
		    $response = [];
			$result =  $this->auth->registerStep1($request,$response);
			return  response($result);
		}else{
			return $this->invalidMethod();
		}	    
	}
	//Registration Step2
	public function registerStep2(){	 
	    if($this->input->server('REQUEST_METHOD')=='POST'){
	        $this->load->model($this->modelPath.'auth');
		    $request = (object)$this->input->post();
		    $response = [];
			$result =  $this->auth->registerStep2($request,$response);
			return  response($result);
		}else{
			return $this->invalidMethod();
		}	    
	}
	//Registration step3
	public function registerStep3(){	 
	    if($this->input->server('REQUEST_METHOD')=='POST'){
	        $this->load->model($this->modelPath.'auth');
		    $request = (object)$this->input->post();
		    $response = [];
			$result =  $this->auth->registerStep3($request,$response);
			return  response($result);
		}else{
			return $this->invalidMethod();
		}	    
	}
	//Forgot Password
	public function forgot_password(){
		if($this->input->server('REQUEST_METHOD') == 'POST'){
			$this->load->model($this->modelPath.'auth');
			$request = (object)$this->input->post();
			$response = [];
			$result = $this->auth->forgot_password($request,$response);
			return  response($result);
		}else{
			return $this->invalidMethod();
		}
	}
	//Reset Password
    public function reset_password(){
	    if($this->input->server('REQUEST_METHOD') == 'POST'){
			$this->load->model($this->modelPath.'auth');
			$request = (object)$this->input->post();
			$response = [];
			$result = $this->auth->reset_password($request,$response);
			return  response($result);
		}else{
			return invalidMethod();
		}
    }
    //Verify Otp
    public function verify_otp(){
	    if($this->input->server('REQUEST_METHOD') == 'POST'){
			$this->load->model($this->modelPath.'auth');
			$request = (object)$this->input->post();
			$response = [];
			$result = $this->auth->verify_otp($request,$response);
			return  response($result);
		}else{
			return invalidMethod();
		}
    }
	//Update Profile
    public function update_profile(){
	    if($this->input->server('REQUEST_METHOD') == 'POST'){
		   $this->load->model($this->modelPath.'auth');
		   $request = (object)$this->input->post();
		   $response = [];
		   $result = $this->auth->update_profile($request,$response);
		   return  response($result);
	   }else{
		   return invalidMethod();
	    }
   }
	 //Order Detail
	public function order_detail(){
		 if($this->input->server('REQUEST_METHOD') == "POST"){
		    $this->load->model($this->modelPath.'auth');
			$request = (object)$this->input->post();
			$response = [];
			$result = $this->auth->order_detail($request,$response);
			return  response($result);
	    }else{
			return invalidMethod();
		}	 
    }
	//Order History
	public function order_history(){
		if($this->input->server('REQUEST_METHOD') == "GET"){
		   $this->load->model($this->modelPath.'auth');
		   $request = (object)$this->input->get();
		   $response = [];
		   $result = $this->auth->order_history($request,$response);
		   return  response($result);
	   }else{
		   return invalidMethod();
	   }	 
   }
	// Order status update by delivery boy
	public function order_status(){
		if($this->input->server('REQUEST_METHOD') == "POST"){
			$this->load->model($this->modelPath.'auth');
			$request = (object)$this->input->post();
			$response = [];
			$result = $this->auth->order_status($request,$response);
			return  response($result);
		}else{
			return invalidMethod();
		}	 
	}
   //Update Fcm Token
    public function updateFcmToken(){
	  if($this->input->server('REQUEST_METHOD') == "POST"){
		 $this->load->model($this->modelPath.'auth');
		 $request = (object)$this->input->post();
		 $response = [];
		 $result = $this->auth->updateFcmToken($request,$response);
		 return response($result);
	  }else{
		return invalidMethod();
	  }
    }
	//Active Order List assigned by admin
    public function active_order(){
		if($this->input->server('REQUEST_METHOD') == "GET"){
		$this->load->model($this->modelPath.'auth');
		$request = (object)$this->input->get();
		$response = [];
		$result = $this->auth->active_order($request,$response);
		return  response($result);
		}else{
			return invalidMethod();
		}	 
	} 
	//Notification List Detail
    public function notificationlist(){
	if($this->input->server('REQUEST_METHOD') == "GET"){
		$this->load->model($this->modelPath.'auth');
		$request = (object)$this->input->post();
		$response = [];
		$result = $this->auth->notificationlist($request,$response);
		return response($result);
	 }else{
		return invalidMethod();
	    }
    }
   //Accept and Reject order
   public function active_order_status(){
		if($this->input->server('REQUEST_METHOD') == "POST"){
		$this->load->model($this->modelPath.'auth');
		$request = (object)$this->input->post();
		$response = [];
		$result = $this->auth->active_order_status($request,$response);
		return  response($result);

		}else{
			return invalidMethod();
		}	 
     }
	//complete order and total earning
	public function complete_orders(){
		if($this->input->server('REQUEST_METHOD') == "GET"){
		$this->load->model($this->modelPath.'auth');
		$request = (object)$this->input->get();
		$response = [];
		$result = $this->auth->complete_orders($request,$response);
		return  response($result);

		}else{
			return invalidMethod();
		}	 
	}
	//Logout
	public function logout(){
		if($this->input->server('REQUEST_METHOD') == "GET"){
		$this->load->model($this->modelPath.'auth');
		$request = (object)$this->input->get();
		$response = [];
		$result = $this->auth->logout($request,$response);
		return  response($result);
		}else{
			return invalidMethod();
		}	 
	}

}