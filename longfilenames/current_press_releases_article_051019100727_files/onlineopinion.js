var O_Lang = 0;
var O_Color = "black";
var O_ImgPath = "http://www.gs.com/onlineopinion/";
var O_CCURL = "http://ccc01.opinionlab.com/comment_card.asp";
var O_NS4=(document.layers)?1:0;
var O_IE4=(document.all)?1:0;
var O_NS6=(document.getElementById)?1:0;
var oend_date;
var O_CDate;

if (O_NS4|O_IE4|O_NS6) {
 var _rW=screen.width;
 var _rH=screen.height;
 var O_Key=escape(document.location.href);
 card_H=370;
 card_top = (_rH - card_H)/2;
}

function O_Rpl(sr,sf,ss){var a=sr.split(sf);return a.join(ss)}

function commentCard() {
 if (O_NS4|O_IE4|O_NS6) {
  O_Key=O_Rpl(O_Key,"/","%2F");
  O_Key=O_Rpl(O_Key,".","%2E");
  O_Key=O_Rpl(O_Key,"-","%2D");
  O_Key=O_Rpl(O_Key,"_","%5F");
  
  ocDate2=new Date();oend_date=ocDate2.getTime();
  var url = O_CCURL+'?lang='+O_Lang+'&prev='+escape(document.referrer)+'&referer='+O_Key+'&height='+_rH+'&width='+_rW+'&time1='+O_CDate+'&time2='+oend_date;
window.open(url,'Comments','width=535,height=192,screenX='+((_rW-535)/2)+',screenY='+((_rH-192)/2)+',top='+((_rH-192)/2)+',left='+((_rW-535)/2)+',resizable=yes,copyhistory=yes,scrollbars=no');
 }
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

// Let's start the timer
O_CTime=new Date();O_CDate=O_CTime.getTime();

// Let's output the HTML Code
O_Swapper = "'feedbackImage','','"+O_ImgPath+"feedback_ov.gif'";

if(O_NS4)
{
	document.write('<layer id="opinion_layer" width="150px" height="25px" z-index="1" left="100px" top="100px" visibility="hide"><a href="javascript:commentCard();" onMouseOut="MM_swapImgRestore();" onMouseOver="MM_swapImage('+O_Swapper+',1);"><img src="'+O_ImgPath+'feedback_up.gif" height="25" width="150" border="0" align="right" hspace="5" alt="Please click here to give us feedback" name="feedbackImage"></A></layer>');
}
else
{
	document.write('<div id="opinion_layer" style="position:absolute; width:150; height:25px; z-index:1; left: 100px; top: 100px; visibility: hidden"><a href="javascript:commentCard();" onMouseOut="MM_swapImgRestore();" onMouseOver="MM_swapImage('+O_Swapper+',1);"><img src="'+O_ImgPath+'feedback_up.gif" height="25" width="150" border="0" align="right" hspace="5" alt="Please click here to give us feedback" name="feedbackImage"></A></div>');
}



//Page View Launcher
var O_PopUp=1;
if(O_NS4){window.captureEvents(Event.KEYDOWN);window.onkeydown= keycap;}else{document.onkeydown= keycap;}var O_Referer="http://www.opinionlab.com/ozone/24-7.asp?referer="+O_Key;var O_PressedAltFirst=false;var O_PressedO=false;
function keycap(e){if(O_PopUp){nA=navigator.appName;if(nA=="Netscape"){keyPressed=e.which;if(keyPressed==0){O_PressedAltFirst=true}else{if((keyPressed==79)&&(O_PressedAltFirst)){O_PressedO = true}else if((keyPressed==76)&&(O_PressedAltFirst)&&(O_PressedO)){window.open(O_Referer,'Report','width=370,height=200,resizable=no,copyhistory=no,scrollbars=no');O_PressedAltFirst=false;O_PressedO=false}else{O_PressedAltFirst=false;O_PressedO=false}}}if(nA=="Microsoft Internet Explorer"){keyPressed=event.keyCode;if(keyPressed==18){O_PressedAltFirst=true}else{if((keyPressed==79)&&(O_PressedAltFirst)){O_PressedO = true}else if((keyPressed==76)&&(O_PressedAltFirst)&&(O_PressedO)){window.open(O_Referer,'Report','width=370,height=200,resizable=no,copyhistory=no,scrollbars=no');O_PressedAltFirst=false;O_PressedO=false}else{O_PressedAltFirst=false;O_PressedO=false}}}}}

NS = (document.layers) ? true: false;
IE = (document.all) ? true : false;

display_opinion_layer();

function display_opinion_layer()
{
	if(O_NS4)
	{
		document.opinion_layer.left = document.feedback_image.x - 75;
		document.opinion_layer.top = document.feedback_image.y - 30;
		
		document.opinion_layer.visibility = "show";
	}
	else
	{
		opinion_layer.style.left = DL_GetElementLeft(document.images["feedback_image"]) - 75;
		opinion_layer.style.top = DL_GetElementTop(document.images["feedback_image"]) - 30;
		
		opinion_layer.style.visibility = "visible";
	}
}

function DL_GetElementLeft(eElement)
{
   if (!eElement && this)                    // if argument is invalid
   {                                         // (not specified, is null or is 0)
      eElement = this;                       // and function is a method
   }                                         // identify the element as the method owner

   var DL_bIE = document.all ? true : false; // initialize var to identify IE

   var nLeftPos = eElement.offsetLeft;       // initialize var to store calculations
   var eParElement = eElement.offsetParent;  // identify first offset parent element

   while (eParElement != null)
   {                                         // move up through element hierarchy

      if(DL_bIE)                             // if browser is IE, then...
      {
         if( (eParElement.tagName != "TABLE") && (eParElement.tagName != "BODY") )
         {                                   // if parent is not a table or the body, then...
            nLeftPos += eParElement.clientLeft; // append cell border width to calcs
         }
      }
      else                                   // if browser is Gecko, then...
      {
         if(eParElement.tagName == "TABLE")  // if parent is a table, then...
         {                                   // get its border as a number
            var nParBorder = parseInt(eParElement.border);
            if(isNaN(nParBorder))            // if no valid border attribute, then...
            {                                // check the table's frame attribute
               var nParFrame = eParElement.getAttribute('frame');
               if(nParFrame != null)         // if frame has ANY value, then...
               {
                  nLeftPos += 1;             // append one pixel to counter
               }
            }
            else if(nParBorder > 0)          // if a border width is specified, then...
            {
               nLeftPos += nParBorder;       // append the border width to counter
            }
         }
      }
      nLeftPos += eParElement.offsetLeft;    // append left offset of parent
      eParElement = eParElement.offsetParent; // and move up the element hierarchy
   }                                         // until no more offset parents exist
   return nLeftPos;                          // return the number calculated
}

function DL_GetElementTop(eElement)
{
   if (!eElement && this)                    // if argument is invalid
   {                                         // (not specified, is null or is 0)
      eElement = this;                       // and function is a method
   }                                         // identify the element as the method owner

   var DL_bIE = document.all ? true : false; // initialize var to identify IE

   var nTopPos = eElement.offsetTop;         // initialize var to store calculations
   var eParElement = eElement.offsetParent;  // identify first offset parent element

   while (eParElement != null)
   {                                         // move up through element hierarchy
      if(DL_bIE)                             // if browser is IE, then...
      {
         if( (eParElement.tagName != "TABLE") && (eParElement.tagName != "BODY") )
         {                                   // if parent a table cell, then...
            nTopPos += eParElement.clientTop; // append cell border width to calcs
         }
      }
      else                                   // if browser is Gecko, then...
      {
         if(eParElement.tagName == "TABLE")  // if parent is a table, then...
         {                                   // get its border as a number
            var nParBorder = parseInt(eParElement.border);
            if(isNaN(nParBorder))            // if no valid border attribute, then...
            {                                // check the table's frame attribute
               var nParFrame = eParElement.getAttribute('frame');
               if(nParFrame != null)         // if frame has ANY value, then...
               {
                  nTopPos += 1;              // append one pixel to counter
               }
            }
            else if(nParBorder > 0)          // if a border width is specified, then...
            {
               nTopPos += nParBorder;        // append the border width to counter
            }
         }
      }

      nTopPos += eParElement.offsetTop;      // append top offset of parent
      eParElement = eParElement.offsetParent; // and move up the element hierarchy
   }                                         // until no more offset parents exist
   return nTopPos;                           // return the number calculated
}