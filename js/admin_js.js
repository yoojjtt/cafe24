
<!--
function board(btm,pum,kum,board_code){
	
//	location.href="/admin/consulting/main_"+btm+"_"+kum+".php?pum="+pum+'&kum='+kum
    location.href="/admin/consulting/main_"+btm+"_"+kum+".php?board_code="+board_code;
}
function left_menu_09(btm,pum,kum){
	
//	location.href="/admin/consulting/main_"+btm+"_"+kum+".php?pum="+pum+'&kum='+kum
    location.href="/admin/consulting/main_"+btm+"_"+kum+".php";
}
function left_menu_10(btm,pum,kum){
	
	//location.href="/admin/consulting/main_"+btm+"_"+kum+".php?pum="+pum+'&kum='+kum
	location.href="/admin/consulting/main_"+btm+"_"+kum+".php";
}
function left_menu_11(btm,pum,kum){//test��
	
	//location.href="/admin/consulting/main_"+btm+"_"+kum+".php?pum="+pum+'&kum='+kum
	location.href="/admin/consulting/main_"+btm+"_"+kum+".php";
}
function left_menu_12(btm,pum,kum){//test��
	
	//location.href="/admin/consulting/main_"+btm+"_"+kum+".php?pum="+pum+'&kum='+kum
	location.href="/admin/retire/retire_"+btm+"_"+kum+".php";
}
function button_01(btm,kum){

		var fobj;
			//alert(btm)
			fobj = document.form1;
			document.form1.target="_self";
			//fobj.action="/admin/consulting/main_"+btm+"_"+kum+".php?pum="+btm+"&kum="+kum;
			fobj.action="/admin/consulting/main_"+btm+"_"+kum+".php";
			fobj.submit();
	}
function button_02(btm,kum){

		var fobj;
			//alert(btm)
			fobj = document.form1;
			document.form1.target="_self";
			//fobj.action="/admin/consulting/main_"+btm+"_"+kum+".php?pum="+btm+"&kum="+kum;
			fobj.action="/admin/retire/retire_"+btm+"_"+kum+".php";
			fobj.submit();
	}
function kosu_change(){
		var kind=document.form1.kosu.value
		if(kind==10){
			eval("document.all.money_7.style.display = '' ")
		}else{
			eval("document.all.money_7.style.display = 'none' ")
		}
}
function job_change(){
	
		var kind=document.form1.job.value
		if(kind=='��Ÿ'){
			eval("document.all.money_8.style.display = '' ")
		}else{
			eval("document.all.money_8.style.display = 'none' ")
		}
}
function danga_sujeong(val){
     if(!val){
			alert('������ �Է� �Ǿ�߸� ���� �����մϴ�!');
			return false;
	 }

	 url="/admin/pop_up/danga_sujeong.php?num="+val;
	f_OpenModalPop("danga_sujeong",url,1,600,300)
	//var winl = (screen.width - 1024) / 2
	//	var wint = (screen.height - 768) / 2
	//	window.open('/admin/pop_up/danga_sujeong.php?num='+val,'danga_sujeong','left='+winl+',top='+wint+',resizable=yes,width=500,height=400,scrollbars=no,status=yes')
 
}
function danga_search(){
	var form = document.form1;
	var kind=form1.hyun_jang_cord.value
	if(kind=='0' || kind==''){
		alert('������� �����ϼ���!')
			form.hyunjang_cord.focus()
			return
	}
	if(!form1.daily_member_num.value){
		alert('�������� ��ȸ�ϼ���!')
			form.search_name.focus()
			return
	}
	    document.form1.target = 'kosu_daily_list'
		document.form1.action = '/admin/query/danga_input.php?num='+kind+'&search='+1
		document.form1.submit();

}
function clear_name(){
	form1.daily_member_num.value=''
	form1.search_name.value=''
	form1.jumin1.value=''
	form1.jumin2.value=''
	form1.oun_phone.value=''
	form1.postnum.value=''
	form1.address1.value=''
	form1.address2.value=''
	form1.job.value=''
	//document.form1.daily_salary.value=''
	document.form1.target = 'kosu_daily_list'
	document.form1.action = '/admin/query/danga_input.php'
	document.form1.submit();
}

function danga_input(){
	var form = document.form1;
	var kind=form1.hyun_jang_cord.value
	if(kind=='0' || kind==''){
		alert('������� �����ϼ���!')
			form.hyun_jang_name.focus()
			return
	}
	if(!form.search_name.value){
		alert('������� �Է��ϼ���!')
			form.search_name.focus()
			return
	}
	//	alert(document.form1.kosu.value)
	/*	if(form1.date.value.length!=10){
		alert('���ں��� �Է��ϼ���!')
			form.search_name.focus()
			return
	}
		if(!form1.daily_salary.value){
		alert('�ܰ����� �Է��ϼ���!')
			form.daily_salary.focus()
			return
	}*/
	//if(confrim(form1.search_name.value ���� �ܰ��� �Է��մϴ�)){
   
	//document.all.monthly_list.style.display = "";

		//if(confirm(form1.search_name.value+'��/n'+form1.date.value)){ 
		//window.open('','danga_input','width=100,height=100,top=300,left=500,scrollbars=no,status=yes')
		document.form1.target = 'kosu_daily_list'
		document.form1.action = '/admin/query/danga_input.php?num='+kind+'&search='+2
		document.form1.submit();
	
}

function daily_search_jumin(){//�ֹι�ȣ��ȸ
	var kind=form1.hyun_jang_cord.value;
	
	if(kind=='0' || kind==''){
		alert('������� �����ϼ���!')
			form1.hyun_jang_name.focus()
			return
	}
	if(!form1.jumin1.value ){
		alert('�ֹι�ȣ ���ڸ�!')
			form1.jumin1.focus()
			return false;
	}
	if(!form1.jumin2.value ){
		alert('�ֹι�ȣ ���ڸ�!')
			form1.jumin2.focus()
			return false;
	}
	var jumin1=form1.jumin1.value;
	var jumin2=form1.jumin2.value;
	 var url
	url="/admin/query/daily_search_jumin.php?jumin1="+jumin1+"&jumin2="+jumin2+"&hyun_jang_cord="+kind;
	f_OpenModalPop("jumin",url,1,400,300)
	
  
}
function daily_search_name(){
	
	
	var kind=form1.hyun_jang_cord.value;
	
	if(kind=='0' || kind==''){
		alert('������� �����ϼ���!')
			form1.hyun_jang_cord.focus()
			return
	}
	
	if(!form1.search_name.value ||form1.search_name.value=='�������Է�' ){
		alert('������� �Է��ϼ���!')
			form1.search_name.focus()
			return false;
	}
    var url
	url = "/admin/query/daily_search_name.php?mode=def"+"&hyun_jang_cord="+kind+"&search_name="+form1.search_name.value
	f_OpenModalPop("nameFind",url,1,600,450)
		//window.open('','search_name_2','width=400,height=150,top=500,left=500,scrollbars=no,status=no')
		//document.form1.target = 'search_name_2'
		//document.form1.action = '/admin/query/daily_search_name.php?num='+kind
		//document.form1.submit();

}
function searchName(){
	
	
	var kind=form1.hyun_jang_cord.value;
	
	if(kind=='0' || kind==''){
		alert('������� �����ϼ���!')
			form1.hyun_jang_name.focus()
			return
	}
	
	if(!form1.oun_name.value ||form1.oun_name.value=='�������Է�' ){
		alert('������� �Է��ϼ���!')
			form1.oun_name.focus()
			return false;
	}
    var url
	url = "/admin/query/daily_oun_name.php?mode=def"+"&hyun_jang_cord="+kind+"&oun_name="+form1.oun_name.value
	f_OpenModalPop("nameFind",url,1,600,450)
		//window.open('','search_name_2','width=400,height=150,top=500,left=500,scrollbars=no,status=no')
		//document.form1.target = 'search_name_2'
		//document.form1.action = '/admin/query/daily_search_name.php?num='+kind
		//document.form1.submit();

}
function pass_seach(val){
	//alert(val)
	var url
	url = "/admin/pop_up/passwordSearch.php?mode=def"+"&id="+val;
	f_OpenModalPop("passSearch",url,1,600,450)


}
function bogoja_search_name(){//�����̸� ��ȸ
	/*if(!form1.bogoja.value){
		alert('�����̸��� �Է��ϼ���!')
			form1.bogoja.focus()
			return false;
	}*/
	 var url
	url="/admin/query/bogoja_search_name.php?bogoja="+form1.bogoja.value;
	f_OpenModalPop("bogoja_2",url,1,400,300)
	

}

