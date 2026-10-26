var wtl_imgarray = new Array; 
var wtl_ptr = 0;
function wtl_Tag6(wtl_TagID,wtl_SID,wtl_URL,wtl_Title,CONTENTGROUP)
{

	function wtl_createImage(wtl_src)
	{
		wtl_imgarray[wtl_ptr] = new Image;
		wtl_imgarray[wtl_ptr].src = wtl_src;
		wtl_ptr++; 
	}
	
	function D8( d)
	{
		var fwd=1, seed= new Date('01/01/2000'), key= "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		var s= key.charAt( d.getFullYear()-2000)+key.charAt( d.getMonth()+1)+key.charAt( d.getDate());
		s+= key.charAt( d.getHours())+key.charAt( d.getMinutes())+key.charAt( d.getSeconds());
		while( seed.getDay()!=fwd) seed= new Date(seed.getTime() + 86400000);
		var w= Math.floor( (d.getTime()-(seed.getTime()+86400000)) / 604800000 );
		s+= key.charAt( (w-(w%16))/16 );
		s+= key.charAt( w%16);
		return s;
	}

	function A( B, C)
	{
		W+="&"+B+"="+escape(C);
	}
	
	var t = new Date();
	var W="http"+(document.URL.indexOf('https:')==0?'s':'')+"://statse.webtrendslive.com/S" + wtl_SID + "/button6.asp?tagver=" + wtl_TagVer + "&si=" + wtl_TagID + "&offset=" + wtl_Offset + "&fw=" + wtl_FWD;
	A( "server", typeof(SERVER)== "string" ? SERVER : "");
	A( "order", typeof(ORDER)== "string" ? ORDER : "");
	A( "Group", typeof(CONTENTGROUP)== "string" ? CONTENTGROUP : "");
	A( "invoice", typeof(INVOICE)== "string" ? INVOICE : "");
	A( "cartview", typeof(CARTVIEW)== "string" ? CARTVIEW : "");
	A( "cartadd", typeof(CARTADD)== "string" ? CARTADD : "");
	A( "cartremove", typeof(CARTREMOVE)== "string" ? CARTREMOVE : "");
	A( "checkout", typeof(CHECKOUT)== "string" ? CHECKOUT : "");
	A( "cartbuy", typeof(CARTBUY)== "string" ? CARTBUY : "");
	A( "adcampaign", typeof(ADCAMPAIGN)== "string" ? ADCAMPAIGN : "");
	A( "tz", t.getTimezoneOffset());
	A( "ch", t.getHours());
	A( "cl", D8(t));
	A( "ti", wtl_Title);
	A( "url", wtl_URL);
	A( "rf", window.document.referrer);
	A( "js", "Yes");
	A( "ul", navigator.appName=="Netscape" ? navigator.language : navigator.userLanguage);
	if(typeof(screen)=="object")
	{
	A( "sr", screen.width+"x"+screen.height);
	A( "cd", screen.colorDepth);
	A( "jo", navigator.javaEnabled() ? "Yes" : "No");
	}

	if( W.length>2048 && navigator.userAgent.indexOf('MSIE')>=0)
		W= W.substring( 0, 2043)+"&tu=1";

	wtl_createImage(W);

}

