<!--
/*
============================================================================

				setFormFocus.js

 ===========================================================================

  AUTHOR :			Tae Kim

  DESCRIPTION :		browser form focus

 ===========================================================================

  $Header: //baikal/eparchive/SoftDev/Native/Interfaces/BLL/Images/script/setFormFocus.js 1.1 2003/06/25 18:04:16 cpaladug Exp $
  
  $Log: setFormFocus.js $  
  Revision 1.1  2003/06/25 18:04:16  cpaladug  
  Initial revision  
  Revision 1.1  2002/12/12 16:47:11  cpaladug  
  Initial revision  
  Revision 1.10  2002/10/03 15:33:19  ctuomi  
  Remove Company Directory-related code  
  Revision 1.9  2002/06/20 15:42:28  tkim  
  Fixed form focus for subject authority.  
  Revision 1.8  2002/06/20 14:54:26  yvoznyuk  
  fixed set focus functionality  
  Revision 1.7  2002/06/20 10:29:29  ctuomi  
  Tests for existence of form before using items on the form.  Avoids  
  JavaScript errors when in external frame  
  Revision 1.6  2002/06/18 17:39:43  sfreytsi  
  aded setFocus to "browse" box  for scan and scan details  
  Revision 1.5  2002/06/04 11:13:09  yvoznyuk  
  fixed form element focus for netscape 4.x  
  Revision 1.4  2002/05/15 10:03:43  sfreytsi  
  added condition not to set focus is field is hidden  
  Revision 1.3  2002/03/27 09:03:45  kduncan  
  Added focus for "ea" E-mail Address textbox input for deliverymngr,   
  fix cc#6664.  
  Revision 1.2  2002/01/29 18:25:47  yvoznyuk  
  Fixed bug #6581  
  For the Company Directory search we need to switch   
  focus of the first form element 'ss' or 'ss0' with 'dl0'  
  Revision 1.1  2002/01/11 11:41:37  tkim  
  Initial revision  

 ===========================================================================
*/

//event handler for Internet Explorer and Netscape
//if(document.all) then IE 3-5
//if(document.layers) then NS 4.x
//if(document.getElementById) then NS 6 and IE 6 and OP 5

//YV - For the Company Directory search we need to switch 
//focus of the first form element 'ss' or 'ss0' with 'dl0'
if(document.all)
{	//ie3-6,op6
	if (document.all("ss") && document.all("bs"))
	{
		if(document.all("bs").type!="hidden") 
			document.all("bs").focus();
		else
			document.all("ss").focus();
	}
	else if (document.all("bs"))
	{
		if(document.all("bs").type!="hidden") 
			document.all("bs").focus();
	}
	else if (document.all("ss"))
	{
		if(document.all("ss").type!="hidden") 
			document.all("ss").focus();		
	}
	else if(document.all("ss0"))
		document.all("ss0").focus();
	else if(document.all("dl0"))
		document.all("dl0").focus();
	else if(document.all("ea"))
		document.all("ea").focus();
	
}
else if(document.layers)
{	//ns4
	if (document.forms[0]) 
	{
		if (document.forms[0].ss && document.forms[0].bs)
			{
				if(document.forms[0].bs.type!="hidden") 
					document.forms[0].bs.focus();
				else
					document.forms[0].ss.focus();
			}
			else if (document.forms[0].bs)
			{
				if(document.forms[0].bs.type!="hidden") 
					document.forms[0].bs.focus();
			}
			else if (document.forms[0].ss)
			{
				if(document.forms[0].ss.type!="hidden") 
					document.forms[0].ss.focus();
			}
			else if(document.forms[0].ss0)
				document.forms[0].ss0.focus();
			else if(document.forms[0].dl0)
				document.forms[0].dl0.focus();
			else if(document.forms[0].ea)
				document.forms[0].ea.focus();
		}
	
}
else if(document.getElementById)
{	//ie5-6,ns6,op5
		if(document.getElementById("bs") && document.getElementById("ss"))
		{
			if(document.getElementById("bs").type!="hidden")
				document.getElementById("bs").focus();
			else
				document.getElementById("ss").focus();
		}
		else if(document.getElementById("bs"))
		{
			if(document.getElementById("bs").type!="hidden")
				document.getElementById("bs").focus();
		}
		else if(document.getElementById("ss"))
		{
			if(document.getElementById("ss").type!="hidden")
				document.getElementById("ss").focus();
		}
		else if(document.getElementById.ss0)
			document.getElementById("ss0").focus();
		else if(document.getElementById.dl0)
			document.getElementById("dl0").focus();
		else if(document.getElementById.ea)
			document.getElementById("ea").focus();
}

//-->
