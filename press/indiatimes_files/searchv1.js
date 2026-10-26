var googlesearchstring="http://www.google.com/custom?cof=S%3Ahttp%3A%2F%2Fwww.indiatimes.com%3BAH%3Aleft%3BLH%3A25%3BL%3Ahttp%3A%2F%2Fsearch.indiatimes.com%2Fit_logo.gif%3BLW%3A137%3BAWFID%3A9d13d66159b93c36%3B&domains=indiatimes.com&sa=Google+Search";
function arc0f(showpg)
{
	document.frmsearch.curpg.value=showpg;
	document.frmsearch.submit();
}


function arc1f(showpg)
{
	document.frm1.curpg.value=showpg;
	document.frm1.submit();
}


function implementsearch(){
var searchtext=document.frmsearch.query.value;
var p=0;
var x;
for(x=0; x < 5; x++)
{
	if (document.frmsearch.search[x].checked==1)
	{
		p=1;
		break;
	}
}
if(x=='0')
{
	var strsearch = "/search.cms";
                 document.frmsearch.action=strsearch;
                 document.frmsearch.submit();

}
if(x=='1')
{
	var strsearch = googlesearchstring + "&sitesearch=indiatimes.com"+"&q="+searchtext;
}
if(x=='2')
{
        var strsearch = googlesearchstring+"&q="+searchtext;
}

if(x > '0')
{
	window.open(strsearch,"search","","");
}
return false ;

}


function implementsearch2(){
var searchtext=document.frmsearch.query.value;
var p=0;
var x;
for(x=0; x < 5; x++)
{
	if (document.frmsearch.search[x].checked==1)
	{
		p=1;
		break;
	}
}
if(x=='0')
{
	var strsearch = "/search.cms";
                 document.frmsearch.action=strsearch;
                 document.frmsearch.submit();

}
if(x=='1')
{
	var strsearch = googlesearchstring + "&sitesearch=indiatimes.com"+"&q="+searchtext;
}
if(x=='2')
{
        var strsearch = googlesearchstring+"&q="+searchtext;
}

if(x > '0')
{
	window.open(strsearch,"search","","");
}
return false ;

}




function implementsearch1()
{
	var mindex=document.frmsearch.query.selectedIndex;
	var searchtext=document.frmsearch.query.value;
	
	if(searchtext == "")
		{
			alert("Input something to search")
			document.frmsearch.query.focus();
			return false;
		}
	else
		{
			var strsearch = "/search.cms";
			document.frmsearch.action=strsearch;
			document.frmsearch.submit();
		}
}

function implementsearchet(){

	var mindex=document.frmsearch.search.selectedIndex;
	var searchtext=document.frmsearch.query.value;
	
	if(searchtext == "")
		{
			alert("Input something to search")
			document.frmsearch.query.focus();
			return false;
		}
	if(mindex==0){
				var strsearch = "/search.cms";
				document.frmsearch.action=strsearch;
				document.frmsearch.submit();
				}
	if(mindex==1){
				var strsearch = googlesearchstring + "&sitesearch=indiatimes.com"+"&q="+searchtext;
				}
	if(mindex==2){
				var strsearch = googlesearchstring+"&q="+searchtext;
				}
	

	if(mindex > 0){
				window.open(strsearch,"search","","");
	}
	return false ;
}

function osearch(){

	var p=0;
	var x;
for(x=0;x<2;x++)
{
	if (document.frmos.qr[x].checked==1)
	{
		p=1;
		break;
	}

}
	if(x=='0'){
			var strsearch = "http://203.199.70.235/equity/quote.jsp?ticker=" + document.frmos.qr[0].value +"&exchange=b";
			document.frmos.action=strsearch;
			document.frmos.submit();
		}

	if(x=='1'){
			var strsearch = "http://203.199.70.235/mfund/search_result.jsp?key=" + document.frmos.qr[1].value + "&domain=mf"
			document.frmos.action=strsearch;
			document.frmos.submit();
		}

return false ;
}	
