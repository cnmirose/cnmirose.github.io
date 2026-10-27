
//New window that will be used by Prod full Desc page
//by passing in all the properties
 function openWindow(url, name, properties)
 {
   var newWin = window.open(url, name, properties);
   newWin.focus();
 }

function goGlossary(url) {
	var glossWin= window.open(url, 'glossary', 'height=500,width=300,resizeable,scrollable');
	glossWin.focus();
}
	
function goPrintable(url) {
	var printWin= window.open(url, 'print_win');
	printWin.focus();
}

function checkSKUSelection() {
	var frm = document.forms["skuForm"];
	for (var i=0; i<frm.elements.length; i++) {
		var elm = frm.elements[i];
		if (elm.type.indexOf("select") != -1) { 
			if (elm.selectedIndex <= 0) { 
				alert("Please select an option for " + elm.options[0].value + ".");
				elm.focus();
				return false;
			}
		}
	}
	return true;
}

function submitSKUForm() {
	if (checkSKUSelection() == true) {
		document.forms["skuForm"].submit();
	}
}

function checkZip(zpcd) {
  var lv_pattern = /^\d{5}$|^\d{5}\-?\d{4}$/;
  var passed = lv_pattern.test(zpcd);
  if (!passed) {
  	alert("The zipcode you entered is not valid.  Please re-enter zipcode.");
  	return false;
  }
  else {
  	return true;
  }
}

function openInstallationCost(url) {
  var win0 = window.open(url, 'install_cost', 'scrollbars=yes,menubar=yes,toolbar=no,status=no,width=375,height=325,screenX=300,screenY=175');
  win0.focus();
}

function openShipCalc(url) {
  var win1 = window.open(url, 'ship_calc', 'resizable=yes,directories=no,scrollbars=yes,menubar=no,toolbar=no,location=no,status=no,width=520,height=450');
  win1.focus();   
}

function openDeliveryCalc() {
	var win2 = window.open("/sears/popup_deliverycalc.html", "deliver_calc", "directories=no,scrollbars=yes,menubar=yes,toolbar=no,status=no,width=545,height=350");
	win2.focus();
}

 function openRebate(url) {
  var rebateWin = window.open(url, 'popup', 'scrollbars=yes,menubar,toolbar,width=450,height=300,screenX=300,screenY=175');
  rebateWin.focus();
 }

function fn_kw_checkKeyword()
{
	lv_keywordText = document.forms[0].elements["keyword"].value;    
	var lv_emptyString = "";
	for(var t=0; t< lv_keywordText.length; t++ )
		lv_emptyString = lv_emptyString + " ";
	      
	if( lv_keywordText.length == 0 || lv_emptyString == lv_keywordText )
	{
		lv_keywordText = "";
		return(false);  
	} 
	document.forms[0].submit();	
}


/* Changed for cycle 12
function fn_kw_checkKeyword()
{
  lv_keywordText = document.forms[0].elements["keyword"].value;   
  selectedVertical = document.forms[0].elements["verticalFullName"].value;
  var lv_emptyString = "";
  for(var t=0; t< lv_keywordText.length; t++ )
      lv_emptyString = lv_emptyString + " ";
      
  if( lv_keywordText.length == 0 || lv_emptyString == lv_keywordText )
    {
        lv_keywordText = "";
      return(false);  
    } 
  document.forms[0].reset();
  document.forms[0].elements["keyword"].value = lv_keywordText;
  document.forms[0].elements["verticalFullName"].value = selectedVertical;
  return( true );
}
*/
//
 // Email Verification and Validation (Date 07/27/2003)
 //
 
 function validateEmailAddress(email){
    var regex1 = /^[^\s@]+@([A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]\.|[A-Za-z0-9]\.)+([A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]|[A-Za-z0-9])$/;
    var regex2 = /^(root@|abuse@|spam@)/;
    if(!email.match(regex1)){
   //   alert("The e-mail address you entered appears incorrect. (Example of a correct address: sears@sears.com.) Please check your information and try again.");
	    return false;
    } else if(email.match(regex2)){
        alert(email + " is not allowed");
        return false;
    }
    return true;
}


function verifyEmailAddresses(email1, email2)
{
	
    if(email1 == null || email2 == null){
	    alert("Email address is required");
	    return false;
	}
		if(!validateEmailAddress(email1)){
		   alert("The e-mail address you entered appears incorrect. (Example of a correct address: sears@sears.com.) Please check your information and try again.");
			return false;
		email1.select(); 
		email1.focus();
	}
	
	if(!validateEmailAddress(email2)){
	   alert("The Confirm Email address you entered appears incorrect. (Example of a correct address: sears@sears.com.) Please check your information and try again.");
			return false;
		email2.select(); 
		email2.focus();
	}
			
	
	var emailr = email1.replace(/\+/g, "\\+");      // SY 04/16/04 PD00018534
        var regex = new RegExp("^" + emailr + "$","i"); // in case there's '+' in the email address
	if(email2.match(regex) == null)
	{
         alert(" The e-mail addresses you entered below are not the same. Please check your address and try again.");
		return false;
		email1.select(); 
		email1.focus();
    	}
   	
	return true;
}

function verifyCheckoutParameters(pwd,pwdconfirm,pwdhint)
{
	var lv_ok;
	if(pwd.value==null || pwd.value=="")
 	{
 		alert("Please, enter the password");
 		lv_ok=-1;
 		pwd.focus();
 		return lv_ok;
 		
 	}
 	else if(pwdconfirm.value==null || pwdconfirm.value=="")
 	{
 		alert("Re-enter password is required field");
 		lv_ok=-1;
 		pwdconfirm.focus();
 		return lv_ok;
 		
 	}
 	else if(pwd.value!=pwdconfirm.value)
 	{
 		alert("The password and the re-entered password must be the same");
 		lv_ok=-1;
 		pwdconfirm.focus();
 		return lv_ok;
 	}
 	else if(hint.value ==null || hint.value =="")
 	{
 		alert("Password hint is required field");
 		lv_ok=-1;
 		hint.focus();
 		return lv_ok;
 	}
        
        return lv_ok;
}