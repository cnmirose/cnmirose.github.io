// Live Vote 4.0; Author = Brenden West. Updated - 11-20-03
// Formats: 1=choices in n cols, 4=scorecard, 5=comparo

/* 

TO DO

 - remove LEV dependency on .asp extension
 
*/

var sUA = navigator.appName.toLowerCase();
var sSpacer = "<SPACER TYPE=BLOCK WIDTH=1>";
var sPrevVote = (location.href.indexOf("pv=") > 0) ? location.href.substring(location.href.indexOf("pv=")+3) : "";
var levCounter = 60;
var mediaDomain = "http://msnbcmedia.msn.com";

function surveyDefaults(oData) {

	if (!oData.appWidth) { oData.appWidth = 152; }
	if (!oData.appBG) { oData.appBG = ""; }
	else { oData.appBG = oData.appBG.replace("bgcolor=","background-color:") + ";"; }

	if (!oData.appHeader) {	oData.appHeader=""; }
	else if (oData.appHeader[0] && oData.appHeader[0].indexOf("<!--none-->") > -1) { oData.appHeader=""; }
	if (!oData.appDeck) { oData.appDeck = new Array("",""); }
	else if (typeof oData.appDeck == "string") { oData.appDeck = oData.appDeck.split("|"); }

	if (!oData.appFooter) { oData.appFooter = ""; }
	if (oData.appFmt == null) { oData.appFmt = 1; }

	if (!oData.sBodyFont) { oData.sBodyFont = ""; }
	oData.sBodyFont = "font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 70%; font-weight: normal; line-height: 140%;" + oData.sBodyFont;

	if (!oData.sHedStyle) { oData.sHedStyle=""; }
	oData.sHedStyle = "font-weight: bold;text-transform:uppercase;" + oData.sHedStyle;

	if (!oData.sDeckStyle) { oData.sDeckStyle="font-weight: bold;color:#666;padding:4px 0px 4px 0px;"; }
	if (!oData.sSubHedStyle) { oData.sSubHedStyle="font-size: 14px; font-weight:bold;"; }
	if (!oData.headlineStyle) { oData.headlineStyle = "font-weight: bold;"; }

	if (oData.sBarImg) { oData.imgBar = oData.sBarImg; }
	if (!oData.imgBar) { oData.imgBar = mediaDomain + "/i/msnbc/Components/ColorBoxes/Styles/ColorboxImages(globalonlyplease)/dotRed.gif"; }

	if (oData.iChoiceCols) { oData.columns = oData.iChoiceCols; }
	else if (!oData.columns) { oData.columns=1; }

	if (!oData.sResponseUrl) { oData.sResponseUrl = (sUA.indexOf("webtv") > -1) ? location.href : ""; }

	if (oData.bDhtml == null) { oData.bDhtml = (document.all && !oData.sResponseUrl) ? 1 : 0; }
	if (oData.bVoting == null) { oData.bVoting=1; }
	if (oData.bResults == null) { oData.bResults=1; }
	if (oData.bSort == null) { oData.bSort=0; }
	if (oData.bDispQNums == null) { oData.bDispQNums=0; }

	if (oData.sSubmitImg) { oData.butSubmit = oData.sSubmitImg; }
	else if (!oData.butSubmit) { oData.butSubmit = "http://media.msnbc.msn.com/i/msnbc/Components/Art/SITEWIDE/buttons/vote.gif"; } 

	if (!oData.sVotePrompt) { oData.sVotePrompt = "Vote to see results"; }
	if (!oData.sDisclaimer) { oData.sDisclaimer = (!oData.sDisclaimer) ? "Not a scientifically valid survey. <a href=http://msnbc.msn.com/id/3704453/ target=_top><u>Click to learn more</u></a>." : oData.sDisclaimer; }
	if (!oData.sAnswers) { oData.sAnswers=""; }
	if (!oData.sAnsText) { oData.sAnsText=""; }
	if (!oData.sSubHeds) { oData.sSubHeds=""; }
	if (!oData.rowAlt) { oData.rowAlt = "EEEEEE"; }
	if (!oData.rowSpacer) { oData.rowSpacer = 15; }
	if (!oData.copyMargin) { oData.copyMargin = 9; }
	if (!oData.copyBorder) { oData.copyBorder = "border:0px;"; }
	if (!oData.offlineHed) { oData.offlineHed = "NBC/WSJ"; }

	// LEV only
	if (oData.bCancel == null) { oData.bCancel = 1; }
	if (oData.bVoteAgain == null && oData.surveyType == "lev") { oData.bVoteAgain = 1; }
	if (oData.bRequireAll == null) { oData.bRequireAll=0; }
}

