$(document).ready(function() {
	/****************************************************************************************************/
	//kosa_table  ajax 2017-05-16
	//현장등록페이지의 js 파일
	/****************************************************************************************************/
	var href = window.location.href;
	var mytable;
	
	if(href == "http://yoojjtt.cafe24.com/topic/new_register_hyunjang"){
		kosa();	
	
		//textShow="";
		//name="";
		//sum=0;
	}	
	
	function kosa()
	{
				
		$.ajax({
			
					url: "/index.php/ajax/new_register/HyunjangInfo_Ajax/hyunjang_ajax", 
					type: "post",
					data : {
						
						'companyName'	: 'update',
						
						
							},
					dataType:"json",
					timeout: 30000,
					success: function(data) {
						result = data.map(function (item) {
							result = [];
							result.push("<a class='btn btn-default btn-circle'>"+"<i class='glyphicon glyphicon-ok'></i></a>");
							result.push(item.num);
							result.push(item.hyun_jang_name);
							result.push(item.kosa_name);
							result.push(item.balju_company);
							result.push(item.bogoja);
							result.push(item.kosa_gigan_start);
							result.push(item.kosa_gigan_end);
							
							
							return result;
						});
						
						myTable = $("#datatable_tabletools").DataTable();
						myTable.rows.add(result);
						myTable.draw();
					
						
							
					},
				
					error: function(xhr, valStatus, errorThrown) {
						alert("데이터 수신 실패!\n" + valStatus + " (HTTP-" + xhr.status + " / " + errorThrown + ")");
					}
		
		});//ajax end
	
	}// kosa() end
	
	

	/****************************************************************************************************/
	/****************************************************************************************************/
	// 선택, 수정, 추가, 삭제, refresh 버튼 2017-05-18
	/****************************************************************************************************/
	/****************************************************************************************************/	

		$('#select_kosa').on("click", "tr", function() // table에서 행 선택할 경우(단일 선택) 2017-05-17
		{
				var target = $('.highlight');
				$(this).toggleClass("highlight");
				$(this).children().children('a').toggleClass("btn-success");
				target.not($(this)).removeClass("highlight");
				target.not($(this)).children().children('a').removeClass("btn-success");

		});	//select end
		

		
		$('#refresh_btn').on("click",  function() // refresh button 2017-05-17
		{
			
			$(location).attr("href", "http://yoojjtt.cafe24.com/topic/new_register_hyunjang");
			
		}); //refresh button  end
			





		/************************************************************************************************************/
		/************************************************************************************************************/
		//삭제 button  
		
		/************************************************************************************************************/
		/************************************************************************************************************/
		$('#delete_btn').on("click", function(){
		
			
				// 화면 크기에 따라 달라지기 때문에 설정 2017-05-18
				var width = $(window).width();

				if (width < 450)  //width == phone
				{	
					company_num = $('.highlight').children().eq(0).text();
					company_name = $('.highlight').children().eq(1).text();
					
				} //width == phone end

				if(width > 449 && width < 940) //width == tablet
				{
					company_num = $('.highlight').children().eq(1).text();
					company_name = $('.highlight').children().eq(2).text();
					
				} //width == tablet end

				if (width > 939)  //width == desktop
				{
					company_num = $('.highlight').children().eq(1).text();
					company_name = $('.highlight').children().eq(2).text();
					
				} //width == desktop end

				if(company_num == false){ // 현장을 선택하지않으면 

					alert("현장을 선택하세요.");
					return false;

				}else{ //현장을 선택하면

					c = confirm("'" + company_name + "'" + "을(를) 삭제하시겠습니까?");

				}	
				
				if(c == true){ // 수정확인을 누르면 ajax 통신					
					

					$.ajax({
			
							url: "/index.php/ajax/new_register/HyunjangInfo_Ajax/hyunjang_delete_ajax", 
							type: "post",
							data : {
								
								'num'	: company_num,
								
								
									},
							dataType:"json",
							timeout: 30000,
							success: function(data) {
								alert('삭제되었습니다.');
								$(location).attr("href", "http://yoojjtt.cafe24.com/topic/new_register_hyunjang");
					
							},
						
							error: function(xhr, valStatus, errorThrown) {
								alert("데이터 수신 실패!\n" + valStatus + " (HTTP-" + xhr.status + " / " + errorThrown + ")");
							}
				
							});//ajax end
			
				}else{ //수정취소를 누르면 취소
					
				}
				
			
			
		});
		
		
		
		
		
		
		
		
		/************************************************************************************************************/
		/************************************************************************************************************/
		//신규등록 button  
		
		/************************************************************************************************************/
		/************************************************************************************************************/

		$('#insert_btn').on("click", function(){ // insert button 2017-05-19
			
			$('#insert_modal').modal('show');
			$('#kosa_insert_btn').click(function(){
				if(!$('#hyun_jang_name_i').val()){
					alert('현장명을 입력하세요.');
					$('#kosa_insert_validation_btn').trigger("click");
					
					return false;
					}
				if(!$('#bogoja_i').val()){
							alert('책임자를 입력하세요.');
							$('#kosa_insert_validation_btn').trigger("click");
							return false;
					}
				if(!$('#balju_company_i').val()){
							alert('발주회사를 입력하세요.');
							$('#kosa_insert_validation_btn').trigger("click");
							return false;
					}
				if(!$('#kosa_name_i').val()){
							alert('공사내용을 입력하세요.');
							$('#kosa_insert_validation_btn').trigger("click");
							return false;
					}
				if(!$('#hyun_jang_number_i').val()){
							alert('관리번호를 입력하세요.');
							$('#kosa_insert_validation_btn').trigger("click");
							return false;
					}
			
				$.ajax({
			
				url: "/index.php/ajax/new_register/HyunjangInfo_Ajax/hyunjang_insert_ajax", 
				type: "post",
				data : {
					
					
					'hyun_jang_name'			: $('#hyun_jang_name_i').val(),
					'bogoja'					: $('#bogoja_i').val(),
					'balju_company'				: $('#balju_company_i').val(),
					'kosa_name'					: $('#kosa_name_i').val(),
					'hyun_jang_number'			: $('#hyun_jang_number_i').val(),
					'kosa_gigan_start'			: $('#kosa_gigan_start_i').val(),
					'kosa_gigan_end'			: $('#kosa_gigan_end_i').val(),
					'content'					: $('#special_content_i').val(),
					
					
						},
				dataType:"json",
				timeout: 30000,
				success: function(data) {
					kosa_insert= new Array();
					$.each(data, function(key, val){
					
						kosa_insert.push({
						"num"					:val.num,
						"hyun_jang_number"		:val.hyun_jang_number,
						"manageBunho"			:val.manageBunho,
						"hyun_jang_name"		:val.hyun_jang_name,
						"kosa_name"				:val.kosa_name,
						"balju_company"			:val.balju_company,
						"kosa_gigan_start"		:val.kosa_gigan_start,
						"kosa_gigan_end"		:val.kosa_gigan_end,
						"bogoja"				:val.bogoja,
						"wdate"					:val.wdate,
						"id"					:val.id,
						"content"				:val.content,
						});//
					
					});//each end;
				repage();
				
				},
			
				error: function(xhr, valStatus, errorThrown) {
					alert("데이터 수신 실패!\n" + valStatus + " (HTTP-" + xhr.status + " / " + errorThrown + ")");
				}
	
				});//ajax end
				function repage()
				{
					alert(kosa_insert[0].hyun_jang_name + '이 등록되었습니다.');
					$(location).attr("href", "http://yoojjtt.cafe24.com/topic/new_register_hyunjang");
				}
			
			});//kosa_insert button end
			
			
		}); //insert button end 





		/************************************************************************************************************/
		/************************************************************************************************************/
		//수정 button  
		
		/************************************************************************************************************/
		/************************************************************************************************************/



		$('#sujung_btn').on("click",  function()  //수정 button 2017-05-17
		{	
			// 화면 크기에 따라 달라지기 때문에 설정 2017-05-18
			var width = $(window).width();

			if (width < 450)  //width == phone
			{	
				company_num = $('.highlight').children().eq(0).text();
				company_name = $('.highlight').children().eq(1).text();
				sujung_modal();
			} //width == phone end

			if(width > 449 && width < 940) //width == tablet
			{
				company_num = $('.highlight').children().eq(1).text();
				company_name = $('.highlight').children().eq(2).text();
				sujung_modal();
			} //width == tablet end

			if (width > 939)  //width == desktop
			{
				company_num = $('.highlight').children().eq(1).text();
				company_name = $('.highlight').children().eq(2).text();
				sujung_modal();
			} //width == desktop end
			

			function sujung_modal(){

				if(company_num == false){ // 현장을 선택하지않으면 

					alert("현장을 선택하세요.");
					return false;

				}else{ //현장을 선택하면

					c = confirm("'" + company_name + "'" + "을(를) 수정하시겠습니까?");

				}				
				if(c == true){ // 수정확인을 누르면 ajax 통신
					
					$('#sujung_modal').modal('show');

					$.ajax({
			
							url: "/index.php/ajax/new_register/HyunjangInfo_Ajax/hyunjang_modal_ajax", 
							type: "post",
							data : {
								
								'companyNum'	: company_num,
								
								
									},
							dataType:"json",
							timeout: 30000,
							success: function(data) {
								kosa_data= new Array();
								$.each(data, function(key, val){
								
									kosa_data.push({
									"num"					:val.num,
									"hyun_jang_number"		:val.hyun_jang_number,
									"manageBunho"			:val.manageBunho,
									"hyun_jang_name"		:val.hyun_jang_name,
									"kosa_name"				:val.kosa_name,
									"balju_company"			:val.balju_company,
									"kosa_gigan_start"		:val.kosa_gigan_start,
									"kosa_gigan_end"		:val.kosa_gigan_end,
									"bogoja"				:val.bogoja,
									"wdate"					:val.wdate,
									"id"					:val.id,
									"content"				:val.content,
									});//
								
								});//each end;
							$('#kosaNum').val(kosa_data[0].num);	
							$('#hyun_jang_name').val(kosa_data[0].hyun_jang_name);	
							$('#bogoja').val(kosa_data[0].bogoja);
							$('#balju_company').val(kosa_data[0].balju_company);
							$('#kosa_name').val(kosa_data[0].kosa_name);
							$('#hyun_jang_number').val(kosa_data[0].hyun_jang_number);
							$('#kosa_gigan_start').val(kosa_data[0].kosa_gigan_start);
							$('#kosa_gigan_end').val(kosa_data[0].kosa_gigan_end);
							$('#special_content').val(kosa_data[0].content);
							},
						
							error: function(xhr, valStatus, errorThrown) {
								alert("데이터 수신 실패!\n" + valStatus + " (HTTP-" + xhr.status + " / " + errorThrown + ")");
							}
				
							});//ajax end
			
				}else{ //수정취소를 누르면 취소
					
					$('#sujung_modal').modal('hide');
				}
				
			
			}	//modal() end 2017-05-18;
			

			
		
		}); //수정 button 2017-05-17 end
	
		
	
	

	/***************************************************************************************/
	// 현장정보 수정 모달에서 validation 이후에  수정된 정보창에서 저장을 누르면 실행 2017-05-18
	/***************************************************************************************/
		
	$('#kosa_sujong_btn').click(function(){
		
		if(!$('#hyun_jang_name').val()){
					alert('현장명을 입력하세요.');
					$('#movieform_trigger').trigger("click");
					$('#hyun_jang_name').focus();
					return false;
			}
		if(!$('#bogoja').val()){
					alert('책임자를 입력하세요.');
					$('#movieform_trigger').trigger("click");
					return false;
			}
		if(!$('#balju_company').val()){
					alert('발주회사를 입력하세요.');
					$('#movieform_trigger').trigger("click");
					return false;
			}
		if(!$('#kosa_name').val()){
					alert('공사내용을 입력하세요.');
					$('#movieform_trigger').trigger("click");
					return false;
			}
		if(!$('#hyun_jang_number').val()){
					alert('관리번호를 입력하세요.');
					$('#movieform_trigger').trigger("click");
					return false;
			}
		$.ajax({
	
					url: "/index.php/ajax/new_register/HyunjangInfo_Ajax/hyunjang_sujung_ajax", 
					type: "post",
					data : {
						'num'						: $('#kosaNum').val(),
						'hyun_jang_name'			: $('#hyun_jang_name').val(),
						'bogoja'					: $('#bogoja').val(),
						'balju_company'				: $('#balju_company').val(),
						'kosa_name'					: $('#kosa_name').val(),
						'hyun_jang_number'			: $('#hyun_jang_number').val(),
						'kosa_gigan_start'			: $('#kosa_gigan_start').val(),
						'kosa_gigan_end'			: $('#kosa_gigan_end').val(),
						'content'					: $('#special_content').val(),
						
						
							},
					dataType:"json",
					timeout: 30000,
					success: function(data) {
						kosa_sujung= new Array();
						$.each(data, function(key, val){
						
							kosa_sujung.push({
							"num"					:val.num,
							"hyun_jang_number"		:val.hyun_jang_number,
							"manageBunho"			:val.manageBunho,
							"hyun_jang_name"		:val.hyun_jang_name,
							"kosa_name"				:val.kosa_name,
							"balju_company"			:val.balju_company,
							"kosa_gigan_start"		:val.kosa_gigan_start,
							"kosa_gigan_end"		:val.kosa_gigan_end,
							"bogoja"				:val.bogoja,
							"wdate"					:val.wdate,
							"id"					:val.id,
							"content"				:val.content,
							});//
						
						});//each end;
					reload()
					
					},
				
					error: function(xhr, valStatus, errorThrown) {
						alert("데이터 수신 실패!\n" + valStatus + " (HTTP-" + xhr.status + " / " + errorThrown + ")");
					}
		
					});//ajax end
		function reload()
		{
			alert(kosa_sujung[0].hyun_jang_name+"의 수정이 완료되었습니다.");
			$(location).attr("href", "http://yoojjtt.cafe24.com/topic/new_register_hyunjang");
		}
		
	});
				
			
		
	
				
			
	
		
		
		







}); // $(document).ready(function() end 2017-05-16