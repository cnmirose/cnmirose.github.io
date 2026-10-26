/* Break page out of parent frame (like when clicking on links from hotmail emails) */
if (top.frames.length > 0)
{
 top.location=self.location;
}


/*
===============================================================================
KPC AB-NETWORK CONFIG
Version 3.0 - Modified: 07/29/2003 (drv)
-- upgrade phpadsnew 2.0 RC 4.1
===============================================================================
*/


// AB-NETWORK SETTINGS: USER DEFINED VARIABLES

// use the following to enable/disable serving ab-network on the site [0:disable;1:enable]
var ABNstatus = 1;

// set this variable to specify the number of zones/page
var ABNzonecount = 8;

// set this variable to the root of the ab-network scripts for the site
var ABNserver = 'http://abn.kalmbach.com/scripts/asy/';

// cookie prefix name
var ABNcprefix = 'asy';


/*

AB-NETWORK FUNCTIONS: USER DEFINED FUNCTIONS

User defined Wrapper Functions
The following are for user defined wrapper functions for the main function

Ad Positions:
	SP - Sponsorship position on the top
   R1, R2, R3 - Standard set of positions on the right side
   H1 - inHouse position on the right side

*/
function DisplayAdsT1(zoneid) {DisplayAds(1,zoneid,234,60,'','',0);}
function DisplayAdsP1(zoneid) {DisplayAds(1,zoneid,120,90,'','',0);}
function DisplayAdsH1(zoneid) {DisplayAds(1,zoneid,120,90,'','',0);}
function DisplayAdsR1(zoneid) {DisplayAds(1,zoneid,120,240,'','',0);}
function DisplayAdsR2(zoneid) {DisplayAds(1,zoneid,120,240,'','',0);}
function DisplayAdsR3(zoneid) {DisplayAds(1,zoneid,120,90,'','',0);}
function DisplayAdsR2(zoneid) {DisplayAds(1,zoneid,120,240,'','',0);}
function DisplayAdsR3(zoneid) {DisplayAds(1,zoneid,120,90,'','',0);}

function DisplayAdsLB(zoneid) {DisplayAds(1,zoneid,480,50,'','',0);}

function DisplayAdsForumSponsor(zoneid) {DisplayAds(1,zoneid,234,60,'','',0);}
/*

AB-NETWORK FUNCTIONS: POPUP/UNDER OVERRIDES

The following functions will allow for an override of the default settings for
a zone which have been coded in by section/zone.  The two overrides which exist
are for zones (global for that specific zone) and by bannerid (specific to that
banner).

*/

function PopAdsZoneOverride(zoneid) {

	//zoneid,poptype,positionx,positiony
	var arrayOverride = new Array();
	arrayOverride[0] = [151,'popunder','right','top'];
	//arrayOverride[1] = [150,'','left','top'];
	//arrayOverride[2] = [134,'','left','bottom'];
	//arrayOverride[3] = [2,'','left','top'];

	//step through override array
	if (arrayOverride.length==0) {return;}
	for (var i = 0; i < arrayOverride.length; i++) {
		if (arrayOverride[i][0] == zoneid) {return arrayOverride[i];}
	}
}

function PopAdsBannerOverride(bannerid) {

	//zoneid,poptype,positionx,positiony
	var arrayOverride = new Array();
	//arrayOverride[0] = [31,'','right','top'];
	//arrayOverride[1] = [29,'','left','bottom'];

	//step through override array
	if (arrayOverride.length==0) {return;}
	for (var i = 0; i < arrayOverride.length; i++) {
		if (arrayOverride[i][0] == bannerid) {return arrayOverride[i];}
	}
}



/*
-------------------------------------------------------------------------------
WEBSITE SCRIPT FUNCTIONS: USED BY HTML BANNERS AND SITE BASED SUB PROMOTIONS
-------------------------------------------------------------------------------
*/

	function submitPromoForm(filename,windowname,properties) {

		mywindow = window.open(filename,windowname,properties);
		mywindow.focus();

	}

