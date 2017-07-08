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
		 alert('우드가격을 입력하세요')
		 document.form1.wood_make_money_01.focus();
					return;
	}

	if(!form1.wood_make_money_01.value){
		 alert('우드가격을 입력하세요')
		 document.form1.wood_make_money_01.focus();
					return;
	}
	if(!form1.driver_make_money_01.value){
		 alert('드라이버가격을 입력하세요')
		 document.form1.driver_make_money_01.focus();
					return;
	}
	if(!form1.ion_make_money_01.value){
		 alert('아이언 가격을 입력하세요')
		 document.form1.ion_make_money_01.focus();
					return;
	}
	if(!form1.putter_make_money_01.value){
		 alert('푸터가격을 입력하세요')
		 document.form1.putter_make_money_01.focus();
					return;
	}
	if(!form1.bag_make_money_01.value){
		 alert('가방가격을 입력하세요')
		 document.form1.bag_make_money_01.focus();
					return;
	}
	if(sony1==true){
		alert('문자를 입력하시면 안됩니다')
		 document.form1.wood_make_money_01.focus();
					return;
	}
	if(sony2==true){
		alert('문자를 입력하시면 안됩니다')
		 document.form1.driver_make_money_01.focus();
					return;
	}
	if(sony3==true){
		alert('문자를 입력하시면 안됩니다')
		 document.form1.ion_make_money_01.focus();
					return;
	}
	if(sony4==true){
		alert('문자를 입력하시면 안됩니다')
		 document.form1.putter_make_money_01.focus();
					return;
	}
	if(sony5==true){
		alert('문자를 입력하시면 안됩니다')
		 document.form1.bag_make_money_01.focus();
					return;
	}
	if((sony1==false)&&(sony2==false)&&(sony3==false)&&(sony4==false)&&(sony5==false)){
		form1.sum_yong_pum.value=eval(form1.wood_make_money_01.value)+eval(form1.driver_make_money_01.value)+eval(form1.ion_make_money_01.value)+eval(form1.putter_make_money_01.value)+eval(form1.bag_make_money_01.value)
	 }
}
function errorInput(){
	alert('용품종류를 먼저 입력하세요')
		document.form1.wood_num_01.focus()
		return;
}
function samsung_prminum(){
	if(form1.plan[0].checked ==true){
		 alert('보험료가 산출되었습니다')
			form1.golf_preminum.value=50480+Math.round(eval(form1.sum_yong_pum.value)*27360*0.01)
	}else if(form1.plan[1].checked ==true){
		 alert('보험료가 산출되었습니다')
			form1.golf_preminum.value=92680+Math.round(eval(form1.sum_yong_pum.value)*27360*0.01)
	}else if(form1.plan[2].checked ==true){
		 alert('보험료가 산출되었습니다')
			form1.golf_preminum.value=173680+Math.round(eval(form1.sum_yong_pum.value)*27360*0.01)
	}else if(form1.plan[3].checked ==true){
		 alert('보험료가 산출되었습니다')
			form1.golf_preminum.value=198240+Math.round(eval(form1.sum_yong_pum.value)*27360*0.01)
	}
}
function preminum_clear_samsung(){
	form1.golf_preminum.value=''
}
function lig_prminum(){
	if(form1.personal[0].checked==true){//개인형
		if(form1.plan[0].checked ==true){
			 alert('보험료가 산출되었습니다')
				form1.golf_preminum.value=34450+Math.round(eval(form1.sum_yong_pum.value)*13540*0.01)
		}else if(form1.plan[1].checked ==true){
			 alert('보험료가 산출되었습니다')
				form1.golf_preminum.value=67400+Math.round(eval(form1.sum_yong_pum.value)*13540*0.01)
		}else if(form1.plan[2].checked ==true){
			 alert('보험료가 산출되었습니다')
				form1.golf_preminum.value=71190+Math.round(eval(form1.sum_yong_pum.value)*13540*0.01)
		}

	}else{//부부형
			if(form1.plan[0].checked ==true){
			 alert('보험료가 산출되었습니다')
				form1.golf_preminum.value=Math.round((68900+eval(form1.sum_yong_pum.value)*13540*0.01)*0.9)
		}else if(form1.plan[1].checked ==true){
			 alert('보험료가 산출되었습니다')
				form1.golf_preminum.value=Math.round((134800+eval(form1.sum_yong_pum.value)*13540*0.01)*0.9)
		}else if(form1.plan[2].checked ==true){
			 alert('보험료가 산출되었습니다')
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
	if(form1.personal[0].checked==true){//개인형
		if(form1.plan[0].checked ==true){
			 alert('보험료가 산출되었습니다')
				form1.golf_preminum.value=33100
		}else if(form1.plan[1].checked ==true){
			 alert('보험료가 산출되었습니다')
				form1.golf_preminum.value=61600
		}
	}else{
		if(form1.plan[0].checked ==true){
			 alert('보험료가 산출되었습니다')
				form1.golf_preminum.value=59600
		}else if(form1.plan[1].checked ==true){
			 alert('보험료가 산출되었습니다')
				form1.golf_preminum.value=110900
		}
	}
}

function preminum_clear_dongbu(){
	form1.golf_preminum.value=''
}
function dongbu_prminum(){
	if(form1.plan[0].checked ==true){
		 alert('보험료가 산출되었습니다')
			form1.golf_preminum.value=14278+Math.round(eval(form1.sum_yong_pum.value)*13540*0.01)
	}else if(form1.plan[1].checked ==true){
		 alert('보험료가 산출되었습니다')
			form1.golf_preminum.value=21133+Math.round(eval(form1.sum_yong_pum.value)*13540*0.01)
	}else if(form1.plan[2].checked ==true){
		 alert('보험료가 산출되었습니다')
			form1.golf_preminum.value=34575+Math.round(eval(form1.sum_yong_pum.value)*13540*0.01)
	}else if(form1.plan[3].checked ==true){
		 alert('보험료가 산출되었습니다')
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
				alert('이름을 넣어주세요.');
				fobj.name2.focus();
				return ;
			}
			if(!fobj.jumin1.value){
				alert('주민번호 앞 자리를 입력하세요.');
				fobj.jumin1.focus();
				return ;
			}
			if(!fobj.jumin2.value){
				alert('주민번호 뒤 자리를 입력하세요.');
				fobj.jumin2.focus();
				return ;
			}
			
			if(!fobj.hphone_2.value ){
				alert('전화번호 두번째 자리를 입력하세요.');
				fobj.hphone_2.focus();
				return ;
			}
			if(!fobj.hphone_3.value ){
				alert('전화번호 세번째 자리를 입력하세요.');
				fobj.hphone_3.focus();
				return ;
			}

			
				window.open('','bogan','width=410,height=393,top=200,left=200')
				document.form1.target = 'bogan'
				document.form1.action = '/php/consProcess.php'
				document.form1.submit();
			
			
	}

	function golf_join_2(){//보험가입신청
		
		var fobj;
			fobj = document.form1;
			
			if(!fobj.name2.value ){
				alert('이름을 넣어주세요.');
				fobj.name2.focus();
				return ;
			}
			if(!fobj.jumin1.value){
				alert('주민번호 앞 자리를 입력하세요.');
				fobj.jumin1.focus();
				return ;
			}
			if(!fobj.jumin2.value){
				alert('주민번호 뒤 자리를 입력하세요.');
				fobj.jumin2.focus();
				return ;
			}
			
			if(!fobj.hphone_2.value ){
				alert('전화번호 두번째 자리를 입력하세요.');
				fobj.hphone_2.focus();
				return ;
			}
			if(!fobj.hphone_3.value ){
				alert('전화번호 세번째 자리를 입력하세요.');
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
	alert('상담신청을 취소합니다!')
	
	self.close()
}
function confirm_auto(){

	alert('상담신청이 완료 되었습니다\n담당자가 상담시간에 전화드리겠습니다 !\n감사합니다' )
			
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
	alert('보험료 산출버튼을 클릭하세요')
}

function boheom_gaib(){
		
		var fobj;
			fobj = document.form1;
			
			if(!fobj.golf_preminum.value ){
				alert('보험료부터 산출하세요.');
				fobj.name2.focus();
				return ;
			}
				window.open('','bogan','width=560,height=600,top=200,left=200')
				document.form1.target = 'bogan'
				document.form1.action = '/php/consulting_01.php'
				document.form1.submit();
			
			
	}
//-->
