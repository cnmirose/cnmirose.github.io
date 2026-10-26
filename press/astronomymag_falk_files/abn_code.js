/*
===============================================================================
KPC AB-NETWORK CORE CODE
Version 3.0 - Modified: 07/29/2003 (drv)
-- upgrade phpadsnew 2.0 RC 4.1
===============================================================================

           +++ DO NOT EDIT THE FOLLOWING VARIABLES/FUNCTIONS +++

*/


// AB-NETWORK INITIALIZE

// initialize the zone/position array
var arrayAdZones = new Array(ABNzonecount);

// ad code variables
var wrdScript = 'script';

// Set version variable if it's not set.
if ((typeof _version)=='undefined') {
   _version=11;
} else if ((_version>=11)==false) {
   _version=11;
}

if (navigator.userAgent.indexOf('Mozilla/3') != -1) {
   _version=10;
}


// AB-NETWORK FUNCTIONS

// STANDARD INLINE FUNCTION
function DisplayAds (affiliate,zoneid,width,height,bannerid,clientid,wtext) {

   // AB-NETWORK STATUS CHECK
   // Check network status variable [0:not ready;1:ready]
   if (ABNstatus!=1) {return;}

	// Check for numeric zoneid - if none then stop
	if (isNaN(zoneid)==true || zoneid <= 0) {return;}

	// LOCAL VARIABLES
	var dimensions, zone, what, zonewtext

   // DIMENSIONS
   // Check for Dimensions (width & height)
   if (isNaN(width)==true) {
      dimensions = '';
   } else {
      (isNaN(height))?dimensions='width:'+width:dimensions=width+'x'+height;
   }

   // ZONES
   // Check for ZoneID
   if (isNaN(zoneid)==true) {
      zone = '';
   } else {
      zone = 'zone:'+zoneid;
   }

   // WHAT PARAM (for zone implementation)
   if (isNaN(zoneid)==true) {
      (dimensions.length>1)?what='&what='+dimensions:what='&what=';
   } else {
      what = what='&what='+zone;
   }

   // WITH TEXT
   // Check for with text parameter
   (wtext=1)?zonewtext='&withText=1':zonewtext='&withText=0';

	// RANDOM STRING
   var phpAds_random = new String (Math.random());
   phpAds_random = phpAds_random.substring(2,11);

   // REQUEST TO AB-NETWORK
   if (!document.phpAds_used) document.phpAds_used = ',';
   if (_version < 11) {
      document.write ('<a href="' + ABNserver + 'adclick.php?n=' + phpAds_random + '" target="_top" ><img src="' + ABNserver + 'adview.php?n=' + phpAds_random + zonewtext + what + '&target=_top" border="0" width="' + width + '" height="' + height + '"></a>');
   } else {
		if (navigator.userAgent.indexOf('Mozilla/4.') != -1) {
			// USE INLINE METHOD FOR NETSCAPE 4.x -- 20030527 (DRV)
			document.write ('<' + wrdScript + ' type="text/javascript" language="JavaScript1.1" src="' + ABNserver + 'adjs.php?n=' + phpAds_random + zonewtext + what + '&target=_top&exclude=' + document.phpAds_used + '">');
			document.write ('<!-- -->');
			document.write ('</' + wrdScript + '>');
			document.write ('<!-- -->');
		} else {
			// USE IFRAME/ILAYERS FOR OTHERS: 20030515 (DRV)
			// Tested in IE 4+ (PC/Macs), Opera, Mozilla
			document.write ('<iframe id="' + phpAds_random + '" name="' + phpAds_random + '" src="' + ABNserver + 'adframe.php?n=' + phpAds_random + zonewtext + what + '" framespacing="0" frameborder="no" scrolling="no" width="' + width + '" height="' + height +'" allowtransparency="true"><ilayer width="' + width + '" height="' + height +'" clip="0,0,' + width + ',' + height +'" src="' + ABNserver + 'adframe.php?n=' + phpAds_random + zonewtext + what + '"></ilayer></iframe>');
		}
   }

}

