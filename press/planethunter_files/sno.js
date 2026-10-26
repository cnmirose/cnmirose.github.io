var imgInterval;
var counter = 0;
var maxTries = 60;

function openImageWindow(image) {
  if ((image.width > 0) && (image.height > 0)) {
    newwin = open("", 'image_window', 'toolbar=0,status=0,menubar=0,scrollbars=0,resizable=1,width='+(image.width)+',height='+(image.height));
		newwin.document.write('<html><head></head><body marginwidth="0" marginheight="0" style="margin-top: 0px; margin-left: 0px;">');
		newwin.document.write('<img src="'+image.src+'" border="0">');
		newwin.document.write('</body></html>');
		newwin.document.close();
		clearInterval(imgInterval);
		return true;
	} else {
	  counter++;
		if (counter >= maxTries) {
		  clearInterval(imgInterval);
		}
	  return false;
	}
}

function popImage(imgUrl) {
  image = new Image();
	image.src = imgUrl;
	if (!(openImageWindow(image))) {
    imgInterval = setInterval('openImageWindow(image);', 1000);
	}
}

