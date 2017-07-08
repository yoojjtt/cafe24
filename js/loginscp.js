<!--
 function IsID3(formname) {
     var form=eval("document.aform." + formname);

     if(form.value.length < 4 || form.value.length > 12) {
         return false;
     }
     for(var i=0; i < form.value.length; i++) {
         var chr = form.value.substr(i,1);
         if((chr < '0' || chr > '9') && (chr < 'a' || chr > 'z')) {
            return false;
         }
     }
     return true;
  }

 function check_in()
 {
		var obj
		obj = document.aform
		if (!obj.mem_id.value)
		{
			alert("아이디를  입력하세요.")
			obj.mem_id.focus()
			return false
		}

	if(!IsID3(obj.mem_id.name)) {
     alert("ID는 4~12자의 영문 소문자, 숫자 또는 조합된 문자열이어야 합니다.")
     obj.mem_id.focus()
     return false
 	 }

		if (!obj.passwd.value)
		{
			alert("비밀번호를  입력하세요.")
			obj.passwd.focus()
			return false
		}

			obj.action = "/csd/cs_member/member/proc_login.php"
			obj.submit()
}

	function edit_go()
	{
		var obj
		obj = document.aform
		obj.action = "/2005N/company/my_page.php"
		obj.submit()
	}

/* redirectURL(이전 페이지로 돌아가는 문제 때문에 잠시 막음)
	function checkLogout() {
	   var flag = false;
	   flag = window.confirm("모든작업을 종료하고 로그아웃 하시겠습니까?");
	   if(flag) {
	      var tURL = "/csd/cs_member/member/proc_logout.php"
	      window.open(tURL, '_top');
	   }
	   else {
	   }
	}
*/

	function checkLogout() {
		
		var obj
		obj = document.aform
		obj.action = "/csd/cs_member/member/proc_logout.php"
		obj.submit()
	}

	function clubChange() {
		obj = document.clubform
	 if(obj.c_num_t.options.value == 0){
	   return false
	 }
	 obj.action = "/2005N/club/club_main.php";
	 obj.submit()
   }

   function communityChange() {
		var obj = document.clubform
	 if(obj.c_num_t.options.value == 0){
	   return false
	 }
	 obj.action = "/2005N/community/club_main.php";
	 obj.submit()
   }

  function makeclub() {
  	var obj
	obj = document.aform
	obj.action = "/2005N/club/club_make.php"
	obj.submit()
	}

function makeclub_proc()
{
	var fobj;
	fobj = document.joinForm;

	if (!fobj.group_name.value)
	{
		alert('클럽 이름을 입력하세요');
		return false;

	}
	fobj.submit();
}


  function makecommunity() {
  	var obj
	obj = document.aform
	obj.action = "/2005N/community/community_new_make.php"
	obj.submit()
	}

function makecommunity_proc()
{
	var fobj;
	fobj = document.joinForm;

	if (!fobj.group_name.value)
	{
		alert('클럽 이름을 입력하세요');
		return false;

	}
	fobj.submit();
}

function formGo()
{
	var fobj;
	fobj = document.joinForm;

	if (!fobj.group_name.value)
	{
		alert('클럽 이름을 입력하세요');
		fobj.group_name.focus()
		return false;

	}
	fobj.submit();
}

