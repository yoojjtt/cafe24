<!--

function clearText(thefield){
	if(thefield.defaultValue==thefield.value){
		thefield.value="";
	}
}
function focus_move_start(){
	var str = document.form1.start.value.length;
  if(str == 8)
    document.form1.certi_number.focus();
}
function errorInput(){
	alert('주소 버튼을 클릭하세요')
		document.form1.add_button.focus()
		return;
}
function memo_reset(){

	document.form2.reset();

}

function memo_view(num){
	var winl = (screen.width - 1024) / 2
		var wint = (screen.height - 768) / 2
		window.open('/category/admin/pop_up/memo_.php?pum=1&num='+num,'memo_hagi3_view','left='+winl+',top='+wint+',resizable=yes,width=1000,height=100,scrollbars=no,status=yes')
}
function memo_store(url){

	if(!document.form2.content.value){
		alert('메모내용이 없습니다')
			document.form2.content.focus()
			return;
	}

	if(confirm("수정합니까"))
		{
			//window.open('','','width=50,height=50,top=600,left=600')
			document.form2.target="_self";
			document.form2.action = url
			document.form2.submit();
		}
}
function view_info(){//배서 할대만 
	var kind=form1.santage.value
	//alert(kind)
	
		if(kind==7){
			eval("document.all.money_7.style.display = '' ")
		}else{
			eval("document.all.money_7.style.display = 'none' ")
		}
	}
function virtual_sms(osj){//가상계좌발송
		//alert(1)
		var fobj;
			fobj = document.form1;
		  if(osj==1 || osj==3){//chkmodify_dong_bu 에서만 사용함 chkmodify_outo_bu
				//var str=fobj.phone_1.value
				if(!fobj.phone_1.value){
					alert('핸드폰 첫번째 자리')
					fobj.phone_1.focus()
					return;
				}
				if(!fobj.phone_2.value){
					alert('핸드폰두번째 자리')
					fobj.phone_2.focus()
					return;
				}
				if(!fobj.phone_2.value){
					alert('핸드폰 세번째 자리')
					fobj.phone_3.focus()
					return;
				}
			
		  }
				window.open('','bogan_sms','width=350,height=200,top=300,left=400')
				document.form1.target = 'bogan_sms'
				document.form1.action = './virtual_sms.php?annae=1&osj='+osj
				document.form1.submit();
			
			
	}
function virtual_sms_2(osj){//chkmodify_dong_bu 에서만 사용함 chkmodify_outo_bu
		
		var fobj;
			fobj = document.form1;
			if(osj==1 || osj==3 ){//chkmodify_dong_bu 에서만 사용함

				
				if(!fobj.phone_1.value){
					alert('핸드폰 첫번째 자리')
					fobj.phone_1.focus()
					return;
				}
					if(!fobj.phone_2.value){
						alert('핸드폰두번째 자리')
						fobj.phone_2.focus()
						return;
					}
					if(!fobj.phone_2.value){
						alert('핸드폰 세번째 자리')
						fobj.phone_3.focus()
						return;
					}
				
			  }
			//alert(osj)
				window.open('','bogan_sms','width=350,height=200,top=300,left=400')
				document.form1.target = 'bogan_sms'
				document.form1.action = './virtual_sms.php?annae=2&osj='+osj
				document.form1.submit();
			
			
	}	
	
function virtual_sms_put(){
	var fobj;
	fobj = document.form1;
	if(!fobj.bank_name.value){

		alert("은행명!")
		fobj.bank_name.focus()
			return;
	}
	if(!fobj.bank_number.value){
		alert("계좌번호!")
		fobj.bank_number.focus()
			return;
	}
	if(!fobj.monthly_preminum.value){
	alert("보험료!")
	fobj.monthly_preminum.focus()
		return;
	}
	if(fobj.oun_check.checked==false && fobj.con_check.checked==false){
		alert('운전자또는 계약자 전화번호중 하나는 체크하셔야 합니다')
		fobj.oun_check.focus()
			return
	}
	
	if(confirm("가상계좌번호를 문자로 보냅니다!")){
		
		fobj.target="_self";
		fobj.action = 'virtual_sms.php?item=2&bogan=1&sj=1';
		document.form1.submit();
	}


}

function virtual_sms_put_2(){////안내문 발송
	var fobj;
	fobj = document.form1;

	if(fobj.oun_check.checked==false && fobj.con_check.checked==false){
		alert('운전자또는 계약자 전화번호중 하나는 체크하셔야 합니다')
		fobj.oun_check.focus()
			return
	}
	
	if(confirm("안내문자 발송합니다!")){
		
		fobj.target="_self";
		fobj.action = 'virtual_sms.php?item=2&bogan=1&sj=2';
		document.form1.submit();
	}


}
function bogan_company(url){
		
		var fobj;
			fobj = document.form1;
	
	if(!document.form1.ceo_content.value){
	  alert("상담내용을 입력하세요!");
 	  document.form1.ceo_content.focus();
  	  return;
	}


			if(confirm("대리운전회사 정보를 변경합니다!"))
			{
				window.open('','bogan','width=50,height=50,top=600,left=600')
				document.form1.target = 'bogan'
				document.form1.action = url
				document.form1.submit();
			}
			
	}

function bogan(url){
		
		var fobj;
			fobj = document.form1;
		
			if(!document.form1.com_name.value){
	  alert("회사명을 입력하세요!");
 	  document.form1.com_name.focus();
  	  return;
	}
	if(!document.form1.content.value){
	  alert("상담내용을 입력하세요!");
 	  document.form1.content.focus();
  	  return;
	}


			if(confirm("보관은 새로운 저장을 의미합니다"))
			{
				window.open('','bogan','width=50,height=50,top=600,left=600')
				document.form1.target = 'bogan'
				document.form1.action = url
				document.form1.submit();
			}
			
	}

function bogan_d(url){ //대리운전보험
		
	var fobj;
		fobj = document.form1;
	
		if(!document.form1.oun_name.value){
		  alert("이름을 입력하세요!");
		  document.form1.oun_name.focus();
		  return;
		}

		if(document.form1.oun_jumin1.length<'6'){
		  alert("주민번호앞 6자리가 아니에요!");
		  document.form1.oun_jumin1.focus();
		  return;
		}
		if(document.form1.oun_jumin2.length<'7'){
		  alert("주민번호뒤 7자리가 아니에요!");
		  document.form1.oun_jumin2.focus();
		  return;
		}


		if(!document.form1.preminum.value){
		  alert("보험료 입력하세요!");
		  document.form1.preminum.focus();
		  return;
		}
		if(!document.form1.santage.value){
		  alert("납입상태를 선택하세요!");
		  document.form1.santage.focus();
		  return;
		}
		
		if(!document.form1.design_num.value){
		  alert("설계번호를  입력하세요!");
		  document.form1.design_num.focus();
		  return;
		}
		if(document.form1.nab.value=='6'){
		  confirm("6회 납입이 맞나요!");
		 //document.form1.nab.focus();
		}
		
		if(document.form1.ceo_content.value && !document.form1.company.value){
			alert('회사이름이 있어야 회사정보를 저장 할수 있습니다')
				document.form1.company.value;
				return;
			}
		if(confirm("보관은 새로운 저장을 의미합니다"))
		{
			//window.open('','bogan','width=50,height=50,top=600,left=600')
			document.form1.target="_self";
			document.form1.action = url
			document.form1.submit();
		}
			
}
function bunnab_preminum_check(){//신규 등록시
	var fobj;
			fobj = document.form1;

			if(!fobj.first.value){
				var w	=	100
				var sd	=	100
				var winl = (screen.width - w) / 2
				var wint = (screen.height -sd ) / 2
				window.open('','con_name_search_2','left='+winl+',top='+wint+',resizable=no,width=10,height=10,scrollbars=0,status=no')
							
						document.form1.target = "con_name_search_2"
						document.form1.action = "./php/drive_bunnab_preminum_3.php";
						document.form1.submit();
			}
}

