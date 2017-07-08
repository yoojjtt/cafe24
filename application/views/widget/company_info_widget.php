<!-- Widget ID (each widget will need unique ID)-->
	<div class="jarviswidget jarviswidget-color-greenDark" id="wid-id-0">
		<!-- widget options:
			usage: <div class="jarviswidget" id="wid-id-0" data-widget-editbutton="false">
			
			data-widget-colorbutton="false"	
			data-widget-editbutton="false"
			data-widget-togglebutton="false"
			data-widget-deletebutton="false"
			data-widget-fullscreenbutton="false"
			data-widget-custombutton="false"
			data-widget-collapsed="true" 
			data-widget-sortable="false"
			
		-->
		<header>
			<h2><strong>회사정보</strong></h2>				
			
		</header>

		<!-- widget div-->
		<div>
			
			<!-- widget edit box -->
			<div class="jarviswidget-editbox">
				<!-- This area used as dropdown edit box -->
				<input class="form-control" type="text">
				<span class="note"><i class="fa fa-check text-success"></i> Change title to update and save instantly!</span>
				
			</div>
			<!-- end widget edit box -->
			
			<!-- widget content -->
			<div class="widget-body">
				
				<div class="table-responsive">
					<table class="table">
							<?if($this->session->userdata('companyName') == '신규'){		
								echo "신규등록입니다.등록하세요";
								
							}?>
						<tbody id="com_info_display"></tbody>
					</table>
				</div>
				
				
			</div>
			<!-- end widget content -->
			
		</div>
		<!-- end widget div -->
		
	</div>
	<!-- end widget -->