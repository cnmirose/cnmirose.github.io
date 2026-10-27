


//Other global Vars
var shown = 0
var last
var LXlimit
var UXlimit
var LYlimit
var UYlimit
var OffsetIt = 0


// VISIBILITY FUNCTIONS.  Show or Hide layers on the page.  Does NOT affect the display property...els still take up space allotted them
function showObj(obj) {
	visObj = createObj(obj)
    if (!isNav) {
		visObj.visibility = "visible"
	} else {
		visObj.visibility = "show"
    }
}

function hideObj(obj) {
	visObj = createObj(obj)
    if (!isNav) {
		visObj.visibility = "hidden"
	} else {
		visObj.visibility = "hide"
	}
}

// OBJECT FUNCTION.  Creates object for DHTML control
function createObj(obj) {
	if (!isNav) {
	newobj = eval("document.all." + obj + ".style")
	} else {
	newobj = eval("document.layers['" + obj + "']")
	}
	return newobj
}

function showNav(obj, LX, LY, UX, UY) {

    if (!isOther && dropdownsLoaded) {
    LXlimit = LX
    UXlimit = UX
    LYlimit = LY - OffsetIt
    UYlimit = UY - OffsetIt
        if (shown == 0) {
            last = obj
            showObj(obj)

			
            shown = 1
        } else {
            hideObj(last)

			
            last = obj
            showObj(obj)
			

			
        }
    }
} 
function hideNav () {       
    if ((shown == 1) && (last != "") && dropdownsLoaded) { hideObj(last) }
}
//Tracks mouse for mouseout call
function checkIt(evt) {
    if ((shown == 1) && !isOther && dropdownsLoaded) {
        if (isNav) {
            if ((evt.pageX) < LXlimit || (evt.pageX) > UXlimit || ((evt.pageY < LYlimit) || (evt.pageY > UYlimit))) {
                hideObj(last)
				

				
                shown = 0
            }
        } else {
			var Xposition=window.event.x + document.body.scrollLeft;
			var Yposition=window.event.y + document.body.scrollTop;
			//alert(window.event.x + ' , ' + window.event.y + ' : ' + LXlimit + ' , ' + LYlimit);
            if (Xposition < LXlimit || Xposition > UXlimit || Yposition < LYlimit || Yposition > UYlimit) {
                hideObj(last)
                shown = 0
            }
        }
    }
}

function doScroller() {
     if (isIE) {OffsetIt = document.body.scrollTop}

}

//Highlight function.  Change the specified object's class to the specified class name.  Class must be in main CSS file or in page itself.
function changelight(row, stylename) {
    if (isIE) { eval('document.all.' + row + '.className = "' + stylename + '"'); }
}

// function call to vanish menu on mouseout
if (isNav) { document.captureEvents(Event.MOUSEMOVE) }
document.onmousemove = checkIt
document.onscroll = doScroller
