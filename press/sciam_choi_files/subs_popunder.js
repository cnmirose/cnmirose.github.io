

if (!getCookie('SUBPOPUNDER0503')){
setCookie('SUBPOPUNDER0503', 'prelim', 1);
	if (getCookie('SUBPOPUNDER0503')){ 
		WinPopUnder("/html/popunder_magsubscribe.html",'subs_invite_magsubscribe',502,302,300,340);
		setCookie('SUBPOPUNDER0503', 'shown', 1);
	}
}
