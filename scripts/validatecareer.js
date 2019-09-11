var frmobj;
var errorhighlight = "#FFFBBC";
var errorfree = "#FFFFFF";


var lclobj_txtname;
var lclobj_txtemail;
var lclobj_txttelephone;
var lclobj_txtmobile;
var lclobj_txtexperience;
var lclobj_txtdegree;
var lclobj_txtpercentage;
var lclobj_txtpassout;
var lclobj_txtrelexperience;
var lclobj_txtlocation;
var lclobj_resume;

var lclobj_errname;
var lclobj_erremail;
var lclobj_errphone;
var lclobj_errmobile;
var lclobj_errexperience;
var lclobj_errdegree;
var lclobj_errpercentage;
var lclobj_errpassout;
var lclobj_errrelexperience;
var lclobj_errlocation;
var lclobj_errresume;


function initialize()
{
frmobj=document.frmCareer

lclobj_txtname=frmobj.txtname;
lclobj_txtemail=frmobj.txtemail;
lclobj_txttelephone=frmobj.txttelephone;
lclobj_txtmobile=frmobj.txtmobile;
lclobj_txtexperience=frmobj.txtexperience;
lclobj_txtdegree=frmobj.txtdegree;
lclobj_txtpercentage=frmobj.txtpercentage;
lclobj_txtpassout=frmobj.txtpassout;
lclobj_txtrelexperience=frmobj.txtrelexperience;
lclobj_txtlocation=frmobj.txtlocation;
lclobj_resume=frmobj.resume;

lclobj_errname=document.getElementById('errname');
lclobj_erremail=document.getElementById('erremail');
lclobj_errphone=document.getElementById('errphone');
lclobj_errmobile=document.getElementById('errmobile');
lclobj_errexperience=document.getElementById('errexperience');
lclobj_errdegree=document.getElementById('errdegree');
lclobj_errpercentage=document.getElementById('errpercentage');
lclobj_errpassout=document.getElementById('errpassout');
lclobj_errrelexperience=document.getElementById('errrelexperience');
lclobj_errlocation=document.getElementById('errlocation');
lclobj_errresume=document.getElementById('errresume');

}