function formGo_community()
{
	var fobj;
	fobj = document.joinForm;

	if (!fobj.group_name.value)
	{
		alert('커뮤니티 이름을 입력하세요');
		return false;

	}
	fobj.submit();
}
//위의 함수와 같은 것. 조금 수정
function formGo_community_2()
{
	var form;
	form = document.form1;

	if(!form.mail_front.value && form.emailsele.value == '0') {
     alert("이메일을 입력하세요.");
     form.mail_front.focus();
     return false;
  }

	if(form.mail_front.value && form.emailsele.value == '0') {
     alert("이메일 주소를 선택하세요.");
     form.emailsele.focus();
     return false;
  }

  	if(!form.mail_front.value && form.emailsele.value != '0' && form.emailsele.value != '1') {
     alert("이메일을 입력하세요.");
     form.mail_front.focus();
     return false;
  }

    if (form.emailsele.value == '1' && form.emailself.value.length == 0)
    {
        alert('이메일 주소를 입력하세요.');
        form.emailself.focus();
        return false;
    }

  if(!form.mail_front.value && form.emailsele.value==1 && form.emailself.value)
	{
	 var emailfull = form.emailself.value
	 if (emailfull)
	{
		if (!f_chkEmail(emailfull))
		{
			form.emailself.focus();
			return false;
		}
	}
	}
	else if(form.mail_front.value && form.emailsele.value && !form.emailself.value)
	{
	var emailfull = form.mail_front.value+"@"+form.emailsele.value
	if (emailfull)
	{
		if (!f_chkEmail(emailfull))
		{
			form.mail_front.focus();
			return false;
		}
	}
	}




	if(form.emailself.value)
	{
    var email_len_count = 0;
    for (i = 0; i < form.emailself.value.length; i ++)
    {
        if (form.emailself.value.charAt(i) == '@')
        email_len_count++;
    }
    if (email_len_count > 1)
    {
        alert('사용하실 수 없는 이메일 주소입니다.');
        form.emailself.focus();
        return false;
    }
  }

    if (form.emailsele.value == '1')
    {
        email_len_count = 0;
        for (i = 0; i < form.emailself.value.length; i ++)
        {
        if (form.emailself.value.charAt(i) == '@')
            email_len_count++;
        }
        if (email_len_count > 1)
        {
            alert('사용하실 수 없는 이메일 주소입니다.');
            form.emailself.focus();
            return false;
        }
    }

	if(!form.hphone1.value || !form.hphone2.value || !form.hphone3.value)
		{
         alert("휴대폰번호를 입력하셔야 합니다.");
         return false;
		}

	  if (form.postnum.value || form.address1.value || form.address2.value)
   		{
	      if(!(form.postnum.value && form.address1.value) && form.address2.value)
		{
         alert("주소찾기 버튼을 이용해 주소를 입력해 주시기 바랍니다.");
         form.address2.focus();
         return false;
		}
		 if((form.postnum.value && form.address1.value) && !form.address2.value)
		{
         alert("상세주소를 입력해 주시기 바랍니다.");
         form.address2.focus();
         return false;
		}
   	} else {
   		alert("주소찾기 버튼을 이용해 주소를 입력해 주시기 바랍니다.");
         form.address2.focus();
         return false;
        }

	if (!form.group_name.value)
	{
		alert('커뮤니티 이름을 입력하세요');
		form.group_name.focus();
		return false;
	}
	form.target ="";
	form.action = "proc_community_make.php";
	form.submit();
}
<!--
function admin_info(){
   var form = document.admin_info;
  if(!form.club_name.value) {
     alert("그룹명을 입력하세요!");
	 form.group_name.focus();
	 return ;
  }
  if(!form.menu_color.value) {
     alert("메뉴 배경색을 입력하세요!");
	 form.menu_color.focus();
	 return ;
  }
  if(!form.title_color.value) {
     alert("타이틀 배경색을 입력하세요!");
	 form.title_color.focus();
	 return ;
  }
  if(!form.msg.value) {
     alert("가입 메시지를 입력하세요!");
	 form.msg.focus();
	 return ;
  }
  form.submit();
 }

function admin_member(){
   var form = document.f;
 if(!(form.id_fk.value || form.name1.value)) {
     alert("삭제할 아이디 나 이름을 입력하세요!");
	 form.id_fk.focus();
	 return ;
  }
 form.submit();
}

function create_board1(){
   var form = document.f1;
   if(!form.board_name.value) {
     alert("생성할 게시판 이름을 입력하세요!");
	 form.board_name.focus();
	 return ;
   }
  form.submit();
}
function create_board1_confirm(){
   var form = document.f1;
    form.submit();
}
function create_vote_confirm(){
   var form = document.f;
    form.submit();
}
function mnt_send(){
  var form = document.f;
  if(!form.mnt.value) {
     alert("내용을 입력하세요!");
	 form.mnt.focus();
	 return ;
  }
  form.submit();
 }

function create_board2(){
  var form = document.f2;
  if(!form.board_name.value) {
     alert("수정할 게시판 이름을 입력하세요!");
	 form.board_name.focus();
	 return ;
  }
  form.submit();
}

function board_change(){
   var form = document.f2;
   form.action="admin_crt_board.php";
   form.submit();
}

function vote_change(){
   var form = document.f;
   form.action="admin_vote_mng.php";
   form.submit();
}


