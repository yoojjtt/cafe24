<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class DailyMemberInfo_Ajax extends MY_Controller {
	function __construct(){
		parent::__construct();	
		$this->load->model('new_register/DailyMember_model');
		
	}

	public function daily_member_ajax()
	{	
		if($this->input->post('companyName') =='update'){
		$topic_res = $this->DailyMember_model->daily_member_list();

		echo json_encode($topic_res, JSON_UNESCAPED_UNICODE);
		
		return;
		
		}
		
		
	}
	
	public function daily_member_insert_ajax()
	{
		$insert = $this->input->post(array(
					'oun_name',
					'daily_salary',
					'job',
					'jumin1',
					'jumin2',
					'oun_phone',
					'address1',
					'address2',
					'postnum',
					'bank_name',
					'bank',
					'bank_number',			
		));
		$topic_res = $this->DailyMember_model->daily_member_insert($insert);

		echo json_encode($topic_res, JSON_UNESCAPED_UNICODE);

		return;
	
	}

	public function daily_member_modal_ajax()
	{	
		$num =	$this->input->post('Num');
		$topic_res = $this->DailyMember_model->daily_member_modal($num);

		echo json_encode($topic_res, JSON_UNESCAPED_UNICODE);
		
		return;
	}

		public function daily_member_sujung_ajax()
	{
		$sujung = $this->input->post(array(
			'num', 'oun_name','daily_salary','job','jumin1','jumin2'	,'oun_phone','address1','address2','postnum','bank_name','bank','bank_number',					
		));
		$topic_res = $this->DailyMember_model->daily_member_sujung($sujung);

		echo json_encode($topic_res, JSON_UNESCAPED_UNICODE);
		
		return;
	}

	public function daily_member_delete_ajax()
	{
		$del = $this->input->post('num');
		$topic_res = $this->DailyMember_model->daily_member_del($del);

		echo json_encode($topic_res, JSON_UNESCAPED_UNICODE);

		return;
	
	}
	
	




}
	
	