function getSurveyStyles(oData) {
  	var LVname = oData.ID;
	var appStyle = oData.sBodyFont;
	if (oData.sAlign == "left" || oData.sAlign == "right") {
		var sAppPad = (oData.sAlign=="right") ? "left" : "right";  
		appStyle += " float:" +oData.sAlign+ ";margin-top:5;margin-bottom:5;margin-" +sAppPad+ ":5;";
	}
	var sTmp = "<STYLE type=text/css>";
	sTmp += " .app" +LVname+ " { width:" +oData.appWidth+ "px;" + oData.appBG + appStyle+ "}";
	sTmp += " .hed" +LVname+ " { " +oData.sHedStyle+ " }";
	sTmp += " .deck" +LVname+ " { "  +oData.sDeckStyle+ " }";
	sTmp += " .box" +LVname+ " { " + oData.sBodyFont + ";" +oData.copyBorder+ "  ;font-size: 100%; }";
	sTmp += " .subhed" +LVname+ " { " +oData.sSubHedStyle+ " }";
	sTmp += " .headline" +LVname+ " { "  +oData.headlineStyle+ ";}";
	sTmp += "</STYLE>";
	return sTmp;
}

function DisplayLV(oData) {
  if (oData) {
  	surveyDefaults(oData);
  	document.write(getSurveyStyles(oData));

	// conditional settings

  	if (oData.bVoting == 0) { act = "results"; }
	if (location.href.indexOf("refer=vote") > 0) { // LEV only
		act="results"; 
	}

	if (oData.appFmt == 4) { // scorecard
		var aTmp = oData.subHeds.split("^");
		if (oData.appWidth == 148) { oData.appWidth = 360; }
		oData.itemsPerSubHed = (aTmp[1]) ? aTmp.split("|") : "";
		oData.subHeds = aTmp[0].split("|");
	}

  	if (!oData.bResults) { oData.sVotePrompt = ""; oData.sDisclaimer=""; }
	if (oData.sAnswers) { 
		oData.butSubmit = "Submit";
		oData.appDeck[1] += "<b>Correct answers are shown in <font color=009900><b>green</b></FONT>. Percentages indicate how other MSNBC readers responded.";
	}
	if  (act=="vote" && oData.bVoting) {
		if (oData.surveyType && oData.surveyType == "lev") {
			LEVDisplayForm(oData);
		} else {
			LVDisplayForm(oData);
		}			
		if (oData.bDhtml) {
			LVDisplayRes(oData);
		}
	} else {
		LVDisplayRes(oData);
		if (oData.bVoteAgain && oData.bVoting) { setTimeout("SetClock()",1000); }
	}
  }
}



function Vote(LVname,bDhtml) {
	var bVoted = false;
	var F = eval("document.fm_"+LVname);
	var qstr = F.elements[0].name+"="+F.elements[0].value+"&" + F.elements[1].name+"="+F.elements[1].value+"&"
	for (var i=2;i<F.elements.length;i++) {
		if (F.elements[i].type=="radio" && F.elements[i].checked) {
			qstr += F.elements[i].name +'=' + F.elements[i].value +'&'
			bVoted = true;
		} else if  ((F.elements[i].type=="text" || F.elements[i].type=="hidden") && F.elements[i].value!="") {
			qstr += F.elements[i].name +"=" + F.elements[i].value +"&";
		}
	}
	if (!bVoted) {
		if (F.writeinopt) {
			if (F.writein.value != "") { 
				F.Q1[F.Q1.length-1].checked = true;
				Vote(LVname);
			 } else {
				alert("Please make a choice before submitting your vote.");
			 }
		} else { alert("Please make a choice before submitting your vote."); }
	}
	else {
		if (bDhtml) {
			eval("document.all.lv_"+LVname+"[1].style.display=''");
			eval("document.all.lv_"+LVname+"[0].style.display='none'");
			C = eval("document.lvPoster_"+LVname);
			C.src = "http://msnbc.msn.com/apps/modules/livevote/vote.asp?t=2&"+qstr
		} else {
			F.submit();
		}
	}
}

function LEVVote(LVname) {
	var sQname = "";
	var sVtmp = "";
	var bChecked=false;
	var bVoted = false;
	var F = eval("document.fm_"+LVname);
	var qstr = F.elements[0].name+"="+F.elements[0].value+"&" + F.elements[1].name+"="+F.elements[1].value+"&"

	for (var i=2;i<F.elements.length;i++) {
		if (F.elements[i].type=="radio") {
			if (F.elements[i].name != sQname) { 
				bChecked=false;
				sQname = F.elements[i].name;
			}
			if (F.elements[i].checked) {
				qstr += F.elements[i].name +"=" + F.elements[i].value +"&";
				sVtmp += F.elements[i].value + "|"
				bChecked=true;
				bVoted=true; 
			}
			sNextQname = (F.elements[i+1]) ? F.elements[i+1].name : "x";
			if (sQname != sNextQname && !bChecked) {
				sVtmp += "|";
				if (window.bRequireAll) {
					alert("Please answer question #" + F.elements[i].name.substr(1,1));bVoted=false;break;
				}
			}
		} else if  ((F.elements[i].type=="text" || F.elements[i].type=="hidden") && F.elements[i].value!="") {
			qstr += F.elements[i].name +"=" + F.elements[i].value +"&";
		}
	}

	if (!bVoted) {
		if (F.writeinopt) {
			if (F.writein.value != "") { 
				F.Q1[F.Q1.length-1].checked = true;
				LEVVote(LVname);
			 } else {
				alert("Please make a choice before submitting your vote.");
			 }
		} else if (!window.bRequireAll) { alert("Please make a choice before submitting your vote."); }
	}
	else {
		if (document.all && bDhtml) {
			eval("document.all.lv_"+LVname+"[1].style.display=''");
			eval("document.all.lv_"+LVname+"[0].style.display='none'");
			if (bVoteAgain) { setTimeout("SetClock()",1000); }
			C = eval("document.lvPoster_"+LVname);
			sPrevVote = sVtmp.substring(0,sVtmp.length-1);
			C.src = F.action + "?t=2&"+qstr
		} else {
			F.submit();
		}
	}
}


