<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class MY_Controller extends CI_Controller {
	function __construct()
	{
		parent::__construct();	// /system/core/Controller.php 를 상속받는다.
		$this->load->database(); // /config/config.php: DB 설정 
		$this->load->library('session');
        $this->load->library('form_validation'); // form 유효성확인
		$this->load->helper('url'); // redirect 쓰기위한 helper
		
	}
	/*****************************************************************/
	/************************* 2017-05-16 ****************************/
	/*****************************************************************/
	// 로그인과 회원가입 페이지의 헤더파일과 상단메뉴가 달라서 따로 만듬 2017-05-16;

	function _head_login() //로그인과 회원가입 페이지의 헤더파일 2017-05-15;
	{
		$this->load->view('/joinus/login_header');
	}

	function _top_login() //로그인과 회원가입 페이지의 top 메뉴
	{
		$this->load->view('/joinus/login_top');

	
	}
	function _joinus_script()
	{
		$this->load->view('/joinus/joinus_script');
	
	}
	/*****************************************************************/
	/************************* 2017-05-16 ****************************/
	/*****************************************************************/
	// 메인화면의 header, top_nav, side_nav, footer 2017-05-16;

	function _head() //메인화면 헤더파일 2017-05-15;
    {	
		$this->load->view('/main/css');
	
		
	}

	function _main_top()
	{
		$this->load->view('/main/main_top');

	}

	function _sidebar()
	{
		$this->load->view('/main/sidebar');
		if($this->session->userdata('is_login')){		   

		}else{
			
			$this->load->helper('url');
			redirect('http://yoojjtt.cafe24.com/index.php/auth/login');
			//세션이 없으면 로그인화면으로 redirect
			
		}
	
	}
		
	function _main_footer()
	{
		$this->load->view('/main/main_footer');

	}

	function _scripts()
	{
		$this->load->view('/main/scripts');

	}
	/*****************************************************************/
	/************************* 2017-05-16 ****************************/
	/*****************************************************************/
	// new_register script file 2017-05-16;

	function _new_register_script()
	{
	
		$this->load->view('/main/new_register/new_register_script');
	
	}
	/*******************************************************************/

	/*****************************************************************/
	/************************* 2017-05-22 ****************************/
	/*****************************************************************/
	// enroll page script file 2017-05-22;

	function _enroll_script()
	{
	
		$this->load->view('/main/enroll/enroll_script');
	
	}
	/*******************************************************************/
} 