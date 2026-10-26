document.write('<!-- Template Id = 1 Template Name = Banner Creative (Flash) -->\n<!-- Copyright 2002 DoubleClick Inc., All rights reserved. -->\n');
 
var dcswf = "http://m2.2mdn.net/666472/glon48_cheryl_728x90_30k.swf"; 
var dcgif = "http://m2.2mdn.net/666472/glon48_cheryl_728x90_20k.gif"; 
var advurl = "http://ad.doubleclick.net/click%3Bh=v3|3299|3|0|%2a|h%3B17013937%3B0-0%3B0%3B11402823%3B3454-728|90%3B10565675|10583571|1%3B%3B%7Esscs%3D%3fhttp://opencustomer.savvislive.com";
var dcadvurl = escape(advurl);
var dcminversion = 6;
var dcmaxversion = 7;
var plugin = false;
var dccreativewidth = "728";
var dccreativeheight = "90";
var dcwmode = "opaque";
var dcbgcolor = "";

if (((navigator.appName == "Netscape") && (navigator.userAgent.indexOf("Mozilla") != -1) && (parseFloat(navigator.appVersion) >= 4) && (navigator.javaEnabled()) && navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)) {
var plugname=navigator.plugins['Shockwave Flash'].description;var plugsub=plugname.substring(plugname.indexOf("."),-1); var plugsubstr=plugsub.substr(-1)
if( plugsubstr >= dcminversion) { plugin = true;}
}
else if (navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0 && (navigator.userAgent.indexOf("Opera")<0) && (navigator.userAgent.indexOf("Windows 95")>=0 || navigator.userAgent.indexOf("Windows 98")>=0 || navigator.userAgent.indexOf("Windows NT")>=0) && document.all) 
{
document.write('<script language=VBScript>' + '\n' +
   'dcmaxversion = '+dcmaxversion + '\n' +
   'dcminversion = '+dcminversion + '\n' +
   'Do' + '\n' +
    'On Error Resume Next' + '\n' +
    'plugin = (IsObject(CreateObject(\"ShockwaveFlash.ShockwaveFlash.\" & dcmaxversion & \"\")))' + '\n' +
    'If plugin = true Then Exit Do' + '\n' +
    'dcmaxversion = dcmaxversion - 1' + '\n' +
    'Loop While dcmaxversion >= dcminversion' + '\n' +
  '<\/script>');
}
if ( plugin )  {
 document.write('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"');
 document.write(' codebase="https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=3,0,0,0" ');
 document.write(' ID=FLASH_AD WIDTH="'+ dccreativewidth +'" HEIGHT="'+ dccreativeheight +'">');
 document.write('<PARAM NAME=movie VALUE="' + dcswf + '?clickTag='+ dcadvurl +'"><PARAM NAME=quality VALUE=autohigh><PARAM NAME=bgcolor VALUE=#'+ dcbgcolor +'><PARAM NAME=wmode VALUE='+ dcwmode +'>'); 
 document.write('<EMBED src="' + dcswf + '?clickTag='+ dcadvurl +'" quality=autohigh');
 document.write(' swLiveConnect=TRUE WIDTH="'+ dccreativewidth +'" HEIGHT="'+ dccreativeheight +'" bgcolor=#'+ dcbgcolor);
 document.write(' TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash">');
 document.write('</EMBED>');
 document.write('</OBJECT>');
} else if (!(navigator.appName && navigator.appName.indexOf("Netscape")>=0 && navigator.appVersion.indexOf("2.")>=0)){
 document.write('<A TARGET="_top" HREF="http://ad.doubleclick.net/click%3Bh=v3|3299|3|0|%2a|h%3B17013937%3B0-0%3B0%3B11402823%3B3454-728|90%3B10565675|10583571|1%3B%3B%7Esscs%3D%3fhttp://opencustomer.savvislive.com"><IMG SRC="' + dcgif + '" BORDER=0></A>');
}
//-->
document.write('<NOEMBED><A TARGET=\"_top\" HREF=\"http://ad.doubleclick.net/click%3Bh=v3|3299|3|0|%2a|h%3B17013937%3B0-0%3B0%3B11402823%3B3454-728|90%3B10565675|10583571|1%3B%3B%7Esscs%3D%3fhttp://opencustomer.savvislive.com\"><IMG SRC=\"http://m2.2mdn.net/666472/glon48_cheryl_728x90_20k.gif\" BORDER=0></A></NOEMBED><NOSCRIPT><A TARGET=\"_top\" HREF=\"http://ad.doubleclick.net/click%3Bh=v3|3299|3|0|%2a|h%3B17013937%3B0-0%3B0%3B11402823%3B3454-728|90%3B10565675|10583571|1%3B%3B%7Esscs%3D%3fhttp://opencustomer.savvislive.com\"><IMG SRC=\"http://m2.2mdn.net/666472/glon48_cheryl_728x90_20k.gif\" BORDER=0></A></NOSCRIPT>');