function hyung_search(val,pum,kum){
	
	if(val==1){//���� ���
		document.form1.hyun_jang_number.value=''
		document.form1.kosa_name.value=''
		document.form1.balju_company.value=''
		document.form1.kosa_gigan_start.value=''
		document.form1.kosa_gigan_start.value=''
		document.form1.kosa_gigan_end.value=''
		document.form1.search_name.value=''
		document.form1.jumin1.value=''
		document.form1.jumin2.value=''
		document.form1.oun_phone.value=''
		document.form1.job.value=''
		document.form1.input_danga.value=''
		document.form1.postnum.value=''
		document.form1.address1.value=''
		document.form1.address2.value=''
		//document.form1.daily_salary.value=''
		//document.form1.daily_salary.value=''
		document.form1.target = 'kosu_daily_list'
		document.form1.action = '/admin/query/danga_input.php'//ȭ���� ���ε� �ϱ� ���ؼ� ������å
		document.form1.submit();

	}
	var kind=form1.hyunjang_cord.value
	if(kind=='0'){
		alert('������� �����ϼ���!')
			form1.hyunjang_cord.focus()
			return
	}

		
		//window.open('','hyung_search','width=5,height=5,top=500,left=500,scrollbars=no,status=no')
		document.form1.target = '_self'
		document.form1.action = '/admin/consulting/main_06.php?val='+val+'&pum='+pum+'&kum='+kum+'&kind='+kind
	//	document.form1.action = '/admin/query/num_hyun_jang.php?val='+val
		document.form1.submit();
}


function hyung_sea_2(val,pum,kum){
	
	if(val==1){//���� ���
		document.form1.hyun_jang_number.value=''
		document.form1.kosa_name.value=''
		document.form1.balju_company.value=''
		document.form1.kosa_gigan_start.value=''
		document.form1.kosa_gigan_start.value=''
		document.form1.kosa_gigan_end.value=''
		document.form1.search_name.value=''
		document.form1.jumin1.value=''
		document.form1.jumin2.value=''
		document.form1.oun_phone.value=''
		document.form1.job.value=''
		document.form1.input_danga.value=''
		document.form1.postnum.value=''
		document.form1.address1.value=''
		document.form1.address2.value=''
		//document.form1.daily_salary.value=''
		//document.form1.daily_salary.value=''
		document.form1.target = 'kosu_daily_list'
		document.form1.action = '/admin/query/danga_input.php'//ȭ���� ���ε� �ϱ� ���ؼ� ������å
		document.form1.submit();

	}
	var kind=form1.hyunjang_cord.value
	if(kind=='0'){
		alert('������� �����ϼ���!')
			form1.hyunjang_cord.focus()
			return
	}

		
		//window.open('','hyung_search','width=5,height=5,top=500,left=500,scrollbars=no,status=no')
		document.form1.target = '_self'
		document.form1.action = '/admin/consulting/main_05.php?val='+val+'&pum='+pum+'&kum='+kum+'&kind='+kind
	//	document.form1.action = '/admin/query/num_hyun_jang.php?val='+val
		document.form1.submit();
}
function hyung_search_2(){//���������� ������ ��� �Ҷ� �ܰ� �κ��� ���̾� ó���ϱ� ����
	
	var kind=form1.hyun_jang_cord.value
	if(kind=='0'){
		alert('������� �����ϼ���!')
			document.all.car_num.style.display = "none";
			form1.hyunjang_cord.focus()
			return
	}
	if(kind!='0'){
		
			document.all.car_num.style.display = "";
			
	}
		window.open('','hyung_search','width=5,height=5,top=500,left=500,scrollbars=no,status=no')
		document.form1.target = 'hyung_search'
		document.form1.action = '/admin/query/num_hyun_jang.php?num='+kind
		document.form1.submit();
}

function print_pdf(){
	
	var kind=form1.hyun_jang_cord.value
	if(kind=='0'){
		alert('������� �����ϼ���!')
			form1.hyun_jang_cord.focus()
			return
	}
		window.open('','print_pdf','width=1110,height=500,top=100,left=100,scrollbars=no,status=no')
		document.form1.target = 'print_pdf'
		document.form1.action = '/admin/pdf/fpdf153/drive_retire.php?num='+kind
		document.form1.submit();
}
function new_print_pdf(){
	
	var kind=form1.hyun_jang_cord.value
	if(kind=='0'){
		alert('������� �����ϼ���!')
			form1.hyun_jang_cord.focus()
			return
	}
		window.open('','print_pdf','width=1110,height=500,top=100,left=100,scrollbars=no,status=no')
		document.form1.target = 'print_pdf'
		document.form1.action = '/admin/print/dailyMemberPayList.php?num='+kind
		document.form1.submit();
}
function new_print_pdf2(){
	
	var kind=form1.hyun_jang_cord.value
	if(kind=='0'){
		alert('������� �����ϼ���!')
			form1.hyun_jang_cord.focus()
			return
	}
		window.open('','print_pdf2','width=1110,height=500,top=100,left=100,scrollbars=no,status=no')
		document.form1.target = 'print_pdf2'
		document.form1.action = '/admin/print/dailyMemberPayListMe.php?num='+kind
		document.form1.submit();
}

function nomuPrint(){ //�빫������������ ����Ʈ �ϱ�����


	var kind=form1.hyun_jang_cord.value
	if(kind=='0'){
		alert('������� �����ϼ���!')
			form1.hyun_jang_cord.focus()
			return
	}
		window.open('','dtde','width=600,height=500,top=100,left=100,scrollbars=no,status=no')
		document.form1.target = 'dtde'
		document.form1.action = '/admin/print/numuPrint.php?num='+kind
		document.form1.submit();

}
function new_print(){ //���������� ����Ʈ �ϱ�����


	var kind=form1.hyun_jang_cord.value
	if(kind=='0'){
		alert('������� �����ϼ���!')
			form1.hyun_jang_cord.focus()
			return
	}
		window.open('','dtde','width=600,height=500,top=100,left=100,scrollbars=no,status=no')
		document.form1.target = 'dtde'
		document.form1.action = '/admin/print/pagePrint.php?num='+kind
		document.form1.submit();

}
function new_print_pdf_2(){
	
	var kind=form1.hyun_jang_cord.value
	if(kind=='0'){
		alert('������� �����ϼ���!')
			form1.hyun_jang_cord.focus()
			return
	}
		window.open('','print_pdf','width=1110,height=500,top=100,left=100,scrollbars=no,status=no')
		document.form1.target = 'print_pdf'
		document.form1.action = '/admin/print/jobDaily.php?num='+kind
		document.form1.submit();
}
function new_print_pdf_3(){//���ڹ�ȣ�� �Բ� ����� ����
	
	var kind=form1.hyun_jang_cord.value
	if(kind=='0'){
		alert('������� �����ϼ���!')
			form1.hyun_jang_cord.focus()
			return
	}
		window.open('','print_pdf','width=1110,height=500,top=100,left=100,scrollbars=no,status=no')
		document.form1.target = 'print_pdf'
		document.form1.action = '/admin/print/dailyMemberPayList_2.php?num='+kind
		document.form1.submit();
}
function left_menu_01(btm,pum,kum){
	
	//location.href="/admin/consulting/main_0"+btm+".php?pum="+pum+'&kum='+kum
	location.href="/admin/consulting/main_0"+btm+".php";
}
/*
function main_03(){//����
	
	location.href="/admin/consulting/main_03.php?pum=2"
}
function main_02(){//�빫�� �Է�
	
	location.href="/admin/consulting/main_02.php?pum=2"
}
function main_04(){//�����Է�
	
	location.href="/admin/consulting/main_04.php?pum=2"
}*/
function chkmodify_dong_bu(u_id,u_id_2){
		var winl = (screen.width - 1024) / 2
		var wint = (screen.height - 768) / 2
		window.open('/category/admin/pop_up/search_daeli_dong_bu.php?num='+u_id+'&num_2='+u_id_2,'Union_bu_00','left='+winl+',top='+wint+',resizable=yes,width=900,height=550,scrollbars=no,status=yes')
}
function clearText(thefield){
	if(thefield.defaultValue==thefield.value){
		thefield.value="";
	}
}
function kosa_gigan_check(){
	var form = document.form1;
	//alert('1')
	
	var start_year		=form.kosa_gigan_start.value.substring(0,4)
		var start_month	=form.kosa_gigan_start.value.substring(4,6)
		var start_day	 	=form.kosa_gigan_start.value.substring(6,8)
	if(form.kosa_gigan_start.value.length!=8){
		alert('����Ⱓ �������� 8�ڸ��Դϴ�.')
					form.kosa_gigan_start.focus();
				return;
	}
	if(start_month <1 || start_month >12 || start_day<1 || start_day >31){
				alert('����Ⱓ ���� �߸� �Է��Ͽ����ϴ�')
					form.kosa_gigan_start.focus();
				return;
			}
	if(form.kosa_gigan_start.value.length==8){
		
		
			
		
		form.kosa_gigan_start.value=start_year+"-"+start_month+"-"+start_day;
		return;
	
	}
	
}
function kosa_gigan_check_2(){
	var form = document.form1;
	if(form.kosa_gigan_start.value.length==10){
		var start_year		=form.kosa_gigan_start.value.substring(0,4)
		var start_month		=form.kosa_gigan_start.value.substring(5,7)
		var start_day	 	=form.kosa_gigan_start.value.substring(8,10)	
		
		form.kosa_gigan_start.value=start_year+start_month+start_day;
	}

}
function focus_kosa_gigan_start(){
 	var form = document.form1;
	if(form.kosa_gigan_start.value.length=='8')
	 form.kosa_gigan_end.focus();
}

