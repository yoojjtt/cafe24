<!--
function clearText(thefield){
	if(thefield.defaultValue==thefield.value){
		thefield.value="";
	}
}
function preminum_check_1(){
	 sony1=isNaN(form1.wood_make_money_01.value)
	 sony2=isNaN(form1.driver_make_money_01.value)
	 sony3=isNaN(form1.ion_make_money_01.value)
	 sony4=isNaN(form1.putter_make_money_01.value)
	 sony5=isNaN(form1.bag_make_money_01.value)
	if(!form1.wood_make_money_01.value){
		 alert('��尡���� �Է��ϼ���')
		 document.form1.wood_make_money_01.focus();
					return;
	}

	if(!form1.wood_make_money_01.value){
		 alert('��尡���� �Է��ϼ���')
		 document.form1.wood_make_money_01.focus();
					return;
	}
	if(!form1.driver_make_money_01.value){
		 alert('����̹������� �Է��ϼ���')
		 document.form1.driver_make_money_01.focus();
					return;
	}
	if(!form1.ion_make_money_01.value){
		 alert('���̾� ������ �Է��ϼ���')
		 document.form1.ion_make_money_01.focus();
					return;
	}
	if(!form1.putter_make_money_01.value){
		 alert('Ǫ�Ͱ����� �Է��ϼ���')
		 document.form1.putter_make_money_01.focus();
					return;
	}
	if(!form1.bag_make_money_01.value){
		 alert('���氡���� �Է��ϼ���')
		 document.form1.bag_make_money_01.focus();
					return;
	}
	if(sony1==true){
		alert('���ڸ� �Է��Ͻø� �ȵ˴ϴ�')
		 document.form1.wood_make_money_01.focus();
					return;
	}
	if(sony2==true){
		alert('���ڸ� �Է��Ͻø� �ȵ˴ϴ�')
		 document.form1.driver_make_money_01.focus();
					return;
	}
	if(sony3==true){
		alert('���ڸ� �Է��Ͻø� �ȵ˴ϴ�')
		 document.form1.ion_make_money_01.focus();
					return;
	}
	if(sony4==true){
		alert('���ڸ� �Է��Ͻø� �ȵ˴ϴ�')
		 document.form1.putter_make_money_01.focus();
					return;
	}
	if(sony5==true){
		alert('���ڸ� �Է��Ͻø� �ȵ˴ϴ�')
		 document.form1.bag_make_money_01.focus();
					return;
	}
	if((sony1==false)&&(sony2==false)&&(sony3==false)&&(sony4==false)&&(sony5==false)){
		form1.sum_yong_pum.value=eval(form1.wood_make_money_01.value)+eval(form1.driver_make_money_01.value)+eval(form1.ion_make_money_01.value)+eval(form1.putter_make_money_01.value)+eval(form1.bag_make_money_01.value)
	 }
}
function errorInput(){
	alert('��ǰ������ ���� �Է��ϼ���')
		document.form1.wood_num_01.focus()
		return;
}
function samsung_prminum(){
	if(form1.plan[0].checked ==true){
		 alert('����ᰡ ����Ǿ����ϴ�')
			form1.golf_preminum.value=50480+Math.round(eval(form1.sum_yong_pum.value)*27360*0.01)
	}else if(form1.plan[1].checked ==true){
		 alert('����ᰡ ����Ǿ����ϴ�')
			form1.golf_preminum.value=92680+Math.round(eval(form1.sum_yong_pum.value)*27360*0.01)
	}else if(form1.plan[2].checked ==true){
		 alert('����ᰡ ����Ǿ����ϴ�')
			form1.golf_preminum.value=173680+Math.round(eval(form1.sum_yong_pum.value)*27360*0.01)
	}else if(form1.plan[3].checked ==true){
		 alert('����ᰡ ����Ǿ����ϴ�')
			form1.golf_preminum.value=198240+Math.round(eval(form1.sum_yong_pum.value)*27360*0.01)
	}
}
function preminum_clear_samsung(){
	form1.golf_preminum.value=''
}
function lig_prminum(){
	if(form1.personal[0].checked==true){//������
		if(form1.plan[0].checked ==true){
			 alert('����ᰡ ����Ǿ����ϴ�')
				form1.golf_preminum.value=34450+Math.round(eval(form1.sum_yong_pum.value)*13540*0.01)
		}else if(form1.plan[1].checked ==true){
			 alert('����ᰡ ����Ǿ����ϴ�')
				form1.golf_preminum.value=67400+Math.round(eval(form1.sum_yong_pum.value)*13540*0.01)
		}else if(form1.plan[2].checked ==true){
			 alert('����ᰡ ����Ǿ����ϴ�')
				form1.golf_preminum.value=71190+Math.round(eval(form1.sum_yong_pum.value)*13540*0.01)
		}

	}else{//�κ���
			if(form1.plan[0].checked ==true){
			 alert('����ᰡ ����Ǿ����ϴ�')
				form1.golf_preminum.value=Math.round((68900+eval(form1.sum_yong_pum.value)*13540*0.01)*0.9)
		}else if(form1.plan[1].checked ==true){
			 alert('����ᰡ ����Ǿ����ϴ�')
				form1.golf_preminum.value=Math.round((134800+eval(form1.sum_yong_pum.value)*13540*0.01)*0.9)
		}else if(form1.plan[2].checked ==true){
			 alert('����ᰡ ����Ǿ����ϴ�')
				form1.golf_preminum.value=Math.round((142380+eval(form1.sum_yong_pum.value)*13540*0.01)*0.9)
		}
	}
}
function preminum_clear_lig(){
	form1.golf_preminum.value=''
}
function preminum_clear_hyundai(){
	
	form1.golf_preminum.value=''
}
function hyundai_prminum(){
	if(form1.personal[0].checked==true){//������
		if(form1.plan[0].checked ==true){
			 alert('����ᰡ ����Ǿ����ϴ�')
				form1.golf_preminum.value=33100
		}else if(form1.plan[1].checked ==true){
			 alert('����ᰡ ����Ǿ����ϴ�')
				form1.golf_preminum.value=61600
		}
	}else{
		if(form1.plan[0].checked ==true){
			 alert('����ᰡ ����Ǿ����ϴ�')
				form1.golf_preminum.value=59600
		}else if(form1.plan[1].checked ==true){
			 alert('����ᰡ ����Ǿ����ϴ�')
				form1.golf_preminum.value=110900
		}
	}
}

