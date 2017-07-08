<!--

function search_sms_1(){

		var fobj;
			//alert('1')
			
			fobj = document.form1;

			if(fobj.start_day.value>fobj.end_day.value){
				alert('시작일이 끝날보다 작다');
				fobj.start_day.focus();
				return;
			}
			if(!fobj.start_day.value){
				alert('시작일을선택하세요');
				fobj.start_day.focus();
				return;
			}
			if(!fobj.end_day.value){
				alert('끝일을선택하세요');
				fobj.end_day.focus();
				return;
			}
			if(confirm("조회합니다!")){
				fobj.action="./sms.php?item=206&sms=1&sj=1";
				fobj.submit();
			}
	}
function search_sms_2(){//자동차 보험 만기 조회 carmangi

		var fobj;
			//alert('1')
			
			fobj = document.form1;

			if(fobj.start.value>fobj.end.value){
				alert('시작일이 끝날보다 작다');
				fobj.start.focus();
				return;
			}
			if(!fobj.start.value){
				alert('시작일을선택하세요');
				fobj.start.focus();
				return;
			}
			if(!fobj.end.value){
				alert('끝일을선택하세요');
				fobj.end_day.focus();
				return;
			}
			if(confirm("조회합니다!")){
				fobj.action="./car_mangi.php?item=207&cs=4";
				fobj.submit();
			}
	}
function check_all(){
	var fobj
		fobj	= document.form1;
	for(i=0;i<fobj.elements.length;i++){
		if(fobj.elements[i].name=="sms_check[]"){
			fobj.elements[i].checked=true;


		}
	}
}

function un_check_all(){
	var fobj
		fobj	= document.form1;
	for(i=0;i<fobj.elements.length;i++){
		if(fobj.elements[i].name=="sms_check[]"){
			fobj.elements[i].checked=false;
		}
	}
}

function sms_det(n_um){
		var fobj
		fobj	= document.form1;
	for(i=0;i<fobj.elements.length;i++){

		if(fobj.elements[i].name=="sms_check[]"){
			
			var c_value
				c_value=fobj.elements[i].value;
			if(fobj.elements[i].checked==true){
				var n_um;
				n_um = + n_um;
				
				if(fobj.bun1.value!=c_value && fobj.bun2.value!=c_value && fobj.bun3.value!=c_value && fobj.bun4.value!=c_value && fobj.bun5.value!=c_value && fobj.bun6.value!=c_value && fobj.bun7.value!=c_value && fobj.bun8.value!=c_value && fobj.bun9.value!=c_value && fobj.bun10.value!=c_value){
						if(!fobj.bun1.value){
							fobj.bun1.value=fobj.elements[i].value;
							fobj.num1.value=n_um;
						}else if(!fobj.bun2.value){
							fobj.bun2.value=fobj.elements[i].value;
							fobj.num2.value=n_um;
						}else if(!fobj.bun3.value){
							fobj.bun3.value=fobj.elements[i].value;
							fobj.num3.value=n_um;
						}else if(!fobj.bun4.value){
							fobj.bun4.value=fobj.elements[i].value;
							fobj.num4.value=n_um;
						}else if(!fobj.bun5.value){
							fobj.bun5.value=fobj.elements[i].value;
							fobj.num5.value=n_um;
						}else if(!fobj.bun6.value){
							fobj.bun6.value=fobj.elements[i].value;
							fobj.num6.value=n_um;
						}else if(!fobj.bun7.value){
							fobj.bun7.value=fobj.elements[i].value;
							fobj.num7.value=n_um;
						}else if(!fobj.bun8.value){
							fobj.bun8.value=fobj.elements[i].value;
							fobj.num8.value=n_um;
						}else if(!fobj.bun9.value){
							fobj.bun9.value=fobj.elements[i].value;
							fobj.num9.value=n_um;
						}else if(!fobj.bun10.value){
							fobj.bun10.value=fobj.elements[i].value;
							fobj.num10.value=n_um;
						}
				}
			}else{
				
					if(fobj.bun1.value==fobj.elements[i].value){
						fobj.bun1.value="";
						fobj.num1.value="";
					}else if(fobj.bun2.value==fobj.elements[i].value){
						fobj.bun2.value="";
						fobj.num2.value="";
					}else if(fobj.bun3.value==fobj.elements[i].value){
						fobj.bun3.value="";
						fobj.num3.value="";
					}else if(fobj.bun4.value==fobj.elements[i].value){
						fobj.bun4.value="";
						fobj.num4.value="";
					}else if(fobj.bun5.value==fobj.elements[i].value){
						fobj.bun5.value="";
						fobj.num5.value="";
					}else if(fobj.bun6.value==fobj.elements[i].value){
						fobj.bun6.value="";
						fobj.num6.value="";
					}else if(fobj.bun7.value==fobj.elements[i].value){
						fobj.bun7.value="";
						fobj.num7.value="";
					}else if(fobj.bun8.value==fobj.elements[i].value){
						fobj.bun8.value="";
						fobj.num8.value="";
					}else if(fobj.bun9.value==fobj.elements[i].value){
						fobj.bun9.value="";
						fobj.num9.value="";
					}else if(fobj.bun10.value==fobj.elements[i].value){
						fobj.bun10.value="";
						fobj.num10.value="";
					}
			}
		}
	}
}	