function preminum_clear(){//보험료를 클릭하면 회차별 보험료가 클리어
	//alert(form1.num.value)
	//form1.preminum.value=''
	form1.first.value = ''
	form1.second.value = ''
	form1.third.value = ''
	form1.fourth.value = ''
	form1.fifth.value = ''
	form1.sixth.value = ''
	form1.seventh.value = ''
	form1.eighth.value = ''
	form1.nineth.value = ''
	form1.tenth.value = ''
	form1.da_2.value = '' //2회차
	form1.da_3.value = ''
	form1.da_4.value = ''
	form1.da_5.value = ''
	form1.da_6.value = ''
	form1.da_7.value = ''
	form1.da_8.value = ''
	form1.da_9.value = ''
	form1.da_10.value = '' //10회차
	form1.daum_day_1.value=''
	form1.daum_day_2.value=''
	form1.daum_day_3.value=''
	form1.daum_day_4.value=''
	form1.daum_day_5.value=''
	form1.daum_day_6.value=''
	form1.daum_day_7.value=''
	form1.daum_day_8.value=''
	form1.daum_day_9.value=''
	form1.daum_day_10.value=''
	if(!form1.num.value){
		document.form1.agree.checked=false
	
	document.form1.con_name.value =''
	document.form1.con_jumin1.value =''
	document.form1.con_jumin2.value =''
	document.form1.con_jumin2.value =''
	document.form1.con_phone.value =''
	}

}

function preminum_check(){
	var fobj;
			fobj = document.form1;
	if(form1.preminum.value.length<=5){
		alert('보험료 체크하세요')
		 document.form1.preminum.focus();
	} else {

		if(form1.num.value){//수정할 경우만 작동함

			if(!fobj.first.value){
						
					var w	=	100
					var sd	=	100
					var winl = (screen.width - w) / 2
					var wint = (screen.height -sd ) / 2
					window.open('','con_name_search_2','left='+winl+',top='+wint+',resizable=no,width=10,height=10,scrollbars=0,status=no')
								
							document.form1.target = "con_name_search_2"
						//	document.form1.action = "./php/bunnab_preminum_3.php";
							document.form1.action = "./php/drive_bunnab_preminum_3.php";
							document.form1.submit();
				}

		}
	}

}


function bogan_c(url){ //상담신청
		
		var fobj;
			fobj = document.form1;
		

			

			if(confirm("수정합니까"))
			{
				window.open('','bogan','width=50,height=50,top=600,left=600')
				document.form1.target = 'bogan'
				document.form1.action = url
				document.form1.submit();
			}
			
	}
	function bogan_sj_2(url){ //유선 상담을 저장
		//alert('1')
		var fobj;
		fobj = document.form1;
		if(!fobj.preminum.value){
			alert('보험료부터 산출하세요')
				document.form1.preminum.focus();
				return false;
		
		}
		if(fobj.booking.value!=15){
			alert('유선상담을 선택하세요')
				document.form1.booking.focus();
				return false;
		}

		if(!fobj.c_name.value ){
			alert('이름을 입력 하세요.');
			document.form1.c_name.focus();
			return false;
		}


		if (!f_chkNoNum(fobj.c_name.value))
		{
			alert("이름에 숫자는 포함될 수 없습니다.");
			return false;
		}


		if(getLength(trim(fobj.c_name.value)) <= 0)
		{
			alert('이름을 입력하세요.');
			fobj.name.focus();
			return false;
		}


		if (fobj.c_name.value.length < 2)
		{
			 alert("이름은 두글자 이상이여야 합니다.");
			 fobj.c_name.focus();
			 return false;
		}

		if(getLength(trim(fobj.c_name.value)) < 2)
		{
			alert('이름은 두글자 이상이여야 합니다.');
			fobj.c_name.focus();
			return false;
		}


		if(!stringcheck(fobj.c_name.value))
		{
			alert('올바른 이름을 입력해 주시기 바랍니다.');
			fobj.c_name.focus();
			return false;
		}

		if(!fobj.jumin1.value ){
			alert('주민앞자리를 입력하세요.');
			document.form1.jumin1.focus();
			return false;
		}
		if(!fobj.jumin2.value ){
			alert('주민뒤자리를 입력하세요.');
			document.form1.jumin2.focus();
			return false;
		}
		 if (!isNumeric(fobj.phone_2.value)) {
			alert("핸드폰번호는 숫자로 입력하세요.");
			document.form1.phone_2.focus();
			return false;
		}
		 if (!isNumeric(fobj.phone_3.value)) {
				alert("핸드폰번호는 숫자로 입력하세요.");
				document.form1.phone_3.focus();
				return false;
		}
	
		if(!fobj.phone_1.value ){
			alert('핸드폰 첫번째번호를 입력하세요.')
				document.form1.phone_1.focus();
			return false;
		}
		
		if(!fobj.phone_2.value ){
			alert('핸드폰 두번째번호를 입력하세요.')
			document.form1.phone_2.focus();
			return false;
		}
		if(!fobj.phone_3.value ){
			alert('핸드폰 세번째번호를 입력하세요.')
			document.form1.phone_3.focus();
			return false;
		}
		
if(fobj.phone_1.value=="010"){
			if(fobj.phone_2.value.length<4){
				alert('핸드폰 두번째 자리는 4자리입니다')
			document.form1.phone_2.focus();
			return false;
			}
		}

		if(fobj.phone_2.value=="0000"){
			alert('핸드폰 번호가 잘못 되었습니다')
				document.form1.phone_2.focus();
			return false;
		}
		if(fobj.phone_3.value=="0000"){
			alert('핸드폰 번호가 잘못 되었습니다')
				document.form1.phone_3.focus();
			return false;
		}
		if (!check_juminno(fobj.jumin1.value + fobj.jumin2.value)){
			return false;
		}
		if(document.all.car_num_header.style.display ==""){
			if(!fobj.chdae_number.value){
				alert('차대번호를 확인 하세요')
				fobj.chdae_number.focus()
				return false;
			}
			
	//		if(fobj.chdae_number.value.length<17){
	//			alert('차대번호는 17자리 입니다')
	//			fobj.chdae_number.focus()
	//			return false;
	//		}
			

		}
		if(document.all.car_num.style.display ==""){//챠량번호 인경우
			if(!fobj.car_number.value){
				alert('차량번호 확인 하세요')
				fobj.car_number.focus()
				return false;
			}
			var car_no = new Array("거","너","더","러","머","고","노","도","로","모","가","나","다","라","마","허","버","바","사","아","자","차","카","타","파","하",
						"서","어","저","처","커","터","퍼","외교","영사","준외","국제","국기","협정","준영","국가","대표",
						"구","누","두","루","무","부","수","우","주","추","쿠","투","푸","후","그","느","드","르","므","브","스","으","즈","츠","크","트","프","흐",
						"보","소","오","조","초","코","토","포","호");
			

				var car_obj1 = "";
				var car_obj2 = "";
				var car_obj3 = "";


			var chkCarlocal="";
			var chkCarflag="";
			var val=fobj.car_number.value;
			val = trim(val);
			if(val.length<8 || val.length >10){
				alert('차량번호 확인 하세요')
				fobj.car_number.focus()
				return false;
			}
				if(val.length==8||val.length==9||val.length==10){
					if(val.length==8){
						chkCarlocal= val.substring(0,3);
						for(i=0;i<car_no.length;i++){
							if(val.indexOf(car_no[i],3) > 0){
								chkCarflag = car_no[i];
								car_obj3 = val.substr(val.indexOf(car_no[i],3)+car_no[i].length);
							}
						}
					}else if(val.length==9){
						chkCarlocal= val.substring(0,4);
						for(i=0;i<car_no.length;i++){
							if(val.indexOf(car_no[i],4) > 0){
								chkCarflag = car_no[i];
								car_obj3 = val.substr(val.indexOf(car_no[i],4)+car_no[i].length);
							}
						}
		

					}else if(val.length==10){
						chkCarlocal= val.substring(0,5);
						for(i=0;i<car_no.length;i++){
							if(val.indexOf(car_no[i],5) > 0){
								chkCarflag = car_no[i];
								car_obj3 = val.substr(val.indexOf(car_no[i],5)+car_no[i].length);
							}
						}
					}
				}
			//alert("2:"+chkCarflag);
			//alert("3:"+car_obj3);
			
			if(!isNumeric(car_obj3)){
			alert('차량번호 끝 4자리는 숫자 이어야 합니다')
			fobj.car_number.focus()
			return false;
			}

		}
		if(!fobj.young_do.value){
			alert('차량 용도를 선택하세요')
		   fobj.young_do.focus()
				return false;
		}
		if(!fobj.bagi_cc.value){
			alert('주소를 입력하세요')
		   fobj.address.focus()
				return false;
		}
		if(!fobj.bagi_cc.value){
			alert('배기량을 선택하세요')
		   fobj.bagi_cc.focus()
				return false;
		}
		if(!fobj.cha_name.value){
			alert('차명을 입력하세요')
		   fobj.cha_name.focus()
				return false;
		}
		if(!fobj.cha_year.value){
			alert('연식을 입력하세요')
		   fobj.cha_year.focus()
				return false;
		}



		

			if(confirm("저장합니다"))
			{
				//window.open('','bogan','width=50,height=50,top=600,left=600')
				//document.form1.target = 'bogan'
				document.form1.action = url
				document.form1.submit();
				//opener.parent.document.location.reload();

				//self.close()
			}
			
	}
	function bogan_sj(url){ //상담신청
		
		var fobj;
			fobj = document.form1;
		
			if(fobj.booking.value=='14'){
				alert('상담안함을 수정하세요')
				 document.form1.booking.focus();
				return
			}

			if(confirm("수정합니까"))
			{
				window.open('','bogan','width=50,height=50,top=600,left=600')
				document.form1.target = 'bogan'
				document.form1.action = url
				document.form1.submit();

			}
			
	}
