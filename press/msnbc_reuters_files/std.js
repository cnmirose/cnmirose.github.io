function mq_write(sDivId){
	var oS=new UberSniff();
	mq = mq_a[sDivId];
	if(oS.mac){mq.bScroll=false;}
	if (!mq.isDownlevel){
		if(mq.isGecko){
			var oMqd=document.getElementById(sDivId);
		}else{
			var oMqd=window[sDivId];
		}
        if ((mq.bScroll) && (mq.items > 1)){oMqd.style.paddingLeft = "780";}
		oMqd.innerHTML=mq.mq_as[mq.Current];
	}
	//}else{
	//	var aMql = document.mql.document.layers;
	//	var iOld=mq.Current;
	//	aMql[iOld].visibility='hidden';
	//	aMql[mq.Current].visibility='show';
	//}
	if (mq.items > 1){
	    (mq.bScroll)?mq_move(790,sDivId):mq_timer(mq.Time,sDivId);
	    mq.Current++;
	    if(mq.Current>mq.items)mq.Current=1;
    }
}

function mq_move(n,sDiv){
	if(n>0){
	    document.getElementById(sDiv).style.paddingLeft = n;
	    setTimeout("mq_move('"+ (n-30) +"','" + sDiv +"')",30);
	}else{
		mq_timer(mq_a[sDiv].Time,sDiv);
	}
}

function mq_timer(n,sDiv){
	if(mq_a[sDiv].Timer)clearTimeout(mq_a[sDiv].Timer)
	mq_a[sDiv].Timer=0;
	if(n>0)mq_a[sDiv].Timer=setTimeout("mq_write('"+ sDiv +"')",n);
}

//=========end marquee code=================*/

function printThis()
{
	var s=location.href;
	var i=s.indexOf('?');
	if(i>=0)
	{
		s=s+'&print=1&displaymode=1098';
	}
	else
	{
		if(s.charAt(s.length-1)!='/')
			s+='/';
		s+='print/1/displaymode/1098/';
	}
	var o=new UberSniff();
	if(o.webtv)
		location.href=s;
	else
		OCW(s,'print','width=640,height=480,scrollbars=1,resizable=1');
}

function msnSideBar(bNFirst) {
	var oS=new UberSniff();
	if (oS.ie||oS.nn>=5){
		if (!bNFirst){
			if (oS.ie>=5&&!oS.mac){window.attachEvent("onresize",msnSideBar);}
			else{window.onresize=msnSideBar;}
		}
		setTimeout("msnSideBar2()",100);
	}
}

function msnSideBar2()
{
	var oS=new UberSniff();
	if (oS.ie||oS.nn>=5){
		var oSBar=document.getElementById("DCol");
		var oMidRow=document.getElementById("midRow");
		var bWid=(((oS.ie)?document.body.clientWidth:self.innerWidth)>935);
		oMidRow.style.width=(bWid)?"965px":"789px";
        if(bWid){
            var oSC=document.getElementById("siteCal");
            if((oSC!=null)&&(oSC.src=="about:blank"))
                oSC.src=oSC.getAttribute("hideSrc");
        }
		if (oS.nn>=5&&bWid&&oSBar.style.display=="none")
		{
		 oSBar.style.display="block";
		 oSBar.style.display="none";
		}
		oSBar.style.display=bWid?"block":"none";
	}
}

function oMvsLink(gPV,sGuid,bDck,sMenu,sSubM,sURL,sPL,bRP,bStatic,sList){
	var sLink="http://g.msn.com/0VD0/"+gPV+"/64?t="+((bDck)?"0":"1");
	if (arguments.length>1){
		sLink+=(sList)?"&p="+escape(sList):"";
		sLink+=((sMenu)?("&m="+sMenu+"&mi="+sSubM):"");
		sPL=sGuid+((sPL)?","+sPL:"");
		sLink+=((!bRP)?"&i=":"&r=")+sPL;
	}
	if (!bDck){
		var ovp=window.open(sLink,"ovp","width=788,height=598,status=1");
		if (sURL){location.href=sURL;}
	}
	else{
		location.href=sLink;
	}
}

