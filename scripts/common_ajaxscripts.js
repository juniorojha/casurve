/*
 JavaScript AJAX Function Library v1.0.0
 
 @@@ Author : SAJESH KUMAR R
 @@@  Organisation : 360 THoughts
 @@@  Date: 2010-02-09 
 
 This is a JavaScript library that will allow you to easly access most of the javascript AJAX function we use for ASP/PHP. This script is not as
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

function GetXmlHttpObject()
	{
	var xmlHttp=null;
	try
	  {
	  // Firefox, Opera 8.0+, Safari
	  xmlHttp=new XMLHttpRequest();
	  }
	catch(e)
	  {
	  // Internet Explorer
	  try
		{
		xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		}
	  catch(e)
		{
		xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
	  }
	return xmlHttp;
}


function doPostData(url, params, obj)
{
    var xmlHttpObj = GetXmlHttpObject();
    xmlHttpObj.open("POST", url, true);
    //Send the proper header information along with the request
    xmlHttpObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttpObj.setRequestHeader("Content-length", params.length);
    xmlHttpObj.setRequestHeader("Connection", "close");
    xmlHttpObj.onreadystatechange = function() {//Call a function when the state changes. 
        if (xmlHttpObj.readyState == 1) {
            obj.innerHTML = '<p align="center"><img src="/images/loading.gif" align="center" valign="middle" border="0"></p>'
        }
        if (xmlHttpObj.readyState == 4) {
            obj.innerHTML = xmlHttpObj.responseText;
        }
    }
    xmlHttpObj.send(params);

}

function doPostAddData(url, params,funcexec)
{
    var xmlHttpObj = GetXmlHttpObject();
    xmlHttpObj.open("POST", url, true);
    //Send the proper header information along with the request
    xmlHttpObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttpObj.setRequestHeader("Content-length", params.length);
    xmlHttpObj.setRequestHeader("Connection", "close");
    xmlHttpObj.onreadystatechange = function() {//Call a function when the state changes. 
        if (xmlHttpObj.readyState == 4) {
            eval(funcexec+"('"+xmlHttpObj.responseText+"')");
			//alert(xmlHttpObj.responseText);
        }
    }
    xmlHttpObj.send(params);

} 
