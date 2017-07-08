<?
defined('BASEPATH') OR exit('No direct script access allowed');

Class DailyMember_model extends CI_Model{
	function __construct(){
		parent::__construct();	
	}
	

	function daily_member_list()
	{
		return $this->db->query('SELECT*FROM daily_member')->result();
		
		
	
	}
	
	function daily_member_insert($insert)
	{	
		$this->db->set('wdate','NOW()', false);
		$this->db->insert('daily_member', array(
			'oun_name'			=> $insert['oun_name'],
			'oun_phone'			=> $insert['oun_phone'],
			'jumin1'			=> $insert['jumin1'],
			'jumin2'			=> $insert['jumin2'],
			'address1'			=> $insert['address1'],
			'address2'			=> $insert['address2'],
			'bank'				=> $insert['bank'],
			'bank_name'			=> $insert['bank_name'],
			'bank_number'		=> $insert['bank_number'],
			'postnum'			=> $insert['postnum'],			
			'job'				=> $insert['job'],
			'daily_salary'		=> $insert['daily_salary'],
			//'ei_insurance'	=> $insert['ei_insurance'],
			//'med_insurance'	=> $insert['med_insurance'],
			//'loan'			=> $insert['loan'],
				
		
		));

		return $this->db->get_where('daily_member',array('oun_name'=> $insert['oun_name']))->result();
	}

	function daily_member_modal($num)
	{
		return $this->db->get_where('daily_member',array('num'=> $num))->result();
		
	
	}

	function daily_member_sujung($sujung)
	{	
		$sujung_data = array(
			'oun_name'			=> $sujung['oun_name'],
			'oun_phone'			=> $sujung['oun_phone'],
			'jumin1'			=> $sujung['jumin1'],
			'jumin2'			=> $sujung['jumin2'],
			'address1'			=> $sujung['address1'],
			'address2'			=> $sujung['address2'],
			'bank'				=> $sujung['bank'],
			'bank_name'			=> $sujung['bank_name'],
			'bank_number'		=> $sujung['bank_number'],
			'postnum'			=> $sujung['postnum'],			
			'job'				=> $sujung['job'],
			'daily_salary'		=> $sujung['daily_salary'],
				
		
		);
		$this->db->set('wdate','NOW()', false);
		$this->db->where('num', $sujung['num']);
		$this->db->update('daily_member', $sujung_data);
		return $this->db->get_where('daily_member',array('num'=> $sujung['num']))->result();
	}

	function daily_member_del($del)
	{	
		
		$this->db->where('num', $del);
		$this->db->delete('daily_member');
		
		
		
	}
		
}

	
	
?>