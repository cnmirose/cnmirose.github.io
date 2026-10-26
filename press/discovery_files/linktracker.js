/* LINK TRACKER JS */

/* ------------------------------------------------------------------------ functions */
// track link that user has clicked on
// get domain info, set an image object in the DOM then call its src
function trackLink(itemId, trackDomain) {
	if (!trackDomain) { var trackDomain = window.location.hostname.toLowerCase(); }
	var imgTrack = new Image(0,0);
	imgTrack.src = "http://" + trackDomain + "/servlet/tracker/" + itemId;
}

/* END LINK TRACKER JS */
