isExpanded = false;

function showDescriptionLink() {
	document.all.toggle.innerHTML = "<span class='tableHead'>[+] </span><A HREF='Javascript:ShowDescriptions();' class='tableheadLink'>Show Previews</A>";
}

function hideDescriptionLink() {
	document.all.toggle.innerHTML = "<span class='tableHead'>[&ndash;] </span><A HREF='Javascript:HideDescriptions();' class='tableheadLink'>Hide Previews</A>";
}

function ShowDescriptions() {
	setShowCookie();
	reveal();
}

function HideDescriptions() {
	setHideCookie();
	reveal();
}

function lccontentexpandIt(whichEl) {
        whichEl.style.display = "";
}

function lccontentcontractIt(whichEl) {
        whichEl.style.display = "none";
}

function reveal () {
	if (getCookieValue("lccontent")=="show") {
		hideDescriptionLink();
		hideSpacer();
	} else {
		showDescriptionLink();
		showSpacer();
	}
	idColl = document.all.tags("span");
	for (var i = 0; i < idColl.length; i++) {
		if (idColl(i).className == "child") {
			
			var element = ""
			element = idColl(i);
			
			if (getCookieValue("lccontent") == "show") {
				lccontentexpandIt(element);
			} else {
				lccontentcontractIt(element);
			}
		}
		if (idColl(i).className == "singletoggle") {
			element = eval(idColl[i]);
			var newelement = element.id;
			newelement = newelement.substring(2,5);
			if (newelement.charAt(2)=="o"){
				newelement = newelement.charAt(0);
			} else {
				if (newelement.charAt(2) == "T") {
					newelement = newelement.substring(0,2);
				}
			}
			//var whichEl = eval("document.all.el" + newelement + "Toggle");			
			if (getCookieValue("lccontent") == "show") {
				hideSinglePreviewLink(newelement);
			} else {
				showSinglePreviewLink(newelement);
			}
		}
	}
}

function showSinglePreviewLink(el) {
	whichEl = eval("document.all.el" + el + "Toggle");
	whichEl.innerHTML = "<a class=\"tablelink\" href=\"javascript:togglePreview(\'" + el + "\')\">preview</a>";
}

function hideSinglePreviewLink(el) {
	whichEl = eval("document.all.el" + el + "Toggle");
	whichEl.innerHTML = "<a class=\"tablelink\" href=\"javascript:togglePreview(\'" + el + "\')\">hide&nbsp;preview</a>";
}


function setHideCookie() {
	document.cookie = "lccontent=hide;path=/";	
}	

function setShowCookie() {
	document.cookie = "lccontent=show;path=/";
}

function initlccontent(){
	reveal();
}

function togglePreview(el){
	whichEl = eval("document.all.el" + el + "Child");
	if (whichEl.style.display == "none") {
		whichEl.style.display = "";
		//whichEl = eval("document.all.el" + el + "Toggle");
		hideSinglePreviewLink(el);
    }else {
        whichEl.style.display = "none";
        //whichEl = eval("document.all.el" + el + "Toggle");
		showSinglePreviewLink(el);
    }
}

function showSpacer() {
	if (document.all.lcartspacer){
		document.all.lcartspacer.innerHTML = "<p></p>";
	}
	if (document.all.lcsolspacer){
		document.all.lcsolspacer.innerHTML = "<p></p>";
	}
	if (document.all.lctopspacer){
		document.all.lctopspacer.innerHTML = "<p></p>";
	}
	if (document.all.lcfenspacer){
		document.all.lcfenspacer.innerHTML = "<p></p>";
	}
	if (document.all.lcprodspacer){
		document.all.lcprodspacer.innerHTML = "<p></p>";
	}
}

function hideSpacer() {
	if (document.all.lcartspacer){
		document.all.lcartspacer.innerHTML = "";
	}
	if (document.all.lcsolspacer){
		document.all.lcsolspacer.innerHTML = "";
	}
	if (document.all.lctopspacer){
		document.all.lctopspacer.innerHTML = "";
	}
	if (document.all.lcfenspacer){
		document.all.lcfenspacer.innerHTML = "";
	}
	if (document.all.lcprodspacer){
		document.all.lcprodspacer.innerHTML = "";
	}
}
