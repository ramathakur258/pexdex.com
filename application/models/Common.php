<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Common extends CI_Model 
{
    public function __construct() 
    {
        parent::__construct();  
        $this->load->database();      
    }
    public function record($table,$where=[],$select="*") {
        $this->db->select($select);
        $this->db->from($table);   
        if(!empty($where)){
            $this->db->where($where);           
        }
        $result=$this->db->get();
        if($result->num_rows() > 0)
        {
           return $result->row();
            
        }else{
           return false;
        }       
    }
    public function records($table,$where=[],$select="*"){
        $this->db->select($select);
        $this->db->from($table);   
        if(!empty($where)){
            $this->db->where($where);           
        }
        $result=$this->db->get();
        if($result->num_rows() > 0)
        {
            return $result->result();
            
        }else{
            return false;
        }    
    }

    public function getdata($data) {
       $this->db->select('*');
        $this->db->from('delapp_drivers');
        $this->db->like('mobile', $data);
        $result=$this->db->get();
        if($result->num_rows() > 0)
        {
            return $result->result();
            
        }else{
            return false;
        }    
    }

    public function GetAllResult($table="",$select="*"){
        if(empty($table)) {echo "table name is empty";die;}
        $this->db->select($select);
        $this->db->from($table);
        $this->db->order_by("created_at","DESC"); 
        $query=$this->db->get();
        if($query->num_rows() > 0){
            return $query->result();
        }else{
            return false;
        }
    }
    public function save($table,$data) {
        $this->db->insert($table,$data);
        return $this->db->insert_id();
           
    }
    public function save_batch($table,$data){
		return  $this->db->insert_batch($table,$data);
	}
    public function update($table,$data,$where=[]){
        if(!empty($where)){
           return $this->db->update($table,$data,$where);
           // print_r($this->db->last_query());
        }else{
            echo "Condition is empty"; die;
        }
           
    }
    public function remove($table,$where=[]){
        if(!empty($where)){
            return $this->db->delete($table,$where);
        }else{
            echo "Condition is empty"; die;
        }
          
    }
    public function ChildRecord($user_id) {
        $this->db->select('user.*,map.id as map_id');
        $this->db->from("users_mapping as map");    
        $this->db->join("users as user","user.id=map.child_user_id",'LEFT');    
        $this->db->where("map.user_id",$user_id);   
        $query=$this->db->get();
        if($query->num_rows() > 0)
        {
            return $query->result();s;
        } else{
            return false;
        }   
    }
    
     public function Productrecord($table,$where=[]){  
        $this->db->select('similar_product_id');
        $this->db->from($table);   
        if(!empty($where)){
            $this->db->where($where);           
        }
        $result=$this->db->get();
        if($result->num_rows() > 0)
        {
            return $result->result_array();
            
        }else{
            return false;
        }    
    }
     public function record_in($table,$where=[],$select="*"){
        $this->db->select($select);
        $this->db->from($table);   
      //  $this->db->where_in('template_id', $where);
        $this->db->where("FIND_IN_SET($where, 'template_id')", null, false);
        $result=$this->db->get();
        if($result->num_rows() > 0)
        {
            return $result->result();  
        }else{ 
            return false;
        }    
    }
    public function CountResults($table,$where=array()){
		$this->db->where($where);
		return $this->db->count_all_results($table);
	}
    public function GetListData($limit,$start,$where=[],$like=[],$order_by='', $table){
        $this->db->select('*');
        $this->db->from($table);
        if(!empty($where)){
            $this->db->where($where); 
           }
        if(!empty($like)){
            $i=true;
            foreach($like as $key=>$value)
            {
                if($i)
                    $this->db->like($key, $value, 'both'); 
                else
                    $this->db->or_like($key, $value, 'both');
            }            
        }
        $this->db->order_by($order_by['key'],$order_by['value']);
        $this->db->limit($start ,$limit);
        $query = $this->db->get();
        return $query->result();
    }
    // Active order count
    public function ActiveOrderCount($id){
        $this->db->select("delapp_deliveries.driver_id as driver_id,delapp_deliveries.order_id,delapp_deliveries.pick_up,delapp_deliveries.pick_up_area,delapp_deliveries.order_status");
        $this->db->from("delapp_deliveries");
        $this->db->join("delapp_drivers","delapp_drivers.id=delapp_deliveries.driver_id",'LEFT');  
        $this->db->where('delapp_deliveries.driver_id', $id);    
        return $this->db->count_all_results();
    } 
    //active order
    public function ActiveOrder($limit="",$offset="",$id){
        $this->db->select("delapp_deliveries.driver_id as driver_id,delapp_deliveries.order_id,delapp_deliveries.pick_up,delapp_deliveries.pick_up_area,delapp_deliveries.order_status,delapp_deliveries.update_time as order date");
        $this->db->from("delapp_deliveries");
        $this->db->join("delapp_drivers","delapp_drivers.id=delapp_deliveries.driver_id",'LEFT');  
        $this->db->where('delapp_deliveries.driver_id', $id);
    
        $this->db->order_by("delapp_deliveries.create_time","DESC"); 
        $this->db->limit($limit,$offset);    
        $query=$this->db->get();
        if($query->num_rows() > 0){
            return $query->result();
        }else{
            return false;
        }
}
    //Notification List
    public function notificationlist($limit="",$offset="",$id){
        $this->db->select("delapp_activity.comment as message,delapp_deliveries.order_id,delapp_deliveries.pick_up,delapp_deliveries.pick_up_area,delapp_activity.created_at as Date");
        $this->db->from("delapp_deliveries");
        $this->db->join("delapp_activity","delapp_deliveries.order_id=delapp_activity.order_id",'LEFT');  
        $this->db->join("delapp_drivers","delapp_drivers.id=delapp_activity.driver_id",'LEFT');  
        $this->db->where('delapp_activity.driver_id', $id);
        $this->db->where('delapp_activity.activity_type', 'Order Assign');
        $this->db->order_by("delapp_activity.created_at","DESC"); 
        $this->db->limit($limit,$offset);    
        $query=$this->db->get();
        if($query->num_rows() > 0){
            return $query->result();
        }else{
            return false;
        }
    }
    //Order History Detail
    public function order_history($limit="",$offset="",$id){
        $this->db->select("delapp_deliveries.order_id,delapp_deliveries.user_name,delapp_deliveries.pick_up as pick_up location,delapp_deliveries.pick_up_area,delapp_deliveries.paid_amount as total amount,delapp_deliveries.status,delapp_deliveries.update_time as delivery time");
        $this->db->from("delapp_deliveries");
        $this->db->join("delapp_drivers","delapp_drivers.id=delapp_deliveries.driver_id",'LEFT');  
        $this->db->where('delapp_deliveries.driver_id', $id);
        $this->db->order_by("delapp_deliveries.create_time","DESC"); 
        $this->db->limit($limit,$offset);    
        $query=$this->db->get();
        if($query->num_rows() > 0){
            return $query->result();
        }else{
            return false;
        }
    }
    //Order Detail
    public function order_detail($id,$order_id){
        $this->db->select("*");
        $this->db->from("delapp_deliveries");
        $this->db->join("delapp_drivers","delapp_drivers.id=delapp_deliveries.driver_id",'LEFT'); 
        $this->db->group_start();
        $this->db->where('delapp_deliveries.driver_id', $id);
        $this->db->where('delapp_deliveries.order_id', $order_id);
        $this->db->group_end(); 
        $result=$this->db->get();
        if($result->num_rows() > 0)
        {
            return $result->row();    
        }else{
            return false;
        }   
    }
    // Complete Order And total earning
    public function completeOrder($id){
        $this->db->select("SUM(delapp_deliveries.paid_amount) as price,count(delapp_deliveries.order_id) as complete_order");
        $this->db->from("delapp_deliveries");
        $this->db->join("delapp_drivers","delapp_drivers.id=delapp_deliveries.driver_id",'LEFT');  
        $this->db->group_start();
        $this->db->where('delapp_deliveries.driver_id', $id);
        $this->db->where('delapp_deliveries.status', '3');
        $this->db->group_end();
        $query=$this->db->get();
        if($query->num_rows() > 0){
            return $query->result();
        }else{
            return false;
        }
    }
   // delete fcm token 
    public function deleteField($token){    
        $data = array('fcm_token' => '');
        $this->db->where('fcm_token', $token);        
        $this->db->update('delapp_drivers', $data);  
    } 
    //Check OrderId for orderDetail valid or not  
    public function checkOrderId($id){
        $this->db->select("*");
        $this->db->from("delapp_deliveries");
        $this->db->join("delapp_drivers","delapp_drivers.id=delapp_deliveries.driver_id",'LEFT');  
        $this->db->where('delapp_deliveries.driver_id', $id);  
        $query=$this->db->get();
        if($query->num_rows() > 0){
            return $query->row();
        }else{
            return false;
        }
    }
    public function SingleActiveOrder($id){
        $this->db->select("*");
        $this->db->from("delapp_deliveries");
        $this->db->join("delapp_drivers","delapp_drivers.id=delapp_deliveries.driver_id",'LEFT');  
        $this->db->where('delapp_deliveries.driver_id', $id);   
        $query=$this->db->get();
        if($query->num_rows() > 0){
            return $query->row();
        }else{
            return false;
        }
    }  
    
}