function kosa_gigan_check_end(){
	var form = document.form1;
	//alert('1')
	
	var start_year		=form.kosa_gigan_end.value.substring(0,4)
		var start_month	=form.kosa_gigan_end.value.substring(4,6)
		var start_day	 	=form.kosa_gigan_end.value.substring(6,8)
	
	if(form.kosa_gigan_end.value.length!=8){
		alert('����Ⱓ �������� 8�ڸ��Դϴ�.')
					form.kosa_gigan_end.focus();
				return;
	}
	if(start_month <1 || start_month >12 || start_day<1 || start_day >31){
				alert('����Ⱓ ������ ���� �߸� �Է��Ͽ����ϴ�..')
					form.kosa_gigan_end.focus();
				return;
	}
	if(form.kosa_gigan_end.value.length==8){
		

		
			
		
		form.kosa_gigan_end.value=start_year+"-"+start_month+"-"+start_day;

	
	}
	
}
function kosa_gigan_check_2_end(){
	var form = document.form1;
	if(form.kosa_gigan_end.value.length==10){
		var start_year		=form.kosa_gigan_end.value.substring(0,4)
		var start_month		=form.kosa_gigan_end.value.substring(5,7)
		var start_day	 	=form.kosa_gigan_end.value.substring(8,10)

		
			
		
		form.kosa_gigan_end.value=start_year+start_month+start_day;
	}

}
function focus_kosa_gigan_end(){
 	var form = document.form1;
	if(form.kosa_gigan_end.value.length=='8')
	 form.bogoja.focus();
}
function start_check(){
	var form = document.form1;
	//alert('1')
	if(form.start.value.length==8){
		var start_year		=form.start.value.substring(0,4)
		var start_month	=form.start.value.substring(4,6)
		var start_day	 	=form.start.value.substring(6,8)

		
			if(start_month <1 || start_month >12 || start_day<1 || start_day >31){
				alert('�Է°��� �߸� �Ǿ����ϴ�')
					form.start.focus();
				return;
			}
		
		form.start.value=start_year+"-"+start_month+"-"+start_day;

	
	}else{
		alert('�Է°��� �߸� �Ǿ����ϴ�(8�ڸ�)!')
					form.start.focus();
				return;
	}
}
function start_check_2_2(){
	var form = document.form1;
	if(form.start.value.length==10){
		var start_year		=form.start.value.substring(0,4)
		var start_month		=form.start.value.substring(5,7)
		var start_day	 	=form.start.value.substring(8,10)

		
			
		
		form.start.value=start_year+start_month+start_day;
	}

}
function end_check(){
	var form = document.form1;
		var start_year		=form.end.value.substring(0,4)
		var start_month	=form.end.value.substring(4,6)
		var start_day	 	=form.end.value.substring(6,8)
	if(form.end.value.length!=8){
			alert('�Է°��� �߸� �Ǿ����ϴ�(8�ڸ�)!')
					form.end.focus();
				return;
		}
	if(start_month <1 || start_month >12 || start_day<1 || start_day >31){
				alert('�Է°��� �߸� �Ǿ����ϴ�')
					form.end.focus();
				return;
			}
	if(form.end.value.length==8){
		form.end.value=start_year+"-"+start_month+"-"+start_day;
		}
	}
function end_check_2_2(){
	var form = document.form1;
	
	  if(form.end.value.length==10){
		  
		var start_year		=form.end.value.substring(0,4)
		var start_month		=form.end.value.substring(5,7)
		var start_day	 	=form.end.value.substring(8,10)
		form.end.value=start_year+start_month+start_day;
	  }
}
function end_2_check(){
	var form = document.form1;
		var start_year		=form.end_2.value.substring(0,4)
		var start_month	=form.end_2.value.substring(4,6)
		var start_day	 	=form.end_2.value.substring(6,8)
	if(form.end_2.value.length!=8){
			alert('�Է°��� �߸� �Ǿ����ϴ�(8�ڸ�)!')
					form.end_2.focus();
				return;
		}
	if(start_month <1 || start_month >12 || start_day<1 || start_day >31){
				alert('�Է°��� �߸� �Ǿ����ϴ�')
					form.end_2.focus();
				return;
			}
	if(form.end_2.value.length==8){
		form.end_2.value=start_year+"-"+start_month+"-"+start_day;
		}
	}
function end_2_check_2_2(){
	var form = document.form1;
	
	  if(form.end_2.value.length==10){
		  
		var start_year		=form.end_2.value.substring(0,4)
		var start_month		=form.end_2.value.substring(5,7)
		var start_day	 	=form.end_2.value.substring(8,10)
		form.end_2.value=start_year+start_month+start_day;
	  }
}
function year_month_check(){
	var form = document.form1;
		var start_year		=form.year_month.value.substring(0,4)
		var start_month	=form.year_month.value.substring(4,6)
		
	if(form.year_month.value.length!=6){
			alert('�Է°��� �߸� �Ǿ����ϴ�(6�ڸ�)!')
					form.year_month.focus();
				return;
		}
		
	if(start_year<2007 || start_month <1 || start_month >12 ){
				alert('�Է°��� �߸� �Ǿ����ϴ�1')
					form.year_month.focus();
				return;
			}
	if(form.year_month.value.length==6){
		form.year_month.value=start_year+"-"+start_month;
		}
	}
function year_month_check_2_2(){
	var form = document.form1;
	
	  if(form.year_month.value.length==7){
		  
		var start_year		=form.year_month.value.substring(0,4)
		var start_month		=form.year_month.value.substring(5,7)
	
		form.year_month.value=start_year+start_month+start_day;
	  }
}
function date_check(){
	var form = document.form1;
		var start_year		=form.date.value.substring(0,4)
		var start_month	=form.date.value.substring(4,6)
		var start_day	 	=form.date.value.substring(6,8)
		if(form.date.value.length!=8){
			alert('�Է°��� Ʋ���ϴ�(8�ڸ�)')
				form.date.focus();
			return;
		
		}
		if(start_month <1 || start_month >12 || start_day<1 || start_day >31){
			alert('�Է°��� �߸� �Ǿ����ϴ�')
				form.date.focus();
			return;
		}
	if(form.date.value.length==8){
		form.date.value=start_year+"-"+start_month+"-"+start_day;
		}
	}
function date_check_2_2(){
	var form = document.form1;
	
	  if(form.date.value.length==10){
		  
		var start_year		=form.date.value.substring(0,4)
		var start_month		=form.date.value.substring(5,7)
		var start_day	 	=form.date.value.substring(8,10)
		form.date.value=start_year+start_month+start_day;
	  }
}