function bogan_2(url){
		
		var fobj;
			fobj = document.form1;
	
			if(!document.form1.c_name.value){
	  alert("이름을 입력하세요!");
 	  document.form1.name.focus();
  	  return;
	}
	


			if(confirm("수정을 하시겠습니까?"))
			{
				window.open('','bogan','width=50,height=50,top=600,left=600')
				document.form1.target = 'bogan'
				document.form1.action = url
				document.form1.submit();
			}
			
	}

	function bogan_3(url){
		
		var fobj;
			fobj = document.form1;
	
			if(!document.form1.com_name.value){
	  alert("이름을 입력하세요!");
 	  document.form1.name.focus();
  	  return;
	}
	


			if(confirm("수정을 하시겠습니까?"))
			{
				window.open('','bogan','width=50,height=50,top=600,left=600')
				document.form1.target = 'bogan'
				document.form1.action = url
				document.form1.submit();
			}
			
	}
function bogan_5(url){
		
		var fobj;
			fobj = document.form1;
	
			if(!document.form1.c_name.value){
	  alert("이름을 입력하세요!");
 	  document.form1.name.focus();
  	  return;
	}
	


			if(confirm("새로운 저장합니다?"))
			{
				window.open('','bogan','width=50,height=50,top=600,left=600')
				document.form1.target = 'bogan'
				document.form1.action = url
				document.form1.submit();
			}
			
	}
function new_jeonggi_check(){
	var form = document.form1;
	//alert('1')
	if(form.new_jeonggi.value.length==8){
		var start_year		=form.new_jeonggi.value.substring(0,4)
		var start_month	=form.new_jeonggi.value.substring(4,6)
		var start_day	 	=form.new_jeonggi.value.substring(6,8)

		
			if(start_month <1 || start_month >12 || start_day<1 || start_day >31){
				alert('입력값이 잘못 되었습니다')
					form.new_jeonggi.focus();
				return;
			}
		
		form.new_jeonggi.value=start_year+"-"+start_month+"-"+start_day;

	
	}
}

	function new_jeonggi_check_2(){
	var form = document.form1;
	
		var start_year		=form.new_jeonggi.value.substring(0,4)
		var start_month	=form.new_jeonggi.value.substring(5,7)
		var start_day	 	=form.new_jeonggi.value.substring(8,10)

		
			
		
		form.new_jeonggi.value=start_year+start_month+start_day;

		
		
	}

	function booking_check(){
	var form = document.form1;
	if(form.booking_date.value.length==8){
		var start_year		=form.booking_date.value.substring(0,4)
		var start_month	=form.booking_date.value.substring(4,6)
		var start_day	 	=form.booking_date.value.substring(6,8)

		
			if(start_month <1 || start_month >12 || start_day<1 || start_day >31){
				alert('입력값이 잘못 되었습니다')
					form.booking_date.focus();
				return;
			}
		
		form.booking_date.value=start_year+"-"+start_month+"-"+start_day;

		/*}else{
			
			alert('20060101 형식으로 입력하세요!')
			form.ex.focus()
				return;*/
		}
	}

	function booking_check_2(){
	var form = document.form1;
		if(form.booking_date.value.length==10){
			var start_year		=form.booking_date.value.substring(0,4)
			var start_month		=form.booking_date.value.substring(5,7)
			var start_day	 	=form.booking_date.value.substring(8,10)

			
				
			
			form.booking_date.value=start_year+start_month+start_day;
		}
	}
function end_check(){
	var form = document.form1;
	if(form.end.value.length==8){
		var start_year		=form.end.value.substring(0,4)
		var start_month	=form.end.value.substring(4,6)
		var start_day	 	=form.end.value.substring(6,8)

		
			if(start_month <1 || start_month >12 || start_day<1 || start_day >31){
				alert('입력값이 잘못 되었습니다')
					form.start.focus();
				return;
			}
		
		form.end.value=start_year+"-"+start_month+"-"+start_day;

		/*}else{
			
			alert('20060101 형식으로 입력하세요!')
			form.ex.focus()
				return;*/
		}
	}
function end_check_2_2(){
	var form = document.form1;
	
		var start_year		=form.end.value.substring(0,4)
		var start_month		=form.end.value.substring(5,7)
		var start_day	 	=form.end.value.substring(8,10)

		
			
		
		form.end.value=start_year+start_month+start_day;

}
function today_2_check(){
	var form = document.form1;
	if(form.today_2.value.length==8){
		var start_year		=form.today_2.value.substring(0,4)
		var start_month	=form.today_2.value.substring(4,6)
		var start_day	 	=form.today_2.value.substring(6,8)

		
			if(start_month <1 || start_month >12 || start_day<1 || start_day >31){
				alert('입력값이 잘못 되었습니다')
					form.start.focus();
				return;
			}
		
		form.today_2.value=start_year+"-"+start_month+"-"+start_day;

		/*}else{
			
			alert('20060101 형식으로 입력하세요!')
			form.ex.focus()
				return;*/
		}
	}
function today_2_check_2(){
	var form = document.form1;
		if(form.today_2.value.length==10){
		var start_year		=form.today_2.value.substring(0,4)
		var start_month		=form.today_2.value.substring(5,7)
		var start_day	 	=form.today_2.value.substring(8,10)

		
			
		
		form.today_2.value=start_year+start_month+start_day;
		}
}
function today_check(){
	var form = document.form1;
	if(form.today.value.length==8){
		var start_year		=form.today.value.substring(0,4)
		var start_month	=form.today.value.substring(4,6)
		var start_day	 	=form.today.value.substring(6,8)

		
			if(start_month <1 || start_month >12 || start_day<1 || start_day >31){
				alert('입력값이 잘못 되었습니다')
					form.start.focus();
				return;
			}
		
		form.today.value=start_year+"-"+start_month+"-"+start_day;

		/*}else{
			
			alert('20060101 형식으로 입력하세요!')
			form.ex.focus()
				return;*/
		}
	}
