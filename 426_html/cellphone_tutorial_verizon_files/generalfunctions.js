function swapimages(){
	if(window.document.I2!=null){
		window.document.I2.src = "https://bucket.worldofbits.brown.edu/426_html/cellphone_tutorial_verizon_files/About/Community/learningcenter/images/rhs/i2_closed.gif"
	}
	if(window.document.I3!=null){
		window.document.I3.src = "https://bucket.worldofbits.brown.edu/426_html/cellphone_tutorial_verizon_files/About/Community/learningcenter/images/rhs/i3_closed.gif"
	}
	if(window.document.I4!=null){
		window.document.I4.src = "https://bucket.worldofbits.brown.edu/426_html/cellphone_tutorial_verizon_files/About/Community/learningcenter/images/rhs/i4_closed.gif"
	}
}

function lcpopup(targeturl){
	var childWindow = window.open (targeturl, 'lcwindow', config='height=450,width=459,toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,directories=no,status=no');
	childWindow.focus();
}

function lcpopup2(targeturl){
	var childWindow = window.open (targeturl, 'lcwindow', config='height=600,width=800,left=0,top=0,toolbar=no,menubar=no,scrollbars=yes,resizable=yes,directories=no,status=no');
	childWindow.focus();
}


function getCookieValue(thevarname) {
	var thevarname2 = thevarname;
	thevarname2.toString();
	var cookieresults1=document.cookie;
	var cookieresults = cookieresults1.split(";");
	var x=0;
	for (i=0;i<cookieresults.length;i++){
		var newresult = cookieresults[i];
			var newresult2 = newresult.split("=");
			var newresult3 = newresult2[0].replace(" ","");
			if (newresult3==thevarname2){
				return newresult2[1];
				x++;
			}
	}
	if(x==0){
		return false;
	}		
}

