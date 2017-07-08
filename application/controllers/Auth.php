<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Auth extends MY_Controller {
	function __construct()
	{
		parent::__construct();	
		$this->load->model('login_model');
		
	}
	
	
	
	function login()  //로그인 페이지 2017-05-11
	{	
		$this->_head_login();
		//$this->_top_login();
		$this->load->view('/joinus/login2');
		$this->_joinus_script();

	}
	function member()  //회원가입 페이지 2017-05-11
	{
		$this->_head_login();
		$this->_top_login();
		$this->load->view('/joinus/member');
		$this->_scripts();
	
	}
	


	function logout()  //로그아웃할 경우 session 삭제
	{
		$this->session->sess_destroy();
		
		redirect('http://yoojjtt.cafe24.com/index.php/auth/login');
	}


    function authority() //로그인할 경우 session 생성 (form action='위치') 2017-05-11
	{	

		$this->form_validation->set_rules('id','아이디','required');
		$this->form_validation->set_rules('password','비밀번호','required'); 

		if ($this->form_validation->run() == FALSE){	// form 유효성검사가 FALSE 이면 다시 로그인	
            $this->_head_login();
            //$this->_top_login();
            $this->load->view('/joinus/login2');
            $this->_joinus_script();

		}else{ // form 유효성이 TRUE 라면 login_model/author로 입력한 id, password값을 전달한다.

				$id		= $this->input->post('id');
				$pwd	= $this->input->post('password');
				$login	= $this->login_model->author($id,$pwd);
				
				if($login){ //ID, PASSWORD가 일치하는 memeber가 있으면 session정보를 생성한다.
						$this->session->set_userdata(array(
						        'is_login'		=>true,
                                'no'			=>$login[0]->no,
                                'userName'		=>$login[0]->name,
                                'level'			=>$login[0]->level,
								'companyName'	=>$login[0]->companyName

                        ));//session 정보 생성완료
						
						$companyName = $this->session->userdata('companyName');// 변수에 companyName 세션정보를 담는다.
						
						$enroll = $this->login_model->tax_author($companyName);// txa_table에서 회사명변수와 일치하는 세금정보를 조회한다.
						
						if($enroll){ //회사명과 일치하는 세금정보가 있으면 TRUE, 없으면 FALSE
							$this->session->set_userdata('enroll', true);
						}else{
							$this->session->set_userdata('enroll', false);
						}
					
						redirect('http://yoojjtt.cafe24.com/index.php/topic');
				}else{// ID, PASSWORD가 일치하지 않으면 실패 메세지를 전달한다.
				
						
						$fail = $this->session->set_flashdata('message','일치하는 계정이 없습니다.');
						redirect('http://yoojjtt.cafe24.com/index.php/auth/login',$fail);
					
						 
				}

		}// form 유효성이 TRUE 일 경우 END

		
	} //authorty() END

	
	
	
}
