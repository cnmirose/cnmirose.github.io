/* MSN HEADER [post] JS */

/* ------------------------------------------------------------------------ cookie [functions] */
// [ kids / kidz ] current height position = 10px + 35px ( msn header height ) = 45px
// [ standard ] current height position = 10px + 65px ( msn header height ) = 75px
var wlp = window.location.pathname;
var wlpDirs = wlp.split("/");

function pushAdsDown (headerType, dirLocation) {
	if (dirLocation != wlpDirs[2]) { deleteCookie("MSNHeader", "/", ".discovery.com"); }
	else if ((headerType == "kids") || (headerType == "kidz")) { document.getElementById("absAdBanner").style.top = "45px"; }
	else if (headerType == "standard") { document.getElementById("absAdBanner").style.top = "75px"; }
}

var msnCookie = getCookie("MSNHeader");
if (msnCookie) { 
	var msnCookieItems = msnCookie.split("|");
	pushAdsDown(msnCookieItems[0], msnCookieItems[1]);
}

/* END MSN HEADER [post] JS */