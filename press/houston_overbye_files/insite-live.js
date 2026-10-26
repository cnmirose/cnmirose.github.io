// Copyright 2003, NandoMedia InSite registration system

function getCookieVal(offset) {
 var endstr=document.cookie.indexOf(";",offset);
 if (endstr==-1)
 endstr=document.cookie.length;
 return unescape(document.cookie.substring(offset,endstr));
}
function GetCookie(cname) {
 var arg=cname+"="; var alen=arg.length;
 var clen=document.cookie.length; var i=0;
 while (i<clen) {
 var j=i+alen;
 if (document.cookie.substring(i,j)==arg) return getCookieVal (j); i=document.cookie.indexOf("",i)+ 1;
 if (i==0) break;
 } return null;
}
function SaveCookie(cname,cvalue,cdays,cpath) {
 ex = new Date; ex.setTime(ex.getTime() + (cdays*86400000));
 if (cpath == null) { cpath = "/" }
 else { cpath = "; path=" + cpath }
 document.cookie=cname + '=' + cvalue + '; expires=' + ex.toGMTString() + cpath + "; domain=chron.com";
}

// Enables showing/hiding member links via styles and sets "uid" with username if cookie present
if (GetCookie("chron_user_auth")) { 
	var uid = GetCookie("chron_user_auth").replace(/\|.*/,"");
	document.write("<style>.nonmember{display:none;}</style>");
	// alert ("found member\n");
} else { 
	document.write("<style>.member{display:none;}</style>");
	// alert ("found nonmember\n");
}

// Threshold Script
var insitecookie="chron_user_auth";
var loginpage="http://insite.chron.com/user_registration/?goto=";
var daystoblock=7;
var daystokeep=1;
var threshold=6; 			// This is default value, which code below can overule
var threshold_cookie="pagecount";	// This is default value, which code below can overule

if (!GetCookie(insitecookie)) {
 if (!GetCookie(threshold_cookie)) {
  SaveCookie(threshold_cookie,1,daystokeep,'/');
 } else {
  incval = eval(GetCookie(threshold_cookie)) + 1;
  SaveCookie(threshold_cookie,incval,daystokeep,'/') ;
  if (incval>threshold) {
      SaveCookie(threshold_cookie,incval,daystoblock,'/') ;
    // if (confirm("Redirect to login page\n(from " + document.location + ")?\n")) {
      location=loginpage+escape(document.location);
    // }
  }
 }
} else {
  if (threshold < 10000) {
    document.write("<s"+"cript language='JavaScript1.2' src='http://insite.chron.com/secure/index.jss?ref="+document.referrer+"'><\/script>");
  }
}

