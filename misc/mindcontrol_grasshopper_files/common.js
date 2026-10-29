<!--
 
	function nameIt() {
    	window.name = 'nytimesmain';
	    if ((navigator.appName == "Microsoft Internet Explorer") && (document.all.globalsearchform)){
			document.all.globalsearchform.style.visibility = "visible";
        }
    }
     
	function pop_me_up(pURL,features){ 
		new_window = window.open(pURL, "popup_window", features);
		new_window.focus();
	}

	function pop_me_up2(pURL,name,features){
		new_window = window.open(pURL,name,features);
		new_window.focus();
	}

	function changeImage(image_name,image_src) {
   		document.images[image_name].src = image_src;
	}

	function goTourl(https://bucket.worldofbits.brown.edu/misc/mindcontrol_grasshopper_files/obj){
		var f = (obj.section) ? obj : obj.form;
		var selected = f.section.selectedIndex;
		var URL = f.section.options[selected].value;
		if (URL != "") document.location = URL;
		return false;
	}

	function goToURL2(sel){
	// This version only works for onChange events from select objects
	// but the select object can have any name, unlike goToURL() which requires 
	// the select object to be named "section"
	
		var selected = sel.selectedIndex;
		var url = sel.options[selected].value;
		if (url != "") document.location = url;
		return false;
	}

	if (window.self != window.top) { 
		top.location.replace(window.location.pathname); 
	}
	//begin functions for Travel flash slideshows
	function writeFlashSlideShow(xmlFile){
		var swfFile = "/slideshow/swf/slideshow.swf?XMLfile=/slideshow/xml/travel/" + xmlFile;
		
		var HTMLstr = "";
		HTMLstr += "<object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" codebase=\"http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0\" width=\"390\" height=\"300\" id=\"slideshow\" align=\"middle\">";
		HTMLstr += "<param name=\"allowScriptAccess\" value=\"sameDomain\" />";
		HTMLstr += "<param name=\"movie\" value=\"" + swfFile + "\" />";
		HTMLstr += "<param name=\"quality\" value=\"high\" />";
		HTMLstr += "<embed src=\"" + swfFile + "\" quality=\"high\" width=\"390\" height=\"300\" name=\"slideshow\" align=\"middle\" allowScriptAccess=\"sameDomain\" type=\"application/x-shockwave-flash\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" />";
		HTMLstr += "</object>";
		return HTMLstr;
	}
	
	function showFirstSlide(imgName, photoCredit, photoCaption){
		var HTMLstr = "";
		HTMLstr += "<!-- begin photo -->";
		HTMLstr += "<img src=\"http://graphics.nytimes.com/images/section/travel/slideshow/" + imgName + "\" width=\"390\" height=\"200\" alt=\"photo\" border=\"0\">";
		HTMLstr += "<!-- end photo -->";
		HTMLstr += "<div align=\"right\" class=\"photocredit\">" + photoCredit + "</div>";
		HTMLstr += "<div class=\"photocaption\">" + photoCaption + "</div>";
		return HTMLstr;
	}
	//end functions for Travel flash slideshows
	
	//begin functions for Global flash slideshows
	function writeEmbeddedFlashSlideShow(xmlFile){
		var swfFile = "/slideshow/swf/slideshow.swf?XMLfile=/slideshow/xml/" + xmlFile;
		
		var HTMLstr = "";
		HTMLstr += "<object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" codebase=\"http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0\" width=\"390\" height=\"300\" id=\"slideshow\" align=\"middle\">";
		HTMLstr += "<param name=\"allowScriptAccess\" value=\"sameDomain\" />";
		HTMLstr += "<param name=\"movie\" value=\"" + swfFile + "\" />";
		HTMLstr += "<param name=\"quality\" value=\"high\" />";
		HTMLstr += "<embed src=\"" + swfFile + "\" quality=\"high\" width=\"390\" height=\"300\" name=\"slideshow\" align=\"middle\" allowScriptAccess=\"sameDomain\" type=\"application/x-shockwave-flash\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" />";
		HTMLstr += "</object>";
		return HTMLstr;
	}
	
	function showFirstEmbeddedSlide(imgName, photoCredit, photoCaption){
		var HTMLstr = "";
		HTMLstr += "<!-- begin photo -->";
		HTMLstr += "<img src=\"" + imgName + "\" width=\"390\" height=\"200\" alt=\"photo\" border=\"0\">";
		HTMLstr += "<!-- end photo -->";
		HTMLstr += "<div align=\"right\" class=\"photocredit\">" + photoCredit + "</div>";
		HTMLstr += "<div class=\"photocaption\">" + photoCaption + "</div>";
		return HTMLstr;
	}
	//end functions for Global flash slideshows
	
	
	function preloadNavImages(imageNames, imagePath){
		var loadedImages = new Array();
		if (document.images) {
			for (var i=0; i < imageNames.length; i++){
				loadedImages[i] = new Image();
				loadedImages[i].src = imagePath + "nav_" + imageNames[i] + "_off.gif";
			}
		}
	
	}
	
	function readCookie(value){
		var allCookieVals = document.cookie.split(";");
		for (var i=0; i < allCookieVals.length; i++){ //loop through all cookies
			if (allCookieVals[i].indexOf(value) != -1) { //find target cookie
				var cookieVal = allCookieVals[i].split("="); //split name/value pair
				return cookieVal[1]; //return target cookie value
			}
		}
	}
	
//-->
