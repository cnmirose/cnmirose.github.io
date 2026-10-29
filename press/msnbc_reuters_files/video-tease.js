function VT_findObj(n, d) 
{
	var p,i,x; if(!d) d=document; 
	if((p=n.indexOf("?"))>0&&parent.frames.length) {d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
	if(!(x=d[n])&&d.all) x=d.all[n]; 
	for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
	for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
	if(!x && d.getElementById) x=d.getElementById(n); 
	return x;
}

var buttonsLaunch_02,buttonsLaunch_02_over,buttonsLaunch_02_down,buttonsLaunch_02_sel;

function VT_preloadImages() {
	if (document.images) {
		buttonsLaunch_02 = new Image();
		buttonsLaunch_02.src = "https://bucket.worldofbits.brown.edu/press/msnbc_reuters_files/images/buttons/launch/buttonsLaunch_02.gif";
		buttonsLaunch_02_over = new Image();
		buttonsLaunch_02_over.src = "https://bucket.worldofbits.brown.edu/press/msnbc_reuters_files/images/buttons/launch/buttonsLaunch_02-over.gif";
		buttonsLaunch_02_down = new Image();
		buttonsLaunch_02_down.src = "https://bucket.worldofbits.brown.edu/press/msnbc_reuters_files/images/buttons/launch/buttonsLaunch_02-down.gif";
		buttonsLaunch_02_sel = new Image();
		buttonsLaunch_02_sel.src = "https://bucket.worldofbits.brown.edu/press/msnbc_reuters_files/images/buttons/launch/buttonsLaunch_02-sel.gif";
	}
}
VT_preloadImages();

function VT_launchMouseOver(id) 
{
	var x;
	if (!id) return;
	if (!buttonsLaunch_02_over) return;
	if ((x=VT_findObj(id))==null) return;
	if (x.src == buttonsLaunch_02_sel.src) return;
	x.src = buttonsLaunch_02_over.src;
}
function VT_launchMouseOut(id) 
{
	var x;
	if (!id) return;
	if (!buttonsLaunch_02) return;
	if ((x=VT_findObj(id))==null) return;
	if (x.src == buttonsLaunch_02_sel.src) return;
	x.src = buttonsLaunch_02.src;
}
function VT_launchMouseDown(id) 
{
	var x;
	if (!id) return;
	if (!buttonsLaunch_02_down) return;
	if ((x=VT_findObj(id))==null) return;
	x.src = buttonsLaunch_02_down.src;
}
function VT_launchMouseUp(id) 
{
	var x;
	if (!id) return;
	if (!buttonsLaunch_02_sel) return;
	if ((x=VT_findObj(id))==null) return;
	x.src=buttonsLaunch_02_sel.src;
}