function m_OpenMPV3(sType,sAsx){
	var sUA = navigator.userAgent.toLowerCase();
	   	if (sUA.indexOf("webtv")>-1) {
						alert("Sorry, your browser does not support MSNBC video.");
				}
		else{
		if((sType.toLowerCase()=="a")) {
        location.href = "http://www.msnbc.com/news/asx/audio/28/"+sAsx+".asx";
			}
      else {
		if (sAsx.indexOf("live_video")>-1){
			location.href="http://video.msn.com/launch.htm?c=live&t=live";
		}
		else{
			var ovp=window.open("http://g.msn.com/0VD0/00/71?m="+sAsx+"&csid=Msnbc&setcp=B&autostart=0&undock=true","ovp","width=797,height=493");
			}
		}
	}
}

function OpenSS(sPath,sName,b6x4,b8x6,b10x7) {
	var sQry=(sPath.indexOf("?")>=0)?"&":"?";
	oUser=new UberSniff();
	if(self.name=='') {self.name="cover";}
 	nW=oUser.screenWidth;
    sOptions="resizeable=yes,top=0,left=0,screenx=0,screeny=0,width=";
    sOptions+=(nW>=1024&&b10x7)?"935,height=700":((nW>=800&&b8x6)?"675,height=520":"510,height=430");
	if((nW<800&&!b6x4)||(oUser.mac>0&&nW<=700)){
		location.href=sPath+sQry+"fmt=&res=inline";
		return;
	}
    else {
	    sPath+=(sQry+"res="+((nW>=1024&&b10x7)?"10x7":((nW>=800&&b8x6)?"8x6":"6x4")));
	var sQry="&";
    	var xwinopen=window.open(sPath+sQry+"fmt=child","slideshowhi",sOptions);
     	if(oUser.nn>3||oUser.ie>3) {xwinopen.focus();}
	}
}

function SSOpen(nId, nSize, sFrame, sVar1, sVar2) {
	if (!nId) return;
	if (!nSize||nSize=='') nSize = 0;
	oUser=new UberSniff();
	var nW=oUser.screenWidth;
	var sOptions="resizable=no,top=0,left=0,screenx=0,screeny=0";
	var sHref = "/id/"+nId+"/displaymode/1107/";
	if (sFrame&&sFrame!='')sHref+="framenumber/"+sFrame+"/";
	if (sVar1&&sVar1!='')sHref+="var1/"+sVar1+"/";
	if (sVar2&&sVar2!='')sHref+="var2/"+sVar2+"/";
	var bNew = true;
	if (((nSize==0)||(nSize==2))&&nW>=935) {
		sOptions+=",width=935,height=700";
		sHref+="s/2/";
	} else if (((nSize==0)||(nSize==1))&&nW>=780) {
		sOptions+=",width=780,height=534";
		sHref+="s/1/";
	} else {
		bNew = false;
	}
	gEnabled = (new tryCatch("if (gEnabled!=undefined) return gEnabled; else return false;", "return false;")).trycatch();
	if (gEnabled) 
	{
		var ua=window.navigator.userAgent;
		if (ua.indexOf('Win')==-1) return true;
		var ie=ua.indexOf('MSIE');
		if (ie!=-1) 
		{
			if (!(parseFloat(ua.slice(ie+5))<5))
			{
				if (liveEnv){destUrl="http://www.msnbc.msn.com";}else{destUrl=location.protocol+"//"+location.host;}
				var evSrc = window.document.activeElement;
				var cmNode = evSrc;
				while(cmNode!=null)
				{
					if (cmNode.tagName=="SPAN")
					{
						if (cmNode.getAttribute("subCM")!=null) 
							subCM=cmNode.getAttribute("subCM")+subCM;
						if (cmNode.getAttribute("CM")!=null) break;
					}
					cmNode = cmNode.parentElement;
				}
				var ceNode = evSrc;
				while(ceNode!=null)
				{
					if (ceNode.getAttribute("CE")!=null) break;
					ceNode = ceNode.parentElement;
				}
				if (cmNode!=null && ceNode!=null)
				{
					var highlight="SLIDE SHOW", path=sHref, surl="";
					switch (evSrc.tagName)
					{
						case "A":
							highlight = evSrc.innerText;
							break;
						case "IMG":
							var aTag = evSrc;
							while (aTag!=null)
							{
								if (aTag.tagName=="A") break;
								aTag = aTag.parentElement;
							}
							highlight = evSrc.alt;
							break;
					}
					if (curDoc!='3053415') surl='id/'+curDoc+'/';
					if (highlight.length>0) highlight="&HL="+escape(highlight.substring(0, 60));
					sHref=defaultG+destUrl+"/"+path+"&&PS="+PSTaxonomy+"&SU="+escape(destUrl+'/'+surl)+highlight+"&CM="+escape(cmNode.getAttribute("CM")+subCM)+"&CE="+escape(ceNode.getAttribute("CE"));
				}
			}
		}
	}
	if (!bNew) {
    	var xwinopen=window.open(sHref,"slideshow");
	} else {
    	var xwinopen=window.open(sHref,"slideshow",sOptions);
	   	if(oUser.nn>3||oUser.ie>3) {xwinopen.focus();}
	}
}

