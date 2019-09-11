/*

 JavaScript validation Function Library v1.0.0
 @@@ Author : SAJESH KUMAR R
 @@@  Organisation : 360 thoughts
 @@@  Date: 2010-02-09 
 
 This is a JavaScript library that will allow you to easly access most of the javascript validation function we use day to day working. This script is not as
full-featured as others you may find on the Internet, but it's free, it's easy to
understand, and it's easy to change.

Disclaimer: 
We hope that the information on these script pages is valuable to you. 
Your use of the information contained in these pages, however, is at your sole risk. 
All information on these pages is provided "as -is", without any warranty, 
whether express or implied, of its accuracy, completeness, fitness for a particular purpose, title or non-infringement, and none of the third-party products or 
information mentioned in the work are authored, recommended, supported or guaranteed by Author. Further, Author
shall not be liable for any damages you may sustain by using this information, whether direct, indirect, special, incidental or consequential,
 even if it has been advised of the possibility of such damages.

 * 
 * 
 */

function isName(val)
{
	var regExpr = /^[a-zA-Z.\'\s]+$/;
	res = regExpr.test(val);
	return res;
}


function isEmail(val,Lablename)
{
	var regExpr=/^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\D-]*\.([a-z]{2,4}|\d+)$/i;	
	 res = regExpr.test(val);
	 //id(res)
	 return res;
}

function isCity(val)
{
	var regExpr =  /^[a-zA-Z\s\d\'\&]+$/;	
	res = regExpr.test(val);
	return res;
}
	

function isPhoneNumber(val)
{
	var regExpr=/^[\d \-\(\)\+\s]*$/;
	res = regExpr.test(val);
	return res;
}

function isRemarks(val)
{
	var regExpr = /^[a-zA-Z0-9-._\s\@\'\,\:\;\&\#\(\)\%]+$/;
	res = regExpr.test(val);
	return res;
}

function isOrganization(val)
{
	var regExpr = /^[a-zA-Z0-9-._\s\@\'\&]+$/;
	res = regExpr.test(val);
	return res;
}
function isNumeric(val)
{
	var regExpr = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/;
	res = regExpr.test(val);
	return res;
}
function isAlphaNumeric(val)
{
	var regExpr = /^[a-zA-Z0-9]+$/;
	res = regExpr.test(val);
	return res;
}

function isAlphaSpace(val)
{
	var regExpr = /^[a-zA-Z\s]+$/;
	res = regExpr.test(val);
	return res;
}
function isWhitespace(chkstring) //Checks for White spaces in the string 
{  
	if(chkstring.replace(/ /g,'')=="")
	{
	  return true;
	}
	else
	{
	  return false;
	}
}

function isWebsite(val)
{
	var regExpr =  /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;	
	res = regExpr.test(val);
	return res;
}

function isZipCode(val)
{
	var regExpr = /^[a-zA-Z0-9\-\s]+$/;
	res = regExpr.test(val);
	return res;
}

function isDateValid(DateVal){
   // var DateVal = Mn + "/" + Day + "/" + Yr;
   var datearr=DateVal.split("/")
   Day=parseInt(datearr[1],10)
   Month=parseInt(datearr[0],10)
   Year=parseInt(datearr[2],10)
   //alert(Day)
   if(Year<1900)
   {
     return false;
   }
    var dt = new Date(DateVal);

    if(dt.getDate()!=Day){
        return(false);
        }
    else if(dt.getMonth()!=Month-1){
    //this is for the purpose JavaScript starts the month from 0
        return(false);
        }
    else if(dt.getFullYear()!=Year){
        return(false);
        }
        
    return(true);
 }
 
 function isValidTime(strTime) {
	// Checks if time is in HH:MM:SS format.
	// The seconds are optional.

	var timePat = /^(\d{1,2}):(\d{2})(:(\d{2}))?$/;
	var matchArray = strTime.match(timePat);
	if (matchArray == null) {
		return false;
	}

	hour = matchArray[1];
	minute = matchArray[2];
	second = matchArray[4];

	if (second=="") { second = null; }

	if (hour < 0  || hour > 23) {
		return false;
	}

	if (minute<0 || minute > 59) {
		return false;
	}
	if (second != null && (second < 0 || second > 59)) {
		return false;
	}
	return true;
}


 function isCreditCard(CreditCardNo) 
 {
	if (/[^0-9-]+/.test(CreditCardNo))
		return false;
	var nCheck = 0,
	nDigit = 0,
	bEven = false;

	CreditCardNo = CreditCardNo.replace(/\D/g, "");

	for (var n = CreditCardNo.length - 1; n >= 0; n--) {
		var cDigit = CreditCardNo.charAt(n);
		var nDigit = parseInt(cDigit, 10);
		if (bEven) {
			if ((nDigit *= 2) > 9)
				nDigit -= 9;
		}
		nCheck += nDigit;
		bEven = !bEven;
	}

	return (nCheck % 10) == 0;
}
 