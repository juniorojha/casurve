var errorhighlight = "#FFFBBC";
var errorfree = "#FFFFFF";

function doValidateContactUs() 
{
    /**********************Take all the values of form*****************************************/
        if (document.getElementById('txtname')) {
            var lclobj_fname = document.getElementById('txtname')
        }
        if (document.getElementById('txtCompany')) {
            var lclobj_Companyname = document.getElementById('txtCompany')
        }
        if (document.getElementById('txtDesignation')) {
            var lclobj_designation = document.getElementById('txtDesignation')
        }
		if (document.getElementById('txtAddress')) {
        var lclobj_address = document.getElementById('txtAddress')
		}
        if (document.getElementById('txtPhone')) {
            var lclobj_phoneno = document.getElementById('txtPhone')
        }
        if (document.getElementById('txtEmail')) {
            var lclobj_emailid = document.getElementById('txtEmail')
        }
		
		if (document.getElementById('selEnqtype')) {
            var lclobj_enqtype = document.getElementById('selEnqtype')
        }
		if (document.getElementById('txtothers')) {
            var lclobj_qnothers = document.getElementById('txtothers')
        }
		
        if (document.getElementById('txtcomments')) {
            var lclobj_message = document.getElementById('txtcomments')
        }
		
		if (document.getElementById('errname')) {
            var lclobj_errname = document.getElementById('errname')
        }
		if (document.getElementById('errcompany')) {
            var lclobj_errcompany = document.getElementById('errcompany')
        }
		if (document.getElementById('errdesignation')) {
            var lclobj_errdesignation = document.getElementById('errdesignation')
        }
		if (document.getElementById('erraddress')) {
            var lclobj_erraddress = document.getElementById('erraddress')
        }
		if (document.getElementById('errphone')) {
            var lclobj_errphone = document.getElementById('errphone')
        }
		if (document.getElementById('erremail')) {
            var lclobj_erremail = document.getElementById('erremail')
        }
		if (document.getElementById('errqnabt')) {
            var lclobj_errqnabt = document.getElementById('errqnabt')
        }
		if (document.getElementById('errqnothers')) {
            var lclobj_errqnabtothers = document.getElementById('errqnothers')
        }
        if (document.getElementById('errcomments')) {
            var lclobj_errcomments = document.getElementById('errcomments')
        }

        /**********************Take all the values of form ends*****************************************/
        var errorstatus = false;
        var errorobject;
		var errormessage=""
      
      
        /*************************************Name validation starts***********************************/

        if (lclobj_fname.value.replace(/ /g, '') == "Name") {
            if (errorobject == undefined) {
                errorobject = lclobj_fname;
                errorstatus = true;
                errorobject.style.background = errorhighlight;
                lclobj_errname.innerHTML="<BR>" + contactus[0];
            }
        }


        else if (!isName(lclobj_fname.value) && lclobj_fname.value.replace(/ /g, '') != "Name") {
            if (errorobject == undefined) {
                errorobject = lclobj_fname;
               
            }
			lclobj_fname.style.background = errorhighlight;
			errorstatus = true;
			lclobj_errname.innerHTML= "<BR>" + contactus[1];
        }
        
        else {
            lclobj_fname.style.background = errorfree;                
			lclobj_errname.innerHTML=""
        }
        
        /*************************************Name validation ends***********************************/




        /*************************************Company Name validation starts***********************************/

        if (lclobj_Companyname.value.replace(/ /g, '') == "Company") {
            if (errorobject == undefined) {
                errorobject = lclobj_Companyname;
                
            }
			lclobj_Companyname.style.background = errorhighlight;
            lclobj_errcompany.innerHTML= "<BR>" + contactus[2];
            errorstatus = true;
        }


        else if (!isOrganization(lclobj_Companyname.value) && lclobj_Companyname.value.replace(/ /g, '') != "Company") {
            if (errorobject == undefined) {
                errorobject = lclobj_Companyname;
                
            }
			lclobj_Companyname.style.background = errorhighlight;
			lclobj_errcompany.innerHTML= "<BR>" + contactus[3];
			errorstatus = true;
        }
        else {
           
            lclobj_Companyname.style.background = errorfree;         
			lclobj_errcompany.innerHTML=""
        }

        /*************************************Company Name validation ends***********************************/
 
 
        
        if (lclobj_designation.value.replace(/ /g, '') == "Designation") {
            if (errorobject == undefined) {
                errorobject = lclobj_designation;
                
            }
			lclobj_designation.style.background = errorhighlight;
            lclobj_errdesignation.innerHTML= "<BR>" + contactus[17];
            errorstatus = true;
        }

        else {
           
            lclobj_designation.style.background = errorfree;       
			lclobj_errdesignation.innerHTML=""
        }
  
 
 
 

        if (lclobj_address.value.replace(/ /g, '') == "Address") {
            if (errorobject == undefined) {
                errorobject = lclobj_address;
                
            }
			lclobj_address.style.background = errorhighlight;
			lclobj_erraddress.innerHTML="<BR>" + contactus[4];
            errorstatus = true;
        }


        else if (!isRemarks(lclobj_address.value) && lclobj_address.value.replace(/ /g, '') != "Address") {
            if (errorobject == undefined) {
                errorobject = lclobj_address;
                
            }
			lclobj_address.style.background = errorhighlight;
            lclobj_erraddress.innerHTML="<BR>" + contactus[18];
             errorstatus = true;
        }
        else {
           
            lclobj_address.style.background = errorfree; 
			lclobj_erraddress.innerHTML="";
        }
 
 

        /*************************************Phone Number validation starts***********************************/
		if (lclobj_phoneno.value.replace(/ /g, '') == "Phone") {
            if (errorobject == undefined) {
                errorobject = lclobj_phoneno;
                
            }
			lclobj_phoneno.style.background = errorhighlight;
            lclobj_errphone.innerHTML="<BR>" + contactus[7];
            errorstatus = true;
        }

        else if (!isPhoneNumber(lclobj_phoneno.value) && lclobj_phoneno.value.replace(/ /g, '') != "Phone") {
            if (errorobject == undefined) {
                errorobject = lclobj_phoneno;
            }
			lclobj_phoneno.style.background = errorhighlight;
			lclobj_errphone.innerHTML="<BR>" + contactus[8];
            errorstatus = true;
        }
        else {
             lclobj_phoneno.style.background = errorfree; 
			 lclobj_errphone.innerHTML=""
        }

        /*************************************Phone Number validation ends***********************************/



        /*************************************Email validation starts***********************************/

        if (lclobj_emailid.value.replace(/ /g, '') == "Email") {
            if (errorobject == undefined) {
                errorobject = lclobj_emailid;
                
            }
			lclobj_emailid.style.background = errorhighlight;
            lclobj_erremail.innerHTML="<BR>" + contactus[9];
            errorstatus = true;
        }


        else if (!isEmail(lclobj_emailid.value) && lclobj_emailid.value.replace(/ /g, '') != "Email") {
            if (errorobject == undefined) {
                errorobject = lclobj_emailid;
                
            }
			lclobj_emailid.style.background = errorhighlight;
            lclobj_erremail.innerHTML= "<BR>" + contactus[10];
            errorstatus = true;
        }
        else {          
           lclobj_emailid.style.background = errorfree; 
		   lclobj_erremail.innerHTML=""
        }

        /*************************************Email validation ends***********************************/

		
		
		 if (lclobj_enqtype.value.replace(/ /g, '') == "") {
            if (errorobject == undefined) {
                errorobject = lclobj_enqtype;
                
            }
			lclobj_enqtype.style.background = errorhighlight;
            lclobj_errqnabt.innerHTML= "<BR>" + contactus[19];
            errorstatus = true;
        }

        else {
           
            lclobj_enqtype.style.background = errorfree;       
			lclobj_errqnabt.innerHTML=""
        }
		
		
		if (lclobj_enqtype.value.replace(/ /g, '') == "Others" && lclobj_qnothers.value=="if others please specify") {
            if (errorobject == undefined) {
                errorobject = lclobj_qnothers;
                
            }
			lclobj_qnothers.style.background = errorhighlight;
            lclobj_errqnabtothers.innerHTML= "<BR>" + contactus[20];
            errorstatus = true;
        }

        else {
           
            lclobj_qnothers.style.background = errorfree;       
			lclobj_errqnabtothers.innerHTML=""
        }
		

        /*************************************Remarks validation starts***********************************/

        if (lclobj_message.value.replace(/ /g, '') == "Comments/Feedback") {
            if (errorobject == undefined) {
                errorobject = lclobj_message;
                
            }
			lclobj_message.style.background = errorhighlight;
            lclobj_errcomments.innerHTML="<BR>" + contactus[11];
            errorstatus = true;
        }


        else if (!isRemarks(lclobj_message.value) && lclobj_message.value.replace(/ /g, '') != "Comments/Feedback") {
            if (errorobject == undefined) {
                errorobject = lclobj_message;
               
            } 
			lclobj_message.style.background = errorhighlight;
            lclobj_errcomments.innerHTML="<BR>" + contactus[12];
            errorstatus = true;
        }
        else {          
             lclobj_message.style.background = errorfree;
			 lclobj_errcomments.innerHTML=""
        }

        /*************************************Remarks validation ends***********************************/
	
        if (!errorstatus) {
			//document.getElementById('frmerror').innerHTML="* All fields are Mandatory";
            lclvar_fname=escape(lclobj_fname.value)
            lclvar_compname=escape(lclobj_Companyname.value)
            lclvar_designation = escape(lclobj_designation.value)
			lclvar_address= escape(lclobj_address.value)
            lclvar_phoneno = escape(lclobj_phoneno.value)
            lclvar_emailid = escape(lclobj_emailid.value)
            lclvar_message = escape(lclobj_message.value)            
			lclvar_qnabt = escape(lclobj_enqtype.value)
            lclvar_qnabtothers = escape(lclobj_qnothers.value)
            


			
            var url = "name=" + lclvar_fname + "&CompanyName=" + lclvar_compname + "&address=" + lclvar_address+ "&phoneno=" + lclvar_phoneno + "&emailid=" + lclvar_emailid + "&message=" + lclvar_message + "&sid=" + Math.random();			
			url=url+"&designation="+lclvar_designation
			url=url+"&qnabt="+lclvar_qnabt
			url=url+"&qnabtothers="+lclvar_qnabtothers
            doPostAddData("webforms/savecontactus.asp",url,"contactuscheck")  
        }
		else
		{
			//document.getElementById('frmerror').innerHTML=errormessage
			errorobject.focus();
		}
     

}

function contactuscheck(returnvalue)
{
  if(returnvalue=="Completed")
  {
    document.getElementById('contactus').innerHTML="<br /><font class='error_message'>"+contactus[15]+"</font>"; 
  }
  else
  {
	document.getElementById('frmerror').innerHTML="<br /><font class='error_message'>"+contactus[16]+"</font>";   
  }
}

function calculateCharacters() {
    dolimit(document.getElementById('message'), 1000)
    if (document.getElementById('message')) {
        var lclobj_message = document.getElementById('message')
    }
    document.getElementById('count').innerHTML = lclobj_message.value.length;
}

function chkEnquiry(obj)
{
   if(obj.value=="Others")
   {
      document.getElementById('qnothers').style.display="";	  
   }
   else
   {   
      document.getElementById('qnothers').style.display="none";
	  document.getElementById('txtothers').value="if others please specify";
	  document.getElementById('errqnothers').innerHTML="&nbsp;"
   }
   
}