<?
defined('BASEPATH') OR exit('No direct script access allowed');

Class Join_enroll_model extends CI_Model{
	function __construct(){
		parent::__construct();	
	}



	function hyunjang_search()
	{
		return $this->db->query('SELECT*FROM kosa_table ORDER BY num DESC')->result();	
	}
	

	function hyunjang_check($num)
	{
		return $this->db->query('SELECT * FROM hyun_jang_register LEFT JOIN daily_member 
						ON hyun_jang_register.daily_member_num = daily_member.num 
						WHERE hyun_jang_cord ='.$num)->result();
	}






		
}

	
	
?>