// POPUP/POPUNDER
function DisplayPopAds (zoneid,poptype,adsdelay,positionx,positiony) {

   // AB-NETWORK STATUS CHECK
   // Check server status variable [0:not ready;1:ready]
   if (ABNstatus!=1) {return;}

	// Check for numeric zoneid - if none then stop
	if (isNaN(zoneid)==true || zoneid <= 0) {return;}

	// LOCAL VARIABLES

   // ZONES
	var zone = 'zone:'+zoneid;

   // DELAY
   // Check for adsdelay  (minutes)
   if (isNaN(adsdelay)==true || adsdelay<.1) {adsdelay = .1;}

   // CHECK AB-NETWORK COOKIE
   var cookiename = ABNcprefix + zoneid;
   var cookieExist = getABNCookieName(cookiename);
   if (cookieExist == null) {
      var expTime = 1000*60*adsdelay;
      setABNCookie(cookiename,cookiename,expTime);

      // POSITION CHECK
      var posx = positionx;
      var posy = positiony;

		// OVERRIDE CHECK
		//zoneid,poptype,positionx,positiony
		var arrayOverride = new Array();
		arrayOverride = PopAdsZoneOverride(zoneid);
		if ((typeof arrayOverride)=='object' && arrayOverride.length==4) {
			if (arrayOverride[1] != '') {poptype = arrayOverride[1];}
			if (arrayOverride[2] != '') {posx = arrayOverride[2];}
			if (arrayOverride[3] != '') {posy = arrayOverride[3];}
		}

      // METHOD CHECK
      var var_poptype = '';
      if (poptype == "popunder") {var_poptype = '&popunder=1';}

		// RANDOM STRING
	   var phpAds_random = new String (Math.random());
	   phpAds_random = phpAds_random.substring(2,11);

      // REQUEST TO AB-NETWORK
	   if (!document.phpAds_used) document.phpAds_used = ',';
      if (_version >= 11) {
			if (navigator.userAgent.indexOf('Mozilla/4.') != -1) {
				// USE INLINE METHOD FOR NETSCAPE 4.x -- 20030527 (DRV)
				document.write ('<' + wrdScript + ' type="text/javascript" language="JavaScript1.1" src="' + ABNserver + 'adpopup.php?n=' + phpAds_random + '&what=' + zone + '&target=_blank' + var_poptype + '&posx=' + posx + '&posy=' + posy + '&delay=2">');
				document.write ('<!-- -->');
				document.write ('</' + wrdScript + '>');
				document.write ('<!-- -->');
			} else {
				// USE IFRAME/ILAYERS FOR OTHERS: 20030515 (DRV)
				// Tested in IE 4+ (PC/Macs), Opera, Mozilla
				document.write ('<iframe id="' + phpAds_random + '" name="' + phpAds_random + '" src="' + ABNserver + 'adpopup.php?n=' + phpAds_random + '&what=' + zone + '&target=_blank' + var_poptype + '&posx=' + posx + '&posy=' + posy + '" framespacing="0" frameborder="no" scrolling="no" width="0" height="0" allowtransparency="true"><ilayer width="0" height="0" clip="0,0,0,0" src="' + ABNserver + 'adpopup.php?n=' + phpAds_random + '&what=' + zone + '&target=_blank' + var_poptype + '&posx=' + posx + '&posy=' + posy + '&delay=2"></ilayer></iframe>');
			}
      }
   }
}

// ZONE LIST CONVERSION
function SetAdZones(zonelist) {
	var tempAdArray = zonelist.split(",");
   if (tempAdArray.length == ABNzonecount) {
   	var adarrayindex = 0;
   	while (adarrayindex < ABNzonecount) {
   		arrayAdZones[adarrayindex] = tempAdArray[adarrayindex];
   		adarrayindex++;
   	}
   }
}

// SET COOKIE
function setABNCookie(name, value, exptime) {
   if (isNaN(exptime)==true && exptime >= 1) {exptime = 0;}
   var expire = new Date();
   var today = new Date();
   expire.setTime(today.getTime() + exptime);
   document.cookie = name + "=" + escape(value) + "; path=/"   + ((expire == null) ? "" : ("; expires=" + expire.toGMTString()))
}

// GET COOKIE NAME
function getABNCookieName(Name) {
   var search = Name + "="
   if (document.cookie.length > 0) {// if there are any cookies
      offset = document.cookie.indexOf(search)
      if (offset != -1) { // if cookie exists
         offset += search.length;
         // set index of beginning of value
         end = document.cookie.indexOf(";", offset)
         // set index of end of cookie value
         if (end == -1)
            end = document.cookie.length
         return unescape(document.cookie.substring(offset, end))
      }
   }
}
