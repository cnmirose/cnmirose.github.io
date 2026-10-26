/* CLICK THROUGH JS */

/* ------------------------------------------------------------------------ execute [ when loading ] */
// [ /common/js/getparam.js ] & [ /common/js/linktracker.js ] must loaded before this file get executed
var throughParam = getParam("through");
var clickThroughFrom = new Array(["dcom","root"],["networkHome","home"],["campaign","ad"],["MSNVideoSite","video"],["YahooPlatinum","video"]);
var clickType = "default";
var splitType = "|";


/* ------------------------------------------------------------------------ functions [ if ] */
// only do this if there is a name/value pair of [ throught=value|value ]
/*
	first	-	[ __url__.html?through=value ] < split the value
				value may contain either a pipe "|" or bang "!"
	second	-	get directory structure and split it
	third	-	test to see user came from a source, listed in the array
	finally	-	send trackLink(); the proper tracking value
*/
if (throughParam) {
	for (tp = 0; tp < throughParam.length; tp++) { if (throughParam.indexOf("!") != -1) { splitType = "!"; break; } }
	var splitParam = throughParam.split(splitType);	
	
	var directoryStructurePath = window.location.pathname;
	var splitPath = directoryStructurePath.split("/");

	for (ctf = 0; ctf < clickThroughFrom.length; ctf++) {
		if (splitParam[0].indexOf(clickThroughFrom[ctf][0]) != -1) { clickType = clickThroughFrom[ctf][1]; break; }
	}
	
	switch (clickType) {
		case "root" :
			var passValue = "clickthrough" + "/dcom";
			for (sp = 0; sp < splitParam.length; sp++) { passValue += "/" + splitParam[sp]; }
			trackLink(passValue);
			break;
		
		case "home" :
			var passValue = "clickthrough" + "/networkHome";
			for (sp = 0; sp < splitParam.length; sp++) { passValue += "/" + splitParam[sp]; }
			trackLink(passValue);
			break;
		
		case "video" :
			var passValue = "clickthrough" + "/video";
			for (sp = 0; sp < splitParam.length; sp++) { passValue += "/" + splitParam[sp]; }
			trackLink(passValue);
			break;
		
		case "ad" :
			var passValue = "clickthrough" + "/adCampaign";
			for (sp = 1; sp < splitParam.length; sp++) { passValue += "/" + splitParam[sp]; }
			trackLink(passValue);
			break;
		
		default : 
			var passValue = "clickthrough" + "/" + splitPath[2] + "/" + splitParam[0] + "/" + splitParam[1];
			trackLink(passValue);
			break;
	}
}

/* END CLICK THROUGH JS */
