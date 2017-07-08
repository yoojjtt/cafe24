			<div class="row">
				
					<div class="col-sm-12">
								
							<div class="well well-sm">
				
								<div class="row">
									<div class="col-sm-12 col-md-12 col-lg-6">
										<div class="well well-light well-sm no-margin no-padding">
				
											<div class="row">
				
												<div class="col-sm-12">
													<div id="myCarousel" class="carousel fade profile-carousel">
														
														<div class="air air-top-left padding-10">
															<h4 class="txt-color-white font-md"><? echo date("Y-m-d") ?></h4>
														</div>
														<ol class="carousel-indicators">
															<li data-target="#myCarousel" data-slide-to="0" class=""></li>
															<li data-target="#myCarousel" data-slide-to="1" class="active"></li>
															<li data-target="#myCarousel" data-slide-to="2" class=""></li>
														</ol>
														<div class="carousel-inner">
															<!-- Slide 1 -->
															<div class="item">
																<img src="/lib/HTML_Full_Version/img/demo/s1.jpg" alt="demo user">
															</div>
															<!-- Slide 2 -->
															<div class="item active">
																<img src="/lib/HTML_Full_Version/img/demo/s2.jpg" alt="demo user">
															</div>
															<!-- Slide 3 -->
															<div class="item">
																<img src="/lib/HTML_Full_Version/img/demo/m3.jpg" alt="demo user">
															</div>
														</div>
													</div>
												</div>
				
												<div class="col-sm-12">
				
													<div class="row">
				
														<div class="col-sm-3 profile-pic">
															<img src="/lib/img/logo.gif" alt="demo user">
															<div class="padding-10">
																<h4 class="font-md"><strong>1,543</strong>
																<br>
																<small>현장현황</small></h4>
																<br>
																<h4 class="font-md"><strong>419</strong>
																<br>
																<small>근로자 현황</small></h4>
															</div>
														</div>
														<div id="com_info_display" class="col-sm-6"></div>
														
													</div>
													<div class="row">
												
													
												
												<hr>
												<div class="col-sm-12">		
													

														<div class="padding-10">

															<ul class="nav nav-tabs tabs-pull-right">
																<li class="active">
																	<a href="#a2" data-toggle="tab">직원정보</a>
																</li>
																<li>
																	<a href="#a1" data-toggle="tab">세금정보</a>
																</li>
																<li class="pull-left">
																
																</li>
															</ul>

															<div class="tab-content padding-top-10">
																<div class="tab-pane fade in active" id="a1">
																	<div class="text-center">
																		<?$this->load->view('widget/company_tax_widget');?>	
																	</div>
																</div>
																<div class="tab-pane fade" id="a2">
																	<div class="text-center">
																		<?$this->load->view('widget/employee_list_widget');?>
																	</div>
																</div><!-- end tab -->
															</div><!-- tab-content padding-top-10-->

														</div><!-- padding-10 -->

													</div><!-- col sm 12-->

												</div>
												<!-- end row -->
				
												</div>
				
											</div>
								</div> <!-- well well-light well-sm no-margin no-padding -->
							</div>



			
						<div class="col-sm-12 col-md-12 col-lg-6">	



							
							<div class="panel panel-default">
								<div class="panel-body status">
									<div class="who clearfix">
                                       공사현황
									</div>
									<div class="text">
										<table id="datatable_tabletools" class="table table-striped table-bordered table-hover" width="100%">
												<thead>
													<tr>
														<th style='width:3%' data-hide="phone"></th>
														<th data-class="expand">Index</th>
														<th data-class="expand">현장명</th>
														<th data-hide="phone,tablet"">현장소장</th>
														<th data-hide="phone,tablet">발주처</th>
														<th data-hide="phone,tablet">등록</th>
														<th data-hide="phone,tablet">공사 시작일</th>
														<th data-hide="phone,tablet">공사 종료일</t h>
													</tr>
												</thead>
												<tbody id="select_kosa"></tbody>
												
										</table>
									</div>
									<ul class="links">
										<li>
											<button id="delete_btn" type="button" class="btn btn-danger"><i class="fa fa-trash-o"></i></button>
										</li>
										<li>
											<div class="btn-group">
												<button id="insert_btn" class="btn btn-success"><i class="d fa fa-plus"></i></button>
												<button id="sujung_btn" type="button" class="btn btn-success" ><i class="fa fa-pencil"></i></button>
												<button id="refresh_btn" type="button" class="btn btn-info"><i class="fa fa-refresh"></i></button>
											</div> 
										</li>
									</ul>
								</div>
							</div>

							
						</div><!-- col-sm-12 col-md-12 col-lg-6 -->
								
				
				