function create_vote(){
  var form = document.f;
  if(!form.subject.value){
      alert("제목를 입력하세요!");
 	  form.subject.focus();
  	  return;
	}


  if(!form.content1.value){
	  alert("보기1을 입력하세요!");
 	  form.content1.focus();
  	  return;
  }
  if(!form.content2.value){
	  alert("보기2를 입력하세요!");
 	  form.content2.focus();
  	  return;
  }

 //시작연도를 검사하는 부분
 	//연도를 검사하는 부분
 if(!form.startday1.value){
 		alert ("시작년도를 입력하여 주세요.");
     	form.startday1.focus();
    	 return ;
 	}

 if(form.startday1.value){
    var startday1 = form.startday1.value;
    if(startday1.length!=4){
    	alert ("시작 년도을 바로 입력해 주세요.");
     	form.startday1.focus();
    	 return ;
    	}

    if(!IsNumber(form.startday1.name)){
       alert("시작년도를 숫자로 적어주세요!");
       form.startday1.focus();
       return;
     }
    }

 	//월을 검사하는 부분
 if(!form.startday2.value){
 		alert ("시작월을 입력하여 주세요.");
     	form.startday2.focus();
    	 return ;
 	}

if(form.startday2.value){
    var startday2 = form.startday2.value;
    if(!startday2.length){
    	alert ("시작 월을 바로 입력해 주세요.");
     	form.startday2.focus();
    	 return ;
    	}

    if(!IsNumber(form.startday2.name)){
       alert("시작 월을 숫자로 적어주세요!");
       form.startday2.focus();
       return;
     }
    if((startday2 > 12)||(startday2<1)){
    	alert("1~12월을 입력하여주세요!");
       form.startday2.focus();
       return;
    	}
    }
    //일을 검사하는 부분
 if(!form.startday3.value){
 		alert ("시작일을 입력하여 주세요.");
     	form.startday3.focus();
    	 return ;
 	}

  if(form.startday3.value){
    var startday3 = form.startday3.value;
    if(!startday3.length){
    	alert ("시작 일을 바로 입력해 주세요.");
     	form.startday3.focus();
    	 return ;
    	}

    if(!IsNumber(form.startday3.name)){
       alert("시작 일을 숫자로 적어주세요!");
       form.startday3.focus();
       return;
     }
     if((startday3 > 32)||(startday3 < 1)){
    	alert("1~31일을 입력하여주세요!");
       form.startday3.focus();
       return;
    	}
    }

  //마감 연도를 검사하는 부분
  	//연도를 검사하는 부분

 if(!form.endday1.value){
 		alert ("마감년도를 입력하여 주세요.");
     	form.endday1.focus();
    	 return ;
 	}
 if(form.endday1.value){
    var endday1 = form.endday1.value;
    if(endday1.length!=4){
    	alert ("마감 년도을 바로 입력해 주세요.");
     	form.endday1.focus();
    	 return ;
    	}

    if(!IsNumber(form.endday1.name)){
       alert("마감년도를 숫자로 적어주세요!");
       form.endday1.focus();
       return;
     }
    }

 	//월을 검사하는 부분
    if(!form.endday2.value){
 		alert ("마감 월을 입력하여 주세요.");
     	form.endday2.focus();
    	 return ;
 	}
if(form.endday2.value){
    var endday2 = form.endday2.value;
    if(!endday2.length){
    	alert ("마감 월을 바로 입력해 주세요.");
     	form.endday2.focus();
    	 return ;
    	}

    if(!IsNumber(form.endday2.name)){
       alert("마감 월을 숫자로 적어주세요!");
       form.endday2.focus();
       return;
     }
    if((endday2 > 12)||(endday2<1)){
    	alert("1~12월을 입력하여주세요!");
       form.endday2.focus();
       return;
    	}
    }
    //일을 검사하는 부분
 if(!form.endday3.value){
 		alert ("마감일을 입력하여 주세요.");
     	form.endday3.focus();
    	 return ;
 	}
  if(form.endday3.value){
    var endday3 = form.endday3.value;
    if(!endday3.length){
    	alert ("마감 일을 바로 입력해 주세요.");
     	form.endday3.focus();
    	 return ;
    	}

    if(!IsNumber(form.endday3.name)){
       alert("마감 일을 숫자로 적어주세요!");
       form.endday3.focus();
       return;
     }
     if((endday3 > 32)||(endday3 < 1)){
    	alert("1~31일을 입력하여주세요!");
       form.endday3.focus();
       return;
    	}
    }

  form.submit();
}

