<!--

if (document.getElementById)
{
document.write('<style type="text/css">\n')
document.write('.sub{display: none;}\n')
document.write('</style>\n')
}

function Switch(su) {
  if(document.getElementById){
  		var el = document.getElementById(su);
  		var ar = document.getElementById("main").getElementsByTagName("span");
      if(el.style.display != "block"){
              for (var i=0; i<ar.length; i++){
                      if (ar[i].className=="sub")
                      ar[i].style.display = "none";
             				 }
              el.style.display = "block";
      				}
			else	{
              el.style.display = "none";
						}
			}
	}










function customer(){
	document.join_cs.action = './community_m_register.php?mode=1'
	document.join_cs.submit()
}


function driver(){
	document.join_cs.action = './community_member_search.php?mode=2'
	document.join_cs.submit()
}

function nameCheck01_id(){
	var fobj;
	form = document.findForm;
  if(!form.id.value) {
     alert("���̵�(ID)�� �Է��ϼ���.")
     form.id.focus()
     return false;
  }
  if(!IsID_a(form.id.name)) {
     alert("ID�� 4~12���� ���� �ҹ���, ���� �Ǵ� ���յ� ���ڿ��̾�� �մϴ�.")
     form.id.focus()
     form.id.select()
     return false
  }
if(nameCheck01()!=false){
	return true;
}else{
	return false;
}
}


  function IsID_a(formname) {
     var form=eval("document.findForm." + formname);

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
//join_ch_start
function nameCheck01()
{
	var fobj;
	fobj = document.findForm;

	if (!fobj.name.value)
	{
		alert('�̸��� �Է��ϼ���');
		fobj.name.focus()
		return false;
	}


	if (!f_chkNoNum(fobj.name.value))
	{
		alert("�̸��� ���ڴ� ���Ե� �� �����ϴ�.");
		return false;
	}


	if(getLength(trim(fobj.name.value)) <= 0)
	{
		alert('�̸��� �Է��ϼ���.');
		fobj.name.focus();
		return false;
	}


	if (fobj.name.value.length < 2)
	{
	     alert("�̸��� �α��� �̻��̿��� �մϴ�.");
         fobj.name.focus();
         return false;
	}

	if(getLength(trim(fobj.name.value)) < 2)
	{
		alert('�̸��� �α��� �̻��̿��� �մϴ�.');
		fobj.name.focus();
		return false;
	}


	if(!stringcheck(fobj.name.value))
	{
		alert('�ùٸ� �̸��� �Է��� �ֽñ� �ٶ��ϴ�.');
		fobj.name.focus();
		return false;
	}



	if (!fobj.jumin1.value)
	{
		alert('�ֹε�Ϲ�ȣ ���ڸ��� �Է��ϼ���');
		fobj.jumin1.focus()
		return false;
	}


      if(!IsNumber2(fobj.jumin1.name))
	 {
         alert("�ֹε�Ϲ�ȣ�� ���ڿ��� �մϴ�.");
         fobj.jumin1.focus();
         return false;
      }


		if (!fobj.jumin2.value)
	{
		alert('�ֹε�Ϲ�ȣ ���ڸ��� �Է��ϼ���');
		fobj.jumin2.focus()
		return false;
	}


      if(!IsNumber2(fobj.jumin2.name))
	{
         alert("�ֹε�Ϲ�ȣ�� ���ڿ��� �մϴ�.");
         fobj.jumin2.focus();
         return false;
      }



var chk =0
var yy = fobj.jumin1.value.substring(0,2)
var mm = fobj.jumin1.value.substring(2,4)
var dd = fobj.jumin1.value.substring(4,6)
var sex = fobj.jumin2.value.substring(0,1)

if ((fobj.jumin1.value.length!=6)||(yy <25||mm <1||mm>12||dd<1)){
alert ("�ֹε�Ϲ�ȣ�� ��Ȯ�� �Է��Ͽ� �ֽʽÿ�.");
fobj.jumin1.focus();
return false;
}

if ((sex != 1 && sex !=2 )||(fobj.jumin2.value.length != 7 )){
alert ("�ֹε�Ϲ�ȣ�� ��Ȯ�� �Է��Ͽ� �ֽʽÿ�.");
fobj.jumin2.focus();
return false;
}

for (var i = 0; i <=5 ; i++){
chk = chk + ((i%8+2) * parseInt(fobj.jumin1.value.substring(i,i+1)))
}

for (var i = 6; i <=11 ; i++){
chk = chk + ((i%8+2) * parseInt(fobj.jumin2.value.substring(i-6,i-5)))
}

chk = 11 - (chk %11)
chk = chk % 10

if (chk != fobj.jumin2.value.substring(6,7))
{
alert ("��ȿ���� ���� �ֹε�Ϲ�ȣ�Դϴ�.");
fobj.jumin1.focus();
return false;
}

            function limitjoin()
			{
                var fobj= document.findForm;
                var jumin1 = fobj.jumin1.value;
				var jumin2 = fobj.jumin2.value;
				var birthYear=jumin1.substr(0,2);
				var bm=jumin1.substr(2,2);
				var bd=jumin1.substr(4,2);
				var b21c=jumin2.substr(0,1);
				var today = new Date();
				ty = today.getFullYear();
				tm = today.getMonth()+1;
				td = today.getDate();

				if(tm<10)
				tm = "0" + tm;
				if(td<10)
				 td = "0" + td;

				var chkYear = "";

				if (b21c >= '3')
				{
					chkYear = "20"+birthYear;
				} else
				{
					chkYear = "19"+birthYear;
				}

				var now_date = String(ty)+String(tm)+String(td)

				var user_old = String(chkYear)+String(bm)+String(bd)
				var result_old = now_date - user_old
				var result_old_age = String(result_old).substr(0,2)
				if(result_old_age < 18)
				{
				  alert("���ϴ� ��18���̸����� ȸ�������� �Ͻ� �� �����ϴ�.");
				  return false;
				}
				return true;
            }




 if(limitjoin() == false) return false;





function IsNumber2(formname)
{
     var form=eval("document.findForm." + formname);

     for(var i=0; i < form.value.length; i++)
	{
         var chr = form.value.substr(i,1);
         if((chr < '0' || chr > '9'))
		{
            return false;
         }
     }
     return true;
  }




}

function focus_move_jumin()
{
 var str = document.findForm.jumin1.value.length;
  if(str == 6)
    document.findForm.jumin2.focus();
}

//join_ch_end










function focus_move(){
 var str = document.form1.jumin1.value.length;
  if(str == 6)
    document.form1.jumin2.focus();
}
function focus_email(){
 var str = document.form1.jumin2.value.length;
  if(str == 7)
    document.form1.email.focus();
}
function focus_hphone2(){
 var str = document.form1.hphone2.value.length;
  if(str == 4)
    document.form1.hphone3.focus();
}
function focus_hphone3(){
 var str = document.form1.hphone3.value.length;
  if(str == 4)
    document.form1.phone1.focus();
}
function focus_phone2(){
 var str = document.form1.phone2.value.length;
  if(str == 4)
    document.form1.phone3.focus();
}
function page_send(page_value){
   var form = document.form1;
   form.page.value=page_value;
   form.submit();
 }


	function f_OpenModalPop(Name,Action,bScroll,width, height) {
		var w, h;
		w = width;
		h = height;
		var strURL = Action;
		var bStatus = Status;
		var objArgu = new Object();
		objArgu.Width = w;
		objArgu.Height = h;
		objArgu.Action = Action;
		var objWin = f_OpenModal(strURL,objArgu,h,w,0,0,0,1,0,0,0,bScroll,0);
		return objWin;
	}




	function f_InitSetModal(objPara) {
		if(typeof(objPara)=='object') {
			var nWidth = objPara.Width;
			var nHeight = objPara.Height;
			var strAction = objPara.Action;
			var arrArgu = new Array(true,nWidth,nHeight,strAction);
		} else {
			var arrArgu = new Array(false,0,0,'None');
		}
		return arrArgu;
	}


	function f_OpenModal(strURL,arrArguVal,nHeight,nWidth,nTop,nLeft,bEdge,bCenter,bHelp,bResiz,bStatus,bScroll,bUnadorned) {
		var strTop = '';
		if(nTop > 0) {
			strTop = 'dialogTop:'+nTop+'px;';
		}
		var strLeft = '';
		if(nLeft > 0) {
			strLeft = 'dialogLeft:'+nLeft+'px;';
		}
		var strEdge = '';
		if(bEdge != '') {
			strEdge = "edge:";
			strEdge += (bEdge > 0) ? 'raised' : 'sunken';
			strEdge += ';';
		}
		var objArgu = new Object();
		objArgu.objWin = self;
		objArgu.objParam = arrArguVal;
		var objWin = window.showModalDialog(strURL,objArgu,"dialogHeight:"+nHeight+"px;dialogWidth:"+nWidth+"px;"+strTop+strLeft+strEdge+"center:"+bCenter+";help:"+bHelp+";resizable:"+bResiz+";status:"+bStatus+";scroll:"+bScroll+";unadorned:"+bUnadorned+";");
		return objWin;
	}

	function f_GetArgu() {
		var oMyObject = window.dialogArguments;
		return oMyObject;
	}




function findAddr()
{
	var url
	url = "/csd/cs_member/member/find_address.php?mode=def"
	f_OpenModalPop("AddressFind",url,1,456,380)
}




function changemail()
{
    var emailsele = document.form1.emailsele.value

    if (emailsele == '1')
    {
        document.form1.emailself.style.display = ''
		document.all.ex.style.display = ''
        document.form1.emailself.focus();
        document.form1.email.value = ""
        document.form1.email.readOnly = true
    }
    else{
        document.form1.emailself.style.display = 'none'
		document.all.ex.style.display = 'none'
		document.form1.emailself.value = ""
		document.form1.email.readOnly = false
    }
}

function delvalue(thefield)
{
	var email = document.form1.email
        //thefield.value = ""
		email.value = ""
		email.readOnly = true

}

function findphoto(id)
{
	var winl = (screen.width - 445) / 2;
	var wint = (screen.height - 350) / 2;
	if(!id)
	{
			alert('\���̵� �Է��ϼ���\n\n');
	}
	else
	{
		window.open('/csd/cs_member/upload/upload.php?id='+id,'photofind','left='+winl+', top='+wint+', width=445, height=350, scrollbars=no, status=no');
	}
}
function findphoto2(id,imode)
{
	var winl = (screen.width - 440) / 2;
	var wint = (screen.height - 350) / 2;
	if(!id)
	{
			alert('\���̵� �Է��ϼ���\n\n');
	}
	else
	{
		window.open('/2005N/club/photo/upload.php?c_num_t='+id+'&mode='+imode,'photofind','left='+winl+', top='+wint+', width=440, height=350, scrollbars=no, status=no');
	}
}
function findphoto2_community(id,imode)
{
	var winl = (screen.width - 440) / 2;
	var wint = (screen.height - 350) / 2;
	if(!id)
	{
			alert('\���̵� �Է��ϼ���\n\n');
	}
	else
	{
		window.open('/2005N/community/photo/upload.php?c_num_t='+id+'&mode='+imode,'photofind','left='+winl+', top='+wint+', width=440, height=350, scrollbars=no, status=no');
	}
}
function errInput()
{
	alert('\n���ּ� �ܿ��� ���� �Է��Ͻ� �� �����ϴ�.\n\n�ּ�ã�� ��ư�� �̿��ϼ���\n\n');
}

function errInput2()
{
	alert('�ּ�ã�� ��ư�� �̿��Ͻñ� �ٶ��ϴ�.');
}

function edit_move(str)
{
  var str;
  document.location = str;
}




function checkInput_10(){
   var form = document.form1

  if(!form.id.value) {
     alert("���̵�(ID)�� �Է��ϼ���.")
     form.id.focus()
     return false;
  }
  if(!IsID(form.id.name)) {
     alert("ID�� 4~12���� ���� �ҹ���, ���� �Ǵ� ���յ� ���ڿ��̾�� �մϴ�.")
     form.id.focus()
     form.id.select()
     return false
  }
    if(form.idch.value != 1) {
     alert("���̵�(ID) �ߺ��˻�� �ʼ��Դϴ�.");
     form.id.focus();
     return false;
  }
  if(!form.passwd.value) {
     alert("��й�ȣ�� �Է��ϼ���!")
     form.passwd.focus()
     return false
  }
    if(!IsPW(form.passwd.name)) {
     alert("��й�ȣ�� 4~10���� �����ڳ� ���� �Ǵ� ���յ� ���ڿ��̾�� �մϴ�.")
     form.passwd.focus()
     form.passwd.select()
     return false
  }
      if(form.passwd.value != form.passwd2.value) {
      alert("�Է��Ͻ� ��й�ȣ�� ��ġ���� �ʽ��ϴ�.\n�ٽ� Ȯ���Ͻð� �־��ֽʽÿ�.")
     form.passwd2.focus()
     form.passwd2.select()
     return false;
  }



  /*

 if(!form.name.value) {
     alert("�̸��� �Է��ϼ���!");
     form.name.focus();
     return false;
  }

  if(!form.jumin1.value) {
     alert("�ֹε�Ϲ�ȣ�� �Է��ϼ���!");
     form.jumin1.focus();
     return false;
  }

  if(form.jumin1.value) {
      if(!IsNumber(form.jumin1.name)){
         alert("�ֹε�Ϲ�ȣ�� ���ڿ��� �մϴ�!");
         form.jumin1.focus();
         return false;
      }
  }
 if(!form.jumin2.value) {
     alert("�ֹε�Ϲ�ȣ�� �Է��ϼ���!");
     form.jumin2.focus();
     return false;
  }
  if(form.jumin2.value) {
      if(!IsNumber(form.jumin2.name)){
         alert("�ֹε�Ϲ�ȣ�� ���ڿ��� �մϴ�!");
         form.jumin2.focus();
         return false;
      }
  }




var chk =0
var yy = form.jumin1.value.substring(0,2)
var mm = form.jumin1.value.substring(2,4)
var dd = form.jumin1.value.substring(4,6)
var sex = form.jumin2.value.substring(0,1)

if ((form.jumin1.value.length!=6)||(yy <25||mm <1||mm>12||dd<1)){
alert ("�ֹε�Ϲ�ȣ�� �ٷ� �Է��Ͽ� �ֽʽÿ�.");
form.jumin1.focus();
return false;
}

if ((sex != 1 && sex !=2 )||(form.jumin2.value.length != 7 )){
alert ("�ֹε�Ϲ�ȣ�� �ٷ� �Է��Ͽ� �ֽʽÿ�.");
form.jumin2.focus();
return false;
}

// �ֹε�Ϲ�ȣ üũ

for (var i = 0; i <=5 ; i++){
chk = chk + ((i%8+2) * parseInt(form.jumin1.value.substring(i,i+1)))
}

for (var i = 6; i <=11 ; i++){
chk = chk + ((i%8+2) * parseInt(form.jumin2.value.substring(i-6,i-5)))
}

chk = 11 - (chk %11)
chk = chk % 10

if (chk != form.jumin2.value.substring(6,7))
{
alert ("��ȿ���� ���� �ֹε�Ϲ�ȣ�Դϴ�.");
form.jumin1.focus();
return false;
}

*/

	if(!form.email.value && form.emailsele.value == '0') {
     alert("�̸����� �Է��ϼ���.");
     form.email.focus();
     return false;
  }

	if(form.email.value && form.emailsele.value == '0') {
     alert("�̸��� �ּҸ� �����ϼ���.");
     form.emailsele.focus();
     return false;
  }

  	if(!form.email.value && form.emailsele.value != '0' && form.emailsele.value != '1') {
     alert("�̸����� �Է��ϼ���.");
     form.email.focus();
     return false;
  }

    if (form.emailsele.value == '1' && form.emailself.value.length == 0)
    {
        alert('�̸��� �ּҸ� �Է��ϼ���.');
        form.emailself.focus();
        return false;
    }





    if(!form.email.value && form.emailsele.value==1 && form.emailself.value)
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
	else if(form.email.value && form.emailsele.value && !form.emailself.value)
	{
	var emailfull = form.email.value+"@"+form.emailsele.value
	if (emailfull)
	{
		if (!f_chkEmail(emailfull))
		{
			form.email.focus();
			return false;
		}
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
            alert('����Ͻ� �� ���� �̸��� �ּ��Դϴ�.');
            form.emailself.focus();
            return false;
        }
    }

	if(!form.hphone1.value || !form.hphone2.value || !form.hphone3.value)
		{
         alert("�޴�����ȣ�� �Է��ϼž� �մϴ�.");
         return false;
		}
	
	if(form.hpch.value != 1) {
     alert("�޴�����ȣ �ߺ��˻�� �ʼ��Դϴ�.");
     return false;
  }

   if (form.phone1.value != 0 || form.phone2.value || form.phone3.value)
   {
	      if(form.phone1.value ==0)
		{
         alert("��ȭ��ȣ ������ �����ϼ���.");
         form.phone1.focus();
         return false;
		}
		 if(!form.phone2.value)
		{
         alert("��ȭ��ȣ 2��° ��ȣ�� �Է��ϼ���.");
         form.phone2.focus();
         return false;
		}
		 if(!form.phone3.value)
		{
         alert("��ȭ��ȣ 3��° ��ȣ�� �Է��ϼ���.");
         form.phone3.focus();
         return false;
		}
   }

/*
if(form.phone1.value) {
     if(!IsNumber(form.phone1.name)){
         alert("��ȭ��ȣ�� ���ڿ��� �մϴ�.");
         form.phone1.focus();
         return false;
      }
  }
*/
  if(form.phone2.value) {
     if(!IsNumber3(form.phone2.name)){
         alert("��ȭ��ȣ�� ���ڿ��� �մϴ�.");
         form.phone2.focus();
         return false;
      }
  }

  if(form.phone3.value) {
     if(!IsNumber3(form.phone3.name)){
         alert("��ȭ��ȣ�� ���ڿ��� �մϴ�.");
         form.phone3.focus();
         return false;
      }
  }



   if (form.postnum.value || form.address1.value || form.address2.value)
   {
	      if(!(form.postnum.value && form.address1.value) && form.address2.value)
		{
         alert("�ּ�ã�� ��ư�� �̿��� �ּҸ� �Է��� �ֽñ� �ٶ��ϴ�.");
         form.address2.focus();
         return false;
		}
		 if((form.postnum.value && form.address1.value) && !form.address2.value)
		{
         alert("���ּҸ� �Է��� �ֽñ� �ٶ��ϴ�.");
         form.address2.focus();
         return false;
		}
   }

	if(!IsAM(form.enterdstr.name)) {
     alert("�ڵ������� ���� �Է°��� 3������ �����ڳ� ���� �Ǵ� ���յ� ���ڿ��̾�� �մϴ�.")
     form.enterdstr.focus()
     return false
    }

   if(!form.enterdstr.value) {
     alert("�ڵ����Թ����� ���� ���ڸ� 3�� �Է��ϼž� �մϴ�.");
     form.enterdstr.focus();
     return false;
  }
  form.action="member_1_03.php"
  form.submit();
 }

//Join_End


// myinfo start
function checkEdit(){
   var form = document.form1;


	if(!form.mail_front.value && form.emailsele.value == '0') {
     alert("�̸����� �Է��ϼ���.");
     form.mail_front.focus();
     return false;
  }

	if(form.mail_front.value && form.emailsele.value == '0') {
     alert("�̸��� �ּҸ� �����ϼ���.");
     form.emailsele.focus();
     return false;
  }

  	if(!form.mail_front.value && form.emailsele.value != '0' && form.emailsele.value != '1') {
     alert("�̸����� �Է��ϼ���.");
     form.mail_front.focus();
     return false;
  }

    if (form.emailsele.value == '1' && form.emailself.value.length == 0)
    {
        alert('�̸��� �ּҸ� �Է��ϼ���.');
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
            alert('����Ͻ� �� ���� �̸��� �ּ��Դϴ�.');
            form.emailself.focus();
            return false;
        }
    }



   if (form.phone1.value != 0 || form.phone2.value || form.phone3.value)
   {
	      if(form.phone1.value ==0)
		{
         alert("��ȭ��ȣ ������ �����ϼ���.");
         form.phone1.focus();
         return false;
		}
		 if(!form.phone2.value)
		{
         alert("��ȭ��ȣ 2��° ��ȣ�� �Է��ϼ���.");
         form.phone2.focus();
         return false;
		}
		 if(!form.phone3.value)
		{
         alert("��ȭ��ȣ 3��° ��ȣ�� �Է��ϼ���.");
         form.phone3.focus();
         return false;
		}
   }

/*
if(form.phone1.value) {
     if(!IsNumber(form.phone1.name)){
         alert("��ȭ��ȣ�� ���ڿ��� �մϴ�.");
         form.phone1.focus();
         return false;
      }
  }
*/
  if(form.phone2.value) {
     if(!IsNumber3(form.phone2.name)){
         alert("��ȭ��ȣ�� ���ڿ��� �մϴ�.");
         form.phone2.focus();
         return false;
      }
  }

  if(form.phone3.value) {
     if(!IsNumber3(form.phone3.name)){
         alert("��ȭ��ȣ�� ���ڿ��� �մϴ�.");
         form.phone3.focus();
         return false;
      }
  }



   if (form.postnum.value || form.address1.value || form.address2.value)
   {
	      if(!(form.postnum.value && form.address1.value) && form.address2.value)
		{
         alert("�ּ�ã�� ��ư�� �̿��� �ּҸ� �Է��� �ֽñ� �ٶ��ϴ�.");
         form.address2.focus();
         return false;
		}
		 if((form.postnum.value && form.address1.value) && !form.address2.value)
		{
         alert("���ּҸ� �Է��� �ֽñ� �ٶ��ϴ�.");
         form.address2.focus();
         return false;
		}
   }

  form.submit();
  }

