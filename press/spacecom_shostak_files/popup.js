//// array-based popup library
//// includes explicit function
//// WIMartin 001220
 
 /// generic window closer
function CloseWindow()
	{
	self.close();
	}
 
 /// explicit, standalone popup function
function PopupDisplayExp(url,window_name,width,height,xtra_features,xtra_parameter)
        {
        if (xtra_features != null)
                xtra_features = ","+xtra_features;
	if (xtra_parameter != null)
                url = url+"?"+xtra_parameter;
        var popup = window.open(url,window_name,"width="+width+",height="+height+xtra_features);
        popup.focus();
        }
         

///// set library arrays /////
var URL = new Array();
var PopupName = new Array();
var Width = new Array(); 
var Height = new Array();
var Xtra_features = new Array();
/////////////////////////////



////////////// popup library ///////////////////

 /// Virtual Space Tour
//URL['virtualtour'] = 'http://www.space.com/php/popup/virtualspacetour/noad_frameset.php';
URL['virtualtour'] = 'http://www.space.com/php/popup/virtualspacetour/noad_astropedia.php';
PopupName['virtualtour'] = 'virtualtour';
Width['virtualtour'] = 780; 
Height['virtualtour'] = 582;

 /// SPACE Trivia
URL['trivia'] = 'http://www.space.com/php/trivia/index.php';
PopupName['trivia'] = 'trivia';
Width['trivia'] = 644; 
Height['trivia'] = 490;

 /// Alien vs. Predator Trivia
URL['avp'] = 'http://www.space.com/php/trivia/avp/index.php';
PopupName['avp'] = 'avp';
Width['avp'] = 644; 
Height['avp'] = 490;

 /// Starry Night 
URL['sn'] = 'http://www.starrynight.com/promo/shipping.html';
PopupName['sn'] = 'sn';
Width['sn'] = 400;
Height['sn'] = 400;


 /// multimedia player
URL['mmplayer']='http://www.space.com/php/popup/mediaplayer/noad_frameset.php';
PopupName['mmplayer'] = 'MultimediaPlayer';
Width['mmplayer'] = 612;
Height['mmplayer'] = 500;
// 020605
//Width['mmplayer'] = 595;
//Height['mmplayer'] = 447;

 /// image gallery viewer
URL['imagegallery']='http://www.space.com/php/popup/imagegallery/noad_frameset.php';
PopupName['imagegallery'] = 'Media';
Width['imagegallery'] = 630;
Height['imagegallery'] = 543;

 /// imagepump viewer a.k.a Universal Viewer
URL['imagepump'] = 'http://www.space.com/php/popup/imagepump/noad_frameset.php';
PopupName['imagepump'] = 'UniversalViewer';
Width['imagepump'] = 600;
Height['imagepump'] = 440;

 /// alien creation kit 
URL['alienkit'] = 'http://www.space.com/games/aliencreation/index.php3';
PopupName['alienkit'] = 'AlienCreationKit';
Width['alienkit'] = 600;
Height['alienkit'] = 564;


////////////////////////////////////////////////




 /// popup function, driven by library array indexes
function PopupDisplay(name,query_str) {
        if (URL[name] == null)
                return;
        var url = URL[name];
        if (query_str !=  null)
                url = url+'?'+query_str;
        var features = "width="+Width[name]+",height="+Height[name];
        if (Xtra_features[name] != null)
                features = features+','+Xtra_features[name];
        var popup=window.open(url,PopupName[name],features);
        popup.focus();
        }
