<?
defined('BASEPATH') OR exit('No direct script access allowed');

Class Login_model extends CI_Model{
	function __construct(){
		parent::__construct();	
	}
	


	function author($id, $password)  // ID�� PWD�� ��ġ�ϴ� ���� �ִٸ� LOGIN 2017-05-11
	{	

        $res = $this->db->get_where('zetyx_member_table',array(	'user_id'=>$id, 'password'=>$password))->result();
        if($res){
            return $res;

        }else{

            return false;


        }
	}

	function tax_author($companyName)  // ȸ���� ��ġ�ϴ� ���������� �ִٸ� ��� RETURN 2017-05-11
	{
		return $this->db->get_where('tax_table',array('companyName'=>$companyName))->result();
	}
	


	
		
}


	
?>