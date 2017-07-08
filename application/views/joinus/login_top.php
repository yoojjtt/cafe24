<body class="smart-style-2"> <!-- 전체 design class 적용시킬 때 쓸 것 2017-05-15 -->

<header id="header" >

		<div id="logo-group" >
			<strong id="com_info" style="color:black;">
				<h2>
						<?if($this->session->userdata('is_login')){?>
							<?echo $this->session->userdata('companyName')?>
						<?}else{?>
							Haeinn Admin
						<?}?>
				</h2>
			</strong>
			<!--<span id="logo"> <img src="/lib/HTML_Full_Version/img/logo.png" alt="smart admin"> </span>-->
		</div> <!-- logo-group end 2017-05-15 -->

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
				<a href="/auth/member" class="btn btn-danger">회원 가입</a>
				<?}?>
			<?}?>
		</span> <!-- extr-page-header-space end -->

</header>
