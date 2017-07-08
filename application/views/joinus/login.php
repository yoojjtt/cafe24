


	<div class="center">
			<div id="main" role="main">

				<!-- MAIN CONTENT -->
				<div id="content" class="container">
						
					<div class="row col-md-5">
						<div class="well no-padding">
							
							<form action="/index.php/auth/authority" method="post" id="login-form" class="smart-form client-form">
								<?if( $this->session->flashdata('message')){?>
									<script>alert("<? echo $this->session->flashdata('message') ?>");</script>
								<?};?>
								
								<header>
									로그인
								</header>

								<fieldset>
									
									<section>
										
										<label class="input"> <i class="icon-append fa fa-user"></i>
											<input  id="id"name="id"  type="text" name="ID" placeholder="ID">
											<b class="tooltip tooltip-top-right"><i class="fa fa-user txt-color-teal"></i> ID를 입력해주세요</b>
										</label>
									</section>

									<section>
										
										<label class="input"> <i class="icon-append fa fa-lock"></i>
											<input id="password" type="password" name="password" placeholder="Password">
											<b class="tooltip tooltip-top-right"><i class="fa fa-lock txt-color-teal"></i> 비밀번호를 입력해주세요</b> 
										</label>

										<div class="note">
											<a href="#">Forgot password?</a>
										</div>
									</section>

									<section>
										<label class="checkbox">
											<input type="checkbox" name="remember" checked="">
											<i></i>Stay signed in</label>
									</section>
								</fieldset>
								<footer>
									<input type="submit" class="btn btn-outline btn-info btn-lg" type="button" id="sign" value="Login"/>
								</footer>
							</form>

						</div> <!-- well no-padding end -->
					</div><!-- row col-md-5 end-->

				</div><!-- MAIN CONTENT end --> 
			</div><!-- main end -->

	</div> <!-- center end -->
	