function LVDisplayForm(aLV) {
	var sTmp = "";
	var qNum = 0;
	var qNumDisp = "";
  	var LVname = aLV.ID;

	// CONSTRUCT vote button
  	var butSubmit = "<BUTTON onclick=Vote(\"" +LVname+ "\","+aLV.bDhtml+");>" + aLV.butSubmit + "</BUTTON>";

	if (aLV.butSubmit.indexOf("http://") == 0) { 
		butSubmit = "<a href=\"javascript:Vote('" +LVname+ "',"+aLV.bDhtml+");\"><img src="https://bucket.worldofbits.brown.edu/press/msnbc_reuters_files/%2B%20aLV.butSubmit%20%2B" name=b_" +LVname+ " border=0 onmouseover=SwapImage('b_" +LVname+ "',1); onmouseout=SwapImage('b_" +LVname+ "',0);></a>"; 
	} else if (aLV.butSubmit.indexOf("<") == 0) { 
		butSubmit = "<a href=\"javascript:Vote('" +LVname+ "',"+aLV.bDhtml+");\">" + aLV.butSubmit+"</a>"; 
	}

	document.write("<table ID=\"lv_"+LVname+"\" width=" + aLV.appWidth + " cellpadding=0 cellspacing=0 class=app" + LVname + " " + aLV.appBG +">");
	document.write("<form method=post action=\"http://msnbc.msn.com/apps/modules/livevote/vote.asp\" name=\"fm_" + LVname + "\"><input type=hidden name=LVname value=\"" + LVname + "\"><input type=hidden name=author value=" + author + ">");

	if (aLV.sResponseUrl) { document.write("<input type=hidden name=res value=" + aLV.sResponseUrl + ">"); }
	if (aLV.appFmt != 4) {
		var widthQ = (aLV.appWidth-14*aLV.columns-2*aLV.copyMargin-10*(aLV.columns-1))/aLV.columns; 

		var nToteCols = 2 + 2*aLV.columns + aLV.columns-1;

		if (aLV.appHeader) {
			document.write("<TR class=hed"+LVname+" valign=middle><TD height=20>" + aLV.appHeader + "</TD><TD width=10>" +sSpacer+ "</TD></TR>");
		}

		document.write("<tr><td colspan=2><table cellpadding=0 cellspacing=0 class=box" +LVname+ ">");

		if (aLV.appDeck[0]) {
			document.write("<TR><TD width=" +aLV.copyMargin+ ">" +sSpacer+ "</TD><TD COLSPAN=" +(nToteCols-2)+ " class=deck"+LVname+">" +aLV.appDeck[0]+ "</TD><TD width=" +aLV.copyMargin+ ">" +sSpacer+ "</TD></TR>");
		}

		for (i=1;i<aLV.length;i++) {
			if (aLV[i]) {
				if (aLV.bDispQNums) { qNum++; qNumDisp = qNum + ". "; }
				if (i > 1) {
					document.write("<TR><TD colspan=" +nToteCols+ " height=25>" +sSpacer+ "</TD></TR>");
				}
				document.write("<TR><TD width=" +aLV.copyMargin+ ">" +sSpacer+ "</TD><TD colspan=" +(nToteCols-2)+ " class=headline" +LVname+ ">" + qNumDisp + aLV[i][0][0] + "</b></TD><TD width=" +aLV.copyMargin+ ">" +sSpacer+ "</TD></TR><TR><TD colspan=" +nToteCols+ " height=10>" +sSpacer+ "</TD></TR>");
				var cntr = 0
				for (var j=1;j<aLV[i].length;j++) {
					if (aLV[i][j]) {
						if (cntr % aLV.columns == 0) { document.write("<TR><TD colspan=" +nToteCols+ " height=2>" +sSpacer+ "</TD></TR><TR VALIGN=TOP>"); }
						document.write("<TD width=" +aLV.copyMargin+ ">" +sSpacer+ "</TD><TD width=14><input type=radio name=Q" + i + " value=" + j + "></TD><TD width=" +widthQ+ ">"+ aLV[i][j][0] +"</TD>");
						if (cntr+1 % aLV.columns == 0) { document.write("<TD width=" +aLV.copyMargin+ ">" +sSpacer+ "</TD></TR>"); }
						cntr++
					}
				}
			}
		}
		document.write("<tr><td colspan=" +nToteCols+ " height=20>" +sSpacer+ "</td></tr><tr><td valign=top>" +sSpacer+ "</td><td valign=top colspan=" +(nToteCols-2)+ ">" +butSubmit + "<br><font class=credit style=font-size:90%>"+aLV.sVotePrompt+"</font></td><TD width=" +aLV.copyMargin+ ">" +sSpacer+ "</TD></tr><tr><td colspan=" +nToteCols+ " height=10>" +sSpacer+ "</td></tr>");

		document.write("</table></td></tr>"); // end box

		if (aLV.appFooter) { document.write("<tr><td colspan=2 class=credit style=font-size:100%;background-color:white;>" +aLV.appFooter+ "</td></tr>"); }

	} else if (aLV.appFmt==4) {
		var iQnum = 1;
		var nGroups = aLV.subHeds.length;
		var nItems = (aLV.length-1)/nGroups;

		if (aLV.appHeader[0]) {
			document.write("<TR valign=middle><TD colspan=3 class=hed"+LVname+">" + aLV.appHeader[0] + "</TD></TR>");
		}
		if (aLV.appDeck[0]) {
			document.write("<TR><TD colspan=3 width=" +aLV.appWidth+ " class=deck"+LVname+">" +aLV.appDeck[0]+ "</TD></TR>");
		}

		for (i=0;i<nGroups;i++) {
			if (aLV.itemsPerSubHed.length>1) { // unequal # of items
				nItems = aLV.itemsPerSubHed[i];
			}
			document.write("<tr valign=bottom><td width=" +(aLV.appWidth-130)+ " class=subhed"+LVname+">" +aLV.subHeds[i]+ "</td><td align=right width=120><img src=http://www.msnbc.com/modules/surveys/images/hed_stars.gif height=45 width=115 border=0></td></tr><tr><td colspan=3 bgcolor=" +aLV.rowAlt +" height=3>" +sSpacer+ "</td></tr>");

			for (j=0;j<nItems;j++) {
				var bgcolor = (j % 2 == 0) ? "" : "BGCOLOR="+aLV.rowAlt;
				document.write("<tr valign=middle " +bgcolor+ "><td width=" +(aLV.appWidth-130)+ " class=lvtext" +LVname+ ">&nbsp;"+aLV[iQnum][0][0]+ "</td><td width=120>");

				for (var k=1;k<aLV[iQnum].length;k++) {
					document.write("<input type=radio value=" +k+ " name=Q" + iQnum + "> ");
				}

				document.write("</td><td width=5>" +sSpacer+ "</td></tr>");
				iQnum++;
			}

		}

		document.write("<TR><TD colspan=3>" +butSubmit + "</TD></TR>");
		if (aLV.appFooter) { document.write("<tr><td colspan=3 class=credit style=font-size:100%;>" +aLV.appFooter+ "</td></tr>"); }
	}

	document.write("</FORM></TABLE><img src=http://www.msnbc.com/i/c.gif height=1 width=1 name=lvPoster_" +LVname+ ">");
}

