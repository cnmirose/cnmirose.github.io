function mailafriend(url, form_url, width, height){
	if(url==0){
		url = escape(document.URL);
	}
	var title = escape(document.title).replace(/\+/i, "%2b");
	var open_url = form_url + "?url=" + url + "&title=" + title;
	var params = "width=" + width + ",height=" + height + ",resizable=yes,location=no,menubar=no,scrollbars=yes,personalbar=no,status=yes,top=10,left=10";
	window.open(open_url,'mailafriend',params);
}
