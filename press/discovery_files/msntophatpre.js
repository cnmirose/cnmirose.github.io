/* MSN HEADER [pre] JS */

/* ------------------------------------------------------------------------ set variables */
// get the referal url string and break it down to "alias.domain.com"
var msnDomain = window.location.hostname.toLowerCase();
var msnReferal = escape(document.referrer) + "";
msnReferal = msnReferal.toLowerCase();

if (msnReferal.indexOf("http%3a//") == 0) { var msnTrunkReferal = msnReferal.slice(9); } else { var msnTrunkReferal = msnReferal; }
if ((msnTrunkReferal.indexOf(".msn.com") != -1) && (msnTrunkReferal.indexOf("ca.") == -1)) { var msnDomainFlag = true; }
if (msnTrunkReferal.indexOf(".msn.com/kids/") != -1) { var kidUnder8Flag = true; var msnDomainFlag = false; }
if (msnTrunkReferal.indexOf(".msn.com/kidz/") != -1) { var kidOver8Flag = true; var msnDomainFlag = false; }

// base url for header include
var baseHeaderURL = "http://msn.discovery.com/includes/v9/";

// expiration [ 1000(milliseconds) * 60(seconds) * 60(minutes) * 24(hours) * 1(days) ]
var thisDay = new Date();
var msnDie = new Date();
msnDie.setTime(thisDay.getTime() + 1000*60*60*24*0.25);

// split current url to pull second directory off doc root
var wlp = window.location.pathname;
var wlpDirs = wlp.split("/");

// get the cookie and split it ( 0 = header type, 1 = 2nd dir. off doc root
var msnCookie = getCookie("MSNHeader");
if (msnCookie) { var msnCookieItems = msnCookie.split("|"); }

// set cookie values
var ku8val = "kids" + "|" + wlpDirs[2];
var ko8val = "kidz" + "|" + wlpDirs[2];
var stdval = "standard" + "|" + wlpDirs[2];


/* ------------------------------------------------------------------------ tests [if(s)] */
// if ( cookie exists : test for header type and then dir. str. )
// else if ( look for referal flag : set cookie )
if (msnCookie) {
	if ((msnCookieItems[0] == "kids") && (msnCookieItems[1] == wlpDirs[2])) { document.write("<iframe id=\"msntophat\" name=\"msntophat\" src=\"" + baseHeaderURL + "kids.html\" width=\"770\" height=\"35\" style=\"margin: 0px 0px 0px 0px; border: 0px 0px 0px 0px;\" frameborder=\"0\" scrolling=\"no\"></iframe>"); }
	if ((msnCookieItems[0] == "kidz") && (msnCookieItems[1] == wlpDirs[2])) { document.write("<iframe id=\"msntophat\" name=\"msntophat\" src=\"" + baseHeaderURL + "kidz.html\" width=\"770\" height=\"35\" style=\"margin: 0px 0px 0px 0px; border: 0px 0px 0px 0px;\" frameborder=\"0\" scrolling=\"no\"></iframe>"); }
	if ((msnCookieItems[0] == "standard") && (msnCookieItems[1] == wlpDirs[2])) { document.write("<iframe id=\"msntophat\" name=\"msntophat\" src=\"" + baseHeaderURL + "default.html\" width=\"770\" height=\"65\" style=\"margin: 0px 0px 0px 0px; border: 0px 0px 0px 0px;\" frameborder=\"0\" scrolling=\"no\"></iframe>"); }
	if (msnCookieItems[1] != wlpDirs[2]) { deleteCookie("MSNHeader", "/", ".discovery.com"); }
}
else if (kidUnder8Flag == true) {
	setCookie("MSNHeader", ku8val, msnDie, "/", ".discovery.com");
	document.write("<iframe id=\"msntophat\" name=\"msntophat\" src=\"" + baseHeaderURL + "kids.html\" width=\"770\" height=\"35\" style=\"margin: 0px 0px 0px 0px; border: 0px 0px 0px 0px;\" frameborder=\"0\" scrolling=\"no\"></iframe>");
}
else if (kidOver8Flag == true) {
	setCookie("MSNHeader", ko8val, msnDie, "/", ".discovery.com");
	document.write("<iframe id=\"msntophat\" name=\"msntophat\" src=\"" + baseHeaderURL + "kidz.html\" width=\"770\" height=\"35\" style=\"margin: 0px 0px 0px 0px; border: 0px 0px 0px 0px;\" frameborder=\"0\" scrolling=\"no\"></iframe>");
}
else if (msnDomainFlag == true) {
	setCookie("MSNHeader", stdval, msnDie, "/", ".discovery.com");
	document.write("<iframe id=\"msntophat\" name=\"msntophat\" src=\"" + baseHeaderURL + "default.html\" width=\"770\" height=\"65\" style=\"margin: 0px 0px 0px 0px; border: 0px 0px 0px 0px;\" frameborder=\"0\" scrolling=\"no\"></iframe>");
}

/* END MSN HEADER [pre] JS */
