// Object�� value�� ���ڷθ� �Ǿ��ִ��� üũ�Ѵ�.
function isDigit(obj)
{
              inputStr = obj.value;
              for( var i = 0 ; i < inputStr.length ; i++ )
              {
                            var oneChar = inputStr.charAt(i)
                            if (oneChar < '0' || oneChar > '9') { return false; }
              }
              return true;
}


// ��ܱ��� ��ȣ üũ
function check_fgnno(fgnno) {
        var sum=0;
        var odd=0;
        buf = new Array(13);
        for(i=0; i<13; i++) { buf[i]=parseInt(fgnno.charAt(i)); }
        odd = buf[7]*10 + buf[8];
        if(odd%2 != 0) { return false; }
        if( (buf[11]!=6) && (buf[11]!=7) && (buf[11]!=8) && (buf[11]!=9) ) {
                return false;
        }
        multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];
        for(i=0, sum=0; i<12; i++) { sum += (buf[i] *= multipliers[i]); }
        sum = 11 - (sum%11);
        if(sum >= 10) { sum -= 10; }
        sum += 2;
        if(sum >= 10) { sum -= 10; }
        if(sum != buf[12]) { return false }
        return true;
}

// �ֹι�ȣ üũ
function check_juminno(juminno) {
        if(juminno=="" || juminno==null || juminno.length!=13) {
                alert("�ֹε�Ϲ�ȣ ���Ŀ� ������ �ֽ��ϴ�.");
                return false;
        }
        var jumin1 = juminno.substr(0,6);
        var jumin2 = juminno.substr(6,7);
        var yy           = jumin1.substr(0,2);        // �⵵
        var mm     = jumin1.substr(2,2);        // ��
        var dd     = jumin1.substr(4,2);        // ��
        var genda  = jumin2.substr(0,1);        // ����
        var msg, ss, cc;

        // ���ڰ� �ƴ� ���� �Է��� ���
        if (!isNumeric(jumin1)) {
                alert("�ֹε�Ϲ�ȣ ���ڸ��� ���ڷ� �Է��ϼ���.");
                return false;
        }
        // ���̰� 6�� �ƴ� ���
        if (jumin1.length != 6) {
                alert("�ֹε�Ϲ�ȣ ���ڸ��� �ٽ� �Է��ϼ���.");
                return false;
        }
        // ù��° �ڷῡ�� ������(YYMMDD) ���� �� �⺻ ���� �˻�
        if (yy < "00" || yy > "99" ||
                mm < "01" || mm > "12" ||
                dd < "01" || dd > "31") {
                alert("�ֹε�Ϲ�ȣ ���ڸ��� �ٽ� �Է��ϼ���.");
                return false;
        }
        // ���ڰ� �ƴ� ���� �Է��� ���
        if (!isNumeric(jumin2)) {
                alert("�ֹε�Ϲ�ȣ ���ڸ��� ���ڷ� �Է��ϼ���.");
                return false;
        }
        // ���̰� 7�� �ƴ� ���
        if (jumin2.length != 7) {
                alert("�ֹε�Ϲ�ȣ ���ڸ��� �ٽ� �Է��ϼ���.");
                return false;
        }
        // �����κ��� 1 ~ 4 �� �ƴ� ���
        if (genda < "1" || genda > "4") {
                alert("�ֹε�Ϲ�ȣ ���ڸ��� �ٽ� �Է��ϼ���.");
                return false;
        }
        // ���� ��� - 1 �Ǵ� 2: 1900���, 3 �Ǵ� 4: 2000���
        cc = (genda == "1" || genda == "2") ? "19" : "20";
        // ù��° �ڷῡ�� ������(YYMMDD) ���� �� ��¥ ���� �˻�
        if (isYYYYMMDD(parseInt(cc+yy), parseInt(mm), parseInt(dd)) == false) {
                alert("�ֹε�Ϲ�ȣ ���ڸ��� �ٽ� �Է��ϼ���.");
                return false;
        }
        // Check Digit �˻�
        if (!isSSN(jumin1, jumin2)) {
                alert("�Է��� �ֹε�Ϲ�ȣ�� ������ ��, �ٽ� �Է��ϼ���.");
                return false;
        }
        return true;
}

// ����ڵ�Ϲ�ȣ üũ
function check_busino(vencod) {
        var sum = 0;
        var getlist =new Array(10);
        var chkvalue =new Array("1","3","7","1","3","7","1","3","5");
        for(var i=0; i<10; i++) { getlist[i] = vencod.substring(i, i+1); }
        for(var i=0; i<9; i++) { sum += getlist[i]*chkvalue[i]; }
        sum = sum + parseInt((getlist[8]*5)/10);
        sidliy = sum % 10;
        sidchk = 0;
        if(sidliy != 0) { sidchk = 10 - sidliy; }
        else { sidchk = 0; }
        if(sidchk != getlist[9]) { return false; }
        return true;
}


function isYYYYMMDD(y, m, d) {
        switch (m) {
        case 2:        // 2���� ���
                if (d > 29) return false;
                if (d == 29) {
                        // 2�� 29�� ��� ���ذ� ���������� Ȯ��
                        if ((y % 4 != 0) || (y % 100 == 0) && (y % 400 != 0))
                                return false;
                }
                break;
        case 4:        // ���� ���� ���
        case 6:
        case 9:
        case 11:
                if (d == 31) return false;
        }
        // ū ���� ���
        return true;
}
function isNumeric(s) {
        for (i=0; i<s.length; i++) {
                c = s.substr(i, 1);
                if (c < "0" || c > "9") return false;
        }
        return true;
}
function isLeapYear(y) {
        if (y < 100)
        y = y + 1900;
        if ( (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0) ) {
                return true;
        } else {
                return false;
        }
}
function getNumberOfDate(yy, mm) {
        month = new Array(29,31,28,31,30,31,30,31,31,30,31,30,31);
        if (mm == 2 && isLeapYear(yy)) mm = 0;
        return month[mm];
}
function isSSN(s1, s2) {
        n = 2;
        sum = 0;
        for (i=0; i<s1.length; i++)
                sum += parseInt(s1.substr(i, 1)) * n++;
        for (i=0; i<s2.length-1; i++) {
                sum += parseInt(s2.substr(i, 1)) * n++;
                if (n == 10) n = 2;
        }
        c = 11 - sum % 11;
        if (c == 11) c = 1;
        if (c == 10) c = 0;
        if (c != parseInt(s2.substr(6, 1))) return false;
        else return true;
}