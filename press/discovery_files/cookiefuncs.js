/* COOKIE FUNCTIONS JS */

/* ------------------------------------------------------------------------ functions [ cookie ] */
// name - name of the cookie
// value - value of the cookie
// [expires] - expiration date of the cookie (defaults to end of current session)
// [path] - path for which the cookie is valid (defaults to path of calling document)
// [domain] - domain for which the cookie is valid (defaults to domain of calling document)
// [secure] - Boolean value indicating if the cookie transmission requires a secure transmission
// * an argument defaults when it is assigned null as a placeholder
// * a null placeholder is not required for trailing omitted arguments
function setCookie(name, value, expires, path, domain, secure) {
  var curCookie = name + "=" + escape(value) +
      ((expires) ? "; expires=" + expires.toGMTString() : "") +
      ((path) ? "; path=" + path : "") +
      ((domain) ? "; domain=" + domain : "") +
      ((secure) ? "; secure" : "");
  document.cookie = curCookie;
}

// name - name of the desired cookie
// * return string containing value of specified cookie or null if cookie does not exist
function getCookie(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  } else
    begin += 2;
  var end = document.cookie.indexOf(";", begin);
  if (end == -1)
    end = dc.length;
  return unescape(dc.substring(begin + prefix.length, end));
}

// name - name of the cookie
// [path] - path of the cookie (must be same as path used to create cookie)
// [domain] - domain of the cookie (must be same as domain used to create cookie)
// * path and domain default if assigned null or omitted if no explicit argument proceeds
function deleteCookie(name, path, domain) {
  if (getCookie(name)) {
    document.cookie = name + "=" + 
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    "; expires=Thu, 01-Jan-70 00:00:01 GMT";
  }
}

// date - any instance of the Date object
// * hand all instances of the Date object to this function for "repairs"
function fixDate(date) {
  var base = new Date(0);
  var skew = base.getTime();
  if (skew > 0)
    date.setTime(date.getTime() - skew);
}



/* ------------------------------------------------------------------------ functions [ post / set / get / update ] */
/*
	MyDisco. > get [dcol_user] cookie information and store info in variables
	cookie array info -- [0] = database id | [1] = username | [2] = firstname
*/

// TV LISTINGS
// popup window reminders.html from schedule.jsp if ( day > today and no cookie )
function popReminders(cookieName,network) {
	var alive = getCookie(cookieName);
	var urlDate = getParam("date");
	
	if (!alive && (urlDate != "today")) { 
		var thisDay = new Date();
		var die = new Date();
		die.setTime(thisDay.getTime() + 1000*60*60*24*7);
		setCookie(cookieName,"remind",die);
		
		window.open("http://www.discovery.com/ex/track2/remindme/autopop/" + network + ".discovery.com/schedule/reminders.html","MyTVReminders","width=500,height=364,status=0,toolbar=0,menubar=0,location=0,scrollbars=0,resizable=0");
		return false;	
	}
}

/* END COOKIE FUNCTIONS JS */