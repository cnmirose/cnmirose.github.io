function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/; domain=.realclearpolitics.com";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

function loadSent(){
	var querystring=getQueryString();
	if(querystring['save']){
		clearClasses("loader");
		loadMap(querystring['save']);
	}
}

function clearClasses(myClass){
	var myEls=getElementsByClassName(document, "*", myClass);
	for(var i=0;i<myEls.length;i++){
		myEls[i].className=myClass;
	}
}

function loadMapLink(){
	var myLinks=getElementsByClassName(document, "a", "loader");
	for(var i=0;i<myLinks.length;i++){
		myLinks[i].onclick=function(){
			var myId=this.id;
			if(myId=="load-your"){
				var myMap=readCookie("rcpMap");
				if(myMap=="" || myMap==null){
					alert("We do not currently have a saved map for you.");
				}else{
					clearClasses("loader");
					this.className="loader on";
					loadMap(myMap);
				}
			}else{
				clearClasses("loader");
				var idParts=myId.split("-");
				var myLoadValue=document.getElementById(idParts[1]).value;
				this.className="loader on";
				loadMap(myLoadValue);
			}
		}
	}
}

function resetMapLink(){
	var myLink=document.getElementById("reset");
	myLink.onclick=function(){
		var myMap=document.getElementById("mapReset").value;
		loadMap(myMap);
	}
}

function sendToFriendLink(){
	var myLink=document.getElementById("send");
	myLink.onclick=function(){
		window.open('/sendpage/friend3.php?id=http://www.realclearpolitics.com/epolls/maps/obama_vs_mccain/?map=1&save='+mapString()+'&js=on','','width=520,height=475,scrollbars=no');
	}
}

function getQueryString ()
{
 var querystring = new Array;
 
 // parse current url into an array with the keys/values
 var q = String (document.location).split ('?')[1];
 if (!q) return false;
 q = q. split ('&');

 for (var i = 0 ; i < q.length; i++)
 {
   // for each key/value, split them at the '='
   // and add them to the qerystring array
   var o = q[i].split('=');
   querystring[o[0]] = o[1];
 }

 // return the querystring
 return querystring;
}

