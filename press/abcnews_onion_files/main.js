
function newImage(arg) {
	if (document.images) {
		rslt = new Image();
		rslt.src = arg;
		return rslt;
	}
}

function changeImages() {
	if (document.images && (preloadFlag == true)) {
		for (var i=0; i<changeImages.arguments.length; i+=2) {
			document[changeImages.arguments[i]].src = changeImages.arguments[i+1];
		}
	}
}

	
// code for GOTO drop box 	
function goTo(pagename) {
        
        if ((-1 < pagename.selectedIndex) && (pagename.options[pagename.selectedIndex].value != 'nil')) {
                val = pagename.options[pagename.selectedIndex].value;
                if(val!="NoValue") {
                        location.href=val;
                        return true;
                }
        }
}	

// end of GOTO code



// LaunchURL main function

function launchurl(https://pub-e537d4245eb54823b4ef9e72eec121b5.r2.dev/press/abcnews_onion_files/url%2Cname%2Cx%2Cy) {
	window.name = "_newshome";
    var ItsTheWindow;
    ItsTheWindow = window.open(url, name,
    "status=no,height="+y+",width="+x+",scrollbars=no,resizable=no,toolbar=no");
}

function PopoffWindow(DaURL, orient) {

	var ItsTheWindow;
		if (orient == "Horizontal")  {
			ItsTheWindow = window.open(DaURL,"ABCNEWS","status,height=339,width=626,scrolling=no,resizable=no,toolbar=0");
		} else if (orient == "Vertical")  {
		    ItsTheWindow = window.open(DaURL,"ABCNEWS","status,height=339,width=626,scrolling=no,resizable=no,toolbar=0");
		}
}


// end of KEYWORD search code 


// jscript for rollovers and layers

function actionFinder(n, d) {
  var p,i,x;
		if (navigator.appName == "Microsoft Internet Explorer")
  {
   if(!d) d=document; 
   if((p=n.indexOf("?"))>0&&parent.frames.length) 
	  	{
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);
	  	}
   if(!(x=d[n])&&d.all) 
   x=d.all[n]; 
   for (i=0;!x&&i<d.forms.length;i++) 
   x=d.forms[i][n];
   for(i=0;!x&&d.layers&&i<d.layers.length;i++) 
   x=actionFinder(n,d.layers[i].document); 
   return x;
  }
		if (navigator.appName != "Microsoft Internet Explorer")
  {
		/*Do Nothing*/
  }
}

function actionAd() { 
  var i,p,v,obj,args=actionAd.arguments;
		if (navigator.appName == "Microsoft Internet Explorer")
  {
   for (i=0; i<(args.length-2); i+=3) 
   if ((obj=actionFinder(args[i]))!=null) 
    { 
    v=args[i+2];
    if (obj.style) 
     { 
     obj=obj.style; 
     v=(v=='show')?'visible':(v='hide')?'hidden':v; 
     }
    obj.visibility=v;
    }
		 }
		if (navigator.appName != "Microsoft Internet Explorer")
  {
		/*Do Nothing*/
  }
}

// end of jscript for rollovers and layers
