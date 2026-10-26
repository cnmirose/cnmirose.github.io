function WinPopUnder(file,win,w,h,left,top) {
		TheNewWin=window.open(file,win,'width='+w+',height='+h+',left='+left+',top='+top+',status=no,toolbar=no,menubar=no');
	 	TheNewWin.blur();
		window.focus();
	}
	
	//generic window opening function
	function WinOpen(file,win,w,h,left,top) {
		Win=window.open(file,win,'width='+w+',height='+h+',left='+left+',top='+top+',status=no,toolbar=no,menubar=no');
	 	Win.focus();
	}
	
function DoOpen(url,win,w,h) {
if (!win) {
	win='_blank';
}
if (!w) {
	w=500;
}
if (!h) {
	h=400;
}
Win=window.open(url,win,'width='+w+',height='+h+',left='+200+',top='+80+',status=yes,toolbar=no,menubar=no,scrollbars=yes,resizable=yes');
Win.focus();
}


function checkform ( form )
{
  // see http://www.thesitewizard.com/archive/validation.shtml
  // for an explanation of this script and how to use it on your
  // own website

  // ** START **
  if (form.Q.value == "") {
    alert( "Please remember to include a search term" );
    form.Q.focus();
    return false ;
  }
  // ** END **
  return true ;
}
//-->
