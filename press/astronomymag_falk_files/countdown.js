
var numberOfRepeats = 1;
var repeatCounter = 0;
var numberOfFrames = new Array(7,6,4,9,2,5);
var framePause = new Array();
var waitTimer, showTimer;
framePause[0] = new Array(3,3,3,3,3,3,3); //in seconds
framePause[1] = new Array(3,3,3,3,3,3);
framePause[2] = new Array(2,2,2,3);
framePause[3] = new Array(3,2,2,2,2,2,2,2,4);
framePause[4] = new Array(1,11);
framePause[5] = new Array(4,4,4,4,4);
loadingGraphic = new Image();
var loadingGraphicIsLoaded = false;
loadingGraphic.onload = function() {loadingGraphicIsLoaded = true;}
loadingGraphic.src = 'https://pub-e537d4245eb54823b4ef9e72eec121b5.r2.dev/press/astronomymag_falk_files/im_homejs/animationnew/anim_loading.jpg';

//to keep track of what's been loaded, to avoid redundancy
var framesLoaded = new Array();
for (i=0;i<numberOfFrames.length;i++) {
    framesLoaded[i] = new Array();
}


//this function, animatePreload, loads all the first frames of all animations
function animatePreload() { //at least load the first frames of the animation
	for (i=0; i < numberOfFrames.length; i++) {
        loadImageAndNextImage(i, 0);
	}
}

//this function loads frames and triggers subsequent loads of additional frames
function loadImageAndNextImage(section, frame) {
    eval("hvu" + section + "_" + frame + " = new Image");
    eval("hvu" + section + "_" + frame + ".src = 'im_homejs/animationnew/anim_demo" + section + "_" + frame + ".jpg'");
    if (frame < numberOfFrames[section]) {
        eval("hvu" + section + "_" + frame + ".onLoad = loadImageAndNextImage(" + section + "," + (frame + 1) + ");framesLoaded[" + section + "][" + frame + "] = true;");//recursively load next frames in animation; register themselves
          } else {
        eval("hvu" + section + "_" + frame + ".onLoad = framesLoaded[" + section + "][" + frame + "] = true;");//it's the last frame in animation, so just register
    }
}


function hide(object) {
  if (document.getElementById) {
    document.getElementById(logintable).style.visibility = 'hidden';
  }
  else if (document.layers && document.layers.logintable) {
    document.layers.logintable.visibility = 'hidden';
  }
  else if (document.all) {
    document.all.logintable.style.visibility = 'hidden';
  }
}

function HideLayer(){
if (document.getElementById) {
   document.getElementById('logintable').style.visibility = 'hidden';
}
else if (document.all) {
    document.all.logintable.style.visibility = 'hidden';
}
else if (document.layers) {
    document.layers.logintable.style.visibility = 'hidden';
}
}

function ShowLayer(){
document.hvu.src ='https://pub-e537d4245eb54823b4ef9e72eec121b5.r2.dev/press/astronomymag_falk_files/im_homejs/hvu-anew3.jpg';//bring back original hvu image
if (document.getElementById) {
   document.getElementById('logintable').style.visibility = 'visible';
}
else if (document.all) {
    document.all.logintable.style.visibility = 'visible';
}
else if (document.layers) {
    document.layers.logintable.style.visibility = 'visible';
}
}


function animate(section, frame) {
if (!loadingGraphicIsLoaded || !document.images) { return true; }
//clear timers
clearTimeout(waitTimer);
clearTimeout(showTimer);
if (repeatCounter == numberOfRepeats) {
	repeatCounter = 0;
	ShowLayer();
	return true;
}
//is frame loaded?
if (framesLoaded[section][frame]) {
	if (frame == 0 && repeatCounter == 0) {
		HideLayer();
	}
	document.hvu.src = eval("hvu" + section + "_" + frame + ".src");//put up the first frame immediately
	frameToShow = frame + 1;
} else {
	if (frame == 0) {
		document.hvu.src = loadingGraphic.src;
		HideLayer();
	}
	waitTimer = setTimeout("animate(" + section + "," + frame +")", 100);
	return true;
}

if (frame == numberOfFrames[section] - 1) {//last frame
	repeatCounter++;
	frameToShow = 0;
}

showTimer = setTimeout("animate(" + section + "," + frameToShow + ")", framePause[section][frame] * 1000);


}

/*function init_timer() {
now = new Date()
mission = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 20, 0, 0, 0)

remaining = Math.floor(mission.getTime()/1000) - Math.floor(now.getTime()/1000)
remaining = <% response.write("333") %>
 timer()
}*/

function timer() {
 if (remaining < 0) { remaining = 0 }

 hours = Math.floor(remaining / 3600)

 minutes = Math.floor((remaining % 3600) / 60)

 seconds = remaining % 60

 dest = document.getElementById("countdown")
 if (dest != null) {
 	dest.innerHTML = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds)
 }

 --remaining

 setTimeout("timer()", 1000)
}

function pad(num) {
 return (num < 10 ? "0" : "") + num
}