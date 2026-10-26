var BROWSER_NAME = navigator.appName;
var plat = navigator.appVersion;

if (BROWSER_NAME && navigator.appName.indexOf("Netscape")>=0 && navigator.appVersion.indexOf("4.7")>=0 && plat.indexOf("Win") != -1) {
document.write('<LINK rel="stylesheet" href="http://abcnews.go.com/css2/ABC_net_win.css" type="text/css">');
} else

if (BROWSER_NAME && navigator.appName.indexOf("Netscape")>=0 && navigator.appVersion.indexOf("4.7")>=0 && plat.indexOf("Mac") != -1)  {
document.write('<LINK rel="stylesheet" href="http://abcnews.go.com/css2/ABC_net_mac.css" type="text/css">');
} else

if (BROWSER_NAME && navigator.appName.indexOf("Netscape")>=0 && navigator.appVersion.indexOf("5.")>=0 && plat.indexOf("Win") != -1) {
document.write('<LINK rel="stylesheet" href="http://abcnews.go.com/css2/ABC_net6_win.css" type="text/css">');
} else

if (BROWSER_NAME && navigator.appName.indexOf("Netscape")>=0 && navigator.appVersion.indexOf("5.")>=0 && plat.indexOf("Mac") != -1)  {
document.write('<LINK rel="stylesheet" href="http://abcnews.go.com/css2/ABC_net6_mac.css" type="text/css">');
} else

if (BROWSER_NAME == "Netscape" && plat.indexOf("Win") != -1) {
document.write('<LINK rel="stylesheet" href="http://abcnews.go.com/css2/ABC_net_win.css" type="text/css">');
} else 

if (BROWSER_NAME == "Microsoft Internet Explorer" && plat.indexOf("Win") != -1){
document.write('<LINK rel="stylesheet" href="http://abcnews.go.com/css2/ABC_IE_win.css" type="text/css">');
} else 

if (BROWSER_NAME == "Netscape" && plat.indexOf("Mac") != -1) {
document.write('<LINK rel="stylesheet" href="http://abcnews.go.com/css2/ABC_net_mac.css" type="text/css">');
} else 

if (plat.indexOf("Mac") != -1 && plat.indexOf("MSIE 5") != -1) {
document.write('<LINK rel="stylesheet" href="http://abcnews.go.com/css2/ABC_IE5_mac.css" type="text/css">');
} else {
document.write('<LINK rel="stylesheet" href="http://abcnews.go.com/css2/ABC_IE_mac.css" type="text/css">');
}
