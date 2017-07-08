  $(function(){  
/****************************************************************************************************/
//form validation enroll_danga 페이지 로드되면 현장찾기 input 에 form validation 2017-05-22
//
/****************************************************************************************************/








/****************************************************************************************************/
/********************************************   STEP1	*********************************************/			
/****************************************************************************************************/

/****************************************************************************************************/
//kosa_table  ajax 2017-05-22
//STEP1 현장찾기에서 현장 목록을 ajax해준다. HyunjangInfo_Ajax 그데로 썻음
/****************************************************************************************************/
	var href = window.location.href;
	var mytable;
	
	if(href == "http://yoojjtt.cafe24.com/topic/enroll_danga"){
		kosa();	
	
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


	


/*******************************************************************************************************/
//현장목록에서 선택을 하면 highlight가 되면서 STEP2로 이동,
//현장이름, num이 STEP2의 현장INPUT에 value로 전달  2017-05-22
//STEP1에서 현장만 선택하고 바로 STEP3에 현장현황을 확일할 경우가 있음 2017-05-23 Danga_ajax
/******************************************************************************************************/

	$('#select_kosa').on("click", "tr", function() // table에서 행 선택할 경우(단일 선택) 2017-05-17
		{		
				var target = $('.highlight');
				$(this).toggleClass("highlight");
				$(this).children().children('a').toggleClass("btn-success");
				target.not($(this)).removeClass("highlight");
				target.not($(this)).children().children('a').removeClass("btn-success");



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

					var c = confirm("'" + company_name + "'" + "을(를) 선택하시겠습니까?");

				}
				if(c == true){ // 수정확인을 누르면 ajax 통신 STEP1, STEP2, STEP3 에 현장 INPUT box에 value 값을 전달 해준다.
					$('#selected_hyunjang').val(company_name);
					$('#selected_hyunjang_num').val(company_num);
					$('#selected_hyunjang_2').val(company_name);
					$('#selected_hyunjang_num_2').val(company_num);
					$('#selected_hyunjang_3').val(company_name);
					$('#selected_hyunjang_num_3').val(company_num);
					$('#wizard_next').trigger("click");

					
				}

		});	//select end


/****************************************************************************************************/
/********************************************   STEP2	*********************************************/			
/****************************************************************************************************/


/****************************************************************************************************/
//daily_member_table  ajax 2017-05-22
//STEP 2 근로자 찾기 페이지에서 현장근로자 리스트를 ajax해준다.  DailyMemberInfo_Ajax 그데로 씀
/****************************************************************************************************/
	var href = window.location.href;
	var mytable;
	if(href == "http://yoojjtt.cafe24.com/topic/enroll_danga"){
		daily_member();
		
	}	
	
	function daily_member(){
	
		
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
						myTable = $("#dailymember_tabletools").DataTable();
						myTable.rows.add(result);
						myTable.draw();
							
					},
				
					error: function(xhr, valStatus, errorThrown) {
						alert("데이터 수신 실패!\n" + valStatus + " (HTTP-" + xhr.status + " / " + errorThrown + ")");
					}
		
		});//ajax end
	};//daily_member end

