<?
defined('BASEPATH') OR exit('No direct script access allowed');

Class Employee_model extends CI_Model{
	function __construct(){
		parent::__construct();	
	}
	

	function employee($companyName)
	{
		return $this->db->get_where('zetyx_member_table',array('companyName'=> $companyName))->result();
		
	}

	function employee_info($employeeNo, $companyName)
	{
		return $this->db->get_where('zetyx_member_table',array('no'=> $employeeNo, 'companyName'=>$companyName))->result();
		
	}

	

	
		
}


	
?>