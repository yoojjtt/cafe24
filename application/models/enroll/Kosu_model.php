<?
defined('BASEPATH') OR exit('No direct script access allowed');

Class Kosu_model extends CI_Model{
	function __construct(){
		parent::__construct();	
	}

	function kosu($call) 
	{		
		$this->db->select('daily_daga.daily_salary, daily_member.num, daily_member.oun_name, daily_member.job, daily_member.oun_phone');
		$this->db->from('daily_daga');
		$this->db->join('daily_member', 'daily_daga.daily_member_num = daily_member.num', 'LEFT');
		$array = array('hyun_jang_cord' => $call['selected_hyunjang_num'],'date' => $call['date']);
		$this->db->where($array);
		return $query = $this->db->get()->result();

	}	




		
}

	
	
?>