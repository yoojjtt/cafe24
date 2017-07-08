  $(function(){  
	
	/****************************************************************************************************/
	//페이지가 로드되면 tax_table  ajax 2017-05-11
	/****************************************************************************************************/
		var path = window.location.pathname;
		//alert(path);
		if(path = "/topic"){
		
		
		$.ajax({
			
					url: "/index.php/ajax/TaxInfo_Ajax/tax_ajax", 
					type: "post",
					data : {
						
						'companyName'	: $('#com_info').text(),
						
						
						
							},
					dataType:"json",
					timeout: 30000,
					success: function(data) {
						if(data !='empty'){
							taxdata= new Array();
							$.each(data, function(key, val){
								
																
									taxdata.push({
									
									"no_tax"							:val.no_tax,
									"tax_rate"							:val.tax_rate,
									"jumin_tax_rate"					:val.jumin_tax_rate,
									"employe_insurance_rate"			:val.employe_insurance_rate,
									"bonin_med_insurance_rate"			:val.bonin_med_insurance_rate,
									"company_med_insurance_rate"		:val.company_med_insurance_rate,
									"bonin_old_med_insurance_rate"		:val.bonin_old_med_insurance_rate,
									"company_old_med_insurance_rate"	:val.company_old_med_insurance_rate,
									"bonin_kumin_insurance_rate"		:val.bonin_kumin_insurance_rate,
									"company_kumin_insurance_rate"		:val.company_kumin_insurance_rate,
									"sigi"								:val.sigi,
									"jeon_gi"							:val.jeon_gi


									
									});//
								
								});//each end;
						certi_max_num = taxdata.length;
						tax_table();
						}else if(data = 'empty'){
							alert("회사등록을 하셔야 합니다.");
						}		
					
					},
					error: function(xhr, valStatus, errorThrown) {
						alert("데이터 수신 실패!\n" + valStatus + " (HTTP-" + xhr.status + " / " + errorThrown + ")");
					}
		
		});//ajax end
	

				function tax_table(){
						//alert(data);
						//alert("직원정보 조회");
						
					if(!$("#tax_info").text()){	

						for(var i=0; i<certi_max_num; i++){
							//j=i+1;  
							var str = '';
							//str +=j;  
							str +="<tr>"
							str +='<th rowspan ="2">'+ "갑근세" + "</th>" 
							str	+="<th>"+ "면세범위" + "</th>"
							str +="<th>"+ taxdata[i].no_tax + "</th>"
							str +="</tr>"

							str +="<tr>"
							str +="<th>"+ "<div class='tooltip-demo'>" 
							str += '<button type="button" class="btn btn-default" data-container="body" data-toggle="popover" data-placement="top" data-content="일일 단가10원기준: 1.5공수인 경우 - 15만원 중 5만원에 대하여 * 세율">'
							str +="면세범위"+"</button>"+"</div>"+ "</th>"
							str	+="<th>"+ taxdata[i].tax_rate + "</th>"
							str +="</tr>"
							
							str +="<tr>"
							str +="<th>"+ "주민세" + "</th>" 
							str	+="<th>"+ "해당없음" + "</th>"
							str +="<th>"+ taxdata[i].jumin_tax_rate + "</th>"
							str +="</tr>"
								
							str +="<tr>"
							str +="<th>"+ "고용보험" + "</th>" 
							str	+="<th>"+ "해당없음" + "</th>"
							str +="<th>"+ taxdata[i].employe_insurance_rate + "</th>"
							str +="</tr>"
							
							str +="<tr>"
							str +="<th>"+ "의료보험" + "</th>" 
							str	+="<th>"+ taxdata[i].bonin_med_insurance_rate + "</th>"
							str +="<th>"+ taxdata[i].company_med_insurance_rate + "</th>"
							str +="</tr>"
								
							str +="<tr>"
							str +="<th>"+ "노인장기보험" + "</th>" 
							str	+="<th>"+ taxdata[i].bonin_old_med_insurance_rate + "</th>"
							str +="<th>"+ taxdata[i].company_old_med_insurance_rate + "</th>"
							str +="</tr>"
							
							str +="<tr>"
							str +="<th>"+ "국민연금" + "</th>" 
							str	+="<th>"+ taxdata[i].bonin_kumin_insurance_rate + "</th>"
							str +="<th>"+ taxdata[i].company_kumin_insurance_rate + "</th>"
							str +="</tr>"
								
								
						
									$("#tax_info").append(str); 		
							
						};	
						
					
					};//tax_info end	
						
				};//tax_table() end

		};//if(path) end
	
/*****************************************************************************************************/
//여기서부터는 회사정보, 직원정보, 세금정보의 수정 btn 등록 btn 에 관한 js입니다.

/******************************************************************************************************/

/********************                       세금정보 수정 modal 에 input append하기                ********************/
	$('#tax_sujung').click(function(){
	
	
		
		$.ajax({
			
					url: "/index.php/ajax/TaxInfo_Ajax/tax_ajax", 
					type: "post",
					data : {
						
						'companyName'	: $('#com_info').text(),
						
						
						
							},
					dataType:"json",
					timeout: 30000,
					success: function(data) {
						if(data !='empty'){
							taxdata_sujung= new Array();
							$.each(data, function(key, val){
								
																
									taxdata_sujung.push({
									
									"no_tax"							:val.no_tax,
									"tax_rate"							:val.tax_rate,
									"jumin_tax_rate"					:val.jumin_tax_rate,
									"employe_insurance_rate"			:val.employe_insurance_rate,
									"bonin_med_insurance_rate"			:val.bonin_med_insurance_rate,
									"company_med_insurance_rate"		:val.company_med_insurance_rate,
									"bonin_old_med_insurance_rate"		:val.bonin_old_med_insurance_rate,
									"company_old_med_insurance_rate"	:val.company_old_med_insurance_rate,
									"bonin_kumin_insurance_rate"		:val.bonin_kumin_insurance_rate,
									"company_kumin_insurance_rate"		:val.company_kumin_insurance_rate,
									"sigi"								:val.sigi,
									"jeon_gi"							:val.jeon_gi


									
									});//
								
								});//each end;
						certi_max_num = taxdata_sujung.length;
						tax_table_sujung();
						}else if(data = 'empty'){
							alert("회사등록을 하셔야 합니다.");
						}		
					
					},
					error: function(xhr, valStatus, errorThrown) {
						alert("데이터 수신 실패!\n" + valStatus + " (HTTP-" + xhr.status + " / " + errorThrown + ")");
					}
		
		});//ajax end
	});//emplyee end

	function tax_table_sujung(){
			//alert(data);
			//alert("직원정보 조회");
			
		if(!$("#taxdata_sujung").text()){	

			for(var i=0; i<certi_max_num; i++){
				//j=i+1;  
				var str = '';
				//str +=j;  
				str +="<tr>"
				str +='<th rowspan ="2">'+ "갑근세" + "</th>" 
				str	+="<th>"+ "면세범위" + "</th>"
				str +="<th>" + "<input id='no_tax'  type='text' class='form-control' value ='" + taxdata_sujung[i].no_tax +"'>" + "</th>"
				str +="</tr>"

				str +="<tr>"
				str +="<th>"+ "<div class='tooltip-demo'>" 
				str += '<button type="button" class="btn btn-default" data-container="body" data-toggle="popover" data-placement="top" data-content="일일 단가10원기준: 1.5공수인 경우 - 15만원 중 5만원에 대하여 * 세율">'
				str +="면세범위"+"</button>"+"</div>"+ "</th>"
				str	+="<th>"+ "<input id='tax_rate'  type='text' class='form-control' value ='" + taxdata_sujung[i].tax_rate +"'>" + "</th>"
				str +="</tr>"
				
				str +="<tr>"
				str +="<th>"+ "주민세" + "</th>" 
				str	+="<th>"+ "해당없음" + "</th>"
				str +="<th>"+ "<input id='jumin_tax_rate'  type='text' class='form-control' value ='" + taxdata_sujung[i].jumin_tax_rate + "'>" + "</th>"
				str +="</tr>"
					
				str +="<tr>"
				str +="<th>"+ "고용보험" + "</th>" 
				str	+="<th>"+ "해당없음" + "</th>"
				str +="<th>"+ "<input id='employe_insurance_rate'  type='text' class='form-control' value ='" + taxdata_sujung[i].employe_insurance_rate + "'>" + "</th>"
				str +="</tr>"
				
				str +="<tr>"
				str +="<th>"+ "의료보험" + "</th>" 
				str	+="<th>"+ "<input id='bonin_med_insurance_rate'  type='text' class='form-control' value ='" + taxdata_sujung[i].bonin_med_insurance_rate + "'>"+ "</th>"
				str +="<th>"+ "<input id='company_med_insurance_rate'  type='text' class='form-control' value ='" + taxdata_sujung[i].company_med_insurance_rate + "'>"+ "</th>"
				str +="</tr>"
					
				str +="<tr>"
				str +="<th>"+ "노인장기보험" + "</th>" 
				str	+="<th>"+ "<input id='bonin_old_med_insurance_rate'  type='text' class='form-control' value ='" +taxdata_sujung[i].bonin_old_med_insurance_rate + "'>"+ "</th>"
				str +="<th>"+ "<input id='company_old_med_insurance_rate'  type='text' class='form-control' value ='" +taxdata_sujung[i].company_old_med_insurance_rate + "'>"+ "</th>"
				str +="</tr>"
				
				str +="<tr>"
				str +="<th>"+ "국민연금" + "</th>" 
				str	+="<th>"+ "<input id='bonin_kumin_insurance_rate'  type='text' class='form-control' value ='" +taxdata_sujung[i].bonin_kumin_insurance_rate + "'>"+ "</th>"
				str +="<th>"+ "<input id='company_kumin_insurance_rate'  type='text' class='form-control' value ='" +taxdata_sujung[i].company_kumin_insurance_rate + "'>"+ "</th>"
				str +="</tr>"
					
					
			
						$("#taxdata_sujung").append(str); 		
				
			};	
			
		}else{
			
			//alert('있음');
				
			
			
					
		}
	}//table end
/********************                       세금정보 수정 modal 에 input append하기                ********************/
	$('#company_tax_save').click(function(){
	
	
		
		$.ajax({
			
					url: "/index.php/ajax/TaxInfo_Ajax/tax_sujung_ajax", 
					type: "post",
					data : {
						
						"companyName"						: $('#com_info').text(),
						"no_tax"							: $('#no_tax').val(),
						"tax_rate"							: $('#tax_rate').val(),
						"jumin_tax_rate"					: $('#jumin_tax_rate').val(),
						"employe_insurance_rate"			: $('#employe_insurance_rate').val(),
						"bonin_med_insurance_rate"			: $('#bonin_med_insurance_rate').val(),
						"company_med_insurance_rate"		: $('#company_med_insurance_rate').val(),
						"bonin_old_med_insurance_rate"		: $('#bonin_old_med_insurance_rate').val(),
						"company_old_med_insurance_rate"	: $('#company_old_med_insurance_rate').val(),
						"bonin_kumin_insurance_rate"		: $('#bonin_kumin_insurance_rate').val(),
						"company_kumin_insurance_rate"		: $('#company_kumin_insurance_rate').val(),
						
						
						
							},
					dataType:"json",
					timeout: 30000,
					success: function(data) {
						if(data !='empty'){
							taxdata_sujung= new Array();
							$.each(data, function(key, val){
								
																
									taxdata_sujung.push({
									
									"no_tax"							:val.no_tax,
									"tax_rate"							:val.tax_rate,
									"jumin_tax_rate"					:val.jumin_tax_rate,
									"employe_insurance_rate"			:val.employe_insurance_rate,
									"bonin_med_insurance_rate"			:val.bonin_med_insurance_rate,
									"company_med_insurance_rate"		:val.company_med_insurance_rate,
									"bonin_old_med_insurance_rate"		:val.bonin_old_med_insurance_rate,
									"company_old_med_insurance_rate"	:val.company_old_med_insurance_rate,
									"bonin_kumin_insurance_rate"		:val.bonin_kumin_insurance_rate,
									"company_kumin_insurance_rate"		:val.company_kumin_insurance_rate,
									"sigi"								:val.sigi,
									"jeon_gi"							:val.jeon_gi


									
									});//
								
								});//each end;
						certi_max_num = taxdata_sujung.length;
						tax_sujung();
						}else if(data = 'empty'){
							alert("회사등록을 하셔야 합니다.");
						}		
					
					},
					error: function(xhr, valStatus, errorThrown) {
						alert("데이터 수신 실패!\n" + valStatus + " (HTTP-" + xhr.status + " / " + errorThrown + ")");
					}
		
		});//ajax end
	});//emplyee end

	function tax_sujung(){
			
			alert("세금 수정");
			$(location).attr('href', "/index.php");
		
		
	}//table end




/****************************************************** tax 정보 신규등록 ************************************************/
	$('#company_tax_new_save').click(function(){
	
		alert('등록');
	$.ajax({
			
					url: "/index.php/ajax/TaxInfo_Ajax/tax_new_ajax", 
					type: "post",
					data : {
						
						"new_companyName"						: $('#new_companyName').val(),
						"new_no_tax"							: $('#new_no_tax').val(),
						"new_tax_rate"							: $('#new_tax_rate').val(),
						"new_jumin_tax_rate"					: $('#new_jumin_tax_rate').val(),
						"new_employe_insurance_rate"			: $('#new_employe_insurance_rate').val(),
						"new_bonin_med_insurance_rate"			: $('#new_bonin_med_insurance_rate').val(),
						"new_company_med_insurance_rate"		: $('#new_company_med_insurance_rate').val(),
						"new_bonin_old_med_insurance_rate"		: $('#new_bonin_old_med_insurance_rate').val(),
						"new_company_old_med_insurance_rate"	: $('#new_company_old_med_insurance_rate').val(),
						"new_bonin_kumin_insurance_rate"		: $('#new_bonin_kumin_insurance_rate').val(),
						"new_company_kumin_insurance_rate"		: $('#new_company_kumin_insurance_rate').val(),
						
						
						
							},
					dataType:"json",
					timeout: 30000,
					success: function(data) {
						if(data !='empty'){
							taxdata_sujung= new Array();
							$.each(data, function(key, val){
								
																
									taxdata_sujung.push({
									
									"no_tax"							:val.no_tax,
									"tax_rate"							:val.tax_rate,
									"jumin_tax_rate"					:val.jumin_tax_rate,
									"employe_insurance_rate"			:val.employe_insurance_rate,
									"bonin_med_insurance_rate"			:val.bonin_med_insurance_rate,
									"company_med_insurance_rate"		:val.company_med_insurance_rate,
									"bonin_old_med_insurance_rate"		:val.bonin_old_med_insurance_rate,
									"company_old_med_insurance_rate"	:val.company_old_med_insurance_rate,
									"bonin_kumin_insurance_rate"		:val.bonin_kumin_insurance_rate,
									"company_kumin_insurance_rate"		:val.company_kumin_insurance_rate,
									"sigi"								:val.sigi,
									"jeon_gi"							:val.jeon_gi


									
									});//
								
								});//each end;
						certi_max_num = taxdata_sujung.length;
						tax_sujung();
						}else if(data = 'empty'){
							alert("회사등록을 하셔야 합니다.");
						}		
					
					},
					error: function(xhr, valStatus, errorThrown) {
						alert("데이터 수신 실패!\n" + valStatus + " (HTTP-" + xhr.status + " / " + errorThrown + ")");
					}
		
		});//ajax end
	});//emplyee end

	function tax_sujung(){
			
			alert("세금 수정");
			$(location).attr('href', "/index.php");
		
		
	}//table end
 





	
}); // 전체 end;
 