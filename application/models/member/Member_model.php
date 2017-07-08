<?
defined('BASEPATH') OR exit('No direct script access allowed');

Class Member_model extends CI_Model{
	function __construct(){
		parent::__construct();	
	}
	

	function select($select) //2017-05-11 회원가입 form:  회사선택 input append
	{	
		return $this->db->query('SELECT*FROM company')->result();
		//$this->db->get('company')->result();
	}

	function id_check($user_id) //2017-05-11 회원가입 form:  ID check btn
	{	
		return $this->db->get_where('zetyx_member_table',array('user_id'=> $user_id))->result();
		
	}

	function jumin_check($jumin1,$jumin2)  //2017-05-11 회원가입 form:  주민번호 check btn
	{	
		return $this->db->get_where('zetyx_member_table',array('jumin1'=> $jumin1, 'jumin2'=>$jumin2))->result();
		
	}

	function member_add($member)  //2017-05-11 회원가입 form:  가입 btn  id,jumin 기존가입자에 일치여부 확인 후 INSERT
	{	

		
		$match = $this->db->query('SELECT * FROM `zetyx_member_table` 
					WHERE `user_id`LIKE'. "'%". $member['user_id']. "%'"
					.'OR `name`='. "'". $member['name']. "'"
					.'OR `jumin2`='. "'". $member['jumin2']. "'"
					
					
					)->result();
	
		if($match == TRUE){
			return false;
				
		}else{
			$this->db->set('wdate','NOW()', false);
			$this->db->insert('zetyx_member_table',array(
				'user_id'			=>$member['user_id'],
				'password'			=>$member['password'],
				'name'				=>$member['name'],
				'email'				=>$member['email'],
				'jumin1'			=>$member['jumin1'],
				'jumin2'			=>$member['jumin2'],
				'handphone'			=>$member['handphone'],
				'address'			=>$member['address'],
				'companyName'		=>$member['companyName'],
			
			));
			return $this->db->get_where('zetyx_member_table',array('user_id'=> $member['user_id']))->result();
		}
			
	}
		
}


	
?>