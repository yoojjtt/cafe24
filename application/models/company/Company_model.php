<?
defined('BASEPATH') OR exit('No direct script access allowed');

Class Company_model extends CI_Model{
	function __construct(){
		parent::__construct();	
	}
	

	function company($companyName)
	{
		return $this->db->get_where('company',array('companyName'=> $companyName))->result();
		
	}


	function tax($companyName)
	{
		return $this->db->get_where('tax_table',array('companyName'=> $companyName))->result();
		
	
	}


	function company_new($sujung, $user)
	{
			$this->db->insert('company',array(
				'num'				=>'',
				'companyName'		=>$sujung['companyName'],
				'president'			=>$sujung['president'],
				'companyPhone'		=>$sujung['companyPhone'],
				'companyNumber'		=>$sujung['companyNumber'],
				'address1'			=>$sujung['address1'],
				'address2'			=>$sujung['address2'],
					
			));

			$data = array('companyName'		=>$sujung['companyName']);
			$this->db->update('zetyx_member_table', $data ,array('name'=>$user));
			

			return $this->db->get_where('company',array('companyName'=> $sujung['companyName']))->result();
		
		
	}




	function company_sujung($sujung, $user)
	{

		if($this->db->get_where('company',array('num'=>$sujung['num']))){
			$data = array(
				'companyName'	=> $sujung['companyName'],
				'companyPhone'	=> $sujung['companyPhone'],
				'address1'		=> $sujung['address1'],
				'address2'		=> $sujung['address2'],
				'companyNumber' => $sujung['companyNumber'], 
				'president'		=> $sujung['president'] 	
			
			);
			$member_data = array(
				'companyName'	=> $sujung['companyName']	
			);

			//$this->db->where('num',$sujung['num']);
			$this->db->update('company', $data, array('num'=>$sujung['num']));
			$this->db->update('zetyx_member_table', $member_data, array('name'=>$user));
		
		}
		

		return $this->db->get_where('company',array('num'=> $sujung['num']))->result();
	
	}

	
		
}


	
?>