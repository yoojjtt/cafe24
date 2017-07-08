<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Topic extends MY_Controller {
	function __construct(){
		parent::__construct();	
		$this->load->library('pagination');

		
	}
	
	public function index() // �α��� Auth.php ���� ���������� ���������� ������ �̵� -> dashboard ����ȭ�� 2017-05-11
	{	
		$this->_head();
		$this->_main_top();
		$this->_sidebar();
		$this->load->view('/main/main');
		$this->_main_footer();
		$this->_scripts();

	}

	public function new_register_hyunjang()	 // new_register ������ 2017-05-11
	{	
		$this->_head();
		$this->_main_top();
		$this->_sidebar();
		$this->load->view('/main/new_register/register_hyunjang');
		$this->_main_footer();
		$this->_new_register_script();
	}

	public function new_register_daily_member()	// new_register ������ �ٷ��� ��� 2017-05-11
	{	
		$this->_head();
		$this->_main_top();
		$this->_sidebar();
		$this->load->view('/main/new_register/register_daily_member');
		$this->_main_footer();
		$this->_new_register_script(); //datatable�� �������� ���θ��� 2017-05-16;
	}

	public function enroll_danga()	// new_register �ܰ���� 2017-05-22
	{	
		$this->_head();
		$this->_main_top();
		$this->_sidebar();
		$this->load->view('/main/enroll/enroll_danga');
		$this->_main_footer();
		$this->_enroll_script();
	}

	public function enroll_kosu()	// new_register �ܰ���� 2017-05-22
	{	
		$this->_head();
		$this->_main_top();
		$this->_sidebar();
		$this->load->view('/main/enroll/enroll_kosu');
		$this->_main_footer();
		$this->_enroll_script();
	}

	






}
	
	



