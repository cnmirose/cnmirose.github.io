document.write('');

var ShockMode = 0;
var plugin = (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : 0;
if (plugin&& parseInt(plugin.description.substring(plugin.description.indexOf(".")-1)) >= 5)
{
ShockMode = 1;
}
else if ((navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0)&& (navigator.userAgent.indexOf("Windows 95")>=0 || navigator.userAgent.indexOf("Windows 98")>=0 || navigator.userAgent.indexOf("Windows NT")>=0))
{
document.write('<SCR' + 'IPT LANGUAGE=VBScript> \n');
document.write('on error resume next \n');
document.write('ShockMode = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.5")))\n');
document.write('<\/SCR' + 'IPT>\n');
}
if (navigator.userAgent.indexOf("Netscape/7") > 0)
{	ShockMode = 0;
}
if ( ShockMode ) {
document.write('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" CODEBASE="' + document.protocol + '//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0" ID=banner WIDTH="728" HEIGHT="90">');
document.write('<PARAM NAME="movie" VALUE="http://abyss.nationalgeographic.com/ads/images/2004/Ford_728x90cobrand.swf?clickTag=http://ad.doubleclick.net/click%3Bh=v3|3181|3|0|%2a|r%3B10049811%3B0-0%3B0%3B6668301%3B3454-728|90%3B6412612|6430508|1%3B%3B%7Esscs%3D%3fhttp%3A%2F%2Fwww.nationalgeographic.com/everyday"><PARAM NAME="wmode" VALUE="opaque"><PARAM NAME="Autostart" VALUE="true"><PARAM NAME="Quality" VALUE="high">');
document.write('<EMBED SRC="http://abyss.nationalgeographic.com/ads/images/2004/Ford_728x90cobrand.swf?clickTag=http://ad.doubleclick.net/click%3Bh=v3|3181|3|0|%2a|r%3B10049811%3B0-0%3B0%3B6668301%3B3454-728|90%3B6412612|6430508|1%3B%3B%7Esscs%3D%3fhttp%3A%2F%2Fwww.nationalgeographic.com/everyday" swLiveConnect=TRUE WIDTH="728" HEIGHT="90" TYPE="application/x-shockwave-flash" PLUGINSPAGE="' + document.protocol + '//www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" QUALITY="high"></EMBED>');
document.write('</OBJECT>');
} else if (!(navigator.appName && navigator.appName.indexOf("Netscape")>=0 && navigator.appVersion.indexOf("2.")>=0)){
document.write('<A HREF="http://ad.doubleclick.net/click%3Bh=v3|3181|3|0|%2a|r%3B10049811%3B0-0%3B0%3B6668301%3B3454-728|90%3B6412612|6430508|1%3B%3B%7Esscs%3D%3fhttp%3A%2F%2Fwww.nationalgeographic.com/everyday" TARGET="_top">');
document.write('<IMG SRC="http://abyss.nationalgeographic.com/ads/images/2004/Ford_cobrand728x90.jpg" WIDTH="728" HEIGHT="90" ALT="Ford Motor - Everyday Environmentalism" BORDER="0"></a>');
}
document.write('<NOEMBED><A HREF=\"http://ad.doubleclick.net/click%3Bh=v3|3181|3|0|%2a|r%3B10049811%3B0-0%3B0%3B6668301%3B3454-728|90%3B6412612|6430508|1%3B%3B%7Esscs%3D%3fhttp%3A%2F%2Fwww.nationalgeographic.com/everyday\" TARGET=\"_top\"><IMG SRC=\"http://abyss.nationalgeographic.com/ads/images/2004/Ford_cobrand728x90.jpg\" WIDTH=\"728\" HEIGHT=\"90\" ALT=\"Ford Motor - Everyday Environmentalism\" BORDER=\"0\"></a></NOEMBED><NOSCRIPT><A HREF=\"http://ad.doubleclick.net/click%3Bh=v3|3181|3|0|%2a|r%3B10049811%3B0-0%3B0%3B6668301%3B3454-728|90%3B6412612|6430508|1%3B%3B%7Esscs%3D%3fhttp%3A%2F%2Fwww.nationalgeographic.com/everyday\" TARGET=\"_top\"><IMG SRC=\"http://abyss.nationalgeographic.com/ads/images/2004/Ford_cobrand728x90.jpg\" WIDTH=\"728\" HEIGHT=\"90\" ALT=\"Ford Motor - Everyday Environmentalism\" BORDER=\"0\"></a></NOSCRIPT>');
