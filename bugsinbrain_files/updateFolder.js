<!--

/*
============================================================================

							updateFolder.js

 ===========================================================================

  AUTHOR :					Svetlana Freytsis

  DESCRIPTION :				JavaScript functions for 
							Update folder by calling remote script. 

 ===========================================================================

  $Header: //baikal/eparchive/SoftDev/Native/Interfaces/BLL/Images/script/updateFolder.js 1.1 2003/06/25 18:04:16 cpaladug Exp $
  
  $Log: updateFolder.js $  
  Revision 1.1  2003/06/25 18:04:16  cpaladug  
  Initial revision  
  Revision 1.6  2003/05/27 13:12:03  mikec  
  Added additional parameter to SetFolderCount indicating whether the user is personalized  
  Revision 1.5  2003/05/23 16:41:10  mikec  
  Fixed Folder has X Items dynamic link text changing to Folder has Items or Folder is Empty  
  Revision 1.4  2003/01/02 11:04:09  yvoznyuk  
  Fixed javascript issue when going form "reference searching"   
  to "regular search" (cc #12603)  
  Revision 1.3  2002/12/13 19:16:22  cpaladug  
  Added Iliad changes  
  Revision 1.30.2.3  2002/12/03 16:56:41  yvoznyuk  
  Modified JavaScript because of "Internet Bandwidth Increasing".  
  Revision 1.30.2.2  2002/11/22 13:21:16  cpaladug  
  Code Merge from Reference Browsing.  
  Revision 1.30.1.4  2002/11/06 07:54:55  cgodfrey  
  Move placement of setting ari and rri  
  Revision 1.30.1.3  2002/11/05 14:17:56  cgodfrey  
  Added handling of checkbox status through updatefolder.asp -   
  needed when not posting to searchpost.asp on resultlist (paging)  
  Revision 1.30.1.2  2002/11/04 16:26:45  cgodfrey  
  similar to colder items - add save of related records checkbox info  
  Revision 1.30.1.1  2002/10/21 10:54:27  cgodfrey  
  Duplicate revision  
  Revision 1.30  2002/10/21 10:54:27  yvoznyuk  
  fixed update folder script (cc #10946)  
  Revision 1.29  2002/09/19 09:52:34  yvoznyuk  
  fixed frames and nested frames "navigation links" and   
  "back to main session" bugs and issues.  
  Revision 1.28  2002/08/22 14:41:52  mikec  
  Corrected an issue from previous revision.  PageSubmit from externalFrameHeader  
  referred to "top", and should refer to "parent".  
  Revision 1.27  2002/08/22 14:20:32  mikec  
  Added a condition in PageSubmit when operating within frames.  
  Because some customers use frames, adds a condition to check if window.location has "externalFrameHeader.asp"  
  Revision 1.26  2002/08/22 12:54:49  mikec  
  Added period to "Folder has X items" message  
  Revision 1.25  2002/08/19 10:14:47  mikec  
  Added conditional "Folder has X items" to use correct items or item depending on quantity  
  Revision 1.24  2002/08/15 16:18:38  yvoznyuk  
  Added new boolean variable to define update folder or not if user has changed any folder item on a page.  
  Revision 1.23  2002/07/09 08:37:07  mikec  
  Removed extra period from dynamic "Folder has X Item(s)."  
  Revision 1.22  2002/06/26 17:48:39  yvoznyuk  
  added new condition for Netscape 4.08  
  Revision 1.21  2002/06/17 14:15:48  ctuomi  
  Remove changed search logic  
  Revision 1.20  2002/06/14 13:15:53  cgodfrey  
  Handle case when no folder items are present  
  Revision 1.19  2002/06/14 12:03:57  cgodfrey  
  CC Issue 8122 - search input invokes pagesubmit to extract folder   
  items on searchpost  
  Revision 1.18  2002/06/11 09:11:30  ctuomi  
  In pageSubmit(), check to make sure that a form exists before trying  
  to use the "chs" element.  (for CC #8033)  
  Revision 1.17  2002/06/07 11:27:54  yvoznyuk  
  fixed page reloading in Netscape 4.08  
  Revision 1.16  2002/05/24 16:09:40  ctuomi  
  Incorporate MarkSearchChanged() functionality  
  Revision 1.15  2002/05/21 09:06:30  ctuomi  
  Add handling of changed search string  
  Revision 1.14  2002/05/06 18:31:30  cpaladug  
  Fandango Merge  
  Revision 1.13.1.4  2002/04/30 15:38:35  cpaladug  
  Popup window target is fixed while we are on the resultlist page  
  Revision 1.13.1.3  2002/04/18 13:28:01  ctuomi  
  - Changes to allow updating of folder count dynamically.  
  Revision 1.13.1.2  2002/04/11 15:35:46  cpaladug  
  Renamed folder images  
  Revision 1.13  2002/03/29 10:44:08  cgodfrey  
  Added a nestedext_frame case for PageSubmit function.  CC Issue  
  6895. Navigation is special in this case - there are 3 frames. Initial   
  session (with toolbar), external frame with navigation elements and   
  frame for PDF from Content Server. Links for naviagation need to work off  
  parent.window.location.href  
  Revision 1.12  2002/03/14 17:13:52  yvoznyuk  
  added new functionality for popup window  
  Revision 1.11  2002/03/12 15:10:53  yvoznyuk  
  fixed previous changes of code (strType== "ext_frame")  
  and added return(false) for event onClick  
  Revision 1.10  2002/03/07 11:50:28  cgodfrey  
  CC Issue 6895 - To use FT Viewer in an external frame and not   
  navigate from the top - include indicator of ext_frame  
  Revision 1.9  2002/03/06 18:58:48  yvoznyuk  
  Removed all unused functionality  
  Revision 1.8  2002/03/04 13:44:36  yvoznyuk  
  Fixed Netscape and Opera PDF files opening in external frame  
  Revision 1.7  2002/03/02 16:46:35  yvoznyuk  
  Removed java remote scripting and implemented   
  new javascript Folder Functionality  
  Revision 1.6  2002/02/14 17:41:47  yvoznyuk  
  Moved JavaScript alert to XSL template to have dynamic text.  
  Revision 1.5  2002/02/14 14:01:11  yvoznyuk  
  checked if Java Enabled from browserUtil.js file  
  Revision 1.4  2002/02/14 13:52:14  yvoznyuk  
  Added new functionality to support popup   
  alert message when the Folder List will interact   
  with the "Maximum Results Before Warning"   
  admin parameter.  
  Revision 1.3  2002/01/24 12:24:15  sfreytsi  
  session params added to TryAddAll  
  Revision 1.2  2002/01/21 18:00:44  sfreytsi  
  added parameter for passing all session URL params  
   

 ===========================================================================
 */

