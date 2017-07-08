		<!--================================================== -->

		<!-- PACE LOADER - turn this on if you want ajax loading to show (caution: uses lots of memory on iDevices)-->
		<script data-pace-options='{ "restartOnRequestAfter": true }' src="/lib/HTML_Full_Version/js/plugin/pace/pace.min.js"></script>

		<!-- Link to Google CDN's jQuery + jQueryUI; fall back to local -->
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
			
		<script>
			if (!window.jQuery) {
				document.write('<script src="/lib/HTML_Full_Version/js/libs/jquery-2.1.1.min.js"><\/script>');
			}
		</script>

		<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
		<script>
			if (!window.jQuery.ui) {
				document.write('<script src="/lib/HTML_Full_Version/js/libs/jquery-ui-1.10.3.min.js"><\/script>');
			}
		</script>
		<script src="/lib/HTML_Full_Version/js/plugin/jqgrid/jquery.jqGrid.min.js"></script>
		<script src="/lib/HTML_Full_Version/js/plugin/jqgrid/grid.locale-en.min.js"></script>
		
								
							
		<!-- IMPORTANT: APP CONFIG -->
		<script src="/lib/HTML_Full_Version/js/app.config.js"></script>

		<!-- JS TOUCH : include this plugin for mobile drag / drop touch events-->
		<script src="/lib/HTML_Full_Version/js/plugin/jquery-touch/jquery.ui.touch-punch.min.js"></script> 

		<!-- BOOTSTRAP JS -->
		<script src="/lib/HTML_Full_Version/js/bootstrap/bootstrap.min.js"></script>

		<!-- CUSTOM NOTIFICATION -->
		<script src="/lib/HTML_Full_Version/js/notification/SmartNotification.min.js"></script>

		<!-- JARVIS WIDGETS -->
		<script src="/lib/HTML_Full_Version/js/smartwidgets/jarvis.widget.min.js"></script>

		<!-- EASY PIE CHARTS -->
		<script src="/lib/HTML_Full_Version/js/plugin/easy-pie-chart/jquery.easy-pie-chart.min.js"></script>

		<!-- SPARKLINES -->
		<script src="/lib/HTML_Full_Version/js/plugin/sparkline/jquery.sparkline.min.js"></script>

		<!-- JQUERY VALIDATE -->
		<script src="/lib/HTML_Full_Version/js/plugin/jquery-validate/jquery.validate.min.js"></script>

		<!-- JQUERY MASKED INPUT -->
		<script src="/lib/HTML_Full_Version/js/plugin/masked-input/jquery.maskedinput.min.js"></script>

		<!-- JQUERY SELECT2 INPUT -->
		<script src="/lib/HTML_Full_Version/js/plugin/select2/select2.min.js"></script>

		<!-- JQUERY UI + Bootstrap Slider -->
		<script src="/lib/HTML_Full_Version/js/plugin/bootstrap-slider/bootstrap-slider.min.js"></script>

		<!-- browser msie issue fix -->
		<script src="/lib/HTML_Full_Version/js/plugin/msie-fix/jquery.mb.browser.min.js"></script>

		<!-- FastClick: For mobile devices -->
		<script src="/lib/HTML_Full_Version/js/plugin/fastclick/fastclick.min.js"></script>

		<!-- Demo purpose only -->
		<script src="/lib/HTML_Full_Version/js/demo.min.js"></script>

		<!-- MAIN APP JS FILE -->
		<script src="/lib/HTML_Full_Version/js/app.min.js"></script>

		<!-- ENHANCEMENT PLUGINS : NOT A REQUIREMENT -->
		<!-- Voice command : plugin -->
		<script src="/lib/HTML_Full_Version/js/speech/voicecommand.min.js"></script>

		<!-- SmartChat UI : plugin -->
		<script src="/lib/HTML_Full_Version/js/smart-chat-ui/smart.chat.ui.min.js"></script>
		<script src="/lib/HTML_Full_Version/js/smart-chat-ui/smart.chat.manager.min.js"></script>
		
				
		<!-- Flot Chart Plugin: Flot Engine, Flot Resizer, Flot Tooltip -->
		<script src="/lib/HTML_Full_Version/js/plugin/flot/jquery.flot.cust.min.js"></script>
		<script src="/lib/HTML_Full_Version/js/plugin/flot/jquery.flot.resize.min.js"></script>
		<script src="/lib/HTML_Full_Version/js/plugin/flot/jquery.flot.time.min.js"></script>
		<script src="/lib/HTML_Full_Version/js/plugin/flot/jquery.flot.tooltip.min.js"></script>
		
		<!-- Vector Maps Plugin: Vectormap engine, Vectormap language -->
		<script src="/lib/HTML_Full_Version/js/plugin/vectormap/jquery-jvectormap-1.2.2.min.js"></script>
		<script src="/lib/HTML_Full_Version/js/plugin/vectormap/jquery-jvectormap-world-mill-en.js"></script>
		
		<!-- Full Calendar -->
		<script src="/lib/HTML_Full_Version/js/plugin/moment/moment.min.js"></script>
		<script src="/lib/HTML_Full_Version/js/plugin/fullcalendar/jquery.fullcalendar.min.js"></script>
		<!-- 나의 js 파일 2017-05-11-->
		<script src="/lib/js/sidebar.js"></script>
		<script src="/lib/js/joinus.js"></script>
		<script src="/lib/js/info_company.js"></script>
		<script src="/lib/js/info_employee.js"></script>
		<script src="/lib/js/info_tax.js"></script>
		
		<!-- template js 파일 2017-05-15 -->
		<script src="/lib/js/template_js/dashboard.js"></script>
		<script src="/lib/js/template_js/dashboard_2.js"></script>
		<script src="/lib/js/template_js/dashboard_3.js"></script>
		<script src="/lib/js/template_js/register.js"></script>


		<script>
		if ($("#calendar").length) {
					var date = new Date();
					var d = date.getDate();
					var m = date.getMonth();
					var y = date.getFullYear();

					var calendar = $('#calendar').fullCalendar({

						editable : true,
						draggable : true,
						selectable : false,
						selectHelper : true,
						unselectAuto : false,
						disableResizing : false,
						height: "auto",

						header : {
							left : 'title', //,today
							center : 'prev, next, today',
							right : 'month, agendaWeek, agenDay' //month, agendaDay,
						},

						select : function(start, end, allDay) {
							var title = prompt('Event Title:');
							if (title) {
								calendar.fullCalendar('renderEvent', {
									title : title,
									start : start,
									end : end,
									allDay : allDay
								}, true // make the event "stick"
								);
							}
							calendar.fullCalendar('unselect');
						},

						events : [{
							title : 'All Day Event',
							start : new Date(y, m, 1),
							description : 'long description',
							className : ["event", "bg-color-greenLight"],
							icon : 'fa-check'
						}, {
							title : 'Long Event',
							start : new Date(y, m, d - 5),
							end : new Date(y, m, d - 2),
							className : ["event", "bg-color-red"],
							icon : 'fa-lock'
						}, {
							id : 999,
							title : 'Repeating Event',
							start : new Date(y, m, d - 3, 16, 0),
							allDay : false,
							className : ["event", "bg-color-blue"],
							icon : 'fa-clock-o'
						}, {
							id : 999,
							title : 'Repeating Event',
							start : new Date(y, m, d + 4, 16, 0),
							allDay : false,
							className : ["event", "bg-color-blue"],
							icon : 'fa-clock-o'
						}, {
							title : 'Meeting',
							start : new Date(y, m, d, 10, 30),
							allDay : false,
							className : ["event", "bg-color-darken"]
						}, {
							title : 'Lunch',
							start : new Date(y, m, d, 12, 0),
							end : new Date(y, m, d, 14, 0),
							allDay : false,
							className : ["event", "bg-color-darken"]
						}, {
							title : 'Birthday Party',
							start : new Date(y, m, d + 1, 19, 0),
							end : new Date(y, m, d + 1, 22, 30),
							allDay : false,
							className : ["event", "bg-color-darken"]
						}, {
							title : 'Smartadmin Open Day',
							start : new Date(y, m, 28),
							end : new Date(y, m, 29),
							className : ["event", "bg-color-darken"]
						}],


						eventRender : function(event, element, icon) {
							if (!event.description == "") {
								element.find('.fc-title').append("<br/><span class='ultra-light'>" + event.description + "</span>");
							}
							if (!event.icon == "") {
								element.find('.fc-title').append("<i class='air air-top-right fa " + event.icon + " '></i>");
							}
						}
					});

				};
		</script>

		



	</body>

</html>