function preminum_clear_dongbu(){
	form1.golf_preminum.value=''
}
function dongbu_prminum(){
	if(form1.plan[0].checked ==true){
		 alert('����ᰡ ����Ǿ����ϴ�')
			form1.golf_preminum.value=14278+Math.round(eval(form1.sum_yong_pum.value)*13540*0.01)
	}else if(form1.plan[1].checked ==true){
		 alert('����ᰡ ����Ǿ����ϴ�')
			form1.golf_preminum.value=21133+Math.round(eval(form1.sum_yong_pum.value)*13540*0.01)
	}else if(form1.plan[2].checked ==true){
		 alert('����ᰡ ����Ǿ����ϴ�')
			form1.golf_preminum.value=34575+Math.round(eval(form1.sum_yong_pum.value)*13540*0.01)
	}else if(form1.plan[3].checked ==true){
		 alert('����ᰡ ����Ǿ����ϴ�')
			form1.golf_preminum.value=68076+Math.round(eval(form1.sum_yong_pum.value)*13540*0.01)
	}
}

function sam_join(){
	
		location.href="/category/amount/index.php?amount=1"
		//window.open('/php/raider_shin.php','Samjoin','left=200,top=200,resizable=yes,width=650,height=750,scrollbars=yes,status=no')
}
function golf_join(){
		
		var fobj;
			fobj = document.form1;
			
			if(!fobj.name2.value ){
				alert('�̸��� �־��ּ���.');
				fobj.name2.focus();
				return ;
			}
			if(!fobj.jumin1.value){
				alert('�ֹι�ȣ �� �ڸ��� �Է��ϼ���.');
				fobj.jumin1.focus();
				return ;
			}
			if(!fobj.jumin2.value){
				alert('�ֹι�ȣ �� �ڸ��� �Է��ϼ���.');
				fobj.jumin2.focus();
				return ;
			}
			
			if(!fobj.hphone_2.value ){
				alert('��ȭ��ȣ �ι�° �ڸ��� �Է��ϼ���.');
				fobj.hphone_2.focus();
				return ;
			}
			if(!fobj.hphone_3.value ){
				alert('��ȭ��ȣ ����° �ڸ��� �Է��ϼ���.');
				fobj.hphone_3.focus();
				return ;
			}

			
				window.open('','bogan','width=410,height=393,top=200,left=200')
				document.form1.target = 'bogan'
				document.form1.action = '/php/consProcess.php'
				document.form1.submit();
			
			
	}

	function golf_join_2(){//���谡�Խ�û
		
		var fobj;
			fobj = document.form1;
			
			if(!fobj.name2.value ){
				alert('�̸��� �־��ּ���.');
				fobj.name2.focus();
				return ;
			}
			if(!fobj.jumin1.value){
				alert('�ֹι�ȣ �� �ڸ��� �Է��ϼ���.');
				fobj.jumin1.focus();
				return ;
			}
			if(!fobj.jumin2.value){
				alert('�ֹι�ȣ �� �ڸ��� �Է��ϼ���.');
				fobj.jumin2.focus();
				return ;
			}
			
			if(!fobj.hphone_2.value ){
				alert('��ȭ��ȣ �ι�° �ڸ��� �Է��ϼ���.');
				fobj.hphone_2.focus();
				return ;
			}
			if(!fobj.hphone_3.value ){
				alert('��ȭ��ȣ ����° �ڸ��� �Է��ϼ���.');
				fobj.hphone_3.focus();
				return ;
			}

			
				window.open('','bogan','width=560,height=600,top=200,left=200')
				document.form1.target = 'bogan'
				document.form1.action = '/php/consProcess_2.php'
				document.form1.submit();
			
			
	}