function sms_ju_da_(){
		var fobj;
			fobj = document.form1;
			
			if(!fobj.comment.value){
				alert('메시지를 입력하세요');
				fobj.comment.focus();
				return;
			}

			if(!fobj.bun1.value ){
				alert('받는사람번호');
				fobj.bun1.focus();
				return;
			}
			if(!fobj.our_phone.value ){
				alert('보내는 번호?');
				fobj.our_phone.focus();
				return;
			}
				window.open('','bogan','width=400,height=100,top=600,left=600')
				document.form1.target = 'bogan'
				document.form1.action = '../ask/php/sms_bonada.php'
				document.form1.submit();		
}

function updateChar(length_limit){
	var form = document.form1;
	var length = calculate_msglen(form.comment.value);
	textlimit.innerText = length;
	if(length > length_limit){
		alert("최대"+length_limit+"byte이므로 초과된 글자수는 자동으로 삭제됩니다.");
		form.comment.value = form.comment.value.replace(/\r\n$/, "");
		form.comment.value = assert_msglen(form.comment.value, length_limit);
	}
}

function calculate_msglen(message){
	var nbytes = 0;

	for(i=0;i<message.length;i++){
		var ch=message.charAt(i);
		if(escape(ch).length>4){
			nbytes += 2;
		}else if(ch=='\n'){
			if(message.charAt(i-1)!='\r'){
				nbytes += 1;
			}
		}else if(ch=='<'||ch=='>'){
			nbytes += 4;
		}else{
			nbytes += 1;
		}
	}

	return nbytes;
}

