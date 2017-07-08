<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class HyunjangInfo_Ajax extends MY_Controller {
	function __construct(){
		parent::__construct();	
		$this->load->model('new_register/Hyunjang_model');
		
	}
	
	public function index()
	{	
		return false;

	}

	

	public function hyunjang_ajax()
	{	
		if($this->input->post('companyName') =='update'){
		$topic_res = $this->Hyunjang_model->hyunjang_list();

		echo json_encode($topic_res, JSON_UNESCAPED_UNICODE);
		
		return;
		
		}
		
		
	}

	public function hyunjang_insert_ajax()
	{
		$insert = $this->input->post(array(
			'hyun_jang_name', 'bogoja', 'balju_company', 'kosa_name', 'hyun_jang_number', 'kosa_gigan_start', 'kosa_gigan_end', 'content'
		));
		$topic_res = $this->Hyunjang_model->hyunjang_insert($insert);

		echo json_encode($topic_res, JSON_UNESCAPED_UNICODE);

		return;
	
	}

	public function hyunjang_modal_ajax()
	{	
		$num =	$this->input->post('companyNum');
		$topic_res = $this->Hyunjang_model->hyunjang($num);

		echo json_encode($topic_res, JSON_UNESCAPED_UNICODE);
		
		return;
	}
	
	public function hyunjang_sujung_ajax()
	{
		$sujung = $this->input->post(array(
			'num', 'hyun_jang_name', 'bogoja', 'balju_company', 'kosa_name', 'hyun_jang_number', 'kosa_gigan_start', 'kosa_gigan_end', 'content'					
		));
		$topic_res = $this->Hyunjang_model->hyunjang_sujung($sujung);

		echo json_encode($topic_res, JSON_UNESCAPED_UNICODE);
		
		return;
	}




	public function hyunjang_delete_ajax()
	{
		$del = $this->input->post('num');
		$topic_res = $this->Hyunjang_model->hyunjang_del($del);

		echo json_encode($topic_res, JSON_UNESCAPED_UNICODE);

		return;
	
	}





	
	
	




}
	
	



