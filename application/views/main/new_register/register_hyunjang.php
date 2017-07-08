
		
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
				
				
							<!-- Widget ID (each widget will need unique ID)-->
							<div class="jarviswidget jarviswidget-color-blueDark" id="wid-id-3" data-widget-editbutton="false">
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
									<span class="widget-icon"> <i class="fa fa-table"></i> </span>
									<h2>현장 등록</h2>
				
								</header>
				
								<!-- widget div-->
								<div>
				
									<!-- widget edit box -->
									<div class="jarviswidget-editbox">
										<!-- This area used as dropdown edit box -->
										
									</div>
									<!-- end widget edit box -->
				
									<!-- widget content -->
									<div class="widget-body no-padding">
										
											<table id="datatable_tabletools" class="table table-striped table-bordered table-hover" width="100%">
												<thead>
													<tr>
														<th style='width:3%' data-hide="phone"></th>
														<th data-class="expand">Index</th>
														<th data-class="expand">현장명</th>
														<th data-hide="phone,tablet"">공사내용</th>
														<th data-hide="phone,tablet">발주회사</th>
														<th data-hide="phone,tablet">보고자</th>
														<th data-hide="phone,tablet">공사 시작일</th>
														<th data-hide="phone,tablet">공사 종료일</th>
													</tr>
												</thead>
												<tbody id="select_kosa"></tbody>
												
											</table>
											<div class="widget-body-toolbar">
												
												<div class="row">
													
													<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-left">
														<button id="delete_btn" type="button" class="btn btn-danger">
																<i class="fa fa-trash-o"></i>
														</button>
														<div class="btn-group">
															<button id="insert_btn" class="btn btn-success">
																<i class="d fa fa-plus"></i>
															</button>
															
															<button id="sujung_btn" type="button" class="btn btn-success" >
																<i class="fa fa-pencil"></i>
															</button>
															<button id="refresh_btn" type="button" class="btn btn-info">
																<i class="fa fa-refresh"></i>
															</button>

													
														</div> 
														
													</div> <!-- text-left end-->
													
												</div><!-- row end -->
											
											</div>	<!-- widget-body-toolbar -->
										
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
				
					<!-- end row -->
				
				</section>
				<!-- end widget grid -->
					
		
				


			</div>
			<!-- END MAIN CONTENT -->

		</div>
		<!-- END MAIN PANEL -->



		<!--sujung_modal-->
				<div class="modal fade" id="sujung_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
									&times;
								</button>
								<h4 class="modal-title" id="myModalLabel">현장정보 수정</h4>
							</div>
							<div class="modal-body">
				
							<form id="sujungForm" method="post" onsubmit="return false;">

									<fieldset>
										
										<div class="form-group">
											<div class="row">
												<div class="col-md-8">
													<label class="control-label">현장명</label>
													<input type="text" class="form-control" name="hyun_jang_name" id="hyun_jang_name"/>
												</div>
												
												

												<div class="col-md-4">
													<label class="control-label">책임자</label>
													<input type="text" class="form-control" name="bogoja" id="bogoja"/>
													<input type="hidden" class="form-control" id="kosaNum"/>
												</div>
											</div>
										</div>
									</fieldset>

									<fieldset>
										<div class="form-group">
											<div class="row">
												<div class="col-md-8">
													<label class="control-label">공사내용</label>
													<input type="text" class="form-control" name="kosa_name" id="kosa_name"/>
												</div>

												<div class="col-md-4">
													<label class="control-label">관리번호</label>
													<input type="text" class="form-control" name="hyun_jang_number" id="hyun_jang_number"/>
												</div>
												
											</div>
										</div>
									</fieldset>

									<fieldset>
										<div class="form-group">
											<div class="row">
												<div class="col-md-4">
													<label class="control-label">발주회사</label>
													<input type="text" class="form-control" name="balju_company" id="balju_company"/>
												</div>

												<div class="col-md-4">
													<label class="control-label">공사 시작일</label>
													<input type="date" class="form-control" name="kosa_gigan_start" id="kosa_gigan_start"/>
												</div>

												<div class="col-md-4">
													<label class="control-label">공사 종료일</label>
													<input type="date" class="form-control" name="kosa_gigan_end" id="kosa_gigan_end"/>
												</div>
											</div>
										</div>
									</fieldset>

									<fieldset>
										<div class="form-group">
											<label class="control-label">특이사항</label>
											<textarea class="form-control" name="special_content" rows="8" id="special_content"></textarea>
										</div>
									</fieldset>

									<fieldset>
										<div class="form-group">

											<div class="row">
												<div class="col-sm-12 col-md-12">
													<label class="control-label">보험적용 여부</label>
												</div>

												<div class="col-sm-12 col-md-10">

													<label class="control-label">
														<input type="checkbox" name="rating" value="terrible" class="radiobox style-2" />
														<span>국민연금</span> </label>

													<label class="control-label">
														<input type="checkbox" name="rating" value="watchable" class="radiobox style-2" />
														<span>건강보험</span> </label>
													<label class="control-label">
														<input type="checkbox" name="rating" value="best" class="radiobox style-2" />
														<span>고용보험</span> </label>

												</div>

											</div>

										</div>
									</fieldset>

									
				
							</div>
							<div class="modal-footer">
								<button id="movieform_trigger" class="btn btn-default" type="submit">
											<i class="fa fa-eye"></i>
											Validate
										</button>
								<button type="button" class="btn btn-default" data-dismiss="modal">
									취소
								</button>
								<button type="button" class="btn btn-primary" id="kosa_sujong_btn">
									저장
								</button>
							</div>



							</form>

						</div><!-- /.modal-content -->
					</div><!-- /.modal-dialog -->
				</div><!-- /.modal -->




		<!--insert_modal-->
				<div class="modal fade" id="insert_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
									&times;
								</button>
								<h4 class="modal-title" id="myModalLabel">회사정보 등록</h4>
							</div>
							<div class="modal-body">
				
								<form id="insertForm" method="post" onsubmit="return false;">

									<fieldset>
										
										<div class="form-group">
											<div class="row">
												<div class="col-md-8">
													<label class="control-label">현장명</label>
													<input type="text" class="form-control" name="hyun_jang_name_i" id="hyun_jang_name_i"/>
												</div>
												
												

												<div class="col-md-4">
													<label class="control-label">책임자</label>
													<input type="text" class="form-control" name="bogoja_i" id="bogoja_i"/>
													<input type="hidden" class="form-control" id="kosaNum"/>
												</div>
											</div>
										</div>
									</fieldset>

									<fieldset>
										<div class="form-group">
											<div class="row">
												<div class="col-md-8">
													<label class="control-label">공사내용</label>
													<input type="text" class="form-control" name="kosa_name_i" id="kosa_name_i"/>
												</div>

												<div class="col-md-4">
													<label class="control-label">관리번호</label>
													<input type="text" class="form-control" name="hyun_jang_number_i" id="hyun_jang_number_i"/>
												</div>
												
											</div>
										</div>
									</fieldset>

									<fieldset>
										<div class="form-group">
											<div class="row">
												<div class="col-md-4">
													<label class="control-label">발주회사</label>
													<input type="text" class="form-control" name="balju_company_i" id="balju_company_i"/>
												</div>

												<div class="col-md-4">
													<label class="control-label">공사 시작일</label>
													<input type="date" class="form-control" name="kosa_gigan_start_i" id="kosa_gigan_start_i"/>
												</div>

												<div class="col-md-4">
													<label class="control-label">공사 종료일</label>
													<input type="date" class="form-control" name="kosa_gigan_end_i" id="kosa_gigan_end_i"/>
												</div>
											</div>
										</div>
									</fieldset>

									<fieldset>
										<div class="form-group">
											<label class="control-label">특이사항</label>
											<textarea class="form-control" name="special_content_i" rows="8" id="special_content_i"></textarea>
										</div>
									</fieldset>

									<fieldset>
										<div class="form-group">

											<div class="row">
												<div class="col-sm-12 col-md-12">
													<label class="control-label">보험적용 여부</label>
												</div>

												<div class="col-sm-12 col-md-10">

													<label class="control-label">
														<input type="checkbox" name="rating" value="terrible" class="radiobox style-2" />
														<span>국민연금</span> </label>

													<label class="control-label">
														<input type="checkbox" name="rating" value="watchable" class="radiobox style-2" />
														<span>건강보험</span> </label>
													<label class="control-label">
														<input type="checkbox" name="rating" value="best" class="radiobox style-2" />
														<span>고용보험</span> </label>

												</div>

											</div>

										</div>
									</fieldset>

				
							</div>
							<div class="modal-footer">
								<button id="kosa_insert_validation_btn" class="btn btn-default" type="submit">
											<i class="fa fa-eye"></i>
											Validate
								</button>
								<button type="button" class="btn btn-default" data-dismiss="modal">
									취소
								</button>
								<button type="button" class="btn btn-primary" id="kosa_insert_btn">
									저장
								</button>
							</div>



							</form>
						</div><!-- /.modal-content -->
					</div><!-- /.modal-dialog -->
				</div><!-- /.modal -->