function assert_msglen(message, maximum){
	var inc = 0;
	var nbytes = 0;
	var msg = "";
	var msglen = message.length;

	for(i=0;i<msglen;i++){
		var ch = message.charAt(i);
		if(escape(ch).length > 4){
			inc=2;
		}else if(ch=='\n'){
			if(message.charAt(i-1)!='\r'){
				inc = 1;
			}
		}else if(ch=='<'||ch=='>'){
			inc = 4;
		}else{
			inc = 1;
		}
		if((nbytes + inc)>maximum){
			break;
		}
		nbytes += inc;
		msg+=ch;
	}
	textlimit.innerText = nbytes;
	return msg;
}
function our_phone_check(){

	var form = document.form1;
		
	 
			 if(form.our_phone.value.length=='9'){
				
			
				var phone_first		=form.our_phone.value.substring(0,2)
				var phone_second   =form.our_phone.value.substring(2,5)
				var phone_third	 	=form.our_phone.value.substring(5,9)

					form.our_phone.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.our_phone.value.length=='10'){
				
			
				var phone_first		=form.our_phone.value.substring(0,3)
				var phone_second   =form.our_phone.value.substring(3,6)
				var phone_third	 	=form.our_phone.value.substring(6,10)

					form.our_phone.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.our_phone.value.length=='11'){
					
				var phone_first		=form.our_phone.value.substring(0,3)
				var phone_second   =form.our_phone.value.substring(3,7)
				var phone_third	 	=form.our_phone.value.substring(7,11)

							
				form.our_phone.value=phone_first+"-"+phone_second+"-"+phone_third;
				
			  }
	}

	function our_phone_check_2(){
	
	var form = document.form1;
	    if(form.our_phone.value.length=='11'){
			
			var phone_first		=form.our_phone.value.substring(0,2)
			var phone_second	=form.our_phone.value.substring(3,6)
			var phone_third	 	=form.our_phone.value.substring(7,12)

			form.our_phone.value=phone_first+phone_second+phone_third;
			
	 }else if(form.our_phone.value.length=='12'){
			
			var phone_first		=form.our_phone.value.substring(0,3)
			var phone_second	=form.our_phone.value.substring(4,7)
			var phone_third	 	=form.our_phone.value.substring(8,13)

			form.our_phone.value=phone_first+phone_second+phone_third;

	 }else if(form.our_phone.value.length=='13'){
			

			var phone_first		=form.our_phone.value.substring(0,3)
			var phone_second	=form.our_phone.value.substring(4,8)
			var phone_third	 	=form.our_phone.value.substring(9,13)

			form.our_phone.value=phone_first+phone_second+phone_third;
		
	  }
	}

function bun_phone_check_10(){

	var form = document.form1;
	/*		var first		=form.bun1.value.substring(0,3)
			if(first !='010' || first !='011' ||first !='016' ||first !='017' ||first !='018' ||first !='019' ){
				alert('핸드폰이 아닙니다!)
				form.bun1.focus();
				return
			}*/
	
			 if(form.bun10.value.length=='9'){
				
			
				var phone_first		=form.bun10.value.substring(0,2)
				var phone_second	=form.bun10.value.substring(2,5)
				var phone_third	 	=form.bun10.value.substring(5,9)

					form.bun10.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.bun1.value.length=='10'){
				
			
				var phone_first		=form.bun10.value.substring(0,3)
				var phone_second	=form.bun10.value.substring(3,6)
				var phone_third	 	=form.bun10.value.substring(6,10)

					form.bun10.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.bun10.value.length=='11'){
					
				var phone_first		=form.bun10.value.substring(0,3)
				var phone_second	=form.bun10.value.substring(3,7)
				var phone_third	 	=form.bun10.value.substring(7,11)

							
				form.bun10.value=phone_first+"-"+phone_second+"-"+phone_third;
				
			  }
	}

function bun_2_phone_check_10(){
	
	var form = document.form1;
	    if(form.bun10.value.length=='11'){
			
			var phone_first		=form.bun10.value.substring(0,2)
			var phone_second	=form.bun10.value.substring(3,6)
			var phone_third	 	=form.bun10.value.substring(7,12)

			form.bun10.value=phone_first+phone_second+phone_third;
			
	 }else if(form.bun10.value.length=='12'){
			
			var phone_first		=form.bun10.value.substring(0,3)
			var phone_second	=form.bun10.value.substring(4,7)
			var phone_third	 	=form.bun10.value.substring(8,13)

			form.bun10.value=phone_first+phone_second+phone_third;

	 }else if(form.bun10.value.length=='13'){
			

			var phone_first		=form.bun10.value.substring(0,3)
			var phone_second	=form.bun10.value.substring(4,8)
			var phone_third	 	=form.bun10.value.substring(9,13)

			form.bun10.value=phone_first+phone_second+phone_third;
		
	  }
	}
 
