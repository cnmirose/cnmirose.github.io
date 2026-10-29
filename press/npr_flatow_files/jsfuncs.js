function popUp(page, dimensions)
	{
		window.open(page, '', dimensions);
	}
function setUserVars()
	{
		if(navigator.appName.indexOf('Internet Explorer') != -1)
			{
				window.isIE = true;
			}
		window.userPlatform = navigator.platform;
		if((window.userPlatform.indexOf("mac") != -1) || (window.userPlatform.indexOf("MAC") != -1) || (window.userPlatform.indexOf("Mac") != -1))
			{
				window.userPlatform = "mac";
			}
	}
setUserVars();
function adCompatible(mediaPreference)
	{
		/*returnVal = false;
		if(((window.isIE) && (window.userPlatform != "mac")) && ((mediaPreference == "WM") || (mediaPreference == "RM")) )
			{
				returnVal = true;
			}
		return returnVal;*/
		return false;
	}
function doAd(newURL, mediaPreference)
	{
		if(adCompatible(mediaPreference))
			{
				goLightningCast(newURL, mediaPreference);
			}
		else
			{
				location.href=newURL;
			}	
	}
function toNumericMonth(month)
	{
		var monthArray = new Object();
		monthArray["jan"] = 0;
		monthArray["feb"] = 1;
		monthArray["mar"] = 2;
		monthArray["apr"] = 3;
		monthArray["may"] = 4;
		monthArray["jun"] = 5;
		monthArray["jul"] = 6;
		monthArray["aug"] = 7;
		monthArray["sep"] = 8;
		monthArray["oct"] = 9;
		monthArray["nov"] = 10;
		monthArray["dec"] = 11;
		return monthArray[month.toLowerCase()];
	}
function parseZero(valToUse)
	{
		if(valToUse.length > 1 && valToUse.charCodeAt(0) == 0)
			{
				valToUse = valToUse.substr(1, valToUse.length);
			}
		return valToUse;
	}
function setDate(dateToUse)
	{
		dateArray = dateToUse.split("-");
		dateToReturn = new Date();
		dateToReturn.setDate(parseZero(dateArray[0]));
		dateToReturn.setMonth(toNumericMonth(dateArray[1].toLowerCase()));
		dateToReturn.setYear(dateArray[2]);
		dateToReturn = Date.parse(dateToReturn);
		return dateToReturn;
	}
function compareDates(date1, date2)
	{
		date1 = setDate(date1);
		date2 = setDate(date2);
		returnVal = "after";
		if(date2 < date1)
			{
				returnVal = "before";			
			}
		return returnVal;
	}
function checkMediaPrefs(mediaPrefVals, valToTest)
	{
		match = false;
		for(i = 0; i < mediaPrefVals.length; i++)
			{
				if(mediaPrefVals[i] == valToTest)
					{
						match = true;
					}
			}
		return match;
	}
function makePrefArray(mediaPreference)
	{
		temp = new Array();
		temp = mediaPreference.split(",");
		for(i = 0; i < temp.length; i++)
			{
				temp[i] = temp[i].toUpperCase();
			}
		return temp;
	}