function phone_check(){

	var form = document.form1;
		
	 
			 if(form.oun_phone.value.length=='9'){
				
			
				var phone_first		=form.oun_phone.value.substring(0,2)
				var phone_second   =form.oun_phone.value.substring(2,5)
				var phone_third	 	=form.oun_phone.value.substring(5,9)

					form.oun_phone.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.oun_phone.value.length=='10'){
				
			
				var phone_first		=form.oun_phone.value.substring(0,3)
				var phone_second   =form.oun_phone.value.substring(3,6)
				var phone_third	 	=form.oun_phone.value.substring(6,10)

					form.oun_phone.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.oun_phone.value.length=='11'){
					
				var phone_first		=form.oun_phone.value.substring(0,3)
				var phone_second   =form.oun_phone.value.substring(3,7)
				var phone_third	 	=form.oun_phone.value.substring(7,11)

							
				form.oun_phone.value=phone_first+"-"+phone_second+"-"+phone_third;
				
			  }
	}


	function phone_check_2(){

	var form = document.form1;
		
	 
			 if(form.oun_phone.value.length=='11'){
				
			
				var phone_first		=form.oun_phone.value.substring(0,2)
				var phone_second   =form.oun_phone.value.substring(3,6)
				var phone_third	 	=form.oun_phone.value.substring(7,12)

					form.oun_phone.value=phone_first+phone_second+phone_third;

			 }else if(form.oun_phone.value.length=='12'){
				
			
				var phone_first		=form.oun_phone.value.substring(0,3)
				var phone_second   =form.oun_phone.value.substring(4,7)
				var phone_third	 	=form.oun_phone.value.substring(8,13)

					form.oun_phone.value=phone_first+phone_second+phone_third;

			 }else if(form.oun_phone.value.length=='13'){
					
				var phone_first		=form.oun_phone.value.substring(0,3)
				var phone_second   =form.oun_phone.value.substring(4,8)
				var phone_third	 	=form.oun_phone.value.substring(9,13)

							
				form.oun_phone.value=phone_first+phone_second+phone_third;
				
			  }
	}


	function house_phone_check(){

	var form = document.form1;
		
	 
			 if(form.house_phone.value.length=='9'){
				
			
				var phone_first		=form.house_phone.value.substring(0,2)
				var phone_second   =form.house_phone.value.substring(2,5)
				var phone_third	 	=form.house_phone.value.substring(5,9)

					form.house_phone.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.house_phone.value.length=='10'){
				
			
				var phone_first		=form.house_phone.value.substring(0,3)
				var phone_second   =form.house_phone.value.substring(3,6)
				var phone_third	 	=form.house_phone.value.substring(6,10)

					form.house_phone.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.house_phone.value.length=='11'){
					
				var phone_first		=form.house_phone.value.substring(0,3)
				var phone_second   =form.house_phone.value.substring(3,7)
				var phone_third	 	=form.house_phone.value.substring(7,11)

							
				form.house_phone.value=phone_first+"-"+phone_second+"-"+phone_third;
				
			  }
	}


	function house_phone_check_2(){

	var form = document.form1;
		
	 
			 if(form.house_phone.value.length=='11'){
				
			
				var phone_first		=form.house_phone.value.substring(0,2)
				var phone_second   =form.house_phone.value.substring(3,6)
				var phone_third	 	=form.house_phone.value.substring(7,12)

					form.house_phone.value=phone_first+phone_second+phone_third;

			 }else if(form.house_phone.value.length=='12'){
				
			
				var phone_first		=form.house_phone.value.substring(0,3)
				var phone_second   =form.house_phone.value.substring(4,7)
				var phone_third	 	=form.house_phone.value.substring(8,13)

					form.house_phone.value=phone_first+phone_second+phone_third;

			 }else if(form.house_phone.value.length=='13'){
					
				var phone_first		=form.house_phone.value.substring(0,3)
				var phone_second   =form.house_phone.value.substring(4,8)
				var phone_third	 	=form.house_phone.value.substring(9,13)

							
				form.house_phone.value=phone_first+phone_second+phone_third;
				
			  }
	}
function focus_oun_phone_1(){
	
 var str = document.form1.oun_phone_1.value.length
  if(str =='3'){	
    document.form1.oun_phone_2.focus();
  }
}
function focus_oun_phone_2(){
	
 var str = document.form1.oun_phone_2.value.length
  if(str =='4'){	
    document.form1.oun_phone_3.focus();
  }
}
function focus_oun_phone_3(){
	
 var str = document.form1.oun_phone_3.value.length
  if(str =='4'){	
    document.form1.house_phone_1.focus();
  }
}

function focus_house_phone_1(){
	
 var str = document.form1.house_phone_1.value.length
  if(str =='3'){	
    document.form1.house_phone_2.focus();
  }
}
function focus_house_phone_2(){
	
 var str = document.form1.house_phone_2.value.length
  if(str =='4'){	
    document.form1.house_phone_3.focus();
  }
}
function focus_house_phone_3(){
	
 var str = document.form1.house_phone_3.value.length
  if(str =='4'){	
    document.form1.address1.focus();
  }
}
function focus_jumin_oun_2(){
	
 var str = document.form1.jumin1.value.length
  if(str =='6'){	
    document.form1.jumin2.focus();
  }
}
function focus_jumin_oun_1(){
	
 var str = document.form1.jumin2.value.length
  if(str =='7'){	
    document.form1.oun_name.focus();
  }
}
function focus_jumin_member_1(){
	
 var str = document.form1.jumin2.value.length
  if(str =='7'){	
    document.form1.id.focus();
  }
}
<!--�ּ� ã�� -->
function f_GetArgu() {
		var oMyObject = window.dialogArguments;
		return oMyObject;
	}

function hyunjang_search0(u_id){
		
		var winl = (screen.width - 1024) / 2
		var wint = (screen.height - 768) / 2
		window.open('/admin/pop_up/find_hyunjang.php?mode=def','memo_hagi','left='+winl+',top='+wint+',resizable=yes,width=1000,height=100,scrollbars=no,status=yes')
}

function hyunjang_search(u_il){
	var fobj=document.form1;
	document.form1.hyun_jang_name.value='';
	document.form1.kosa_name.value='';
	document.form1.hyun_jang_cord.value='';
	document.form1.hyun_jang_number.value='';
	document.form1.balju_company.value='';
	document.form1.kosa_gigan_start.value='';
	document.form1.kosa_gigan_end.value='';
	//alert(u_il)
 switch(u_il){
	case '2' ://������ ����� �� �ڵ�
		//������ ����Ʈ ���ε� ��
		     fobj.target="register_common";
			fobj.action="/admin/consulting/php/subphp/main_09_03_register_common.php";
			fobj.submit();
			//�� ��� ���� ���ε� ��
			fobj.target="register_common_2";
	fobj.action="/admin/pop_up/main_09_03_register.php?";//new_a���� ���� ��� �ű��϶� �������尪���� �ʱ�ȭ �ϱ� ����
	fobj.submit();

		break
 

	}
	var url
	url = "/admin/pop_up/find_hyunjang.php?mode=def"
	f_OpenModalPop("AddressFind",url,1,600,450)

}
function findAddr()
{

	//alert('1')
	var url
	url = "/admin/pop_up/find_address.php?mode=def"
	f_OpenModalPop("AddressFind",url,1,456,380)
}
	function f_OpenModalPop(Name,Action,bScroll,width, height) {
		var w, h;
		w = width;
		h = height;
		var strURL = Action;
		var objArgu = new Object();
		objArgu.Width = w;
		objArgu.Height = h;
		objArgu.Action = Action;
		var objWin = f_OpenModal(strURL,objArgu,h,w,0,0,0,1,0,0,0,bScroll,0);
		return objWin;
	}
	function f_OpenModal(strURL,arrArguVal,nHeight,nWidth,nTop,nLeft,bEdge,bCenter,bHelp,bResiz,bStatus,bScroll,bUnadorned) {
		var strTop = '';
		if(nTop > 0) {
			strTop = 'dialogTop:'+nTop+'px;';
		}
		var strLeft = '';
		if(nLeft > 0) {
			strLeft = 'dialogLeft:'+nLeft+'px;';
		}
		var strEdge = '';
		if(bEdge != '') {
			strEdge = "edge:";
			strEdge += (bEdge > 0) ? 'raised' : 'sunken';
			strEdge += ';';
		}
		var objArgu = new Object();
		objArgu.objWin = self;
		objArgu.objParam = arrArguVal;
		var objWin = window.showModalDialog(strURL,objArgu,"dialogHeight:"+nHeight+"px;dialogWidth:"+nWidth+"px;"+strTop+strLeft+strEdge+"center:"+bCenter+";help:"+bHelp+";resizable:"+bResiz+";status:"+bStatus+";scroll:"+bScroll+";unadorned:"+bUnadorned+";");
		return objWin;
	}
	function f_InitSetModal(objPara) {
		if(typeof(objPara)=='object') {
			var nWidth = objPara.Width;
			var nHeight = objPara.Height;
			var strAction = objPara.Action;
			var arrArgu = new Array(true,nWidth,nHeight,strAction);
		} else {
			var arrArgu = new Array(false,0,0,'None');
		}
		return arrArgu;
	}

	<!--�ּ�ã�� ��-->
	function errorInput(){
	alert('�ּ� ��ư�� Ŭ���ϼ���')
		document.form1.add_button.focus()
		return;
}
function jump(){
	
	var form;
		form = document.form1;
		
		if(form.c_name.value=='1' || form.c_name.value=='2'||form.c_name.value=='3' ||form.c_name.value=='4'){
			form.search_name.focus();
		}
}
//������ȣ�� �����ȣ�� ����
function jump()
{
	var val = document.form1.c_name.value;

	// �����ȣ�� ���
	if(val == 4)
	{
		document.all.car_num.style.display = "none";
		document.all.car_num_header.style.display = "";
		//document.form1.preminum="";
		//document.all.temp_num.style.display = "";
		//document.all.B1__CAR__CHASSIS__YN.value = val;
		//f.junkuk.checked = false;
	}
	// ������ȣ�� ���
	else if(val == 1)
	{
		document.all.car_num.style.display = "";
		//�߰�
		
		document.all.car_num_header.style.display = "none";
		//document.form1.preminum="";
		//document.all.temp_num.style.display = "none";
		//document.all.temp_num1.style.display = "none";
		//document.all.B1__CAR__CHASSIS__YN.value = val;
	}
}
function certi_check(){
	var form;
		form = document.form1;
		if(form.c_name.value=='4'){
			var bar_1=form.search_name.value.substring(2,3);
		
			if(form.search_name.value.length <'9' && form.search_name.value.length >='1' &&  bar_1!='-' ){
					alert('���ǹ�ȣ�� 9�ڸ��Դϴ�')
						form.search_name.focus();
						return false;
					}
			if(form.search_name.value.length !='10' && bar_1!='-' ){
				if(!IsNumber2(form.search_name.name)){
					 alert("���ǹ�ȣ�� �����̾�� �մϴ�");
					 form.search_name.focus();
					 return false;
				  }
			}
			if(form.search_name.value.length >='10' && bar_1!='-' ){
					alert('���ǹ�ȣ�� 9�ڸ��Դϴ�1')
						form.search_name.focus();
						return false;
					}
			if(form.search_name.value.length =='9'){
				var start_year		=form.search_name.value.substring(0,2)
				var start_month	    =form.search_name.value.substring(2,9)
		

				
					if(start_year <05 || start_year >07 ){
						alert('�Է°��� �߸� �Ǿ����ϴ�')
							form.search_name.focus();
						return;
					}
				
				form.search_name.value=start_year+"-"+start_month;
				
			}
		}
}
function certi_check_reverse(){
		var form;
		form = document.form1;
		if(form.c_name.value=='4'){
			var bar=form.search_name.value.substring(2,3)
				
			if(form.search_name.value.length =='10' && bar=='-'){
				var start_year		=form.search_name.value.substring(0,2)
				var start_month	=form.search_name.value.substring(3,10)
				
					form.search_name.value=start_year+start_month;
			}
	}
}
function IsNumber2(formname)
{
     var form=eval("document.form1." + formname);

     for(var i=0; i < form.value.length; i++){
         var chr = form.value.substr(i,1);
         if((chr < '0' || chr > '9')){
            return false;
         }
     }
     return true;
  }