function bun_phone_check_1(){

	var form = document.form1;
		
	 
			 if(form.bun1.value.length=='9'){
				
			
				var phone_first		=form.bun1.value.substring(0,2)
				var phone_second	=form.bun1.value.substring(2,5)
				var phone_third	 	=form.bun1.value.substring(5,9)

					form.bun1.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.bun1.value.length=='10'){
				
			
				var phone_first		=form.bun1.value.substring(0,3)
				var phone_second	=form.bun1.value.substring(3,6)
				var phone_third	 	=form.bun1.value.substring(6,10)

					form.bun1.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.bun1.value.length=='11'){
					
				var phone_first		=form.bun1.value.substring(0,3)
				var phone_second	=form.bun1.value.substring(3,7)
				var phone_third	 	=form.bun1.value.substring(7,11)

							
				form.bun1.value=phone_first+"-"+phone_second+"-"+phone_third;
				
			  }
	}

function bun_2_phone_check_1(){
	
	var form = document.form1;
	    if(form.bun1.value.length=='11'){
			
			var phone_first		=form.bun1.value.substring(0,2)
			var phone_second	=form.bun1.value.substring(3,6)
			var phone_third	 	=form.bun1.value.substring(7,12)

			form.bun1.value=phone_first+phone_second+phone_third;
			
	 }else if(form.bun1.value.length=='12'){
			
			var phone_first		=form.bun1.value.substring(0,3)
			var phone_second	=form.bun1.value.substring(4,7)
			var phone_third	 	=form.bun1.value.substring(8,13)

			form.bun1.value=phone_first+phone_second+phone_third;

	 }else if(form.bun1.value.length=='13'){
			

			var phone_first		=form.bun1.value.substring(0,3)
			var phone_second	=form.bun1.value.substring(4,8)
			var phone_third	 	=form.bun1.value.substring(9,13)

			form.bun1.value=phone_first+phone_second+phone_third;
		
	  }
	}

function bun_phone_check_2(){

	var form = document.form1;
		
	 
			 if(form.bun2.value.length=='9'){
				
			
				var phone_first		=form.bun2.value.substring(0,2)
				var phone_second	=form.bun2.value.substring(2,5)
				var phone_third	 	=form.bun2.value.substring(5,9)

					form.bun2.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.bun2.value.length=='10'){
				
			
				var phone_first		=form.bun2.value.substring(0,3)
				var phone_second	=form.bun2.value.substring(3,6)
				var phone_third	 	=form.bun2.value.substring(6,10)

					form.bun2.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.bun2.value.length=='11'){
					
				var phone_first		=form.bun2.value.substring(0,3)
				var phone_second	=form.bun2.value.substring(3,7)
				var phone_third	 	=form.bun2.value.substring(7,11)

							
				form.bun2.value=phone_first+"-"+phone_second+"-"+phone_third;
				
			  }
	}

function bun_2_phone_check_2(){
	
	var form = document.form1;
	    if(form.bun2.value.length=='11'){
			
			var phone_first		=form.bun2.value.substring(0,2)
			var phone_second	=form.bun2.value.substring(3,6)
			var phone_third	 	=form.bun2.value.substring(7,12)

			form.bun2.value=phone_first+phone_second+phone_third;
			
	 }else if(form.bun2.value.length=='12'){
			
			var phone_first		=form.bun2.value.substring(0,3)
			var phone_second	=form.bun2.value.substring(4,7)
			var phone_third	 	=form.bun2.value.substring(8,13)

			form.bun2.value=phone_first+phone_second+phone_third;

	 }else if(form.bun2.value.length=='13'){
			

			var phone_first		=form.bun2.value.substring(0,3)
			var phone_second	=form.bun2.value.substring(4,8)
			var phone_third	 	=form.bun2.value.substring(9,13)

			form.bun2.value=phone_first+phone_second+phone_third;
		
	  }
	}
