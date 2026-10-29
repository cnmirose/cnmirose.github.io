/* IMAGE ROLLOVERS */

/* : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : set variables
- n1, n2 = universal to all networks [ previous, next ]
*/
if (document.images) {
	n1On = new Image(50,10);
	n1On.src = "https://bucket.worldofbits.brown.edu/press/discovery_files/sgallery/prevon.gif";
	n1Off = new Image(50,10);
	n1Off.src = "https://bucket.worldofbits.brown.edu/press/discovery_files/sgallery/prevoff.gif";

	n2On = new Image(50,10);
	n2On.src = "https://bucket.worldofbits.brown.edu/press/discovery_files/sgallery/nexton.gif";
	n2Off = new Image(50,10);
	n2Off.src = "https://bucket.worldofbits.brown.edu/press/discovery_files/sgallery/nextoff.gif";
}


/* : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : functions
- "_" = number refering to image associated
- example:
<a onmouseover="switchOn('n_')" onMouseOut="switchOff('n_')" ... ><img name="n_" src="https://bucket.worldofbits.brown.edu/press/discovery_files/sgallery/_off.gif" ... /></a>
*/
function switchOn(imgName) {
	if (document.images) {
		imgOn = eval(imgName + "On.src");
		document [imgName].src = imgOn;
	}
}

function switchOff(imgName) {
	if (document.images) {
		imgOff = eval(imgName + "Off.src");
		document [imgName].src = imgOff;
	}
}


/* END ROLLOVERS */