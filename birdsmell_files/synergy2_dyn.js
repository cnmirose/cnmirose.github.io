<!-- // hide it from old browsers
/* Function to load images. 
 *	note: make this empty method so that 
 * 1) mininize code changes; 2) for future integration; 3) easier to take the feature back
 */
function loadImages() {
}

function MM_findObj(n, d) { //v3.0
 var p,i,x; if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
 d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
 if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
 for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); return x;
}

/* Functions that swaps images. */
function MM_swapImage() { //v3.0
 var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
 if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_swapImgRestore() { //v3.0
 var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

/* Function to go to selected item in drop down menu */
function GoTo(sel, targetstr)
{
  var index = sel.selectedIndex;
  if (sel.options[index].value != '') {
	 if (targetstr == 'blank') {
	   window.open(sel.options[index].value, 'win1');
	 } else {
	   var frameobj;
	   if ((frameobj = eval(targetstr)) != null)
		 frameobj.location = sel.options[index].value;
	 }
  }
}


/**
 *	simulate a mouse event on clicking speicfied button 
 *	and then call the form to automatically submit.
 *	@param	aFrom	form to be submitted.
 *	@param	aButton	button to be simulated being clicked.
 */
function submitFormWithButtonClicked(aForm, aButton)
{
	if (document.all && document.all[aButton])
	{
		var x = document.all[aButton];
		if (x.length)
			x = x[0];
		x.click();
	}
	else
	{
		var x = aForm.action;
		if ((x.type==null) || (x.type.indexOf("select")==-1))
		{
			x += ((x.indexOf("?") > 0) ? "&" : "?");	
			x += (aButton + ".x=1");
			aForm.action = x;
		}
		else
		{
			var sltd = x.options[x.selectedIndex];
			var pfxJSBTN = "jsbtn:";
			if (sltd.value.indexOf(pfxJSBTN) == -1)
			{
				var value = (pfxJSBTN + aButton + ";" + sltd.value);
				//x.options[x.selectedIndex] = new Option(sltd.text, value, true, true);
				x.options[x.selectedIndex].value = value;
			}
		}
		aForm.submit();
	}
}


function onChangeClick(aSelect, button)
{
    var frm = aSelect.form;
    submitFormWithButtonClicked(frm, button);
}

function onChangeClick2(aSelect, button)
{
   var frm = document.forms[0];
   var x = frm.action;
   x += "?"+button+".x=1";
   frm.action = x;
   frm.submit();
}

/**	show multiple abstract */
function showMultipleAbstracts(aForm)
{
	var elmts = aForm.elements;
	var counter = 0;
	var url = "/servlet/useragent?func=synergy&synergyAction=showMultipleAbstracts";
	
	for (var i=0; i<elmts.length; i++) {
		if ((elmts[i].type == "checkbox") &&
			(elmts[i].name.indexOf("checkbox") == 0)) {
			counter++;
			if (elmts[i].checked)
				url += ("&checkbox" + counter + "=" + elmts[i].value);
		}
	}
	url += ("&entryNum=" + counter);
	url += "&multiview.x=1";
	aForm.action = url;
	aForm.submit();
}

/**	mark all check box */
function markAllCheckboxes(aForm, aNamePrefix, aChecked)
{
	var elmts = aForm.elements;
	for (var i=0; i<elmts.length; i++)
		if ((elmts[i].type == "checkbox") &&
			(elmts[i].name.indexOf(aNamePrefix) == 0))
			elmts[i].checked = aChecked;
}

function viewMarked(aForm, aDefaultChecked, url)
{

	var hasMarked = false;
	var elmts = aForm.elements;
	for (var i=0; i<elmts.length; i++) {
		if ((elmts[i].type == "checkbox") &&
			(elmts[i].name.indexOf("checkbox") == 0) &&
			(elmts[i].checked)) {
			hasMarked = true;
			break;
		}
	}

	if ((!hasMarked) && aDefaultChecked) {
		if (aForm.markall)
			aForm.markall.checked = true;
		markAllCheckboxes(aForm, "checkbox", true);
	}

	var count = 0;
	for (var i=0; i<elmts.length; i++) {
		if ((elmts[i].type == "checkbox") &&
			(elmts[i].name.indexOf("checkbox") == 0)) {
			count++;	
			if(elmts[i].checked) {
				var name = elmts[i].name;
				if (name == "checkbox")
					name += count;
				url += "&" + name + "=" + elmts[i].value;
			}
		}
	}
	url += "&entryNum=" + count;
	window.location = url;
}

/*Function to generate a popup window, with params to pass to dispatcher */
function popup(citart, id, doi, ptype, area) {
	if (area == null)
		area = "";
	else
	    area = "&area=" + area;
	var popupURL = "/servlet/useragent?func=synergy&synergyAction=showPopup&citid=" + citart + "&id=" + id + "&doi=" + doi + area;
	var winname = ptype;
	var n = window.open(popupURL, winname, 'resizable=yes,scrollbars=yes,width=600,height=500');
	n.moveTo(10,10)
	n.focus();
}

/* Function to show next search page */
function searchNextResultPage(aForm, aOffset)
{
	var x = eval(aForm.startPage.value) + aOffset;
	aForm.startPage.value = x;
	submitFormWithButtonClicked(aForm, "searchbutton");
}

/* Function to show help page */
function popupHelp(url)
{
	var help_window;
	var windowProperties;
	windowProperties = "width=550,height=540,top=10,left=50,toolbar=0,menubar=0,resizable=yes,scrollbars=yes"; 
	if(help_window==null) {
		help_window = window.open(url,null,windowProperties);
	} else {
		help_window.document.replace(url);
	}
}

/* Function to open up a new browser window, without a navigation bar */
function newWindow(url)
{
    var new_window;
    var windowProperties;
    windowProperties = "width=750,height=700,top=30,left=230,toolbar=0,menubar=0,resizable=1,scrollbars=yes";
    if(new_window==null) {
       new_window = window.open(url,null,windowProperties);
    } else {
       new_window.document.replace(url);
    }
}

/* Function to open up a new browser window, without a navigation bar */
function newInstitutionWindow(url)
{
    var new_window;
    var windowProperties;
    windowProperties = "width=750,height=700,top=30,left=230,toolbar=1,menubar=1,resizable=1,scrollbars=yes";
    if(new_window==null) {
       new_window = window.open(url,null,windowProperties);
    } else {
       new_window.document.replace(url);
    }
}


/**
 * Function to close the current window
 */
function close_window() {
    window.close();
}

/**
 *	get all the form elements and check if the "dbname"
 *	maps to specifid value.
 */
function checkDbName(aValue)
{
	var elements = document.forms[0].elements;
	for (var i=0; i<elements.length; i++)
	{
		var elmt = elements[i];
		if (elmt.name == "dbname")
		{
			if ((elmt.value == aValue) &&
			(elmt.type == "radio") && (elmt.checked))
				return true;
		}
	}
	return false;

}

/**
 *	@param	aAuthorArray	array stores all authors
 *	@param	aKeywordArray	array stores all keywords
 */
function getAuthorsAndKeywords(aAuthorArray, aKeywordArray)
{
	var elements = document.forms[0].elements;
	for (var i=0; i<elements.length; i++)
	{
		var elmt = elements[i];
		if ((elmt.name == "sauthcbx") ||
			(elmt.name == "sauthusercbx"))
		{
			if (elmt.checked)
				aAuthorArray[aAuthorArray.length] = 
					(elmt.name == "sauthusercbx") ?
					document.forms[0].sauthtext.value :
					elmt.value;				
		}
		else if ((elmt.name == "keycbx") ||
				 (elmt.name == "keyusercbx"))
		{
			if (elmt.checked)
				aKeywordArray[aKeywordArray.length] = 
					(elmt.name == "keyusercbx") ?
					document.forms[0].keytext.value :
					elmt.value;
		}
	}
}


function showPubMedSearch(aAuthors, aKeywords)
{
	var pmurl;
	if ((aAuthors.length>0) || (aKeywords.length>0))
	{
		// pubmed url format:
		// http://www.ncbi.nlm.nih.gov/entrez/query.fcgi
		//   ?dopt=DocSum&cmd=Search&db=PubMed
		//   &term=Bhatnagar[AU]+OR+Bagchi[AU]
		//
		pmurl = "http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?dopt=DocSum&cmd=Search&db=PubMed&term=";

		for (var i=0; i<aAuthors.length; i++)
		{
			pmurl += aAuthors[i].replace(",","+");
			pmurl += "[AU]";
			if (i < aAuthors.length-1)
				pmurl += "+OR+";
		}

		if ((aAuthors.length>0) && (aKeywords.length>0))
			pmurl += "+OR+";

		for (var i=0; i<aKeywords.length; i++)
		{
			pmurl += aKeywords[i].replace(":"," ");
			if (i < aKeywords.length-1)
				pmurl += "+OR+";
		}
	}
	else
		pmurl = "http://www4.ncbi.nlm.nih.gov/PubMed/";

	//alert(pmurl);
	popupHelp(pmurl);
}


function showAdsSearch(aAuthors, aKeywords)
{
	var adsurl;
	if ((aAuthors.length>0) || (aKeywords.length>0))
	{
		// ads url format:
		// http://adsabs.harvard.edu/cgi-bin/nph-abs_connect?db_key=AST
		//	&sort=SCORE&ttl_syn=YES&version=1
		//	&txt_syn=YES&txt_logic=AND&text=galaxy%0D%0Astar%0D%0Aocean
		//	&aut_syn=YES&aut_logic=AND&&author=&author=jack%0D%0Asmith
		
		adsurl = 
			"http://adsabs.harvard.edu/cgi-bin/nph-abs_connect?db_key=AST" +
			"&sort=SCORE&ttl_syn=YES&version=1" +
			"&txt_syn=YES&txt_logic=AND" +
			"&aut_syn=YES&aut_logic=AND";
		if (aAuthors.length > 0)
		{
			adsurl += "&author=";
			for (var i=0; i<aAuthors.length; i++)
			{
				adsurl += aAuthors[i].replace(",","%2C");
				if (i < aAuthors.length-1)
					adsurl += "%0D%0A";
			}
		}
		
		if (aKeywords.length > 0)
		{
			adsurl += "&text=";
			for (var i=0; i<aKeywords.length; i++)
			{
				adsurl += aKeywords[i];
				if (i < aKeywords.length-1)
					adsurl += "%0D%0A";
			}
		}
	}
	else
		adsurl = "http://adsabs.harvard.edu/abstract_service.html";
		
	//alert(adsurl);
	popupHelp(adsurl);
}


function onAuthorSearchClick()
{
	var elements = document.forms[0].elements;

	// check if user has selected some checkbox
	var authors = new Array();
	var keywords = new Array();
	getAuthorsAndKeywords(authors, keywords);

	if (checkDbName("medline"))
		showPubMedSearch(authors, keywords);
	else if (checkDbName("ads"))
		showAdsSearch(authors, keywords);
	else
	{
		// we need to redirect user to pub med search engine
		var frm = document.forms[0];
		submitFormWithButtonClicked(frm, "searchauthorbutton");
	}
}


/**
 *	function deals with the user login ability.
 */
function blockLogin()
{
//	alert("All personalization features on the Blackwell-Synergy site have\n"+
//		"been temporarily disabled. You will be able to login again and\n"+
//		"personalize your settings from February 1, 2002 onwards.\n"+
//		"Thanks for your patience during this time.");

    alert(
	"Welcome to the new look Blackwell Synergy!\n\n"+
	"As a special introduction to the new site we have made all journal content\n"+
	"free to everybody until early February 2002.  You do not need to register\n"+
	"or login.\n\n"+
	"In early February the access control system will be switched on and\n"+
	"you will be able to access only the content for your subscriptions and free\n"+
	"sample issues by logging in.  You will also be able to personalise the site\n"+
	"including favorite journals, saved searches and email table of contents\n"+
	"alerts.\n\n"+
	"We hope you enjoy using the new site and welcome any feedback you have.\n\n"+
	"Blackwell Publishing");
}


/**
 *	[enter] key hack for search field.
 *	this needs to be done since we have two different search buttons
 *	for the search: "searchbutton" and "searchbuttonmain"
 */
function onSearchKeyPress()
{
	if (! document.all)
	{
		var frm = document.forms[0];
		submitFormWithButtonClicked(frm, "searchbutton");
	}
	else
	{
		var btns = ["searchbutton", "searchbuttonmain"];
		for (var i=0; i<btns.length; i++)
		{
			if (document.all[btns[i]])
				document.all[btns[i]].click();
		}
	}
}


//////////////////////////////////////////////////////////////////////////
//	code handling the [enter] key has been pressed on different
//	components.  Right now we have only one single form, without
//	this the login dispatcher will always be called when user
//	pressing [enter] key on any text field.
//////////////////////////////////////////////////////////////////////////

var navCompName   = new Array();	// navigation component name
var navCompButton = new Array();	// navigation component button

/**
 *	add specified navigation component to the internal mapping.
 *	@param	aCompName	component name to be added.
 *	@param	aBtnName	corresponding button name to be added.
 */
function addNavComponent(aCompName, aBtnName)
{
	navCompName[navCompName.length]     = aCompName;
	navCompButton[navCompButton.length] = aBtnName;
}


/**
 *	get the navigation button name according to 
 *	specified component name.
 *	@param	aCompName	component name to be handled.
 *	@return	button name which will be used for navigation.
 */
function getNavButtonName(aCompName)
{
	for (var i=0; i<navCompName.length; i++)
		if (navCompName[i] == aCompName)
			return navCompButton[i];
	//alert("getNavButtonName(): error!");
	return null;
}


/**
 *	onKeyPress handling for Netscape browser.
 *	@param	ev	Netscape event object.
 */
function netscapeKeyPress(ev) 
{
	if (ev.which == 13)
	{
		handleKeyPress(ev.target);		
		return false;
	}
}

/**
 *	onKeyPress handling for MSIE browser.
 */
function microsoftKeyPress() 
{
	if (window.event.keyCode == 13)
	{
		handleKeyPress(window.event.srcElement);
		return false;
	}
}


/**
 *	common onKeyPress handler for special fields.
 *	@param	aSrc	source object originates the request.
 */
function handleKeyPressOnSpecialFields(aSrc)
{
	// since some fields are declared as "email" (such as 
	// password reminder, forgotten password, etc)
	// we need special handling
	if (aSrc.name == "email")
	{
		if (! aSrc.form)
			return false;
			
		if (aSrc.form.name == "reminderForm")
		{
			aSrc.form.submit();
			return true;
		}
		else if (aSrc.form.forgetPassword)
		{
			aSrc.form.submit();
			return true;
		}
	}
	return false;
}


/**
 *	common onKeyPress handler.
 *	@param	aSrc	source object originates the request.
 */
function handleKeyPress(aSrc)
{
	if (handleKeyPressOnSpecialFields(aSrc))
		return;
		
	var btnName = getNavButtonName(aSrc.name);
	if (btnName == null)
		return;
		
	//alert("Enter pressed: src="https://pub-e537d4245eb54823b4ef9e72eec121b5.r2.dev/birdsmell_files/%2B%20aSrc.name%20%2B", btn=" + btnName);
	if ((btnName!=null) && (btnName!=""))
	{
		var pfxJS = "javascript:";
		if (btnName.indexOf(pfxJS) != -1)
		{
			var stmt = btnName.substring(pfxJS.length);
			eval(stmt);
		}
		else
		{
			var frm = document.forms[0];
			submitFormWithButtonClicked(frm, btnName);
		}
	}
}


// add onKeyPress handler according to current browser type.
if (! document.all) 
{
	document.captureEvents(Event.KEYPRESS);
	document.onkeypress = netscapeKeyPress;
}
else
	document.onkeypress = microsoftKeyPress;

// init all the navigation component-button pairs
addNavComponent("login",			"loginbutton");							// login
addNavComponent("password",			"loginbutton");							// login
addNavComponent("quicklinkvolume",	"quicklinkbutton");						// quick link
addNavComponent("quicklinkissue",	"quicklinkbutton");						// quick link
addNavComponent("quicklinkpage",	"quicklinkbutton");						// quick link
addNavComponent("action",			"gobutton1");							// GO button
addNavComponent("sauthtext",		"javascript:onAuthorSearchClick()");	// search
addNavComponent("keytext",			"javascript:onAuthorSearchClick()");	// search
addNavComponent("searchText",		"javascript:onSearchKeyPress()");		// search
addNavComponent("text1",			"searchbuttonmain");					// advanced search
addNavComponent("text2",			"searchbuttonmain");					// advanced search
addNavComponent("text3",			"searchbuttonmain");					// advanced search
addNavComponent("saveSearchName",	"javascript:onSaveSearchClick()");		// search 
addNavComponent("tokenKey2",		"OfferCodeContinueBtn");				// access token
addNavComponent("tokenAccess",		"AccessTokenContinueBtn");				// access token
addNavComponent("tokenAccess2",		"OfferCodeContinueBtn");				// access token
addNavComponent("offerCode",		"OfferCodeContinueBtn");				// access token
addNavComponent("tokenKey",			"OfferCodeContinueBtn");				// access token
addNavComponent("email_address",	"image");								// email to friend
addNavComponent("subject",			"image");								// email to friend
addNavComponent("activate_code",	"javascript:onInstAdminClick()");		// inst. account

// stop hiding -->