function driver_search_2007(){//�븮������ ��ȸ
	
	location.href="/category/admin/consulting/drive_name_search.php?item=206&search=1"
}
function retire_record(u_id){
		var winl = (screen.width - 1024) / 2
		var wint = (screen.height - 768) / 2
		window.open('/category/admin/pdf/fpdf153/drive_retire.php?num='+u_id,'Union_ca_2','left='+winl+',top='+wint+',resizable=yes,width=900,height=570,scrollbars=no,status=no')
}
function chkmodify_drive(u_id){//�븮�������� ��� ���� ��ȸ�ϱ�
	
		var winl = (screen.width - 1024) / 2
		var wint = (screen.height - 768) / 2
		window.open('/category/admin/pop_up/dongbu_drive.php?num='+u_id,'Union','left='+winl+',top='+wint+',resizable=yes,width=950,height=550,scrollbars=yes,status=yes')
}
function memo_hagi(u_id){
		
		var winl = (screen.width - 1024) / 2
		var wint = (screen.height - 768) / 2
		window.open('/category/admin/pop_up/memo_.php?pum='+u_id,'memo_hagi','left='+winl+',top='+wint+',resizable=yes,width=1000,height=100,scrollbars=no,status=yes')
}

function admin_hq_register(u_id){//�Ͽ��� ���
		var winl = (screen.width - 1024) / 2
		var wint = (screen.height - 768) / 2
		window.open('/admin/pop_up/hq_register.php?new_strore='+u_id,'Union','left='+winl+',top='+wint+',resizable=yes,width=500,height=480,scrollbars=yes,status=yes')
}
function member_join(u_id){
	
		var winl = (screen.width - 2048) / 2
		var wint = (screen.height - 768) / 2
		window.open('/admin/pop_up/member_join.php?new_strore='+u_id,'member','left='+winl+',top='+wint+',resizable=yes,width=500,height=450,scrollbars=yes,status=yes')
}
//function admin_open4(u_id){//�Ͽ��� ���
//		var winl = (screen.width - 800) / 2
//		var wint = (screen.height - 768) / 2
//		window.open('/admin/pop_up/register.php?new_strore='+u_id,'Union','left='+winl+',top='+wint+',resizable=yes,width=500,height=480,scrollbars=yes,status=yes')
//}
function admin_open4(u_id){

	//var winl = (screen.width - 2048) / 2
	//var wint = (screen.height - 768) / 2
	var url
	url = '/admin/pop_up/register.php?new_strore='+u_id
	
	//window.open(url,'hyunjang','left='+winl+',top='+wint+',resizable=no,width=550,height=480,scrollbars=no,status=no')
	f_OpenModalPop("Union",url,1,500,480)

}

function admin_open4_2(u_id){


	var url
	url = '/admin/pop_up/register.php?new_strore='+u_id
	
	
	f_OpenModalPop("Union",url,1,500,480)

}
function admin_open5(u_id){
	var url
	url = "/admin/pop_up/hyunjang_register.php?new_strore="+u_id
	f_OpenModalPop("hyunjang",url,1,500,450)

}
function register_num(u_id){//�Ͽ�������
	var url
	url = '/admin/pop_up/register.php?num='+u_id
	f_OpenModalPop("registerNum",url,1,500,460)

}
//function main_09_03_register_num(u_id){//�Ͽ�������
//	//alert(u_id)
//	document.form1.target = 'register_common_2'
//	document.form1.action = '/admin/pop_up/register.php?num='+u_id+'&search='+2
//	document.form1.submit();

//}

//function main_09_05_register_num(u_id){//�������� ����
//	//alert(u_id)
//	document.form1.target = 'hq_2'
//	document.form1.action = '/admin/pop_up/main_09_05_hq_register_2.php?num='+u_id+'&search='+2
//	document.form1.submit();

//}
//function admin_open5(u_id){//���� ���
//		var winl = (screen.width - 2048) / 2
//		var wint = (screen.height - 768) / 2
//		window.open('/admin/pop_up/hyunjang_register.php?new_strore='+u_id,'hyunjang','left='+winl+',top='+wint+',resizable=yes,width=500,height=450,scrollbars=yes,status=yes')
//}

function admin_open6(){
		var winl = (screen.width - 1024) / 2
		var wint = (screen.height - 768) / 2
		window.open('/category/admin/pop_up/search_daeli_dong_bu.php?new=1','new_Union_7','left='+winl+',top='+wint+',resizable=yes,width=930,height=540,scrollbars=no,status=yes')
}
function hyunjang_num(u_id){//���� ����
	
		var winl = (screen.width - 1024) / 2
		var wint = (screen.height - 768) / 2
		window.open('/admin/pop_up/hyunjang_register.php?num='+u_id,'Union','left='+winl+',top='+wint+',resizable=yes,width=500,height=450,scrollbars=yes,status=yes')
}

function hq_register_num(u_id){//������������
	
		var winl = (screen.width - 1024) / 2
		var wint = (screen.height - 768) / 2
		window.open('/admin/pop_up/hq_register_2.php?num='+u_id,'Union','left='+winl+',top='+wint+',resizable=yes,width=500,height=550,scrollbars=yes,status=yes')
}
function chkmodify_sms_drive(u_id,u_id_2){
		var winl = (screen.width - 1024) / 2
		var wint = (screen.height - 768) / 2
		window.open('/category/admin/pop_up/golf_consulting.php?num='+u_id+'&num_2='+u_id_2,'Union','left='+winl+',top='+wint+',resizable=yes,width=900,height=550,scrollbars=no,status=yes')
}

function chkmodify_bank(u_id,u_id_2){
		var winl = (screen.width - 1024) / 2
		var wint = (screen.height - 768) / 2
		window.open('./chkmodify_bank.php?hphone='+u_id+'&num_2='+u_id_2,'Union','left='+winl+',top='+wint+',resizable=yes,width=900,height=550,scrollbars=no,status=yes')
}
function self_close_dansu(){
	
	self.close()
	
}		
function self_close(){
	
	self.close()
	opener.parent.document.location.reload();
}

function self_close_2(){
	
	self.close()
	
}

function bank_search(){
		fobj = document.form1;
		
	  if(!document.form1.bank.value){
	  alert("������� �Է��ϼ���!");
 	  document.form1.bank.focus();
  	  return;
	}
	if(!document.form1.bank_number.value){
	  alert("�v���ȣ�� �Է��ϼ���!");
 	  document.form1.bank_number.focus();
  	  return;
	}
	if(!document.form1.c_name.value){
	  alert("�����ָ� �Է��ϼ���!");
 	  document.form1.c_name.focus();
  	  return;
	}
	fobj.action = "./bank.php?event=5"
	fobj.submit()
}

