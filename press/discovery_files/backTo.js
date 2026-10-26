/* REFERALS [ show link back to ] */

/* : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : set variables
- use:
	var theDomain > /common/js/oasConfigMJX.js called @ top of page - [ http://alias.discovery.com ]
	var theLocalPath > /common/js/oasConfigMJX.js called @ top of page - [ /root/dir/dir/page.html ]
	var theLocalSearch > /common/js/oasConfigMJX.js called @ top of page - [ ?name=value&name=value.... ]
	
	var trunkatedReferal > /common/js/msn,tophat,pre.js called @ top of page - [ www.domain.com ]
	var netURLString > /utilities/js/forums.NET.js called @ top of page - [ http://alias.discovery.com ]
	var netAbbr > /utilities/js/forums.NET.js called @ top of page - [ dsc ]
*/
var networkAlias = new Array(["animal","apl","n=200"],["dsc","dsc","n=400"],["health","dhc","n=300"],["tlc","tlc","n=500"],["travel","trv","n=600"],["home","hom","n=UNKNOWN"],["science","sci","n=UNKNOWN"],["times","dtc","n=UNKNOWN"],["wings","wng","n=UNKNOWN"],["kids","kid","n=UNKNOWN"],["fittv","fit","n=UNKNOWN"],["dhd","dhd","n=UNKNOWN"],["enespanol","esp","n=UNKNOWN"],["www","www","n=100"],["highspeed","high","n=UNKNOWN"]);
var myDiscoAlias = new Array(["my.animal","apl"],["my.health","dhc"],["my.tlc","tlc"],["my.travel","trv"],["my.home","hom"],["my.science","sci"],["my.times","dtc"],["my.wings","wng"],["my.fittv","fit"],["my.discovery","dsc"],["my.dsc","dsc"]);
var targetPosition = "default";
var localPage = 0;

var theReferal = (escape(document.referrer) + "").toLowerCase();
if (theReferal.indexOf("http%3a//") == 0) { var trunkatedReferal = theReferal.slice(9); }
else { var trunkatedReferal = theReferal; }


/* : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : functions [ test ]
- read:
	the domain for test :: [ (!= -1) is (true) ]
*/
/* msn */
if (theDomain.indexOf(".msn.com") != -1) { targetPosition = "msn"; }

/* infopop */
if (theDomain.indexOf(".infopop.net") != -1) { targetPosition = "infopop"; }

/* cheetahmail */
if (theDomain.indexOf(".cheetahmail.com") != -1) { targetPosition = "cheetahmail"; }
for (cb = 0; cb < networkAlias.length; cb++) {
	if (theLocalSearch.indexOf(networkAlias[cb][2]) != -1) { break; }
}

/* d.com domain [ my ] */
if (theDomain.indexOf("my") != -1) {
	targetPosition = "mydiscovery";
	for (ma = 0; ma < myDiscoAlias.length; ma++) {
		if (theDomain.indexOf(myDiscoAlias[ma][0]) != -1) { break; }
	}
} else {
	for (ma = 0; ma < networkAlias.length; ma++) {
		if (theDomain.indexOf(networkAlias[ma][0]) != -1) { break; }
	}
}

/* d.com domain [ poll ] */
if (theDomain.indexOf("poll.discovery.com") != -1) { targetPosition = "polls"; }
for (po = 0; po < networkAlias.length; po++) {
	if (theLocalSearch.indexOf(networkAlias[po][1]) != -1) { break; }
}

/* d.com domain [ search ] */
if (theDomain.indexOf("search.discovery.com") != -1) { targetPosition = "search"; }
for (sa = 0; sa < networkAlias.length; sa++) {
	if (theLocalSearch.indexOf(networkAlias[sa][0]) != -1) { break; }
}

/* apl specific [  Pets911  ] */
if (theDomain.indexOf("pets911.com") != -1) { targetPosition = "thirdParty"; localPage = 0; }

