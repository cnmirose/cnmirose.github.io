secondsBeforeBannerFlip = 30; // How many seconds should we wait before flipping the ads?
var mspause = 1000 * secondsBeforeBannerFlip; // This converts the seconds to milliseconds.
var ads = new Array(); //  // Build up the arrays that contain the rotating ad information.
var aAdLinkLocations; // This will keep track of where our links are on the page that we want to manipulate.
// This will scan though the ad positions that are registered to rotate ads and call the rotation 
// function for each of them.
function flipAds() {
	// At this point, we know that "ads" is a variable which contains an entry
	// for each of the banner positions that have rotating ads.
	for (position in ads) {
		attamptFlip(position);
	}
	timerID = setTimeout("flipAds()", mspause);
}
// Pass in a number and this will return a random number between 0 and the whole integer you pass.
// This is useful for picking a random entry on an array.
function randomIndex(topRange) {
	return Math.round(Math.random()*topRange);
}

// This will instruct all compatible banner positions on the page to show
// the next banner in the rotation without refreshing the page.
function attamptFlip(position) {
	
	// Reset this variable just in case something else changed this variable.
	var aAdLinkLocations = lookUpAdLinks();
	
	// What ad is currently displayed in this position's inventory?
	currentlyDisplayedAdIndex = ads[position][1];
	
	// If there are at least 2 ads to rotate through (AND the ad tag is on the page), we'll try to flip them here...
	// Also, only flit if we have not done the entire set 3 times yet.
	
	if (ads[position][2] < 3 && ads[position][0].length > 1 && eval("typeof document.cpstillad" + position + " != 'undefined'")) {
		
		if (currentlyDisplayedAdIndex < ads[position][0].length-1) {
			ads[position][1]++;
		} else {
			ads[position][1] = 0;
			ads[position][2]++;// Remember the fact we have iterated through this set another time.
		}
		// The next 2 lines will call back to the banner ad server and cache bust and allow you to count this view.
		tmpImg = new Image();
		
		tmpImg.src = ads[position][0][ads[position][1]][2] + cacheBust();
		eval("document.cpstillad" + position + ".src = ads[position][0][ads[position][1]][0];");
		
		document.links[aAdLinkLocations[position]].href = ads[position][0][ads[position][1]][1];
	}
}
// This function will return a new number every time you call it. Good for cache busting.
function cacheBust() {
	x = new Date();
	return x.getTime() + '' + randomIndex(1000);
}
// This will start the image flipping process.
function Start() {
	Reset();
	aAdLinkLocations = lookUpAdLinks(); // This defines the ads.
	tStart   = new Date();
	timerID  = setTimeout("flipAds()", mspause);
}
// The page first needs to build before we can analyize the links so we'll start this after a few 
// seconds.
function DelayedStart() {
	Reset();// Initialize the timer.
	tStart   = new Date();
	timerID  = setTimeout("Start()", 2000);
}
function Reset() {
	// This kills the timer object.
	var timerID = 0;
	var tStart = null;
}
// In order to be able to change the click through URL's, we'll need to find the link
// index of each of the ads. This function will build an associative array of the ad link
// locations. The key is the banner position and the value is the link index on the page.
function lookUpAdLinks() {
	aLinkLocationsX = new Array();
	// Loop over each of the links on this page 
	// searching for the rotating ad positions.
	for (i=1;i<=document.links.length;i++) {
		// If this image object appears to be one of the banner positions, try to figure out which it is.
		if (typeof(document.links[i-1].name) != 'undefined' && document.links[i-1].name.indexOf('cpstilladclick') > -1) {
			aLinkLocationsX['' + document.links[i-1].name.substring(14,document.links[i-1].name.length+1)] = i-1;
		}
	}
	return aLinkLocationsX;
}
// This stops the banner rotations.
function Stop() {
   if (typeof timerID != 'undefined' && timerID) {
      clearTimeout(timerID);
      timerID  = 0;
   }
   tStart = null;
}
// Pass an array of ads to this function and the SRC of the ad currently running. This function
// will find the index of the current ad..
function findRotationIndex(aAds, position) {
	if (aAds.length == 0 || aAds.length == 1 || eval("typeof document.cpstillad" + position + " == 'undefined'")) {
		return 0;
	} else {
		chosenIndex = null;
		// Find the index of the currently displayed ad.
		for (i=0;i<aAds.length;i++) {
			if (aAds[i][0] == eval("document.cpstillad" + position + ".src")) {
				chosenIndex = i;
				break;
			}
		}
		return chosenIndex;
	}
}
// This will start the rotations after a small amount of time passes.
DelayedStart();

