<?
defined('BASEPATH') OR exit('No direct script access allowed');

Class Login_model extends CI_Model{
	function __construct(){
		parent::__construct();	
	}
	


	function author($id, $password)  // ID와 PWD가 일치하는 것이 있다면 LOGIN 2017-05-11
	{	

        $res = $this->db->get_where('zetyx_member_table',array(	'user_id'=>$id, 'password'=>$password))->result();
        if($res){
            return $res;

        }else{

            return false;


        }
	}

	function tax_author($companyName)  // 회사명과 일치하는 세금정보가 있다면 결과 RETURN 2017-05-11
	{
		return $this->db->get_where('tax_table',array('companyName'=>$companyName))->result();
	}
	


	
		
}


	
?>