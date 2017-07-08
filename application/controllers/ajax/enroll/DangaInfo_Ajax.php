<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class DangaInfo_Ajax extends MY_Controller {
	function __construct(){
		parent::__construct();	
		$this->load->model('enroll/Danga_model');
		
	}
	public function Danga_ajax()  //2017-05-24 (��Ȳ���� Ȯ���ϱ� ���ؼ�) STEP1���� ���常 �����ϰ� �ٷ� STEP 3�� �Ѿ�� ���
	{	
		$call = $this->input->post(array('selected_hyunjang_num','date'));
		$topic_res = $this->Danga_model->danga($call);

		echo json_encode($topic_res, JSON_UNESCAPED_UNICODE);
		
		return;

	}

	public function Danga_enroll_ajax() //2017-05-24 STEP2���� �ٷ��ڸ� �����Ͽ� ����� ���
	{	
		$insert = $this->input->post(array('selected_hyunjang_num','selected_daily_num', 'monthly_daga_date'	));
		$topic_res = $this->Danga_model->danga_enroll($insert);

		echo json_encode($topic_res, JSON_UNESCAPED_UNICODE);
		
		return;

	}
 

	public function Danga_del_ajax() // 2017-05-25 STEP3 ���� ����
	{
		$del = $this->input->post(array('selected_hyunjang_num','member_num','date'));
		$topic_res = $this->Danga_model->danga_delete($del);

		echo json_encode($topic_res, JSON_UNESCAPED_UNICODE);
		
		return;
		
	
	}

	public function daily_salary_ajax()
	{
		$salary = $this->input->post(array('selected_hyunjang_num','member_num', 'daily_salary', 'date'));
		$topic_res = $this->Danga_model->salary($salary);

		echo json_encode($topic_res, JSON_UNESCAPED_UNICODE);
		
		return;
	
	}





	
	
	




}
	
	



