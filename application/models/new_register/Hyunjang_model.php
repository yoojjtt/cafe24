<?
defined('BASEPATH') OR exit('No direct script access allowed');

Class Hyunjang_model extends CI_Model{
	function __construct(){
		parent::__construct();	
	}
	

	function hyunjang_list()
	{
		return $this->db->query('SELECT*FROM kosa_table ORDER BY num DESC')->result();
		
		
	
	}

	function hyunjang($num)
	{
		return $this->db->get_where('kosa_table',array('num'=> $num))->result();
		
	
	}

	function hyunjang_sujung($sujung)
	{	
		$sujung_data = array(
			'hyun_jang_number'	=> $sujung['hyun_jang_number'],
			'hyun_jang_name'	=> $sujung['hyun_jang_name'],
			'kosa_name'			=> $sujung['kosa_name'],
			'balju_company'		=> $sujung['balju_company'],
			'kosa_gigan_start'	=> $sujung['kosa_gigan_start'],
			'kosa_gigan_end'	=> $sujung['kosa_gigan_end'],
			'bogoja'			=> $sujung['bogoja'],
			'content'			=> $sujung['content'],
				
		
		);
		$this->db->set('wdate','NOW()', false);
		$this->db->where('num', $sujung['num']);
		$this->db->update('kosa_table', $sujung_data);
		return $this->db->get_where('kosa_table',array('num'=> $sujung['num']))->result();
	}
	



	function hyunjang_insert($insert)
	{	
		$this->db->set('wdate','NOW()', false);
		$this->db->insert('kosa_table', array(
			'hyun_jang_number'	=> $insert['hyun_jang_number'],
			'hyun_jang_name'	=> $insert['hyun_jang_name'],
			'kosa_name'			=> $insert['kosa_name'],
			'balju_company'		=> $insert['balju_company'],
			'kosa_gigan_start'	=> $insert['kosa_gigan_start'],
			'kosa_gigan_end'	=> $insert['kosa_gigan_end'],
			'bogoja'			=> $insert['bogoja'],
			'content'			=> $insert['content'],
				
		
		));
		return $this->db->get_where('kosa_table',array('hyun_jang_name'=> $insert['hyun_jang_name']))->result();
		
	}


	function hyunjang_del($del)
	{	
		
		$this->db->where('num', $del);
		$this->db->delete('kosa_table');
		
		
		
	}


	


		
}


	
?>