function today_check_2(){
	var form = document.form1;
		if(form.today.value.length==10){
		var start_year		=form.today.value.substring(0,4)
		var start_month		=form.today.value.substring(5,7)
		var start_day	 	=form.today.value.substring(8,10)

		
			
		
		form.today.value=start_year+start_month+start_day;
		}
}
function start_check(){
	var form = document.form1;
	if(form.start.value.length==8){
		var start_year		=form.start.value.substring(0,4)
		var start_month	=form.start.value.substring(4,6)
		var start_day	 	=form.start.value.substring(6,8)

		
			if(start_month <1 || start_month >12 || start_day<1 || start_day >31){
				alert('입력값이 잘못 되었습니다')
					form.start.focus();
				return;
			}
		
		form.start.value=start_year+"-"+start_month+"-"+start_day;

		/*}else{
			
			alert('20060101 형식으로 입력하세요!')
			form.ex.focus()
				return;*/
		}
	}
function start_check_2_2(){
	var form = document.form1;
	
		var start_year		=form.start.value.substring(0,4)
		var start_month		=form.start.value.substring(5,7)
		var start_day	 	=form.start.value.substring(8,10)

		
			
		
		form.start.value=start_year+start_month+start_day;

}
	function start_check_2(){
	var form = document.form1;
	
		var start_year		=form.start.value.substring(0,4)
		var start_month		=form.start.value.substring(5,7)
		var start_day	 	=form.start.value.substring(8,10)

		
			
		
		form.start.value=start_year+start_month+start_day;
 /*신규 저장 때만 사용하기 위해*/
	form1.preminum.value=''
	form1.first.value = ''
	form1.second.value = ''
	form1.third.value = ''
	form1.fourth.value = ''
	form1.fifth.value = ''
	form1.sixth.value = ''
	form1.seventh.value = ''
	form1.eighth.value = ''
	form1.nineth.value = ''
	form1.tenth.value = ''
	form1.da_2.value = '' //2회차
	form1.da_3.value = ''
	form1.da_4.value = ''
	form1.da_5.value = ''
	form1.da_6.value = ''
	form1.da_7.value = ''
	form1.da_8.value = ''
	form1.da_9.value = ''
	form1.da_10.value = '' //10회차
	form1.daum_day_1.value=''
	form1.daum_day_2.value=''
	form1.daum_day_3.value=''
	form1.daum_day_4.value=''
	form1.daum_day_5.value=''
	form1.daum_day_6.value=''
	form1.daum_day_7.value=''
	form1.daum_day_8.value=''
	form1.daum_day_9.value=''
	form1.daum_day_10.value=''
    if(!form1.num.value){
	form1.agree.checked=false
	
	form1.con_name.value =''
	form1.con_jumin1.value =''
	form1.con_jumin2.value =''
	form1.con_jumin2.value =''
	form1.con_phone.value =''
	}
		/*}else{
			
			alert('20060101 형식으로 입력하세요!')
			form.ex.focus()
				return;*/
		
	}

	function start_check_3(){
	var form = document.form1;
	
		var start_year		=form.start.value.substring(0,4)
		var start_month		=form.start.value.substring(5,7)
		var start_day	 	=form.start.value.substring(8,10)

		
			
		
		form.start.value=start_year+start_month+start_day;
 /*신규 저장 때만 사용하기 위해*/
	form1.preminum.value=''
	
    if(!form1.num.value){
	form1.agree.checked=false
	
	form1.con_name.value =''
	form1.con_jumin1.value =''
	form1.con_jumin2.value =''
	form1.con_jumin2.value =''
	form1.con_phone.value =''
	}
		/*}else{
			
			alert('20060101 형식으로 입력하세요!')
			form.ex.focus()
				return;*/
		
	}
function car_mangi_check(){
	var form = document.form1;
	if(form.car_mangi.value.length==8){
		var car_mangi_year		=form.car_mangi.value.substring(0,4)
		var car_mangi_month		=form.car_mangi.value.substring(4,6)
		var car_mangi_day	 	=form.car_mangi.value.substring(6,8)

		
			if(car_mangi_month <1 || car_mangi_month >12 || car_mangi_day<1 || car_mangi_day >31){
				alert('입력값이 잘못 되었습니다')
					form.ex.focus();
				return;
			}
		
		form.car_mangi.value=car_mangi_year+"-"+car_mangi_month+"-"+car_mangi_day;

		/*}else{
			
			alert('20060101 형식으로 입력하세요!')
			form.ex.focus()
				return;*/
		}
	}

	function car_mangi_check_2(){
	var form = document.form1;
	
		var car_mangi_year		=form.car_mangi.value.substring(0,4)
		var car_mangi_month	=form.car_mangi.value.substring(5,7)
		var car_mangi_day	 	=form.car_mangi.value.substring(8,10)

		
			
		
		form.car_mangi.value=car_mangi_year+car_mangi_month+car_mangi_day;

		/*}else{
			
			alert('20060101 형식으로 입력하세요!')
			form.ex.focus()
				return;*/
		
	}
function ceo_fax_check(){

	var form = document.form1;
		
	 
			 if(form.ceo_fax.value.length=='9'){
				
			
				var phone_first		=form.ceo_fax.value.substring(0,2)
				var phone_second   =form.ceo_fax.value.substring(2,5)
				var phone_third	 	=form.ceo_fax.value.substring(5,9)

					form.ceo_fax.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.ceo_fax.value.length=='10'){
				
			
				var phone_first		=form.ceo_fax.value.substring(0,3)
				var phone_second   =form.ceo_fax.value.substring(3,6)
				var phone_third	 	=form.ceo_fax.value.substring(6,10)

					form.ceo_fax.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.ceo_fax.value.length=='11'){
					
				var phone_first		=form.ceo_fax.value.substring(0,3)
				var phone_second   =form.ceo_fax.value.substring(3,7)
				var phone_third	 	=form.ceo_fax.value.substring(7,11)

							
				form.ceo_fax.value=phone_first+"-"+phone_second+"-"+phone_third;
				
			  }
	}


function ceo_fax_check_2(){

	var form = document.form1;
		
	 
			 if(form.ceo_fax.value.length=='9'){
				
			
				var phone_first		=form.ceo_fax.value.substring(0,2)
				var phone_second   =form.ceo_fax.value.substring(2,5)
				var phone_third	 	=form.ceo_fax.value.substring(5,9)

					form.ceo_fax.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.ceo_fax.value.length=='10'){
				
			
				var phone_first		=form.ceo_fax.value.substring(0,3)
				var phone_second   =form.ceo_fax.value.substring(3,6)
				var phone_third	 	=form.ceo_fax.value.substring(6,10)

					form.ceo_fax.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.ceo_fax.value.length=='11'){
					
				var phone_first		=form.ceo_fax.value.substring(0,3)
				var phone_second   =form.ceo_fax.value.substring(3,7)
				var phone_third	 	=form.ceo_fax.value.substring(7,11)

							
				form.ceo_fax.value=phone_first+"-"+phone_second+"-"+phone_third;
				
			  }
	}
function ceo_phone_check(){

	var form = document.form1;
		
	 
			 if(form.ceo_phone.value.length=='9'){
				
			
				var phone_first		=form.ceo_phone.value.substring(0,2)
				var phone_second   =form.ceo_phone.value.substring(2,5)
				var phone_third	 	=form.ceo_phone.value.substring(5,9)

					form.ceo_phone.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.ceo_phone.value.length=='10'){
				
			
				var phone_first		=form.ceo_phone.value.substring(0,3)
				var phone_second   =form.ceo_phone.value.substring(3,6)
				var phone_third	 	=form.ceo_phone.value.substring(6,10)

					form.ceo_phone.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.ceo_phone.value.length=='11'){
					
				var phone_first		=form.ceo_phone.value.substring(0,3)
				var phone_second   =form.ceo_phone.value.substring(3,7)
				var phone_third	 	=form.ceo_phone.value.substring(7,11)

							
				form.ceo_phone.value=phone_first+"-"+phone_second+"-"+phone_third;
				
			  }
	}


