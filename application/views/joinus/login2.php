<body>

		<div id="main" role="main">

			<!-- MAIN CONTENT -->

			<form class="lockscreen animated flipInY" action="/index.php/auth/authority" method="post" id="login-form">
				<?if( $this->session->flashdata('message')){?>
					<script>alert("<? echo $this->session->flashdata('message') ?>");</script>
				<?};?>
				<div class="logo">
					<h1 class="semi-bold">Haeinn Admin</h1>
				</div>
				<div>
					<!--<img src="/lib/img/logo.gif" alt="" width="100" height="100" />-->

					<div>
					
						<p class="no-margin margin-top-5">
							<div class="input-group">
								<input  class="form-control"id="id"name="id"  type="text" name="ID" placeholder="ID">
								<div class="input-group-btn">
									<button class="btn btn-primary" type="">
										<i class="fa fa-user "></i>
									</button>
								</div>
							</div>
						</p>



						<p class="no-margin margin-top-5">
						<div class="input-group">
							<input class="form-control"id="password" type="password" name="password" placeholder="Password">
							<div class="input-group-btn">
								<button class="btn btn-primary" type="">
									<i class="fa fa-lock"></i>
								</button>
							</div>
						</div>
						</p>
						
						<p class="no-margin margin-top-5">
							
							<span id="extr-page-header-space"> 
			
									<?
										$request_uri = $_SERVER['REQUEST_URI'];
									?>
								<?if($this->session->userdata('is_login')){?> <!-- 로그인 상태인 경우 2017-05-15 -->
								<div class="pull-right">

									<!-- logout button -->
									<div id="logout" class="btn-header transparent pull-right">
										<span> <a href="/auth/logout" title="Sign Out" data-action="userLogout" data-logout-msg="You can improve your security further after logging out by closing this opened browser"><i class="fa fa-sign-out"></i></a> </span>
									</div>
									<!-- end logout button -->

									<!-- collapse menu button -->
									<div id="hide-menu" class="btn-header pull-right">
										<span> <a href="javascript:void(0);" data-action="toggleMenu" title="Collapse Menu"><i class="fa fa-reorder"></i></a> </span>
									</div>
									<!-- end collapse menu -->

								</div>
								<!-- end pulled right: nav area -->



								<?}else{?> <!-- 로그인 상태가 아닌 경우, 로그인 페이지 or 회원가입페이지 2017-05-15-->
									<?if($request_uri== '/auth/member' ){?>
									<span class="hidden-mobile hiddex-xs">이미 계정이 있나요?</span> 
									<a href="/auth/login" class="btn btn-danger">로그인</a>
									
									
									<?}else{?>

									<span class="hidden-mobile hiddex-xs">처음 방문하셨나요?</span> 
									<a href="/auth/member" class="btn btn-danger btn-lg" >회원 가입</a>
									<input type="submit" class="btn btn-outline btn-info btn-lg" type="button" id="sign" value="로그인"/>
									<?}?>
								<?}?>
							</span> <!-- extr-page-header-space end -->

						</p>


						



					</div>

				</div>
				<p class="font-xs margin-top-5">
					Copyright Haeinn Admin 1998-2017.

				</p>
			</form>

		</div>