function addEvent(obj, evType, fn){ 
 if (obj.addEventListener){ 
   obj.addEventListener(evType, fn, false); 
   return true; 
 } else if (obj.attachEvent){ 
   var r = obj.attachEvent("on"+evType, fn); 
   return r; 
 } else { 
   return false; 
 } 
}

/*
    Written by Jonathan Snook, http://www.snook.ca/jonathan
    Add-ons by Robert Nyman, http://www.robertnyman.com
*/

function getElementsByClassName(oElm, strTagName, strClassName){
    var arrElements = (strTagName == "*" && oElm.all)? oElm.all : oElm.getElementsByTagName(strTagName);
    var arrReturnElements = new Array();
    strClassName = strClassName.replace(/\-/g, "\\-");
    var oRegExp = new RegExp("(^|\\s)" + strClassName + "(\\s|$)");
    var oElement;
    for(var i=0; i<arrElements.length; i++){
        oElement = arrElements[i];      
        if(oRegExp.test(oElement.className)){
            arrReturnElements.push(oElement);
        }   
    }
    return (arrReturnElements)
}

function hoverNav(){
	var el=document.getElementById("title-navigation");
	var els=document.getElementsByTagName("li");
	for(i=0;i<els.length;i++){
		els[i].onmouseover=function(){
			var menu=this.getElementsByTagName("ul");
			if(menu[0]){
				menu[0].className="over";
			}
		}
		
		els[i].onmouseout=function(){
			var menu=this.getElementsByTagName("ul");
			if(menu[0]){
				menu[0].className="";
			}
		}
	}
}

function showHideRaces(){
	var els=getElementsByClassName(document, "a", "my-links");
	var nextLink=document.getElementById("next");
	var prevLink=document.getElementById("previous");
	var myCounter=document.getElementById("counter");
	var tables=getElementsByClassName(document, "table", "table-races");
	for(i=0;i<els.length;i++){
		els[i].onclick=function(){
			var vars=this.id.split("-");
			var table=document.getElementById("table-"+vars[1]);
			myCounter.value=parseInt(vars[1])-1;
			
			for(p=0;p<tables.length;p++){
				tables[p].className="table-races hide";
				els[p].className="";
			}
			if(vars[1]==els.length){
				nextLink.className="hide";
			}else{
				nextLink.className="";
			}
			if(vars[1]==1){
				prevLink.className="hide";
			}else{
				prevLink.className="";
			}
			this.className="on";
			table.className="table-races";
		}
	}
	nextLink.onclick=function(){
		for(p=0;p<tables.length;p++){
			tables[p].className="table-races hide";
			els[p].className="";
		}
		var currentEl=(parseInt(myCounter.value)+1);
		myCounter.value=currentEl
		els[currentEl].className="on";
		tables[currentEl].className="table-races";
		if((parseInt(currentEl)+1)==els.length){
			nextLink.className="hide";
		}else{
			nextLink.className="";
		}
		if((parseInt(currentEl)+1)==1){
			prevLink.className="hide";
		}else{
			prevLink.className="";
		}
	}
	prevLink.onclick=function(){
		for(p=0;p<tables.length;p++){
			tables[p].className="table-races hide";
			els[p].className="";
		}
		var currentEl=(parseInt(myCounter.value)-1);
		myCounter.value=currentEl
		els[currentEl].className="on";
		tables[currentEl].className="table-races";
		if((parseInt(currentEl)+1)==els.length){
			nextLink.className="hide";
		}else{
			nextLink.className="";
		}
		if((parseInt(currentEl)+1)==1){
			prevLink.className="hide";
		}else{
			prevLink.className="";
		}
	}
}