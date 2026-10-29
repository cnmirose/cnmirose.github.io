var tdate = " January 22,  2002";
function pollwin(){
pollwindow=window.open("","pollwindow","status=no,resize=no,toolbar=no,scrollbars=yes,width=461,height=300,maximize=null");
}
function pop(url)
	{
	var rmarg = screen.width;
	var tmarg = 100;
	var s_width = 0;
	var s_height = 0;
	s_width = 300;
	s_height = 400;
	rmarg = rmarg-(s_width+50);
	ow=eval("window.open('"+url+"','so','toolbar=0,scrollbars=1,location=0,status=0,menubars=0,resizable=0,width="+s_width+",height="+s_height+",top="+tmarg+",left="+rmarg+",maximize=null')")
	if (ow.opener == null) ow.opener = self;

	ow.focus();
	}


function PrintPage()
{
var i;
window.print();
setTimeout('window.close()',500);
}

function openWindow(url) {
so = window.open(url,'indiatimes','height=400,width=600,toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=yes,resizable=0');
//so.window.moveTo(0,0);
}

function openWin(url) {
so = window.open(url,'indiatimes','height=680,width=800,toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=yes,resizable=0');
//so.window.moveTo(0,0);
}


function bookmark(url,description)
{
netscape="Press OK, then CTRL+D.";
if ((navigator.appName == "Microsoft Internet Explorer") && (parseInt(navigator.appVersion) >= 4))
{window.external.AddFavorite(url, description);}
else if (navigator.appName=='Netscape'){alert(netscape);}
}
function survey(url)
{
var rmarg = screen.width;
var tmarg = 100;
var s_width = 0;
var s_height = 0;
s_width = 350;
s_height = 400;
rmarg = rmarg-(s_width+50);
ow=eval("window.open('"+url+"','so','toolbar=0,scrollbars=1,location=0,status=0,menubars=0,width="+s_width+",height="+s_height+",top="+tmarg+",left="+rmarg+"')");
if (ow.opener == null) ow.opener = self;
ow.focus();
}

	t1 = new Image();
	t3 = new Image();
	t4 = new Image();
	m1 = new Image();
	m2 = new Image();
	t2 = new Image();
	t1.src="https://bucket.worldofbits.brown.edu/press/indiatimes_files/images/nse-off.gif";
	t2.src="https://bucket.worldofbits.brown.edu/press/indiatimes_files/images/nse-on.gif";
	t3.src="https://bucket.worldofbits.brown.edu/press/indiatimes_files/images/bse-off.gif";
	t4.src="https://bucket.worldofbits.brown.edu/press/indiatimes_files/images/bse-on.gif";
	m1.src = "http://finance.indiatimes.com/fi/static/bsegraph123.gif";
	m2.src = "http://finance.indiatimes.com/fi/static/nsegraph123.gif";
	function jai()
	{
	document.nse.src=t1.src;
	document.bse.src=t4.src;
	document.market.src=m1.src;
	}
	function jai2()
	{
	document.bse.src=t3.src;
	document.nse.src=t2.src;
	document.market.src=m2.src;
	}


	function popUp(page)
	{
	var s_width = screen.width;
	var s_height = screen.height;
	if (s_width > 1024)
	{
		s_width = 960;
		s_height = 600;
	}
	else
	{
	s_width = parseInt(0.90 * screen.width);
	s_height = parseInt(0.80 * screen.height);
	}

	so=eval("window.open('"+page+"','so','toolbar=0,scrollbars=1,location=0,status=0,menubars=0,resizable=1,width="+s_width+",height="+s_height+",top=0,left=0,maximize=null')");
	so.focus();
	}

	

function pager(url)
	{
	var rmarg = screen.width;
		var tmarg = 0;
		var rmarg = 0;
		var s_width = 0;
		var s_height = 0;
		s_width = 550;
		s_height = 500;
		
		if (navigator.appName=='Netscape')
		{
			ow = eval("openWin('"+url+"')");		
		}
		else
		{
			ow=eval("window.open('"+url+"','so','toolbar=0,scrollbars=1,location=0,status=0,menubars=0,resizable=0,width="+s_width+",height="+s_height+",top="+tmarg+",left="+rmarg+",maximize=null')")
		}
		if (ow.opener == null) ow.opener = self;
		ow.focus();
	}


	function cmspopup(url, hgt, wdt)
	{
	        var tvmarg = screen.width;
		var ttvmarg = 100;
		var tvs_width = 0;
		var tvs_height = 0;
		tvs_width = wdt;
		tvs_height = hgt;
		tvmarg = tvmarg -(tvs_width+50);
		if (navigator.appName=='Netscape')
		{
			tvow = eval("openWin('"+url+"')");		
		}
		else
		{
			tvow=eval("window.open('"+url+"','so','toolbar=0,scrollbars=0,location=0,status=0,menubars=0,resizable=0,width="+tvs_width+",height="+tvs_height+",top="+ttvmarg+",left="+tvmarg+",maximize=null')")
		}
		if (tvow.opener == null) tvow.opener = self;
		tvow.focus();
	}  


							function setHomepage(what, url)
							{
							window.open("http://us.indiatimes.com/","Indiatimes","width=450,height=350,toolbar=0,scrollbars=yes,location=1,status=1,menubars=1,resizable=1");

							if (navigator.appName == 'Microsoft Internet Explorer' && document.getElementById)  setHomepageExplorer(what, url);
							else if (document.layers || document.getElementById) setHomepageNetscape(what, url);
							return false;
							}

							function setHomepageNetscape(what, url) 
							{var warn = 'Due to Netscapes security handling, making Indiatimes US Edition ' + 'your homepage, will show you a dialog with a warning.' + 'If you do not wish to grant this site the access to ' + 'your browser settings, you can manually copy ' + 'http://usedition.indiatimes.com and paste it in the location field in ' + 'Edit|Preferences|Navigator.';
							if (confirm(warn)) 
							{
							netscape.security.PrivilegeManager.enablePrivilege("UniversalPreferencesWrite");
							navigator.preference('browser.startup.homepage', url);netscape.security.PrivilegeManager.disablePrivilege("UniversalPreferencesWrite");
							}
							}

							function setHomepageExplorer(what, url)
							{
							what.style.behavior = 'url(#default#homepage)';
							what.setHomePage(url);
							}
