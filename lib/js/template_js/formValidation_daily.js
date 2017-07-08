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

		// insert form
		$('#insertForm_daily').bootstrapValidator({
			feedbackIcons : {
				valid : 'glyphicon glyphicon-ok',
				invalid : 'glyphicon glyphicon-remove',
				validating : 'glyphicon glyphicon-refresh'
			},
			fields : {
				oun_name_i : {
					
					validators : {
						notEmpty : {
							message : '성명을 입력하세요.'
						},
						stringLength : {
							max : 30,
							message : '30자를 넘지말아 주세요'
						},								
					}
				},	
				daily_salary_i : {
					
					validators : {
						
						numeric : {
							message : '반드시 숫자여야 합니다.'
							},
						stringLength : {
							max : 30,
							message : '30자를 넘지말아 주세요'
						},								
					}
				},						
				job_i : {
					
					validators : {
						notEmpty : {
							message : '직종을 선택해주세요.'
						},
						stringLength : {
							max : 20,
							message : '20자를 넘지말아 주세요'
						}
					}
				},
				jumin1_i : {
					
					validators : {
						notEmpty : {
							message : '주민번호 앞자리를 적어주세요.'
						},
						stringLength : {
							max : 6,
							message : '6자를 넘지말아 주세요'
						}
					}
				},
				jumin2_i : {
					
					validators : {
						notEmpty : {
							message : '주민번호 뒷자리를 적어주세요.'
						},
						stringLength : {
							max : 7,
							message : '7자를 넘지말아 주세요'
						}
					}
				},
				oun_phone_i : {
					
					validators : {
						notEmpty : {
							message : '연락처를 적어주세요.'
						},
						stringLength : {
							max : 13,
							message : '13자를 넘지말아 주세요'
						}
					}
				},
				address1_i : {
					
					validators : {
						notEmpty : {
							message : '주소를 적어주세요.'
						},
						stringLength : {
							max : 30,
							message : '30자를 넘지말아 주세요'
						}
					}
				},
				address2_i : {
					
					validators : {
						notEmpty : {
							message : '상세주소를 적어주세요.'
						},
						stringLength : {
							max : 50,
							message : '50자를 넘지말아 주세요'
						}
					}
				},
				postnum_i : {
					
					validators : {
						notEmpty : {
							message : '우편번호를 적어주세요.'
						},
						stringLength : {
							max : 20,
							message : '20자를 넘지말아 주세요'
						}
					}
				},
				bank_name_i : {
					
					validators : {
						notEmpty : {
							message : '예금주를 적어주세요.'
						},
						stringLength : {
							max : 20,
							message : '20자를 넘지말아 주세요'
						}
					}
				},
				bank_i : {
					
					validators : {
						notEmpty : {
							message : '은행을 적어주세요.'
						},
						stringLength : {
							max : 20,
							message : '20자를 넘지말아 주세요'
						}
					}
				},
				bank_number_i : {
					
					validators : {
						notEmpty : {
							message : '계좌번호를 적어주세요.'
						},
						stringLength : {
							max : 20,
							message : '20자를 넘지말아 주세요'
						}
					}
				},
				rating_i : {							
					validators : {
						choice: {
                        min: 0,
                        max: 3,
                        message: 'Please choose 1 - 3 '
                    }
					}
				}

	
			
				
				
			} //field end
		
		});	// end insert form 2017-05-21

		// insert form
		$('#sujungForm_daily').bootstrapValidator({
			feedbackIcons : {
				valid : 'glyphicon glyphicon-ok',
				invalid : 'glyphicon glyphicon-remove',
				validating : 'glyphicon glyphicon-refresh'
			},
			fields : {
				oun_name : {
					
					validators : {
						notEmpty : {
							message : '성명을 입력하세요.'
						},
						stringLength : {
							max : 30,
							message : '30자를 넘지말아 주세요'
						},								
					}
				},	
				daily_salary : {
					
					validators : {
						
						numeric : {
							message : '반드시 숫자여야 합니다.'
							},
						stringLength : {
							max : 30,
							message : '30자를 넘지말아 주세요'
						},								
					}
				},						
				job : {
					
					validators : {
						notEmpty : {
							message : '직종을 선택해주세요.'
						},
						stringLength : {
							max : 20,
							message : '20자를 넘지말아 주세요'
						}
					}
				},
				jumin1 : {
					
					validators : {
						notEmpty : {
							message : '주민번호 앞자리를 적어주세요.'
						},
						stringLength : {
							max : 6,
							message : '6자를 넘지말아 주세요'
						}
					}
				},
				jumin2 : {
					
					validators : {
						notEmpty : {
							message : '주민번호 뒷자리를 적어주세요.'
						},
						stringLength : {
							max : 7,
							message : '7자를 넘지말아 주세요'
						}
					}
				},
				oun_phone : {
					
					validators : {
						notEmpty : {
							message : '연락처를 적어주세요.'
						},
						stringLength : {
							max : 13,
							message : '13자를 넘지말아 주세요'
						}
					}
				},
				address1 : {
					
					validators : {
						notEmpty : {
							message : '주소를 적어주세요.'
						},
						stringLength : {
							max : 30,
							message : '30자를 넘지말아 주세요'
						}
					}
				},
				address2 : {
					
					validators : {
						notEmpty : {
							message : '상세주소를 적어주세요.'
						},
						stringLength : {
							max : 50,
							message : '50자를 넘지말아 주세요'
						}
					}
				},
				postnum : {
					
					validators : {
						notEmpty : {
							message : '우편번호를 적어주세요.'
						},
						stringLength : {
							max : 20,
							message : '20자를 넘지말아 주세요'
						}
					}
				},
				bank_name : {
					
					validators : {
						notEmpty : {
							message : '예금주를 적어주세요.'
						},
						stringLength : {
							max : 20,
							message : '20자를 넘지말아 주세요'
						}
					}
				},
				bank : {
					
					validators : {
						notEmpty : {
							message : '은행을 적어주세요.'
						},
						stringLength : {
							max : 20,
							message : '20자를 넘지말아 주세요'
						}
					}
				},
				bank_number : {
					
					validators : {
						notEmpty : {
							message : '계좌번호를 적어주세요.'
						},
						stringLength : {
							max : 20,
							message : '20자를 넘지말아 주세요'
						}
					}
				},
				rating : {							
					validators : {
						choice: {
                        min: 0,
                        max: 3,
                        message: 'Please choose 1 - 3 '
                    }
					}
				}

	
			
				
				
			} //field end
		
		});	// end insert form 2017-05-21


		



	}); // document end