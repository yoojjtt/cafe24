<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class CompanyInfo_Ajax extends MY_Controller {
	function __construct(){
		parent::__construct();	
		$this->load->model('company/Company_model');
		
	}
	
	public function index()
	{	
		return false;

	}

	

	public function company_ajax()
	{
		$companyName = $this->input->post('companyName');
		$topic_res = $this->Company_model->company($companyName);


		echo json_encode($topic_res, JSON_UNESCAPED_UNICODE);
		
		return;

	}


	public function tax_ajax()
	{
		$companyName = $this->input->post('companyName');
		$topic_res = $this->Company_model->tax($companyName);

		echo json_encode($topic_res, JSON_UNESCAPED_UNICODE);
		
		return;
	}

	public function company_sujung_ajax()
	{
		$sujung = $this->input->post(array('num', 'companyName','president','companyPhone','companyNumber','address1','address2'));
		$user	= $this->input->post('user');
		$topic_res = $this->Company_model->company_sujung($sujung, $user);

		echo json_encode($topic_res, JSON_UNESCAPED_UNICODE);
		
		return;
	}

	public function company_new_ajax()
	{
		$sujung = $this->input->post(array( 'companyName','president','companyPhone','companyNumber','address1','address2'));
		$user	= $this->input->post('user');
		$topic_res = $this->Company_model->company_new($sujung,$user);

		echo json_encode($topic_res, JSON_UNESCAPED_UNICODE);
		
		return;
	}
	
	




}
	
	