function LVDisplayRes(aLV) {
	var sTmp = "";
	var qNum = 0;
	var qNumDisp = "";
  	var LVname = aLV.ID;
	var sVisible = (act=="vote") ? " style='display:none' " : "";
	document.write("<table ID=\"lv_"+LVname+"\" " +sVisible+ " width=" + aLV.appWidth + " border=0 cellpadding=0 cellspacing=0 class=app" + LVname + " " + aLV.appBG +">");
	if (aLV.appFmt < 4) {	// vertical columns
		var nColWidth = (aLV.appWidth-10*aLV.columns)/aLV.columns;
		var nToteCols = 2*aLV.columns;

		if (aLV.appHeader) {
			document.write("<TR class=hed"+LVname+" valign=middle><TD height=20>" + aLV.appHeader + "</TD><TD width=10>" +sSpacer+ "</TD></TR>");
		}

		document.write("<tr><td colspan=2><table cellpadding=0 cellspacing=0 class=box" +LVname+ ">");

		if (aLV.appDeck[1]) {
			document.write("<TR><TD width=" +aLV.copyMargin+ ">" +sSpacer+ "</TD><TD  class=deck"+LVname+" colspan=" +nToteCols+ ">" +aLV.appDeck[1]+ "</TD><TD width=" +aLV.copyMargin+ ">" +sSpacer+ "</TD></TR>");
		}
		if (aLV.bResults) {
			if (aLV.sAnswers) {
				var sAnswers = aLV.sAnswers.split(",");
				var sAnsText = aLV.sAnsText.split("|");
			}

		for (i=1;i<aLV.length;i++) {
			if (aLV[i]) {
				if (aLV.bDispQNums) { qNum++; qNumDisp = qNum + ". "; }
				if (i > 1) {
					document.write("<TR><TD colspan=" +nToteCols+ " height=25>" +sSpacer+ "</TD></TR>");
				}
				var spacer = (i>1) ? '<br>' : '';
				var sPlural = (aLV[i][0][1] != 1) ? "s" : "";
				document.write("<TR valign=top><TD width=" +aLV.copyMargin+ ">" +sSpacer+ "</TD><TD colspan=" +nToteCols+ " class=headline" +LVname+ ">" + qNumDisp + aLV[i][0][0] + " &nbsp;&nbsp;<FONT class=credit style=font-size:90%;>* " + aLV[i][0][1] + " response" +sPlural+ "</FONT></TD><TD width=" +aLV.copyMargin+ ">" +sSpacer+ "</TD></TR><TR><TD colspan=" +nToteCols+ " height=10>" +sSpacer+ "</TD></TR>");
				var cntr = 0
				for (var j=1;j<aLV[i].length;j++) {
					if (aLV[i][j]) {
						if (aLV[i][j][1] > 0) {
							nPercent = Math.round(100*(aLV[i][j][1]/aLV[i][0][1]));

							var nBarWidth = Math.round((nColWidth-65) * (aLV[i][j][1]/aLV[i][0][1]));
							sImg = "<IMG SRC='" +aLV.imgBar+ "' width="+ nBarWidth +" height=10>";
						} else {
							nPercent = 0;
							sImg = "";
						}
						sTmp = aLV[i][j][0];
						if (aLV.sAnswers && j==sAnswers[i-1]) {
							sTmp = "<font color=009900><b>" + sTmp + ": </b></font>";
							if (sAnsText[i-1]) { sTmp += sAnsText[i-1]; }
						}

						if (cntr % aLV.columns == 0) { document.write("<TR><TD colspan=" +nToteCols+ " height=4>" +sSpacer+ "</TD></TR><TR valign=top>"); }

						document.write("<TD width=" +aLV.copyMargin+ ">" +sSpacer+ "</TD><TD width=" +nColWidth+">" + sTmp + "<BR><b>" + nPercent +"</b>% " +sImg+ "</TD>");
						if (cntr+1 % aLV.columns == 0) { document.write("</TR>"); }
						cntr++
					}
				}
			}
		}
		}

		// LEV revote
		if (aLV.bVoting && aLV.bVoteAgain) {
			document.write("<form name=frmsurvey><TR><TD width=" +aLV.copyMargin+ ">" +sSpacer+ "</TD><TD colspan=" +(nToteCols-1)+ ">If you change your mind, you can vote again in <INPUT type=text name=clock value=60 size=3 disabled> seconds.<p><BUTTON onclick=CheckVoteTime();>Vote again</BUTTON></TD></TR></form>");
		}

		document.write("<tr><td colspan=" +nToteCols+ " height=20>" +sSpacer+ "</td></tr><tr><TD width=" +aLV.copyMargin+ ">" +sSpacer+ "</TD><td colspan=" +nToteCols+ " class=credit style=font-size:100%>" + aLV.sDisclaimer+ "</td></tr><tr><td colspan=" +nToteCols+ " height=10>" +sSpacer+ "</td></tr>");

		document.write("</table></td></tr>"); // end box

		if (aLV.appFooter) { document.write("<tr><td colspan=2 class=credit style=font-size:100%;background-color:white;>" +aLV.appFooter+ "</td></tr>"); }

	} else if (aLV.appFmt==4) {
		var sAltColor = "bgcolor="+ aLV.rowAlt;
		if (aLV.appHeader[1]) {
			document.write("<TR valign=middle><TD colspan=5 class=hed"+LVname+">" + aLV.appHeader[1] + "</TD></TR>");
		}		
		if (aLV.appDeck[1]) {
			document.write("<TR><TD colspan=5>" +aLV.appDeck[1]+ "</TD></TR>");
		}
		if (aLV.bResults) {
			var sPlural = (aLV[1][0][1] != 1) ? "s" : "";
			document.write("<TR><TD colspan=5 class=headline" +LVname+ ">" + aLV[1][0][1] + " &nbsp;&nbsp;<FONT FACE=verdana SIZE=1 style=font-weight:normal;>* " + aLV[1][0][1] + " response" +sPlural+ "</FONT></TD></TR>");

			var nGroups = aLV.subHeds.length;
			var nItems = (aLV.length-1)/nGroups;
			iQnum = 1;

		for (i=0;i<nGroups;i++) {
			document.write("<tr valign=bottom><td colspan=2 class=subhed"+LVname+">" +aLV.subHeds[i]+ "</td><td colspan=2 align=center><b>Rating</B></td><TD width=10>" +sSpacer+ "</TD></tr><tr><td colspan=4 bgcolor=" +aLV.rowAlt+ " height=2>" +sSpacer+ "</td><TD width=10>" +sSpacer+ "</TD></tr>");

			if (aLV.itemsPerSubHed.length>1) { // unequal # of items
				nItems = aLV.itemsPerSubHed[i];
			}
			var Rating = 0;
			for (j=0;j<nItems;j++) { // items in this group
				var bgcolor = (j % 2 == 0) ? "" : sAltColor;

				var nQTotVotes = aLV[iQnum][0][1];
				var subRating = 0;
				for (var nOpt=1;nOpt<aLV[iQnum].length;nOpt++) { 
					subRating += nOpt * aLV[iQnum][nOpt][1];
				}
				subRating = (nQTotVotes) ? subRating/nQTotVotes : 0;
				Rating += subRating;
				subRating = Math.round(subRating*100)/100

				document.write("<tr valign=middle " +bgcolor+ "><td width=5>" +sSpacer+ "</td><td width=" +(aLV.appWidth-130)+ " class=lvtext" +LVname+ ">"+aLV[iQnum][0][0]+"</td><td WIDTH=70>" +MakeStars(subRating)+ "</td><td WIDTH=45 class=lvtext" +LVname+ ">" +subRating+ "</td><TD width=10>" +sSpacer+ "</TD></tr>");
				iQnum++;
			}

			// maybe make this conditional
			Rating = Math.round((Rating/nItems)*100)/100
			document.write("<tr><td colspan=4 bgcolor=" +aLV.rowAlt+ " height=2>" +sSpacer+ "</td><TD width=10>" +sSpacer+ "</TD></tr><tr><td colspan=2><b>Overall</b></td><td WIDTH=70><b>" +MakeStars(Rating)+ "</b></td><td WIDTH=45><b>" +Rating+ "</b></td></tr>");
			document.write("<tr><td colspan=5 bgcolor=" +aLV.rowAlt+ " height=2>" +sSpacer+ "</td><TD width=10>" +sSpacer+ "</TD></tr>");
		}
		} // end results

		// LEV revote
		if (aLV.bVoting && aLV.bVoteAgain) {
			document.write("<form name=frmsurvey><TR><TD height=4 colspan=6>" +sSpacer+ "</TD></TR><TR><TD width=" +aLV.copyMargin+ ">" +sSpacer+ "</TD><TD colspan=3>If you change your mind, you can vote again in <INPUT type=text name=clock value=60 size=3 disabled> seconds.<p><BUTTON onclick=CheckVoteTime();>Vote again</BUTTON></TD><TD width=" +aLV.copyMargin+ ">" +sSpacer+ "</TD></TR></form>");
		}
		
		document.write("<TR><TD colspan=5>"+ aLV.sDisclaimer+ "</TD></TR>");
		if (aLV.appFooter) { document.write("<tr><td colspan=5 class=credit style=font-size:100%;>" +aLV.appFooter+ "</td></tr>"); }

	} else if (aLV.appFmt==5) { // COMPARISON
		var sAltColor = "bgcolor="+ aLV.rowAlt;

		if (aLV.appHeader) {
			document.write("<TR class=hed"+LVname+" valign=middle><TD colspan=6 height=20>" + aLV.appHeader + "</TD></TR>");
		}
		if (aLV.appDeck[1]) {
			document.write("<TR><TD class=deck"+LVname+" colspan=6>" +aLV.appDeck[1]+ "</TD></TR>");
		}
		document.write("<TR><TD height=10 colspan=6>" +sSpacer+ "</TD></TR><TR><TD colspan=6><font size=1>* Percentages may not total to 100% for each question due to non-responses</TD></TR>");

		for (i=1;i<aLV.length;i++) {
			if (aLV[i]) {
				if (aLV.bDispQNums) { qNum++; qNumDisp = qNum + ". "; }
				var spacer = (i>1) ? '<br>' : '';
				var sPlural = (aLV[i][0][1] != 1) ? "s" : "";
				document.write("<TR><TD colspan=6 height=" +aLV.rowSpacer+ ">" +sSpacer+ "</TD></TR><TR valign=top><TD width=" +aLV.copyMargin+ ">" +sSpacer+ "</TD><TD colspan=4 class=headline" +LVname+ ">" + qNumDisp + aLV[i][0][0] + "&nbsp;&nbsp;<FONT class=credit style=font-size:90%>* " + aLV[i][0][1] + " web response" +sPlural+ "</FONT></TD><TD width=" +aLV.copyMargin+ ">" +sSpacer+ "</TD></TR><TR><TD colspan=6 height=5>" +sSpacer+ "</TD></TR><TR valign=bottom><TD width=10>" +sSpacer+ "</TD><TD  class=textSmallGrey style=font-size:90%>RESPONSES</TD><TD width=5>" +sSpacer+ "</TD><TD width=80 align=right class=textSmallGrey style=font-size:100%>WEB&nbsp;</TD><TD width=80 align=right class=textSmallGrey style=font-size:100%>" +aLV.offlineHed+ "&nbsp;</TD><TD width=10>" +sSpacer+ "</TD></TR><TR><TD width=10>" +sSpacer+ "</TD><TD colspan=4 height=1 bgcolor=cccccc>" +sSpacer+ "</TD><TD width=10>" +sSpacer+ "</TD></TR>");
				var cntr=0;
				for (var j=1;j<aLV[i].length;j++) {
					if (aLV[i][j]) {
						var bgcolor = (cntr % 2 == 0) ?  sAltColor : "";
						if (aLV[i][j][1] > 0) {
							nPercent = Math.round(100*(aLV[i][j][1]/aLV[i][0][1]));
						} else {
							nPercent = 0;
						}

						document.write("<TR><TD width=10 height=20>" +sSpacer+ "</TD><TD " +bgcolor+ " style=padding-left:5;>" +aLV[i][j][0]+ "</TD><TD width=5 " +bgcolor+ ">" +sSpacer+ "</TD><TD width=80 align=right " +bgcolor+ "><b>" +nPercent+ "</b>%&nbsp;</TD><TD width=80 align=right " +bgcolor+ "><b style=color:#666666>" +nbcres[i-1][j-1]+ "</b>%&nbsp;</TD><TD width=10>" +sSpacer+ "</TD></TR>");
						cntr++;
					}
				}
			}
		}
		
		// LEV revote
		if (aLV.bVoting && aLV.bVoteAgain) {
			document.write("<form name=frmsurvey><TR><TD height=4 colspan=6>" +sSpacer+ "</TD></TR><TR><TD width=" +aLV.copyMargin+ ">" +sSpacer+ "</TD><TD colspan=3>If you change your mind, you can vote again in <INPUT type=text name=clock value=60 size=3 disabled> seconds.<p><BUTTON onclick=CheckVoteTime();>Vote again</BUTTON></TD><TD width=" +aLV.copyMargin+ ">" +sSpacer+ "</TD></TR></form>");
		}	
		if (aLV.appFooter) { document.write("<TR><TD colspan=6 height=8>" +sSpacer+ "</TD></TR><tr><td colspan=6 class=credit style=font-size:100%;>" +aLV.appFooter+ "</td></tr>"); }
	}
	document.write("</TABLE>");
}


