  $(function(){  
/****************************************************************************************************/
//kosa_table  ajax 2017-05-22
//STEP1 현장찾기에서 현장 목록을 ajax해준다. HyunjangInfo_Ajax 그데로 썻음
/****************************************************************************************************/
	var href = window.location.href;
	var mytable;
	
	if(href == "http://yoojjtt.cafe24.com/topic/enroll_kosu"){
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
						
						myTable = $("#hyunjang_list2").DataTable();
						myTable.rows.add(result);
						myTable.draw();
					
						
							
					},
				
					error: function(xhr, valStatus, errorThrown) {
						alert("데이터 수신 실패!\n" + valStatus + " (HTTP-" + xhr.status + " / " + errorThrown + ")");
					}
		
		});//ajax end
	
	}// kosa() end
/*******************************************************************************************************/
//현장목록에서 선택을 하면 highlight가 되면서 STEP2로 이동,  이 부분의 경우 eroll_danga.js 에 있어서 중복적용하면 오류남.
//현장이름, num이 STEP2의 현장INPUT에 value로 전달  2017-05-22
//STEP1에서 현장만 선택하고 바로 STEP3에 현장현황을 확일할 경우가 있음 2017-05-23 Danga_ajax
/******************************************************************************************************/
$('#kosu_select_kosa').on("click", "tr", function() // table에서 행 선택할 경우(단일 선택) 2017-05-17
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

					
				}else{
				
					alert('취소');
				}

		});	//select end

/****************************************************************************************************/
//조회 버튼을 누르면 현장코드, 월을 조회하여 선택한 값에 일치하는 월별 단가 monthly_daga table을 불러온다.
//
//Danga_ajax
/****************************************************************************************************/
	$('#monthy_daga_search_2').click(function(){
		
		selected_hyunjang		= $('#selected_hyunjang_2').val();
		selected_hyunjang_num	= $('#selected_hyunjang_num_2').val();
		monthly_daga_date		= $('#monthly_daga_date_2').val();

		if(!$('#monthly_daga_date_2').val()){
								alert('날짜를 선택하세요');
								$('#monthly_daga_date_2').focus();
								return false;
						}
		if(!$('#selected_hyunjang_3').val()){
								alert('현장을 선택하세요');
								$('#selected_hyunjang_2').focus();
								return false;
						}

		c = confirm(selected_hyunjang+"'"+monthly_daga_date+"'"+'조회하시겠습니까?');
		if(c ==true){
			
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
							
								
							myTable = $("#hyun_jang_kosu").DataTable();
							myTable.clear();

							result = data.map(function (v, i) {
								result = [];
								result.push(i+1);
								result.push(v.oun_name);
								result.push(v.num);
								result.push(v.jumin1+"-"+v.jumin2);
								result.push(v.daily_salary);
								result.push("<select>"+
															'<option value="0">0</option>'+
															'<option value="0.5">0.5</option>'+
															'<option value="1">1</option>'+
															'<option value="1.5">1.5</option>'+
															'<option value="2">2</option>'+
															'<option value="2.5">2.5</option>'+
															'<option value="3">3</option>'+
															'<option value="3.5">3.5</option>'+
															'<option value="4">4</option>'+
														"</select> ");
							
								
								return result;
							});
							
							myTable.rows.add(result);
							myTable.draw();	
							
							
							},
							error: function(xhr, valStatus, errorThrown) {
								alert("데이터 수신 실패!\n" + valStatus + " (HTTP-" + xhr.status + " / " + errorThrown + ")");
							}
				
						});//근로자 등록 ajax end	
		}//confirm c end
	})//#monthy_daga_search_2 end

	$('#kosu_insert').click(function(){
		alert('insert');
		
	});



}); // 전체 end;
 