// DO NOT REMOVE : GLOBAL FUNCTIONS!
		
		$(document).ready(function() {
			
			pageSetUp();
			
			function hide_divs(search) {
			    $(".demo-icon-font").hide(); // hide all divs
			    $("#all-icons-demo h2").hide();
			    $("#all-icons-demo .alert").hide();
				$('.demo-icon-font > i[class*="'+search+'"]').parent().show(); // show the ones that match
			}
			
			function show_all() {
			    $(".demo-icon-font").show()
			    $("#all-icons-demo h2").show();
			    $("#all-icons-demo .alert").show();
			}
			
			$("#fa-icon-search").keyup(function() {
				var search = $.trim(this.value);
				if (search === "") {
					show_all();
				}
				else {
					hide_divs(search);
				}
			});			
		
		})