function IsNumber(formname) {
   var form=eval("document.f." + formname);
   for(var i=0; i < form.value.length; i++) {
     var chr = form.value.substr(i,1);
	 if((chr < '0' || chr > '9')) {
       return false;
	 }
    }
  return true;
}

//클럽정보관리

var hexChars = "0123456789ABCDEF"; //10진수>16진수 변환에 쓸 문자열
var red = '';
var green = '';
var blue = '';

function getHex(dec) //10진수 16진수 변환
{
var temp1 = dec % 16; //16으로 나눈 나머지 저장
var temp2 = (dec - temp1) / 16;
var temp3 = hexChars.charAt(temp2) + hexChars.charAt(temp1); //각 위치의 문자열 결합
return temp3; //16진수 반환
}

function print(color)
{
var base = document.admin_info;

pick_color.innerHTML = '<table width=93 height=25 border=0 cellspacing=0 cellpadding=0 bgcolor='+color+'><tr><td></td></tr></table>';
base.menu_color.value = '#'+color;
}

function color()
{
var color_table = '<table border=0 cellpadding=0 cellspacing=0>';
for(color_x=1; color_x < 256/8; color_x++)
{
color_table += '<tr>';
for(color_y=1; color_y < 256/8; color_y++)
{
red = getHex(color_x*8);
green = getHex(color_y*8);
blue = getHex(256-color_x*8);
color = red+green+blue;

color_table += "<td width=3 height=3 bgcolor="+color+" onMouseOver=print('"+color+"'); OnClick=javascript:color_show('off');>";
}
color_table += '</tr>';
}
color_table += '</table>';
color_layer.innerHTML = color_table;
}

function color_show(state)
{
var base = document.admin_info;

if(state == 'on')
{
color_layer.style.display='block';
if(base.color_made.value == '0')
{
color();
base.color_made.value='1';
}
}
else
{
color_layer.style.display='none';
}
}





function print2(color)
{
var base = document.admin_info;

pick_color2.innerHTML = '<table width=93 height=25 border=0 cellspacing=0 cellpadding=0 bgcolor='+color+'><tr><td></td></tr></table>';
base.title_color.value = '#'+color;
}

function color2()
{
var color_table = '<table border=0 cellpadding=0 cellspacing=0>';
for(color_x=1; color_x < 256/8; color_x++)
{
color_table += '<tr>';
for(color_y=1; color_y < 256/8; color_y++)
{
red = getHex(color_x*8);
green = getHex(color_y*8);
blue = getHex(256-color_x*8);
color = red+green+blue;

color_table += "<td width=3 height=3 bgcolor="+color+" onMouseOver=print2('"+color+"'); OnClick=javascript:color_show2('off');>";
}
color_table += '</tr>';
}
color_table += '</table>';
color_layer2.innerHTML = color_table;
}

function color_show2(state)
{
var base = document.admin_info;

if(state == 'on')
{
color_layer2.style.display='block';
if(base.color_made2.value == '0')
{
color2();
base.color_made2.value='1';
}
}
else
{
color_layer2.style.display='none';
}
}


function member_1_01()
{
	var form = document.member_intro


	form.action="./member_1_01.php?mode=1";
	form.submit();


}
function member_2_01()
{
	var form = document.member_intro


	form.action="./member_2_01.php?mode=2";
	form.submit();


}


function member_1_01()
{
	var fobj = document.findForm
	if (!fobj.agree.checked)
	{
		alert('회원가입 약관에 동의하셔야 합니다.')
		fobj.agree.focus()
		return false
	}
	fobj.action="./member_1_02.php"
	fobj.submit()
}
function findId() {
	var fobj = document.findForm
	fobj.action="./member_id_01.php"; //아이디 찾기
	fobj.submit()
}

function Password()
{
	var fobj = document.findForm
	fobj.action="./member_pass_01.php"//비번 찾기
	fobj.submit()
}

function changemember() {
	if(document.changemem.msort.options.value)
	{
		document.changemem.submit()
	}
}
 function cs_mem_join()
{
	var fobj = document.findForm
	fobj.action="./m_search_post.php"//회원가입
	fobj.submit()
}
//관리자등록
function manager_register_01(u_id)
	{

			if(confirm("관리자 등록 모드로  이동 하시겠습니까?"))
			{
				document.changemem.action = "admin_manager_register.php?num="+u_id;
				document.changemem.submit();
			}

	}

