<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Member_Ajax extends MY_Controller {
	function __construct(){
		parent::__construct();	
		$this->load->model('member/Member_model');
		
	}
	
	public function index() 
	{	
		return false;

	}

	
	
	public function select_ajax()  //2017-05-11 회원가입 form:  회사선택 input append
	{
		$select = $this->input->post('select');
		$topic_res = $this->Member_model->select($select);

		echo json_encode($topic_res, JSON_UNESCAPED_UNICODE);
		
		return;
	}

	public function id_check_ajax() //2017-05-11 회원가입 form:  ID check btn
	{
		$id = $this->input->post('user_id');
		$topic_res = $this->Member_model->id_check($id);

		echo json_encode($topic_res, JSON_UNESCAPED_UNICODE);
		
		return;
	}

	public function jumin_check_ajax() //2017-05-11 회원가입 form:  주민번호 check btn
	{
		$jumin1 = $this->input->post('jumin1');
		$jumin2 = $this->input->post('jumin2');
		$topic_res = $this->Member_model->jumin_check($jumin1,$jumin2);

		echo json_encode($topic_res, JSON_UNESCAPED_UNICODE);
		
		return;
	}

	public function member_ajax() //2017-05-11 회원가입 form:  가입 btn
	{
		$member = $this->input->post(array('name', 'email','user_id','password','handphone','jumin1','jumin2','address','companyName'));
				
		$topic_res = $this->Member_model->member_add($member);

		echo json_encode($topic_res, JSON_UNESCAPED_UNICODE);
		
		return;
	}





}
	
	



