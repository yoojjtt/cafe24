$(function(){  
	/****************************************       id check **************************************************/
	// 로그인화면에서 로그인을 클릭할 때 ID가 없거나 PWD가 없는 경우 확인 2017-05-11
	$('#sign').click(function(){
		if(!$('#id').val()){
							alert('ID를 입력하세요.');
							$('#id').focus();
							return false;
					}
		if(!$('#password').val()){
							alert('비밀번호를 입력하세요.');
							$('#password').focus();
							return false;
					}
		

			
		
		
	
	
	});//sign end 2017-05-11
	
	/*********************************** select box 에서 회사명을 선택하기위해서 불러온다. *******************************/
	// 회원가입 페이지로 이동하면 select 옵션에 기존에 등록된 회사명을 append 한다. 2017-05-11
	
	if($(location).attr('pathname')=='/auth/member'){
	
	 $.ajax({
			
					url: "/index.php/ajax/Member_Ajax/select_ajax", 
					type: "post",
					data : {
						'select':'select',
						
						
						
							},
					dataType:"json",
					timeout: 30000,
					success: function(data) {
						if(data !='empty'){
							SelectData = new Array();

								$.each(data, function(key, val){
									SelectData.push({
									"num"		  : val.num,
									"companyName" : val.companyName,
									
									});

							});	//each end;
						certi_num = SelectData.length;
						
						select();

						}else if(data = 'empty'){
							alert("사용가능한 ID 입니다.");
						}		
					
					},
					error: function(xhr, valStatus, errorThrown) {
						alert("데이터 수신 실패!\n" + valStatus + " (HTTP-" + xhr.status + " / " + errorThrown + ")");
					}
		
		})//ajax end
	}
		
	
	function select(){
				

			
					
					for(var i=0; i<certi_num; i++){
						//j=i+1;  
						
						var str = '';
						//str +=j;  
						str +="<option>"
					
						str	+= SelectData[i].companyName 
						str +="</option>";
						//즉 str = 'j + claimTableValue[i].name + ...  +<br>'
					$("#companyName").append(str); //html sss태그 안에 자손 태그로 str을 넣는다.
					};
					
					
					
	};//select end, 기존회사명을 append한다. 2017-05-11






	/************************************       id가있는 여부체크 check ***************************************/
	//회원가입 form 안에 search 이모티콘 클릭하면 id를 check한다. 2017-05-11
	$('#idcheck').click(function(){
		if(!$('#user_id').val()){
							alert('ID를 입력하세요.');
							$('#user_id').focus();
							return false;
					}
		$.ajax({
			
					url: "/index.php/ajax/Member_Ajax/id_check_ajax", 
					type: "post",
					data : {
						
						'user_id':$('#user_id').val(),
						
						
							},
					dataType:"json",
					timeout: 30000,
					success: function(data) {
						if(data !=''){


							$.each(data, function(key, val){
								//alert(val.no);
								alert(val.name);
								alert("이미 계정이 존재합니다.");
								//$(location).attr('href', "./board.php");
								//$('#list').append('<li>'+val.name+'</li>');
								});	
						}else if(data = 'empty'){
							alert("사용가능한 ID 입니다.");
						}		
					
					},
					error: function(xhr, valStatus, errorThrown) {
						alert("데이터 수신 실패!\n" + valStatus + " (HTTP-" + xhr.status + " / " + errorThrown + ")");
					}
		
		})//ajax end

	});//idcheck end 2017-05-11

	
	
	
	
	
	/****************************************     주민번호가 있는지 여부check ***********************************/
	// 회원가입 form 안에 search 이모티콘 클릭하면 주민 번호를 check한다. 2017-05-11
	$('#jumincheck').click(function(){
		if(!$('#jumin1').val()){
							alert('주민번호 앞자리를 입력하세요.');
							$('#jumin1').focus();
							return false;
					}
		if(!$('#jumin2').val()){
				alert('주민번호 뒷자리를 입력하세요.');
				$('#jumin2').focus();
				return false;
		}
		$.ajax({
			
					url: "/index.php/ajax/Member_Ajax/jumin_check_ajax", 
					type: "post",
					data : {
						
						'jumin1':$('#jumin1').val(),
						'jumin2':$('#jumin2').val(),
						
						
							},
					dataType:"json",
					timeout: 30000,
					success: function(data) {
						if(data !=''){


							$.each(data, function(key, val){
								//alert(val.no);
								alert(val.name + "님 이미 계정이 존재합니다.");
								
								//$(location).attr('href', "./board.php");
								//$('#list').append('<li>'+val.name+'</li>');
								});	
						}else{
							alert("반갑습니다.");
						}		
					
					},
					error: function(xhr, valStatus, errorThrown) {
						alert("데이터 수신 실패!\n" + valStatus + " (HTTP-" + xhr.status + " / " + errorThrown + ")");
					}
		
		})//ajax end

			
		
		
	
	
	});//jumincheck end 2017-05-11

	
	
	
	
	
	/*******************************************회원가입 제출 클릭할 때*******************************************/
	// 회원가입 form 안에서 저장을 클릭할 경우 실행한다. 2017-05-11
	$('#joinus').click(function(){
					if(!$('#name').val()){
							alert('이름을 입력하세요.');
							$('#name').focus();
							return false;
					}
					if(!$('#email').val()){
							alert('E-mail을 입력하세요.');
							$('#email').focus();
							return false;
					}
					if(!$('#user_id').val()){
							alert('ID를 입력하세요.');
							$('#user_id').focus();
							return false;
					}
					if(!$('#user_password').val()){
							alert('비밀번호를 입력하세요.');
							$('#password').focus();
							return false;
					}
					if(!$('#handphone').val()){
							alert('핸드폰 번호를 입력하세요.');
							$('#handphone').focus();
							return false;
					}
					if(!$('#jumin1').val()){
							alert('주민번호를 입력하세요.');
							$('#jumin').focus();
							return false;
					}
					if(!$('#address').val()){
							alert('주소를 입력하세요.');
							$('#address').focus();
							return false;
					}
					if(!$('#companyName').val()){
							alert('회사명을 선택하세요.');
							$('#companyName').focus();
							return false;
					} 
					// blur여부 확인

		$.ajax({
					url: "/index.php/ajax/Member_Ajax/member_ajax", 
					type: "post",
					data : {
						"log"			:'joinus',
						"name"			: $('#name').val(),
						"email"			: $('#email').val(),
						"user_id"		: $('#user_id').val(),
						"password"		: $('#user_password').val(),
						"handphone"		: $('#handphone').val(),
						"jumin1"		: $('#jumin1').val(),
						"jumin2"		: $('#jumin2').val(),
						"address"		: $('#address').val(),
						"companyName"	: $('#companyName').val(),

						
						
							},
					dataType:"json",
					timeout: 30000,
					success: function(data) {
					
							member_data= new Array();		
							if(data){
							$.each(data, function(key, val){
								//alert(val.name+"님 가입이 완료되었습니다.");
								member_data.push({
									"name"							:val.name,
									
									
									});//
								
							});
							certi_max_num = member_data.length;
							member_success();
							}else{
							member_fail();
							
							}
							
					
					},
					error: function(xhr, valStatus, errorThrown) {
						alert("데이터 수신 실패!\n" + valStatus + " (HTTP-" + xhr.status + " / " + errorThrown + ")");
					}
		
		})//ajax end
		function member_success(){
			for(var i=0; i<certi_max_num; i++){
				alert(member_data[i].name+ '님 환영합니다.');
			};
			$(location).attr('href', "/Auth/logout");
		}
		function fail(){
			alert('아이디와 주민번호를 확인하세요');
				$('#user_id').val('');
				$('#jumin1').val('');
				$('#jumin2').val('');
				
				
						
				$('#myModal').modal('hide');
		}

			
		
		
	
	
	});// joinus click end 2017-05-11
	
		
	

	
}); // 전체 end;
 