  $(function(){
	/****************************************************************************************************/
	//daily_member_table  ajax 2017-05-16
	//현장 근로자 등록 페이지의 js 파일
	/****************************************************************************************************/
	var href = window.location.href;
	var mytable;
	if(href == "http://yoojjtt.cafe24.com/topic/new_register_daily_member"){
		daily_member();
		
	}	
	
	function daily_member(){
		//alert('현장직 근로자 update');
		
		$.ajax({
			
					url: "/index.php/ajax/new_register/DailyMemberInfo_Ajax/daily_member_ajax", 
					type: "post",
					data : {
						
						'companyName'	: 'update',
						
						
						
							},
					dataType:"json",
					timeout: 30000,
					success: function(data) {
					
						var result = data.map(function (item) {
							var result = [];
							result.push("<a class='btn btn-default btn-circle'>"+"<i class='glyphicon glyphicon-ok'></i></a>");
							result.push(item.num);
							result.push(item.oun_name);
							result.push(item.job);
							result.push(item.oun_phone);
							result.push(item.id);
							result.push(item.wdate);
							
							
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
	};//daily_member end





	/****************************************************************************************************/
	/****************************************************************************************************/
	// 선택, 수정, 추가, 삭제, refresh 버튼 2017-05-18
	/****************************************************************************************************/
	/****************************************************************************************************/	
	$('#select_daily').on("click", "tr", function() // table에서 행 선택할 경우(단일 선택) 2017-05-17
		{
				var target = $('.highlight');
				$(this).toggleClass("highlight");
				$(this).children().children('a').toggleClass("btn-success");
				target.not($(this)).removeClass("highlight");
				target.not($(this)).children().children('a').removeClass("btn-success");

		});	//select end

	$('#refresh_btn_daily').on("click",  function() // refresh button 2017-05-17
		{
			
			$(location).attr("href", "http://yoojjtt.cafe24.com/topic/new_register_daily_member");
			
		}); //refresh button  end

	/************************************************************************************************************/
	/************************************************************************************************************/
	//삭제 button  
	
	/************************************************************************************************************/
	/************************************************************************************************************/
	$('#delete_btn_daily').on("click", function(){
	
		
			// 화면 크기에 따라 달라지기 때문에 설정 2017-05-18
			var width = $(window).width();

			if (width < 450)  //width == phone
			{	
				daily_member_num = $('.highlight').children().eq(0).text();
				daily_member_name = $('.highlight').children().eq(1).text();
				
			} //width == phone end

			if(width > 449 && width < 940) //width == tablet
			{
				daily_member_num = $('.highlight').children().eq(1).text();
				daily_member_name = $('.highlight').children().eq(2).text();
				
			} //width == tablet end

			if (width > 939)  //width == desktop
			{
				daily_member_num = $('.highlight').children().eq(1).text();
				daily_member_name = $('.highlight').children().eq(2).text();
				
			} //width == desktop end

			if(daily_member_num == false){ // 현장을 선택하지않으면 

				alert("근로자를 선택하세요.");
				return false;

			}else{ //현장을 선택하면

				c = confirm("'" + daily_member_name + "'" + "을(를) 삭제하시겠습니까?");

			}	
			
			if(c == true){ // 수정확인을 누르면 ajax 통신					
				

				$.ajax({
		
						url: "/index.php/ajax/new_register/DailyMemberInfo_Ajax/daily_member_delete_ajax", 
						type: "post",
						data : {
							
							'num'	: daily_member_num,
							
							
								},
						dataType:"json",
						timeout: 30000,
						success: function(data) {
							alert('삭제되었습니다.');
							$(location).attr("href", "http://yoojjtt.cafe24.com/topic/new_register_daily_member");
				
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

	$('#insert_btn_daily').on("click", function(){ // insert button 2017-05-19
		
		$('#insert_daily_modal').modal('show');
		$('#daily_insert_btn').click(function(){
			if(!$('#oun_name_i').val()){
						alert('성명을 입력하세요.');
						$('#insert_btn_trigger').trigger("click");
						
						return false;
				}
			if(!$('#job_i').val()){
						alert('직종을 선택하세요.');
						$('#insert_btn_trigger').trigger("click");
						
						return false;
				}
			if(!$('#jumin1_i').val()){
						alert('주민번호 앞자리를 입력하세요.');
						$('#insert_btn_trigger').trigger("click");
						
						return false;
				}
			if(!$('#jumin2_i').val()){
						alert('주민번호 뒷자리를 입력하세요.');
						$('#insert_btn_trigger').trigger("click");
						
						return false;
				}
			if(!$('#oun_phone_i').val()){
						alert('연락처를 입력하세요.');
						$('#insert_btn_trigger').trigger("click");
						
						return false;
				}
			if(!$('#address1_i').val()){
						alert('주소를 입력하세요.');
						$('#insert_btn_trigger').trigger("click");
						
						return false;
				}
			if(!$('#address2_i').val()){
						alert('상세주소를 입력하세요.');
						$('#insert_btn_trigger').trigger("click");
						
						return false;
				}
			if(!$('#postnum_i').val()){
						alert('우편번호를 입력하세요.');
						$('#insert_btn_trigger').trigger("click");
						
						return false;
				}
			if(!$('#bank_name_i').val()){
						alert('예금주를 입력하세요.');
						$('#insert_btn_trigger').trigger("click");
						
						return false;
				}
			if(!$('#bank_i').val()){
						alert('은행을 입력하세요.');
						$('#insert_btn_trigger').trigger("click");
						
						return false;
				}
			if(!$('#bank_number_i').val()){
						alert('계좌번호를 입력하세요.');
						$('#insert_btn_trigger').trigger("click");
						
						return false;
				}

			$.ajax({
			
				url: "/index.php/ajax/new_register/DailyMemberInfo_Ajax/daily_member_insert_ajax", 
				type: "post",
				data : {
					
					
					'oun_name'					: $('#oun_name_i').val(),
					'daily_salary'				: $('#daily_salary_i').val(),
					'job'						: $('#job_i').val(),
					'jumin1'					: $('#jumin1_i').val(),
					'jumin2'					: $('#jumin2_i').val(),
					'oun_phone'					: $('#oun_phone_i').val(),
					'address1'					: $('#address1_i').val(),
					'address2'					: $('#address2_i').val(),
					'postnum'					: $('#postnum_i').val(),
					'bank_name'					: $('#bank_name_i').val(),
					'bank'						: $('#bank_i').val(),
					'bank_number'				: $('#bank_number_i').val(),
					
					
						},
				dataType:"json",
				timeout: 30000,
				success: function(data) {
					daily_insert= new Array();
					$.each(data, function(key, val){
					
						daily_insert.push({
						'oun_name'					: val.oun_name,
						'daily_salary'				: val.daily_salary,
						'job'						: val.job,
						'jumin1'					: val.jumin1,
						'jumin2'					: val.jumin2,
						'oun_phone'					: val.oun_phone,
						'address1'					: val.address1,
						'address2'					: val.address2,
						'postnum'					: val.postnum,
						'bank_name'					: val.bank_name,
						'bank'						: val.bank,
						'bank_number'				: val.bank_number,
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
					alert(daily_insert[0].oun_name + '님이 등록되었습니다.');
					$(location).attr("href", "http://yoojjtt.cafe24.com/topic/new_register_daily_member");
				}
		
			
			
		});//daily_insert button end
		
		
	}); //insert button end 





	/************************************************************************************************************/
	/************************************************************************************************************/
	//수정 button  
	
	/************************************************************************************************************/
	/************************************************************************************************************/

	
	$('#sujung_btn_daily').on("click",  function()  //수정 button 2017-05-17
		{	
			// 화면 크기에 따라 달라지기 때문에 설정 2017-05-18
			var width = $(window).width();

			if (width < 450)  //width == phone
			{	
				daily_member_num = $('.highlight').children().eq(0).text();
				daily_member_name = $('.highlight').children().eq(1).text();
				sujung_modal();
			} //width == phone end

			if(width > 449 && width < 940) //width == tablet
			{
				daily_member_num = $('.highlight').children().eq(1).text();
				daily_member_name = $('.highlight').children().eq(2).text();
				sujung_modal();
			} //width == tablet end

			if (width > 939)  //width == desktop
			{
				daily_member_num = $('.highlight').children().eq(1).text();
				daily_member_name = $('.highlight').children().eq(2).text();
				sujung_modal();
			} //width == desktop end
			

			function sujung_modal(){

				if(daily_member_num == false){ // 현장을 선택하지않으면 

					alert("근로자를 선택하세요.");
					return false;

				}else{ //현장을 선택하면

					c = confirm("'" + daily_member_name + "'" + "을(를) 수정하시겠습니까?");

				}				
				if(c == true){ // 수정확인을 누르면 ajax 통신
					
					$('#sujung_daily_modal').modal('show');

					$.ajax({
			
							url: "/index.php/ajax/new_register/DailyMemberInfo_Ajax/daily_member_modal_ajax", 
							type: "post",
							data : {
								
								'Num'	: daily_member_num,
								
								
									},
							dataType:"json",
							timeout: 30000,
							success: function(data) {
								daily_member_data= new Array();
								$.each(data, function(key, val){
								
									daily_member_data.push({
								'num'						: val.num,
								'oun_name'					: val.oun_name,
								'daily_salary'				: val.daily_salary,
								'job'						: val.job,
								'jumin1'					: val.jumin1,
								'jumin2'					: val.jumin2,
								'oun_phone'					: val.oun_phone,
								'address1'					: val.address1,
								'address2'					: val.address2,
								'postnum'					: val.postnum,
								'bank_name'					: val.bank_name,
								'bank'						: val.bank,
								'bank_number'				: val.bank_number,
									});//
								
								});//each end;
							$('#daily_member_num').val(daily_member_data[0].num);
							$('#oun_name').val(daily_member_data[0].oun_name);	
							$('#daily_salary').val(daily_member_data[0].daily_salary);	
							$('#job').val(daily_member_data[0].job);
							$('#jumin1').val(daily_member_data[0].jumin1);
							$('#jumin2').val(daily_member_data[0].jumin2);
							$('#oun_phone').val(daily_member_data[0].oun_phone);
							$('#address1').val(daily_member_data[0].address1);
							$('#address2').val(daily_member_data[0].address2);
							$('#postnum').val(daily_member_data[0].postnum);
							$('#bank_name').val(daily_member_data[0].bank_name);
							$('#bank').val(daily_member_data[0].bank);
							$('#bank_number').val(daily_member_data[0].bank_number);
							},
						
							error: function(xhr, valStatus, errorThrown) {
								alert("데이터 수신 실패!\n" + valStatus + " (HTTP-" + xhr.status + " / " + errorThrown + ")");
							}
				
							});//ajax end
			
				}else{ //수정취소를 누르면 취소
					
					$('#sujung_daily_modal').modal('hide');
				}
				
			
			}	//modal() end 2017-05-18;
			

			
		
		}); //수정 button 2017-05-17 end
	
	/***************************************************************************************/
	// 근로자 정보 수정 모달에서 validation 이후에  수정된 정보창에서 저장을 누르면 실행 2017-05-18
	/***************************************************************************************/
		
	$('#daily_sujung_btn').click(function(){
		
	if(!$('#oun_name').val()){
						alert('성명을 입력하세요.');
						$('#sujung_btn_trigger').trigger("click");
						
						return false;
				}
			if(!$('#job').val()){
						alert('직종을 선택하세요.');
						$('#sujung_btn_trigger').trigger("click");
						
						return false;
				}
			if(!$('#jumin1').val()){
						alert('주민번호 앞자리를 입력하세요.');
						$('#sujung_btn_trigger').trigger("click");
						
						return false;
				}
			if(!$('#jumin2').val()){
						alert('주민번호 뒷자리를 입력하세요.');
						$('#sujung_btn_trigger').trigger("click");
						
						return false;
				}
			if(!$('#oun_phone').val()){
						alert('연락처를 입력하세요.');
						$('#sujung_btn_trigger').trigger("click");
						
						return false;
				}
			if(!$('#address1').val()){
						alert('주소를 입력하세요.');
						$('#sujung_btn_trigger').trigger("click");
						
						return false;
				}
			if(!$('#address2').val()){
						alert('상세주소를 입력하세요.');
						$('#sujung_btn_trigger').trigger("click");
						
						return false;
				}
			if(!$('#postnum').val()){
						alert('우편번호를 입력하세요.');
						$('#sujung_btn_trigger').trigger("click");
						
						return false;
				}
			if(!$('#bank_name').val()){
						alert('예금주를 입력하세요.');
						$('#sujung_btn_trigger').trigger("click");
						
						return false;
				}
			if(!$('#bank').val()){
						alert('은행을 입력하세요.');
						$('#sujung_btn_trigger').trigger("click");
						
						return false;
				}
			if(!$('#bank_number').val()){
						alert('계좌번호를 입력하세요.');
						$('#sujung_btn_trigger').trigger("click");
						
						return false;
				}
		$.ajax({
	
					url: "/index.php/ajax/new_register/DailyMemberInfo_Ajax/daily_member_sujung_ajax", 
					type: "post",
					data : {
						'num'						: $('#daily_member_num').val(),
						'oun_name'					: $('#oun_name').val(),
						'daily_salary'				: $('#daily_salary').val(),
						'job'						: $('#job').val(),
						'jumin1'					: $('#jumin1').val(),
						'jumin2'					: $('#jumin2').val(),
						'oun_phone'					: $('#oun_phone').val(),
						'address1'					: $('#address1').val(),
						'address2'					: $('#address2').val(),
						'postnum'					: $('#postnum').val(),
						'bank_name'					: $('#bank_name').val(),
						'bank'						: $('#bank').val(),
						'bank_number'				: $('#bank_number').val(),
						
						
							},
					dataType:"json",
					timeout: 30000,
					success: function(data) {
						daily_member_sujung= new Array();
						$.each(data, function(key, val){
						
							daily_member_sujung.push({
							'oun_name'					: val.oun_name,
							'daily_salary'				: val.daily_salary,
							'job'						: val.job,
							'jumin1'					: val.jumin1,
							'jumin2'					: val.jumin2,
							'oun_phone'					: val.oun_phone,
							'address1'					: val.address1,
							'address2'					: val.address2,
							'postnum'					: val.postnum,
							'bank_name'					: val.bank_name,
							'bank'						: val.bank,
							'bank_number'				: val.bank_number,
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
			alert(daily_member_sujung[0].oun_name+"의 수정이 완료되었습니다.");
			$(location).attr("href", "http://yoojjtt.cafe24.com/topic/new_register_daily_member");
		}
		
	});

	


	

	
}); // 전체 end;
 