  $(function(){  
	
	/****************************************************************************************************/
	// 페이지가 로드되면 employee list 직원 리스트를 불러오는  ajax 2017-05-11
	/****************************************************************************************************/
		var path = window.location.pathname;
		//alert(path);
		if(path = "/topic"){
			
			$.ajax({
				
						url: "/index.php/ajax/EmployeeInfo_Ajax/employee_ajax", 
						type: "post",
						data : {
							
							'companyName'	: $('#com_info').text(),
							
							
							
								},
						dataType:"json",
						timeout: 30000,
						success: function(data) {
							if(data !='empty'){
								employee= new Array();
								$.each(data, function(key, val){
									
																	
										employee.push({
										
										"no"			:val.no,
										"user_id"		:val.user_id,
										"name"			:val.name,
										"handphone"		:val.handphone,
										"level"			:val.level,
										
										});//
									
									});//each end;
							certi_max_num = employee.length;
							employee_list();
							}else if(data = 'empty'){
								alert("회사등록을 하셔야 합니다.");
							}		
						
						},
						error: function(xhr, valStatus, errorThrown) {
							alert("데이터 수신 실패!\n" + valStatus + " (HTTP-" + xhr.status + " / " + errorThrown + ")");
						}
			
			});//ajax end
			function employee_list(){							
						
				if(!$("tbody#employee_display").text()){
					for(var i=0; i<certi_max_num; i++){
						//j=i+1;  
						var str = '';
						//str +=j;  
						
						str +="<tr>"
						str +="<td>"+ employee[i].no + "</td>" 
						str	+="<td>"+ employee[i].name + "</td>"
						str +="<td>"+ employee[i].handphone +"</td>"
						str +="<td>"+ employee[i].level +"</td>"
						str +="</tr>";
					
					
						$("tbody#employee_display").append(str); 		
						//$("tbody#employee_display *").remove(); ID가 포함된 태그는 그데로 나두고 하부요소만 제거한다.
					};					
				}
			};//employee_list end

	}; //if(path) end
		
	
	/*****************************************************************************************************/
	//여기서부터는 직원정보 수정 btn, 등록 btn 에 관한 js입니다.

	/******************************************************************************************************/


	/***********************************************직원정보 수정**********************************************/


	/****************************************************************************************************/
	//employee 등록 직원 리스트를 불러오는  ajax
	/****************************************************************************************************/
	
			
			
	


	
}); // 전체 end;
 