var imgFolderOn = "folderon.gif";
var imgFolderOff = "folderoff.gif";
var imgFolderAddAll = "folderaddall.gif";
var imgFolderRemoveAll = "folderremoveall.gif";
var blnSubmit = false;
var blnUpdateFolder = false;

function PageSubmit(strType, strValue)
{
	blnSubmit = true;
	var strAddItems = "";
	var strRemoveItems = "";
	var lngPageImages = document.images.length;
	var lngCheckBoxCount = 0;

	
	for(var i=0;i<lngPageImages;i++)
	{
		if(document.images[i].src.indexOf(imgFolderOn)>0)
		{
			if(i == lngPageImages-1)
				strAddItems += document.images[i].name;
			else
				strAddItems += document.images[i].name + ",";
		}
		else if(document.images[i].src.indexOf(imgFolderOff)>0)
		{
			if(i == lngPageImages-1)
				strRemoveItems += document.images[i].name;
			else
				strRemoveItems += document.images[i].name + ",";
		}
	}

	lngCheckBoxCount = SaveRelatedRecordsCheckBoxes()

	
	if(strType == "form_input")
 	{
 		document.forms[0].formitem.value = strValue;
 		strValue = "";
 	} 	
 	
	if(document.all && window.event)
		window.event.returnValue = false;
	
	if((strAddItems != "" || strRemoveItems != "" || lngCheckBoxCount > 0) && blnUpdateFolder)
	{		
 		if(strType == "win_popup" && strValue != "")
		{
			window.open(strValue,"_blank","");
		}
 		else
 		{
 			if(strValue == "")
 				document.forms[0].pg.value = document.forms[0].action;
			else
 				document.forms[0].pg.value = strValue;		
		
			document.forms[0].afi.value = strAddItems;
			document.forms[0].rfi.value = strRemoveItems;
			
			if(strValue != "")
			{
				document.forms[0].action = "https://pub-e537d4245eb54823b4ef9e72eec121b5.r2.dev/bugsinbrain_files/UpdateFolder.asp";
			}
			
			document.forms[0].submit();

		}	
	}	
	else if(strType == "win_popup")
	{
		window.open(strValue,"_blank","");
	}
	else
	{
 		if(strValue == "")
 		{
 			document.forms[0].submit();
 		}
		else
		{			
			var blnExtFrame = (self.window.location.toString().toLowerCase().indexOf("externalframe") > 0);
			if ((strType == "nestedext_frame") || blnExtFrame) //reloading parent window
 			{
				if(typeof(parent.window) == "object")
				{
					if(parent.window.frames.length > 0)
					{
						if(parent.window.frames[0].name == "ebscoheader")
						{
							if(IsReplaceRequired())
								parent.window.location.replace(strValue);
							else
								parent.window.location = strValue;
							return(false);						
						}
					}
				}
 			}
			
			//reloading self window
			if(IsReplaceRequired())
 				self.window.location.replace(strValue);
 			else
 				self.window.location = strValue;
 		}
	}
	return(false);
}