/* trv specific [ away, oanda, wow, onetravel ] */
if (theDomain.indexOf("adventure.discovery.com") != -1) { targetPosition = "thirdParty"; localPage = 4; }
if (theDomain.indexOf("oanda.com") != -1) { targetPosition = "thirdParty"; localPage = 4; }
if (theDomain.indexOf("whatsontheplanet.com") != -1) { targetPosition = "thirdParty"; localPage = 4; }
if (theDomain.indexOf("onetravel.com") != -1) { targetPosition = "thirdParty"; localPage = 4; }
if (theDomain.indexOf("seeamerica.org") != -1) { targetPosition = "thirdParty"; localPage = 4; }
if (theDomain.indexOf("igougo.com") != -1) { targetPosition = "thirdParty"; localPage = 4; }

/* dhc specific [ nbc, centerwatch, foodfit, healthgrade, in2nutrition, nexcura, queendom ] */
if (theDomain.indexOf("bodychallenge.discovery.com") != -1) { targetPosition = "thirdParty"; localPage = 2; }
if (theDomain.indexOf("centerwatch.com") != -1) { targetPosition = "thirdParty"; localPage = 2; }
if (theDomain.indexOf("foodfit.com") != -1) { targetPosition = "thirdParty"; localPage = 2; }
if (theDomain.indexOf("happyneuron.com") != -1) { targetPosition = "thirdParty"; localPage = 2; }
if (theDomain.indexOf("healthgrades.com") != -1) { targetPosition = "thirdParty"; localPage = 2; }
if (theDomain.indexOf("in2nutrition.com") != -1) { targetPosition = "thirdParty"; localPage = 2; }
if (theDomain.indexOf("nexcura.com") != -1) { targetPosition = "thirdParty"; localPage = 2; }
if (theDomain.indexOf("queendom.com") != -1) { targetPosition = "thirdParty"; localPage = 2; }

/* hd specific [ kaleidoscope ] */
if (theDomain.indexOf("gethdtheater.cablesource.net") != -1) { targetPosition = "thirdParty"; localPage = 11; }


/* : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : functions [ case ]
- output: document.write(<a ...><img ... /></a>);
*/
function dcomDocWrite (btPosition, track, local) {
	if (track && !local) { document.write("<a onclick=\"trackLink('" + networkAlias[btPosition][1] + ",tophat/dcomhome_button');\" href=\"http://www.discovery.com\" target=\"_top\"><img src=\"http://" + networkAlias[btPosition][0] + ".discovery.com/common/sgallery/" + networkAlias[btPosition][1] + "/tophat810/dcomoff.gif\" width=\"165\" height=\"20\" border=\"0\" alt=\"discovery.com home\" /></a>"); }
	else if (track && local) { document.write("<a onclick=\"trackLink('" + networkAlias[btPosition][1] + ",tophat/dcomhome_button');\" href=\"http://www.discovery.com\" target=\"_top\"><img src=\"/common/sgallery/" + networkAlias[btPosition][1] + "/tophat810/dcomoff.gif\" width=\"165\" height=\"20\" border=\"0\" alt=\"discovery.com home\" /></a>"); }
	else { document.write("<a href=\"http://www.discovery.com\" target=\"_top\"><img src=\"http://" + networkAlias[btPosition][0] + ".discovery.com/common/sgallery/" + networkAlias[btPosition][1] + "/tophat810/dcomoff.gif\" width=\"165\" height=\"20\" border=\"0\" alt=\"discovery.com home\" /></a>"); }
}

switch (targetPosition) {
	case "msn" :
		document.write("<div style=\"font: bold 8px Verdana; margin-left: 8px;\"><a href=\"http://" + trunkatedReferal + "\" target=\"_top\" style=\"color: #000000;\" >&laquo; BACK TO MSN</a></div>");
		break;
	
	case "infopop" :
		document.write("<a onclick=\"trackLink('" + netAbbr + ",tophat/dcomhome_button');\" href=\"http://www.discovery.com\" target=\"_top\"><img src=\"" + netURLString + "/common/sgallery/" + netAbbr + "/tophat810/dcomoff.gif\" width=\"165\" height=\"20\" border=\"0\" alt=\"discovery.com home\" /></a>");
		break;
	
	case "search" : dcomDocWrite(sa, true, false); break;
	case "cheetahmail" : dcomDocWrite(cb, true, false); break;
	case "polls" : dcomDocWrite(po, true, false); break;	
	case "thirdParty" : dcomDocWrite(localPage, false, false); break;
	
	default :  dcomDocWrite(ma, true, true); break;
}


/* END REFERALS */
