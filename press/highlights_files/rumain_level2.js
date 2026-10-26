// JavaScript Document
// begin browser detect *************** DO NOT DELETE *****************
isMac = (navigator.appVersion.indexOf("Mac")!=-1) ? true : false;
IEmac = ((document.all)&&(isMac)) ? true : false;
IE4 = ((document.all)&&(navigator.appVersion.indexOf("MSIE 4.")!=-1)) ? true : false;
IE5 = ((document.all)&&(navigator.appVersion.indexOf("MSIE 5.")!=-1)) ? true : false;
IE6 = ((document.all)&&(navigator.appVersion.indexOf("MSIE 6.")!=-1)) ? true : false;
//NS6 = (!document.layers) && (navigator.userAgent.indexOf('Netscape')!=-1)?true:false;

//puts all versions of IE into one variable for easier coding
IE4plus = IE4 || IE5 || IE6;

//If the browser is Internet Explore on the PC (not Mac in code) then use the IE_css stylesheet,
//for ALL other browser/platform combinations use the default stylesheet
if(IE4plus && !IEmac) 
document.write('<link rel="stylesheet" href="../css/rumain-IE.css" type="text/css">'); 
else document.write('<link rel="stylesheet" href="../css/rumain.css" type="text/css">');


// end browser detect *************** DO NOT DELETE *****************

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

var timer
	function CloseMenus(){
		if(document.getElementById)
		{
			document.getElementById("Camden").style.visibility="hidden"
			document.getElementById("Newark").style.visibility="hidden"
			document.getElementById("NBP").style.visibility="hidden"

		}

		else if (document.all)
		{
		
			document.all.Camden.style.visibility="hidden"
			document.all.Newark.style.visibility="hidden"
			document.all.NBP.style.visibility="hidden"


		}

		else
		{
	
			document.Camden.visibility="hide"
			document.Newark.visibility="hide"
			document.NBP.visibility="hide"

		}


	}
	function StartTimer(){
		timer=setTimeout("CloseMenus()",1000)



	}
	function MaintainMenu(){
		clearTimeout(timer)
		timer=setTimeout("CloseMenus()",1000)
		

	}

	function OpenMenu(which){
		clearTimeout(timer)
		CloseMenus()
		if(document.all)
		{
			thisMenu=eval("document.all."+which+".style")
			thisMenu.visibility="visible"
			
		}
		else if(document.getElementById)
		{
			document.getElementById(which).style.visibility="visible"
			
		}
		else
		{
			thisMenu=eval("document."+which)
			thisMenu.visibility="show"
			
		}


	}