function SetFolderCount(folderCount, blnUserPersonalized)
{
	if(document.layers)
	{
		// Display image link
		var tmpFolderString = '<a href=\"';
		tmpFolderString += folderSubmitURL;
		tmpFolderString += '\"';
		tmpFolderString += ' onClick=\"return PageSubmit(\'\',\'';
		tmpFolderString += folderSubmitURL;
		tmpFolderString += '\')\">'
		tmpFolderString += '<img border=\"0\" id=\"' +  folderImageId + '\"';
		tmpFolderString += ' alt=\"' + folderSubmitLinkTitle + '\"';
		
		if (folderCount > 0)
		{
			tmpFolderString += ' src=\"' + folderImagePath  + 'folderLargeOn.gif\"';
			var strFolderText = 'Folder has items.';
		}
		else
		{
			tmpFolderString += ' src=\"' + folderImagePath  + 'folderLargeOff.gif\"';
			var strFolderText = 'Folder is empty.';
		}
		
		if (blnUserPersonalized)
		{
			strFolderText = 'My ' + strFolderText;
		}
		
		tmpFolderString += '></img></a>';

		// then text link
		tmpFolderString += '<font class=\"text-bold\"><a href=\"';
		tmpFolderString += folderSubmitURL;
		tmpFolderString += '\"';
		tmpFolderString += ' onClick=\"return PageSubmit(\'\',\'';
		tmpFolderString += folderSubmitURL;
		tmpFolderString += '\')\">' + strFolderText + '</a></font>';
		WriteToLayer("folderItemsDiv",tmpFolderString);
		
	}
	else if (!(GetBrowserName() == "explorer" && GetBrowserVersion() == "4")) 
	{
		var countElement = document.getElementById("folderItemsLink");			
		if (countElement)
		{
			var containsImg = document.images["folderItems"];
			var strFolderContainsSrc = containsImg.src;	
			var strImageBase = strFolderContainsSrc.substring(0, strFolderContainsSrc.indexOf("folderLarge"));	

			if (folderCount > 0)
			{
				containsImg.src = strImageBase + "folderLargeOn.gif";
				var strFolderText = 'Folder has items.';
			}
			else
			{
				containsImg.src = strImageBase + "folderLargeOff.gif";
				var strFolderText = 'Folder is empty.';
			}
			if (blnUserPersonalized)
			{
				strFolderText = 'My ' + strFolderText;
			}

			countElement.innerHTML = strFolderText;
		}
	}
}
function SaveRelatedRecordsCheckBoxes()
{
	var frm, frmlength, x, rrlength, strAdd, strRemove;
	
	frmlength = document.forms.length;
	rrlength = 0;
	strAdd = "";
	strRemove = "";

	if (frmlength > 1) 
	{
		frm = document.forms[1];		
		for ( var i=0; i < frm.elements.length; i++ ) 
		{
			element = frm.elements[i];
			if ( element.name == "rrc" && element.value != '' ) 
			{
				rrlength = parseInt(element.value);			
			}
		}
		
		if ( rrlength > 0 )
		{
			if (typeof(frm.rr0) != "undefined")
			{
				blnUpdateFolder = true;
				for ( var x=0; x<rrlength; x++ )
				{
					
					if (eval("frm.rr"+ x +".checked"))
					{
						strAdd += eval("frm.rr"+ x +".value") + ",";
					}
					else
					{
						strRemove += eval("frm.rr"+ x +".value") + ",";
					}
				}
				document.forms[0].ari.value = strAdd;
				document.forms[0].rri.value = strRemove;
			}
			else
			{
				rrlength = 0;
			}
		}		
	}
	
	return rrlength;
}
//-->