function manager_search_go() {

				document.changemem.action = "admin_manager_search.php";
				document.changemem.submit();
	}

function admin_open1(ctvalue)
	{
		var winl = (screen.width - 1024) / 2
		var wint = (screen.height - 768) / 2
		window.open('../../csd/club/register/check_register.php?c_num_t='+ctvalue,'Virtual','left='+winl+',top='+wint+',resizable=yes,width=1016,height=710,scrollbars=yes,status=yes')
	}
/*	
function admin_new_open(){
		var winl = (screen.width - 1024) / 2
		var wint = (screen.height - 768) / 2
				window.open('','bogan','Virtual','left='+winl+',top='+wint+',resizable=yes,width=1016,height=710,scrollbars=yes,status=yes')
				document.aform.target = 'bogan'
				document.aform.action = '../../csd/club/register/check_register.php'
				document.aform.submit();
			}
*/
function admin_open2()
	{
		var winl = (screen.width - 1024) / 2
		var wint = (screen.height - 768) / 2
		window.open('../../csd/hq/hq_insurance/fee_register.php','Union','left='+winl+',top='+wint+',resizable=yes,width=1016,height=710,scrollbars=yes,status=yes')
	}

function admin_open3(ctvalue)
	{
		var winl = (screen.width - 1024) / 2
		var wint = (screen.height - 768) / 2
		window.open('../../csd/club/register/if_register.php?ctvalue='+ctvalue,'Aormal','left='+winl+',top='+wint+',resizable=yes,width=1016,height=710,scrollbars=yes,status=yes')
	}


/********           CapsLock Notice         ****************/
function checkCapsLock() {
    var pwd = document.aform.passwd.value.length;
    if (pwd > 0) return;

    var e = event;
    var myKeyCode=0;
    var myShiftKey=false;

    if ( document.all ) {                   // Internet Explorer 4+
        myKeyCode=e.keyCode; 
        myShiftKey=e.shiftKey;
    } else if ( document.layers ) {         // Netscape 4
        myKeyCode=e.which;  
        myShiftKey=( myKeyCode == 16 ) ? true : false;
    } else if ( document.getElementById ) { // Netscape 6
        myKeyCode=e.which; 
        myShiftKey=( myKeyCode == 16 ) ? true : false;
    }
    //alert(myKeyCode+","+myShiftKey)
    //capslockNotice();
    // Upper case letters are seen without depressing the Shift key, therefore Caps Lock is on
    //대문자
    if ( ( myKeyCode >= 65 && myKeyCode <= 90 ) && !myShiftKey ) {
    	capslockNotice();
        setCapslockInfoOn();
    // Lower case letters are seen while depressing the Shift key, therefore Caps Lock is on
    //소문자
    } else if ( ( myKeyCode >= 97 && myKeyCode <= 122 ) && myShiftKey ) {
        setCapslockInfOn();
    }
}
function setCapslockInfoOn() {
    position();
    document.getElementById('CapslockInfo').style.display  = "inline";
    setTimeout("setCapslockInfoOff()",4000 );
}
function setCapslockInfoOff() {
    document.getElementById('CapslockInfo').style.display  = "none";
    document.all.capslockNotice.style.display = "none";
}
function position() {
    var o = document.getElementById("CapslockInfo");
    var ref = document.getElementById("pwdObj");
    if ( typeof(o)=="object" && typeof(ref)=="object" ) {
        var x = getRealX(ref);
        var y = getRealY(ref);
        o.style.pixelLeft = x-55;
        o.style.pixelTop = y+13;
        o.style.pixelLeft = -6;
        o.style.pixelTop = 70;
    }
}
function getRealX(obj) {
    if ( obj.offsetParent == null ) return 0;
    return obj.offsetLeft + obj.clientLeft + getRealX(obj.offsetParent);
}
function getRealY(obj) {
    if ( obj.offsetParent == null ) return 0;
    return obj.offsetTop + obj.clientTop + getRealY(obj.offsetParent);
}
function capslockNotice(){
    noticestr = '<img src="http://wstatic.naver.com/w5/capslock_fin.gif">';
    document.all.capslockNotice.innerHTML = noticestr;
}