// myinfo end







  function IsID(formname) {
     var form=eval("document.form1." + formname);

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

  function IsPW(formname) {
     var form=eval("document.form1." + formname);

     if(form.value.length < 4 || form.value.length > 10) {
         return false;
     }
     for(var i=0; i < form.value.length; i++) {
         var chr = form.value.substr(i,1);
         if((chr < '0' || chr > '9') && (chr < 'a' || chr > 'z') && ( chr < 'A' || chr > 'Z')) {
            return false;
         }
     }
     return true;
  }

    function IsAM(formname) {
     var form=eval("document.form1." + formname);

     if(form.value.length < 3) {
         return false;
     }
     for(var i=0; i < form.value.length; i++) {
         var chr = form.value.substr(i,1);
         if((chr < '0' || chr > '9') && (chr < 'a' || chr > 'z') && ( chr < 'A' || chr > 'Z')) {
            return false;
         }
     }
     return true;
  }


  function IsNumber(formname) {
     var form=eval("document.form1." + formname);

     for(var i=0; i < form.value.length; i++) {
         var chr = form.value.substr(i,1);
         if((chr < '0' || chr > '9')) {
            return false;
         }
     }
     return true;
  }
  function IsNumber3(formname) {
     var form=eval("document.form1." + formname);

     for(var i=0; i < form.value.length; i++) {
         var chr = form.value.substr(i,1);
         if((chr < '0' || chr > '9')) {
            return false;
         }
     }
     return true;
  }
/*
  function ZipWindow(ref,what) {
     var window_left = (screen.width-640)/2;
     var window_top = (screen.height-480)/2;
     ref = ref + "?what=" + what;
     window.open(ref,"zipWin",'width=550,height=250,status=no,top=' + window_top + ',left=' + window_left + '');
  }
*/


//hphone check
function check_hphone_Window()
{
	var f = document.form1
	var pm = f.pm.value
	var h1 = f.hphone1.value
	var h2 = f.hphone2.value
	var h3 = f.hphone3.value
	var hp = h1+'-'+h2+'-'+h3
	var url;
	url = "/2005N/company/hphone_check.php?pm="+pm+"&hp="+hp
	f_OpenModalPop("hphoneFind",url,1,456,380);
}
//hphone check end

//cs_hphone check
function check_cell_Window()
{
	var f = document.form1
	var pm = f.pm.value
	var c1 = f.cell01.value
	var c2 = f.cell02.value
	var c3 = f.cell03.value
	var hp = c1+'-'+c2+'-'+c3
	var url;
	url = "/2005N/company/cs_hphone_check.php?pm="+pm+"&hp="+hp
	f_OpenModalPop("cs_hphoneFind",url,1,456,380);
}
//cs_hphone check end


function check_ID_Window(ref)
{

   var id= eval(document.form1.id);

 if (!id.value)
	 {
		alert("���̵�(ID)�� �Է��ϼ���.");
		id.focus();
		return false;
	 }
 if(id.value)
	{
		 if(!IsID(id.name))
		{
			alert("���̵�(ID)�� 4~12���� ���� �ҹ���, ���� �Ǵ� ���յ� ���ڿ��̾�� �մϴ�.");
			id.focus();
			return false;
		}
	/*
	var chr = ids.id.value.substr(0,1)
   if (input_check(chr) == 1)
	{
	    alert('ù���ڿ��� ���ڰ� ���� �ȵ˴ϴ�.')
		ids.id.focus()
		return false
	}
	*/
	}

	var url;
	url = "/csd/cs_member/member/id_check.php?id="+id.value;
	f_OpenModalPop("IDFind",url,1,456,380);
}
//End

  function IsID2(formname) {
     var form=eval("document.check." + formname);

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

/*******************************************************************************
* ��������
*******************************************************************************/
function isEmpty(str)
{
	if(getLength(trim(str)) <= 0)
		return true;
	else
		return false;
}

/*******************************************************************************
* ��������
*******************************************************************************/
function trim(str)
{
	return str.replace(/^\s+|\s+$/g, '');
}

/*******************************************************************************
* ����Ʈ üũ 80bytes �̻�
*******************************************************************************/
function checkBytes(form)
{
	var page = 0;
	var body_length = getLength(form.body.value);

	form.bytes.value = body_length;

	if(body_length)
		page = parseInt(body_length / 80);

	if(body_length % 80)
		page += 1;

	if(typeof(form.page) != "undefined")
		form.page.value = page;
}

/*******************************************************************************
* ����Ʈ üũ 80bytes ����
*******************************************************************************/
function checkBytes2(form, max_length)
{
	var page = 0;
	var body_length = getLength(form.body.value);

	if(body_length > max_length)
	{
		alert(max_length + "bytes �̻� �Է��� �� �����ϴ�.");
		form.body.value	= stringCut(form.body.value, max_length);
		body_length		= getLength(form.body.value);
	}

	if(body_length)
		page = parseInt(body_length / 80);

	if(body_length % 80)
		page += 1;

	if(typeof(form.page) != "undefined")
		form.page.value = page;

	form.bytes.value = body_length;
}

/*******************************************************************************
* �޼��� �ڽ� �ʱ�ȭ
*******************************************************************************/
function checkMsg(obj)
{
	if(trim(obj.value) == "���⿡ �޼����� �Է��ϼ���.")
	{
		obj.value = "";
	}
}

/*******************************************************************************
* ���ڿ� �ڸ���
*******************************************************************************/
function stringCut(str, max_length)
{
	var str, msg;
	var length = 0;
	var tmp;
	var count = 0;

	length = str.length;

	for(var i = 0; i < length; i++)
	{
		tmp = str.charAt(i);

		if(escape(tmp).length > 4)
			count += 2;
		else
			if(escape(tmp) != "%0D")
				count++;

		if(count > max_length)
			break;
	}

	return str.substring(0, i);
}

/*******************************************************************************
* ���ڿ� ���̸� �����Ѵ�.
*******************************************************************************/
function getLength(str)
{
	var length = 0;

	for(var i = 0; i < str.length; i++)
	{
		if(escape(str.charAt(i)).length >= 4)
			length += 2;
		else
			if(escape(str.charAt(i)) != "%0D")
				length++;
	}

	return length;
}



// ASCII CHECK

 function input_check(check_string)
        {
                var char_ASCII = check_string.charCodeAt(check_string.length-1);

                //����
                if (char_ASCII >= 48 && char_ASCII <= 57 )
                        return 1;
                //����
                else if ((char_ASCII>=65 && char_ASCII<=90)
                                || (char_ASCII>=97 && char_ASCII<=122))
                        return 2;
                //Ư����ȣ
                else if ((char_ASCII>=33 && char_ASCII<=47)
                                || (char_ASCII>=58 && char_ASCII<=64)
                                || (char_ASCII>=91 && char_ASCII<=96)
                                || (char_ASCII>=123 && char_ASCII<=126))
                        return 4;
                //�ѱ�
                else if ((char_ASCII >= 12592) || (char_ASCII <= 12687))
                        return 3;
                else
                        return 0;
        }
// only hangul
function stringcheck(thisstring)
{
		var total = thisstring.length
		for(i=0;i<total;i++)
		{

			if(44032 > thisstring.charCodeAt(i) || 55203 < thisstring.charCodeAt(i))
			{
				return false;
			}
		}
		return true;
}















































//////////////////////////////////////////////////////////////////////////////////////////////////////////
	function f_chkAlphaNum(strString) {
		strValid = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_";
		for (var i=0; i< strString.length; i++) {
			if (strValid.indexOf(strString.charAt(i)) == -1) {
			return false;
			}
		}
		return true;
	}

    function alterString(str,before,after) {
     var returnStr = "";
     for(i = 0; i < str.length; i++) {
      value = str.charAt(i);
      index = before.indexOf(value);
      if(index >= 0) value = after.charAt(index);
      returnStr += value;
     }
     return returnStr;
    }

	function f_chkFileName(strFile) {
		var arrString = strFile.split('\\');
		var nStringSize = arrString.length;
		var strFileName = arrString[nStringSize-1];
		arrString = strFileName.split('\.');
		nStringSize = arrString.length;
		if(nStringSize!=2) {
			return false;
		}
		var strFileName = arrString[0];
		var strFileFormat = arrString[1];
		if(!check_space(strFileFormat)) {
			return false;
		}
		if(strFileFormat.length > 4 || strFileFormat.length < 3) {
			return false;
		}
		if(strFileName.length>15) {
			return false;
		}
		if(!f_chkAlphaNum(strFileName)) {
			return false;
		}
		return true;
	}

	function NoNumber(string) {
		if (!f_chkNoNum(string)) {
			alert("���ڴ� ���Ե� �� �����ϴ�.");
			return false;
		}
		return true;
	}

	function f_chkNoNum(string) {
		valid = "0123456789";
		for (var i=0; i< string.length; i++) {
			if (valid.indexOf(string.charAt(i)) != -1) {
				return false;
			return false;
			}
		}
		return true;

	}

	function OnlyNumber(string) {
		if (!f_chkOnlyNum(string)) {
			alert("���ڴ� ���Ե� �� �����ϴ�.");
			return false;
		}
		return true;
	}

	function f_chkOnlyNum(string) {
		valid = "0123456789";
		for (var i=0; i< string.length; i++) {
			if (valid.indexOf(string.charAt(i)) == -1) {
				return false;
			}
		}
		return true;
	}

	function f_chkOnlyTel(string) {
		//���� ���� ���ڰ� ���ԵǾ� ������ false ����
		valid = "0123456789-";
		for (var i=0; i< string.length; i++) {
			if (valid.indexOf(string.charAt(i)) == -1) {
				return false;
			}
		}
		return true;
	}

	function check_space(str) {
		//������ �����ϰ� �Է� ���� üũ
		if (str.search(/\S/)<0) {
			return false;
		}
		var temp=str.replace(' ','');
		if (temp.length == 0) {
			return false;
		}
		return true;
	}

	function f_chkRegID(strRegID1,strRegID2) {
		// CheckSum üũ
		if (chksumID(strRegID1,strRegID2) == false) {
			alert('��ȿ���� ���� �ֹε�Ϲ�ȣ�Դϴ�.');
			return false;
		}

		// ������� ����� �ƴѰ� ������ϰ� �����ʵ� üũ
		if (ValidRegNo(strRegID1,strRegID2) == false) {
			alert('��ȿ���� ���� �ֹε�Ϲ�ȣ�Դϴ�.');
			return false;
		}

		// YYMMDD�� �´��� Ȯ���Ѵ�.
		if (ValidRegNo2(strRegID1) == false) {
			alert('��ȿ���� ���� �ֹε�Ϲ�ȣ�Դϴ�.');
			return false;
		}

		return true;
	}

	function chksumID(strRegID1,strRegID2) {
	    str1 = strRegID1.value;
	    str2 = strRegID2.value;
	    var li_lastid,li_mod,li_minus,li_last;
	    var value0,value1,value2,value3,value4,value5,value6;
	    var value7,value8,value9,value10,value11,value12;

	    if (f_chkOnlyNum(str1) &&  f_chkOnlyNum(str2)) {
	        li_lastid    = parseFloat(str2.substring(6,7));
	        value0  = parseFloat(str1.substring(0,1))  * 2;
	        value1  = parseFloat(str1.substring(1,2))  * 3;
	        value2  = parseFloat(str1.substring(2,3))  * 4;
	        value3  = parseFloat(str1.substring(3,4))  * 5;
	        value4  = parseFloat(str1.substring(4,5))  * 6;
	        value5  = parseFloat(str1.substring(5,6))  * 7;
	        value6  = parseFloat(str2.substring(0,1))  * 8;
	        value7  = parseFloat(str2.substring(1,2))  * 9;
	        value8  = parseFloat(str2.substring(2,3))  * 2;
	        value9  = parseFloat(str2.substring(3,4))  * 3;
	        value10 = parseFloat(str2.substring(4,5))  * 4;
	        value11 = parseFloat(str2.substring(5,6))  * 5;
	        value12 = 0;

	        value12 = value0+value1+value2+value3+value4+value5+value6+value7+value8+value9+value10+value11+value12 ;

	        li_mod = value12 %11;
	        li_minus = 11 - li_mod;
	        li_last = li_minus % 10;
	        if (li_last != li_lastid){
	            strRegID2.select();
	            strRegID2.focus();
	            return false;
	        } else
	            return true;
		} else
	    strRegID2.select();
	    strRegID2.focus();
	    return false;
	}

	function ValidRegNo(strRegID1,strRegID2) {
	    strReg1 = strRegID1.value;
	    strReg2 = strRegID2.value;
	    sGender = strReg2.substring(0,1);
	    sYear = strReg1.substring(0,2);
	    sMonth = new Number(strReg1.substring(2,4));
	    sDay = new Number(strReg1.substring(4,6));

	    //[��]�� 1~12�� ��������, [��]�� 1~31�� ��������
	    if (sMonth < 1 || sMonth > 12 || sDay < 1 || sDay > 31) {
			return false;
	    }
	    // �ι�° �ܶ� ù��° ���ڴ� 4���� Ŭ �� ����.
		if (sGender > 4 || sGender < 0) {
			return false;
		}

	    // 2000�⵵ ������ ���ڴ� 1, ���ڴ� 2
	    // 2000�⵵ ���Ĵ� ���ڴ� 3, ���ڴ� 4
/*		if (sYear != '00') {
			if ((sGender != '1') && (sGender != '2')) {
				return false;
			}
		}
*/
	    return true;
	}

	// YYMMDD�� �´��� Ȯ���Ѵ�.
	function ValidRegNo2(strRegID1) {
	    strReg1 = strRegID1.value;

		a = new String(strReg1);

		if(a == '') return false;
		if(a.length != 6 ) return false;

		intYear = parseInt(a.substring(0,2) , 10);
		intMonth = parseInt(a.substring(2,4) , 10);
		intDay = parseInt(a.substring(4,6) , 10);

		if(intMonth < 0 || intMonth > 12){
			return false;
		}

		switch(intMonth){
			case 2 :
				if(intDay < 0 || intDay > 29){
					return false;
					breake;
				}
			case 4 :
				if(intDay < 0 || intDay > 30){
					return false;
					breake;
				}
			case 6 :
				if(intDay < 0 || intDay > 30){
					return false;
					breake;
				}
			case 9 :
				if(intDay < 0 || intDay > 30){
					return false;
					breake;
				}
			case 11 :
				if(intDay < 0 || intDay > 30){
					return false;
					breake;
				}
			default :
				if(intDay < 0 || intDay > 31){
					return false;
					breake;
				}
		}

	    return true;
	}
	function ssn_check(theForm) {
		//�ֹι�ȣ �ùٸ� ���������� üũ
		if (!f_chkRegID(theForm.ssn1, theForm.ssn2)) {
			return false;
		}
		return true;
	}

	function f_chkEmail(strEmail) {
		// ���Կ��� üũ
		if (!check_space(strEmail)) {
			alert('�����ּҸ� �Է����ֽʽÿ�.');
			return false;
		}
		// �ùٸ� �������� üũ
		if (strEmail.search(/(\S+)@(\S+)\.(\S+)/) == -1 ) {
			alert("�����ּҰ� �ùٸ��� �ʽ��ϴ�.");
		    return false;
		}
		var EmailStr = strEmail;
		var idxn = 1;
		while (idxn != -1) {
			EmailStr = EmailStr.replace('_','');
			idxn = EmailStr.indexOf('_');
		}
		idxn = 1;
		while (idxn != -1) {
			EmailStr = EmailStr.replace('-','');
			idxn = EmailStr.indexOf('-');
		}
		var EmailStrLen = EmailStr.length;
		idxn = EmailStr.indexOf('@');
		tempStr = EmailStr.substring(0,idxn);
		if (!AlpaNumber(tempStr)) {
			alert("�����ּҰ� �ùٸ��� �ʽ��ϴ�.");
		    return false;
		}
		while (idxn != -1) {
			EmailStr = EmailStr.substring(idxn+1,EmailStrLen);
			EmailStrLen = EmailStr.length;
			idxn = EmailStr.indexOf('.');
			if (idxn == -1) {
				tempStr = EmailStr;
			} else {
				tempStr = EmailStr.substring(0,idxn);
			}
			if (!AlpaNumber(tempStr)) {
				alert("�����ּҰ� �ùٸ��� �ʽ��ϴ�.");
			    return false;
			}
		}
		return true;

	}


	function AlpaNumber(string) {
		//���ĺ��̳� ���ڰ� �ƴ� ���ڰ� ���ԵǾ� ������ false ����
		valid = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		for (var i=0; i< string.length; i++) {
			if (valid.indexOf(string.charAt(i)) == -1) {
			return false;
			}
		}
		return true;
	}


	function f_OpenModalPop(Name,Action,bScroll,width, height) {
		var w, h;
		w = width;
		h = height;
		var strURL = Action;
		var objArgu = new Object();
		objArgu.Width = w;
		objArgu.Height = h;
		objArgu.Action = Action;
		var objWin = f_OpenModal(strURL,objArgu,h,w,0,0,0,1,0,0,0,bScroll,0);
		return objWin;
	}

	function f_InitSetModal(objPara) {
		if(typeof(objPara)=='object') {
			var nWidth = objPara.Width;
			var nHeight = objPara.Height;
			var strAction = objPara.Action;
			var arrArgu = new Array(true,nWidth,nHeight,strAction);
		} else {
			var arrArgu = new Array(false,0,0,'None');
		}
		return arrArgu;
	}

	// Ű�� �Է°��� ���ڰ��� ��츸 �Է� �� �� �ְ����ش�.
	function checkOnlyNumber() {

		if ( event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46) {
			event.returnValue = true;
		}
		else {
			if (!event.shiftKey) {
				if (event.keyCode > 47) {
					if ( event.keyCode < 58){
						event.returnValue = true;
					}
					else if (event.keyCode > 95 ){
						if (event.keyCode < 106) {
							event.returnValue = true;
						}
						else
							event.returnValue = false;
					}
					else
						event.returnValue = false;
				}
				else if ( event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 32) {
					event.returnValue = true;
				}
				else
					event.returnValue = false;
			}else
				event.returnValue = false;
		}
	}

	function strcmp(strA, strB) {
		return ( strA > strB ? 1 : ( strA == strB ? 0 : -1));
	}