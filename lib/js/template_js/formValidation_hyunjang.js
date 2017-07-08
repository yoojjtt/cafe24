$(document).ready(function() {
			 	
		/* DO NOT REMOVE : GLOBAL FUNCTIONS!
		 *
		 * pageSetUp(); WILL CALL THE FOLLOWING FUNCTIONS
		 *
		 * // activate tooltips
		 * $("[rel=tooltip]").tooltip();
		 *
		 * // activate popovers
		 * $("[rel=popover]").popover();
		 *
		 * // activate popovers with hover states
		 * $("[rel=popover-hover]").popover({ trigger: "hover" });
		 *
		 * // activate inline charts
		 * runAllCharts();
		 *
		 * // setup widgets
		 * setup_widgets_desktop();
		 *
		 * // run form elements
		 * runAllForms();
		 *
		 ********************************
		 *
		 * pageSetUp() is needed whenever you load a page.
		 * It initializes and checks for all basic elements of the page
		 * and makes rendering easier.
		 *
		 */
		
		 pageSetUp();
		 
		/*
		 * ALL PAGE RELATED SCRIPTS CAN GO BELOW HERE
		 * eg alert("my home function");
		 * 
		 * var pagefunction = function() {
		 *   ...
		 * }
		 * loadScript("js/plugin/_PLUGIN_NAME_.js", pagefunction);
		 * 
		 * TO LOAD A SCRIPT:
		 * var pagefunction = function (){ 
		 *  loadScript(".../plugin.js", run_after_loaded);	
		 * }
		 * 
		 * OR
		 * 
		 * loadScript(".../plugin.js", run_after_loaded);
		 */

		// pagefunction

		// clears the variable if left blank

		// movie form
		$('#sujungForm').bootstrapValidator({
			feedbackIcons : {
				valid : 'glyphicon glyphicon-ok',
				invalid : 'glyphicon glyphicon-remove',
				validating : 'glyphicon glyphicon-refresh'
			},
			fields : {
				hyun_jang_name : {
					group : '.col-md-8',
					validators : {
						notEmpty : {
							message : '현장명은 필수사항 입니다.'
						},
						stringLength : {
							max : 30,
							message : '30자를 넘지말아 주세요'
						},								
					}
				},	
				kosaName : {
					group : '.col-md-6',
					validators : {
						notEmpty : {
							message : '현장내용을 입력하세요'
						},
						stringLength : {
							max : 30,
							message : '30자를 넘지말아 주세요'
						},								
					}
				},						
				balju_company : {
					group : '.col-md-4',
					validators : {
						notEmpty : {
							message : '발주회사명은 필수사항 입니다.'
						},
						stringLength : {
							max : 20,
							message : '20자를 넘지말아 주세요'
						}
					}
				},
				bogoja : {
					bogoja : '.col-md-3',
					validators : {
						notEmpty : {
							message : '책임자는 필수사항 입니다.'
						},
						stringLength : {
							max : 10,
							message : '10자를 넘지말아 주세요'
						}
					}
				},
				kosa_name : {
					group : '.col-md-8',
					validators : {
						notEmpty : {
							message : '공사내용을 적어주세요.'
						},
						stringLength : {
							max : 80,
							message : '80자를 넘지말아 주세요'
						}
					}
				},
				hyun_jang_number : {
					group : '.col-md-4',
					validators : {
						notEmpty : {
							message : '관리번호를 적어주세요'
						},
						stringLength : {
							max : 15,
							message : '15자를 넘지말아 주세요'
						}
					}
				},
			
				
				
			} //field end
		
		});	// end movie form


		// insert form

		$('#insertForm').bootstrapValidator({
			feedbackIcons : {
				valid : 'glyphicon glyphicon-ok',
				invalid : 'glyphicon glyphicon-remove',
				validating : 'glyphicon glyphicon-refresh'
			},
			fields : {
				hyun_jang_name_i : {
					group : '.col-md-8',
					validators : {
						notEmpty : {
							message : '현장명은 필수사항 입니다.'
						},
						stringLength : {
							max : 30,
							message : '30자를 넘지말아 주세요'
						},								
					}
				},	
				kosaName_i : {
					group : '.col-md-6',
					validators : {
						notEmpty : {
							message : '현장내용을 입력하세요'
						},
						stringLength : {
							max : 30,
							message : '30자를 넘지말아 주세요'
						},								
					}
				},						
				balju_company_i : {
					group : '.col-md-4',
					validators : {
						notEmpty : {
							message : '발주회사명은 필수사항 입니다.'
						},
						stringLength : {
							max : 20,
							message : '20자를 넘지말아 주세요'
						}
					}
				},
				bogoja_i : {
					bogoja : '.col-md-3',
					validators : {
						notEmpty : {
							message : '책임자는 필수사항 입니다.'
						},
						stringLength : {
							max : 10,
							message : '10자를 넘지말아 주세요'
						}
					}
				},
				kosa_name_i : {
					group : '.col-md-8',
					validators : {
						notEmpty : {
							message : '공사내용을 적어주세요.'
						},
						stringLength : {
							max : 80,
							message : '80자를 넘지말아 주세요'
						}
					}
				},
				hyun_jang_number_i : {
					group : '.col-md-4',
					validators : {
						notEmpty : {
							message : '관리번호를 적어주세요'
						},
						stringLength : {
							max : 15,
							message : '15자를 넘지말아 주세요'
						}
					}
				},
			
			}
		});

		// end insert form



	}); // document end