function loadMap(currentMap){
	var obama=document.getElementById("c1");
	var obama_solid=document.getElementById("c1s");
	var obama_leaning=document.getElementById("c1l");
	var mccain=document.getElementById("c2");
	var mccain_solid=document.getElementById("c2s");
	var mccain_leaning=document.getElementById("c2l");
	var toss=document.getElementById("c3");
	var toss_solid=document.getElementById("c3s");

	var obamaValues=obama.innerHTML.split(" ",2);
	var mccainValues=mccain.innerHTML.split(" ",2);
	var tossValues=toss.innerHTML.split(" ",3);
	var myMap=currentMap;
	var myOpVar;
	var myOpVarArray=new Array();
	var myColor;
	var myColorArray=new Array();
	var myAlpha;
	var myAlphaArray=new Array();
	var myStateArray=new Array();
	var myVarArray=new Array();
	var myVoteArray=new Array();
	var AllStates=new Array("Alabama","Alaska","Arizona","Arkansas","California","Colorado","Conneticut","Delaware","Dist. of Columbia","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming");
	var AllPolls=new Array("557","640","570","592","558","546","527","594","935","418","596","598","600","602","604","209","555","578","606","608","610","575","553","550","612","545","614","616","252","195","250","448","343","334","618","400","620","548","244","622","624","626","572","628","635","630","551","576","632","549","634");
	var myStateArray=new Array("AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"); 
	var myVoteArray=new Array("9","3","10","6","55","9","7","3","3","27","15","4","4","21","11","7","6","8","9","4","10","12","17","10","6","11","3","5","5","4","15","5","31","15","3","20","7","7","21","4","8","3","11","34","5","3","13","11","5","10","3");
	var obamaVotes=0;
	var obamaLeaningVotes=0;
	var obamaSolidVotes=0;
	var mccainVotes=0;
	var mccainLeaningVotes=0;
	var mccainSolidVotes=0;
	var tossVotes=0;
	var tossSolidVotes=0;
	var myOutput="";
	myOutput+="<map map_file=\"maps/usa.swf\" zoom=\"99%\" zoom_x=\"-5%\" zoom_y=\"3%\">";
	myOutput+="<areas>";
	
	myValues=myMap.split("-");
	for(var i=0;i<myValues.length;i++){
		var myVar=myValues[i];
		var myVote=myVoteArray[i];
		var myState=myStateArray[i];
		switch(myVar){
			case "1":
				myOpVar="1";
				myOpVarArray[i]="1";

				myColor="#0000ff";
				myColorArray[i]="#0000ff";
				myAlpha="100";
				myAlphaArray[i]="100";
				obamaSolidVotes+=parseInt(myVote);
				obamaVotes+=parseInt(myVote);
				break;
			case "2":
				myOpVar="2";
				myOpVarArray[i]="2";
				myColor="#0000ff";
				myColorArray[i]="#0000ff";
				myAlpha="50";
				myAlphaArray[i]="50";
				obamaVotes+=parseInt(myVote);
				obamaLeaningVotes+=parseInt(myVote);
				break;
			case "3":
				myOpVar="3";
				myOpVarArray[i]="3";
				myColor="#ff0000";
				myColorArray[i]="#ff0000";
				myAlpha="100";
				myAlphaArray[i]="100";
				mccainVotes+=parseInt(myVote);
				mccainSolidVotes+=parseInt(myVote);
				break;
			case "4":
				myOpVar="4";
				myOpVarArray[i]="4";
				myColor="#ff0000";
				myColorArray[i]="#ff0000";
				myAlpha="50";
				myAlphaArray[i]="50";
				mccainVotes+=parseInt(myVote);
				mccainLeaningVotes+=parseInt(myVote);
				break;
			case "5":
				myOpVar="5";
				myOpVarArray[i]="5";
				myColor="#606060";
				myColorArray[i]="#606060";
				myAlpha="100";
				myAlphaArray[i]="100";
				tossVotes+=parseInt(myVote);
				tossSolidVotes+=parseInt(myVote);
				break;
		}
		myOutput+="<area mc_name=\""+myState+"\" oid=\"('"+myOpVar+"','"+myVote+"','"+myState+"')\" color=\""+myColor+"\" alpha=\""+myAlpha+"\" balloon=\"false\" title=\""+AllStates[i]+"\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+myState.toLowerCase()+"/"+(AllStates[i]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[i]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[i]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVote+"','"+myState+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVote+"','"+myState+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVote+"','"+myState+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVote+"','"+myState+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVote+"','"+myState+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></area>";
	
	}
	myOutput+="</areas>";
	
	myOutput+="<movies>";
	myOutput+="<movie oid=\"2MA\" color=\""+myColorArray[21]+"\" alpha=\""+myAlphaArray[21]+"\" balloon=\"false\" title=\""+AllStates[21]+"\" file=\"rectangle\" x=\"551\" y=\"99\" width=\"31\" height=\"31\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[21]).toLowerCase()+"/"+(AllStates[21]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[21]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[21]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[21]+"','"+myStateArray[21]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[21]+"','"+myStateArray[21]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[21]+"','"+myStateArray[21]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[21]+"','"+myStateArray[21]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[21]+"','"+myStateArray[21]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"2RI\" color=\""+myColorArray[39]+"\" alpha=\""+myAlphaArray[39]+"\" balloon=\"false\" title=\""+AllStates[39]+"\" file=\"rectangle\" x=\"551\" y=\"134\" width=\"31\" height=\"31\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[39]).toLowerCase()+"/"+(AllStates[39]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[39]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[39]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[39]+"','"+myStateArray[39]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[39]+"','"+myStateArray[39]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[39]+"','"+myStateArray[39]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[39]+"','"+myStateArray[39]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[39]+"','"+myStateArray[39]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"2CT\" color=\""+myColorArray[6]+"\" alpha=\""+myAlphaArray[6]+"\" balloon=\"false\" title=\""+AllStates[6]+"\" file=\"rectangle\" x=\"551\" y=\"169\" width=\"31\" height=\"31\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[6]).toLowerCase()+"/"+(AllStates[6]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[6]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[6]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[6]+"','"+myStateArray[6]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[6]+"','"+myStateArray[6]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[6]+"','"+myStateArray[6]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[6]+"','"+myStateArray[6]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[6]+"','"+myStateArray[6]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"2NJ\" color=\""+myColorArray[30]+"\" alpha=\""+myAlphaArray[30]+"\" balloon=\"false\" title=\""+AllStates[30]+"\" file=\"rectangle\" x=\"551\" y=\"204\" width=\"31\" height=\"31\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[30]).toLowerCase()+"/"+(AllStates[30]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[30]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[30]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[30]+"','"+myStateArray[30]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[30]+"','"+myStateArray[30]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[30]+"','"+myStateArray[30]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[30]+"','"+myStateArray[30]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[30]+"','"+myStateArray[30]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"2DE\" color=\""+myColorArray[7]+"\" alpha=\""+myAlphaArray[7]+"\" balloon=\"false\" title=\""+AllStates[7]+"\" file=\"rectangle\" x=\"551\" y=\"239\" width=\"31\" height=\"31\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[7]).toLowerCase()+"/"+(AllStates[7]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[7]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[7]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[7]+"','"+myStateArray[7]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[7]+"','"+myStateArray[7]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[7]+"','"+myStateArray[7]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[7]+"','"+myStateArray[7]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[7]+"','"+myStateArray[7]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"2MD\" color=\""+myColorArray[20]+"\" alpha=\""+myAlphaArray[20]+"\" balloon=\"false\" title=\""+AllStates[20]+"\" file=\"rectangle\" x=\"551\" y=\"274\" width=\"31\" height=\"31\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[20]).toLowerCase()+"/"+(AllStates[20]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[20]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[20]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[20]+"','"+myStateArray[20]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[20]+"','"+myStateArray[20]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[20]+"','"+myStateArray[20]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[20]+"','"+myStateArray[20]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[20]+"','"+myStateArray[20]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"2DC\" color=\""+myColorArray[8]+"\" alpha=\""+myAlphaArray[8]+"\" balloon=\"false\" title=\""+AllStates[8]+"\" file=\"rectangle\" x=\"551\" y=\"309\" width=\"31\" height=\"31\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[8]).toLowerCase()+"/"+(AllStates[8]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[8]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[8]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[8]+"','"+myStateArray[8]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[8]+"','"+myStateArray[8]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[8]+"','"+myStateArray[8]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[8]+"','"+myStateArray[8]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[8]+"','"+myStateArray[8]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"2VT\" color=\""+myColorArray[45]+"\" alpha=\""+myAlphaArray[45]+"\" balloon=\"false\" title=\""+AllStates[45]+"\" file=\"rectangle\" x=\"431\" y=\"23\" width=\"31\" height=\"31\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[45]).toLowerCase()+"/"+(AllStates[45]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[45]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[45]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[45]+"','"+myStateArray[45]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[45]+"','"+myStateArray[45]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[45]+"','"+myStateArray[45]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[45]+"','"+myStateArray[45]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[45]+"','"+myStateArray[45]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"2NH\" color=\""+myColorArray[29]+"\" alpha=\""+myAlphaArray[29]+"\" balloon=\"false\" title=\""+AllStates[29]+"\" file=\"rectangle\" x=\"466\" y=\"23\" width=\"31\" height=\"31\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[29]).toLowerCase()+"/"+(AllStates[29]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[29]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[29]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[29]+"','"+myStateArray[29]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[29]+"','"+myStateArray[29]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[29]+"','"+myStateArray[29]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[29]+"','"+myStateArray[29]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[29]+"','"+myStateArray[29]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"2HI\" color=\""+myColorArray[11]+"\" alpha=\""+myAlphaArray[11]+"\" balloon=\"false\" title=\""+AllStates[11]+"\" file=\"rectangle\" x=\"14\" y=\"320\" width=\"31\" height=\"31\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[11]).toLowerCase()+"/"+(AllStates[11]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[11]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[11]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[11]+"','"+myStateArray[11]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[11]+"','"+myStateArray[11]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[11]+"','"+myStateArray[11]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[11]+"','"+myStateArray[11]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[11]+"','"+myStateArray[11]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3AL\" balloon=\"false\" title=\""+AllStates[0]+"\" file=\"labels/Alabama.png\" x=\"391\" y=\"238\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[0]).toLowerCase()+"/"+(AllStates[0]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[0]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[0]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[0]+"','"+myStateArray[0]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[0]+"','"+myStateArray[0]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[0]+"','"+myStateArray[0]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[0]+"','"+myStateArray[0]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[0]+"','"+myStateArray[0]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3AK\" balloon=\"false\" title=\""+AllStates[1]+"\" file=\"labels/Alaska.png\" x=\"117\" y=\"327\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[1]).toLowerCase()+"/"+(AllStates[1]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[1]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[1]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[1]+"','"+myStateArray[1]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[1]+"','"+myStateArray[1]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[1]+"','"+myStateArray[1]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[1]+"','"+myStateArray[1]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[1]+"','"+myStateArray[1]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3AZ\" balloon=\"false\" title=\""+AllStates[2]+"\" file=\"labels/Arizona.png\" x=\"126\" y=\"211\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[2]).toLowerCase()+"/"+(AllStates[2]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[2]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[2]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[2]+"','"+myStateArray[2]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[2]+"','"+myStateArray[2]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[2]+"','"+myStateArray[2]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[2]+"','"+myStateArray[2]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[2]+"','"+myStateArray[2]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3AR\" balloon=\"false\" title=\""+AllStates[3]+"\" file=\"labels/Arkansas.png\" x=\"326\" y=\"217\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[3]).toLowerCase()+"/"+(AllStates[3]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[3]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[3]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[3]+"','"+myStateArray[3]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[3]+"','"+myStateArray[3]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[3]+"','"+myStateArray[3]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[3]+"','"+myStateArray[3]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[3]+"','"+myStateArray[3]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3CA\" balloon=\"false\" title=\""+AllStates[4]+"\" file=\"labels/California.png\" x=\"49\" y=\"164\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[4]).toLowerCase()+"/"+(AllStates[4]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[4]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[4]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[4]+"','"+myStateArray[4]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[4]+"','"+myStateArray[4]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[4]+"','"+myStateArray[4]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[4]+"','"+myStateArray[4]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[4]+"','"+myStateArray[4]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3CO\" balloon=\"false\" title=\""+AllStates[5]+"\" file=\"labels/Colorado.png\" x=\"194\" y=\"161\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[5]).toLowerCase()+"/"+(AllStates[5]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[5]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[5]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[5]+"','"+myStateArray[5]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[5]+"','"+myStateArray[5]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[5]+"','"+myStateArray[5]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[5]+"','"+myStateArray[5]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[5]+"','"+myStateArray[5]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3CT\" balloon=\"false\" title=\""+AllStates[6]+"\" file=\"labels/Conneticut.png\" x=\"559\" y=\"176\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[6]).toLowerCase()+"/"+(AllStates[6]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[6]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[6]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[6]+"','"+myStateArray[6]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[6]+"','"+myStateArray[6]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[6]+"','"+myStateArray[6]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[6]+"','"+myStateArray[6]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[6]+"','"+myStateArray[6]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3DE\" balloon=\"false\" title=\""+AllStates[7]+"\" file=\"labels/Delaware.png\" x=\"559\" y=\"246\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[7]).toLowerCase()+"/"+(AllStates[7]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[7]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[7]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[7]+"','"+myStateArray[7]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[7]+"','"+myStateArray[7]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[7]+"','"+myStateArray[7]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[7]+"','"+myStateArray[7]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[7]+"','"+myStateArray[7]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3DC\" balloon=\"false\" title=\""+AllStates[8]+"\" file=\"labels/Dist_of_Columbia.png\" x=\"559\" y=\"316\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[8]).toLowerCase()+"/"+(AllStates[8]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[8]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[8]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[8]+"','"+myStateArray[8]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[8]+"','"+myStateArray[8]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[8]+"','"+myStateArray[8]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[8]+"','"+myStateArray[8]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[8]+"','"+myStateArray[8]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3FL\" balloon=\"false\" title=\""+AllStates[9]+"\" file=\"labels/Florida.png\" x=\"456\" y=\"288\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[9]).toLowerCase()+"/"+(AllStates[9]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[9]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[9]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[9]+"','"+myStateArray[9]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[9]+"','"+myStateArray[9]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[9]+"','"+myStateArray[9]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[9]+"','"+myStateArray[9]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[9]+"','"+myStateArray[9]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3GA\" balloon=\"false\" title=\""+AllStates[10]+"\" file=\"labels/Georgia.png\" x=\"424\" y=\"235\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[10]).toLowerCase()+"/"+(AllStates[10]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[10]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[10]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[10]+"','"+myStateArray[10]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[10]+"','"+myStateArray[10]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[10]+"','"+myStateArray[10]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[10]+"','"+myStateArray[10]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[10]+"','"+myStateArray[10]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3HI\" balloon=\"false\" title=\""+AllStates[11]+"\" file=\"labels/Hawaii.png\" x=\"26\" y=\"326\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[11]).toLowerCase()+"/"+(AllStates[11]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[11]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[11]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[11]+"','"+myStateArray[11]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[11]+"','"+myStateArray[11]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[11]+"','"+myStateArray[11]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[11]+"','"+myStateArray[11]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[11]+"','"+myStateArray[11]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3ID\" balloon=\"false\" title=\""+AllStates[12]+"\" file=\"labels/Idaho.png\" x=\"118\" y=\"87\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[12]).toLowerCase()+"/"+(AllStates[12]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[12]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[12]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[12]+"','"+myStateArray[12]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[12]+"','"+myStateArray[12]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[12]+"','"+myStateArray[12]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[12]+"','"+myStateArray[12]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[12]+"','"+myStateArray[12]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3IL\" balloon=\"false\" title=\""+AllStates[13]+"\" file=\"labels/Illinois.png\" x=\"357\" y=\"143\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[13]).toLowerCase()+"/"+(AllStates[13]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[13]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[13]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[13]+"','"+myStateArray[13]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[13]+"','"+myStateArray[13]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[13]+"','"+myStateArray[13]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[13]+"','"+myStateArray[13]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[13]+"','"+myStateArray[13]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3IN\" balloon=\"false\" title=\""+AllStates[14]+"\" file=\"labels/Indiana.png\" x=\"386\" y=\"145\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[14]).toLowerCase()+"/"+(AllStates[14]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[14]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[14]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[14]+"','"+myStateArray[14]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[14]+"','"+myStateArray[14]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[14]+"','"+myStateArray[14]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[14]+"','"+myStateArray[14]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[14]+"','"+myStateArray[14]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3IA\" balloon=\"false\" title=\""+AllStates[15]+"\" file=\"labels/Iowa.png\" x=\"312\" y=\"124\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[15]).toLowerCase()+"/"+(AllStates[15]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[15]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[15]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[15]+"','"+myStateArray[15]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[15]+"','"+myStateArray[15]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[15]+"','"+myStateArray[15]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[15]+"','"+myStateArray[15]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[15]+"','"+myStateArray[15]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3KS\" balloon=\"false\" title=\""+AllStates[16]+"\" file=\"labels/Kansas.png\" x=\"266\" y=\"169\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[16]).toLowerCase()+"/"+(AllStates[16]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[16]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[16]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[16]+"','"+myStateArray[16]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[16]+"','"+myStateArray[16]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[16]+"','"+myStateArray[16]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[16]+"','"+myStateArray[16]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[16]+"','"+myStateArray[16]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3KY\" balloon=\"false\" title=\""+AllStates[17]+"\" file=\"labels/Kentucky.png\" x=\"406\" y=\"171\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[17]).toLowerCase()+"/"+(AllStates[17]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[17]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[17]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[17]+"','"+myStateArray[17]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[17]+"','"+myStateArray[17]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[17]+"','"+myStateArray[17]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[17]+"','"+myStateArray[17]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[17]+"','"+myStateArray[17]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3LA\" balloon=\"false\" title=\""+AllStates[18]+"\" file=\"labels/Louisiana.png\" x=\"327\" y=\"260\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[18]).toLowerCase()+"/"+(AllStates[18]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[18]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[18]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[18]+"','"+myStateArray[18]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[18]+"','"+myStateArray[18]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[18]+"','"+myStateArray[18]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[18]+"','"+myStateArray[18]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[18]+"','"+myStateArray[18]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3ME\" balloon=\"false\" title=\""+AllStates[19]+"\" file=\"labels/Maine.png\" x=\"528\" y=\"45\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[19]).toLowerCase()+"/"+(AllStates[19]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[19]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[19]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[19]+"','"+myStateArray[19]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[19]+"','"+myStateArray[19]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[19]+"','"+myStateArray[19]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[19]+"','"+myStateArray[19]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[19]+"','"+myStateArray[19]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3MD\" balloon=\"false\" title=\""+AllStates[20]+"\" file=\"labels/Maryland.png\" x=\"559\" y=\"281\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[20]).toLowerCase()+"/"+(AllStates[20]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[20]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[20]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[20]+"','"+myStateArray[20]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[20]+"','"+myStateArray[20]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[20]+"','"+myStateArray[20]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[20]+"','"+myStateArray[20]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[20]+"','"+myStateArray[20]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3MA\" balloon=\"false\" title=\""+AllStates[21]+"\" file=\"labels/Massachusetts.png\" x=\"559\" y=\"106\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[21]).toLowerCase()+"/"+(AllStates[21]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[21]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[21]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[21]+"','"+myStateArray[21]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[21]+"','"+myStateArray[21]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[21]+"','"+myStateArray[21]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[21]+"','"+myStateArray[21]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[21]+"','"+myStateArray[21]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3MI\" balloon=\"false\" title=\""+AllStates[22]+"\" file=\"labels/Michigan.png\" x=\"393\" y=\"100\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[22]).toLowerCase()+"/"+(AllStates[22]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[22]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[22]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[22]+"','"+myStateArray[22]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[22]+"','"+myStateArray[22]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[22]+"','"+myStateArray[22]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[22]+"','"+myStateArray[22]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[22]+"','"+myStateArray[22]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3MN\" balloon=\"false\" title=\""+AllStates[23]+"\" file=\"labels/Minnesota.png\" x=\"299\" y=\"71\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[23]).toLowerCase()+"/"+(AllStates[23]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[23]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[23]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[23]+"','"+myStateArray[23]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[23]+"','"+myStateArray[23]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[23]+"','"+myStateArray[23]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[23]+"','"+myStateArray[23]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[23]+"','"+myStateArray[23]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3MS\" balloon=\"false\" title=\""+AllStates[24]+"\" file=\"labels/Mississippi.png\" x=\"360\" y=\"241\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[24]).toLowerCase()+"/"+(AllStates[24]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[24]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[24]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[24]+"','"+myStateArray[24]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[24]+"','"+myStateArray[24]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[24]+"','"+myStateArray[24]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[24]+"','"+myStateArray[24]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[24]+"','"+myStateArray[24]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3MO\" balloon=\"false\" title=\""+AllStates[25]+"\" file=\"labels/Missouri.png\" x=\"324\" y=\"172\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[25]).toLowerCase()+"/"+(AllStates[25]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[25]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[25]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[25]+"','"+myStateArray[25]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[25]+"','"+myStateArray[25]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[25]+"','"+myStateArray[25]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[25]+"','"+myStateArray[25]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[25]+"','"+myStateArray[25]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3MT\" balloon=\"false\" title=\""+AllStates[26]+"\" file=\"labels/Montana.png\" x=\"168\" y=\"52\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[26]).toLowerCase()+"/"+(AllStates[26]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[26]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[26]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[26]+"','"+myStateArray[26]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[26]+"','"+myStateArray[26]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[26]+"','"+myStateArray[26]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[26]+"','"+myStateArray[26]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[26]+"','"+myStateArray[26]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3NE\" balloon=\"false\" title=\""+AllStates[27]+"\" file=\"labels/Nebraska.png\" x=\"250\" y=\"129\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[27]).toLowerCase()+"/"+(AllStates[27]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[27]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[27]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[27]+"','"+myStateArray[27]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[27]+"','"+myStateArray[27]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[27]+"','"+myStateArray[27]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[27]+"','"+myStateArray[27]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[27]+"','"+myStateArray[27]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3NV\" balloon=\"false\" title=\""+AllStates[28]+"\" file=\"labels/Nevada.png\" x=\"86\" y=\"135\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[28]).toLowerCase()+"/"+(AllStates[28]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[28]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[28]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[28]+"','"+myStateArray[28]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[28]+"','"+myStateArray[28]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[28]+"','"+myStateArray[28]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[28]+"','"+myStateArray[28]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[28]+"','"+myStateArray[28]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3NH\" balloon=\"false\" title=\""+AllStates[29]+"\" file=\"labels/New_Hampshire.png\" x=\"474\" y=\"29\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[29]).toLowerCase()+"/"+(AllStates[29]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[29]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[29]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[29]+"','"+myStateArray[29]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[29]+"','"+myStateArray[29]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[29]+"','"+myStateArray[29]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[29]+"','"+myStateArray[29]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[29]+"','"+myStateArray[29]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3NJ\" balloon=\"false\" title=\""+AllStates[30]+"\" file=\"labels/New_Jersey.png\" x=\"559\" y=\"210\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[30]).toLowerCase()+"/"+(AllStates[30]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[30]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[30]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[30]+"','"+myStateArray[30]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[30]+"','"+myStateArray[30]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[30]+"','"+myStateArray[30]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[30]+"','"+myStateArray[30]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[30]+"','"+myStateArray[30]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3NM\" balloon=\"false\" title=\""+AllStates[31]+"\" file=\"labels/New_Mexico.png\" x=\"184\" y=\"216\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[31]).toLowerCase()+"/"+(AllStates[31]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[31]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[31]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[31]+"','"+myStateArray[31]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[31]+"','"+myStateArray[31]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[31]+"','"+myStateArray[31]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[31]+"','"+myStateArray[31]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[31]+"','"+myStateArray[31]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3NY\" balloon=\"false\" title=\""+AllStates[32]+"\" file=\"labels/New_York.png\" x=\"486\" y=\"87\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[32]).toLowerCase()+"/"+(AllStates[32]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[32]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[32]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[32]+"','"+myStateArray[32]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[32]+"','"+myStateArray[32]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[32]+"','"+myStateArray[32]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[32]+"','"+myStateArray[32]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[32]+"','"+myStateArray[32]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3NC\" balloon=\"false\" title=\""+AllStates[33]+"\" file=\"labels/North_Carolina.png\" x=\"468\" y=\"191\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[33]).toLowerCase()+"/"+(AllStates[33]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[33]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[33]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[33]+"','"+myStateArray[33]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[33]+"','"+myStateArray[33]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[33]+"','"+myStateArray[33]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[33]+"','"+myStateArray[33]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[33]+"','"+myStateArray[33]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3ND\" balloon=\"false\" title=\""+AllStates[34]+"\" file=\"labels/North_Dakota.png\" x=\"249\" y=\"53\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[34]).toLowerCase()+"/"+(AllStates[34]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[34]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[34]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[34]+"','"+myStateArray[34]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[34]+"','"+myStateArray[34]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[34]+"','"+myStateArray[34]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[34]+"','"+myStateArray[34]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[34]+"','"+myStateArray[34]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3OH\" balloon=\"false\" title=\""+AllStates[35]+"\" file=\"labels/Ohio.png\" x=\"417\" y=\"137\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[35]).toLowerCase()+"/"+(AllStates[35]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[35]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[35]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[35]+"','"+myStateArray[35]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[35]+"','"+myStateArray[35]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[35]+"','"+myStateArray[35]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[35]+"','"+myStateArray[35]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[35]+"','"+myStateArray[35]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3OK\" balloon=\"false\" title=\""+AllStates[36]+"\" file=\"labels/Oklahoma.png\" x=\"274\" y=\"210\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[36]).toLowerCase()+"/"+(AllStates[36]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[36]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[36]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[36]+"','"+myStateArray[36]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[36]+"','"+myStateArray[36]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[36]+"','"+myStateArray[36]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[36]+"','"+myStateArray[36]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[36]+"','"+myStateArray[36]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3OR\" balloon=\"false\" title=\""+AllStates[37]+"\" file=\"labels/Oregon.png\" x=\"64\" y=\"73\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[37]).toLowerCase()+"/"+(AllStates[37]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[37]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[37]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[37]+"','"+myStateArray[37]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[37]+"','"+myStateArray[37]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[37]+"','"+myStateArray[37]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[37]+"','"+myStateArray[37]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[37]+"','"+myStateArray[37]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3PA\" balloon=\"false\" title=\""+AllStates[38]+"\" file=\"labels/Pennsylvania.png\" x=\"465\" y=\"119\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[38]).toLowerCase()+"/"+(AllStates[38]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[38]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[38]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[38]+"','"+myStateArray[38]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[38]+"','"+myStateArray[38]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[38]+"','"+myStateArray[38]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[38]+"','"+myStateArray[38]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[38]+"','"+myStateArray[38]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3RI\" balloon=\"false\" title=\""+AllStates[39]+"\" file=\"labels/Rhode_Island.png\" x=\"559\" y=\"141\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[39]).toLowerCase()+"/"+(AllStates[39]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[39]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[39]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[39]+"','"+myStateArray[39]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[39]+"','"+myStateArray[39]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[39]+"','"+myStateArray[39]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[39]+"','"+myStateArray[39]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[39]+"','"+myStateArray[39]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3SC\" balloon=\"false\" title=\""+AllStates[40]+"\" file=\"labels/South_Carolina.png\" x=\"451\" y=\"218\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[40]).toLowerCase()+"/"+(AllStates[40]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[40]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[40]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[40]+"','"+myStateArray[40]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[40]+"','"+myStateArray[40]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[40]+"','"+myStateArray[40]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[40]+"','"+myStateArray[40]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[40]+"','"+myStateArray[40]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3SD\" balloon=\"false\" title=\""+AllStates[41]+"\" file=\"labels/South_Dakota.png\" x=\"248\" y=\"92\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[41]).toLowerCase()+"/"+(AllStates[41]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[41]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[41]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[41]+"','"+myStateArray[41]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[41]+"','"+myStateArray[41]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[41]+"','"+myStateArray[41]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[41]+"','"+myStateArray[41]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[41]+"','"+myStateArray[41]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3TN\" balloon=\"false\" title=\""+AllStates[42]+"\" file=\"labels/Tennessee.png\" x=\"392\" y=\"195\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[42]).toLowerCase()+"/"+(AllStates[42]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[42]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[42]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[42]+"','"+myStateArray[42]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[42]+"','"+myStateArray[42]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[42]+"','"+myStateArray[42]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[42]+"','"+myStateArray[42]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[42]+"','"+myStateArray[42]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3TX\" balloon=\"false\" title=\""+AllStates[43]+"\" file=\"labels/Texas.png\" x=\"258\" y=\"261\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[43]).toLowerCase()+"/"+(AllStates[43]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[43]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[43]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[43]+"','"+myStateArray[43]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[43]+"','"+myStateArray[43]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[43]+"','"+myStateArray[43]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[43]+"','"+myStateArray[43]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[43]+"','"+myStateArray[43]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3UT\" balloon=\"false\" title=\""+AllStates[44]+"\" file=\"labels/Utah.png\" x=\"138\" y=\"151\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[44]).toLowerCase()+"/"+(AllStates[44]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[44]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[44]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[44]+"','"+myStateArray[44]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[44]+"','"+myStateArray[44]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[44]+"','"+myStateArray[44]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[44]+"','"+myStateArray[44]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[44]+"','"+myStateArray[44]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3VT\" balloon=\"false\" title=\""+AllStates[45]+"\" file=\"labels/Vermont.png\" x=\"441\" y=\"29\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[45]).toLowerCase()+"/"+(AllStates[45]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[45]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[45]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[45]+"','"+myStateArray[45]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[45]+"','"+myStateArray[45]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[45]+"','"+myStateArray[45]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[45]+"','"+myStateArray[45]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[45]+"','"+myStateArray[45]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3VA\" balloon=\"false\" title=\""+AllStates[46]+"\" file=\"labels/Virginia.png\" x=\"467\" y=\"163\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[46]).toLowerCase()+"/"+(AllStates[46]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[46]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[46]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[46]+"','"+myStateArray[46]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[46]+"','"+myStateArray[46]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[46]+"','"+myStateArray[46]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[46]+"','"+myStateArray[46]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[46]+"','"+myStateArray[46]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3WA\" balloon=\"false\" title=\""+AllStates[47]+"\" file=\"labels/Washington.png\" x=\"76\" y=\"30\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[47]).toLowerCase()+"/"+(AllStates[47]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[47]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[47]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[47]+"','"+myStateArray[47]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[47]+"','"+myStateArray[47]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[47]+"','"+myStateArray[47]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[47]+"','"+myStateArray[47]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[47]+"','"+myStateArray[47]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3WV\" balloon=\"false\" title=\""+AllStates[48]+"\" file=\"labels/West_Virginia.png\" x=\"440\" y=\"156\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[48]).toLowerCase()+"/"+(AllStates[48]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[48]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[48]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[48]+"','"+myStateArray[48]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[48]+"','"+myStateArray[48]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[48]+"','"+myStateArray[48]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[48]+"','"+myStateArray[48]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[48]+"','"+myStateArray[48]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3WI\" balloon=\"false\" title=\""+AllStates[49]+"\" file=\"labels/Wisconsin.png\" x=\"347\" y=\"90\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[49]).toLowerCase()+"/"+(AllStates[49]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[49]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[49]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[49]+"','"+myStateArray[49]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[49]+"','"+myStateArray[49]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[49]+"','"+myStateArray[49]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[49]+"','"+myStateArray[49]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[49]+"','"+myStateArray[49]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="<movie oid=\"3WY\" balloon=\"false\" title=\""+AllStates[50]+"\" file=\"labels/Wyoming.png\" x=\"181\" y=\"106\"><description><![CDATA[<a href=\"http://www.realclearpolitics.com/epolls/2008/president/"+(myStateArray[50]).toLowerCase()+"/"+(AllStates[50]).toLowerCase()+"_mccain_vs_obama-"+AllPolls[50]+".html\"><font color=\"#cc0000\">Click Here for "+AllStates[50]+" Polls</font></a><br /><br /><a href=\"javascript:setVars('1','"+myVoteArray[50]+"','"+myStateArray[50]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('2','"+myVoteArray[50]+"','"+myStateArray[50]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/dem-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('3','"+myVoteArray[50]+"','"+myStateArray[50]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-solid-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('4','"+myVoteArray[50]+"','"+myStateArray[50]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/gop-leaning-change.gif\" /></a><br /><br /><a href=\"javascript:setVars('5','"+myVoteArray[50]+"','"+myStateArray[50]+"');\"><img src=\"http://www.realclearpolitics.com/epolls/maps/images/toss-up-change.gif\" /></a>]]></description></movie>";
	myOutput+="</movies>";
	myOutput+="</map>";

	//obama.innerHTML=obamaValues[0]+" "+obamaValues[1]+" "+obamaVotes;
	//mccain.innerHTML=mccainValues[0]+" "+mccainValues[1]+" "+mccainVotes;
	obama.innerHTML=obamaValues[0]+" "+obamaVotes;
	mccain.innerHTML=mccainValues[0]+" "+mccainVotes;
	toss.innerHTML=tossValues[0]+" "+tossValues[1]+" "+tossVotes;
	obama_solid.innerHTML=obamaSolidVotes;
	obama_leaning.innerHTML=obamaLeaningVotes;
	mccain_solid.innerHTML=mccainSolidVotes;
	mccain_leaning.innerHTML=mccainLeaningVotes;
	toss_solid.innerHTML=tossSolidVotes;
	
	if(flashMovie){
		flashMovie.setData(myOutput);
	}

}

function saveMap(){
	var myLink=document.getElementById("save");
	myLink.onclick=function(){
		var myMap=mapString();
		createCookie('rcpMap',myMap,30);
		alert("Your changes have been saved, when you return to this page click 'Your Electoral Map' to load your map.");
	}
}

function mapString(){
		var myOutput="";
		getData();
		myValues=document.getElementById("mapValues").value;
		var tempValues=myValues.split("<area mc_name=\"");
		for(var i=1;i<(tempValues.length);i++){
			var myStart=tempValues[i].indexOf("(")+1;
			var myEnd=tempValues[i].indexOf(")");
			var newValue=tempValues[i].substring(myStart,myEnd);
			var newValues=newValue.split(",");
			for(var p=0;p<newValues.length;p++){
				if(p==0){
					myOutput+=newValues[p].replace(/&apos;/g,"");
				}
			}
			if(i<(tempValues.length-1)){
				myOutput+="-";
			}
		}
		return myOutput;
}
// get data
function getData() {
 if (flashMovie) {
	flashMovie.getData();
 }
}
// return data 
function amReturnData(map_id, data){
  document.getElementById("mapValues").value = unescape(data);
}

function setVars(myVar,myVote,myState){
var myOpVar;
var myColor;
var myAlpha;

getData();
var myValues=document.getElementById("mapValues").value;

var obama=document.getElementById("c1");
var obama_solid=document.getElementById("c1s");
var obama_leaning=document.getElementById("c1l");
var mccain=document.getElementById("c2");
var mccain_solid=document.getElementById("c2s");
var mccain_leaning=document.getElementById("c2l");
var toss=document.getElementById("c3");
var toss_solid=document.getElementById("c3s");

var obamaValues=obama.innerHTML.split(" ",2);
var mccainValues=mccain.innerHTML.split(" ",2);
var tossValues=toss.innerHTML.split(" ",3);

var obamaVotes=parseInt(obamaValues[1]);
var obamaSolidVotes=parseInt(obama_solid.innerHTML);
var obamaLeaningVotes=parseInt(obama_leaning.innerHTML);
var mccainVotes=parseInt(mccainValues[1]);
var mccainSolidVotes=parseInt(mccain_solid.innerHTML);
var mccainLeaningVotes=parseInt(mccain_leaning.innerHTML);
var tossVotes=parseInt(tossValues[2]);
var tossSolidVotes=parseInt(toss_solid.innerHTML);
if (flashMovie) {
txt=myValues;
	var tempValues=myValues.split("mc_name=\""+myState+"\" ",2);
	var myIndex=tempValues[1].indexOf("(")+1;
	var myIndex2=tempValues[1].indexOf(")");
	var newValue=tempValues[1].substring(myIndex,myIndex2);
	var newValues=newValue.split(",");
	newValue=newValues[0].replace(/&apos;/g,"");
	var myCurrentVar=newValue;
}
switch(myVar){
	case "1":
		myOpVar="1";
		myColor="#0000ff";
		myAlpha="100";
		switch(myCurrentVar){
			case "1":
				obamaVotes-=parseInt(myVote);
				obamaSolidVotes-=parseInt(myVote);
				break;
			case "2":
				obamaVotes-=parseInt(myVote);
				obamaLeaningVotes-=parseInt(myVote);
				break;
			case "3":
				mccainVotes-=parseInt(myVote);
				mccainSolidVotes-=parseInt(myVote);
				break;
			case "4":
				mccainVotes-=parseInt(myVote);
				mccainLeaningVotes-=parseInt(myVote);
				break;
			case "5":
				tossVotes-=parseInt(myVote);
				tossSolidVotes-=parseInt(myVote);
				break;
		}
		obamaVotes+=parseInt(myVote);
		obamaSolidVotes+=parseInt(myVote);
		break;
	case "2":
		myOpVar="2";
		myColor="#0000ff";
		myAlpha="50";
		switch(myCurrentVar){
			case "1":
				obamaVotes-=parseInt(myVote);
				obamaSolidVotes-=parseInt(myVote);
				break;
			case "2":
				obamaVotes-=parseInt(myVote);
				obamaLeaningVotes-=parseInt(myVote);
				break;
			case "3":
				mccainVotes-=parseInt(myVote);
				mccainSolidVotes-=parseInt(myVote);
				break;
			case "4":
				mccainVotes-=parseInt(myVote);
				mccainLeaningVotes-=parseInt(myVote);
				break;
			case "5":
				tossVotes-=parseInt(myVote);
				tossSolidVotes-=parseInt(myVote);
				break;
		}
		obamaVotes+=parseInt(myVote);
		obamaLeaningVotes+=parseInt(myVote);
		break;
	case "3":
		myOpVar="3";
		myColor="#ff0000";
		myAlpha="100";
		switch(myCurrentVar){
			case "1":
				obamaVotes-=parseInt(myVote);
				obamaSolidVotes-=parseInt(myVote);
				break;
			case "2":
				obamaVotes-=parseInt(myVote);
				obamaLeaningVotes-=parseInt(myVote);
				break;
			case "3":
				mccainVotes-=parseInt(myVote);
				mccainSolidVotes-=parseInt(myVote);
				break;
			case "4":
				mccainVotes-=parseInt(myVote);
				mccainLeaningVotes-=parseInt(myVote);
				break;
			case "5":
				tossVotes-=parseInt(myVote);
				tossSolidVotes-=parseInt(myVote);
				break;
		}
		mccainVotes+=parseInt(myVote);
		mccainSolidVotes+=parseInt(myVote);
		break;
	case "4":
		myOpVar="4";
		myColor="#ff0000";
		myAlpha="50";
		switch(myCurrentVar){
			case "1":
				obamaVotes-=parseInt(myVote);
				obamaSolidVotes-=parseInt(myVote);
				break;
			case "2":
				obamaVotes-=parseInt(myVote);
				obamaLeaningVotes-=parseInt(myVote);
				break;
			case "3":
				mccainVotes-=parseInt(myVote);
				mccainSolidVotes-=parseInt(myVote);
				break;
			case "4":
				mccainVotes-=parseInt(myVote);
				mccainLeaningVotes-=parseInt(myVote);
				break;
			case "5":
				tossVotes-=parseInt(myVote);
				tossSolidVotes-=parseInt(myVote);
				break;
		}
		mccainVotes+=parseInt(myVote);
		mccainLeaningVotes+=parseInt(myVote);
		break;
	case "5":
		myOpVar="5";
		myColor="#606060";
		myAlpha="100";
		switch(myCurrentVar){
			case "1":
				obamaVotes-=parseInt(myVote);
				obamaSolidVotes-=parseInt(myVote);
				break;
			case "2":
				obamaVotes-=parseInt(myVote);
				obamaLeaningVotes-=parseInt(myVote);
				break;
			case "3":
				mccainVotes-=parseInt(myVote);
				mccainSolidVotes-=parseInt(myVote);
				break;
			case "4":
				mccainVotes-=parseInt(myVote);
				mccainLeaningVotes-=parseInt(myVote);
				break;
			case "5":
				tossVotes-=parseInt(myVote);
				tossSolidVotes-=parseInt(myVote);
				break;
		}
		tossVotes+=parseInt(myVote);
		tossSolidVotes+=parseInt(myVote);
		break;

}
//obama.innerHTML=obamaValues[0]+" "+obamaValues[1]+" "+obamaVotes;
//mccain.innerHTML=mccainValues[0]+" "+mccainValues[1]+" "+mccainVotes;
obama.innerHTML=obamaValues[0]+" "+obamaVotes;
mccain.innerHTML=mccainValues[0]+" "+mccainVotes;
toss.innerHTML=tossValues[0]+" "+tossValues[1]+" "+tossVotes;
obama_solid.innerHTML=obamaSolidVotes;
obama_leaning.innerHTML=obamaLeaningVotes;
mccain_solid.innerHTML=mccainSolidVotes;
mccain_leaning.innerHTML=mccainLeaningVotes;
toss_solid.innerHTML=tossSolidVotes;
if (flashMovie) {

txt=myValues;
//split for states
var tempValues=myValues.split("mc_name=\""+myState+"\" ",2);
var myIndex=tempValues[1].indexOf(" balloon");
var newTempValue="mc_name=\""+myState+"\" oid=\"('"+myOpVar+"','"+myVote+"','"+myState+"')\" color=\""+myColor+"\" alpha=\""+myAlpha+"\"";
var myFull=tempValues[0]+newTempValue+tempValues[1].substr(myIndex);

//split for rectangles
var tempValues=myFull.split("oid=\"2"+myState+"\" ",2);
if(tempValues[1]){
var myIndex=tempValues[1].indexOf(" balloon");
var newTempValue="oid=\"2"+myState+"\" color=\""+myColor+"\" alpha=\""+myAlpha+"\"";
var myFull=tempValues[0]+newTempValue+tempValues[1].substr(myIndex);
}

txt=myFull;


		flashMovie.setData(txt);
 	}
}

// set data
function setData() {
 if (flashMovie) {
	flashMovie.setData(txt);
 }
}