function bun_phone_check_3(){

	var form = document.form1;
		
	 
			 if(form.bun3.value.length=='9'){
				
			
				var phone_first		=form.bun3.value.substring(0,2)
				var phone_second	=form.bun3.value.substring(2,5)
				var phone_third	 	=form.bun3.value.substring(5,9)

					form.bun3.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.bun3.value.length=='10'){
				
			
				var phone_first		=form.bun3.value.substring(0,3)
				var phone_second	=form.bun3.value.substring(3,6)
				var phone_third	 	=form.bun3.value.substring(6,10)

					form.bun3.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.bun3.value.length=='11'){
					
				var phone_first		=form.bun3.value.substring(0,3)
				var phone_second	=form.bun3.value.substring(3,7)
				var phone_third	 	=form.bun3.value.substring(7,11)

							
				form.bun3.value=phone_first+"-"+phone_second+"-"+phone_third;
				
			  }
	}

function bun_2_phone_check_3(){
	
	var form = document.form1;
	    if(form.bun3.value.length=='11'){
			
			var phone_first		=form.bun3.value.substring(0,2)
			var phone_second	=form.bun3.value.substring(3,6)
			var phone_third	 	=form.bun3.value.substring(7,12)

			form.bun3.value=phone_first+phone_second+phone_third;
			
	 }else if(form.bun3.value.length=='12'){
			
			var phone_first		=form.bun3.value.substring(0,3)
			var phone_second	=form.bun3.value.substring(4,7)
			var phone_third	 	=form.bun3.value.substring(8,13)

			form.bun3.value=phone_first+phone_second+phone_third;

	 }else if(form.bun3.value.length=='13'){
			

			var phone_first		=form.bun3.value.substring(0,3)
			var phone_second	=form.bun3.value.substring(4,8)
			var phone_third	 	=form.bun3.value.substring(9,13)

			form.bun33.value=phone_first+phone_second+phone_third;
		
	  }
	}
function bun_phone_check_4(){

	var form = document.form1;
		
	 
			 if(form.bun4.value.length=='9'){
				
			
				var phone_first		=form.bun4.value.substring(0,2)
				var phone_second	=form.bun4.value.substring(2,5)
				var phone_third	 	=form.bun4.value.substring(5,9)

					form.bun4.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.bun4.value.length=='10'){
				
			
				var phone_first		=form.bun4.value.substring(0,3)
				var phone_second	=form.bun4.value.substring(3,6)
				var phone_third	 	=form.bun4.value.substring(6,10)

					form.bun4.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.bun4.value.length=='11'){
					
				var phone_first		=form.bun4.value.substring(0,3)
				var phone_second	=form.bun4.value.substring(3,7)
				var phone_third	 	=form.bun4.value.substring(7,11)

							
				form.bun4.value=phone_first+"-"+phone_second+"-"+phone_third;
				
			  }
	}

function bun_2_phone_check_4(){
	
	var form = document.form1;
	    if(form.bun4.value.length=='11'){
			
			var phone_first		=form.bun4.value.substring(0,2)
			var phone_second	=form.bun4.value.substring(3,6)
			var phone_third	 	=form.bun4.value.substring(7,12)

			form.bun4.value=phone_first+phone_second+phone_third;
			
	 }else if(form.bun4.value.length=='12'){
			
			var phone_first		=form.bun4.value.substring(0,3)
			var phone_second	=form.bun4.value.substring(4,7)
			var phone_third	 	=form.bun4.value.substring(8,13)

			form.bun4.value=phone_first+phone_second+phone_third;

	 }else if(form.bun4.value.length=='13'){
			

			var phone_first		=form.bun4.value.substring(0,3)
			var phone_second	=form.bun4.value.substring(4,8)
			var phone_third	 	=form.bun4.value.substring(9,13)

			form.bun4.value=phone_first+phone_second+phone_third;
		
	  }
	}


	function bun_phone_check_5(){

	var form = document.form1;
		
	 
			 if(form.bun5.value.length=='9'){
				
			
				var phone_first		=form.bun5.value.substring(0,2)
				var phone_second	=form.bun5.value.substring(2,5)
				var phone_third	 	=form.bun5.value.substring(5,9)

					form.bun5.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.bun5.value.length=='10'){
				
			
				var phone_first		=form.bun5.value.substring(0,3)
				var phone_second	=form.bun5.value.substring(3,6)
				var phone_third	 	=form.bun5.value.substring(6,10)

					form.bun5.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.bun5.value.length=='11'){
					
				var phone_first		=form.bun5.value.substring(0,3)
				var phone_second	=form.bun5.value.substring(3,7)
				var phone_third	 	=form.bun5.value.substring(7,11)

							
				form.bun5.value=phone_first+"-"+phone_second+"-"+phone_third;
				
			  }
	}

