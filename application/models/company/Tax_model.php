<?
defined('BASEPATH') OR exit('No direct script access allowed');

Class Tax_model extends CI_Model{
	function __construct(){
		parent::__construct();	
	}
	

	function tax($companyName)
	{
		if(!($this->db->get_where('tax_table',array('companyName'=> $companyName)))){
			//return $this->session->set_userdata('enroll', false);
		}else{
			$this->session->set_userdata('enroll', true);
			return $this->db->get_where('tax_table',array('companyName'=> $companyName))->result();
		}
		
		
	
	}
	
	function tax_sujung($sujung, $company_info)
	{

		if($this->db->get_where('tax_table',array('companyName'=>$company_info))){
			$data = array(
				'no_tax'							=> $sujung['no_tax'],
				'tax_rate'							=> $sujung['tax_rate'],
				'jumin_tax_rate'					=> $sujung['jumin_tax_rate'],
				'employe_insurance_rate'			=> $sujung['employe_insurance_rate'],
				'bonin_med_insurance_rate'			=> $sujung['bonin_med_insurance_rate'], 
				'company_med_insurance_rate'		=> $sujung['company_med_insurance_rate'],
				'bonin_old_med_insurance_rate'		=> $sujung['bonin_old_med_insurance_rate'],
				'company_old_med_insurance_rate'	=> $sujung['company_old_med_insurance_rate'],
				'bonin_kumin_insurance_rate'		=> $sujung['bonin_kumin_insurance_rate'],
				'company_kumin_insurance_rate'		=> $sujung['company_kumin_insurance_rate'],

			
			);
			
			
			$this->db->update('tax_table', $data, array('companyName'=>$company_info));
			
		
		}
		

		return $this->db->get_where('tax_table',array('companyName'=> $company_info))->result();
	
	}




	function tax_new($insert, $company_info)
	{
			$this->db->insert('tax_table', array(
				'companyName'						=> $company_info,
				'no_tax'							=> $insert['new_no_tax'],
				'tax_rate'							=> $insert['new_tax_rate'],
				'jumin_tax_rate'					=> $insert['new_jumin_tax_rate'],
				'employe_insurance_rate'			=> $insert['new_employe_insurance_rate'],
				'bonin_med_insurance_rate'			=> $insert['new_bonin_med_insurance_rate'], 
				'company_med_insurance_rate'		=> $insert['new_company_med_insurance_rate'],
				'bonin_old_med_insurance_rate'		=> $insert['new_bonin_old_med_insurance_rate'],
				'company_old_med_insurance_rate'	=> $insert['new_company_old_med_insurance_rate'],
				'bonin_kumin_insurance_rate'		=> $insert['new_bonin_kumin_insurance_rate'],
				'company_kumin_insurance_rate'		=> $insert['new_company_kumin_insurance_rate'],

			
			));


			return $this->db->get_where('tax_table',array('companyName'=> $company_info))->result();
		
		
	}




	

	
		
}


	
?>