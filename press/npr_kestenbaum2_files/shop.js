function addSurfaidVarToLink(linkToUse)
{	charToAdd = "?";
	if(linkToUse.indexOf("?") != -1)
		{
			charToAdd = "&";
		}
	return charToAdd;
}


var rB = new Array();

// NPR Shop Fall 2004 banners posted 30-Aug-04 by MKokoszka
rB[0] = new Array();
rB[0][0] = "http://shop.npr.org/catalog/Product.jhtml?PRODID=prod530002&CATID=9&TOPCATID=7&npr_ur_inc";
rB[0][1] = "http://www.npr.org/graphics/shop/fall2004/roots_117x90.gif";
//alt text in the next spot
rB[0][2] = "'I Heard it on NPR' CDs";


rB[1] = new Array();
rB[1][0] = "http://shop.npr.org/catalog/Product.jhtml?PRODID=prod530004&CATID=12&npr_ur_inc";
rB[1][1] = "http://www.npr.org/graphics/shop/fall2004/driveway2_117x90.gif";
rB[1][2] = "Driveway Moments 2";







var rb_num = Math.floor(Math.random()*rB.length);
var rBout = '<a href="' + rB[rb_num][0] + addSurfaidVarToLink(rB[rb_num][0]) + 'npr_ll_inc"><img src="' + rB[rb_num][1] + '" width="117" height="90" border="0" alt="' + rB[rb_num][2] + '" style="margin-left:11px;"></a><br />';

document.write(rBout);