function tryCatch(sTry,sCatch){
	this.trycatch=new Function("try{"+sTry+"}catch(e){"+sCatch+"}");
	this.trycatchV=new Function("s1","try{"+sTry+"}catch(e){"+sCatch+"}");
}

function UberSniff(sUndefined) {
	var ua=navigator.userAgent.toLowerCase();
	this.webtv = (ua.indexOf("webtv")>-1);
	this.ie = (parseFloat(ua.slice(ua.indexOf("msie")+5)));
	this.nn = (this.ie)?(-1):(parseFloat(ua.slice(ua.indexOf("mozilla/")+8)));
	this.mac = (ua.indexOf("mac")>-1);
//flash version
	if (navigator.MSNBCFlashVer==sUndefined){
		if (this.nn<=0&&this.ie<5) {
			navigator.MSNBCFlashVer=6;
		}
		 else {
			if (!this.mac&&this.ie>4) {
				var oTestVersion=new tryCatch("oWMPlayer=new ActiveXObject('ShockwaveFlash.ShockwaveFlash.'+s1);return s1;","return 0;");
				navigator.MSNBCFlashVer=-1;
				for (var nCheckVersion=7;nCheckVersion>2;--nCheckVersion){
					if (oTestVersion.trycatchV(nCheckVersion)){navigator.MSNBCFlashVer=nCheckVersion; break;}
				}
			}
			else{
				if(navigator.plugins['Shockwave Flash']){
					navigator.MSNBCFlashVer=(parseInt(navigator.plugins['Shockwave Flash'].description.substr(16)));
				}
				else {
					navigator.MSNBCFlashVer=-1;
				}
			}
		}
	}
	this.flash=navigator.MSNBCFlashVer;

	if (navigator.MSNBCMPlayer==sUndefined){
		if ((this.nn<=0&&this.ie<5)||this.mac) {
			navigator.MSNBCMPlayer=true;
		}
	 	else {
			if (!this.mac&&this.ie>4) {
				var oTestVersion=new tryCatch("oWMPlayer=new ActiveXObject('WMPlayer.OCX');return oWMPlayer.versionInfo;","return 0;");
				if (oTestVersion.trycatch()){navigator.MSNBCMPlayer=oTestVersion.trycatch();
	} else {
					for (itest=0;itest<9;++itest){
						oTestVersion=new tryCatch("oWMPlayer=new ActiveXObject('MediaPlayer.MediaPlayer.'+itest);return 1;","return 0;");
				navigator.MSNBCMPlayer=(oTestVersion.trycatch());
						if (navigator.MSNBCMPlayer) {itest=100;}
				}
				}
			}
			else{		navigator.MSNBCMPlayer=!!(navigator.mimeTypes&&navigator.mimeTypes["video/x-ms-wm"]&&navigator.mimeTypes["video/x-ms-wm"].enabledPlugin);
			}
		}
	}
	this.mplayer=navigator.MSNBCMPlayer;
// screen resolution
	this.screenHeight = screen.height;
	this.screenWidth = screen.width;
	this.colorDepth = (this.nn>=4)?screen.pixelDepth:screen.colorDepth;
}