function do_it(){
	fobj = document.form1;
		
	  if(!fobj.name.value){
	  alert("�̸��� �Է��ϼ���!");
 	  document.form1.name.focus();
  	  return;
	}
	fobj = document.form1;
		
	  if(!fobj.name.value){
	  alert("�̸��� �Է��ϼ���!");
 	  document.form1.name.focus();
  	  return;
	}
	 if (!isNumeric(fobj.phone_2.value)) {
                alert("��ȭ��ȣ�� ���ڷ� �Է��ϼ���.");
				document.form1.phone_2.focus();
                return false;
	}
	 if (!isNumeric(fobj.phone_3.value)) {
			alert("��ȭ��ȣ�� ���ڷ� �Է��ϼ���.");
			document.form1.phone_3.focus();
			return false;
	}
	
		if(!fobj.phone_1.value ){
			alert('��ȭ ��ȣ ù��°��ȣ�� �Է��ϼ���.')
				document.form1.phone_1.focus();
			return false;
		}
		if(!fobj.phone_2.value ){
			alert('��ȭ ��ȣ �ι�°��ȣ�� �Է��ϼ���.')
			document.form1.phone_2.focus();
			return false;
		}
		if(!fobj.phone_3.value ){
			alert('��ȭ ��ȣ ����°��ȣ�� �Է��ϼ���.')
			document.form1.phone_3.focus();
			return false;
		}
		if(confirm("�������޸� ��û�մϱ�"))
			{
				window.open('','bogan','width=50,height=50,top=100,left=100')
				document.form1.target = 'bogan'
				document.form1.action = './partner_process.php'
				document.form1.submit();
			}
}
function focus_phone_2(){
			var fobj;
			fobj = document.form1;
			if(fobj.phone_2.value.length=='4'){
				form1.phone_3.focus();
			}
}
function do_clear(){
	var fobj;
		fobj = document.form1;
		fobj.name.value=''
		fobj.phone_2.value=''
		fobj.phone_3.value=''
		fobj.email.value=''
		fobj.content.value=''
}

 function check_in_union()
 {
	
		var obj
		obj = document.aform
		if (!obj.mem_id.value)
		{
			alert("���̵�  �Է��ϼ���!.")
			obj.mem_id.focus()
			return false
		}

	if(!IsID3(obj.mem_id.name)) {
     alert("ID�� 4~12���� ���� �ҹ���, ���� �Ǵ� ���յ� ���ڿ��̾�� �մϴ�.")
     obj.mem_id.focus()
     return false
 	 }

		if (!obj.passwd.value)
		{
			alert("��й�ȣ��  �Է��ϼ���.")
			obj.passwd.focus()
			return false
		}

			obj.action = "./proc_union_login.php"
			obj.submit()
}
function bogan_f(url,pay){ 
		
		var fobj;

			fobj = document.form1;
		
			if(!document.form1.c_name.value){
	  alert("�̸��� �Է��ϼ���!");
 	  document.form1.c_name.focus();
  	  return;

	 
	}
	  if(!IsNumber2(fobj.song_pay.name))
	 {
         alert("�۱ݱݾ��� �����̾�� �մϴ�");
         fobj.song_pay.focus();
         return false;
      }

	if(!fobj.song_pay.value){
		alert("�̹��� ������ �ݾ��� �Է��ϼ���")
		 document.form1.song_pay.focus();
  	  return;
	}
	
	if(pay<fobj.song_pay.value){
		alert("�����ޱݾ� ���� ũ�� �ȵ˴ϴ�")
		 document.form1.song_pay.focus();
  	  return;
	}



			if(confirm("�۱��մϱ�"))
			{
				window.open('','bogan','width=50,height=50,top=600,left=600')
				document.form1.target = 'bogan'
				document.form1.action = url
				document.form1.submit();
			}
			
	}

function focus_hphone_2(){
			var fobj;
			fobj = document.form1;
			if(fobj.hphone2.value.length=='4'){
				form1.hphone3.focus();
			}
}
function kosa_d(url){ 
		
		var fobj;
			fobj = document.form1;
	if (!fobj.hyun_jang_name.value){
		alert('������� �Է��ϼ���!');
		fobj.hyun_jang_name.focus()
		return false;
	}
	if (!fobj.kosa_name.value){
		alert('������� �Է��ϼ���!');
		fobj.kosa_name.focus()
		return false;
	}
	if (!fobj.balju_company.value){
		alert('����ó�� �Է��ϼ���!');
		fobj.balju_company.focus()
		return false;
	}

	
	
	if (!fobj.money_01.value){
		alert('���ݾ��� �Է��ϼ���');
		fobj.money_01.focus()
		return false;
	}
	/*
	if (!fobj.bogoja_num.value){
		alert('�����ڸ� ��ȸ �Ͽ� �Է��ϼ���!');
		fobj.bogoja.focus()
		return false;
	}*/


		if(confirm("ó���մϱ�?")){
				//window.open('','bogan','width=50,height=50,top=600,left=600')
				
				document.form1.target="hq_2";
				document.form1.action = url
				document.form1.submit();
			}

			
	
}

function tax_sujeong(url){ 
	var fobj;
		fobj = document.form1;
	if(confirm("���� �մϴ�!")){
		document.form1.target="tax";
		document.form1.action = url
		document.form1.submit();
	}
}
function tax_store(url){ 
	//alert(url)
	var fobj;
		fobj = document.form1;
	if(!fobj.no_tax.value){
		alert('���ټ��� �鼼 ������ �Է��ϼ���!')
		fobj.tax_rate.focus();
		return false;
	}
	if(!fobj.tax_rate.value){
		alert('���ټ��� �Է��ϼ���!')
		fobj.tax_rate.focus();
		return false;
	}
	/*if(!IsNumber2(fobj.tax_rate.name)){
			 alert("���ټ�  �����̾�� �մϴ�");
			 fobj.tax_rate.focus()
			 return;
		}*/
	if(!fobj.jumin_tax_rate.value){
		alert('�ֹμ��� �Է��ϼ���!')
		fobj.jumin_tax_rate.focus();
		return false;
	}
	if(!fobj.employ_insurance_rate.value){
		alert('��뺸�� ������ �Է��ϼ���!')
		fobj.employ_insurance_rate.focus();
		return false;
	}
	if(confirm("�űԷ� �����մϴ�!")){
		
		document.form1.target="_parent";
		document.form1.action = url
		document.form1.submit();
	}
}
function IsNumber2(formname)
{
     var form=eval("document.form1." + formname);
     for(var i=0; i < form.value.length; i++){
         var chr = form.value.substr(i,1);
         if(((chr < '0' || chr > '9') && chr!='\,')){
            return false;
         }
     }
     return true;
  }
