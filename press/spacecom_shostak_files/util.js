function goTo(url) {
  	document.location = url
	}


function Popup(url,window_name,width,height,xtra_features,xtra_parameter)
	{
	if (xtra_features != "")
		xtra_features = ","+xtra_features;
	var popup = window.open(url,window_name,"width="+width+",height="+height+xtra_features);
	popup.focus();
	}