// image rollover code. Author - Brenden West. Updated 8-22-01
if (!window.sSelectedImg) {
	var sSelectedImg = new Array();
}
function SwapImage(sImage,nState) {
	// image states: 0=out, 1=over, 2=selected, 3=rollover & selected are same
	if (document.images) {
		if (parseInt(sImage)>=0) {	// convert old method
			sImage = "MenuImg" + sImage;
		}
		var oImage = document.images[sImage];
		if (oImage) {
			var sMenu = (sImage.indexOf("_img") > 0) ? sImage.substring(0,sImage.indexOf("_img")) : "x";
			if (!sSelectedImg[sMenu]) { sSelectedImg[sMenu]=""; }
			var oSelImg = sSelectedImg[sMenu];

			if (oSelImg != oImage) {
				var sNewState = "_"+nState+".";
				if (nState==0) { sNewState = "."; }
				else if (nState==3) { sNewState = "_1."; }

				var sSrc = oImage.src;
				var sSrc1 = sSrc.substring(0,sSrc.lastIndexOf(".")+1);
				var sSrc2 = sSrc.substring(sSrc.lastIndexOf(".")+1);
				if (sSrc1.indexOf("_1.") > 0) {
					oImage.src = sSrc1.replace(/_1\.$/,sNewState) + sSrc2;
				} else if (sSrc != oSelImg.src) {
					oImage.src = sSrc1.replace(/\.$/,sNewState) + sSrc2;
				}
				if (nState > 1) {
					if (oSelImg) {
						oSelImg.src = oSelImg.src.replace("_1.",".");
						oSelImg.src = oSelImg.src.replace("_2.",".");
					}
					sSelectedImg[sMenu] = oImage;
				}
			}
			}
					}
						}

function navImgFailover(oImage) {
	// fail over to default src for missing nav states
	if (oImage.src.indexOf("_1.") > -1) { SwapImage(oImage.name,0); }
	else if (oImage.src.indexOf("_2.") > -1) { SwapImage(oImage.name.substring(0,oImage.name.indexOf("_img"))+"_img99",2);SwapImage(oImage.name,3); }
}

function OpenChildWindow(sPath,sName,sOptions) {
	var oUser=new UberSniff();
    if(self.name=='') {self.name = "cover";}
	if ((sPath.indexOf("/c/")>=0&&sPath.toLowerCase().indexOf("ssmain")>=0)){
		var sQry=(sPath.indexOf("?")>=0)?"&":"?";
		var nW=oUser.screenWidth;
		sOptions="resizeable=yes,top=0,left=0,screenx=0,screeny=0,width=";
    	sOptions+=(nW>=1024)?"935,height=700":"675,height=520";
		if(nW<800){
			location.href=sPath.replace(/fmt=child/i,"fmt=")+sQry+"res=inline";
			return;
		}
    	else {
			sPath+=sQry+"res="+((nW>=1024)?"10x7":"8x6");
		}
	}
    var x = window.open(sPath,sName,sOptions);
    if(oUser.nn>3 || oUser.ie>3) {x.focus();}
}

function OCW(sPath,sName,sOptions) {
	OpenChildWindow(sPath,sName,sOptions);
}

