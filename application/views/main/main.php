	<body class="smart-style-2">
		
		
		<!-- MAIN PANEL -->
		<div id="main" role="main">

			<!-- RIBBON -->
			<div id="ribbon">

				<span class="ribbon-button-alignment"> 
					<span id="refresh" class="btn btn-ribbon" data-action="resetWidgets" data-title="refresh"  rel="tooltip" data-placement="bottom" data-original-title="<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings." data-html="true">
						<i class="fa fa-refresh"></i>
					</span> 
				</span>

				<!-- breadcrumb -->
				<ol class="breadcrumb">
					<li>Company</li><li>회사정보</li>
				</ol>
				<!-- end breadcrumb -->

				<!-- You can also add more buttons to the
				ribbon for further usability

				Example below:

				<span class="ribbon-button-alignment pull-right">
				<span id="search" class="btn btn-ribbon hidden-xs" data-title="search"><i class="fa-grid"></i> Change Grid</span>
				<span id="add" class="btn btn-ribbon hidden-xs" data-title="add"><i class="fa-plus"></i> Add</span>
				<span id="search" class="btn btn-ribbon" data-title="search"><i class="fa-search"></i> <span class="hidden-mobile">Search</span></span>
				</span> -->

			</div>
			<!-- END RIBBON -->

			<!-- MAIN CONTENT -->
			<div id="content">
				
				<div class="row"><!-- 상단 path string 2017-05-12-->

					<div class="col-xs-12 col-sm-7 col-md-7 col-lg-4">
						
					</div>
					
				</div><!-- row end-->
				

				<!-- widget grid -->
				<section id="widget-grid" class="">

					
					<?$this->load->view('widget/main_profile_widget');?>

				</section><!-- end widget grid -->
				
				
				
				
				
				
				

			</div><!-- END MAIN CONTENT -->

		</div><!-- END MAIN PANEL -->