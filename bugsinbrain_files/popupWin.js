

/*
============================================================================

							popupwin.js

 ===========================================================================

  AUTHOR :					Yuriy Voznyuk

  DESCRIPTION :				JavaScript functions for handling new popup windows
							

 ===========================================================================

  $Header: //baikal/eparchive/SoftDev/Native/Interfaces/BLL/Images/script/popupWin.js 1.1 2003/06/25 18:04:15 cpaladug Exp $
  
  $Log: popupWin.js $  
  Revision 1.1  2003/06/25 18:04:15  cpaladug  
  Initial revision  
  Revision 1.1  2002/12/12 16:47:07  cpaladug  
  Initial revision  
  Revision 1.4  2002/06/13 12:49:58  cpaladug  
  Enlarged help window size  
  Revision 1.3  2002/05/09 21:29:34  cgodfrey  
  Added openqualscope function for qualifier popup  
  Revision 1.2  2002/05/06 18:31:05  cpaladug  
  Fandango Merge  
  Revision 1.1.2.2  2002/04/25 14:41:26  yvoznyuk  
  Moved function ShowILSLink from externalLinkFunctions.js   
  file, to have one include file for popup windows and   
  added new event handler to it.  

 ===========================================================================
 */
 
<!--

//===========================================================================
//function for opening a new window for tip 

function openTip(tip) 
{
   	var TipWin = window.open(tip, "searchtip", "status=no,width=550,height=440,resizable=yes,scrollbars=yes");
	if(IsPopUpSupportFocus())
		TipWin.focus();
}

//===========================================================================
//function for opening a new window for ILS Linking  

function ShowILSLink(strUrl,strWindowName,strParams)
{
	if (strParams.length == 0) strParams = "";
	if (strWindowName.length == 0) strWindowName = "";
	var ILsWin = window.open(strUrl,strWindowName,strParams);
	if(IsPopUpSupportFocus())
		ILsWin.focus();
   			
	//Return false to prevent reloading of main window
	if(document.all && window.event){//ie event handler
		window.event.returnValue = false;
	}
	return(false);
}
				
function openQualScope(params) {
	var popupWin = window.open("MeshQualifier.asp?" + params, "Qualifier", "status=no,top=90,left=300,width=450,height=225,menubar=1,scrollbars=yes,resizable=yes");
	if(IsPopUpSupportFocus())
		popupWin.focus();
}



//-->