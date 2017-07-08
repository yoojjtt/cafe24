function CheckEmail(str)
{
              var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
              if (filter.test(str)) { return true; }
              else { return false; }
}

function CheckID(str) 
{
              for (i=0; i <= str.length -1 ; i++)
              {
                            ch = str.substring(i,i+1);
                            if ((ch>='0' && ch<='9') || (ch>='a'  && ch<='z') ||(ch>='A'  && ch<='Z')) { }
                            else { return false; }
              }
			  return true;
}