<?
defined('BASEPATH') OR exit('No direct script access allowed');

Class Danga_model extends CI_Model{
	function __construct(){
		parent::__construct();	
	}

	function danga($call) // (현황만을 확인하기 위해서)STEP1에서 STEP3로 바로 온 경우
	{		
		$this->db->select('monthly_daga.daily_salary, daily_member.jumin1, daily_member.jumin2, daily_member.num, daily_member.oun_name, daily_member.job, daily_member.oun_phone');
		$this->db->from('monthly_daga');
		$this->db->join('daily_member', 'monthly_daga.daily_member_num = daily_member.num', 'LEFT');
		$array = array('hyun_jang_cord' => $call['selected_hyunjang_num'],'date' => $call['date']);
		$this->db->where($array);
		return $query = $this->db->get()->result();
		/*
		return $this->db->query('SELECT * FROM mothly_daga LEFT JOIN daily_member 
						ON hyun_jang_register.daily_member_num = daily_member.num 
						WHERE hyun_jang_cord ='.$call['selected_hyunjang_num'])->result();
		*/
	}	


	function danga_enroll($insert)  // 2017-05-24 hyun_jang_register INSERT // monthy_daga INSERT
	{	
		$match = $this->db->get_where('hyun_jang_register',array(
			'hyun_jang_cord'		=> $insert['selected_hyunjang_num'],
			'daily_member_num'		=> $insert['selected_daily_num'])
			)->result();
		if($match){ //일치하는 것이 있다면 NOTHING
			/* 	hyun_jang_register TABLE에는 일치하는 것이 있다면 INSERT 하지 않기		*/
		}else{ // 일치하는 것이 없다면 INSERT
			$this->db->set('wdate','NOW()', false);
			$this->db->insert('hyun_jang_register', array(
			'hyun_jang_cord'					=> $insert['selected_hyunjang_num'],
			'daily_member_num'					=> $insert['selected_daily_num'],
	
		
			));					
		}
		/*************************************mothly_daga table*************************************************/
		// 현장코드, 근로자번호, 해당월 같은 것이 있다면 INSERT하지 않는다.
		$match2 = $this->db->get_where('monthly_daga',array( 
			'hyun_jang_cord'		=> $insert['selected_hyunjang_num'],
			'daily_member_num'		=> $insert['selected_daily_num'],
			'date'					=> $insert['monthly_daga_date'])
			)->result();
		if($match2){
			/******INSERT 하지않고 바로 결과값******/
			$this->db->select('monthly_daga.daily_salary, daily_member.num, daily_member.oun_name, daily_member.job, daily_member.oun_phone');
			$this->db->from('monthly_daga');
			$this->db->join('daily_member', 'monthly_daga.daily_member_num = daily_member.num', 'LEFT');
			$array = array('hyun_jang_cord' => $insert['selected_hyunjang_num'], 'daily_member_num'	=> $insert['selected_daily_num'],'date' => $insert['monthly_daga_date']);
			$this->db->where($array);
			return $query = $this->db->get()->result();
		
		
		}else{//일치하는 것이 없다면 INSERT
			$this->db->set('date',$insert['monthly_daga_date']);
			$this->db->insert('monthly_daga', array(
			'hyun_jang_cord'					=> $insert['selected_hyunjang_num'],
			'daily_member_num'					=> $insert['selected_daily_num'],
	
		
			));

		/******결과값******/
		$this->db->select('monthly_daga.daily_salary, daily_member.num, daily_member.oun_name, daily_member.job, daily_member.oun_phone');
		$this->db->from('monthly_daga');
		$this->db->join('daily_member', 'monthly_daga.daily_member_num = daily_member.num', 'LEFT');
		$array = array('hyun_jang_cord' => $insert['selected_hyunjang_num'], 'daily_member_num'	=> $insert['selected_daily_num'],'date' => $insert['monthly_daga_date']);
		$this->db->where($array);
		return $query = $this->db->get()->result();
		}
		
		

		
	}

	function danga_delete($del)  // STEP3 에서 삭제
	{	
		
		$this->db->delete('monthly_daga', array(
			'hyun_jang_cord'		=> $del['selected_hyunjang_num'],
			'daily_member_num'		=> $del['member_num'],
			'date'					=> $del['date'])	
		);

		/******결과값******/
		$this->db->select('monthly_daga.daily_salary, daily_member.num, daily_member.oun_name, daily_member.job, daily_member.oun_phone');
		$this->db->from('monthly_daga');
		$this->db->join('daily_member', 'monthly_daga.daily_member_num = daily_member.num', 'LEFT');
		$array = array('hyun_jang_cord' => $del['selected_hyunjang_num'],'date' => $del['date']);
		$this->db->where($array);
		return $query = $this->db->get()->result();

	}
	
	function salary($salary)
	{
		$salary_sujung = array(
			'daily_salary'			=> $salary['daily_salary'],

		
		);
		$array = array('hyun_jang_cord' => $salary['selected_hyunjang_num'],'daily_member_num' => $salary['member_num'],'date' => $salary['date']);
		$this->db->where($array);
		$this->db->update('monthly_daga', $salary_sujung);
		

		/******결과값******/
		$this->db->select('monthly_daga.daily_salary, daily_member.num, daily_member.oun_name, daily_member.job, daily_member.oun_phone');
		$this->db->from('monthly_daga');
		$this->db->join('daily_member', 'monthly_daga.daily_member_num = daily_member.num', 'LEFT');
		$array = array('hyun_jang_cord' => $salary['selected_hyunjang_num'],'date' => $salary['date']);
		$this->db->where($array);
		return $query = $this->db->get()->result();
	}
	



		
}

	
	
?>