function doValidateCareer()
{


initialize();

    /******************************************GET all error objects**************************************/
        var errorstatus = false;
        var errorobject;
		var errormessage="";
      
      
        /*************************************Name validation starts***********************************/

        if (lclobj_txtname.value.replace(/ /g, '') == "Name") {
            if (errorobject == undefined) {
                errorobject = lclobj_txtname;
                
            }
			lclobj_txtname.style.background = errorhighlight;
            lclobj_errname.innerHTML = "<br />Please enter your name";
			errorstatus = true;
        }


        else if (!isName(lclobj_txtname.value.replace(/ /g, '')) && lclobj_txtname.value.replace(/ /g, '') != "Name") {
            if (errorobject == undefined) {
                errorobject = lclobj_txtname;  				
            }
			lclobj_txtname.style.background = errorhighlight;
			errorstatus = true;				
			lclobj_errname.innerHTML = "<br />Please enter a valid name";
        }
        
        else {
                lclobj_txtname.style.background = errorfree;				
                lclobj_errname.innerHTML = "";
        }
        
        /*************************************Name validation ends***********************************/

 


        /*************************************Email validation starts***********************************/

        if (lclobj_txtemail.value.replace(/ /g, '') == "Email") {
            if (errorobject == undefined) {
                errorobject = lclobj_txtemail;                
            }
			lclobj_txtemail.style.background = errorhighlight;
			lclobj_erremail.innerHTML = "<br />Please enter your email";
			errorstatus = true;
        }


        else if (!isEmail(lclobj_txtemail.value.replace(/ /g, '')) && lclobj_txtemail.value.replace(/ /g, '') != "Email") {
            if (errorobject == undefined) {
                errorobject = lclobj_txtemail;
            }
			lclobj_txtemail.style.background = errorhighlight;
			lclobj_erremail.innerHTML = "<br />Please enter a valid email";
			errorstatus = true;			
        }
        else {

            lclobj_txtemail.style.background = errorfree;
            lclobj_erremail.innerHTML = "";
        }

        /*************************************Email validation ends***********************************/
		
		 
        /*************************************Phone Number validation starts***********************************/

        if (!isPhoneNumber(lclobj_txttelephone.value.replace(/ /g, '')) && lclobj_txttelephone.value.replace(/ /g, '') != "Telephone") {
            if (errorobject == undefined) {
                errorobject = lclobj_txttelephone;                
            }
			lclobj_txttelephone.style.background = errorhighlight;
			lclobj_errphone.innerHTML = "<br />Please enter a valid phone number";
			errorstatus = true;
        }
        else {

            lclobj_txttelephone.style.background = errorfree;
            lclobj_errphone.innerHTML = "";
        }

        /*************************************Phone Number validation ends***********************************/
		
		

        /*************************************Phone Number validation starts***********************************/

        if (!isPhoneNumber(lclobj_txtmobile.value.replace(/ /g, '')) && lclobj_txtmobile.value.replace(/ /g, '') != "MobileNo") {
            if (errorobject == undefined) {
                errorobject = lclobj_txtmobile;
            }
			lclobj_txtmobile.style.background = errorhighlight;
			lclobj_errmobile.innerHTML = "<br />Please enter a valid mobile number";
			errorstatus = true;
        }
        else {

            lclobj_txtmobile.style.background = errorfree;
            lclobj_errmobile.innerHTML = "";
        }

        /*************************************Phone Number validation ends***********************************/

		if (lclobj_txtexperience.value.replace(/ /g, '') == "") {
            if (errorobject == undefined) {
                errorobject = lclobj_txtexperience;
                
            }
			lclobj_txtexperience.style.background = errorhighlight;
            lclobj_errexperience.innerHTML = "<br />Please select total years of experience";
			errorstatus = true;
        }
        else {

            lclobj_txtexperience.style.background = errorfree;
            lclobj_errexperience.innerHTML = "";
        }

        
		

        if (lclobj_txtdegree.value.replace(/ /g, '') == "Degree") {
            if (errorobject == undefined) {
                errorobject = lclobj_txtdegree;
                
            }
			lclobj_txtdegree.style.background = errorhighlight;
            lclobj_errdegree.innerHTML = "<br />Please enter your degree";
			errorstatus = true;
        }
        else {

            lclobj_txtdegree.style.background = errorfree;
            lclobj_errdegree.innerHTML = "";
        }

		
		
		if (lclobj_txtpercentage.value.replace(/ /g, '') == "Percentage") {
            if (errorobject == undefined) {
                errorobject = lclobj_txtpercentage;
                
            }
			lclobj_txtpercentage.style.background = errorhighlight;
            lclobj_errpercentage.innerHTML = "<br />Please enter your percentage scored";
			errorstatus = true;
        }
        else {

            lclobj_txtpercentage.style.background = errorfree;
            lclobj_errpercentage.innerHTML = "";
        }

        
		
		if (lclobj_txtpassout.value.replace(/ /g, '') == "Yearofpassout") {
            if (errorobject == undefined) {
                errorobject = lclobj_txtpassout;
                
            }
			lclobj_txtpassout.style.background = errorhighlight;
            lclobj_errpassout.innerHTML = "<br />Please enter your year of passout";
			errorstatus = true;
        }
        else {

            lclobj_txtpassout.style.background = errorfree;
            lclobj_errpassout.innerHTML = "";
        }

		
		if (lclobj_txtrelexperience.value.replace(/ /g, '') == "") {
            if (errorobject == undefined) {
                errorobject = lclobj_txtrelexperience;
                
            }
			lclobj_txtrelexperience.style.background = errorhighlight;
            lclobj_errrelexperience.innerHTML = "<br />Please select your relevant experience";
			errorstatus = true;
        }
        else {

            lclobj_txtrelexperience.style.background = errorfree;
            lclobj_errrelexperience.innerHTML = "";
        }
        
		
 
	 if (lclobj_txtlocation.value.replace(/ /g, '') == "Current Location") {
            if (errorobject == undefined) {
                errorobject = lclobj_txtlocation;
                
            }
			lclobj_txtlocation.style.background = errorhighlight;
            lclobj_errlocation.innerHTML = "<br />Please enter your current location";
			errorstatus = true;
        }
        else {

            lclobj_txtlocation.style.background = errorfree;
            lclobj_errlocation.innerHTML = "";
        }
		
		

        
 
	 if (lclobj_resume.value.replace(/ /g, '') == "") {
            if (errorobject == undefined) {
                errorobject = lclobj_resume;
                
            }
			lclobj_resume.style.background = errorhighlight;
            lclobj_errresume.innerHTML = "<br />Please upload your resume";
			errorstatus = true;
        }
        else {

            lclobj_resume.style.background = errorfree;
            lclobj_errresume.innerHTML = "";
        }
		 

 
        if (!errorstatus) {

            frmobj.action ="webforms/uploadresume.asp" 
			frmobj.submit();
           
        }
		else
		{		
		errorobject.focus();
		}
		
		
}





function doReset()
{
initialize();

lclobj_txtname.value='';
lclobj_txtemail.value='';
lclobj_txttelephone.value='';
lclobj_txtmobile.value='';
lclobj_txtexperience.value='';
lclobj_txtdegree.value='';
lclobj_txtpercentage.value='';
lclobj_txtpassout.value='';
lclobj_txtrelexperience.value='';
lclobj_txtlocation.value='';
lclobj_resume.value='';

lclobj_errname.innerHTML='&nbsp;';
lclobj_erremail.innerHTML='&nbsp;';
lclobj_errphone.innerHTML='&nbsp;';
lclobj_errmobile.innerHTML='&nbsp;';
lclobj_errexperience.innerHTML='&nbsp;';
lclobj_errdegree.innerHTML='&nbsp;';
lclobj_errpercentage.innerHTML='&nbsp;';
lclobj_errpassout.innerHTML='&nbsp;';
lclobj_errrelexperience.innerHTML='&nbsp;';
lclobj_errlocation.innerHTML='&nbsp;';
lclobj_errresume.innerHTML='&nbsp;';


lclobj_txtname.style.background = errorfree;
lclobj_txtemail.style.background = errorfree;
lclobj_txttelephone.style.background = errorfree;
lclobj_txtmobile.style.background = errorfree;
lclobj_txtexperience.style.background = errorfree;
lclobj_txtdegree.style.background = errorfree;
lclobj_txtpercentage.style.background = errorfree;
lclobj_txtpassout.style.background = errorfree;
lclobj_txtrelexperience.style.background = errorfree;
lclobj_txtlocation.style.background = errorfree;
lclobj_resume.style.background = errorfree;
}

