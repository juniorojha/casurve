/*
 JavaScript Function Library v1.0.0
 
 @@@ Author : SAJESH KUMAR R
 @@@  Organisation : 360 thoughts
 @@@  Date: 2010-02-09 
 
 This is a JavaScript library that will allow you to easly access most of the javascript function we use day to day working. This script is not as
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
 
function clearText(val,valObj)
	{
		if(valObj.value==val)
		{
		  valObj.value=""
		}
	}
function retainText(val,valObj)
	{
		if(valObj.value=="")
		{
		  valObj.value=val
		}
	}
 
function dateAdd(objDate, strInterval, intIncrement)
    {
	    strInterval=strInterval.toUpperCase(); 
        if(strInterval != "M" && strInterval != "D" && strInterval != "Y" && strInterval != "H" && strInterval != "MI" && strInterval != "UM" && strInterval != "UD" && strInterval != "UY" && strInterval != "UH" && strInterval != "UMI" && strInterval != "US" )
		 {
		    alert("Please enter valid Option\nD : Day\nM : Month \nY : Year \nH : Hour \nMI : Minutes \nS : Second \nUD : UTC DAY \nUM : UTC Month \nUY : UTC Year \nUH : UTC Hour \nUMI : UTC Minute \nUS : UTC Second \n")
			return objDate;
		 }
        objDate = new Date(objDate);
   
        switch(strInterval)
        {
            case "M":
            objDate.setMonth(parseInt(objDate.getMonth()) + parseInt(intIncrement));
            break;
 
            case "D":
            objDate.setDate(parseInt(objDate.getDate()) + parseInt(intIncrement));
            break;
 
            case "Y":
            objDate.setYear(parseInt(objDate.getYear()) + parseInt(intIncrement));
            break;
 
            case "H":
            objDate.setHours(parseInt(objDate.getHours()) + parseInt(intIncrement));
            break;
 
            case "MI":
            objDate.setMinutes(parseInt(objDate.getMinutes()) + parseInt(intIncrement));
            break;
 
            case "S":
            objDate.setSeconds(parseInt(objDate.getSeconds()) + parseInt(intIncrement));
            break;
 
            case "UM":
            objDate.setUTCMonth(parseInt(objDate.getUTCMonth()) + parseInt(intIncrement));
            break;
 
            case "UD":
            objDate.setUTCDate(parseInt(objDate.getUTCDate()) + parseInt(intIncrement));
            break;
 
            case "UY":
            objDate.setUTCFullYear(parseInt(objDate.getUTCFullYear()) + parseInt(intIncrement));
            break;
 
            case "UH":
            objDate.setUTCHours(parseInt(objDate.getUTCHours()) + parseInt(intIncrement));
            break;
 
            case "UMI":
            objDate.setUTCMinutes(parseInt(objDate.getUTCMinutes()) + parseInt(intIncrement));
            break;
 
            case "US":
            objDate.setUTCSeconds(parseInt(objDate.getUTCSeconds()) + parseInt(intIncrement));
            break;
        }
        return objDate;
    }
	
function dateDiff(fromdate,todate)
	{
	   if (fromdate == "")
	   {
		 lclvar_fromdate=new Date()
	   }
	   else
	   {
		 lclvar_fromdate=new Date(fromdate)
	   }
	   
	   if (todate == "")
	   {
		 lclvar_todate=new Date()
	   }
	   else
	   {
		 lclvar_todate=new Date(todate)
	   }  

	   return ((lclvar_todate-lclvar_fromdate)/(24*60*60*1000))
	}



function yearDiff(fromdate,todate)
	{
	   if (fromdate == "")
	   {
		 lclvar_fromdate=new Date()
	   }
	   else
	   {
		 lclvar_fromdate=new Date(fromdate)
	   }
	   
	   if (todate == "")
	   {
		 lclvar_todate=new Date()
	   }
	   else
	   {
		 lclvar_todate=new Date(todate)
	   }  
	   return lclvar_todate.getFullYear()-lclvar_fromdate.getFullYear()
	}
  

function dolimit(obj,size)
	{
		 if(obj.value.length>=size)
		 {
		   obj.value=obj.value.substr(0,(size-1))
		   return false;
		 }
	}  

function removeXSSAttack(strTemp) { 
    strTemp = strTemp.replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+|\-/g,""); 
    return strTemp;
} 


function getQueryString(stringtofind) 
	{
	   var queryStringvalue="";
	   if(window.location.search.substring(1)!="")
		 {
			QueryString=window.location.search.substring(1);
			QueryStringArray = QueryString.split("&");
			for (i=0;i<QueryStringArray.length;i++) 
				{
					QueryStringValue = QueryStringArray[i].split("=");
					if (QueryStringValue[0] == stringtofind) 
					{
					   queryStringvalue=QueryStringValue[1];
					}
				}	
		 }  
		 return queryStringvalue;
	}
  
  

function NewWindow(url, title, winwidth, winheight, scroll, resize,statusbar,browtoolbar,urllocation,loctop,locleft) 
{
	if (scroll==true || scroll=='yes') 
	{
	  scroll='yes'; 
	}
	else {
	scroll='no';
	}
	if (resize==true || resize=='yes') 
	{
		resize=', resizable=1'; 
	}
	else 
	{
		resize='';
	}
	if (statusbar==true || statusbar=='yes') 
	{
		statusbar=', status=1'; 
	}
	else 
	{
		statusbar='';
	}
	if (browtoolbar==true || browtoolbar=='yes') 
	{
		browtoolbar=', toolbar=1'; 
	}
	else 
	{
		browtoolbar='';
	}
	if (urllocation==true || urllocation=='yes') 
	{
		urllocation=', location=1'; 
	}	
	else 
	{
		urllocation='';
	}
	    
	windowtop='top='+loctop;
	windowleft='left='+locleft;

	var winl = (screen.width - winwidth) / 2;
	var wint = (screen.height - winheight) / 2;

	winprops = 'height='+winheight+',width='+winwidth+',top='+wint+',left='+winl+',scrollbars='+scroll+resize+statusbar+browtoolbar+urllocation+windowtop+windowleft;
	win = window.open(url, "Downloadwindow", winprops)
}     