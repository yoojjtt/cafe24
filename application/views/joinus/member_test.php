<body class="animated fadeInDown">



		<div id="main" role="main">

			<!-- MAIN CONTENT -->
			<div id="content" class="container">

					<div class="row col-md-5 ">
						<div class="well no-padding">
							<form  id="smart-form-register" class="smart-form client-form">
								<header>
									회원가입
								</header>

								<fieldset>
									
									<section>
										
										<label class="input"> <i class="icon-append fa fa-user" style="color:black;"></i>
											<input type="text" class="form-control" name="name" id="name" placeholder="성명">
											<b class="tooltip tooltip-top-right"><i class="fa fa-user txt-color-teal"></i> 성명을 입력하세요</b>
										</label>
									</section>

									<section>
										<label class="input"> <i class="icon-append  fa fa-envelope-square" style="color:black;"></i>
											<input type="email" class="form-control"  name="email" id="email" placeholder="E-mail">
											<b class="tooltip tooltip-top-right"><i class="fa fa-user txt-color-teal"></i> E-Mail을 입력하세요</b>
										</label>
									</section>
										
									<section>
										<label class="input"> <i id="idcheck" class="icon-append fa fa-search" style="color:red;"></i>
											
											<input type="text" class="form-control" name="user_id" id="user_id" placeholder="ID">
											<b class="tooltip tooltip-top-right"><i class="fa fa-search "></i> ID를 입력하세요</b>
										</label>
									</section>

									<section>
										<label class="input"> <i class="icon-append fa fa-lock" style="color:black;"></i>
											<input type="password" class="form-control" name="password" id="password" placeholder="password">
											<b class="tooltip tooltip-top-right"><i class="fa fa-user txt-color-teal"></i> 비밀번호를 입력하세요</b>
										</label>
									</section>

									<section>
										<label class="input"> <i class="icon-append  fa fa-mobile-phone" style="color:black;"></i>
											<input type="text" class="form-control" name="handphone" id="handphone" placeholder="핸드폰 ">
											<b class="tooltip tooltip-top-right"><i class="fa fa-user txt-color-teal"></i> 핸드번 번호를 입력하세요</b>
										</label>
									</section>
									
									<section>
										<label class="input"> 
											<input type="text"  class="form-control" name="address" id="address" placeholder="집 주소">
											<b class="tooltip tooltip-top-right"><i class="fa fa-user txt-color-teal"></i> 집 주소를 입력하세요</b>
										</label>
										<label class="input"> <i class="icon-append fa fa-home" style="color:black;"></i>
											<input type="text"  class="form-control" name="address" id="address" placeholder="상세 주소">
											<b class="tooltip tooltip-top-right"><i class="fa fa-user txt-color-teal"></i> 상세 주소를 입력하세요</b>
										</label>
									</section>
									
									<section>
										<label class="input"> 
											<input type="text" class="form-control" maxlength="6" name="jumin1" id="jumin1" placeholder="예)901231">
											<b class="tooltip tooltip-top-right"><i class="fa fa-user txt-color-teal"></i> 주민번호 앞자리</b>


										</label>
										<label class="input"> <i id="jumincheck" class="icon-append fa fa-search" style="color:red;"></i>
											<input type="text" class="form-control" maxlength="7" name="jumin2" id="jumin2" placeholder="1234567">
											<b class="tooltip tooltip-top-right"><i class="fa fa-user txt-color-teal"></i> 주민번호 뒷자리</b>


										</label>
									</section>

									
										
									<section >
										<label class="select">
											<select id="companyName" name="gender">
												<option value="0" selected="" disabled="">회사를 선택해주세요</option>
												<option>신규</option>
												
											</select> <i></i> </label>
									</section>
										
								


								</fieldset>

								<footer>
									<button id="joinus"  class="btn btn-primary"> 
										 가입
									</button>
								</footer>
							</form>

						</div>
						
						
						
					</div>
				</div>
			</div>

		</div>