function LEVDisplayForm(aLV) {
	var sTmp = "";
	var qNumDisp = "";
	var LVname = aLV.ID;

	document.write("<table ID=\"lv_" + LVname + "\" width=" + aLV.appWidth + " border=0 cellpadding=0 cellspacing=0 class=app" + LVname + " " + aLV.appBG +">");
	document.write("<form method=post action=\"http://msnbc.msn.com/apps/modules/lev/vote.asp\" name=\"fm_" + LVname + "\"><input type=hidden name=LVname value=\"" + LVname + "\"><input type=hidden name=author value=" + author + "><input type=hidden name=numq value=" + (aLV.length-1) + ">");
	if (aLV.bCancel) { document.write("<input type=hidden name=cancel value=" + sPrevVote + ">"); }

	if (aLV.appFmt != 4) {
		var widthQ = (aLV.appWidth-14*aLV.columns-2*aLV.copyMargin-10*(aLV.columns-1))/aLV.columns; 
		var nToteCols = 2 + 2*aLV.columns + aLV.columns-1;
		if (aLV.appHeader) {
			document.write("<TR class=hed"+LVname+" valign=middle><TD height=20>" + aLV.appHeader + "</TD><TD width=10>" +sSpacer+ "</TD></TR>");
		}

		document.write("<tr><td colspan=2><table cellpadding=0 cellspacing=0 class=box" +LVname+ ">");

		if (aLV.appDeck[0]) {
			document.write("<TR><TD width=" +aLV.copyMargin+ ">" +sSpacer+ "</TD><TD COLSPAN=" +(nToteCols-2)+ " class=deck"+LVname+">" +aLV.appDeck[0]+ "</TD><TD width=" +aLV.copyMargin+ ">" +sSpacer+ "</TD></TR>");
		}

		for (i=1;i<aLV.length;i++) {
			if (aLV[i]) {
				if (aLV.bDispQNums) { qNum++; qNumDisp = qNum + ". "; }
				if (i > 1) {
					document.write("<TR><TD colspan=" +nToteCols+ " height=25>" +sSpacer+ "</TD></TR>");
				}
				document.write("<TR><TD width=" +aLV.copyMargin+ ">" +sSpacer+ "</TD><TD colspan=" +(nToteCols-2)+ " class=headline" +LVname+ ">" + qNumDisp + aLV[i][0][0] + "</b></TD><TD width=" +aLV.copyMargin+ ">" +sSpacer+ "</TD></TR><TR><TD colspan=" +nToteCols+ " height=10>" +sSpacer+ "</TD></TR>");
				var cntr = 0
				for (var j=1;j<aLV[i].length;j++) {
					if (aLV[i][j]) {
						if (cntr % aLV.columns == 0) { document.write("<TR><TD colspan=" +nToteCols+ " height=2>" +sSpacer+ "</TD></TR><TR VALIGN=TOP>"); }
						document.write("<TD width=" +aLV.copyMargin+ ">" +sSpacer+ "</TD><TD width=14><input type=radio name=Q" + i + " value=" + j + "></TD><TD width=" +widthQ+ ">"+ aLV[i][j][0] +"</TD>");
						if (cntr+1 % aLV.columns == 0) { document.write("<TD width=" +aLV.copyMargin+ ">" +sSpacer+ "</TD></TR>"); }
						cntr++
					}
				}
			}
		}
		document.write("<tr><td colspan=" +nToteCols+ " height=20>" +sSpacer+ "</td></tr><tr><td valign=top>" +sSpacer+ "</td><td valign=top colspan=" +(nToteCols-2)+ "><BUTTON onclick=LEVVote(\"" +LVname+ "\");>" + aLV.butSubmit + "</BUTTON><br><font class=credit style=font-size:90%>"+aLV.sVotePrompt+"</font></td><TD width=" +aLV.copyMargin+ ">" +sSpacer+ "</TD></tr><tr><td colspan=" +nToteCols+ " height=10>" +sSpacer+ "</td></tr>");

		document.write("</table></td></tr>"); // end box
		if (aLV.appFooter) { document.write("<tr><td colspan=2 class=credit style=font-size:100%;background-color:white;>" +aLV.appFooter+ "</td></tr>"); }

	} else if (aLV.appFmt==4) {
		var iQnum = 1;
		var nGroups = aLV.subHeds.length;
		var nItems = (aLV.length-1)/nGroups;

		if (aLV.appHeader[0]) {
			document.write("<TR valign=middle><TD colspan=3 class=hed"+LVname+">" + aLV.appHeader[0] + "</TD></TR>");
		}
		if (aLV.appDeck[0]) {
			document.write("<TR><TD colspan=3 width=" +aLV.appWidth+ " class=deck"+LVname+">" +aLV.appDeck[0]+ "</TD></TR>");
		}

		for (i=0;i<nGroups;i++) {
			if (aLV.itemsPerSubHed.length>1) { // unequal # of items
				nItems = aLV.itemsPerSubHed[i];
			}
			document.write("<tr valign=bottom><td width=" +(aLV.appWidth-130)+ " class=subhed"+LVname+">" +aLV.subHeds[i]+ "</td><td align=right width=120><img src=/modules/surveys/images/hed_stars.gif height=45 width=115 border=0></td></tr><tr><td colspan=3 bgcolor=" +aLV.rowAlt +" height=3>" +sSpacer+ "</td></tr>");

			for (j=0;j<nItems;j++) {
				var bgcolor = (j % 2 == 0) ? "" : "BGCOLOR="+aLV.rowAlt;
				document.write("<tr valign=middle " +bgcolor+ "><td width=" +(aLV.appWidth-130)+ " class=lvtext" +LVname+ ">&nbsp;"+aLV[iQnum][0][0]+ "</td><td width=120>");

				for (var k=1;k<aLV[iQnum].length;k++) {
					document.write("<input type=radio value=" +k+ " name=Q" + iQnum + "> ");
				}

				document.write("</td><td width=5>" +sSpacer+ "</td></tr>");
				iQnum++;
			}

		}

		document.write("<TR><TD colspan=3><BUTTON onclick=LEVVote(\"" +LVname+ "\");>" + aLV.butSubmit + "</BUTTON></TD></TR>");
	}
	document.write("</FORM></TABLE><img src=http://www.msnbc.com/i/c.gif height=1 width=1 name=lvPoster_" +LVname+ ">");
}