function writeFlashComponent2(oFl)
{
	if(!window.oSniff) oSniff=new UberSniff();
	if (oFl.instrumented)
	{
		oFl.instrumentInit();
		oFl.instrument.flashVer=oSniff.flash;
		oFl.instrument.browser=((oSniff.ie>0)*1)+((oSniff.nn>0)*2)+((oSniff.ie<1&&oSniff.nn<1)*3);
		oFl.instrument.browserVer=((oSniff.ie>0)*oSniff.ie)+((oSniff.nn>0)*oSniff.nn);
	}
	var sReturn;
	var noFlashLink1="";
	var noFlashLink2="<br clear=all><a href=\"http://www.macromedia.com/go/getflashplayer\"><img src=\"\images\msnbc\no_flash.gif\" width=\"210\" height=\"25\" border=\"0\"></a>";

	if (oFl.downloadLink=="top" || oFl.downloadLink=="")
	{
		noFlashLink1="<a href=\"http://www.macromedia.com/go/getflashplayer\" target=\"_new\">";
		noFlashLink2="</a>";
	}
	else if (oFl.downloadLink=="crop")
	{
		if (!oSniff.flash) { oFl.height = oFl.height-25;}
	}

	if (oFl.altImgWB3)
	{
		switch (oFl.defaultType)
		{
			case 1:
				noFlashLink1 = "<a href="https://bucket.worldofbits.brown.edu/press/msnbc_reuters_files/%2B%20oFl.url%2B">"
				sReturn = ""+noFlashLink1+oFl.altImgWB3+noFlashLink2+"";
				break;
			case 2:
				sReturn = oFl.altImgWB3;
				break;
			case 3:
				sReturn = oFl.htm;
				break;
			default:
				sReturn = ""+noFlashLink1+oFl.altImgWB3+noFlashLink2+"";
		}
	}
	else
	{
		switch (oFl.defaultType)
		{
			case 1:
				noFlashLink1 = "<a href="https://bucket.worldofbits.brown.edu/press/msnbc_reuters_files/%2B%20oFl.url%2B">"
				sReturn=""+noFlashLink1+"<img src="https://bucket.worldofbits.brown.edu/press/msnbc_reuters_files/%2BoFl.altImg%2B" width="+oFl.width+" height="+oFl.height+" border=0>"+noFlashLink2+"";
				break;
			case 2:
				sReturn="<img border=0 src="https://bucket.worldofbits.brown.edu/press/msnbc_reuters_files/%2BoFl.altImg%2B" usemap=#"+oFl.ID+">"+oFl.imageMap;
				break;
			case 3:
				sReturn = oFl.htm;
				break;
			default:
				sReturn=""+noFlashLink1+"<IMG SRC="https://bucket.worldofbits.brown.edu/press/msnbc_reuters_files/%2BoFl.altImg%2B" WIDTH="+oFl.width+" HEIGHT="+oFl.height+" BORDER=0>"+noFlashLink2+"";
		}
	}

    if (oSniff.flash>=oFl.flashVer) 
		{
			var flashvars = "";
			if (oFl.flashVars) {flashvars = fl.flashVars;}
			var sSep = (oFl.flashFile.indexOf("?") > -1) ? "&" : "?";
			if (oSniff.mac || oSniff.nn>=4 || oSniff.webtv )
			{
				sReturn="<a name=\"anc_" + oFl.ID + "\"><EMBED SRC="https://bucket.worldofbits.brown.edu/press/msnbc_reuters_files/%2BoFl.flashFile%2BsSep%2B"domain="+document.domain+"&"+flashvars+" swLiveConnect=TRUE WIDTH="+oFl.width+" HEIGHT="+oFl.height+" ALIGN=top PLAY="+oFl.play+" LOOP="+oFl.loop+" BGCOLOR="+oFl.bgcolor+" QUALITY="+oFl.quality+" SCALE="+oFl.scale+" SALIGN="+oFl.salign+" MAYSCRIPT NAME="+oFl.ID+" MENU="+oFl.menu+" DEVICEFONT="+oFl.deviceFont+" TYPE=application/x-shockwave-flash PLUGINSPAGE=http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash></EMBED></a>";
			}
			else if (oSniff.ie>=4)
			{
				sReturn="<a name=\"anc_" + oFl.ID + "\"><OBJECT classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"http://active.macromedia.com/flash2/cabs/swflash.cab#version="+oFl.cabVersion+"\" ID=\""+oFl.ID+"\" WIDTH=\""+oFl.width+"\" HEIGHT=\""+oFl.height+"\" ALIGN=\"left\">\n";
				sReturn+="<PARAM NAME=movie VALUE=\""+oFl.flashFile+sSep+"domain="+document.domain+"&"+flashvars+"\">\n";
				sReturn+="<PARAM NAME=play VALUE=\""+oFl.play+"\">\n";
				sReturn+="<PARAM NAME=loop VALUE=\""+oFl.loop+"\">\n";
				sReturn+="<PARAM NAME=quality VALUE=\""+oFl.quality+"\">\n";
				sReturn+="<PARAM NAME=scale VALUE=\""+oFl.scale+"\">\n";
				sReturn+="<PARAM NAME=salign VALUE=\""+oFl.salign+"\">\n";
				sReturn+="<PARAM NAME=menu VALUE=\""+oFl.menu+"\">\n";
				sReturn+="<PARAM NAME=devicefont VALUE=\""+oFl.deviceFont+"\">\n";
				sReturn+="<PARAM NAME=BGColor VALUE=\""+oFl.bgcolor+"\">\n";
				sReturn+="<PARAM NAME=wmode VALUE=\""+oFl.mode+"\">\n";
				sReturn+="</OBJECT></a>\n";

				if((oFl.mode.toLowerCase!="window")&&(oSniff.ie>=5)) {
					sReturn+="<SCR"+"IPT LANGUAGE=JAVASCRIPT>document.getElementById('"+oFl.ID+"').nm_bOk=true;</SCR"+"IPT>";
		        }
	        }
	}
	return sReturn;
}