/****************************************************************************************************/
//근로자 찾기에서 선택을 하면 highlight가 된다. 2017-05-22
//등록 confirm 창이 나와서 승낙을 한경우 hyun_jang_register.db에 INSERT
//Danga_enroll_ajax
/****************************************************************************************************/

	$('#select_daily').on("click", "tr", function() // table에서 행 선택할 경우(단일 선택) 2017-05-17
		{	
			if(!$('#selected_hyunjang_num_2').val()){ //현장을 먼저 선택하지 않으면 실해되지않는다.
				alert("현장을 먼저 선택하세요.");
			}else{

				var target = $('.highlight');
				$(this).toggleClass("highlight");
				$(this).children().children('a').toggleClass("btn-success");
				target.not($(this)).removeClass("highlight");
				target.not($(this)).children().children('a').removeClass("btn-success");



				// 화면 크기에 따라 달라지기 때문에 설정 2017-05-18
				var width = $(window).width();

				if (width < 450)  //width == phone
				{	
					daily_member_num = $('.highlight').children().eq(0).text();
					daily_member_name = $('.highlight').children().eq(1).text();
					monthly_daga_date = $('#monthly_daga_date').val();
				} //width == phone end

				if(width > 449 && width < 940) //width == tablet
				{
					daily_member_num = $('.highlight').children().eq(1).text();
					daily_member_name = $('.highlight').children().eq(2).text();
					monthly_daga_date = $('#monthly_daga_date').val();
				} //width == tablet end

				if (width > 939)  //width == desktop
				{
					daily_member_num = $('.highlight').children().eq(1).text();
					daily_member_name = $('.highlight').children().eq(2).text();
					monthly_daga_date = $('#monthly_daga_date').val();
				} //width == desktop end

		
			
			
				if(daily_member_num == false){ // 근로자를 선택하지않으면 

					alert("근로자를 선택하세요.");
					return false;

				}else if(monthly_daga_date == false){ //현장을 선택하면
				
					alert('등록할 날짜를 선택하세요.');
					return false;
				}else{
					selected_hyunjang = $('#selected_hyunjang_2').val();
					selected_hyunjang_num = $('#selected_hyunjang_num_2').val();
					monthly_daga_date = $('#monthly_daga_date').val().substring(5,7);
					var c = confirm("'" + daily_member_name + "'을(를) " +"'" + selected_hyunjang + " ("+monthly_daga_date+"월)"+"'"+"에 등록 하시겠습니까?");

				}
				if(c == true){ // 등록확인을 누르면

							$.ajax({ 
					
							url: "/index.php/ajax/enroll/DangaInfo_Ajax/Danga_enroll_ajax", 
							type: "post",
							data : {						
								'selected_hyunjang_num'			: selected_hyunjang_num,
								'selected_daily_num'			: daily_member_num,
								'monthly_daga_date'				: $('#monthly_daga_date').val(),
									},
							dataType:"json",
							timeout: 30000,
							success: function(data) {						
								alert("'"+data[0].oun_name+"'"+'님이 등록되었습니다.');
								
								},
								error: function(xhr, valStatus, errorThrown) {
									alert("데이터 수신 실패!\n" + valStatus + " (HTTP-" + xhr.status + " / " + errorThrown + ")");
								}
					
							});//근로자 등록 ajax end				
					

				}else{
				
				}
			}//else 현장을 선택한 경우 

		});	//select end


/****************************************************************************************************/
/********************************************   STEP3	*********************************************/			
/****************************************************************************************************/

/****************************************************************************************************/
//조회 버튼을 누르면 현장코드, 월을 조회하여 선택한 값에 일치하는 월별 단가 monthly_daga table을 불러온다.
//
//Danga_ajax
/****************************************************************************************************/
	$('#monthy_daga_search').click(function(){
		selected_hyunjang		= $('#selected_hyunjang_3').val();
		selected_hyunjang_num	= $('#selected_hyunjang_num_3').val();
		monthly_daga_date		= $('#monthly_daga_date_2').val();
		if(!$('#monthly_daga_date_2').val()){
								alert('날짜를 선택하세요');
								$('#monthly_daga_date_2').focus();
								return false;
						}
		if(!$('#selected_hyunjang_3').val()){
								alert('현장을 선택하세요');
								$('#selected_hyunjang_3').focus();
								return false;
						}
		alert(selected_hyunjang+"'"+monthly_daga_date+"'"+'조회하시겠습니까?');
		$.ajax({ 
						
						url: "/index.php/ajax/enroll/DangaInfo_Ajax/Danga_ajax", 
						type: "post",
						data : {						
							'selected_hyunjang_num'			: selected_hyunjang_num,
							'date'							: monthly_daga_date,
								},
						dataType:"json",
						timeout: 30000,
						success: function(data) {	
							
								
							myTable = $("#hyun_jang_list_danga").DataTable();
							myTable.clear();

							result = data.map(function (v, i) {
								result = [];
								result.push(i+1);
								result.push(v.oun_name);
								result.push(v.num);
								result.push(v.job);
								result.push(v.oun_phone);
								result.push("<input class='form-control' value="+v.daily_salary+'>'+
									'  <button class="btn btn-danger" >삭제</button>'+
									'  <button class="btn btn-success">수정</button>');
								
								return result;
							});
							
							myTable.rows.add(result);
							myTable.draw();	
							
							
							},
							error: function(xhr, valStatus, errorThrown) {
								alert("데이터 수신 실패!\n" + valStatus + " (HTTP-" + xhr.status + " / " + errorThrown + ")");
							}
				
						});//근로자 등록 ajax end	
	})


