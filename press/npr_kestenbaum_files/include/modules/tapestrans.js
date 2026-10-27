function addSurfaidVarToLink(linkToUse)
{	charToAdd = "?";
	if(linkToUse.indexOf("?") != -1)
		{
			charToAdd = "&";
		}
	return charToAdd;
}


var rB = new Array();

// NPR transcripts posted 12/22/03 by jherb
rB[0] = new Array();
rB[0][0] = "/transcripts/";
rB[0][1] = "http://www.npr.org/banners/transcripts/banner_transcripts_miss160.gif";
rB[0][2] = "NPR tapes and transcripts";

rB[1] = new Array();
rB[1][0] = "/transcripts/";
rB[1][1] = "http://www.npr.org/banners/transcripts/banner_transcripts_read160.gif";
rB[1][2] = "NPR tapes and transcripts";

rB[2] = new Array();
rB[2][0] = "/transcripts/";
rB[2][1] = "http://www.npr.org/banners/transcripts/banner_transcripts_word160.gif";
rB[2][2] = "NPR tapes and transcripts";

// NPR series CDs posted 12/29/03 by jherb
rB[3] = new Array();
rB[3][0] = "http://www.npr.org/transcripts/seriesedit.html";
rB[3][1] = "http://www.npr.org/graphics/transcripts/winter2004/n_r_cd_own.gif";
rB[3][2] = "NPR tapes and transcripts";

rB[4] = new Array();
rB[4][0] = "http://www.npr.org/transcripts/seriesedit.html";
rB[4][1] = "http://www.npr.org/graphics/transcripts/winter2004/n_r_cd_feed.gif";
rB[4][2] = "NPR tapes and transcripts";

var rb_num = Math.floor(Math.random()*rB.length);

var rBout = '<div class="dynamicbucket banner">' +
	'	<div class="buckettop">&nbsp;</div>' +
	'	<div class="bucketcontent">' +
	'		<div class="story">' +
	'			<p><a href="' + rB[rb_num][0] + addSurfaidVarToLink(rB[rb_num][0]) + 'npr_lr_inc" target="' + rB[rb_num][3] + '"><img src="' + rB[rb_num][1] + '" width="158" height="88" border="0" alt="' + rB[rb_num][2] + '" class="underwriting" /></a></p>' +
	'			<div class="spacer">&nbsp;</div>' +
	'		</div>' +
	'	</div>' +
	'	<div class="bucketbottom">&nbsp;</div>' +
	'</div>';

document.write(rBout);