function flashObj2() {
	this.flashFile = "filename.swf";
	this.altImg = "NoFlash.gif";
	this.imageMap = "";
	this.defaultType="";
	this.url = "";
	this.htm = "";
	this.height = "400";
	this.width = "520";
	this.ID = "dw";
	this.downloadLink = "top";
	this.webTV = "true";
	this.play = "true";
	this.loop = "false";
	this.quality = "best";
	this.scale = "noborder";
	this.salign = "LT";
	this.menu = "false";
	this.deviceFont = "false";
	this.mode = "opaque";
	this.cabVersion = "4,0,0,0";
	this.flashVer = 4;
	this.notCompatImg = "http://www.msnbc.com/images/msnbc/flash_default.gif";
	this.instrumented=false;
	this.instrumentInit=new Function("sMainSection","sRefferer","this.instrument=new instrumentObj(sMainSection,sRefferer,'0fa')");
	this.debug=true;
	this.render=new Function("return writeFlashComponent2(this)");
}

function instrumentObj(sMain,sRef,sPrefix){
	this.prefix=sPrefix;
	this.mainSection=sMain;
	this.referrer=sRef;
	this.flashVer="0";
	this.browser="0";
	this.browserVer="0";
	this.os="0";
	this.render=new Function("return this.prefix+'='+this.mainSection+this.referrer+this.flashVer+this.browser+this.browserVer+this.os");
}

function showLeaveBehindAd() {
	var sGuid = readCookie("guid");
	if (sGuid != "") {
		var nPer = Math.random() * 100;
		if (nPer < 100 & nPer > 50)
			document.write ('<scr'+'ipt src=http://popup.msn.com/lbpopupad.asp?pg=nbclba&msid='+sGuid+'></scr'+'ipt>');
	}
}

function readCookie(ck) {
   //used by LeaveBehindAd
   var anyCookies = document.cookie;
   var pos = anyCookies.indexOf(ck.toUpperCase() + "=");
   if (pos != -1) {
      var start = pos + 5;
      var end = anyCookies.indexOf(";",start);
      if (end == -1) end = anyCookies.length;
      var value = anyCookies.substring(start,end);
      value = unescape(value);
   } else {
      value = "";
   }
   return value;
   }

