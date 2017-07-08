  $(function(){  

	/****************************************************************************************************/
	// topic 페이지가 로드되면 회사정보를 불러오는 ajax  2017-05-11
	/****************************************************************************************************/
		var path = window.location.pathname;
		//alert(path);
		if(path = "/topic"){
		
			
		$.ajax({
			
					url: "/index.php/ajax/CompanyInfo_Ajax/company_ajax", 
					type: "post",
					data : {
						
						'companyName'	:$('#com_info').text(),
						
						
							},
					dataType:"json",
					timeout: 30000,
					success: function(data) {
						
						if(data !='empty'){
							CompanyData= new Array();
							$.each(data, function(key, val){
								
								CompanyData.push({
									
									"num"				:val.num,
									"companyName"		:val.companyName,
									"companyNumber"		:val.companyNumber,
									"companyPhone"		:val.companyPhone,
									"president"			:val.president,
									"address1"			:val.address1,
									"address2"			:val.address2,
									"postnum"			:val.postnum,
									});//
								
						
								
								});
						
						certi_max_num = CompanyData.length;
						Company_info();
						}else if(data = 'empty'){
						alert("회사를 등록하세요.");
						
						}
					
					},
					error: function(xhr, valStatus, errorThrown) {
						alert("데이터 수신 실패!\n" + valStatus + " (HTTP-" + xhr.status + " / " + errorThrown + ")");
					}
		
		})//ajax end
		function Company_info(){
										
			if(!$("#com_info_display").text()){	
				
					for(var i=0; i<certi_max_num; i++){
						//j=i+1;  
						var str = '';
						//str +=j;  
						str += "<h1>" + CompanyData[i].president + "<br><small> CEO, "+ CompanyData[i].companyName + "</small></h1>"
						str += "<ul class='list-unstyled'>"
						str += "<li><p class='text-muted'><i class='fa fa-phone'></i>&nbsp;&nbsp;"
						str += CompanyData[i].companyPhone +"</p></li>"

						str += "<ul class='list-unstyled'>"
						str += "<li><p class='text-muted'>&nbsp;&nbsp;"
						str += "사업자 등록번호: "+CompanyData[i].companyNumber +"</p></li>"

						str += "<ul class='list-unstyled'>"
						str += "<li><p class='text-muted'>&nbsp;&nbsp;"
						str += "주소: "+ CompanyData[i].address1 + "&nbsp" + CompanyData[i].postnum + "&nbsp" + CompanyData[i].address2 + "</p></li>"

						

						str +="</ul>"
					
					$("#com_info_display").append(str); 
					}



			};//Company_info end success function end
	
		}//Company_info() end
	};//if(path) end



	
	
/*****************************************************************************************************/
//여기서부터는 회사정보, 직원정보, 세금정보의 수정 btn 등록 btn 에 관한 js입니다.

/******************************************************************************************************/



/****************************************      회사정보 수정modal js **************************************************/
	$('#com_sujung').click(function(){
		
		

		$.ajax({
			
					url: "/index.php/ajax/CompanyInfo_Ajax/company_ajax", 
					type: "post",
					data : {
						
						'companyName'	:$('#com_info').text(),
						
						
							},
					dataType:"json",
					timeout: 30000,
					success: function(data) {
						
						if(data !='empty'){
							CompanyData= new Array();
							$.each(data, function(key, val){
								
								CompanyData.push({
									
									"num"				:val.num,
									"companyName"		:val.companyName,
									"companyNumber"		:val.companyNumber,
									"companyPhone"		:val.companyPhone,
									"president"			:val.president,
									"address1"			:val.address1,
									"address2"			:val.address2,
									});//
								
						
								
								});
						
						certi_max_num = CompanyData.length;
						Company_info();
						}else if(data = 'empty'){
						alert("회사를 등록하세요.");
						
						}
					
					},
					error: function(xhr, valStatus, errorThrown) {
						alert("데이터 수신 실패!\n" + valStatus + " (HTTP-" + xhr.status + " / " + errorThrown + ")");
					}
		
		})//ajax end
		function Company_info(){
					//alert(data);
					//alert("회사정보 조회");
					
				if(!$("#com_item").text()){
					
					for(var i=0; i<certi_max_num; i++){
						//j=i+1;  
						var str = '';
						//str +=j;  
						str += "<h1>" + CompanyData[i].president + "<br><small> CEO, "+ CompanyData[i].companyName + "</small></h1>"
						str += "<ul class='list-unstyled'>"
						str += "<li><p class='text-muted'><i class='fa fa-phone'></i>&nbsp;&nbsp;"
						str += CompanyData[i].companyPhone +"</p></li>"

						str += "<ul class='list-unstyled'>"
						str += "<li><p class='text-muted'><i class='fa fa-phone'></i>&nbsp;&nbsp;"
						str += CompanyData[i].companyNumber +"</p></li>"

						str += "<ul class='list-unstyled'>"
						str += "<li><p class='text-muted'><i class='fa fa-phone'></i>&nbsp;&nbsp;"
						str += CompanyData[i].address1 +"</p></li>"

						str += "<ul class='list-unstyled'>"
						str += "<li><p class='text-muted'><i class='fa fa-phone'></i>&nbsp;&nbsp;"
						str += CompanyData[i].address2 +"</p></li>"

						str +="</ul>"
					
				
			
						
				
					$("#com_item").append(str); 
					
					
					};
				}else{
					//alert('있음');
				}
					
					
					
			};//Company_info end success function end
	

	});//company_info end


	/****************************************      회사정보 수정 저장 js **************************************************/
	$('#company_save').click(function(){
		
		if(!$('#companyName').val()){
							alert('회사이름을 입력하세요.');
							$('#companyName').focus();
							return false;
					}
		
		if(!$('#president').val()){
							alert('대표자명을 입력하세요.');
							$('#president').focus();
							return false;
					}
		if(!$('#companyPhone').val()){
							alert('회사전화번호를 입력하세요.');
							$('#companyPhone').focus();
							return false;
					}

		if(!$('#companyNumber').val()){
							alert('사업자등록번호를 입력하세요.');
							$('#companyNumber').focus();
							return false;
					}

		if(!$('#address1').val()){
							alert('주소를 입력하세요.');
							$('#address1').focus();
							return false;
					}

		if(!$('#address2').val()){
							alert('상세주소를 입력하세요.');
							$('#address2').focus();
							return false;
					}

		$.ajax({
			
					url: "/index.php/ajax/CompanyInfo_Ajax/company_sujung_ajax", 
					type: "post",
					data : {
						'num'			:$('#num').val(),
						'companyName'	:$('#companyName').val(),
						'president'		:$('#president').val(),
						'companyPhone'	:$('#companyPhone').val(),
						'companyNumber' :$('#companyNumber').val(),
						'address1'		:$('#address1').val(),
						'address2'		:$('#address2').val(),
						'user'			:$('#user_info').text(),
						
							},
					dataType:"json",
					timeout: 30000,
					success: function(data) {
						if(data !='empty'){
							$.each(data, function(key, val){
								alert(val.companyName+"  수정완료");
								alert("재접속해주세요^^*");
								
								
						
								//$('#list').append('<li>'+val.name+'</li>');
								});
						success();	
						}else{
						fail();
						
						}
					
					},
					error: function(xhr, valStatus, errorThrown) {
						alert("데이터 수신 실패!\n" + valStatus + " (HTTP-" + xhr.status + " / " + errorThrown + ")");
					}
		
		})//ajax end
		function success(){
			//alert('수정성공');
			$(location).attr('href', "/Auth/logout");
			//$('#company_sujung').modal('hide');
		}
		function fail(){
			alert('수정실패');
				//$('#user_id').val('');
				//$('#jumin1').val('');
				//$('#jumin2').val('');
				//$('#password').val(''); 
				
						
				
		}


	});//company_save end


	/****************************************      회사신규 등록 저장 js **************************************************/
	$('#company_new_save').click(function(){
		
		if(!$('#companyName_').val()){
							alert('회사이름을 입력하세요.');
							$('#companyName').focus();
							return false;
					}
		
		if(!$('#president_').val()){
							alert('대표자명을 입력하세요.');
							$('#president').focus();
							return false;
					}
		if(!$('#companyPhone_').val()){
							alert('회사전화번호를 입력하세요.');
							$('#companyPhone').focus();
							return false;
					}

		if(!$('#companyNumber_').val()){
							alert('사업자등록번호를 입력하세요.');
							$('#companyNumber').focus();
							return false;
					}

		if(!$('#address1_').val()){
							alert('주소를 입력하세요.');
							$('#address1').focus();
							return false;
					}

		if(!$('#address2_').val()){
							alert('상세주소를 입력하세요.');
							$('#address2').focus();
							return false;
					}

		$.ajax({
			
					url: "/index.php/ajax/CompanyInfo_Ajax/company_new_ajax", 
					type: "post",
					data : {
						'num'			:$('#num_').val(),
						'companyName'	:$('#companyName_').val(),
						'president'		:$('#president_').val(),
						'companyPhone'	:$('#companyPhone_').val(),
						'companyNumber' :$('#companyNumber_').val(),
						'address1'		:$('#address1_').val(),
						'address2'		:$('#address2_').val(),
						'user'			:$('#user_info').text(),
						
							},
					dataType:"json",
					timeout: 30000,
					success: function(data) {
						if(data !='empty'){
							$.each(data, function(key, val){
								alert(val.companyName+"신규 저장완료");
								
								
						
								//$('#list').append('<li>'+val.name+'</li>');
								});
						success();	
						}else{
						fail();
						
						}
					
					},
					error: function(xhr, valStatus, errorThrown) {
						alert("데이터 수신 실패!\n" + valStatus + " (HTTP-" + xhr.status + " / " + errorThrown + ")");
					}
		
		})//ajax end
		function success(){
			//alert('수정성공');
			$(location).attr('href', "/index.php");
			//$('#company_sujung').modal('hide');
		}
		function fail(){
			alert('저장실패');
				//$('#user_id').val('');
				//$('#jumin1').val('');
				//$('#jumin2').val('');
				//$('#password').val(''); 
				
						
				
		}


	});//company_save end

	
}); // 전체 end;
 