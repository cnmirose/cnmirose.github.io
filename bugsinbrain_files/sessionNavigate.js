<!--

/*
============================================================================

							sessionNavigate.js

 ===========================================================================

  AUTHOR :					

  DESCRIPTION :				

 ===========================================================================

  $Header: //baikal/eparchive/SoftDev/Native/Interfaces/BLL/Images/script/sessionNavigate.js 1.1 2003/06/25 18:04:16 cpaladug Exp $
  
  $Log: sessionNavigate.js $  
  Revision 1.1  2003/06/25 18:04:16  cpaladug  
  Initial revision  
  Revision 1.1  2002/12/12 16:47:10  cpaladug  
  Initial revision  
  Revision 1.2  2002/09/19 09:52:33  yvoznyuk  
  fixed frames and nested frames "navigation links" and   
  "back to main session" bugs and issues.  
  Revision 1.1  2002/03/29 10:34:45  cgodfrey  
  Moved js code to a separate module since it is used by 2 asp pages  
  externalframe.asp and externalframeheader.asp  


 ===========================================================================
 */

function BackToMainSession(strPage)
{
	if(typeof(parent.window.parent.window) == "object")
	{
		if(parent.window.parent.window.frames.length > 0)
		{
			if(parent.window.parent.window.frames[0].name == "ebscoheader")
			{
				var strURL = parent.window.parent.window.location.href;
				strURL = strPage + strURL.substring(strURL.indexOf("?"), strURL.indexOf("es="));
				parent.window.parent.window.location = strURL;
			}
		}
	}
	else if(typeof(parent.window) == "object")
	{
		if(parent.window.frames.length > 0)
		{
			if(parent.window.frames[0].name == "ebscoheader")
			{
				var strURL = parent.window.location.href;
				strURL = strPage + strURL.substring(strURL.indexOf("?"), strURL.indexOf("es="));
				parent.window.location = strURL;
			}
		}
	}
}
