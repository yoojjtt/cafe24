<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class KosuInfo_Ajax extends MY_Controller {
	function __construct(){
		parent::__construct();	
		$this->load->model('enroll/Kosu_model');
		
	}
	public function Kosu_ajax()  //2017-05-24 (현황만을 확인하기 위해서) STEP1에서 현장만 선택하고 바로 STEP 3로 넘어가는 경우
	{	
		$call = $this->input->post(array('selected_hyunjang_num','date'));
		$topic_res = $this->Kosu_model->kosu($call);

		echo json_encode($topic_res, JSON_UNESCAPED_UNICODE);
		
		return;

	}




	
	
	




}
	
	



