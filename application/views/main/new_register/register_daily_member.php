
	
	

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
					<li>New_Register</li><li>현장직 등록</li>
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
									<h2>현장 근로자 등록</h2>
				
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
														<th data-class="expand">이름</th>
														<th data-hide="phone,tablet"">직종</th>
														<th data-hide="phone,tablet">핸드폰</th>
														<th data-hide="phone,tablet">등록자</th>
														<th data-hide="phone,tablet">Date</th>
													</tr>
												</thead>
												<tbody id="select_daily"></tbody>
												
											</table>
											<div class="widget-body-toolbar">
												
												<div class="row">
													
													<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-left">
														<button id="delete_btn_daily" type="button" class="btn btn-danger">
																<i class="fa fa-trash-o"></i>
														</button>
														<div class="btn-group">
															<button id="insert_btn_daily" class="btn btn-success">
																<i class="d fa fa-plus"></i>
															</button>
															
															<button id="sujung_btn_daily" type="button" class="btn btn-success" >
																<i class="fa fa-pencil"></i>
															</button>
															<button id="refresh_btn_daily" type="button" class="btn btn-info">
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


		



		<!--insert_modal-->
				<div class="modal fade" id="insert_daily_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
									&times;
								</button>
								<h4 class="modal-title" id="myModalLabel">근로자 등록</h4>
							</div>
							<div class="modal-body">
				
							<form id="insertForm_daily" method="post" onsubmit="return false;">

									<fieldset>
										
										<div class="form-group">
											<div class="row">
												<div class="col-md-4">
													<label class="control-label">성명</label>
													<input type="text" class="form-control" name="oun_name_i" id="oun_name_i"/>
												</div>	
												<div class="col-md-4">
													<label class="control-label">단가</label>
													<input type="text" class="form-control" name="daily_salary_i" id="daily_salary_i"/>
												</div>	

												<div class="col-md-3 selectContainer">
													<label class="control-label">직종</label>
													<select class="form-control" name="job_i" id="job_i">
														<option value="">선택</option>
														<option value="반장">반장</option>
														<option value="함석">함석</option>
														<option value="보온">보온</option>
														<option value="비계">비계</option>
														<option value="일반">일반</option>
														<option value="여공">여공</option>
														<option value="용접">용접</option>
														<option value="기계">기계</option>
														<option value="제관">제관</option>
														<option value="기타">기타</option>	
													</select>
												</div>

												

												
											</div>
											
										</div>
									</fieldset>

									

									<fieldset>
										<div class="form-group">
											<div class="row">
												<div class="col-md-3">
													<label class="control-label">주민번호</label>													
													<input type="text" class="form-control" name="jumin1_i" id="jumin1_i" placeholder ="앞자리" >
												</div>

												<div class="col-md-3">
													<label class="control-label">&nbsp</label>													
													<input type="text" class="form-control" name="jumin2_i" id="jumin2_i"  placeholder ="뒷자리">
												</div>

												<div class="col-md-5 ">
													<label class="control-label">연락처</label>
													<input type="text" class="form-control"  name="oun_phone_i" id="oun_phone_i" />
													
												</div>

												
											</div>
										</div>
									</fieldset>

										<legend></legend>


									<fieldset>
										<div class="form-group">
											<div class="row">
												<div class="col-md-8">
													<label class="control-label">주소</label>
													<input type="text" class="form-control" name="address1_i" id="address1_i" >
													
												</div>
												<div class="col-md-4">
													<label class="control-label">우편번호</label>
													<input type="text" class="form-control" name="postnum_i" id="postnum_i" >
													
												</div>

												
												
											</div>
											<div class="row">
												

												<div class="col-md-12">
													<label class="control-label">상세주소</label>
													<input type="text" class="form-control" name="address2_i" id="address2_i">
													
												</div>
											</div>
										</div>
									</fieldset>
										<legend></legend>


									<fieldset>
										<div class="form-group">

											<div class="row">												
												<div class="col-md-4">
													<label class="control-label">예금주</label>
													<input type="text" class="form-control" name="bank_name_i" id="bank_name_i">
												</div>	
											</div>

											<div class="row">
												<div class="col-md-4">
													<label class="control-label">은행</label>
													<input type="text" class="form-control" name="bank_i" id="bank_i" >
													
												</div>

												<div class="col-md-8">
													<label class="control-label">계좌번호</label>
													<input type="text" class="form-control" name="bank_number_i" id="bank_number_i" >
												
													
												</div>
											</div>
										</div>
									</fieldset>
										<legend></legend>

										
									<fieldset>
										<div class="form-group">

											<div class="row">
												<div class="col-sm-12 col-md-12">
													<label class="control-label">보험적용 여부</label>
												</div>

												<div class="col-sm-12 col-md-10">

													<label class="control-label">
														<input type="checkbox" name="rating_i" value="terrible" class="radiobox style-2" />
														<span>국민연금</span> </label>

													<label class="control-label">
														<input type="checkbox" name="rating_i" value="watchable" class="radiobox style-2" />
														<span>건강보험</span> </label>
													<label class="control-label">
														<input type="checkbox" name="rating_i" value="best" class="radiobox style-2" />
														<span>고용보험</span> </label>

												</div>

											</div>

										</div>
									</fieldset>

				
							</div>
							<div class="modal-footer">
								<button id="insert_btn_trigger" class="btn btn-default" type="submit">
											<i class="fa fa-eye"></i>
											Validate
								</button>
								<button type="button" class="btn btn-default" data-dismiss="modal">
									취소
								</button>
								<button type="button" class="btn btn-primary" id="daily_insert_btn">
									저장
								</button>
							</div>



							</form>
				
							
						</div><!-- /.modal-content -->
					</div><!-- /.modal-dialog -->
				</div><!-- /.modal -->




		<!--sujung_modal-->
				<div class="modal fade" id="sujung_daily_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
									&times;
								</button>
								<h4 class="modal-title" id="myModalLabel">근로자 수정</h4>
							</div>
							<div class="modal-body">
				
							<form id="sujungForm_daily" method="post" onsubmit="return false;">

									<fieldset>
										
										<div class="form-group">
											<div class="row">
												<div class="col-md-4">
													<label class="control-label">성명</label>
													<input type="text" class="form-control" name="oun_name" id="oun_name"/>
													<input type="hidden" class="form-control" id="daily_member_num"/>
												</div>

												<div class="col-md-4">
													<label class="control-label">단가</label>
													<input type="text" class="form-control" name="daily_salary" id="daily_salary"/>
												</div>	

												<div class="col-md-3 selectContainer">
													<label class="control-label">직종</label>
													<select class="form-control" name="job" id="job">
														<option value="">선택</option>
														<option value="반장">반장</option>
														<option value="함석">함석</option>
														<option value="보온">보온</option>
														<option value="비계">비계</option>
														<option value="일반">일반</option>
														<option value="여공">여공</option>
														<option value="용접">용접</option>
														<option value="기계">기계</option>
														<option value="제관">제관</option>
														<option value="기타">기타</option>		
													</select>
												</div>

												

												
											</div>
											
										</div>
									</fieldset>

									

									<fieldset>
										<div class="form-group">
											<div class="row">
												<div class="col-md-3">
													<label class="control-label">주민번호</label>													
													<input type="text" class="form-control" name="jumin1" id="jumin1" placeholder ="앞자리" >
												</div>

												<div class="col-md-3">
													<label class="control-label">&nbsp</label>													
													<input type="text" class="form-control" name="jumin2" id="jumin2"  placeholder ="뒷자리">
												</div>

												<div class="col-md-5 ">
													<label class="control-label">연락처</label>
													<input type="text" class="form-control"  name="oun_phone" id="oun_phone" />
													
												</div>

												
											</div>
										</div>
									</fieldset>

									
										<legend></legend>


									<fieldset>
										<div class="form-group">
											<div class="row">
												<div class="col-md-8">
													<label class="control-label">주소</label>
													<input type="text" class="form-control" name="address1" id="address1" >
													
												</div>
												<div class="col-md-4">
													<label class="control-label">우편번호</label>
													<input type="text" class="form-control" name="postnum" id="postnum" >
													
												</div>

												
												
											</div>
											<div class="row">
												

												<div class="col-md-12">
													<label class="control-label">상세주소</label>
													<input type="text" class="form-control" name="address2" id="address2">
													
												</div>
											</div>
										</div>
									</fieldset>
										<legend></legend>


									<fieldset>
										<div class="form-group">
											<div class="row">
												
												<div class="col-md-4">
													<label class="control-label">예금주</label>
													<input type="text" class="form-control" name="bank_name" id="bank_name">
												</div>
												

												
												
											</div>
											<div class="row">
												<div class="col-md-4">
													<label class="control-label">은행</label>
													<input type="text" class="form-control" name="bank" id="bank" >
													
												</div>

												<div class="col-md-8">
													<label class="control-label">계좌번호</label>
													<input type="text" class="form-control" name="bank_number" id="bank_number" >
												
													
												</div>
											</div>
										</div>
									</fieldset>
										<legend></legend>

										
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
								<button id="sujung_btn_trigger" class="btn btn-default" type="submit">
											<i class="fa fa-eye"></i>
											Validate
								</button>
								<button type="button" class="btn btn-default" data-dismiss="modal">
									취소
								</button>
								<button type="button" class="btn btn-primary" id="daily_sujung_btn">
									저장
								</button>
							</div>



							</form>
				
							
						</div><!-- /.modal-content -->
					</div><!-- /.modal-dialog -->
				</div><!-- /.modal -->

		