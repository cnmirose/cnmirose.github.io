
if (!getCookie('SOIPOPUP0503')){
	setCookie('SOIPOPUP0503', 'prelim', 1);
	if (getCookie('SOIPOPUP0503')){
		WinOpen("/html/subs_invite.html",'pop',500,300,300,0);
	 	setCookie('SOIPOPUP0503', 'shown', 1);
	}
}