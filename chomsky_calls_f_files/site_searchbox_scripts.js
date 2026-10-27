function keyword(){
  if (document.getElementById('s.sm.query').value != "" && document.getElementById('s.sm.query').value != null){return document.getElementById('s.sm.query').value.toLowerCase();}
  else{return "User_Blank"}
}
var primary_id='primaryTab1';
function roll(tab){
  if(tab.id != primary_id){
    if(tab.src.indexOf('_ON')==-1){tab.src=tab.src.substring(0,tab.src.indexOf('.gif')) + '_ON.gif';}
    else{tab.src=tab.src.substring(0,tab.src.indexOf('_ON.gif')) + '.gif';}
  }
}
function clickTab(work){
if (document.getElementById('s.sm.query').value != ""){
document.getElementById('s.dateRange').value="";
document.getElementById('sortBy').value="";
  if (work.id=="primaryTab1"){
    if (document.getElementById('p1') != null){
    document.getElementById('p1').value='Header_Searchbox_GreaterBoston';
    }
    document.getElementById('tab').value="";
    omnitureCode(work);
    document.getElementById("searchFormId").submit();
  }
  if (work.id=="primaryTab3"){
    if (document.getElementById('p1') != null){
	  document.getElementById('p1').value='Header_Searchbox_BostonGlobe';
	}
  	document.getElementById('tab').value="globe";
  	document.getElementById('sortBy').value="-articleprintpublicationdate";
  	omnitureCode(work);
  	document.getElementById("searchFormId").submit();
  }
  if (work.id=="primaryTab4"){
    window.location="http://calendar.boston.com/search?p1=HeaderSearchbox_Events&p12=hp_header_searchbox_events&swhere=Boston%2C+MA&srad=25.0&st=event&svt=text&search=true&swhat=" + document.getElementById('s.sm.query').value;
  }
  if (work.id=="primaryTab7"){
    if (document.getElementById('p1') != null){
      document.getElementById('p1').value='Header_Searchbox_YellowPages';
    }
    document.getElementById('tab').value="yp";
    omnitureCode(work);
    document.getElementById("searchFormId").submit();
  }
}
else{
  if (work.id=="primaryTab1"){
    document.getElementById('tab').value="";
  }
  if (work.id=="primaryTab3"){
    document.getElementById('tab').value="globe";
  }
  if (work.id=="primaryTab4"){
    document.getElementById('tab').value="events";    
  }
  if (work.id=="primaryTab7"){
    document.getElementById('tab').value="yp";
  }
  if (document.getElementById(primary_id).src.indexOf('_ON.gif') != -1 && primary_id!=work.id ){
    document.getElementById(primary_id).src=document.getElementById(primary_id).src.substring(0,document.getElementById(primary_id).src.indexOf('_ON.gif')) + '.gif';
    primary_id=work.id;
  }                      
}
}

function clickSearch(){
  omnitureCode(document.getElementById(primary_id));
  document.getElementById('sortBy').value="";
  if (primary_id=="primaryTab1"){
    document.getElementById('tab').value="";   
  }
  if (primary_id=="primaryTab3"){
    document.getElementById('tab').value="globe";
    document.getElementById('sortBy').value="-articleprintpublicationdate";
  }                        
  if (primary_id=="primaryTab7"){                        
    document.getElementById('tab').value="yp";
  }            
  if (primary_id=="primaryTab4"){
                          window.location="http://calendar.boston.com/search?p12=results_searchbox_events&swhere=Boston%2C+MA&srad=25.0&st=event&svt=text&search=true&swhat=" + document.getElementById('s.sm.query').value;
                          return false;
                        }      
  
  
}

  var var5='hp_header_';

function omnitureCode(tabName){

  var temp5 = var5;
  if (tabName.id=="primaryTab4"){s_linkType='o'; s_linkName='search_query'; s_lnk=s_co(tabName); s_gs('nytbglobe');}
  else {
  if (tabName.id=="searchFormId"){if(document.getElementById('p1')!=null){document.getElementById('p1').value='Header_Searchbox_SearchButton'};temp5=var5 + 'searchbox_searchbutton';}
  if (tabName.id=="primaryTab1"){if(document.getElementById('p1')!=null){document.getElementById('p1').value='Header_Searchbox_GreaterBoston'};temp5=var5 + 'searchbox_greaterboston';}
  if (tabName.id=="primaryTab3"){if(document.getElementById('p1')!=null){document.getElementById('p1').value='Header_Searchbox_BostonGlobe'};temp5=var5 + 'searchbox_bostonglobe';}
  if (tabName.id=="primaryTab7"){if(document.getElementById('p1')!=null){document.getElementById('p1').value='Header_Searchbox_YellowPages'};temp5=var5 + 'searchbox_yellowpages';}
  s_linkType='o'; s_linkName='search_query'; s_eVar2=keyword(); s_eVar5=temp5; s_lnk=s_co(tabName); s_gs('nytbglobe');
  }
}