function bun_2_phone_check_5(){
	
	var form = document.form1;
	    if(form.bun5.value.length=='11'){
			
			var phone_first		=form.bun5.value.substring(0,2)
			var phone_second	=form.bun5.value.substring(3,6)
			var phone_third	 	=form.bun5.value.substring(7,12)

			form.bun5.value=phone_first+phone_second+phone_third;
			
	 }else if(form.bun5.value.length=='12'){
			
			var phone_first		=form.bun5.value.substring(0,3)
			var phone_second	=form.bun5.value.substring(4,7)
			var phone_third	 	=form.bun5.value.substring(8,13)

			form.bun5.value=phone_first+phone_second+phone_third;

	 }else if(form.bun5.value.length=='13'){
			

			var phone_first		=form.bun5.value.substring(0,3)
			var phone_second	=form.bun5.value.substring(4,8)
			var phone_third	 	=form.bun5.value.substring(9,13)

			form.bun5.value=phone_first+phone_second+phone_third;
		
	  }
	}

	function bun_phone_check_6(){

	var form = document.form1;
		
	 
			 if(form.bun6.value.length=='9'){
				
			
				var phone_first		=form.bun6.value.substring(0,2)
				var phone_second	=form.bun6.value.substring(2,5)
				var phone_third	 	=form.bun6.value.substring(5,9)

					form.bun6.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.bun6.value.length=='10'){
				
			
				var phone_first		=form.bun6.value.substring(0,3)
				var phone_second	=form.bun6.value.substring(3,6)
				var phone_third	 	=form.bun6.value.substring(6,10)

					form.bun6.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.bun6.value.length=='11'){
					
				var phone_first		=form.bun6.value.substring(0,3)
				var phone_second	=form.bun6.value.substring(3,7)
				var phone_third	 	=form.bun6.value.substring(7,11)

							
				form.bun6.value=phone_first+"-"+phone_second+"-"+phone_third;
				
			  }
	}

function bun_2_phone_check_6(){
	
	var form = document.form1;
	    if(form.bun6.value.length=='11'){
			
			var phone_first		=form.bun6.value.substring(0,2)
			var phone_second	=form.bun6.value.substring(3,6)
			var phone_third	 	=form.bun6.value.substring(7,12)

			form.bun6.value=phone_first+phone_second+phone_third;
			
	 }else if(form.bun6.value.length=='12'){
			
			var phone_first		=form.bun6.value.substring(0,3)
			var phone_second	=form.bun6.value.substring(4,7)
			var phone_third	 	=form.bun6.value.substring(8,13)

			form.bun6.value=phone_first+phone_second+phone_third;

	 }else if(form.bun6.value.length=='13'){
			

			var phone_first		=form.bun6.value.substring(0,3)
			var phone_second	=form.bun6.value.substring(4,8)
			var phone_third	 	=form.bun6.value.substring(9,13)

			form.bun6.value=phone_first+phone_second+phone_third;
		
	  }
	}

	function bun_phone_check_7(){

	var form = document.form1;
		
	 
			 if(form.bun7.value.length=='9'){
				
			
				var phone_first		=form.bun7.value.substring(0,2)
				var phone_second	=form.bun7.value.substring(2,5)
				var phone_third	 	=form.bun7.value.substring(5,9)

					form.bun7.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.bun7.value.length=='10'){
				
			
				var phone_first		=form.bun7.value.substring(0,3)
				var phone_second	=form.bun7.value.substring(3,6)
				var phone_third	 	=form.bun7.value.substring(6,10)

					form.bun7.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.bun7.value.length=='11'){
					
				var phone_first		=form.bun7.value.substring(0,3)
				var phone_second	=form.bun7.value.substring(3,7)
				var phone_third	 	=form.bun7.value.substring(7,11)

							
				form.bun7.value=phone_first+"-"+phone_second+"-"+phone_third;
				
			  }
	}