/****************************************************************************************************/
//2017-05-24 button을 클릭하면 삭제 button 인지, 수정button 인지 구분...
/****************************************************************************************************/
	$('#select_hyun_jang_register').on("click", "button", function(){

		
		// 화면 크기에 따라 달라지기 때문에 설정 2017-05-18
				var width = $(window).width();

				if (width < 450)  //width == phone
				{	
					button = $(this).text();
					member_name = $(this).parents('tr').siblings('tr.odd').find('td').eq(1).text();
					member_num = $(this).parents('ul').children().eq(0).text().substring(7);
					daily_salary = $(this).siblings('input').val();
				} //width == phone end

				if(width > 449 && width < 940) //width == tablet
				{
					button = $(this).text();
					member_name = $(this).parents('tr').siblings('tr.odd').find('td').eq(1).text();
					member_num = $(this).parents('ul').children().eq(0).text().substring(7);
					daily_salary = $(this).siblings('input').val();
				} //width == tablet end

				if (width > 939)  //width == desktop
				{
					button = $(this).text();
					member_name = $(this).parents('tr').find('td').eq(1).text();
					member_num = $(this).parents('tr').find('td').eq(2).text();
					daily_salary = $(this).siblings('input').val();

					
				} //width == desktop end



		/******** 삭제 버튼 누를 경우 2017-05-26*********/
		if(button == '삭제'){
		selected_hyunjang		= $('#selected_hyunjang_3').val();
		selected_hyunjang_num	= $('#selected_hyunjang_num_3').val();
		monthly_daga_date		= $('#monthly_daga_date_2').val();

			
			var c = confirm("'"+member_name+"'"+'을(를) 삭제하시겠습니까?');

			if(c == true){
				
				
				$.ajax({ 
					
					url: "/index.php/ajax/enroll/DangaInfo_Ajax/Danga_del_ajax", 
					type: "post",
					data : {						
						'selected_hyunjang_num'			: selected_hyunjang_num,
						'member_num'					: member_num,
						'date'							: monthly_daga_date,
							},
					dataType:"json",
					timeout: 30000,
					success: function(data) {						
						myTable = $("#hyun_jang_list_danga").DataTable();
						myTable.clear();

						result = data.map(function (v, i) {
							result = [];
							result.push(i+1);
							result.push(v.oun_name);
							result.push(v.num);
							result.push(v.job);
							result.push(v.oun_phone);
							result.push("<input class='form-control' value="+v.daily_salary+'>'+
								'  <button class="btn btn-danger" >삭제</button>'+
								'  <button class="btn btn-success">수정</button>');
							
							return result;
							
						});								
					
						myTable.rows.add(result);
						myTable.draw();
						
						},
						error: function(xhr, valStatus, errorThrown) {
							alert("데이터 수신 실패!\n" + valStatus + " (HTTP-" + xhr.status + " / " + errorThrown + ")");
						}
			
					});//근로자 등록 ajax end		
				
			}
			
			
		}


		/******** 수정 버튼 누를 경우 2017-05-26*********/
		if(button == '수정'){
			selected_hyunjang		= $('#selected_hyunjang_3').val();
			selected_hyunjang_num	= $('#selected_hyunjang_num_3').val();
			monthly_daga_date		= $('#monthly_daga_date_2').val();

			var c = confirm("'"+member_name+"'"+'을(를) 수정 저장하시겠습니까?');
			if(c == true){
				
				
				$.ajax({ 
					
					url: "/index.php/ajax/enroll/DangaInfo_Ajax/daily_salary_ajax", 
					type: "post",
					data : {						
						'selected_hyunjang_num'			: selected_hyunjang_num,
						'member_num'					: member_num,
						'daily_salary'					: daily_salary,
						'date'							: monthly_daga_date
							},
					dataType:"json",
					timeout: 30000,
					success: function(data) {						
						myTable = $("#hyun_jang_list_danga").DataTable();
						myTable.clear();

						result = data.map(function (v, i) {
							result = [];
							result.push(i+1);
							result.push(v.oun_name);
							result.push(v.num);
							result.push(v.job);
							result.push(v.oun_phone);
							result.push("<input class='form-control' value="+v.daily_salary+'>'+
								'  <button class="btn btn-danger" >삭제</button>'+
								'  <button class="btn btn-success">수정</button>');
							
							return result;
							
						});								
					
						myTable.rows.add(result);
						myTable.draw();
						
						},
						error: function(xhr, valStatus, errorThrown) {
							alert("데이터 수신 실패!\n" + valStatus + " (HTTP-" + xhr.status + " / " + errorThrown + ")");
						}
			
					});//근로자 등록 ajax end		
				
			}
		}
	
	}) //
		
			
				
	

	
	
	





	
}); // 전체 end;
 