function bogan_d(url,val){ 
	
		
		var fobj;
			fobj = document.form1;
	if(fobj.register_num.value=='2'){
		alert('���忡 �̹� ��� �Ǿ� �ֽ��ϴ�');
		fobj.jumin1.focus()
		return false;
	}
    if(val==2){//�ű� �����϶� �ֹ� ��ȣ�� ��ȸ���� �ʾ��� ��쿡 �����޼���
			if(fobj.register_num.value!=1){
				alert(' �ֹι�ȣ�� �ݵ�� ��ȸ�� �ϼž� �մϴ�!');
				//fobj.jumin1.focus()
				return false;
			}
	}
	if(fobj.hyun_jang_cord.value==0){
		alert('������� �����ϼ���!')
			fobj.kosa_name.focus()
			return false;
	}
	if(fobj.jumin1.value.length<6){
		alert('�ֹξ��ڸ��� 6�ڸ��Դϴ�')
		fobj.jumin1.focus()
			return false;
	}
	if(fobj.jumin2.value.length<7){
		alert('�ֹε��ڸ��� 7�ڸ��Դϴ�')
		fobj.jumin2.focus()
			return false;
	}
	if(!JuminCheck(fobj.jumin1.value,fobj.jumin2.value)){
		alert('�߸��� �ֹι�ȣ �Դϴ�');
		fobj.jumin1.focus()
			return false;
	}
	if (!fobj.oun_name.value){
		alert('�̸��� �Է��ϼ���');
		fobj.oun_name.focus()
		return false;
	}


	if (!f_chkNoNum(fobj.oun_name.value)) {
		alert("�̸��� ���ڴ� ���Ե� �� �����ϴ�.");
		return false;
	}
	
	
	if(getLength(trim(fobj.oun_name.value)) <= 0){
		alert('�̸��� �Է��ϼ���.');
		fobj.nor_name.focus();
		return false;
	}


	

	if(getLength(trim(fobj.oun_name.value)) < 2){
		alert('�̸��� �α��� �̻��̿��� �մϴ�.');
		fobj.oun_name.focus();
		return false;
	}


	if(!stringcheck(fobj.oun_name.value)){
		alert('�ùٸ� �̸��� �Է��� �ֽñ� �ٶ��ϴ�.');
		fobj.oun_name.focus();
		return false;
	}
	/*
	if(!fobj.grade.value){
		alert('������ �Է����ּ���')
			fobj.grade.focus()
			return false;
	}*/
	if(!fobj.job.value){
		alert('������ �Է����ּ���')
		fobj.job.focus()
			return false;
	}
	if(!fobj.daily_salary.value){
		alert('�ܰ��� �Է����ּ���')
		fobj.daily_salary.focus()
			return false;
	}
	
	if(!fobj.oun_phone_1.value){
		alert('�ڵ�����ȣ�� ù��° �Է����ּ���')
		fobj.oun_phone_1.focus()
			return false;
	}
	 
	if(fobj.oun_phone_1.value.length<3){
		alert('�ڵ��� ù��° �ڸ��� 3�ڸ� �Դϴ�')
		fobj.oun_phone_1.focus()
			return false;
	}
	if(!IsNumber2(fobj.oun_phone_1.name)){
		 alert("�ڵ�����ȣ ù��°�� �����̾�� �մϴ�");
		 fobj.oun_phone_1.focus();
		 return false;
	  }
	
	if(!fobj.oun_phone_2.value){
		alert('�ڵ�����ȣ�� �ι���° �Է����ּ���')
		fobj.oun_phone_2.focus()
			return false;
	}
	if(!IsNumber2(fobj.oun_phone_2.name)){
		 alert("�ڵ�����ȣ �ι�°�� �����̾�� �մϴ�");
		 fobj.oun_phone_2.focus();
		 return false;
	  }
	if(!fobj.oun_phone_3.value){
		alert('�ڵ�����ȣ�� ����° �Է����ּ���')
		fobj.oun_phone_3.focus()
			return false;
	}
	
	if(!IsNumber2(fobj.oun_phone_3.name)){
		 alert("�ڵ�����ȣ ����°�� �����̾�� �մϴ�");
		 fobj.oun_phone_3.focus();
		 return false;
	  }
	 if(fobj.oun_phone_3.value.length<4){
		alert('�ڵ��� ����° �ڸ��� 4�ڸ� �Դϴ�')
		fobj.oun_phone_3.focus()
			return false;
	}
	if(!fobj.house_phone_1.value){
		alert('����ȭ�� ù��° �ڸ��� �Է����ּ���')
		fobj.house_phone_1.focus()
			return false;
	}
	if(!IsNumber2(fobj.house_phone_1.name)){
		 alert("����ȭ ù��°�� �����̾�� �մϴ�");
		 fobj.house_phone_1.focus();
		 return false;
	  }
	if(!fobj.house_phone_2.value){
		alert('����ȭ�� �ι�° �ڸ��� �Է����ּ���')
		fobj.house_phone_2.focus()
			return false;
	}
	if(!IsNumber2(fobj.house_phone_2.name)){
		 alert("����ȭ �ι�°�� �����̾�� �մϴ�");
		 fobj.house_phone_2.focus();
		 return false;
	  }
	if(!fobj.house_phone_3.value){
		alert('����ȭ�� ����° �ڸ��� �Է����ּ���')
		fobj.house_phone_3.focus()
			return false;
	}
	if(!IsNumber2(fobj.house_phone_3.name)){
		 alert("����ȭ ����°�� �����̾�� �մϴ�");
		 fobj.house_phone_3.focus();
		 return false;
	  }
	if(fobj.house_phone_3.value.length<4){
		alert('����ȭ ����° �ڸ��� 4�ڸ� �Դϴ�')
		fobj.house_phone_3.focus()
			return false;
	}
	if(!fobj.postnum.value){
		alert('�����ȣ�� �Է��ϼ���')
		fobj.postnum.focus()
			return false;
	}
	if(!fobj.address1.value){
		alert('ù��° �ּҸ� �Է��ϼ���')
		fobj.address1.focus()
			return false;
	}
	if(!fobj.address2.value){
		alert('�ι�° �ּҸ� �Է��ϼ���')
		fobj.address2.focus()
			return false;
	}	 
	if(fobj.job.value=='��Ÿ'){
		if(!fobj.job_2.value){
			alert('������ �Է� �ϼ���!')
				fobj.job_2.focus();
			return false;
		}
	}
	
			if(confirm("ó���մϱ�?")){
				//window.open('','bogan','width=50,height=50,top=600,left=600')
				document.form1.target="register_common_2";
				document.form1.action = url
				document.form1.submit();
			}

			
	
}


function check_id(id){
	var fobj;
			fobj = document.form1;
   if(!id){
    alert('���̵� �Է��Ͽ� �ֽʽÿ�');
	form1.id.focus();
	return false;
   }
    if(!IsID(fobj.id.name)) {
     alert("ID�� 4~12���� ���� �ҹ���, ���� �Ǵ� ���յ� ���ڿ��̾�� �մϴ�.")
     fobj.id.focus()
     fobj.id.select()
     return false
  }
    window.open('check_user_id.php?user_id='+id,'check_user_id','width=200,height=100,toolbar=no,status=no,resizable=no');
   
 }
