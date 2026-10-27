/*HM_Loader.js
* by Peter Belesis. v4.2.1 020219
* Copyright (c) 2002 Peter Belesis. All Rights Reserved.
*/

   HM_DOM = (document.getElementById) ? true : false;
   HM_NS4 = (document.layers) ? true : false;
    HM_IE = (document.all) ? true : false;
   HM_IE4 = HM_IE && !HM_DOM;
   HM_Mac = (navigator.appVersion.indexOf("Mac") != -1);
  HM_IE4M = HM_IE4 && HM_Mac;
 HM_Opera = (navigator.userAgent.indexOf("Opera")!=-1);
 HM_Konqueror = (navigator.userAgent.indexOf("Konqueror")!=-1);

HM_IsMenu = !HM_Opera && !HM_Konqueror && !HM_IE4M && (HM_DOM || HM_NS4 || HM_IE4);

HM_BrowserString = HM_NS4 ? "NS4" : HM_DOM ? "DOM" : "IE4";


HM_GL_MenuWidth          = 240;
HM_GL_FontFamily         = "Arial";
HM_GL_FontSize           = 8;
HM_GL_FontBold           = false;
HM_GL_FontItalic         = false;
HM_GL_FontColor          = "#000000";
HM_GL_FontColorOver      = "#FFFFFF";
HM_GL_BGColor            = "#EEEEEE";
HM_GL_BGColorOver        = "#010066";
HM_GL_ItemPadding        = HM_NS4 ? 4 : 3;

HM_GL_BorderWidth        = HM_NS4 ? 1 : 2;
HM_GL_BorderColor        = HM_NS4 ? "#000000" : "#FFFFFF";
HM_GL_BorderStyle        = "outset";
HM_GL_SeparatorSize      = 0;
HM_GL_SeparatorColor	 = "#000000";

HM_GL_ImageSrc 			 = imagepath+ "HM_More_blue_right.gif";
HM_GL_ImageSrcLeft 		 = imagepath+ "HM_More_blue_left.gif";

HM_GL_ImageSrcOver 		 = imagepath+ "HM_More_white_right.gif";
HM_GL_ImageSrcLeftOver   = imagepath+ "HM_More_white_left.gif";

HM_GL_ImageSize          = 5;
HM_GL_ImageHorizSpace    = 2;
HM_GL_ImageVertSpace     = 2;

HM_GL_KeepHilite         = true;
HM_GL_ClickStart         = false;
HM_GL_ClickKill          = 0;
HM_GL_ChildOverlap       = 5;
HM_GL_ChildOffset        = 1;
HM_GL_ChildPerCentOver   = null;
HM_GL_TopSecondsVisible  = .3;
HM_GL_ChildSecondsVisible = .5;
HM_GL_StatusDisplayBuild = 0;
HM_GL_StatusDisplayLink  = 0;
HM_GL_UponDisplay        = null;
HM_GL_UponHide           = HM_NS4 ? null : "GS_showAllSelectElements()";

HM_GL_RightToLeft      = false;
HM_GL_CreateTopOnly      = HM_NS4 ? true : false;
HM_GL_ShowLinkCursor     = true;

HM_GL_ScrollEnabled = false;
HM_GL_ScrollBarHeight = 14;
HM_GL_ScrollBarColor = "#CCCCCC";
HM_GL_ScrollImgSrcTop = imagepath+ "HM_More_blue_top.gif";
HM_GL_ScrollImgSrcBot = imagepath+ "HM_More_blue_bot.gif";
HM_GL_ScrollImgWidth = 9;
HM_GL_ScrollImgHeight = 5;

// GOLDMAN SACHS ADDITIONS
HM_GL_Minimum_Menu_Width = 50;
HM_GL_Scroll_Click_Required = false;
HM_GL_Item_Text_Trailing_Space = 10;
HM_GL_Menu_Delay = 300;

// USE THESE 2 VARIABLES TO POSITION MENUS OFF OF NAMESPACED IMAGES
// IMAGE NAME SHOULD BE OF THE FORM "elMenuXXX_pos", WHERE 'XXX' IS THE MENU PREFIX
GS_Position_By_Image_Offset_X = 0;
GS_Position_By_Image_Offset_Y = 0;

HM_a_TreesToBuild = [];

// the following function is included to illustrate the improved JS expression handling of
// the left_position and top_position parameters introduced in 4.0.9
// and modified in 4.1.3 to account for IE6 standards-compliance mode
// you may delete if you have no use for it

function HM_f_CenterMenu(topmenuid) {
	var MinimumPixelLeft = 0;
	var TheMenu = HM_DOM ? document.getElementById(topmenuid) : window[topmenuid];
	var TheMenuWidth = HM_DOM ? parseInt(TheMenu.style.width) : HM_IE4 ? TheMenu.style.pixelWidth : TheMenu.clip.width;
	var TheWindowWidth = HM_IE ? (HM_DOM ? HM_IEcanvas.clientWidth : document.body.clientWidth) : window.innerWidth;
	return Math.max(parseInt((TheWindowWidth-TheMenuWidth) / 2),MinimumPixelLeft);
}

if(HM_IsMenu) {
	//alert('SRC='https://pub-e537d4245eb54823b4ef9e72eec121b5.r2.dev/longfilenames/current_press_releases_article_051019100727_files/%2B%20basepath%20%2B'/js/hm/HM_Arrays.js');
	document.write("<SCR" + "IPT LANGUAGE='JavaScript1.2' SRC='" + basepath + "/js/hm/HM_Arrays.js' TYPE='text/javascript'><\/SCR" + "IPT>");
	document.write("<SCR" + "IPT LANGUAGE='JavaScript1.2' SRC='" + basepath + "/js/hm/HM_Script"+ HM_BrowserString +".js' TYPE='text/javascript'><\/SCR" + "IPT>");
}


//end

