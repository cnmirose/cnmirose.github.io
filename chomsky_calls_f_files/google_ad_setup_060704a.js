  // query evaluation  
  var queries=OAS_query.split('&'),page_type='';
  for(var q=0;q<queries.length;q++){
    var query=queries[q].split('=');
    if(query[0]=='pagetype'){page_type=query[1];break;}
  }
  // article page handling
  if(page_type=='article_page'){
    var pre='article_';
    var channels=['sports_celtics','sports_globe','sports_patriots','sports_redsox','sports_bruins','sports','ae','business','cars','realestate','yourlife','travel','news_local','news_nation','news_politics'];
  }
  // all else
  else{
    var pre='section_';
    var channels=['sports','sports_celtics','sports_globe','sports_patriots','sports_redsox','ae','ae_events','ae_movies','business','business_markets','cars','realestate','realestate_buying','traffic','travel','travel_boston','weather','yourlife','weddings','news'];
  }
  // oas channel setup
  var spsplit=OAS_sitepage.split('/'),dchan=spsplit[1],chan='misc';
  if(spsplit.length>2)var lchan=spsplit[1]+'_'+spsplit[2];
  else var lchan=dchan;
  switch(lchan){
    case 'ae_personals':lchan='personals';
    case 'yourlife_weddings':lchan='weddings';
    }
  for(var i=0;i<channels.length;i++){
    var echan=channels[i];
    if(lchan==echan){chan=lchan;break;}
    else if(dchan==echan)chan=dchan;
  }
  google_ad_channel=pre+chan;
  if(pre=='section_')google_hints=googleHints(chan);

function googleHints(chan){
  switch(chan){
    case 'misc':return '';
    case 'sports':return 'MLB Merchandise, Red Sox,-Yankees';
    case 'sports_celtics':return 'NFL directv, -merchandise';
    case 'sports_globe':return 'MLB Merchandise, Red Sox,-Yankees';
    case 'sports_patriots':return '';
    case 'sports_redsox':return 'MLB Merchandise, Red Sox,-Yankees';
    case 'ae':return '';
    case 'ae_events':return '';
    case 'ae_movies':return '';
    case 'business':return '';
    case 'business_markets':return '';
    case 'cars':return '';
    case 'personals':return '';
    case 'realestate':return '';
    case 'realestate_buying':return '';
    case 'traffic':return '';
    case 'travel':return '';
    case 'travel_boston':return '';
    case 'weather':return '';
    case 'yourlife':return '';
    case 'weddings':return '';    
    case 'news':return '';
  }
  return '';
}
