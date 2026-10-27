var doc=document,win=window,sById=(doc.getElementById)?true:false;
// popup
function openWindow(url,name,props){try{props=props.replace(/(resizable|scrollbars)\=no/g,'$1=yes');var nw=win.open(url,name,props);nw.focus();window.event.cancelBubble=true;}catch(e){}}  
function MM_openBrWindow(url,name,props){openWindow(url,name,props);}
function openVideoWindow(url,name){openWindow(url,name,'width=750,height=550,resizable=yes,scrollbars=yes,toolbar=no,location=no,menubar=no,status=no');}
function closeWindow(){var pw=win.opener;if(pw)pw.focus();win.close();}
// generic image load - rollovers
function gloadImages(srcs,fu){if(sById){if(!win.gimgs){win.gimgs=new Array();}var g=win.gimgs;for(var i=0;i<srcs.length;i++){var img=new Image();var nsrc=(!fu)?imgurl+srcs[i]:srcs[i];img.src=nsrc;g[g.length++]=img;}}}
function changeImageOn(url,name,fu){if(sById){var i=doc.getElementById(name);if(i){i.oSrc=i.src;if(!fu)url=imgurl+url;i.src=url;}}}
function changeImageOff(name){if(sById){var i=doc.getElementById(name);if(i)i.src=i.oSrc;}}
function windowLoaded(){gloadImages(gimages);}
// unsupported
function unsupportedFeature(){document.writeln('<a href="http://www.boston.com/help/browser_upgrade/" class="bold" target="_new" style="text-decoration: underline;">Upgrade Your Browser:</a> A feature on this page is missing, as it is not supported by your browser.<br>Please <a href="http://www.boston.com/help/browser_upgrade/" style="text-decoration: underline;" target="_new">upgrade your browser</a> to improve your experience on Boston.com.');}
// world now video player defaults
function displayVideoHelp(){var videohelppage=window.open('http://www.boston.com/help/videoplayer/about/','CONTENT');}
function playVideo(){displayVideoHelp();}
function playVideoClip(){displayVideoHelp();}
function playVideoClips(){displayVideoHelp();}
function checkLaunchVideo(){}
// cookie functions
function setCookie(name,value,expires,path,domain,secure){document.cookie=name+'='+escape(value)+((expires)?';expires='+expires.toGMTString():'')+';path='+((path)?path:'/')+';domain='+((domain)?domain:'boston.com')+((secure)?';secure':'');}
function getCookie(name){var dc=document.cookie,prefix=name+'=',begin=dc.indexOf('; '+prefix);if(begin==-1){begin=dc.indexOf(prefix);if(begin!=0)return null;}else begin+=2;var end=dc.indexOf(';',begin);if(end==-1)end=dc.length;return unescape(dc.substring(begin+prefix.length,end));}
function expireCookie(name,path,domain){document.cookie=name+'=;expires=Thu, 01-Jan-70 00:00:01 GMT;path='+((path)?path:'/')+';domain='+((domain)?domain:'boston.com');}
// generic functions
function redirectSelectMenu(smenu){if(typeof(smenu)=='string'&&sById)smenu=doc.getElementById(smenu);if(smenu){var sval=smenu.options[smenu.selectedIndex].value;if(sval)document.location.href=sval;}}
// registration
function showLogin(twidth){
  if(!twidth)twidth=191;
  var cookie1=getCookie('pathAuth'),cookie2=getCookie('pathAuthSess');
  document.writeln('<table width="'+twidth+'" cellpadding="0" cellspacing="0" border="0" style="border-top: 1px solid #ffcc33; border-bottom: 1px solid #ffcc33;"><tr><td align="center" style="background: #f7efce url(\'http://cache.boston.com/bonzai-fba/File-Based_Image_Resource/spacer_f7efce.gif\') repeat;"><div style="font-family: arial,helvetica,sans-serif; font-size: 8pt; padding: 3px 0px;">');
  if(cookie1!=null||cookie2!=null){document.writeln('<span style="font-weight: bold; padding-right: 8px;"><a href="?__goto=mcenter" style="text-decoration: none; color: #000066;">Member Center</a></span> | <span style="padding-left: 8pt;"><a href="?__goto=logout" style="color: #000066;">Log Out</a></span>');}
  else{document.writeln('<span style="font-weight: bold; padding-right: 8px;"><a href="?__goto=loginonlypage" style="text-decoration: none; color: #000066;">Sign In</a></span> | <span style="padding-left: 8pt;"><a href="?__goto=loginpage" style="color: #000066;">Register Now</a></span>');}
  document.writeln('</div></td></tr></table>');
}

// registration Redesigned
function showLoginRD(twidth){
  if(!twidth)twidth=191;
  var cookie1=getCookie('pathAuth'),cookie2=getCookie('pathAuthSess');
  if(cookie1!=null||cookie2!=null){document.writeln('<div align="center"><span style="font-weight: bold; padding-right: 2px; "><a href="http://www.boston.com/?__goto=mcenter" style="text-decoration: none; color: #ffffff;">Member Center</a></span> | <span style="padding-left: 3px;"><a href="http://www.boston.com/?__goto=logout" style="color: #ffffff;">Log Out</a></span></div>');}
  else{document.writeln('<div align="center"><span style="font-weight: bold; padding-right: 8px;"><a href="http://www.boston.com/?__goto=loginonlypage" style="text-decoration: none; color: #ffffff;">Sign In</a></span> | <span style="padding-left: 7px;"><a href="http://www.boston.com/?__goto=loginpage" style="color: #ffffff;">Register Now</a></span></div>');}
}