function goNewurl(https://bucket.worldofbits.brown.edu/press/npr_flatow_files/newURL%2C%20saURL%2C%20winTarget)
	{
		if(saURL == "")
			{
				saURL = newURL;
			}
		if(window.sa_onclick)
			{
				sa_onclick(saURL);
			}
		if(winTarget == "new")
			{
				window.open(newURL, '', "width=540,height=360,toolbar=none,location=none,menubar=none,status=none,resizable=yes");
			}
		else
			{
				location.href= newURL;
			}
	}
function getMedia(prgCode, showDate, segNum, mediaPreference)
	{
		mediaPrefVals = makePrefArray(mediaPreference);
		if((segNum == "all") || (segNum == "ALL"))
			{
				segNum = "";
			}
		if(compareDates("21-Aug-2001", showDate) == "before")
			{
				goNewURL("http://www.npr.org/dmg/dmg.php?prgCode=" + prgCode + "&showDate=" + showDate + "&segNum=" + segNum + "&media=old&mediaPref=RM", "", "");
			}
		else if((checkMediaPrefs(mediaPrefVals, "RM")) && (!checkMediaPrefs(mediaPrefVals, "WM")))
			{
				goNewURL("http://www.npr.org/dmg/dmg.php?prgCode=" + prgCode + "&showDate=" + showDate + "&segNum=" + segNum + "&mediaPref=RM", "", "");
			}
		else if((checkMediaPrefs(mediaPrefVals, "WM")) && (!checkMediaPrefs(mediaPrefVals, "RM")))
			{
				goNewURL("http://www.npr.org/dmg/dmg.php?prgCode=" + prgCode + "&showDate=" + showDate + "&segNum=" + segNum + "&mediaPref=WM", "", "");
			}		
		else if(checkMediaPrefs(mediaPrefVals, "RM") && checkMediaPrefs(mediaPrefVals, "WM"))
			{
				if(compareDates("1-Feb-2003", showDate) == "after")
					{
						if(checkCookie("NPRMediaPref"))
							{
								mediaPreference = checkCookie("NPRMediaPref");
								newURL = "http://www.npr.org/dmg/dmg.php?prgCode=" + prgCode + "&showDate=" + showDate + "&segNum=" + segNum + "&mediaPref=" + mediaPreference;
								if(window.sa_onclick)
									{
										sa_onclick(newURL);
									}
								doAd(newURL, mediaPreference);
							}
						else
							{
								goNewURL("http://www.npr.org/dmg/audioplayer.php?prgCode=" + prgCode + "&showDate=" + showDate + "&segNum=" + segNum, "", "new");
							}
					}
				else
					{
						if((checkCookie("NPROldMediaPref")) || (checkCookie("NPRMediaPref") == "RM"))
							{
								mediaPreference = checkCookie("NPROldMediaPref");
								if(checkCookie("NPRMediaPref") == "RM")
									{
										mediaPreference = "RM";
									}
								goNewURL("http://www.npr.org/dmg/dmg.php?prgCode=" + prgCode + "&showDate=" + showDate + "&segNum=" + segNum + "&mediaPref=" + mediaPreference, "", "");
							}
						else
							{
								goNewURL("http://www.npr.org/dmg/oldaudio.php?prgCode=" + prgCode + "&showDate=" + showDate + "&segNum=" + segNum, "", "new");
							}
					}
			}
	}
function getStaticMedia(URL, mediaPreference)
	{
		sauid = checkCookie("sauid");
		referrer = document.referrer;
		
		mediaPrefVals = makePrefArray(mediaPreference);
	
		if(URL.indexOf("http://") != -1)
			{
				goNewURL(URL, '', '');
			}
		else if(URL.toUpperCase() == "NEWSCAST")
			{
				getNewsCast(); 
			}
		else if(URL.toUpperCase() == "PROGRAMSTREAM")
			{
				getProgramStream(); 
			}			
		else if((checkMediaPrefs(mediaPrefVals, "WM")) && (checkMediaPrefs(mediaPrefVals, "RM")))
			{ 
				mediaPreference = checkCookie("NPRMediaPref");
				if((mediaPreference == false) || (mediaPreference == "RM"))
					{
						goNewURL("http://www.npr.org/dmg/dmg.php?mediaURL=" + URL + "&mediaType=RM", URL, "");
					}
				else if(mediaPreference == "WM")	
					{
						goNewURL("http://www.npr.org/dmg/dmg.php?mediaURL=" + URL + "&mediaType=WM", URL, "");
					}
			}
		else if((checkMediaPrefs(mediaPrefVals, "RM")) && (!checkMediaPrefs(mediaPrefVals, "WM")))
			{
				goNewURL("http://www.npr.org/dmg/dmg.php?mediaURL=" + URL + "&mediaType=RM", URL, "");
			}
		else if((checkMediaPrefs(mediaPrefVals, "WM")) && (!checkMediaPrefs(mediaPrefVals, "RM")))
			{
				goNewURL("http://www.npr.org/dmg/dmg.php?mediaURL=" + URL + "&mediaType=WM", URL, "");
			}

	}
function getTopicMedia(topicId, topicName, mediaPreference)
	{
		mediaPrefVals = makePrefArray(mediaPreference);	
		if(checkCookie("NPRMediaPref"))
			{
				mediaPreference = checkCookie("NPRMediaPref");
				newURL = "http://www.npr.org/dmg/dmg.php?topicId=" + topicId + "&topicName=" + topicName + "&mediaPref=" + mediaPreference;
				if(window.sa_onclick)
					{
						sa_onclick(newURL);
					}
				doAd(newURL, mediaPreference);
			}
		else
			{
				goNewURL("http://www.npr.org/dmg/audioplayer.php?topicId=" + topicId + "\"", "", "new");
			}		
	}
function getLatestShow(prgCode)
	{
		if(checkCookie("NPRMediaPref"))
			{
				mediaPreference = checkCookie("NPRMediaPref");
				goNewURL("http://www.npr.org/dmg/dmg.php?getLatestShow=true&prgCode=" + prgCode + "&NPRMediaPref=" + mediaPreference, "", "new");
			}
		else
			{
				goNewURL("http://www.npr.org/dmg/audioplayer.php?getLatestShow=true&prgCode=" + prgCode, "", "new");
			}
	}
function getFeaturedAudio(newURL)
	{
		if(checkCookie("NPRMediaPref"))
			{
				mediaPreference = checkCookie("NPRMediaPref");
				if(mediaPreference == "WM")
					{
						newURL += "&NPRMediaPref=WM";
					}
				else
					{
						newURL += "&NPRMediaPref=RM";
					}
				if(window.sa_onclick)
					{
						sa_onclick(newURL);
					}
				doAd(newURL, mediaPreference);
			}
		else
			{
				//newURL += "&NPRMediaPref=RM";
				//goNewURL(newURL, "", "new");
				goNewURL("http://www.npr.org/dmg/audioplayer.php?newURL=" + newURL, '', 'new');
			}
	}
function getProgramStream()
	{
		getFeaturedAudio("http://www.npr.org/dmg/dmg.php?getProgramStream=true");
	}
function getNewsCast()
	{
		getFeaturedAudio("http://www.npr.org/dmg/dmg.php?getNewsCast=true");
	}
function goLightningCast(newURL, mediaPref)
	{
		extension = "&getAd=1&ext=.asx";
		if(mediaPref == "RM")
			{
				"&getAd=1&ext=.rm";
			}
		newURL += extension;
		newURL = "http://www.npr.org/lightningcast/index.html" + "?audioURL=" + newURL;
		window.open(newURL, "playerWin", "width=400,height=430,resizable=yes,toolbar=no,scrollbars=no");
	}
function getMusicButton(songId, musicAudioFileName, prgCode)
	{
		if(checkCookie("NPRMediaPref"))
			{
				mediaPreference = checkCookie("NPRMediaPref");
				goNewURL("http://www.npr.org/dmg/dmg.php?getMusicButton=true&songId=" + songId + "&musicAudioFileName=" + musicAudioFileName + "&prgCode=" + prgCode + "&NPRMediaPref=" + mediaPreference, "", "");
			}
		else
			{
				goNewURL("http://www.npr.org/dmg/audioplayer.php?getMusicButton=true&songId=" + songId + "&musicAudioFileName=" + musicAudioFileName, '', "new");
			}
	}
//cookie code
function setCookie(cookieToSet, daysToExpiration, cookieValue)
	{
		var exp=new Date();
		exp.setTime(exp.getTime() + (1000 * 60 * 60 * 24 * daysToExpiration));
		document.cookie=cookieToSet + "=" + cookieValue + "; path=/; domain=npr.org; expires=" + exp.toGMTString();
	}
function checkCookie(cookieToCheck)
	{
		var allcookies = document.cookie;
		var pos = allcookies.indexOf(cookieToCheck + "=");
		if(pos != -1)
			{
				var start = pos + cookieToCheck.length + 1;
				var end = allcookies.indexOf(";", start);
				if(end == -1)
					{
						end = allcookies.length;
					}
				return allcookies.substring(start, end);
			}
		else
			{
				return false;
			}
	}
function killCookie(cookieToKill)
	{
		setCookie(cookieToKill, -1, '')
	}
