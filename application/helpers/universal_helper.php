<?php defined('BASEPATH') OR exit('No direct script access allowed');


if(!function_exists('getPagination')){
  function getPagination()
  {
    $pagiconfig=[];
    $pagiconfig['use_page_numbers'] = TRUE;
    $pagiconfig['page_query_string'] = TRUE;
    $pagiconfig["per_page"] = 10;  
    $pagiconfig['num_links'] = 5;

    $pagiconfig['full_tag_open'] = '<ul class="pagination">';
    $pagiconfig['full_tag_close'] = '</ul>';
    $pagiconfig['attributes'] = ['class' => 'page-link'];
    $pagiconfig['first_link'] = 'First';
    $pagiconfig['last_link'] = 'Last';
    $pagiconfig['first_tag_open'] = '<li class="page-item">';
    $pagiconfig['first_tag_close'] = '</li>';
    $pagiconfig['prev_link'] = '&laquo';
    $pagiconfig['prev_tag_open'] = '<li class="page-item">';
    $pagiconfig['prev_tag_close'] = '</li>';
    $pagiconfig['next_link'] = '&raquo';
    $pagiconfig['next_tag_open'] = '<li class="page-item">';
    $pagiconfig['next_tag_close'] = '</li>';
    $pagiconfig['last_tag_open'] = '<li class="page-item">';
    $pagiconfig['last_tag_close'] = '</li>';
    $pagiconfig['cur_tag_open'] = '<li class="page-item active"><a href="#" class="page-link">';
    $pagiconfig['cur_tag_close'] = '<span class="sr-only">(current)</span></a></li>';
    $pagiconfig['num_tag_open'] = '<li class="page-item">';
    $pagiconfig['num_tag_close'] = '</li>';

    return $pagiconfig;

  }
}
if(!function_exists('cloud_bucket')){
  function cloud_bucket(){
    //print_r(APPPATH);die;
    //print_r(base_url());die;
    //require_once base_url().'/application/libraries/s3-bucket/autoload.php';
    require_once APPPATH.'libraries/s3-bucket/autoload.php';
    $privateKeyFileContent = '{
      "type": "service_account",
      "project_id": "texcutive-212710",
      "private_key_id": "3c9e1d9f0a00ea89bc96d85f0968add14575e6f0",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDH/fBa+3tj6+YD\nxkDO4Pf5eUa0f30i4kzKRUFeK/qN8w8GuAw0yExs3cYlIW+sUGBQIo8oHf6xQ1Or\nsVi/qugSGOB/Y8lvnHOdVy5yU+5IiXhz6IMf5PniNiyi6qWWAfpgK9iDdUaRWBZU\nLRju6GKAw6/BgQFF8nuQdWzF6h+wGt0IgLbh/oBctvcAkV0Dk+h7HiVsoEi0B7az\n8yyJJ7VpqUm6HccH4bkInWeBJ9Z+44s103++0JeQY8JWvRmR5Z9Q9ycmdiWjUy9F\n0AA9xsOr5HdmuE6348ENkFKuG4nkZUE/sZ6lb9CYsygZg+DRJ/IIiXRpLQuTAmKX\ne11fWV7RAgMBAAECggEAAwzQ5xpRwe7dla4m2+Dbd08NsIAHQQpxgF45Bn4mNpb/\n4irZaM6rN7fUJ0nQwbCCH4a/Zy257isoMgSk5VtuaaQ+fELh1hVtP/eN6kl0Z1/N\nWfswUMK1uuj3mk540wZZsrDIfwzBVEMjKAp+CFq78dnKKunUQqRVlRjtXUFaVV20\nnALAaWIHyYw0jBgiQ7IPIbwZNAp60PcrKrtp0aQjjrqx2juIW3h+XK4SIJKD6HKk\nDTCeHniDN597+nvhlUgnpJI14Py9amq9Fkd9T99wZc0puKL1zEx8wjjaNCen5Ie+\nvw0Du/solj7M5AY0sVodzNWpW91x4sod3+QH1MRHBwKBgQDrgpK+ph9CueD0Txpj\nIhZDsf/0NGoG9YcN+WLNy0ZoLq9zg5Wa8s9bkg+9UpoztvOR/aRamD2PR3c9TBG1\nhjT/8us//hEJv9XqxJRBWgo5NsvWC9ZLHkejG3ADg6iVwGpmnmimuFMeGw35Fwwi\nRNRKgnI6SPkO/mvUFip83G1J+wKBgQDZZEjJdL9PKS1TbMarCX3xrUTiKxo/UzBU\nO2A0d3SnCXqFKseKdvNqm/ccYNiO8Mb+Qd+qkh1LGX0T+CLbfNZrsx5bY6h+14oz\nd7yuye5qosyuuZqSMnH4HP/My3YkoRArfZ3NSDFtGs8GlhnRW9bhjKG+Jys2yh5D\nM5r4IIqMowKBgQCbkW4T57JApn51g4c/srWYVA1qJ/Fd1XQ4A+ODY2KH0UbufB4n\n83qL14j0G4tm29Q7PJwDiAsqCSA36nbMPPHnnHRPmilxEjphUSdJoAuezZaKNtmA\nV2kk0iwE9kQ3X5opXTxt3NZyzZZGUzYdsO+2pEKGQ8vZXrClsVqxjf3XXwKBgHXv\ng9VW8tqdOivCHV14vsy39WDFhW3JUbTAqYaNL8nWyJMqDCrAMXoqtrq8h3+0fCA/\n2HmO3zl40HRe73onlaPD/roRrL1zbVRSpxgkEKXlQCmiI4sgttel09hkoOlqP314\nnn1ZpwbLvniSQdtkeYTPaIfic/07VYOboXzvGnsFAoGBAMzkSmYaUOAScaS/j/Zn\n9hQq296/von5CW+hlgAyCjg3iXzlB+W4ufBKrJgZ03J+adhKuO4/Bk6oIsQsqPYU\nR62U37Ptjewod8O9vJX9lb6WfrTF1+RgrM12s7I9HpHUvAQlF2ivjuhtXxgu91TF\nSrBsdomzQeO0XdkdeMYafJE1\n-----END PRIVATE KEY-----\n",
      "client_email": "texcutiveapp@texcutive-212710.iam.gserviceaccount.com",
      "client_id": "102636670601100785784",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://accounts.google.com/o/oauth2/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/texcutiveapp@texcutive-212710.iam.gserviceaccount.com"
    }';
  
    $storage=new Google\Cloud\Storage\StorageClient([
        'keyFile' => json_decode($privateKeyFileContent, true)
    ]);
    return $storage->bucket('texcutiveapp');
  }
}
if(!function_exists('upload_file')){
  function upload_file($filePath,$fileContent){
      $bucket = cloud_bucket();
      $storageObject = $bucket->upload($fileContent,['name' => 'uploads/mapp/'.$filePath]);
      if($storageObject){
        return true;
      }else{
        return false;
      }
  }
}