// article page
var cpgnum=0,images_dynamic=[],isScraper=false;
function adjustArticlePage(){if(sById){var ad=doc.getElementById('articleAd');if(ad){var ad=ad.innerHTML;if(ad){var adw=ad.match(/\s+width=["']*(\w+)["']*/i);if(adw)adw=adw[1]-0;if(!adw){if(ad.search(/sky/i)!=-1)adw=160;else adw=336;}isScraper=(adw<=160);if(isScraper){var awrap=doc.getElementById('articleWrap');awrap.className='scraper';}}}if(images_dynamic){var idyl=images_dynamic.length;for(var i=0;i<idyl;i++){eval(images_dynamic[i]+'()');}}}}
function articlePaginate(){if(sById){var pg=document.URL.match(/page=(\w+)/);if(pg)pg=pg[1];else pg=1;if(pg=='full')return;cpgnum=pg-0;var cpg=doc.getElementById('page'+cpgnum);cpg.className='showPage';if(cpgnum!=1){var acon=doc.getElementById('article');if(acon)acon.className='subpage';cspan=doc.createElement('SPAN');cspan.className='pginfo';cspan.appendChild(doc.createTextNode('Page '+cpgnum+' of '+articlepgs+' --'));cpg.insertBefore(cspan,cpg.firstChild);}var agraphs=doc.getElementById('articleGraphs');agraphs.className='hidePages';var clink=doc.getElementById('link'+cpgnum),prev=doc.getElementById('prev'),next=doc.getElementById('next');clink.className='active';if(!asep)asep='?';if(cpgnum==1)prev.className='hide';else{var plink=doc.createElement('A');plink.appendChild(doc.createTextNode('Previous'));plink.href=articleurl+asep+'page='+(cpgnum-1);prev.appendChild(plink);}if(cpgnum==articlepgs)next.className='hide';else{var npg=cpgnum+1,cspan=doc.createElement('SPAN'),clink=doc.createElement('A'),nlink=doc.createElement('A');nlink.appendChild(doc.createTextNode('Next'));nlink.href=articleurl+asep+'page='+npg;next.insertBefore(nlink,next.firstChild);clink.appendChild(doc.createTextNode('Continued...'));clink.href=articleurl+asep+'page='+npg;cspan.className='continued';cspan.appendChild(clink);var cpgs=cpg.getElementsByTagName('P');cpgs[cpgs.length-1].appendChild(cspan);}var apaginate=doc.getElementById('pagination');apaginate.className='show'}} 
function embedArticleContent(){if(sById){var cpg=(cpgnum)?doc.getElementById('page'+cpgnum):doc.getElementById('articleGraphs');if(!cpg)return;var graphs=cpg.getElementsByTagName('P');if(!graphs)return;var glen=graphs.length,tpos=0;var atools=doc.getElementById('articleTools'),amore=doc.getElementById('articleMoreLinks');if(atools||amore){var tpos=(glen>1)?1:0,tpg=graphs[tpos],aembed=doc.createElement('DIV');aembed.id='articleEmbed';if(atools){var atoolsc=atools.cloneNode(true),atext=doc.createElement('DIV');atext.className='toolsHeader';atoolsc.className='embed';atext.appendChild(doc.createTextNode('Article Tools'));atoolsc.insertBefore(atext,atoolsc.firstChild);aembed.appendChild(atoolsc);}if(amore){var amorec=amore.cloneNode(true);amorec.className='embed';aembed.appendChild(amorec);}tpg.parentNode.insertBefore(aembed,tpg);}var amid=doc.getElementById('articleBodyMiddle');var mpos=tpos+4;if(amid&&(glen>mpos+1)){var article=doc.getElementById('article'),mpg=graphs[mpos];mpg.parentNode.insertBefore(amid,mpg);}}}
//Facebook
function fbs_click() {
  u=location.href;
  t=document.title;
  void(window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'&t='+encodeURIComponent(t),'sharer','toolbar=no,width=626,height=436'));
  return false;
}
//Todays Globe
function TodaysGlobe(lastMod,altText){
var today = new Date(); var year = today.getFullYear(); year = year + ""; var today = today.getMonth() + 1 + "/" + today.getDate() + "/" + year.substr(2,2); if (today==lastMod)document.write("Today's Globe"); else document.write(altText);}
//ENE Galleries
function adjustGalleryAd(){if(sById){var ad=doc.getElementById('galleryAd');if(!ad)return;var ad=ad.innerHTML;if(!ad)return;var pattern=/empty/i;var isAd=pattern.test(ad);}isSeek=(isAd==true);if(isSeek){var awrap=doc.getElementById('galleryTitle');awrap.className='seek';}} 

function keyword2(){if (document.getElementById('s.sm.query2').value != "" && document.getElementById('s.sm.query2').value != null){return document.getElementById('s.sm.query2').value.toLowerCase();}else{return "User_Blank"}}