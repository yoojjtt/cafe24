// Object에 value가 숫자로만 되어있는지 체크한다.
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


// 재외국인 번호 체크
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

// 주민번호 체크
function check_juminno(juminno) {
        if(juminno=="" || juminno==null || juminno.length!=13) {
                alert("주민등록번호 형식에 문제가 있습니다.");
                return false;
        }
        var jumin1 = juminno.substr(0,6);
        var jumin2 = juminno.substr(6,7);
        var yy           = jumin1.substr(0,2);        // 년도
        var mm     = jumin1.substr(2,2);        // 월
        var dd     = jumin1.substr(4,2);        // 일
        var genda  = jumin2.substr(0,1);        // 성별
        var msg, ss, cc;

        // 숫자가 아닌 것을 입력한 경우
        if (!isNumeric(jumin1)) {
                alert("주민등록번호 앞자리를 숫자로 입력하세요.");
                return false;
        }
        // 길이가 6이 아닌 경우
        if (jumin1.length != 6) {
                alert("주민등록번호 앞자리를 다시 입력하세요.");
                return false;
        }
        // 첫번째 자료에서 연월일(YYMMDD) 형식 중 기본 구성 검사
        if (yy < "00" || yy > "99" ||
                mm < "01" || mm > "12" ||
                dd < "01" || dd > "31") {
                alert("주민등록번호 앞자리를 다시 입력하세요.");
                return false;
        }
        // 숫자가 아닌 것을 입력한 경우
        if (!isNumeric(jumin2)) {
                alert("주민등록번호 뒷자리를 숫자로 입력하세요.");
                return false;
        }
        // 길이가 7이 아닌 경우
        if (jumin2.length != 7) {
                alert("주민등록번호 뒷자리를 다시 입력하세요.");
                return false;
        }
        // 성별부분이 1 ~ 4 가 아닌 경우
        if (genda < "1" || genda > "4") {
                alert("주민등록번호 뒷자리를 다시 입력하세요.");
                return false;
        }
        // 연도 계산 - 1 또는 2: 1900년대, 3 또는 4: 2000년대
        cc = (genda == "1" || genda == "2") ? "19" : "20";
        // 첫번째 자료에서 연월일(YYMMDD) 형식 중 날짜 형식 검사
        if (isYYYYMMDD(parseInt(cc+yy), parseInt(mm), parseInt(dd)) == false) {
                alert("주민등록번호 앞자리를 다시 입력하세요.");
                return false;
        }
        // Check Digit 검사
        if (!isSSN(jumin1, jumin2)) {
                alert("입력한 주민등록번호를 검토한 후, 다시 입력하세요.");
                return false;
        }
        return true;
}

// 사업자등록번호 체크
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
        case 2:        // 2월의 경우
                if (d > 29) return false;
                if (d == 29) {
                        // 2월 29의 경우 당해가 윤년인지를 확인
                        if ((y % 4 != 0) || (y % 100 == 0) && (y % 400 != 0))
                                return false;
                }
                break;
        case 4:        // 작은 달의 경우
        case 6:
        case 9:
        case 11:
                if (d == 31) return false;
        }
        // 큰 달의 경우
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