function SortItems(aTmp1) {
	var aTmp = new Array(0,0);
	bChanged = true;
	while (bChanged) {
		bChanged = false;
		for (var j=1;j<aTmp1.length-1;j++) {	// for each option
			if (aTmp1[j][1]<aTmp1[j+1][1]) {
				aTmp[0] = aTmp1[j];
				aTmp[1] = aTmp1[j+1];

				aTmp1[j+1]=aTmp[0];
				aTmp1[j]=aTmp[1];
				bChanged = true;
			}
		}
	}
	return aTmp1;
}

function MakeStars(rating) {
	var stars = sSpacer;
	for (var n=0;n<parseInt(rating);n++) {
		stars += "<img src=http://www.msnbc.com/modules/surveys/images/star_whole.gif height=10 hspace=2 width=10>";
	}
	stars2 = rating-parseInt(rating);

	if (stars2>=.25 && stars2<.5) { stars += "<img src=http://www.msnbc.com/modules/surveys/images/star_1quarter.gif height=10 width=10 hspace=2>"; }

	else if (stars2>=.50 && stars2<.75) { stars += "<img src=http://www.msnbc.com/modules/surveys/images/star_half.gif height=10 width=10 hspace=2>"; }

	else if (stars2>=.75) { stars += "<img src=http://www.msnbc.com/modules/surveys/images/star_3quarter.gif height=10 width=10 hspace=2>"; }
	return stars;
}

function SetClock() {
	if (levCounter>0)
	{
	document.frmsurvey.clock.value = levCounter-1;
	}
	levCounter--;
	setTimeout("SetClock()",1000);
}

function CheckVoteTime() {
	if (levCounter <= 0)  {
		location.href = location.href.substring(0,location.href.lastIndexOf(".asp")+4) + "?pv=" + sPrevVote;
	}  else  {
		alert("Sorry. You must wait one minute between votes.\r You'll be able to vote again in " +levCounter+ " seconds.");
	}
}