if (document.cookie.indexOf("TZM=") == -1) SetCookie("TZM", parseInt(0-(new Date().getTimezoneOffset())));

function SetCookie(sName, sValue)
{
	document.cookie = sName + "=" + escape(sValue) + "; expires=" + new Date(2021, 10, 4).toGMTString() + "; path=/";
}
 //===================older version apps=========================
flashObj=flashObj2;

function validateEmail(sEml) {
	var bOK;
	if (sEml.charAt(sEml.length-1) == ";") {sEml = sEml.substr(0,sEml.length-1);}
	sEml = sEml.replace(/\s/g,"");
	var aEml = sEml.split(";");
	if (aEml.length > 5) {return false;}
	for (var i=0;i<aEml.length;i++) {
		bOK = validateEmail2(aEml[i])
		if(!bOK){break;}
	}
	return bOK;
}

function validateEmail2(strValue) {
	var objRegExp  = /^[a-z0-9]([a-z0-9_\-\.]*)@([a-z0-9]{1,}[a-z0-9_\-\.]*)(\.[a-z]{2,4}(\.[a-z]{2}){0,2})$/i;
	return objRegExp.test(strValue);
}

function glinkClick()
{
	if (!gEnabled) return true;
	var ua=window.navigator.userAgent;
	if (ua.indexOf('Win')==-1) return true;
	var ie=ua.indexOf('MSIE');
	if (ie==-1) return true;
	if (parseFloat(ua.slice(ie+5))<5) return true;
	if (liveEnv){destUrl="http://www.msnbc.msn.com";}else{destUrl=location.protocol+"//"+location.host;}
	var evSrc = window.event.srcElement;
	var cmNode = evSrc;
	while(cmNode!=null)
	{
		if (cmNode.tagName=="SPAN")
		{
			if (cmNode.getAttribute("subCM")!=null) 
				subCM=cmNode.getAttribute("subCM")+subCM;
			if (cmNode.getAttribute("CM")!=null) break;
		}
		cmNode = cmNode.parentElement;
	}
	var ceNode = evSrc;
	while(ceNode!=null)
	{
		if (ceNode.getAttribute("CE")!=null) break;
		ceNode = ceNode.parentElement;
	}
	
	if (cmNode!=null && ceNode!=null)
	{
		var highlight="", path=null, surl="";
		switch (evSrc.tagName)
		{
			case "A":
				highlight = evSrc.innerText;
				path=evSrc.pathname + evSrc.search;
				break;
			case "AREA":
				path=evSrc.pathname + evSrc.search;
			case "IMG":
				var aTag = evSrc;
				while (aTag!=null)
				{
					if (aTag.tagName=="A") break;
					aTag = aTag.parentElement;
				}
				if (aTag!=null)	path = aTag.pathname + aTag.search;
				highlight = evSrc.alt;
				break;
		}
		if (path==null)
		{
			var evNode = evSrc;
			while (evNode != null)
			{
				if (evNode.pathname!=undefined)
				{
					path = evNode.pathname + evNode.search;
					break;
				}
				evNode = evNode.parentElement;
			}
		}
		if (path==null) return true;
		if (curDoc!='3053415') surl='id/'+curDoc+'/';
		if (highlight.length>0) highlight="&HL="+escape(highlight.substring(0, 60));
		durl=defaultG+destUrl+"/"+path+"&&PS="+PSTaxonomy+"&SU="+escape(destUrl+'/'+surl)+highlight+"&CM="+escape(cmNode.getAttribute("CM")+subCM)+"&CE="+escape(ceNode.getAttribute("CE"));
		if (window.event.shiftKey) window.open(durl);
		else location.href=durl;
		return false;
	}
	return true;
}

function getCSS(id){
	if (cssList[id] != true){
		document.write('<link rel="stylesheet" type="text/css" href="/default.ashx/id/'+id+'/">');
		cssList[id] = true;
	}
}
