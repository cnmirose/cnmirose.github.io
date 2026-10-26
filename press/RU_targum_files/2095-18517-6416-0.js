
var plugin = 0;
var d = document;
if (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"] &&
    navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) {
	if (navigator.plugins && navigator.plugins["Shockwave Flash"])
		pos = navigator.plugins["Shockwave Flash"].description.indexOf("Shockwave Flash");
		pos += 16;
		var swver = navigator.plugins["Shockwave Flash"].description.substr(pos,1)
		if (swver >= 4)
			plugin = 1;
}
else if (navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0 &&
        (navigator.userAgent.indexOf("Windows")>=0)) {
	d.write('<SCR'+'IPT LANGUAGE=VBScript>');
	d.write('on error resume next \n');
	d.write('if ( 4 = 3 ) then plugin = ( IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.3")))\n');
	d.write('if (( 4 <= 4) and (plugin <= 0 )) then plugin = ( IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.4")))\n');
	d.write('if (( 4 <= 5) and (plugin <= 0 )) then plugin = ( IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.5")))\n');
	d.write('if (( 4 <= 6) and (plugin <= 0 )) then plugin = ( IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.6")))\n');
	d.write('if (( 4 <= 7) and (plugin <= 0 )) then plugin = ( IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.7")))\n');
	d.write("</SCR"+"IPT>");
}
if ( plugin ) {
	d.write('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"');
	d.write('codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=4,0,0,0" id="2095/18517/yes_CC_125x125_15k_unl"');
	d.write('ID="movie" WIDTH="125" HEIGHT="125" >');
	d.write('<PARAM NAME="movie" VALUE="http://img.mediaplex.com/ads/2095/18517/yes_CC_125x125_15k_unl.swf?clickTAG=http://adfarm.mediaplex.com/ad/ck/2095-18517-6416-0?mpt=20040928131024">');
  d.write('<PARAM NAME="wmode" VALUE="opaque">');
	d.write('<EMBED wmode="opaque" NAME="2095/18517/yes_CC_125x125_15k_unl" src="http://img.mediaplex.com/ads/2095/18517/yes_CC_125x125_15k_unl.swf?clickTAG=http://adfarm.mediaplex.com/ad/ck/2095-18517-6416-0?mpt=20040928131024"');
	d.write('swLiveConnect="FALSE" WIDTH="125" HEIGHT="125"');
	d.write('TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash">');
	d.write('</EMBED>');
	d.write('</OBJECT>');
} else if (!(navigator.appName && navigator.appName.indexOf("Netscape")>=0 && navigator.appVersion.indexOf("2.")>=0)){
	d.write('<a href="http://adfarm.mediaplex.com/ad/ck/2095-18517-6416-0?mpt=20040928131024" TARGET="_blank">');
	d.write('<IMG SRC="http://img.mediaplex.com/ads/2095/18517/yes_CC_125x125_15k_unl.gif" WIDTH="125" HEIGHT="125" BORDER="0"></a>');
}
//-->