function bun_2_phone_check_7(){
	
	var form = document.form1;
	    if(form.bun7.value.length=='11'){
			
			var phone_first		=form.bun7.value.substring(0,2)
			var phone_second	=form.bun7.value.substring(3,6)
			var phone_third	 	=form.bun7.value.substring(7,12)

			form.bun7.value=phone_first+phone_second+phone_third;
			
	 }else if(form.bun7.value.length=='12'){
			
			var phone_first		=form.bun7.value.substring(0,3)
			var phone_second	=form.bun7.value.substring(4,7)
			var phone_third	 	=form.bun7.value.substring(8,13)

			form.bun7.value=phone_first+phone_second+phone_third;

	 }else if(form.bun7.value.length=='13'){
			

			var phone_first		=form.bun7.value.substring(0,3)
			var phone_second	=form.bun7.value.substring(4,8)
			var phone_third	 	=form.bun7.value.substring(9,13)

			form.bun7.value=phone_first+phone_second+phone_third;
		
	  }
	}

	function bun_phone_check_8(){

	var form = document.form1;
		
	 
			 if(form.bun8.value.length=='9'){
				
			
				var phone_first		=form.bun8.value.substring(0,2)
				var phone_second	=form.bun8.value.substring(2,5)
				var phone_third	 	=form.bun8.value.substring(5,9)

					form.bun8.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.bun8.value.length=='10'){
				
			
				var phone_first		=form.bun8.value.substring(0,3)
				var phone_second	=form.bun8.value.substring(3,6)
				var phone_third	 	=form.bun8.value.substring(6,10)

					form.bun8.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.bun8.value.length=='11'){
					
				var phone_first		=form.bun8.value.substring(0,3)
				var phone_second	=form.bun8.value.substring(3,7)
				var phone_third	 	=form.bun8.value.substring(7,11)

							
				form.bun8.value=phone_first+"-"+phone_second+"-"+phone_third;
				
			  }
	}

function bun_2_phone_check_8(){
	
	var form = document.form1;
	    if(form.bun8.value.length=='11'){
			
			var phone_first		=form.bun8.value.substring(0,2)
			var phone_second	=form.bun8.value.substring(3,6)
			var phone_third	 	=form.bun8.value.substring(7,12)

			form.bun8.value=phone_first+phone_second+phone_third;
			
	 }else if(form.bun8.value.length=='12'){
			
			var phone_first		=form.bun8.value.substring(0,3)
			var phone_second	=form.bun8.value.substring(4,7)
			var phone_third	 	=form.bun8.value.substring(8,13)

			form.bun8.value=phone_first+phone_second+phone_third;

	 }else if(form.bun8.value.length=='13'){
			

			var phone_first		=form.bun8.value.substring(0,3)
			var phone_second	=form.bun8.value.substring(4,8)
			var phone_third	 	=form.bun8.value.substring(9,13)

			form.bun8.value=phone_first+phone_second+phone_third;
		
	  }
	}

	function bun_phone_check_9(){

	var form = document.form1;
		
	 
			 if(form.bun9.value.length=='9'){
				
			
				var phone_first		=form.bun9.value.substring(0,2)
				var phone_second	=form.bun9.value.substring(2,5)
				var phone_third	 	=form.bun9.value.substring(5,9)

					form.bun9.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.bun9.value.length=='10'){
				
			
				var phone_first		=form.bun9.value.substring(0,3)
				var phone_second	=form.bun9.value.substring(3,6)
				var phone_third	 	=form.bun9.value.substring(6,10)

					form.bun9.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.bun9.value.length=='11'){
					
				var phone_first		=form.bun9.value.substring(0,3)
				var phone_second	=form.bun9.value.substring(3,7)
				var phone_third	 	=form.bun9.value.substring(7,11)

							
				form.bun9.value=phone_first+"-"+phone_second+"-"+phone_third;
				
			  }
	}

