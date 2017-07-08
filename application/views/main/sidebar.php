		<!-- Left panel : Navigation area -->
		<!-- Note: This width of the aside area can be adjusted through LESS variables -->
		<aside id="left-panel">

			<!-- User info -->
			<div class="login-info">
				<span> <!-- User image size is adjusted inside CSS, it should stay as it --> 
					
					<a href="javascript:void(0);" id="show-shortcut" data-action="toggleShortcut">
						 
						<span>
							
							<?if($this->session->userdata('is_login')){?>
							
							<span><i class="fa fa-user fa-fw"></i><? echo $this->session->userdata('userName');?></span>
							<?}?>
						</span>
						<i class="fa fa-angle-down"></i>
					</a> 
					
				</span>
			</div>
			<!-- end user info -->

			<!-- NAVIGATION : This navigation is also responsive-->
			<nav>
				<!-- 
				NOTE: Notice the gaps after each icon usage <i></i>..
				Please note that these links work a bit different than
				traditional href="" links. See documentation for details.
				-->

				<ul>
					<li>
						<a><i class="fa fa-lg fa-fw fa-home"></i> <span class="menu-item-parent">Company</span></a>
						<ul>
							<li id="sidebar1">
								<a href="/topic" ><span class="menu-item-parent">회사 상황판</span></a>
							</li>
						
						</ul>	
					</li>
					
					<li>
						<a href="#"> <i class="fa fa-lg fa-fw fa-pencil-square-o"></i> <span class="menu-item-parent">New_Register</span></a>
						<ul>
							<li id="sidebar2">
								<a  href="/topic/new_register_hyunjang">현장등록</a>
							</li>
							<li id="sidebar3">
								<a href="/topic/new_register_daily_member">현장직등록</a>
							</li>							
							
						</ul>
					</li>
					
					<li>
						<a href="#"><i class="fa fa-lg fa-fw fa-table"></i> <span class="menu-item-parent">Enroll</span></a>
						<ul>
							<li id="sidebar4">
								<a href="/topic/enroll_danga">단가입력</a>
							</li>
							<li id="sidebar5">
								<a href="/topic/enroll_kosu">공수입력</a>
							</li>
							<li id="sidebar6">
								<a href="/topic/enroll_danga">결산</a>
							</li>
						</ul>
					</li>
					
						
					
						
					
						
					
					
				</ul>
			</nav>
			

			<span class="minifyme" data-action="minifyMenu"> 
				<i class="fa fa-arrow-circle-left hit"></i> 
			</span>

		</aside>
		<!-- END NAVIGATION 2017-05-11-->