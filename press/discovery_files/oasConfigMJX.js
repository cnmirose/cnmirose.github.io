/* OAS MJX [ configuration ] */

/* : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : set variables
- get domain info + create a base url [ hostname = "alias.domain.com" ]
- [note]: currently base is centralized in [ads.discovery.com] rather then w/in a specific network
*/
var baseOAS = "http://ads.discovery.com/RealMedia/ads/";
var theDomain = window.location.hostname.toLowerCase();
var theDomainAlias = theDomain.split(".");
if (theDomain.indexOf("stage") != -1) { var stageFlag = "yes"; }
if (theDomain.indexOf("media") != -1) { var mediaFlag = "yes"; }


/* : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : set variables
- set array(s) + get url string(s) [ pathname = "/root/dir/..." ] [ search = "?name=value&..." ]
- array definitions [ "alias.domain.com" , "network abbreviation" , "cheetahmail name/value pair in url string" ]
*/
var theOASDomains = new Array(	["animal.discovery.com","APL","n=200",""],
								["dsc.discovery.com","DSC","n=400",""],
								["health.discovery.com","DHC","n=300",""],
								["tlc.discovery.com","TLC","n=500",""],
								["travel.discovery.com","TRV","n=600",""],
								["home.discovery.com","HNL","n=UNKNOWN",""],
								["science.discovery.com","SCI","n=UNKNOWN",""],
								["times.discovery.com","DTC","n=UNKNOWN",""],
								["wings.discovery.com","WNG","n=UNKNOWN",""],
								["kids.discovery.com","KID","n=UNKNOWN",""],
								["fittv.discovery.com","FIT","n=UNKNOWN",""],
								["dhd.discovery.com","DHD","n=UNKNOWN","gethdtheater"],
								["www.discovery.com","WWW","n=100",""]	);
var theLocalPath = window.location.pathname;
var theLocalSearch = window.location.search;


/* : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : set variables
- create a random number
*/
var aNumber = new String(Math.random());
var theOASNumber = aNumber.substring(2, 11);


/* : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : tests [ if ]
- set switch case default and run tests for other case(s)
*/
/* default */
var targetOASDomain = "default";

/* 3rd party */
var thirdPartyDomains = new Array(	["default","0"],
									["search","0"],
									["infopop","0"],
									["pets911","0"],
									["happyneuron","2"],
									["queendom","2"],
									["in2nutrition","2"],
									["centerwatch","2"],
									["healthgrades","2"],
									["foodfit","2"],
									["nexcura","2"],
									["seeamerica","4"],
									["onetravel","4"],
									["igougo","4"],
									["whatsontheplanet","4"],
									["adventure","4"],
									["nearlife","9"],
									["cheetahmail","MULTINET"],
									["cablesource","MULTINET"]	);
for (r = 0; r < thirdPartyDomains.length; r++) {
	if (theDomain.indexOf(thirdPartyDomains[r][0]) != -1) { targetOASDomain = thirdPartyDomains[r][0]; break; } else { targetOASDomain = thirdPartyDomains[0][0]; }
}

/* search : look @ name/value pairs for network specific information */
if (theLocalSearch != "") {
	for (w = 0; w < theOASDomains.length; w++) {
		if ((theLocalSearch.indexOf(theOASDomains[w][0]) != -1) || (theLocalSearch.indexOf(theOASDomains[w][1]) != -1)) { var theOASPos = w; break; } else { var theOASPos = 12; }
	}
}

/* infopop : pull ( var netURLString = "http://alias.discovery.com"; ) > /utilities/js/forums.net.js */
if (targetOASDomain == "infopop") { var infoDomain = netURLString.slice(7); }

/* national body challenge */
if (theDomainAlias[0] == "bodychallenge") { var targetOASDomain = "in2nutrition"; }

/* polls : pull ( var pollAdBase = opener.location.hostname + pathname; ) > in results window */
if (theDomainAlias[0] == "poll") { var targetOASDomain = "polls"; }

/* d.com homepage */
if ((theLocalPath.length < 2) && (theDomain.indexOf("discovery.com") != -1)) { targetOASDomain = "homepage"; }

/* d.com sweepstakes */
if ( theLocalPath.indexOf("sweepstakes") != -1 ) { targetOASDomain = "sweeps"; }


/* : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : functions [ case ]
- use case, set above, to establish a path for OAS
*/
switch (targetOASDomain) {
	case "homepage" :
		if (stageFlag == "yes") { var pathForOAS = theDomainAlias[0] + "." + theDomainAlias[2] + "." + theDomainAlias[3] + "/index.html"; }
		else { var pathForOAS = theDomain + "/index.html"; }
		break;
	case "sweeps" : var pathForOAS = theDomain + theLocalPath + "index.html"; break;
	
	case "infopop" : var pathForOAS = infoDomain + "/conversations/conversations.html"; break;
	case "search" : var pathForOAS = theOASDomains[theOASPos][0] + "/search/search.html"; break;
	case "polls" :
		for (po = 0; po < theOASDomains.length; po++) { if (theLocalSearch.indexOf(theOASDomains[po][1].toLowerCase()) != -1) { break; } }
		var pathForOAS = theOASDomains[po][0] + "/polls/polls.html";
		break;
	case "cablesource" :
		for (cs = 0; cs < theOASDomains.length; cs++) { if (theDomainAlias[0] == theOASDomains[cs][3]) { break; } }
		var pathForOAS = theOASDomains[cs][0] + "/utilities/getchannel/getchannel.html";
		break;
	case "cheetahmail" :
		for (ca = 0; ca < theOASDomains.length; ca++) { if (theLocalSearch.indexOf(theOASDomains[ca][2]) != -1) { break; } }
		var pathForOAS = theOASDomains[ca][0] + "/newsletter/index.html";
		break;
	
	case "pets911" : var pathForOAS = theOASDomains[2][0] + "/index.html"; break;
	case "queendom" : var pathForOAS = theOASDomains[2][0] + "/tools/assessments/queendom.html"; break;
	case "happyneuron" : var pathForOAS = theOASDomains[2][0] + "/jump/happyneuron/happyneuron.html"; break;
	case "centerwatch" : var pathForOAS = theOASDomains[2][0] + "/jump/centerwatch/centerwatch.html"; break;
	case "healthgrades" : var pathForOAS = theOASDomains[2][0] + "/jump/healthgrades/healthgrades.html"; break;
	case "foodfit" : var pathForOAS = theOASDomains[2][0] + "/jump/foodfit/foodfit.html"; break;
	case "in2nutrition" : var pathForOAS = theOASDomains[2][0] + "/convergence/bodychallenge/bodychallenge.html"; break;
	case "nexcura" : var pathForOAS = theOASDomains[2][0] + "/jump/nexcura/nexcura.html"; break;
	
	case "seeamerica" : var pathForOAS = theOASDomains[4][0] + "/convergence/majesticamerica/majesticamerica.html "; break;
	case "onetravel" : 
		var oneTRVMods = new Array(["module=Eair","flights"],["module=Ecar","cars"],["module=Ehotel","hotels"],["rare=1","cruises"],["Module=WWW","specials"],["UNDEFINDED","default"]);
		for (oa = 0; oa < oneTRVMods.length; oa++) { if (theLocalSearch.indexOf(oneTRVMods[oa][0]) != -1) { break; } }
		if (oneTRVMods[oa][0] != "default") { var pathForOAS = theOASDomains[4][0] + "/ecomm/onetravel/" + oneTRVMods[oa][1] + ".html"; }
		else { var pathForOAS = theOASDomains[4][0] + "/ecomm/onetravel/onetravel.html"; }
		break;
	case "whatsontheplanet" : var pathForOAS = theOASDomains[4][0] + "/guides/wow/wow.html"; break;
	case "adventure" : var pathForOAS = theOASDomains[4][0] + "/ecomm/away/away.html"; break;
	
	case "nearlife" : var pathForOAS = theOASDomains[9][0] + "/games/nearlife/nearlife.html"; break;

	default : 
		if (mediaFlag == "yes") { var pathForOAS = theDomainAlias[1] + "." + theDomainAlias[2] + "." + theDomainAlias[3] + theLocalPath; }
		else if (stageFlag == "yes") { var pathForOAS = theDomainAlias[0] + "." + theDomainAlias[2] + "." + theDomainAlias[3] + theLocalPath; }
		else { var pathForOAS = theDomain + theLocalPath; }
		break;
}

/* END OAS */
