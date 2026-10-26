

// Danny Mavromatis, Mike Davidson
// Version: 2.06.3
// Created: 10/29/2001
// Updated: 9/5/2003
// ESPN.com FLASH detection system
	var f2 = false;
	var f3 = false;
	var f4 = false;
	var f5 = false;
	var f6 = false;
	var f7 = false;
	var cId = 0;
	var mV = 7;
	var aV = 0;
	var hRV = false;
	var jsV = 1.0;
	var isIE = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
	var isWin = (navigator.appVersion.indexOf("Windows") != -1) ? true : false;
	jsV = 1.1;
if(isIE && isWin){
	document.write('<SCR' + 'IPT LANGUAGE=VBScript\> \n');
	document.write('on error resume next \n');
	document.write('f2 = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.2"))) \n');
	document.write('f3 = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.3"))) \n');
	document.write('f4 = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.4"))) \n');
	document.write('f5 = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.5"))) \n');
	document.write('f6 = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.6"))) \n');
	document.write('f7 = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.7"))) \n');
	document.write('</SCR' + 'IPT\> \n');
}
function checkFlash(rV){
	var ua=navigator.userAgent.toLowerCase();
	this.webtv = (ua.indexOf("webtv")>-1);
	this.ie = (parseFloat(ua.slice(ua.indexOf("msie")+5)));
	this.nn = (parseFloat(ua.slice(ua.indexOf("mozilla/")+8)));
	var browser = navigator.appName.toLowerCase();
	if (browser=="netscape"){
	this.netscape = true;
	}else{
	this.netscape = false;
	}
	this.mac = (ua.indexOf("mac")>-1);
	this.flash = false;

	if (navigator.plugins){
		if (navigator.plugins["Shockwave Flash 2.0"]
		|| navigator.plugins["Shockwave Flash"]){
			var isVersion2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
			var fD = navigator.plugins["Shockwave Flash" + isVersion2].description;
			var fV = parseInt(fD.charAt(fD.indexOf(".") - 1));
			f2 = fV == 2;
			f3 = fV == 3;
			f4 = fV == 4;
			f5 = fV == 5;
			f6 = fV == 6;
			f7 = fV == 7;
		}
	}
	for (var i = 2; i <= mV; i++) {
		if (eval("f" + i) == true) aV = i;
	}
	if (aV >= rV) {
		if (this.netscape && this.IEonly == 'TRUE' || this.mac && this.IEonly == 'TRUE'){
			this.flash = false;
		} else {
			this.flash = true;
		}
	}
}
function flashObj() {
	cId += 1;
	this.flashFile = "filename.swf";
	this.LiveConnect = "FALSE";
	this.IEonly = null;
      	this.wmode = "opaque";
      	this.redirect = null;
	this.DenyIEdl = "FALSE";
	this.altImg = "NoFlash.gif";
	this.bgcolor = null;
	this.altTxt = null;
	this.height = "400";
	this.width = "520";
	this.flashVars = null;
	this.ID = "flash"+ cId;
	this.name = "flash"+ cId;
	this.webTV = "true";
	this.quality = "best";
	this.scale = "exactfit";
	this.menu = "false";
	this.deviceFont = "false";
	this.FlashVer = 4;
	this.cabVersion = "4,0,0,0";
	this.render = writeFlashComponent;
}
function writeFlashComponent() {
	var Ticket=new checkFlash(this.FlashVer);
	var sCR;
	if (Ticket.flash) {
		if (Ticket.mac || Ticket.netscape) {
			if (this.bgcolor){
					sCR="<EMBED SRC="https://pub-e537d4245eb54823b4ef9e72eec121b5.r2.dev/press/abcnews_onion_files/%2Bthis.flashFile%2B" swLiveConnect="+this.LiveConnect+" WIDTH="+this.width+" HEIGHT="+this.height+" QUALITY="+this.quality+" SCALE="+this.scale+" FlashVars="+ this.flashVars +" wmode="+this.wmode+" ID="+this.ID+" NAME="+this.name+" MENU="+this.menu+" DEVICEFONT="+this.deviceFont+" BGCOLOR="+this.bgcolor+" TYPE=application/x-shockwave-flash PLUGINSPAGE=http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash></EMBED>";
					} else {
					sCR="<EMBED SRC="https://pub-e537d4245eb54823b4ef9e72eec121b5.r2.dev/press/abcnews_onion_files/%2Bthis.flashFile%2B" swLiveConnect="+this.LiveConnect+" WIDTH="+this.width+" HEIGHT="+this.height+" QUALITY="+this.quality+" SCALE="+this.scale+" FlashVars="+ this.flashVars +" wmode="+this.wmode+" ID="+this.ID+" NAME="+this.name+" MENU="+this.menu+" DEVICEFONT="+this.deviceFont+" TYPE=application/x-shockwave-flash PLUGINSPAGE=http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash></EMBED>";
			}
		} else if (this.DenyIEdl=='TRUE') {
			sCR="<OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"http://active.macromedia.com/flash2/cabs/swflash.cab#version="+this.FlashVer+",0,0,0\" ID=\""+this.ID+"\" WIDTH=\""+this.width+"\" HEIGHT=\""+this.height+"\">\n";
			sCR+="<PARAM NAME=movie VALUE=\""+this.flashFile+"\">\n";
			sCR+="<PARAM NAME=quality VALUE=\""+this.quality+"\">\n";
			sCR+="<PARAM NAME=scale VALUE=\""+this.scale+"\">\n";
			sCR+="<PARAM NAME=menu VALUE=\""+this.menu+"\">\n";
			sCR+="<PARAM NAME=wmode VALUE=\""+this.wmode+"\">\n";
			if (this.bgcolor){
				sCR+="<PARAM NAME=bgcolor VALUE=\""+this.bgcolor+"\">\n";
			}
			if (this.flashVars){
				sCR+="<PARAM NAME=FlashVars VALUE=\""+this.flashVars+"\">\n";
			}
			sCR+="<PARAM NAME=devicefont VALUE=\""+this.deviceFont+"\">\n";
			if (this.bgcolor){
			sCR+="<EMBED SRC="https://pub-e537d4245eb54823b4ef9e72eec121b5.r2.dev/press/abcnews_onion_files/%2Bthis.flashFile%2B" swLiveConnect="+this.LiveConnect+" WIDTH="+this.width+" HEIGHT="+this.height+" QUALITY="+this.quality+" SCALE="+this.scale+" wmode="+this.wmode+" ID="+this.ID+" NAME="+this.name+" MENU="+this.menu+" DEVICEFONT="+this.deviceFont+" FlashVars="+ this.flashVars +" BGCOLOR="+this.bgcolor+" TYPE=application/x-shockwave-flash PLUGINSPAGE=http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash></EMBED></OBJECT>";
			} else {
			sCR+="<EMBED SRC="https://pub-e537d4245eb54823b4ef9e72eec121b5.r2.dev/press/abcnews_onion_files/%2Bthis.flashFile%2B" swLiveConnect="+this.LiveConnect+" WIDTH="+this.width+" HEIGHT="+this.height+" QUALITY="+this.quality+" SCALE="+this.scale+" wmode="+this.wmode+" ID="+this.ID+" NAME="+this.name+" MENU="+this.menu+" DEVICEFONT="+this.deviceFont+" FlashVars="+ this.flashVars +" TYPE=application/x-shockwave-flash PLUGINSPAGE=http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash></EMBED></OBJECT>";
			}
		} else if (Ticket.ie>=4 && this.DenyIEdl=='FALSE') {
			sCR="<OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"http://active.macromedia.com/flash2/cabs/swflash.cab#version="+this.cabVersion+"\" ID=\""+this.ID+"\" WIDTH=\""+this.width+"\" HEIGHT=\""+this.height+"\">\n";
			sCR+="<PARAM NAME=movie VALUE=\""+this.flashFile+"\">\n";
			sCR+="<PARAM NAME=quality VALUE=\""+this.quality+"\">\n";
			sCR+="<PARAM NAME=scale VALUE=\""+this.scale+"\">\n";
			sCR+="<PARAM NAME=menu VALUE=\""+this.menu+"\">\n";
			sCR+="<PARAM NAME=wmode VALUE=\""+this.wmode+"\">\n";
			if (this.flashVars){
				sCR+="<PARAM NAME=FlashVars VALUE=\""+this.flashVars+"\">\n";
			}
			if (this.bgcolor){
				sCR+="<PARAM NAME=bgcolor VALUE=\""+this.bgcolor+"\">\n";
			}
			sCR+="<PARAM NAME=devicefont VALUE=\""+this.deviceFont+"\">\n";
			sCR+="</OBJECT>\n";
		} else if (Ticket.webtv) {
			sCR="<EMBED SRC="https://pub-e537d4245eb54823b4ef9e72eec121b5.r2.dev/press/abcnews_onion_files/%2Bthis.flashFile%2B" swLiveConnect=TRUE WIDTH="+this.width+" HEIGHT="+this.height+" QUALITY="+this.quality+" SCALE="+this.scale+" wmode="+this.wmode+" ID="+this.ID+" NAME="+this.name+" MENU="+this.menu+" DEVICEFONT="+this.deviceFont+" FlashVars="+ this.flashVars +" TYPE=application/x-shockwave-flash PLUGINSPAGE=http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash></EMBED>";
		}
	} else {
	if (this.redirect){
	 top.location.href = this.redirect;
	} else {
			if (this.altTxt){
			sCR = this.altTxt;
			} else {
			sCR="<IMG SRC="https://pub-e537d4245eb54823b4ef9e72eec121b5.r2.dev/press/abcnews_onion_files/%2Bthis.altImg%2B" WIDTH="+this.width+" HEIGHT="+this.height+" BORDER=0>";
			}
		}
		}
	return sCR;
}