if(!function_exists('CloudFileUpload')){
  function CloudFileUpload($filePath,$fileContent){
      $bucket = cloud_bucket();
      $storageObject = $bucket->upload($fileContent,['name' => 'uploads/'.$filePath]);
      if($storageObject){
        return true;
      }else{
        return false;
      }
  }
}
if(!function_exists('delete_file')){
	function delete_file($objectName){
		$bucket = cloud_bucket();
		$object = $bucket->object($objectName);
		if($object->exists()){
			$object->delete();
		}
		return true;
	}
}

if(!function_exists('public_path')){
	function public_path($path=""){
		return 'https://storage.googleapis.com/texcutiveapp/uploads/mapp/'.$path;
	}
}
if(!function_exists('response')){
  function response($response){
      $ci =& get_instance();
      return $ci->output
      ->set_content_type('application/json')
      ->set_status_header(200)
      ->set_output(json_encode($response));
  }
}


if(!function_exists('sendPushNotification')){
	function sendPushNotification($fields,$key) {
        $url = 'https://fcm.googleapis.com/fcm/send';
        $headers = array(
            'Authorization: key=' . $key,
            'Content-Type: application/json'
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));
        $result = curl_exec($ch);
        if ($result === FALSE) {
            die('Curl failed: ' . curl_error($ch));
        }
        curl_close($ch);
        return $result;
    }
}   
if(!function_exists('Notification')){
    function Notification($fcm_token, $data) 
    {            
    	$fields = array(
                'to' => $fcm_token,
                'data' => $data,
        );
        $key=MAIN_APP_FIREBASE_API_KEY;
    	return sendPushNotification($fields,$key);
    }
}
if(!function_exists('RetailerLockTopicNotification')){
    function RetailerLockTopicNotification($topic, $data) 
    {            
    	$fields = array(
                'to' => "/topics/".$topic,
                'data' => $data,
        );
        $key="AAAAJqGHUUs:APA91bGWsvb2aVHpMFztxgn2n1otCCVJC3jXQXOKClmngWa2c0iEWtKn3M5lw1slx0vYKkuBJTpZP-vpTZcb3OWnPyrkktSd9fCe5Kr5l-WGy19W8jpDfuq35HWFo5xoeLKzzWr-vmKG";
    	return sendPushNotification($fields,$key);
    }
}
if(!function_exists('RetailerLockNotification')){
    function RetailerLockNotification($fcm_token, $data) 
    {            
    	$fields = array(
                'to' => $fcm_token,
                'data' => $data,
        );
        $key="AAAAJqGHUUs:APA91bGWsvb2aVHpMFztxgn2n1otCCVJC3jXQXOKClmngWa2c0iEWtKn3M5lw1slx0vYKkuBJTpZP-vpTZcb3OWnPyrkktSd9fCe5Kr5l-WGy19W8jpDfuq35HWFo5xoeLKzzWr-vmKG";
    	return sendPushNotification($fields,$key);
    }
}
if(!function_exists('SendTxnMessage')){
    function SendTxnMessage($message,$mobileNumber){

        $url="https://api.msg91.com/api/sendhttp.php?authkey=336774AluBToL55f1ab022P1&mobiles=".$mobileNumber."&country=91&message=".urlencode($message)."&sender=TEXCUT&route=4";
        $data=file_get_contents($url);
	    return true;
	}
}

if(!function_exists('SendOtpMessage')){
  function SendOtpMessage($message,$mobileNumber,$otp=""){
  $message = urlencode($message);
      $mobileNumber =$mobileNumber;
      if(empty($otp))$otp=rand(100000,999999);
     // $res = file_get_contents("http://sms.click4bulksms.in/sendsms?uname=trademall&pwd=9408693265&senderid=TRADEM&to=$mobileNumber&msg=$message&route=T");
     $url="https://api.msg91.com/api/otp.php?authkey=336774AluBToL55f1ab022P1&mobile=91$mobileNumber&message=".urlencode($message.$otp)."&sender=TEXCUT&otp=".$otp;
     $data=file_get_contents($url);
    //$res=json_decode($res);
      //if($res->status=='success'){
      if(!empty($res)){
  return true;
  }else{
  return false;
  }

}
}
