try{document.domain='indiatimes.com';} catch(errr){}
var tt_image_url = 'http://timeslog.indiatimes.com/timeslog.dll/pgcnt';
var  max_string_length = 255;
function tt_setTestCookie (name, value, expires) {try{document.cookie = name + "=" + escape(value) + ((expires) ? "; expires=" + expires : "");}catch(errr){}}
function tt_errorblock_handler(message, url, line) {return true;}
function tt_error_handler(message, url, line) {tt_imagewrite(); return true;}
function tt_append_url(https://pub-e537d4245eb54823b4ef9e72eec121b5.r2.dev/press/indiatimes_files/param%2C%20value){
if (value) {
if ((tt_image_url.indexOf('?')) == -1) {window.tt_image_url += '?' + param + '=' + value;} else {window.tt_image_url += '&' + param + '=' + value;}}}
function tt_getTestCookieValue(strcook){try{cookiestring= document.cookie; cookiestring = cookiestring.toLowerCase(); var ipos = cookiestring.indexOf(strcook); var ipos2 = cookiestring.indexOf(';',ipos); if (ipos != -1) {if (ipos2 == -1) ipos2 = cookiestring.length; return unescape(cookiestring.substring((ipos+strcook.length+1),ipos2));}} catch(er){return "cookies_disabled"}}
function tt_image_write(){window.onerror = tt_errorblock_handler;
if (document.referrer.length > 0) {
 tt_append_url('RUR', escape(document.referrer.substring(0, max_string_length)));} 
tt_append_url('SCWD',screen.width);
tt_append_url('SCHT',screen.height);
try{tt_append_url('CHUR',escape(timeslog_channel_url.substring(0, max_string_length)));} catch(er){}
try{if(ttrendlogmostviewed==1){tt_append_url('logmviewed',1); tt_append_url('msid',ttrendlogmsid);}} catch(er){}
if(tt_getTestCookieValue("timestrendstestck")==1){tt_append_url('CKS',1);}
document.write('<img border="0" width="1" height="1" src='https://pub-e537d4245eb54823b4ef9e72eec121b5.r2.dev/press/indiatimes_files/%2B%20tt_image_url%20%2B'>');}
function checkTlogParentRecording(){if (window != top.window){
var cwindow, pwindow, tlogcarryon,cwindowchurl;cwindowchurl=window.timeslog_channel_url; cwindow = window.parent; 
pwindow = cwindow.parent; tlogcarryon = true; 
do{if((cwindow.timeslog_channel_url == cwindowchurl )||(pwindow.timeslog_channel_url == cwindowchurl)){tlogcarryon=false;}
cwindow = pwindow; pwindow = cwindow.parent;} while(cwindow != window.top) return tlogcarryon;}else return true;} 
window.onerror = tt_error_handler;

var today = new Date(); var expiry = new Date(today.getTime() + 500); var ctime = expiry.toGMTString();
tt_setTestCookie("timestrendstestck","1",ctime);
if (checkTlogParentRecording()){tt_image_write();}

