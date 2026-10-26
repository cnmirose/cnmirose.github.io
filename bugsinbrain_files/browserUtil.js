<!--

/*
============================================================================

							browserUtil.js

 ===========================================================================

  AUTHOR :					Yuriy Voznyuk

  DESCRIPTION :				JavaScript browser utilities functions.

 ===========================================================================

  $Header: //baikal/eparchive/SoftDev/Native/Interfaces/BLL/Images/script/browserUtil.js 1.1 2003/06/25 18:04:10 cpaladug Exp $
  
  $Log: browserUtil.js $
  Revision 1.1  2003/06/25 18:04:10  cpaladug
  Initial revision
  Revision 1.3  2002/12/13 19:16:21  cpaladug
  Added Iliad changes
  Revision 1.6.1.4  2002/12/06 18:03:20  yvoznyuk
  Moved back two functions which we are 
  using in more than one place.
  Revision 1.6.1.3  2002/12/06 14:59:20  yvoznyuk
  Added MKS comments
  
 ===========================================================================
 */

function GetBrowserName()
{
	var strBa = navigator.userAgent.toLowerCase();
	var strBn = navigator.appName.toLowerCase();
	if(strBa.indexOf("opera") != -1)
		return("opera");
	else if(strBn.indexOf("hotjava") != -1)
		return("hotjava");
	else if(strBn.indexOf("explorer") != -1)
		return("explorer");
	else if(strBn.indexOf("netscape") != -1)
		return("netscape");
	else if(strBa.indexOf("aol") != -1)
		return("aol");
	else
		return("");
}

function GetBrowserVersion()
{
	var strBa = navigator.userAgent.toLowerCase();
	var strBn = GetBrowserName();
	var intBv = parseInt(navigator.appVersion);
	if(strBn == "opera")
	{	//opera
		if(strBa.indexOf("opera 3") != -1 || strBa.indexOf("opera/3") != -1)
			return("3");
		else if(strBa.indexOf("opera 4") != -1 || strBa.indexOf("opera/4") != -1)
			return("4");
		else if(strBa.indexOf("opera 5") != -1 || strBa.indexOf("opera/5") != -1)
			return("5");
		else if(strBa.indexOf("opera 6") != -1 || strBa.indexOf("opera/6") != -1)
			return("6");
		else
			return("0");
	}
	else if(strBn == "hotjava")
	{	//sun hotjava
		if(intBv == 3)
			return("3");
		else if(intBv == 4)
			return("4");
		else if(intBv == 5)
			return("5");
		else
			return("0");
	}
	else if(strBn == "explorer")
	{	//ms explorer
		if(intBv == 2)
			return("3");
		else if(strBa.indexOf('msie 4') != -1)
			return("4");
		else if(strBa.indexOf('msie 5.0') != -1)
			return("5.0");
		else if(strBa.indexOf('msie 5.5') != -1)
			return("5.5");
		else if(strBa.indexOf('msie 6') != -1)
			return("6");
		else
			return("0");
	}
	else if(strBn == "netscape")
	{	//netscape
		if(intBv == 3)
			return("3");
		else if(intBv == 4)
			return("4");
		else if(intBv == 5)
			return("6");
		else
			return("0");
	}
	else if(strBn == "aol")
	{	//aol	
		if(strBa.indexOf('aol 3') != -1)
			return("3");
		else if(strBa.indexOf('aol 4') != -1)
			return("4");
		else if(strBa.indexOf('aol 5') != -1)
			return("5");
		else if(strBa.indexOf('aol 6') != -1)
			return("6");
		else if(strBa.indexOf('aol 7') != -1)
			return("7");
		else
			return("0");
	}
	else
	{
		return("0");
	}
}

function GetBrowserServicePack()
{
	var strBn = GetBrowserName();
	var strBsp = "0";
	if(strBn == "explorer")
	{
		strBsp = navigator.appMinorVersion.toUpperCase();	
		if(strBsp.length > 0) 
		{
			if(strBsp.indexOf(";") != -1)
			{
				var arrSP = strBsp.split(";");
				if (arrSP.length > 0)
					strBsp = arrSP[1];
			}
		}
		else
		{
			strBsp = "0";
		}
	}
	return(strBsp);
}

function IsPopUpSupportFocus()
{
	//window.focus() doesn't work in ie 5.01 SP2 and ie 4
	var intBv = GetBrowserVersion();
	var strBn = GetBrowserName();
	var strBsp = GetBrowserServicePack();
	
	if(strBn == "explorer")
	{
		if(!(intBv == "5.0" && strBsp == "SP2") && !(intBv == "4"))
			return(true);
		else
			return(false);
	}
	else
	{
		return(true);
	}
}

//this function checks for netscape 4.08 browser
//we need to use "location.replace()" instead of "location.href"
//otherwise it will refreshing page continuously
function IsReplaceRequired()
{
	var strBn = GetBrowserName();
	var strBv = navigator.appVersion.substring(0,4);
	if(strBn == "netscape")
	{
		if(strBv == "4.08")
			return(true);
		else
			return(false);
	}
	else
	{
		return(false);
	}
}

function GetLayer(strName)
{
	if (document.all)
		return(document.all(strName));
	else if (document.layers)
		return(document.layers[strName]);
	else if (document.getElementById)
		return(document.getElementById(strName));
	else
		return(false);
}
function WriteToLayer(strLayerName, strTip)
{
	var objLayer = GetLayer(strLayerName);
	if(objLayer) //if layer exist
	{
		if(document.layers)
		{	//ns4.x	
		   	objLayer.document.open();					
		    objLayer.document.write(strTip);
		    objLayer.document.close();
		}
		else
		{	//innerHTML doesn't work in ie4 and opera
			if (!(GetBrowserName() == "explorer" && GetBrowserVersion() == "4"))
				objLayer.innerHTML = strTip;
		}
	}
}

//-->