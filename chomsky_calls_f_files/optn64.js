document.write('<!-- Template Id = 1 Template Name = Banner Creative (Flash) -->\n<!-- Copyright 2002 DoubleClick Inc., All rights reserved. --><script src=\"http://m1.2mdn.net/879366/flashwrite_1_2.js\"><\/script>');document.write('\n');
 
var dcswf = "http://m1.2mdn.net/490793/WANT_IN07_728x90.swf"; 
var dcgif = "http://m1.2mdn.net/490793/WANT_IN07_728x90.gif"; 
var advurl = "http://ad.doubleclick.net/click%3Bh=v8/34fa/f/52/%2a/s%3B66009754%3B5-0%3B0%3B13329425%3B3454-728/90%3B19533268/19551162/1%3B%3B%7Esscs%3D%3fhttp://servedby.advertising.com/click/site=0000684555/mnum=0000374670/optn=64?trg=http%3a%2f%2fonline.wsj.com/reg/promo/AFFEX315";
var dcadvurl = escape(advurl);
var dcminversion = 6;
var dcmaxversion = 9;
var plugin = false;
var dccreativewidth = "728";
var dccreativeheight = "90";
var dcwmode = "opaque";
var dcbgcolor = "ffffff";

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
 adcode = '<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+
  ' ID=FLASH_AD WIDTH="'+ dccreativewidth +'" HEIGHT="'+ dccreativeheight +'">'+
  '<PARAM NAME=movie VALUE="' + dcswf + '?clickTag='+ dcadvurl +'"><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#'+ dcbgcolor +'><PARAM NAME=wmode VALUE='+ dcwmode +'>'+
  '<EMBED src="' + dcswf + '?clickTag='+ dcadvurl +'" quality=high wmode='+dcwmode+
  ' swLiveConnect=TRUE WIDTH="'+ dccreativewidth +'" HEIGHT="'+ dccreativeheight +'" bgcolor=#'+ dcbgcolor+
  ' TYPE="application/x-shockwave-flash" ></EMBED></OBJECT>';
if(('j'!="j")&&(typeof dclkFlashWrite!="undefined")){dclkFlashWrite(adcode);}else{document.write(adcode);}
} else if (!(navigator.appName && navigator.appName.indexOf("Netscape")>=0 && navigator.appVersion.indexOf("2.")>=0)){
 document.write('<A TARGET="_top" HREF="http://ad.doubleclick.net/click%3Bh=v8/34fa/f/52/%2a/s%3B66009754%3B5-0%3B0%3B13329425%3B3454-728/90%3B19533268/19551162/1%3B%3B%7Esscs%3D%3fhttp://servedby.advertising.com/click/site=0000684555/mnum=0000374670/optn=64?trg=http%3a%2f%2fonline.wsj.com/reg/promo/AFFEX315"><IMG SRC="' + dcgif + '" BORDER=0></A>');
}
//-->
document.write('<NOEMBED><A TARGET=\"_top\" HREF=\"http://ad.doubleclick.net/click%3Bh=v8/34fa/f/52/%2a/s%3B66009754%3B5-0%3B0%3B13329425%3B3454-728/90%3B19533268/19551162/1%3B%3B%7Esscs%3D%3fhttp://servedby.advertising.com/click/site=0000684555/mnum=0000374670/optn=64?trg=http%3a%2f%2fonline.wsj.com/reg/promo/AFFEX315\"><IMG SRC=\"http://m1.2mdn.net/490793/WANT_IN07_728x90.gif\" BORDER=0></A></NOEMBED><NOSCRIPT><A TARGET=\"_top\" HREF=\"http://ad.doubleclick.net/click%3Bh=v8/34fa/f/52/%2a/s%3B66009754%3B5-0%3B0%3B13329425%3B3454-728/90%3B19533268/19551162/1%3B%3B%7Esscs%3D%3fhttp://servedby.advertising.com/click/site=0000684555/mnum=0000374670/optn=64?trg=http%3a%2f%2fonline.wsj.com/reg/promo/AFFEX315\"><IMG SRC=\"http://m1.2mdn.net/490793/WANT_IN07_728x90.gif\" BORDER=0></A></NOSCRIPT>');