function bun_2_phone_check_9(){
	
	var form = document.form1;
	    if(form.bun9.value.length=='11'){
			
			var phone_first		=form.bun9.value.substring(0,2)
			var phone_second	=form.bun9.value.substring(3,6)
			var phone_third	 	=form.bun9.value.substring(7,12)

			form.bun9.value=phone_first+phone_second+phone_third;
			
	 }else if(form.bun9.value.length=='12'){
			
			var phone_first		=form.bun9.value.substring(0,3)
			var phone_second	=form.bun9.value.substring(4,7)
			var phone_third	 	=form.bun9.value.substring(8,13)

			form.bun9.value=phone_first+phone_second+phone_third;

	 }else if(form.bun9.value.length=='13'){
			

			var phone_first		=form.bun9.value.substring(0,3)
			var phone_second	=form.bun9.value.substring(4,8)
			var phone_third	 	=form.bun9.value.substring(9,13)

			form.bun9.value=phone_first+phone_second+phone_third;
		
	  }
	}

function bun_phone_check_10(){

	var form = document.form1;
		
	 
			 if(form.bun10.value.length=='9'){
				
			
				var phone_first		=form.bun10.value.substring(0,2)
				var phone_second	=form.bun10.value.substring(2,5)
				var phone_third	 	=form.bun10.value.substring(5,9)

					form.bun10.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.bun10.value.length=='10'){
				
			
				var phone_first		=form.bun10.value.substring(0,3)
				var phone_second	=form.bun10.value.substring(3,6)
				var phone_third	 	=form.bun10.value.substring(6,10)

					form.bun10.value=phone_first+"-"+phone_second+"-"+phone_third;

			 }else if(form.bun10.value.length=='11'){
					
				var phone_first		=form.bun10.value.substring(0,3)
				var phone_second	=form.bun10.value.substring(3,7)
				var phone_third	 	=form.bun10.value.substring(7,11)

							
				form.bun10.value=phone_first+"-"+phone_second+"-"+phone_third;
				
			  }
	}

function bun_2_phone_check_10(){
	
	var form = document.form1;
	    if(form.bun10.value.length=='11'){
			
			var phone_first		=form.bun10.value.substring(0,2)
			var phone_second	=form.bun10.value.substring(3,6)
			var phone_third	 	=form.bun10.value.substring(7,12)

			form.bun10.value=phone_first+phone_second+phone_third;
			
	 }else if(form.bun10.value.length=='12'){
			
			var phone_first		=form.bun10.value.substring(0,3)
			var phone_second	=form.bun10.value.substring(4,7)
			var phone_third	 	=form.bun10.value.substring(8,13)

			form.bun10.value=phone_first+phone_second+phone_third;

	 }else if(form.bun10.value.length=='13'){
			

			var phone_first		=form.bun10.value.substring(0,3)
			var phone_second	=form.bun10.value.substring(4,8)
			var phone_third	 	=form.bun10.value.substring(9,13)

			form.bun10.value=phone_first+phone_second+phone_third;
		
	  }
	}

function sms_clear(){
	var form
		form=document.form1;

	form.comment.value="";
	form.bun1.value="";
	form.bun2.value="";
	form.bun3.value="";
	form.bun4.value="";
	form.bun5.value="";
	form.bun6.value="";
	form.bun7.value="";
	form.bun8.value="";
	form.bun10.value="";

	form.bun1.focus();
}
//-->