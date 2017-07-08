
		
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
			<li>New_Register</li><li>현장 등록</li>
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

		<div class="row">
			<div class="col-xs-12 col-sm-7 col-md-7 col-lg-4">
				
			</div>
			<div class="col-xs-12 col-sm-5 col-md-5 col-lg-8">
				<!-- 테이블 바로위 우측 상단 공간 -->
			</div>
		</div>


			
		<!-- widget grid -->
		<section id="widget-grid" class="">
		
			<!-- row -->
			<div class="row">
					<!-- NEW WIDGET START -->
				<article class="col-sm-12 col-md-12 col-lg-12">
		
					<!-- Widget ID (each widget will need unique ID)-->
					<div class="jarviswidget jarviswidget-color-darken" id="wid-id-0" data-widget-editbutton="false" data-widget-deletebutton="false">
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
							<span class="widget-icon"> <i class="fa fa-check"></i> </span>
							<h2>공수입력 Process </h2>
		
						</header>
		
						<!-- widget div-->
						<div>
		
							<!-- widget edit box -->
							<div class="jarviswidget-editbox">
								<!-- This area used as dropdown edit box -->
		
							</div>
							<!-- end widget edit box -->
		
							<!-- widget content -->
							<div class="widget-body">
		
								<div class="row">
									<form id="wizard-1" novalidate="novalidate" onsubmit="return false;">
										<div id="bootstrap-wizard-1" class="col-sm-12">
											<div class="form-bootstrapWizard">
												<ul class="bootstrapWizard form-wizard">
													<li class="active" data-target="#step1">
														<a href="#tab1" data-toggle="tab"> <span class="step">1</span> <span class="title">현장 선택</span> </a>
													</li>
													<li data-target="#step2">
														<a href="#tab2" data-toggle="tab"> <span class="step">2</span> <span class="title">공수 입력</span> </a>
													</li>
													<li data-target="#step3">
														<a href="#tab3" data-toggle="tab"> <span class="step">3</span> <span class="title">현황</span> </a>
													</li>
													<li data-target="#step4">
														<a href="#tab4" data-toggle="tab"> <span class="step">4</span> <span class="title">완료</span> </a>
													</li>
												</ul>
												<div class="clearfix"></div>
											</div>
											<div class="tab-content">
												<div class="tab-pane active" id="tab1">
													<br>
                                                    <br>
		
													<div class="row">
		
														<div class="col-sm-12 col-lg-12">
															<div class="form-group">
																<div class="input-group">
																	<span class="input-group-addon"><i class="fa fa-search fa-lg fa-fw"></i></span>
																	<input id="selected_hyunjang"class="form-control input-lg" type="text" placeholder="현장을 선택하세요"name="selected_hyunjang" >
																	<input id="selected_hyunjang_num" type="hidden"/>
		
																</div>
															</div>
																<?$this->load->view('widget/enroll/hyunjang_list2_widget');?>
														</div>
		
													</div>
		
													
												</div>
												<div class="tab-pane" id="tab2">
													<br>
                                                    <br>
													<div class="row">
														
															<div class="col-sm-6 col-sm-6 col-lg-6 col-md-6">
																<div class="form-group">
																	<div class="input-group">
																		<span class="input-group-addon"><i class="fa fa-search fa-lg fa-fw"></i></span>
																		<input id="selected_hyunjang_2"class="form-control input-lg" type="text" placeholder="현장을 선택하세요"name="selected_hyunjang">
																		<input readonly="readonly" id="selected_hyunjang_num_2" type="hidden"/>
																	</div>
																

																</div>
															</div>
															<div class="col-sm-6 col-sm-6 col-lg-6 col-md-6">
																<div class="form-group">
																	<div class="input-group">
																		<span class="input-group-addon"><i class="fa fa-calendar fa-lg fa-fw"></i></span>
																		<input id="monthly_daga_date_2"class="form-control input-lg"  type="month"><span style="padding:0px;"class="input-group-addon"><button  id="monthy_daga_search_2"class="btn btn-success btn-lg"><i class="fa fa-check"></i> 단가조회</button></span>
																			
			
																	</div>
																	
																</div>
															</div>
															

														
													</div>
													
													
													<div class="row">
														
														<div class="col-sm-12 col-lg-12">
														<?$this->load->view('widget/enroll/hyun_jang_kosu_widget');?>
														</div>
														
													</div>
													
													
													
													
												</div>
												<div class="tab-pane" id="tab3">
													<br>
                                                    <br>
													
													<div class="row">
														<div class="col-sm-12 col-lg-12">
															<div class="form-group">
																<div class="input-group">
																	<span class="input-group-addon"><i class="fa fa-search fa-lg fa-fw"></i></span>
																	<input id="selected_hyunjang_3"class="form-control input-lg" type="text" placeholder="현장을 선택하세요"name="selected_hyunjang" >
																	<input id="selected_hyunjang_num_3" type="hidden"/>
		
																</div>
															</div>
																
														</div>
														
													</div>
												</div>
												<div class="tab-pane" id="tab4">
													<br>

													<br>
													<h1 class="text-center text-success"><strong><i class="fa fa-check fa-lg"></i> 완료</strong></h1>
													<!--<h4 class="text-center">완료</h4>-->
													<br>
													<br>
												</div>
		
												<div class="form-actions">
													<div class="row">
														<div class="col-sm-12">
															<ul class="pager wizard no-margin">
																<!--<li class="previous first disabled">
																<a href="javascript:void(0);" class="btn btn-lg btn-default"> First </a>
																</li>-->
																<li class="previous disabled">
																	<a href="javascript:void(0);" class="btn btn-lg btn-default"> Previous </a>
																</li>
																<!--<li class="next last">
																<a href="javascript:void(0);" class="btn btn-lg btn-primary"> Last </a>
																</li>-->
																<li class="next">
																	<a id="wizard_next" href="javascript:void(0);" class="btn btn-lg txt-color-darken"> Next </a>
																</li>
															</ul>
														</div>
													</div>
												</div>
		
											</div>
										</div>
									</form>
								</div>
		
							</div>
							<!-- end widget content -->
		
						</div>
						<!-- end widget div -->
		
					</div>
					<!-- end widget -->
		
				</article>
				<!-- WIDGET END -->
		
		
					
		
		
			</div>
			<!-- end row -->
		
		
		
		</section>
		<!-- end widget grid -->
			

		


	</div>
	<!-- END MAIN CONTENT -->

</div>
<!-- END MAIN PANEL -->