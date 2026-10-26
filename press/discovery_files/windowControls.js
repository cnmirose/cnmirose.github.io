/* BROWSER WINDOW CONTROLS */

/* : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : function
- launch a popup window
- when adding a scrollbar increase (+) width by [ 16px ]
- example:
<a href="#" onclick="windowOpen('__URL__','__NAME__',655,500,0,0);"> - link - </a><br />
*/
function windowOpen(url, name, width, height, scroll, resize) {
	if (scroll == "") { scroll = "0"; }
	if (resize == "") { resize = "0"; }
	var options = "width=" + width + ",height=" + height + ",status=0,toolbar=0,menubar=0,location=0,scrollbars=" + scroll + ",resizable=" + resize;
	
	window.open(url,name,options);	// self.focus();
	return false;
}


/* : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : function
- link from popup to parent browser
- example:
<a href="#" onclick="toParent('url.html');"> - link - </a><br />
*/
function toParent(url) {
    opener.location.href = url; 
    window.close();
}


/* END CONTROLS */