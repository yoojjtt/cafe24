<?if($this->session->userdata('is_login') !== TRUE ){ 	header("location:/auth/logout");}?>
<!-- 만약 세션값이 없다면 로그아웃페이지로 이동 -->

			<!-- HEADER -->
		<header id="header">
			<div id="logo-group">

				<!-- PLACE YOUR LOGO HERE -->
				<span id="logo"> 
					<?if($this->session->userdata('is_login')){?>
						<strong id="com_info" style="color:black;"><?echo $this->session->userdata('companyName')?></strong>
					<?}else{?>
						<strong id="com_info" style="color:black;">Haeinn Admin</strong>
					<?}?>
				</span>
				<!-- END LOGO PLACEHOLDER -->

				<!-- Note: The activity badge color changes when clicked and resets the number to 0
				Suggestion: You may want to set a flag when this happens to tick off all checked messages / notifications -->
			

				<!-- AJAX-DROPDOWN : control this dropdown height, look and feel from the LESS variable file -->
			
			</div>

		

			

			<!-- pulled right: nav area -->
			<div class="pull-right">
		


				<!-- collapse menu button -->
				<div id="hide-menu" class="btn-header pull-right">
					<span> <a href="javascript:void(0);" data-action="toggleMenu" title="Collapse Menu"><i class="fa fa-reorder"></i></a> </span>
				</div>
				<!-- end collapse menu -->
				
				
				<!-- logout button -->
				<div id="logout" class="btn-header transparent pull-right">
					<span> <a href="/auth/logout" title="Sign Out" data-action="userLogout" data-logout-msg="정말로 로그아웃 하시겟습니까?"><i class="fa fa-sign-out"></i></a> </span>
				</div>
				<!-- end logout button -->
					
							
				
				<!-- fullscreen button -->
				<div id="fullscreen" class="btn-header transparent pull-right">
					<span> <a href="javascript:void(0);" data-action="launchFullscreen" title="Full Screen"><i class="fa fa-arrows-alt"></i></a> </span>
				</div>
				<!-- end fullscreen button -->
				
				

				

			</div>
			<!-- end pulled right: nav area -->

		</header>
		<!-- END HEADER -->

	