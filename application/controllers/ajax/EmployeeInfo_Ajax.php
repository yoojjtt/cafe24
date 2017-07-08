<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class EmployeeInfo_Ajax extends MY_Controller {
	function __construct(){
		parent::__construct();	
		$this->load->model('company/Employee_model');
		
	}
	
	public function index()
	{	
		return false;

	}

	



	public function employee_ajax()
	{
		$companyName = $this->input->post('companyName');
		$topic_res = $this->Employee_model->employee($companyName);
	

		echo json_encode($topic_res, JSON_UNESCAPED_UNICODE);
		
		return;

	}

	public function employee_info_ajax()
	{
		$employeeNo = $this->input->post('employeeNo');
		$companyName = $this->input->post('companyName');
		$topic_res = $this->Employee_model->employee_info($employeeNo, $companyName);

		echo json_encode($topic_res, JSON_UNESCAPED_UNICODE);

		return;
	}

	

	
	
	




}
	
	



