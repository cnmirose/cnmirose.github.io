//Browser control vars.  Determines which browser the client is using.  Does NOT detect NS6.0 properly.
var isNav = (document.layers) ? true:false
var isIE = (document.all) ? true:false
var isOther = (!isNav&&!isIE) ? true:false
var preloadFlag = false
var dropdownsLoaded = false

function newImage(arg) {
	if (document.images) {
		rslt = new Image();
		rslt.src = arg;
		return rslt;
	}
}

function changeImages() {
	if (document.images && (preloadFlag == true)) {
		for (var i=0; i<changeImages.arguments.length; i+=2) {
			document[changeImages.arguments[i]].src = changeImages.arguments[i+1];
		}
	}
}

var preloadFlag = false;
function preloadImages() {
	if (document.images) {
		mainnav_about_over = newImage("/images/includes/mainnav_about-over.gif");
		mainnav_academics_over = newImage("/images/includes/mainnav_academics-over.gif");
		mainnav_research_over = newImage("/images/includes/mainnav_research-over.gif");
		mainnav_admissions_over = newImage("/images/includes/mainnav_admissions-over.gif");
		mainnav_studentlife_over = newImage("/images/includes/mainnav_studentlife-over.gif");
		mainnav_sports_over = newImage("/images/includes/mainnav_sports-over.gif");
		mainnav_alumni_over = newImage("/images/includes/mainnav_alumni-over.gif");
		mainnav_giving_over = newImage("/images/includes/mainnav_giving-over.gif");
		preloadFlag = true;
	}
}


function popup(url, name, wwidth, wheight, wresize, wscrolls){
    eval("window.open('" + url + "','" + name + "','toolbar=no,menubar=no,address=no,status=no,dependent=no,resizable=" + wresize + ",scrollbars=" + wscrolls + ",height=" + wheight + ",width=" + wwidth + "')");
}

function jumpto(form, name) {
	var myindex= eval('form.'+ name + '.selectedIndex');
    var myval=eval('form.' + name + '.options[myindex].value');
    if (myval != "") {
	location.href=myval;
    }
}


function external(url){
    eval("window.open('/external.asp?URL=" + escape(url) +"','butlerEXT','toolbar=yes,menubar=yes,address=yes,status=yes,dependent=no,resizable=1,height=540,width=760')");
}