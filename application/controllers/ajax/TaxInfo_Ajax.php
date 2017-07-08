<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class TaxInfo_Ajax extends MY_Controller {
	function __construct(){
		parent::__construct();	
		$this->load->model('company/Tax_model');
		
	}
	
	public function index()
	{	
		return false;

	}

	

	public function tax_ajax()
	{
		$companyName = $this->input->post('companyName');
		$topic_res = $this->Tax_model->tax($companyName);

		echo json_encode($topic_res, JSON_UNESCAPED_UNICODE);
		
		return;
	}

	public function tax_sujung_ajax()
	{
		$sujung = $this->input->post(array(
			'no_tax',
			'tax_rate',
			'jumin_tax_rate',
			'employe_insurance_rate',
			'bonin_med_insurance_rate',
			'company_med_insurance_rate',
			'bonin_old_med_insurance_rate', 
			'company_old_med_insurance_rate',
			'bonin_kumin_insurance_rate',
			'company_kumin_insurance_rate'	
		
		));
		$company_info	= $this->input->post('companyName');
		$topic_res = $this->Tax_model->tax_sujung($sujung, $company_info);

		echo json_encode($topic_res, JSON_UNESCAPED_UNICODE);
		
		return;
	}





	public function tax_new_ajax()
	{
		$insert = $this->input->post(array(
			
			'new_no_tax',
			'new_tax_rate',
			'new_jumin_tax_rate',
			'new_employe_insurance_rate',
			'new_bonin_med_insurance_rate',
			'new_company_med_insurance_rate',
			'new_bonin_old_med_insurance_rate', 
			'new_company_old_med_insurance_rate',
			'new_bonin_kumin_insurance_rate',
			'new_company_kumin_insurance_rate'	
		
		));
		$company_info	= $this->input->post('new_companyName');
		$topic_res = $this->Tax_model->tax_new($insert,$company_info);

		echo json_encode($topic_res, JSON_UNESCAPED_UNICODE);
		
		return;
	}
	
	




}
	
	



