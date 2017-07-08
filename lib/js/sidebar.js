$(function(){  
	/****************************************       id check **************************************************/
	// 로그인화면에서 로그인을 클릭할 때 ID가 없거나 PWD가 없는 경우 확인 2017-05-11
		var path = window.location.pathname;
		var href = window.location.href;
		
		if(path = "/topic"){
			$('#sidebar1').parents('li').addClass('active open');
			//$('#sidebar1').parents('li').removeClass('active open');  나머지 다른 li에 active open 지움
			$("#sidebar1").parents('ul').css("display", "block");
			$("#sidebar2").parents('ul').removeAttr("style");
			
			$('#sidebar2').removeClass('active');
			$('#sidebar3').removeClass('active');
			$('#sidebar4').removeClass('active');
			$('#sidebar5').removeClass('active');
			$('#sidebar1').addClass('active');

			
		}

		if(href == "http://yoojjtt.cafe24.com/topic/new_register_hyunjang"){
			$('#sidebar2').parents('li').addClass('active open');
			$('#sidebar1').parents('li').removeClass('active open');
			$("#sidebar2").parents('ul').css("display", "block");
			$("#sidebar1").parents('ul').removeAttr("style");
			

			
			$('#sidebar2').addClass('active');

			$('#sidebar1').removeClass('active');
			$('#sidebar3').removeClass('active');
			$('#sidebar4').removeClass('active');
			$('#sidebar5').removeClass('active');
		
		}
				
		
		if(href == "http://yoojjtt.cafe24.com/topic/new_register_daily_member"){
			$('#sidebar3').parents('li').addClass('active open');
			$('#sidebar1').parents('li').removeClass('active open');
			$("#sidebar3").parents('ul').css("display", "block");
			$("#sidebar1").parents('ul').removeAttr("style");
			
			
			$('#sidebar3').addClass('active');
			
			$('#sidebar1').removeClass('active');
			$('#sidebar2').removeClass('active');
			$('#sidebar4').removeClass('active');
			$('#sidebar5').removeClass('active');
			
		
		}


		if(href == "http://yoojjtt.cafe24.com/topic/enroll_danga"){
			$('#sidebar4').parents('li').addClass('active open');
			$('#sidebar1').parents('li').removeClass('active open');
			$("#sidebar4").parents('ul').css("display", "block");
			$("#sidebar1").parents('ul').removeAttr("style");
			
			$('#sidebar4').addClass('active');
			
			$('#sidebar1').removeClass('active');
			$('#sidebar2').removeClass('active');
			$('#sidebar3').removeClass('active');
			$('#sidebar5').removeClass('active');

	
		
		}

		if(href == "http://yoojjtt.cafe24.com/topic/enroll_kosu"){
			$('#sidebar5').parents('li').addClass('active open');
			$('#sidebar1').parents('li').removeClass('active open');
			$("#sidebar5").parents('ul').css("display", "block");
			$("#sidebar1").parents('ul').removeAttr("style");
			
			$('#sidebar5').addClass('active');
			
			$('#sidebar1').removeClass('active');
			$('#sidebar2').removeClass('active');
			$('#sidebar3').removeClass('active');
			$('#sidebar4').removeClass('active');

	
		
		}
	
		
	
	
	
}); // 전체 end;
 