function member_bogan(url){ 
		
		var fobj;
			fobj = document.form1;
		
	

	if (!fobj.oun_name.value){
		alert('�̸��� �Է��ϼ���');
		fobj.oun_name.focus()
		return false;
	}


	if (!f_chkNoNum(fobj.oun_name.value)) {
		alert("�̸��� ���ڴ� ���Ե� �� �����ϴ�.");
		return false;
	}
	
	
	if(getLength(trim(fobj.oun_name.value)) <= 0){
		alert('�̸��� �Է��ϼ���.');
		fobj.nor_name.focus();
		return false;
	}


	if (fobj.oun_name.value.length < 2){
	     alert("�̸��� �α��� �̻��̿��� �մϴ�.");
         form.nor_name.focus();
         return false;
	}

	if(getLength(trim(fobj.oun_name.value)) < 2){
		alert('�̸��� �α��� �̻��̿��� �մϴ�.');
		fobj.oun_name.focus();
		return false;
	}


	if(!stringcheck(fobj.oun_name.value)){
		alert('�ùٸ� �̸��� �Է��� �ֽñ� �ٶ��ϴ�.');
		fobj.oun_name.focus();
		return false;
	}
	if(fobj.jumin1.value.length<6){
		alert('�ֹξ��ڸ��� 6�ڸ��Դϴ�')
		fobj.jumin1.focus()
			return false;
	}
	if(fobj.jumin2.value.length<7){
		alert('�ֹε��ڸ��� 7�ڸ��Դϴ�')
		fobj.jumin2.focus()
			return false;
	}
	if(!JuminCheck(fobj.jumin1.value,fobj.jumin2.value)){
		alert('�߸��� �ֹι�ȣ �Դϴ�');
		fobj.jumin1.focus()
			return false;
	}
	if(!fobj.id.value) {
     alert("���̵�(ID)�� �Է��ϼ���.")
     fobj.id.focus()
     return false;
  }
 
    if(fobj.idch.value != 1) {
     alert("���̵�(ID) �ߺ��˻�� �ʼ��Դϴ�.");
     fobj.id.focus();
     return false;
  }
  if(!fobj.pass.value) {
     alert("��й�ȣ�� �Է��ϼ���!")
     fobj.passwd.focus()
     return false
  }
    if(!IsPW(fobj.pass.name)) {
     alert("��й�ȣ�� 4~10���� �����ڳ� ���� �Ǵ� ���յ� ���ڿ��̾�� �մϴ�.")
     fobj.pass.focus()
     //fobj.passwd.select()
     return false
  }
      if(fobj.pass.value != fobj.passcheck.value) {
      alert("�Է��Ͻ� ��й�ȣ�� ��ġ���� �ʽ��ϴ�.\n�ٽ� Ȯ���Ͻð� �־��ֽʽÿ�.")
     fobj.passcheck.focus()
     fobj.passcheck.select()
     return false;
  }
	if(!fobj.oun_phone_1.value){
		alert('�ڵ�����ȣ��  ù��° �ڸ��� �Է����ּ���')
		fobj.oun_phone_1.focus()
			return false;
	}
	if(fobj.oun_phone_1.value.length<3){
		alert('�ڵ��� ù��° �ڸ��� 3�ڸ� �Դϴ�')
		fobj.oun_phone_1.focus()
			return false;
	}
	if(!IsNumber2(fobj.oun_phone_1.name)){
		 alert("�ڵ�����ȣ ù��°�� �����̾�� �մϴ�");
		 fobj.oun_phone_1.focus();
		 return false;
	  }
	if(!fobj.oun_phone_2.value){
		alert('�ڵ�����ȣ�� �ι�° �ڸ��� �Է����ּ���')
		fobj.oun_phone_2.focus()
			return false;
	}
	
	if(!IsNumber2(fobj.oun_phone_2.name)){
		 alert("�ڵ�����ȣ �ι�°  �ڸ��� �����̾�� �մϴ�");
		 fobj.oun_phone_2.focus();
		 return false;
	  }
	if(!fobj.oun_phone_3.value){
		alert('�ڵ�����ȣ�� ������ �ڸ��� �Է����ּ���')
		fobj.oun_phone_3.focus()
			return false;
	}
	if(fobj.oun_phone_3.value.length<4){
		alert('�ڵ��� ����°  �ڸ��� 4�ڸ� �Դϴ�')
		fobj.oun_phone_3.focus()
			return false;
	}
	if(!IsNumber2(fobj.oun_phone_3.name)){
		 alert("�ڵ�����ȣ ����°  �ڸ��� �����̾�� �մϴ�");
		 fobj.oun_phone_3.focus();
		 return false;
	  }
	if(!fobj.house_phone_1.value){
		alert('����ȭ ù���� �Է����ּ���')
		fobj.house_phone_1.focus()
			return false;
	}
	
	if(!IsNumber2(fobj.house_phone_1.name)){
		 alert("����ȭ ù����  �ڸ��� �����̾�� �մϴ�");
		 fobj.house_phone_1.focus();
		 return false;
	  }
	if(!fobj.house_phone_2.value){
		alert('����ȭ�� �ι�° �ڸ��� �Է����ּ���')
		fobj.house_phone_2.focus()
			return false;
	}
	if(!IsNumber2(fobj.house_phone_2.name)){
		 alert("����ȭ�� �ι�°  �ڸ��� �����̾�� �մϴ�");
		 fobj.house_phone_2.focus();
		 return false;
	  }
	if(!fobj.house_phone_3.value){
		alert('����ȭ�� ����° �ڸ����Է����ּ���')
		fobj.house_phone_3.focus()
			return false;
	}
	if(fobj.house_phone_3.value.length<4){
		alert('�ڵ��� ����°  �ڸ��� 4�ڸ� �Դϴ�')
		fobj.hjouse_phone_3.focus()
			return false;
	}
	if(!IsNumber2(fobj.house_phone_3.name)){
		 alert("����ȭ�� ����°  �ڸ��� �����̾�� �մϴ�");
		 fobj.house_phone_3.focus();
		 return false;
	  }
	if(!fobj.postnum.value){
		alert('�����ȣ�� �Է��ϼ���')
		fobj.postnum.focus()
			return false;
	}
	if(!fobj.address1.value){
		alert('ù��° �ּҸ� �Է��ϼ���')
		fobj.address1.focus()
			return false;
	}
	if(!fobj.address2.value){
		alert('�ι�° �ּҸ� �Է��ϼ���')
		fobj.address2.focus()
			return false;
	}	 
			if(confirm("ó���մϱ�")){
				//window.open('','bogan','width=50,height=50,top=600,left=600')
				document.form1.target="_self";
				document.form1.action = url
				document.form1.submit();
			}

			
	
}
function member_bogan_2(url){ //���� ���� ���� 
		
		var fobj;
			fobj = document.form1;
		
	

	if (!fobj.oun_name.value){
		alert('�̸��� �Է��ϼ���');
		fobj.oun_name.focus()
		return false;
	}


	if (!f_chkNoNum(fobj.oun_name.value)) {
		alert("�̸��� ���ڴ� ���Ե� �� �����ϴ�.");
		return false;
	}
	
	
	if(getLength(trim(fobj.oun_name.value)) <= 0){
		alert('�̸��� �Է��ϼ���.');
		fobj.nor_name.focus();
		return false;
	}


	if (fobj.oun_name.value.length < 2){
	     alert("�̸��� �α��� �̻��̿��� �մϴ�.");
         form.nor_name.focus();
         return false;
	}

	if(getLength(trim(fobj.oun_name.value)) < 2){
		alert('�̸��� �α��� �̻��̿��� �մϴ�.');
		fobj.oun_name.focus();
		return false;
	}


	if(!stringcheck(fobj.oun_name.value)){
		alert('�ùٸ� �̸��� �Է��� �ֽñ� �ٶ��ϴ�.');
		fobj.oun_name.focus();
		return false;
	}
	if(fobj.jumin1.value.length<6){
		alert('�ֹξ��ڸ��� 6�ڸ��Դϴ�')
		fobj.jumin1.focus()
			return false;
	}
	if(fobj.jumin2.value.length<7){
		alert('�ֹε��ڸ��� 7�ڸ��Դϴ�')
		fobj.jumin2.focus()
			return false;
	}
	if(!JuminCheck(fobj.jumin1.value,fobj.jumin2.value)){
		alert('�߸��� �ֹι�ȣ �Դϴ�');
		fobj.jumin1.focus()
			return false;
	}
	if(!fobj.id.value) {
     alert("���̵�(ID)�� �Է��ϼ���.")
     fobj.id.focus()
     return false;
  }

   if(fobj.hq_level.value=='10'){
	   alert('������ 10 �� �ƴϾ�� �� �α��� �����մϴ�')
		fobj.hq_level.focus()
			return false;
	}
   // alert(fobj.oun_phone.value)
	if(!fobj.oun_phone.value){
		alert('�ڵ�����ȣ��  �Է����ּ���')
		fobj.oun_phone.focus()
			return false;
	}
	if(!fobj.house_phone.value){
		alert('����ȭ�� �Է����ּ���')
		fobj.house_phone.focus()
			return false;
	}
	if(!fobj.postnum.value){
		alert('�����ȣ�� �Է��ϼ���')
		fobj.postnum.focus()
			return false;
	}
	if(!fobj.address1.value){
		alert('ù��° �ּҸ� �Է��ϼ���')
		fobj.address1.focus()
			return false;
	}
	if(!fobj.address2.value){
		alert('�ι�° �ּҸ� �Է��ϼ���')
		fobj.address2.focus()
			return false;
	}	 
	//alert(url)
			if(confirm("���� �մϴ�!")){
				//window.open('','bogan','width=50,height=50,top=600,left=600')
				document.form1.target="hq_2";
				document.form1.action = url
				document.form1.submit();
			}
	
			
	
}
function JuminCheck(jumin1,jumin2){
	check_jumin=false
		b_Year=(jumin2.charAt(0)<="2")?"19":"20"
		b_Year+=jumin1.substr(0,2)
		b_Month=jumin1.substr(2,2)-1
		b_Date=jumin1.substr(4,2)
		b_sum=new Date(b_Year,b_Month,b_Date)
		if(b_sum.getYear()%100!=jumin1.substr(0,2)||b_sum.getMonth()!=b_Month||b_sum.getDate()!=b_Date){
			return check_jumin
		}
		total=0
		temp=new Array(13)
		for(i=1;i<=6;i++)temp[i]=jumin1.charAt(i-1)
	    for(i=7;i<=13;i++)temp[i]=jumin2.charAt(i-7)
		for(i=1;i<=12;i++){
			k=i+1
				if(k>=10)k=k%10+2
				total=total+(temp[i]*k)
		}
		last_num=(11-(total%11))%10
		if(last_num==temp[13])check_jumin=true
			else check_jumin=false
			return check_jumin
}
/*******************************************************************************
* ��������
*******************************************************************************/
function trim(str)
{
	return str.replace(/^\s+|\s+$/g, '');
}
function IsNumber2(formname)
{
     var form=eval("document.form1." + formname);

     for(var i=0; i < form.value.length; i++)
	{
         var chr = form.value.substr(i,1);
         if((chr < '0' || chr > '9'))
		{
            return false;
         }
     }
     return true;
  }


 	function f_chkNoNum(string) {		
		valid = "0123456789";
		for (var i=0; i< string.length; i++) {
			if (valid.indexOf(string.charAt(i)) != -1) {
				return false;
			return false;
			}
		}
		return true;
	
	}

function getLength(str) 
{
	var length = 0;

	for(var i = 0; i < str.length; i++)
	{
		if(escape(str.charAt(i)).length >= 4)
			length += 2;
		else
			if(escape(str.charAt(i)) != "%0D")
				length++;
	}	

	return length;
}

function stringcheck(thisstring)
{
		var total = thisstring.length
		for(i=0;i<total;i++)
		{
		
			if(44032 > thisstring.charCodeAt(i) || 55203 < thisstring.charCodeAt(i))
			{
				return false;
			}			
		}
		return true;
}
 function IsID(formname) {
     var form=eval("document.form1." + formname);

     if(form.value.length < 4 || form.value.length > 12) {
         return false;
     }
     for(var i=0; i < form.value.length; i++) {
         var chr = form.value.substr(i,1);
         if((chr < '0' || chr > '9') && (chr < 'a' || chr > 'z')) {
            return false;
         }
     }
     return true;
  }

  function IsPW(formname) {
     var form=eval("document.form1." + formname);

     if(form.value.length < 4 || form.value.length > 10) {
         return false;
     }
     for(var i=0; i < form.value.length; i++) {
         var chr = form.value.substr(i,1);
         if((chr < '0' || chr > '9') && (chr < 'a' || chr > 'z') && ( chr < 'A' || chr > 'Z')) {
            return false;
         }
     }
     return true;
  }

  function clearSearchName(){
    fobj=document.form1;
	if(fobj.name_check.checked==false){
		fobj.search_name.value='';
		return
		}
}
-->