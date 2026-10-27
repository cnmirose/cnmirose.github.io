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
document.getElementById('s.dateRange').value="";
  if (work.id=="primaryTab1"){document.getElementById('tab').value="";document.getElementById("searchFormId").submit();}
  if (work.id=="primaryTab3"){document.getElementById('tab').value="globe";document.getElementById('sortBy').value="-articleprintpublicationdate";document.getElementById("searchFormId").submit();}
  if (work.id=="primaryTab4")
      {
        if (document.getElementById('s.sm.query').value != ""){window.location="http://calendar.boston.com/search?swhat=" + document.getElementById('s.sm.query').value;}
        else {window.location="http://calendar.boston.com/search?p12=bcom_searchbox_events&swhere=Boston%2C+MA&srad=25.0&st=event&svt=text&search=true&swhat=";}
      }

  if (work.id=="primaryTab7"){
    if (document.getElementById('s.sm.query').value != ""){
      document.getElementById('tab').value="yp";
      document.getElementById("searchFormId").submit();
      //;
    }
    else{window.location="http://yp.boston.com/yp/";}
  }
}

function clickSearch(){document.getElementById('tab').value="";document.getElementById("searchFormId").submit();}
function omnitureCode(tabName){
  var var5='';
  if (tabName.id=="searchFormId"){var5='bcom_searchbox_button';}
  if (tabName.id=="primaryTab1"){var5='bcom_searchbox_default';}
  if (tabName.id=="primaryTab3"){var5='bcom_searchbox_globe ';}
  if (tabName.id=="primaryTab4"){var5='bcom_searchbox_events';}
  if (tabName.id=="primaryTab7"){var5='bcom_searchbox_yellowpages';}
  s_linkType='o'; s_linkName='search_query'; s_eVar2=keyword(); s_eVar5=var5; s_lnk=s_co(tabName); s_gs('nytbglobe');
}