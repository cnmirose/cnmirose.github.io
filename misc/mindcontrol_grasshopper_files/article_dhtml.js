/*
article.js
*/
function switchTab(activeTab, activeBoxId) {
	if (document.getElementById) {
		var allTabs = activeTab.parentNode;
		var activeBox = document.getElementById(activeBoxId);
		var allBoxes = activeBox.parentNode;
		
		// loop through tabs and change them to off state
		for (i=0; i<allTabs.childNodes.length; i++) {
			if (allTabs.childNodes[i].nodeName == activeTab.nodeName ) {
				setElementClass(allTabs.childNodes[i], "offTab");
			}
		}
		// loop through boxes and change them to off state
		for (i=0; i<allBoxes.childNodes.length; i++) {
			if (allBoxes.childNodes[i].nodeName == activeBox.nodeName ) {
				setElementClass(allBoxes.childNodes[i], "offBox");
			}
		}
		
		// turn on the active tab and box		
		setElementClass(activeTab, "currentTab");
		setElementClass(activeBox, "currentBox");	
	}
}

function toggleGTS(state) {
	if (document.getElementById) {
		var gtsLink = document.getElementById("gtsLink");
		gtsLink.setAttribute("href", "#"); // get rid of the href
		var menu = document.getElementById("goToSectionBox").firstChild;
// Make sure the firstChild is an HTML tag and nothing else
		while (menu.nodeType != 1) { //nodeType 1 is HTML element
			menu = menu.nextSibling; // assign next sibling instead
		}
		setElementClass(gtsLink, state);
		setElementClass(menu, state);
		if (state == "active") { 
			document.getElementById("searchType").style.visibility = "hidden";
		} else {
			document.getElementById("searchType").style.visibility = "visible";
		}
	}
}

function getElementClass(element) {
	if (element.getAttribute("class")) {
		return element.getAttribute("class");
	} else if (element.getAttribute("className")) {
		return element.getAttribute("className");
	}
}

function setElementClass(element, classValue) {
	if (element.setAttribute("class", classValue)) {
		element.setAttribute("class", classValue);
	} else if (element.setAttribute("className", classValue)) {
		element.setAttribute("className", classValue);
	}
}

function ieXLiquidWidth() {
	if (document.body.clientWidth < 774) {
		return "768px";
	} else if (document.body.clientWidth > 974) {
		return "970px";
	} else {
		return "auto";
	}
}
