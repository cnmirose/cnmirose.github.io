var gbDay=0;var gbDate;var gbYear;var gbMonth;var gbMonNum=0;var calCount=0;var dte;var tmpCalCode="";var OmniCount=1;
var ldays = new Array("jan",31,"feb",28,"mar",31,"apr",30,"may",31,"jun",30,"jul",31,"aug",31,"sep",30,"oct",31,"nov",30,"dec",31)
var wdays = new Array("sun","mon","tue","wed","thu","fri","sat");
function dAdd(x){
	x=parseInt(x)
	if(x>23){
		for(i=0;i<ldays.length-1;i+=2){
			if(dte[1].substring(0,3)==ldays[i]){endDay=ldays[i+1]};
		}
		if(x==endDay){tmp=1;gbMonNum++}else{tmp=x+1}
	}else{ tmp = x+1 }
	return tmp;
}
function wAdd(x){
	if(x<6){tmp = parseInt(x)+1}
	else{tmp=0}
	return tmp;
}
function renderCal(){
	if(calCount<5){
		if((gbDay==0)||(gbDay==6)){dColor="_green"}
		else{dColor="_white"}
		if(gbDate<10){padzero = "0"}
		else{padzero = ""}
		tmpCalCode+="<td><a href='http://calendar.boston.com/search?swhat=&swhen=" + gbMonNum +"%2F" + gbDate + "%2F" + gbYear + "&st=event&p1=Header_Calendar_Pos" + OmniCount + "&p12=" + var5 + "header_thingstodo_link" + OmniCount + "'><img src='http://cache.boston.com/bonzai-fba/File-Based_Image_Resource/"+padzero+gbDate+dColor+".gif' style='border:0px;width:39px;height:18px;'><br/><img src='http://cache.boston.com/bonzai-fba/File-Based_Image_Resource/"+wdays[gbDay]+".gif' style='border:0px;width:39px;height:12px;'></a></td>";
		gbDate = dAdd(gbDate)
		gbDay = wAdd(gbDay)
		calCount++;
                OmniCount++;
		renderCal();
	}else{
		document.write("<table border='0' cellpadding='0' cellspacing='0'><tr>"+tmpCalCode+"</tr></table>");
	}
}
function initCal(){
	CalDate=CalDate.toLowerCase()
	if(CalDate.indexOf(":")==-1){
		dte=CalDate.split("|")
	}else{
		dte=new Array();
		tmpDte=CalDate.split("-");
		dte[0]=tmpDte[0].substring(0,3);
		dte[1]=tmpDte[1];
		dte[3]=tmpDte[2].substring(0,4);
		tmpDte=tmpDte[0].split(", ");
		dte[2]=tmpDte[1];
	}
	if((dte[3] % 4)==0){ldays[3]=29}
	for(i=0;i<wdays.length;i++){
		if(dte[0].substring(0,3)==wdays[i]){gbDay=i};
	}
        if(dte[2].indexOf("0")==0){dte[2]=dte[2].charAt(1)}
	gbDate=parseInt(dte[2]);
	gbMonth=dte[1];
	gbYear=dte[3];
	for(i=2;i<ldays.length-1;i+=2){
		if(gbMonth.substring(0,3)==ldays[i]){gbMonNum=i/2};
	}
	gbMonNum++;
	renderCal();
}
initCal();