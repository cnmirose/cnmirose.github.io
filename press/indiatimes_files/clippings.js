var cookiestring,sUser,sUserLength, mstatus,addr,findpos,findposLength;
function getCookievalue1(strcookie)
{ var ipos = cookiestring.indexOf(strcookie);
   var ipos2 = cookiestring.indexOf(';',ipos);  
  if (ipos != -1) {   if (ipos2 == -1) ipos2 = cookiestring.length;
    return unescape(cookiestring.substring((ipos+strcookie.length+1),ipos2));} 
}
addr = document.URL;
addr1 = document.URL;
try
{
cookiestring= document.cookie;
cookiestring = cookiestring.toLowerCase();
sUser = getCookievalue1('commlogu');
sUserLength = sUser.length;
mstatus = getCookievalue1('cmssso');
numero= 999999.9999
inRandom = Math.round((Math.random() * numero+ 0.5));

}
catch(er) 
{
cookiestring=' ';
sUserLength=0;
}

function clippopup(msid)
{
	if ((cookiestring.indexOf('commlogp') != -1) && (sUserLength > 0)  && (mstatus == 'true') )  
		{
			var popupurl1='http://timesofindia.indiatimes.com/insertclipping/msid-'+msid+',random-'+inRandom+'.cms';
			window.open(popupurl1,'Clippings','toolbar=0,scrollbars=0,location=0,status=0,menubars=0,resizable=0,width=350,height=160,top="0",left="0",maximize=null');
document.location.href = addr1;
		}
else
{
try
{
findpos = getCookievalue1('arc');
findposLength = findpos.length;
}
catch(er) 
{
findposLength =0;
}

			if((findpos != '0') && (findposLength > 1))
				{
					document.cookie = 'arc=0';
				}
			else
				{
					document.cookie = 'arc=' + escape(msid);
				}
			document.location.href = 'http://timesofindia.indiatimes.com/cms.dll/login?TferURL=' + addr1;
		}
}

if ((cookiestring.indexOf('commlogp') != -1) && (sUserLength > 0)  && (mstatus == 'true') )  
{
try
{
findpos = getCookievalue1('arc');
findposLength = findpos.length;
}
catch(er) 
{
findposLength =0;
}

		if((findpos  != '0') && (findposLength > 1))
			{
			var popupurl2='http://timesofindia.indiatimes.com/insertclipping/msid-' + findpos+',random-'+inRandom+'.cms';
			window.open(popupurl2,'Clippings','toolbar=0,scrollbars=0,location=0,status=0,menubars=0,resizable=0,width=350,height=150,top="0",left="0",maximize=null');
			}
			document.cookie = 'arc=0';
	}