function showNetworkBanner (iposition) {
	switch (iposition) {
		case 2:
			document.write('<img src="http://media.collegepublisher.com/media/images/blank.gif" border="0" height="2"><br>');
			document.write('<a href="http://admanager2.broadbandpublisher.com/networkBannerServerClickThrough.adp?paperBannerAdId=25819&callingSite=www.dailytargum.com&timeStamp=20040928131024&redirecturl=http%3A%2F%2Fwww.ford.com%2Fgo%2Fhbcu" target="_blank" name="cpstilladclick2"><img src="http://media.collegepublisher.com/media/Images/ads/ford/HBCU/HBCU_Ford-Banner02.gif" border="0" name="cpstillad2"></a>');
			document.write('<br><img src="http://media.collegepublisher.com/media/images/blank.gif" border="0" height="2"><br>');
			ads2 = new Array();
			ads2[0] = new Array('http://ad.doubleclick.net/ad/N763.Y2M.com/B1408275.19;sz=468x60;ord=20040928131024?', 'http://admanager2.broadbandpublisher.com/networkBannerServerClickThrough.adp?paperBannerAdId=24362&callingSite=www.dailytargum.com&timeStamp=20040928131024&redirecturl=http%3A%2F%2Fad.doubleclick.net%2Fjump%2FN763.Y2M.com%2FB1408275.19%3Bsz%3D468x60%3Bord%3D20040928131024%3F', 'http://admanager2.broadbandpublisher.com/networkImpression.adp?pbaid=24362&random=');
			ads2[1] = new Array('http://citi.bridgetrack.com/ads/image/?BT_PID=16400&r=20040928131024', 'http://admanager2.broadbandpublisher.com/networkBannerServerClickThrough.adp?paperBannerAdId=24548&callingSite=www.dailytargum.com&timeStamp=20040928131024&redirecturl=http%3A%2F%2Fciti.bridgetrack.com%2Fads%2Fclick%2F%3FBT_PID%3D16400%26r%3D20040928131024', 'http://admanager2.broadbandpublisher.com/networkImpression.adp?pbaid=24548&random=');
			ads2[2] = new Array('http://media.collegepublisher.com/media/Images/ads/ford/HBCU/HBCU_Ford-Banner02.gif', 'http://admanager2.broadbandpublisher.com/networkBannerServerClickThrough.adp?paperBannerAdId=25819&callingSite=www.dailytargum.com&timeStamp=20040928131024&redirecturl=http%3A%2F%2Fwww.ford.com%2Fgo%2Fhbcu', 'http://admanager2.broadbandpublisher.com/networkImpression.adp?pbaid=25819&random=');
			ads2[3] = new Array('http://media.collegepublisher.com/media/Images/ads/ford/HBCU/HBCU_Ford-Banner01.gif', 'http://admanager2.broadbandpublisher.com/networkBannerServerClickThrough.adp?paperBannerAdId=26122&callingSite=www.dailytargum.com&timeStamp=20040928131024&redirecturl=http%3A%2F%2Fwww.ford.com%2Fgo%2Fhbcu', 'http://admanager2.broadbandpublisher.com/networkImpression.adp?pbaid=26122&random=');
			ads['2'] = new Array(ads2, findRotationIndex(ads2, 2), 0);
			var impressionIMG2=new Image();
			impressionIMG2.src="http://admanager2.broadbandpublisher.com/networkImpression.adp?pbaid=25819&random=20040928131024";
			break;
		case 3:
			document.write('<img src="http://media.collegepublisher.com/media/images/blank.gif" border="0" height="2"><br>');
			document.write('<a href="http://admanager2.broadbandpublisher.com/networkBannerServerClickThrough.adp?paperBannerAdId=26425&callingSite=www.dailytargum.com&timeStamp=20040928131024&redirecturl=http%3A%2F%2Fwww.ford.com%2Fgo%2Fhbcu" target="_blank" name="cpstilladclick3"><img src="http://media.collegepublisher.com/media/Images/ads/ford/HBCU/HBCU_Ford125X125.gif" border="0" name="cpstillad3"></a>');
			document.write('<br><img src="http://media.collegepublisher.com/media/images/blank.gif" border="0" height="2"><br>');
			ads3 = new Array();
			ads3[0] = new Array('http://citi.bridgetrack.com/ads/image/?BT_PID=16398&r=20040928131024', 'http://admanager2.broadbandpublisher.com/networkBannerServerClickThrough.adp?paperBannerAdId=24841&callingSite=www.dailytargum.com&timeStamp=20040928131024&redirecturl=http%3A%2F%2Fciti.bridgetrack.com%2Fads%2Fclick%2F%3FBT_PID%3D16398%26r%3D20040928131024', 'http://admanager2.broadbandpublisher.com/networkImpression.adp?pbaid=24841&random=');
			ads3[1] = new Array('http://media.collegepublisher.com/media/Images/ads/ford/HBCU/HBCU_Ford125X125.gif', 'http://admanager2.broadbandpublisher.com/networkBannerServerClickThrough.adp?paperBannerAdId=26425&callingSite=www.dailytargum.com&timeStamp=20040928131024&redirecturl=http%3A%2F%2Fwww.ford.com%2Fgo%2Fhbcu', 'http://admanager2.broadbandpublisher.com/networkImpression.adp?pbaid=26425&random=');
			ads['3'] = new Array(ads3, findRotationIndex(ads3, 3), 0);
			var impressionIMG3=new Image();
			impressionIMG3.src="http://admanager2.broadbandpublisher.com/networkImpression.adp?pbaid=26425&random=20040928131024";
			break;
		case 6:
			document.write('<table cellspacing="2" cellpadding="2"><tr><td>');
			document.write('<script language=\"JavaScript1.1\" src=\"http://adfarm.mediaplex.com/ad/js/2095-18517-6416-0?mpt=20040928131024&mpvc=\"></scr' + 'ipt>');
			document.write('</td></tr></table>');			ads6 = new Array();
			ads['6'] = new Array(ads6, findRotationIndex(ads6, 6), 0);
			var impressionIMG6=new Image();
			impressionIMG6.src="http://admanager2.broadbandpublisher.com/networkImpression.adp?pbaid=20366&random=20040928131024";
			break;
		case 9:
			document.write('<table cellspacing="2" cellpadding="2"><tr><td>');
			document.write('<OBJECT classid=clsid:D27CDB6E-AE6D-11cf-96B8-444553540000 codebase=http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0 ID=FLASH_AD WIDTH=120 HEIGHT=240><PARAM NAME=movie VALUE=http://www.y2m.com/ads/lg/120x240scavenger2.swf?clickthrough=http://admanager2.broadbandpublisher.com/networkBannerServerClickThrough.adp?paperBannerAdId=24987!callingSite=www.dailytargum.com!timeStamp=20040928130006!redirecturl=http%253A%252F%252Fwww.lglifeisgood.com%252F> <PARAM NAME=bgcolor VALUE=#FFFFFF> <PARAM NAME=quality VALUE=autohigh> <embed src=http://www.y2m.com/ads/lg/120x240scavenger2.swf?clickthrough=http://admanager2.broadbandpublisher.com/networkBannerServerClickThrough.adp?paperBannerAdId=24987!callingSite=www.dailytargum.com!timeStamp=20040928130006!redirecturl=http%253A%252F%252Fwww.lglifeisgood.com%252F quality=high bgcolor=#FFFFFF pluginspage=http://www.macromedia.com/go/getflashplayer type=application/x-shockwave-flash width=120 height=240 salign=tl menu=0> </embed> </OBJECT>');
			document.write('</td></tr></table>');			ads9 = new Array();
			ads['9'] = new Array(ads9, findRotationIndex(ads9, 9), 0);
			var impressionIMG9=new Image();
			impressionIMG9.src="http://admanager2.broadbandpublisher.com/networkImpression.adp?pbaid=24987&random=20040928131024";
			break;
		case 10:
			document.write('<img src="http://media.collegepublisher.com/media/images/blank.gif" border="0" height="2"><br>');
			document.write('<a href="http://admanager2.broadbandpublisher.com/networkBannerServerClickThrough.adp?paperBannerAdId=25218&callingSite=www.dailytargum.com&timeStamp=20040928131024&redirecturl=http%3A%2F%2Fwww.microsoft.com%2Foffice%2Fonenote%2Fprodinfo%2Foccupation%2Feducation%2Fdefault.mspx" target="_blank" name="cpstilladclick10"><img src="http://mirrorimageorigin.collegepublisher.com/media/Images/ads/MicrosoftOneNote/mrs04004_125x125.gif" border="0" name="cpstillad10"></a>');
			document.write('<br><img src="http://media.collegepublisher.com/media/images/blank.gif" border="0" height="2"><br>');
			ads10 = new Array();
			ads10[0] = new Array('http://mirrorimageorigin.collegepublisher.com/media/Images/ads/MicrosoftOneNote/mrs04004_125x125.gif', 'http://admanager2.broadbandpublisher.com/networkBannerServerClickThrough.adp?paperBannerAdId=25218&callingSite=www.dailytargum.com&timeStamp=20040928131024&redirecturl=http%3A%2F%2Fwww.microsoft.com%2Foffice%2Fonenote%2Fprodinfo%2Foccupation%2Feducation%2Fdefault.mspx', 'http://admanager2.broadbandpublisher.com/networkImpression.adp?pbaid=25218&random=');
			ads['10'] = new Array(ads10, findRotationIndex(ads10, 10), 0);
			var impressionIMG10=new Image();
			impressionIMG10.src="http://admanager2.broadbandpublisher.com/networkImpression.adp?pbaid=25218&random=20040928131024";
			break;
	}
}

// total execution time: 3.19 ms
var admanagerIsAvailable = 1;