function ceo_phone_check_2(){

	var form = document.form1;
		
	 
			 if(form.ceo_phone.value.length=='9'){
				
			
				var phone_first		=form.ceo_phone.value.substring(0,2)
				var phone_second   =form.ceo_phone.value.substring(2,5)
				var phone_third	 	=form.ceo_phone.value.substring(5,9)

					form.ceo_phone.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.ceo_phone.value.length=='10'){
				
			
				var phone_first		=form.ceo_phone.value.substring(0,3)
				var phone_second   =form.ceo_phone.value.substring(3,6)
				var phone_third	 	=form.ceo_phone.value.substring(6,10)

					form.ceo_phone.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.ceo_phone.value.length=='11'){
					
				var phone_first		=form.ceo_phone.value.substring(0,3)
				var phone_second   =form.ceo_phone.value.substring(3,7)
				var phone_third	 	=form.ceo_phone.value.substring(7,11)

							
				form.ceo_phone.value=phone_first+"-"+phone_second+"-"+phone_third;
				
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
function change_phone_check(){

	var form = document.form1;
		
	 
			 if(form.change_phone.value.length=='9'){
				
			
				var phone_first		=form.change_phone.value.substring(0,2)
				var phone_second   =form.change_phone.value.substring(2,5)
				var phone_third	 	=form.change_phone.value.substring(5,9)

					form.change_phone.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.change_phone.value.length=='10'){
				
			
				var phone_first		=form.change_phone.value.substring(0,3)
				var phone_second   =form.change_phone.value.substring(3,6)
				var phone_third	 	=form.change_phone.value.substring(6,10)

					form.change_phone.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.change_phone.value.length=='11'){
					
				var phone_first		=form.change_phone.value.substring(0,3)
				var phone_second   =form.change_phone.value.substring(3,7)
				var phone_third	 	=form.change_phone.value.substring(7,11)

							
				form.change_phone.value=phone_first+"-"+phone_second+"-"+phone_third;
				
			  }
	}


	function change_phone_check_2(){

	var form = document.form1;
		
	 
			 if(form.change_phone.value.length=='9'){
				
			
				var phone_first		=form.change_phone.value.substring(0,2)
				var phone_second   =form.change_phone.value.substring(2,5)
				var phone_third	 	=form.change_phone.value.substring(5,9)

					form.change_phone.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.change_phone.value.length=='10'){
				
			
				var phone_first		=form.change_phone.value.substring(0,3)
				var phone_second   =form.change_phone.value.substring(3,6)
				var phone_third	 	=form.change_phone.value.substring(6,10)

					form.change_phone.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.change_phone.value.length=='11'){
					
				var phone_first		=form.change_phone.value.substring(0,3)
				var phone_second   =form.change_phone.value.substring(3,7)
				var phone_third	 	=form.change_phone.value.substring(7,11)

							
				form.change_phone.value=phone_first+"-"+phone_second+"-"+phone_third;
				
			  }
	}


function con_phone_check(){

	var form = document.form1;
		
	 
			 if(form.con_phone.value.length=='9'){
				
			
				var phone_first		=form.con_phone.value.substring(0,2)
				var phone_second   =form.con_phone.value.substring(2,5)
				var phone_third	 	=form.con_phone.value.substring(5,9)

					form.con_phone.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.con_phone.value.length=='10'){
				
			
				var phone_first		=form.con_phone.value.substring(0,3)
				var phone_second   =form.con_phone.value.substring(3,6)
				var phone_third	 	=form.con_phone.value.substring(6,10)

					form.con_phone.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.con_phone.value.length=='11'){
					
				var phone_first		=form.con_phone.value.substring(0,3)
				var phone_second   =form.con_phone.value.substring(3,7)
				var phone_third	 	=form.con_phone.value.substring(7,11)

							
				form.con_phone.value=phone_first+"-"+phone_second+"-"+phone_third;
				
			  }
	}


	function con_phone_check_2(){
	
	var form = document.form1;
	    if(form.con_phone.value.length=='11'){
			
			var phone_first		=form.con_phone.value.substring(0,2)
			var phone_second		=form.con_phone.value.substring(3,6)
			var phone_third	 	=form.con_phone.value.substring(7,12)

			form.con_phone.value=phone_first+phone_second+phone_third;
			
	 }else if(form.con_phone.value.length=='12'){
			
			var phone_first		=form.con_phone.value.substring(0,3)
			var phone_second		=form.con_phone.value.substring(4,7)
			var phone_third	 	=form.con_phone.value.substring(8,13)

			form.con_phone.value=phone_first+phone_second+phone_third;

	 }else if(form.con_phone.value.length=='13'){
			

			var phone_first		=form.con_phone.value.substring(0,3)
			var phone_second		=form.con_phone.value.substring(4,8)
			var phone_third	 	=form.con_phone.value.substring(9,13)

			form.con_phone.value=phone_first+phone_second+phone_third;
		
	  }
	}
/*	function certi_check(){//삼성이륜차보험증권번호
	//alert(1)
	var form = document.form1;
	    if(form.certi_number.value.length=='7'){
			take =new Date()
			var year_1;
				//year_1= String(take.getYear());
				//var year_2;
				//year_2=year_1.substring(2,4);

			var year_1=form.start.value.substring(2,4);
			form.certi_number.value="107-"+form.certi_number.value+"-0000";
	  }
	}*/

	function dongbu_certi_check(){//동부대리보험 체크
	//alert(1)
	var form = document.form1;
	    if(form.certi_number.value.length=='7'){
			take =new Date()
			var year_1;
				//year_1= String(take.getYear());
				//var year_2;
				//year_2=year_1.substring(2,4);

			var year_1=form.start.value.substring(2,4);
			form.certi_number.value="017-"+year_1+"-"+form.certi_number.value+"-000";
	  }
	}
function company_num_ber_check(){//사업자번호

	var form = document.form1;
		
	 
			 if(form.company_num_ber.value.length=='10'){
				
			
				var phone_first		=form.company_num_ber.value.substring(0,3)
				var phone_second   =form.company_num_ber.value.substring(3,5)
				var phone_third	 	=form.company_num_ber.value.substring(5,10)

					form.company_num_ber.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else {
				alert('사업자번호 자리수가 틀렸습니다')
				 document.form1.company_num_ber.focus();
  				return;
			 }

	}

	function company_num_ber_check_2(){//사업자 번호 제자로 돌리기
	
	var form = document.form1;
	    if(form.company_num_ber.value.length=='12'){
			
			var phone_first		=form.company_num_ber.value.substring(0,3)
			var phone_second		=form.company_num_ber.value.substring(4,6)
			var phone_third	 	=form.company_num_ber.value.substring(7,12)
				

			form.company_num_ber.value=phone_first+phone_second+phone_third;
			
	 }
	}
	function l_number_check(){//법인번호

	var form = document.form1;
			var company_num_ber_first		=form.company_num_ber.value.substring(3,4)
			//var company_num_ber_second		=form.company_num_ber.value.substring(6,7)
			
		if(form.company_num_ber.value.length!='12' && company_num_ber_first!='-' ){

			alert('사업자 번호 부터 체크하세요')

				document.form1.company_num_ber.focus();
  				return;
			}else{
	 
				 if(form.l_number.value.length=='13'){
					
				
					var phone_first		=form.l_number.value.substring(0,6)
					var phone_second   =form.l_number.value.substring(6,13)
				

						form.l_number.value=phone_first+"-"+phone_second;

				 }else {
					alert('법인번호 자리수가 틀렸습니다')
					 document.form1.l_number.focus();
					return;
				 }
			}
		

	}

	function l_number_check_2(){//법인 번호 제자로 돌리기
	
	var form = document.form1;
	    if(form.l_number.value.length=='14'){
			
			var phone_first		=form.l_number.value.substring(0,6)
			var phone_second		=form.l_number.value.substring(7,14)
			

			form.l_number.value=phone_first+phone_second;
			
	 }
	}
	function p_con_phone_check(){

	var form = document.form1;
		
	 
			 if(form.p_con_phone.value.length=='9'){
				
			
				var phone_first		=form.p_con_phone.value.substring(0,2)
				var phone_second   =form.p_con_phone.value.substring(2,5)
				var phone_third	 	=form.p_con_phone.value.substring(5,9)

					form.p_con_phone.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.p_con_phone.value.length=='10'){
				
			
				var phone_first		=form.p_con_phone.value.substring(0,3)
				var phone_second   =form.p_con_phone.value.substring(3,6)
				var phone_third	 	=form.p_con_phone.value.substring(6,10)

					form.p_con_phone.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.p_con_phone.value.length=='11'){
					
				var phone_first		=form.p_con_phone.value.substring(0,3)
				var phone_second   =form.p_con_phone.value.substring(3,7)
				var phone_third	 	=form.p_con_phone.value.substring(7,11)

							
				form.p_con_phone.value=phone_first+"-"+phone_second+"-"+phone_third;
				
			  }
	}


	function p_con_phone_check_2(){
	
	var form = document.form1;
	    if(form.p_con_phone.value.length=='11'){
			
			var phone_first		=form.p_con_phone.value.substring(0,2)
			var phone_second		=form.p_con_phone.value.substring(3,6)
			var phone_third	 	=form.p_con_phone.value.substring(7,12)

			form.p_con_phone.value=phone_first+phone_second+phone_third;
			
	 }else if(form.p_con_phone.value.length=='12'){
			
			var phone_first		=form.p_con_phone.value.substring(0,3)
			var phone_second		=form.p_con_phone.value.substring(4,7)
			var phone_third	 	=form.p_con_phone.value.substring(8,13)

			form.p_con_phone.value=phone_first+phone_second+phone_third;

	 }else if(form.p_con_phone.value.length=='13'){
			

			var phone_first		=form.p_con_phone.value.substring(0,3)
			var phone_second		=form.p_con_phone.value.substring(4,8)
			var phone_third	 	=form.p_con_phone.value.substring(9,13)

			form.p_con_phone.value=phone_first+phone_second+phone_third;
		
	  }
	}
/* 삼성 이륜차 보험증권 번호 입력
	function certi_check_2(){
	
	var form = document.form1;
	   
			var certi_third	 	=form.certi_number.value.substring(3,10);

			

			form.certi_number.value= certi_third;
		
	  }*/
	  function dongbu_certi_check_2(){
	
	var form = document.form1;
	   
			var certi_third	 	=form.certi_number.value.substring(7,14);

			

			form.certi_number.value= certi_third;
		
	  }


function focus_jumin_change_2(){
	
 var str = document.form1.change_jumin1.value.length
  if(str =='6'){	
    document.form1.change_jumin2.focus();
  }
}
function focus_jumin_change_1(){
	
 var str = document.form1.change_jumin2.value.length
  if(str =='7'){	
    document.form1.change_phone.focus();
  }
}
function focus_jumin_oun_2(){
	
 var str = document.form1.oun_jumin1.value.length
  if(str =='6'){	
    document.form1.oun_jumin2.focus();
  }
}
function focus_jumin_oun_1(){
	
 var str = document.form1.oun_jumin2.value.length
  if(str =='7'){	
    document.form1.oun_phone.focus();
  }
}
function focus_jumin_oun_3(){
	
 var str = document.form1.con_jumin1.value.length
  if(str =='6'){	
    document.form1.con_jumin2.focus();
  }
}
function focus_jumin_oun_4(){
	
 var str = document.form1.con_jumin2.value.length
  if(str =='7'){	
    document.form1.con_phone.focus();
  }
}
function focus_jumin_oun_5(){
	
 var str = document.form1.p_con_jumin1.value.length
  if(str =='6'){	
    document.form1.p_con_jumin2.focus();
  }
}
function focus_jumin_oun_6(){
	
 var str = document.form1.p_con_jumin2.value.length
  if(str =='7'){	
    document.form1.p_con_phone.focus();
  }
}
function focus_jumin(){
	
 var str = document.form1.jumin1.value.length
  if(str =='6'){	
    document.form1.jumin2.focus();
  }
}
	function focus_move4(){
 var str = document.form1.sigi_year.value.length
  if(str == 4)
    document.form1.sigi_month.focus();
}

function focus_move5(){
 var str = document.form1.sigi_month.value.length
  if(str == 2)
    document.form1.sigi_day.focus();
}
function focus_move6(){
 var str = document.form1.jeonggi_year.value.length
  if(str == 4)
    document.form1.jeonggi_month.focus();
}
function focus_move7(){
 var str = document.form1.jeonggi_month.value.length
  if(str == 2)
    document.form1.jeonggi_day.focus();
}
function focus_move8(){
 var str = document.form1.sigi_day.value.length
  if(str == 2)
    document.form1.jeonggi_year.focus();
}

function self_close(){
	opener.document.location.reload()
	self.close()
}
function det_2(){
	
		if(document.form1.agree.checked==true){

				
				document.form1.con_name.value = document.form1.oun_name.value
				document.form1.con_jumin1.value = document.form1.oun_jumin1.value
				document.form1.con_jumin2.value = document.form1.oun_jumin2.value
				document.form1.con_jumin2.value = document.form1.oun_jumin2.value
				document.form1.con_phone.value = document.form1.oun_phone.value
				
			
		}else{
					document.form1.con_name.value = ""
				document.form1.con_jumin1.value = ""
				document.form1.con_jumin2.value = ""
				document.form1.con_jumin2.value = ""
				document.form1.con_phone.value = ""
		}

}
function det(){
	
		if(document.form1.agree.checked==true){

				
				document.form1.con_name.value = document.form1.oun_name.value
				document.form1.con_jumin1.value = document.form1.oun_jumin1.value
				document.form1.con_jumin2.value = document.form1.oun_jumin2.value
				document.form1.con_jumin2.value = document.form1.oun_jumin2.value
				document.form1.con_phone.value = document.form1.oun_phone.value
				var fobj=document.form1;
				if(!fobj.first.value){
					
				var w	=	100
				var sd	=	100
				var winl = (screen.width - w) / 2
				var wint = (screen.height -sd ) / 2
				window.open('','con_name_search_2','left='+winl+',top='+wint+',resizable=no,width=10,height=10,scrollbars=0,status=no')
							
						document.form1.target = "con_name_search_2"
						document.form1.action = "./php/drive_bunnab_preminum_3.php";
						document.form1.submit();
			}
		}else{
					document.form1.con_name.value = ""
				document.form1.con_jumin1.value = ""
				document.form1.con_jumin2.value = ""
				document.form1.con_jumin2.value = ""
				document.form1.con_phone.value = ""
				}

}
function det_ceo(){
	
		if(document.form1.agree_ceo.checked==true){

			
				document.form1.ceo_name.value = document.form1.con_name.value
				
		}else{
					document.form1.ceo_name.value = ""
				
		}

}
function con_name_check(){
	var form = document.form1	
		
		var w	=	100
		var sd	=	100
		var winl = (screen.width - w) / 2
		var wint = (screen.height -sd ) / 2
		window.open('','con_name_search','left='+winl+',top='+wint+',resizable=no,width=450,height=100,scrollbars=0,status=no')
		document.form1.target = "con_name_search"
		document.form1.action = "../consulting/php/con_name_search.php"
		document.form1.submit()
		//document.form1.target = '';
		
}
function p_con_name_check(){//피보험자의 주민번호를 갖고서 피보험자의 사업자 등록번호 또는 찾기
	var form = document.form1	
		
		var w	=	100
		var sd	=	100
		var winl = (screen.width - w) / 2
		var wint = (screen.height -sd ) / 2
		window.open('','p_con_name_search','left='+winl+',top='+wint+',resizable=no,width=450,height=100,scrollbars=0,status=no')
		document.form1.target = "p_con_name_search"
		document.form1.action = "../consulting/php/p_con_name_search.php"
		document.form1.submit()
		//document.form1.target = '';
		
}
 //업체 등록할 때 업체 명을 입력한 후 입력여부를 체크 한다
function con_name_check_2(){
	var form = document.form1	
		
		var w	=	100
		var sd	=	100
		var winl = (screen.width - w) / 2
		var wint = (screen.height -sd ) / 2
		window.open('','con_name_search_2','left='+winl+',top='+wint+',resizable=no,width=450,height=100,scrollbars=0,status=no')
		document.form1.target = "con_name_search_2"
		document.form1.action = "../consulting/php/con_name_search_2.php"
		document.form1.submit()
		//document.form1.target = '';
		
}

function focus_jumin1(){
 var str = document.form2.jumin1.value.length;
  if(str == 6)
    document.form2.jumin2.focus();
}

function focus_jumin2(){
 var str = document.form2.jumin2.value.length;
  if(str == 7)
    document.form2.phone_1.focus();
}
function focus_phone_1(){
 var str = document.form2.phone_1.value;
  if(str == '010'||str == '011'||str == '016'||str == '017'||str =='018'||str == '019')
    document.form2.phone_2.focus();
}
function focus_phone_2(){
	//alert('1')
 var str = document.form2.phone_2.value.length;
  if(str == '4')
    document.form2.phone_3.focus();
}


function ifram_virtual_sms_2(osj){//memo_.php 에서 사용함 chkmodify_outo_bu
		
		var fobj;
			fobj = document.form2;
			if(osj==1 || osj==3 ){//chkmodify_dong_bu 에서만 사용함

				
				if(!fobj.phone_1.value){
					alert('핸드폰 첫번째 자리')
					fobj.phone_1.focus()
					return;
				}
					if(!fobj.phone_2.value){
						alert('핸드폰두번째 자리')
						fobj.phone_2.focus()
						return;
					}
					if(!fobj.phone_2.value){
						alert('핸드폰 세번째 자리')
						fobj.phone_3.focus()
						return;
					}
				
			  }
			//alert(osj)
				window.open('','bogan_sms','width=350,height=200,top=300,left=400')
				document.form2.target = 'bogan_sms'
				document.form2.action = '/category/admin/pop_up/virtual_sms.php?annae=2&osj='+osj
				document.form2.submit();
			
			
	}


function ifram_memo(){//memo_.php 에서 사용함 chkmodify_outo_bu
		
		var fobj;

		fobj=document.form2;

		if(!fobj.c_name.value){
			alert('이름?')
			fobj.c_name.focus()
				return;
		}
		window.open('','memo_history','width=700,height=200,top=300,left=400')
		document.form2.target = 'memo_history'
		document.form2.action = '/category/admin/pop_up/memo_history.php'
		document.form2.submit();
	
			
	}
function english_certi(){
	
		var fobj;
			fobj = document.form1;
			
			if(!fobj.certi_number.value){
			alert('증권번호?')
			fobj.certi_number.focus()
				return;
			}
			if(!fobj.e_name.value){
			alert('성명?')
			fobj.e_name.focus()
				return;
			}
			if(!fobj.jumin1.value){
			alert('주민번호?')
			fobj.jumin1.focus()
				return;
			}
			if(!fobj.sigi_year.value){
			alert('시기?')
			fobj.c_name.focus()
				return;
			}
			if(!fobj.jeonggi_year.value){
			alert('종기?')
			fobj.c_name.focus()
				return;
			}
			if(!fobj.accdent_death.value){
			alert('상해사망?')
			fobj.accdent_death.focus()
				return;
			}

			if(!fobj.accdent_medical.value){
			alert('상해의료?')
			fobj.accdent_medical.focus()
				return;
			}
			if(!fobj.sickness_medical.value){
			alert('질병치료비?')
			fobj.sickness_medical.focus()
				return;
			}
			if(!fobj.deductible.value){
			alert('면책금액?')
			fobj.deductible.focus()
				return;
			}
			if(!fobj.repatraiation.value){
			alert('특별비용?')
			fobj.repatraiation.focus()
				return;
			}


			if(confirm("영문증권을 발행합니다"))
			{
				window.open('','bogan','width=800,height=600,top=150,left=200')
				document.form1.target ='bogan'
				document.form1.action = '/kibs_admin/pdf/fpdf153/english_certi.php'
				document.form1.submit();
			}
			
}

function accdent_death_check(){
	var form = document.form1;
	//alert('1')
	if(form.accdent_death.value.length==5){
		var start_year		=form.accdent_death.value.substring(0,2)
		var start_month	=form.accdent_death.value.substring(2,5)	
		
		form.accdent_death.value=start_year+","+start_month;

	
	}else if(form.accdent_death.value.length==6){
		var start_year		=form.accdent_death.value.substring(0,3)
		var start_month	=form.accdent_death.value.substring(3,6)	
		
		form.accdent_death.value=start_year+","+start_month;

	
	}
}

function accdent_death_check_2(){
	var form = document.form1;
	//alert('1')
	if(form.accdent_death.value.length==6){
		var start_year		=form.accdent_death.value.substring(0,2)
		var start_month	=form.accdent_death.value.substring(3,6)	
		
		form.accdent_death.value=start_year+start_month;

	
	}else if(form.accdent_death.value.length==7){
		var start_year		=form.accdent_death.value.substring(0,3)
		var start_month	=form.accdent_death.value.substring(4,7)	
		
		form.accdent_death.value=start_year+start_month;

	
	}
}

function accdent_medical_check(){
	var form = document.form1;
	//alert('1')
	if(form.accdent_medical.value.length==5){
		var start_year		=form.accdent_medical.value.substring(0,2)
		var start_month	=form.accdent_medical.value.substring(2,5)	
		
		form.accdent_medical.value=start_year+","+start_month;

	
	}else if(form.accdent_medical.value.length==6){
		var start_year		=form.accdent_medical.value.substring(0,3)
		var start_month	=form.accdent_medical.value.substring(3,6)	
		
		form.accdent_medical.value=start_year+","+start_month;

	
	}
}

function accdent_medical_check_2(){
	var form = document.form1;
	//alert('1')
	if(form.accdent_medical.value.length==6){
		var start_year		=form.accdent_medical.value.substring(0,2)
		var start_month	=form.accdent_medical.value.substring(3,6)	
		
		form.accdent_medical.value=start_year+start_month;

	
	}else if(form.accdent_medical.value.length==7){
		var start_year		=form.accdent_medical.value.substring(0,3)
		var start_month	=form.accdent_medical.value.substring(4,7)	
		
		form.accdent_medical.value=start_year+start_month;

	
	}
}

function sickness_death_check(){
	var form = document.form1;
	//alert('1')
	if(form.sickness_death.value.length==5){
		var start_year		=form.sickness_death.value.substring(0,2)
		var start_month	=form.sickness_death.value.substring(2,5)	
		
		form.sickness_death.value=start_year+","+start_month;

	
	}else if(form.sickness_death.value.length==6){
		var start_year		=form.sickness_death.value.substring(0,3)
		var start_month	=form.sickness_death.value.substring(3,6)	
		
		form.sickness_death.value=start_year+","+start_month;

	
	}
}

function sickness_death_check_2(){
	var form = document.form1;
	//alert('1')
	if(form.sickness_death.value.length==6){
		var start_year		=form.sickness_death.value.substring(0,2)
		var start_month	=form.sickness_death.value.substring(3,6)	
		
		form.sickness_death.value=start_year+start_month;

	
	}else if(form.sickness_death.value.length==7){
		var start_year		=form.sickness_death.value.substring(0,3)
		var start_month	=form.sickness_death.value.substring(4,7)	
		
		form.sickness_death.value=start_year+start_month;

	
	}
}

function sickness_medical_check(){
	var form = document.form1;
	//alert('1')
	if(form.sickness_medical.value.length==5){
		var start_year		=form.sickness_medical.value.substring(0,2)
		var start_month	=form.sickness_medical.value.substring(2,5)	
		
		form.sickness_medical.value=start_year+","+start_month;

	
	}else if(form.sickness_medical.value.length==6){
		var start_year		=form.sickness_medical.value.substring(0,3)
		var start_month	=form.sickness_medical.value.substring(3,6)	
		
		form.sickness_medical.value=start_year+","+start_month;

	
	}
}

function sickness_medical_check_2(){
	var form = document.form1;
	//alert('1')
	if(form.sickness_medical.value.length==6){
		var start_year		=form.sickness_medical.value.substring(0,2)
		var start_month	=form.sickness_medical.value.substring(3,6)	
		
		form.sickness_medical.value=start_year+start_month;

	
	}else if(form.sickness_medical.value.length==7){
		var start_year		=form.sickness_medical.value.substring(0,3)
		var start_month	=form.sickness_medical.value.substring(4,7)	
		
		form.sickness_medical.value=start_year+start_month;

	
	}
}

function repatraiation_check(){
	var form = document.form1;
	//alert('1')
	if(form.repatraiation.value.length==5){
		var start_year		=form.repatraiation.value.substring(0,2)
		var start_month	=form.repatraiation.value.substring(2,5)	
		
		form.repatraiation.value=start_year+","+start_month;

	
	}else if(form.repatraiation.value.length==6){
		var start_year		=form.repatraiation.value.substring(0,3)
		var start_month	=form.repatraiation.value.substring(3,6)	
		
		form.repatraiation.value=start_year+","+start_month;

	
	}
}

function repatraiation_check_2(){
	var form = document.form1;
	//alert('1')
	if(form.repatraiation.value.length==6){
		var start_year		=form.repatraiation.value.substring(0,2)
		var start_month	=form.repatraiation.value.substring(3,6)	
		
		form.repatraiation.value=start_year+start_month;

	
	}else if(form.repatraiation.value.length==7){
		var start_year		=form.repatraiation.value.substring(0,3)
		var start_month	=form.repatraiation.value.substring(4,7)	
		
		form.repatraiation.value=start_year+start_month;

	
	}
}

function certi_open(osj){//
		
		var fobj;
			fobj = document.form1;
		 if(fobj.booking.value!=1){
			 alert('계약이 되어야만 보험증권번호를 입력할 수 있다')
				fobj.booking.focus()
				return;
			 }
				window.open('','bogan_sms','width=400,height=200,top=300,left=400')
				document.form1.target = 'bogan_sms'
				document.form1.action = './certi_open.php?osj='+osj
				document.form1.submit();
			
			
	}
function certi_search_num(osj){//증권번호를 조회해서 수정하자
		
		var fobj;
			fobj = document.form1;
		
				window.open('','bogan_sms_10','width=400,height=200,top=300,left=400')
				document.form1.target = 'bogan_sms_10'
				document.form1.action = './certi_sujung.php?certi_table_num='+osj
				document.form1.submit();
			
			
	}
function car_open(osj){//
		
		var fobj;
			fobj = document.form1;
		 if(fobj.booking.value!=1){
			 alert('계약이 되어야만 보험증권번호를 입력할 수 있다')
				fobj.booking.focus()
				return;
			 }
				window.open('','bogan_sms','width=400,height=200,top=300,left=400')
				document.form1.target = 'bogan_sms'
				document.form1.action = './car_mangi.php?osj='+osj
				document.form1.submit();
			
			
	}
function certi_store(){
	var fobj;
			fobj = document.form1;

	/* if(fobj.start.value.length==10){
		 confirm('보험가입일'+fobj.start.value+'가 맞는가?')
			fobj.start.focus()
			 return;
	 }*/
	 if(!fobj.certi_number.value){
			 alert('증권번호를 입력하세요!')
				fobj.certi_number.focus()
				return;
			 }
	if(!fobj.company.value){
			 alert('보험회사를 입력하세요!')
				fobj.company.focus()
				return;
			 }
	if(!fobj.preminum.value){
			 alert('보험료를 입력하세요!')
				fobj.preminum.focus()
				return;
			 }
	if(fobj.young_do.value==0){
			 alert('용도를 선택 하세요!')
				fobj.young_do.focus()
				return;
			 }
	alert('증권번호를 저장하겠습니다' )
			
					var w	=	100
					var sd	=	100
					var winl = (screen.width - w) / 2
					var wint = (screen.height -sd ) / 2
				//	window.open('','con_name_search_2','left='+winl+',top='+wint+',resizable=no,width=0,height=0,scrollbars=0,status=no')
								
					//		document.form1.target = "con_name_search_2"
							document.form1.action = "./certi_store.php";
							
							document.form1.submit()
						
		opener.parent.document.location.reload();

		self.close()
		
}
function car_store(){
	var fobj;
			fobj = document.form1;

	/* if(fobj.start.value.length==10){
		 confirm('보험가입일'+fobj.start.value+'가 맞는가?')
			fobj.start.focus()
			 return;
	 }*/
	 if(!fobj.car_number.value){
			 alert('자동차번호를 입력하세요!')
				fobj.car_number.focus()
				return;
			 }
	if(!fobj.company.value){
			 alert('보험회사를 입력하세요!')
				fobj.company.focus()
				return;
			 }
	
	alert('자동차번호를 저장하겠습까?' )
			
					var w	=	100
					var sd	=	100
					var winl = (screen.width - w) / 2
					var wint = (screen.height -sd ) / 2
				//	window.open('','con_name_search_2','left='+winl+',top='+wint+',resizable=no,width=0,height=0,scrollbars=0,status=no')
								
							document.form1.target = "con_name_search_2"
							document.form1.action = "./car_store.php";
							
							document.form1.submit()
						
		opener.parent.document.location.reload();

		self.close()
		
}


function certi_store_sujung(){
	var fobj;
			fobj = document.form1;

	/* if(fobj.start.value.length==10){
		 confirm('보험가입일'+fobj.start.value+'가 맞는가?')
			fobj.start.focus()
			 return;
	 }*/
	 if(!fobj.certi_number.value){
			 alert('증권번호를 입력하세요!')
				fobj.certi_number.focus()
				return;
			 }
	 if(!fobj.company.value){
			 alert('보험회사를 입력하세요!')
				fobj.company.focus()
				return;
			 }
	if(!fobj.preminum.value){
			 alert('보험료를 입력하세요!')
				fobj.preminum.focus()
				return;
			 }
	if(!fobj.young_do.value==0){
			 alert('용도를 선택 하세요!')
				fobj.young_do.focus()
				return;
			 }
	alert('수정 하겠습니까' )
			
					var w	=	100
					var sd	=	100
					var winl = (screen.width - w) / 2
					var wint = (screen.height -sd ) / 2
					///window.open('','con_name_search_2','left='+winl+',top='+wint+',resizable=no,width=0,height=0,scrollbars=0,status=no')
								
							//document.form1.target = "con_name_search_2"
							document.form1.action = "./certi_store_sujung.php";
							
							document.form1.submit()
						
		opener.parent.document.location.reload();

		self.close()
		
}

function osj_virtual_sms(osj){//가상계좌발송
		//alert(1)
		var fobj;
			fobj = document.form1;
		  if(osj==1 || osj==3){//chkmodify_dong_bu 에서만 사용함 chkmodify_outo_bu
				//var str=fobj.phone_1.value
				if(!fobj.phone.value){
					alert('핸드폰 첫번째 자리')
					fobj.phone.focus()
					return;
				}
				
			
		  }
				window.open('','bogan_sms','width=350,height=200,top=300,left=400')
				document.form1.target = 'bogan_sms'
				document.form1.action = './virtual_sms.php?annae=1&osj='+osj
				document.form1.submit();
			
			
	}
function osj_virtual_sms_2(osj){//chkmodify_dong_bu 에서만 사용함 chkmodify_outo_bu
		
		var fobj;
			fobj = document.form1;
			if(osj==1 || osj==3 ){//chkmodify_dong_bu 에서만 사용함

				
				if(!fobj.phone.value){
					alert('핸드폰 첫번째 자리')
					fobj.phone.focus()
					return;
				}
					
				
			  }
			//alert(osj)
				window.open('','bogan_sms','width=350,height=200,top=300,left=400')
				document.form1.target = 'bogan_sms'
				document.form1.action = './virtual_sms.php?annae=2&osj='+osj
				document.form1.submit();
			
			
	}	
//-->

//onClick='accdent_death_check_2()'