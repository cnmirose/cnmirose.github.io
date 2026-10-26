
<!-- Begin

///// sitewide promo popwindows - WORK IN PROGRESS
///// WIM 010522
//// modified JLB 011024


 var Exp = new Array();  /// number of days cookie will last (0 = always pop, no cookie check)
 var Page = new Array(); /// page to load into the popup
 var Props = new Array(); /// window properties



///// CONFIG ///////

  /// promo hash index (see list below)
 var LoadPop   = 'freeupdate';   /// default onLoad promo
 var UnloadPop = 'promo_hotjobs';   /// default onUnload promo

  /// settings for window behavior, 1 = pops up, 0 = pops under
 var Load_UpOrUnder   = 1;
 var Unload_UpOrUnder = 1;

////////////////////



//// CURRENT COOKIED POPUPS /////

//// !!!! please keep this array list short, save offline specs to site_pops.txt
//// HASH PROMO INDEXES MUST BE IN THE ALPHANUMERIC FORMAT promo_* (files located at <docroot>/php/popup/promo/ )  

 
/////////////////// rotating popups /////////////////////////////
// JLB 7/31/01
// randnum is appended to x10 URL
// randURLnum is 0..3 (or num_popups - 1). 
// x10 is placed in Page[] hash twice to weight its probability.
// rotating popups randomly served but share a cookie
// randURLnum is appended to cookie name to select URL from array.
//

var num_popups = 2.0;
var randnum = Math.random();
var randURLnum = Math.floor(randnum * num_popups);

 Exp['irotate'] = 7;

// Page['irotate0'] = 'http://www.space.com/php/popup/promo/vseries/noad_vseries.php';
// Props['irotate0'] ='width=500,height=400,screenX=130,left=130,screenY=50,top=50,resizable=no,scrollbars=no';
// Page['irotate1'] = 'http://www.space.com/php/popup/promo/vseries/noad_vseries.php';
// Props['irotate1'] ='width=500,height=400,screenX=130,left=130,screenY=50,top=50,resizable=no,scrollbars=no';
 
Page['irotate0'] = 'http://www.space.com/php/popup/promo/freeupdate/noad_freeupdate_011002.php';
Props['irotate0'] ='width=300,height=250,screenX=130,left=130,screenY=50,top=50,resizable=no,scrollbars=no';
Page['irotate1'] = 'http://www.space.com/php/popup/promo/freeupdate/noad_freeupdate_011002.php';
Props['irotate1'] ='width=300,height=250,screenX=130,left=130,screenY=50,top=50,resizable=no,scrollbars=no';
 

 Page['spacenews'] = 'http://www.space.com/php/popup/promo/spacenews/030527v5/noad_spacenews_030527v5.php';
 Props['spacenews'] ='width=300,height=250,screenX=130,left=130,screenY=50,top=50,resizable=no,scrollbars=no';

// rotating popunders
var num_popunders = 2.0;
var randURLnum2 = Math.floor(randnum * num_popunders);

//Exp['urotate'] = 3;


//Page['urotate0'] = 'http://www.space.com/php/popup/promo/starrynight/noad_sn_300_pro4x_021216.php';
//Props['urotate0'] ='width=300,height=250,screenX=130,left=130,screenY=50,top=50,resizable=no,scrollbars=no';
//Page['urotate1'] = 'http://www.space.com/php/popup/promo/starrynight/noad_sn_300_by4x_021216.php';
//Props['urotate1'] ='width=300,height=250,screenX=130,left=130,screenY=50,top=50,resizable=no,scrollbars=no';


/////////////////// end rotating popups ///////////////////////////// 

 function GetCookie (name) {
 var arg = name + "=";
 var alen = arg.length;
 var clen = document.cookie.length;
 var i = 0;
 while (i < clen) {
 	var j = i + alen;
 	if (document.cookie.substring(i, j) == arg)
 	return getCookieVal (j);
 	i = document.cookie.indexOf(" ", i) + 1;
 	if (i == 0) break;
 	}
 return null;
 }
 

 function SetCookie (name, value) {
 var argv = SetCookie.arguments;
 var argc = SetCookie.arguments.length;
 var expires = (argc > 2) ? argv[2] : null;
 //var expires =  null;
  var path = "/"; // (argc > 3) ? argv[3] : null;
 var domain = (argc > 4) ? argv[4] : null;
 var secure = (argc > 5) ? argv[5] : false;
 document.cookie = name + "=" + escape (value) +
 ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
 ((path == null) ? "" : ("; path=" + path)) +
 ((domain == null) ? "" : ("; domain=" + domain)) +
 ((secure == true) ? "; secure" : "");
 
// take out path info for site-wide popups
// ((path == null) ? "" : ("; path=" + path)) +

 }


 function getCookieVal(offset) {
 var endstr = document.cookie.indexOf (";", offset);
 if (endstr == -1)
 	endstr = document.cookie.length;
 return unescape(document.cookie.substring(offset, endstr));
 }



 function PopIt(cookieName) {
 var cookieValue = GetCookie(cookieName);
 
var windowName = (Load_UpOrUnder == 0) ? 'PromoPopunder' : 'PromoPopup';

if (Load_UpOrUnder == 0) 
	var pageName = (cookieName == 'urotate') ? cookieName + randURLnum2 : cookieName;
else 
	var pageName = (cookieName == 'irotate') ? cookieName + randURLnum : cookieName;

 if (Exp[cookieName] == 0) {
	var popwin = window.open(Page[pageName],windowName, Props[pageName]);
	if (Load_UpOrUnder == 0)
		self.focus();
	else
		popwin.focus();
 } else {
	 if (cookieValue == null) {
 		cookieValue = 1;
		var exp = new Date();
		exp.setTime(exp.getTime() + (Exp[cookieName]*24*60*60*1000));
 		SetCookie(cookieName, cookieValue, exp);
 		var popwin = window.open(Page[pageName],windowName, Props[pageName]); 
		if (Load_UpOrUnder == 0)
			self.focus();
		else
			popwin.focus();
 } 		}
 
}



 function PageLoad(section) {

         LoadPop   = 'irotate';
     //// conditionals for various sections as needed.

     //// supress popups for space news, except subscription popup on main page
     if (section.substr(0,10) == 'space news') {
         if (section == 'space news') {
             LoadPop = 'spacenews';
         } else {
             return;
         }
         return;
     }
        
     //// supress popups for space news, except subscription popup on main page
     if (section.substr(0,9) == 'spacenews') {
         if (section == 'spacenewshome') {
             LoadPop = 'spacenews';
             Load_UpOrUnder = 1;
             PopIt(LoadPop); 
 
       } else {
             LoadPop   = 'irotate';
             return;
         }
         return;
     }
        
         if (section != 'homepage') {

             LoadPop = 'irotate';
             Load_UpOrUnder = 1;
             PopIt(LoadPop);
             
       }


     
//     Load_UpOrUnder = 0;
//     LoadPop   = 'urotate';
//     PopIt(LoadPop);     



 }




 function PageUnload () {
  /// DOES NOT WORK!!!
// if (exit_flag == 0)
//	{
	PopIt(UnloadPop);
//	}
 }




 function WindowExit(popThis) {

 if (popThis == null) /// if no paramater, use config default setting
	popThis = UnloadPop;

  /// NOTE: for Netscape the window.open() statement must be here for it to work when
  /// users close the calling window; the PopIt() function does not work
popwin = window.open(Page[popThis],"PromoPopup", Props[popThis]);
 }
 

function ExternalPop() {



}


 //  End -->