function phone_1(){

	var fobj;
		fobj = document.form1;
			fobj.hphone_2.focus();
		
}
function phone_2(){

	var fobj;
		fobj = document.form1;
		if(fobj.hphone_2.value.length=='4'){
			fobj.hphone_3.focus();
		}
}
function phone_3(){

	var fobj;
		fobj = document.form1;
		if(fobj.hphone_3.value.length=='4'){
			fobj.time_2.focus();
		}
}

function jumin_move1(){
	var fobj;
		fobj = document.form1;
		if(fobj.jumin1.value.length=='6'){
			fobj.jumin2.focus();
		}
}

function jumin_move2(){
	var fobj;
		fobj = document.form1;
		if(fobj.jumin2.value.length=='7'){
			fobj.hphone_1.focus();
		}
}
function cancel_auto(){
	alert('����û�� ����մϴ�!')
	
	self.close()
}
function confirm_auto(){

	alert('����û�� �Ϸ� �Ǿ����ϴ�\n����ڰ� ���ð��� ��ȭ�帮�ڽ��ϴ� !\n�����մϴ�' )
			
					var w	=	100
					var sd	=	100
					var winl = (screen.width - w) / 2
					var wint = (screen.height -sd ) / 2
					//window.open('','con_name_search_2','left='+winl+',top='+wint+',resizable=no,width=100,height=100,scrollbars=0,status=no')
								
							//document.form1.target = "con_name_search_2"
							document.form1.action = "http://www.golfins.co.kr/php/samsung_Conprocess_store.php";
							
							document.form1.submit()
						
		opener.parent.document.location.reload();

		self.close()
		
}
function primun_err(){
	alert('����� �����ư�� Ŭ���ϼ���')
}

function boheom_gaib(){
		
		var fobj;
			fobj = document.form1;
			
			if(!fobj.golf_preminum.value ){
				alert('�������� �����ϼ���.');
				fobj.name2.focus();
				return ;
			}
				window.open('','bogan','width=560,height=600,top=200,left=200')
				document.form1.target = 'bogan'
				document.form1.action = '/php/consulting_01.php'
				document.form1.submit();
			
			
	}
//-->
