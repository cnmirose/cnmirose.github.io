//
// This file contains all the javascript functions used
// for the ET Core site. It is included in the
// main.jhtml file and contains functions for JavaScript 1.1
//
function newSearchPopupWindow(url) {
 	newWin = window.open(url,'nOpWin','height=472,width=298,scrollbars,resizable,directories')
 	newWin.moveTo(50,50)
 	newWin.focus()
}
function newOpinionPopupWindow(url) {
 	newWin = window.open(url,'nOpWin','height=472,width=305,scrollbars,resizable,directories')
 	newWin.moveTo(50,50)
 	newWin.focus()
}
function newPopupWindow(url) {
	newWin = window.open(url,'nWin','height=450,width=305,scrollbars,resizable,directories')
	newWin.moveTo(50,50)
	newWin.focus()
}
function newFullPopupWindow(url) {
	newWin = window.open(url,'nPWin','width=740,height=600,scrollbars,resizable,menubar,status,toolbar,location,directories')
	newWin.moveTo(50,50)
	newWin.focus()
}
function newBigPopupWindow(url) {
	newWin = window.open(url,'nPWin','width=800,height=600,scrollbars,resizable,menubar,status,toolbar,location,directories')
	newWin.moveTo(50,50)
	newWin.focus()
}
function newExPopupWindow(url) {
	newWin = window.open(url,'nExWin','height=550,width=328,scrollbars,resizable,directories')
	newWin.moveTo(50,50)
	newWin.focus()
}
function newUpdatesPopupWindow(url) {
	newWin = window.open(url,'UpdatesPopup','height=573,width=408,scrollbars,resizable,directories')
	newWin.moveTo(50,50)
	newWin.focus()
}
function newSlidesPopupWindow(url) {
	newWin = window.open(url,'SlidesPopup','height=512,width=468,scrollbars,resizable,directories')
	newWin.moveTo(50,50)
	newWin.focus()
}
function MattWindow(sURL) {
	newWin = window.open(sURL,'matt','scrollbars,resizable,width=392,height=580,directories')
	newWin.moveTo(50,50)
	newWin.focus()
}
function AlexWindow(sURL) {
	newWin = window.open(sURL,'alex','scrollbars,resizable,width=820,height=505,directories')
	newWin.moveTo(50,50)
	newWin.focus()
}
function criticChoicePopupWindow(url) {
	newWin = window.open(url,'Critics Choice','height=573,width=408,scrollbars,resizable,directories')
	newWin.moveTo(50,50)
	newWin.focus()
}


// popup print window functn moved from ToolbarFrag.html - NJ,090701
function newPopupPrintWindow(url) {
	newWin = window.open(url,'nWin','height=600,width=600,scrollbars,resizable,toolbar,menubar,directories')
	newWin.moveTo(50,50)
	newWin.focus()
}

// swap fnctn moved from core.js - NJ,090701
function swap(imageObj, imageName) {
	if (document.images) eval("document." + imageObj + ".src = '/core/images/" + imageName + ".gif'");
}

// links for the Glass website (motoring)
// required for links from site index.
function openUsedCars(targetURL) {
	var URL = targetURL + '&htnmWS=http://motoring.telegraph.co.uk';
	URL += '&htnmJS=http://motoring.telegraph.co.uk/motoring/glass.js';
	URL += '&htnmSS=http://motoring.telegraph.co.uk/ETXsl/motoring/motoring.css';
  window.location.href=URL;
}
function openNewCars(targetURL) {
	var URL = targetURL + '&htnmWS=http://motoring.telegraph.co.uk';
	URL += '&htnmJS=http://motoring.telegraph.co.uk/motoring/glass_new_cars.js';
	URL += '&htnmSS=http://motoring.telegraph.co.uk/ETXsl/motoring/motoring.css';
  window.location.href=URL;
}
function openValuations(targetURL) {
	var URL = targetURL + '&htnmWS=http://motoring.telegraph.co.uk';
	URL += '&htnmJS=http://motoring.telegraph.co.uk/motoring/glass.js';
	URL += '&htnmSS=http://motoring.telegraph.co.uk/ETXsl/motoring/motoring.css';
  window.open(URL, 'uvvWindow', 'scrollbars,status,width=484,height=580,screenX=200,screenY=20');
  window.location.href='http://motoring.telegraph.co.uk/motoring/index.jhtml';
}

// popup window for TopTen Cars Chart - CR855 27/6/02

function newTop10PopupWindow(url) {
	newWin = window.open(url,'UpdatesPopup','height=600,width=446,scrollbars,resizable,directories')
	newWin.moveTo(50,50)
	newWin.focus()
}

function encodeurl(https://bucket.worldofbits.brown.edu/press/telegraph_highfield_files/url) {

	var encodedurl = url;

	var i = url.indexOf('.jhtml');
	if (i != -1 &&
			(url.indexOf('$sessionid$') == -1) &&
			(url.indexOf('mailto:') == -1) &&
			sessionidstring != '') {
		encodedurl = url.substring(0,i+6);
		encodedurl += sessionidstring;
		encodedurl += url.substring(i+6);
	}
	return encodedurl;
}

function newWindow(url, name, features) {
	var newWin = window.open(encodeurl(https://bucket.worldofbits.brown.edu/press/telegraph_highfield_files/url),name,features);
	newWin.moveTo(50,50);
	newWin.focus();
}

function quizPopupWindow(url) {
        newWin = window.open(url,'nWin','height=400,width=350,scrollbars,resizable,directories')
        newWin.moveTo(50,50)
        newWin.focus()
}


// TZ cookie removal code for telegraph
// 
// This file will expire the current tz cookies by setting exp date to unix epoch
// Telegraph have ads in the range 242 to 979
// cookie name: tz_00000xxx/  

function tz_GetCookie(name) {
	var arg = name;
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen) {
		var j= i + alen;
		if (document.cookie.substring(i, j) == arg) 
			return document.cookie.substring(i, j);
		i = document.cookie.indexOf(" ", i) + 1;
		if (i ==0) break;
	}
return null;
}

function tz_removeCookie(name, path, domain) {
	if (tz_GetCookie(name)) {
	//	alert("found matching cookie");
		document.cookie = name + "=" +
		((path) ? "; path=" + path : "") +
		((domain) ? "; domain=" + domain : "") +
		"; expires=Thu, 01-Jan-1970 00:00:01 GMT";
	}

}

// We need to remove these cookies across the whole of the telegraph.co.uk domain
// and also for www.telegraph.co.uk

if (document.cookie.length > 0 ) {
        if (document.cookie.indexOf("tz_") != -1) {
		for (w=242; w<980; w++){
			tz_removeCookie('tz_00000' + w + "/", "/", "telegraph.co.uk");
			tz_removeCookie('tz_00000' + w + "/", "/", "www.telegraph.co.uk");
		}
	}
}

// End TZ Cookie removal code
