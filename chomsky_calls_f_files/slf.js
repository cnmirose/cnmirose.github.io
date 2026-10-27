// 2006/11/01 14:50:30
var ANV='3.4.3a';
var ANSID=13651;
var ANID='TID';
var ANP=3;
var ANSEE=0;
var ANEU='http://anrtx.tacoda.net/e/e.js?';
var ANDCC='adg';
var ANEAC;
var ANECC;
var ANECD;
var ANEECD=0;
var ANEET;
var ANEJC;
var ANEJT;
var ANEPU='';
var ANERC;
var ANERP='http://tacoda.entrieva.com/tacoda/xml?';
var ANEST;
var ANEWT=250;
var ANME=0;
var ANMU='http://anrtx.tacoda.net/dastat/ping.js?';
var ANPCS='1';
var ANSCE=0;
var ANSCU='http://anrtx.tacoda.net/cbd/cbd?';
var ANTCC;
var ANVAD=0;
var AMSC=new Array (ANID);
var AMSDPF;
var AMSLGC=1;
var AMSRID='';
var AMSSID='';
var AMSSRID='';
var AMSTEP='te';
var AMSTES="tte/blank.gif";
var ANDD='boston.com';
var ANDNX=new Array();
var ANAS='http://anad.tacoda.net';
var AN2CCOP=new Array();
var AN2CCDA=new Array();
var AN2CCCC=new Array();
var ANCC=0;
var ANDPU='http://anrtx.tacoda.net/rtx/r.js?';
var ANRDF=0;
var ANVDT=0;
var ANSCC="unescape(document.location.href).toLowerCase()";
var ANURL=0;
var AN2CCDA=new Array("p1=GN_AE","/ae/movies","/food/restaurants","/ae/food","/ae/music","/ae/theater_arts","/ae/tv","/ae/books","/ae/celebrity","/ae/","games.boston.com","/wifi","/peripheral","/homevideo","/handheld","/computers","/cellphones","/camcorders","/cameras","/personaltech","forum","/business/tech","/personalfinance","/markets","/business","globestore","/sports/schools","/sports/college","/soccer","/bruins","/celtics","/patriots","/redsox","/sports","/getaways/europe","/getaways/us_southwest/las_vegas","/getaways/newyork","/travel/boston","/flights","/hotels","/travel","/relationships","/home","/celebrations","/health","/personals","marketplaces.boston.com","bostonworks.boston.com","/cars","/newhomes","/rentals","/realestate","re.boston.com","deathnotices","obits","obituraries","education","politics","opinion","editorial","globe","/news/local");
var AN2CCOP=new Array("c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c");
var AN2CCCC=new Array("ABU","MOV","ACW","FOD","MUS","ABW","TEV","ABV","AIZ","ABU","ACZ","WIR","ADS","AED","AEA","HCM","AEC","AEB","PEL","PEL","FOR","TCN","PFZ","INV","AAU","AIE","ABF","AAT","ABD","AAQ","AAO","AAN","AAP","SPT","JEU","JLV","JNY","JBO","AIW","AHX","TVL","LUV","AGK","ADE","HLT","LUV","ADK","JOB","CAR","ABJ","ABI","RES","RES","ABM","ABM","ABM","EDU","ADI","ADH","ADH","WDN","LCN");
var ANDEPC13651;
var ANTOV;
var ANCB1=0;
var ANCB3=0;
var ANRD='';
var ANOO=0;
var ANXCC='ZZZ';
var AMSK=new Array();
var AMSN=0;
var AMSVL=new Array();
var ANVDA=0;
var ANVSC='';
var ANDSZ=2;
var ANVSZ=ANDSZ;
var ANVAC='a';
var ANVAD=0;
var ANADS=new Array();
ANADS=["468x60a","728x90a","300x250a","120x600a","160x600a","468x60a|728x90a","120x600a|160x600a"];
ANPF();
if (typeof (tcdacmd) !='undefined' && tcdacmd !="")
{
tcdacmd=(tcdacmd + '');
var f=tcdacmd;
tcdacmd='';
TCDA (f);
}
function ANRC(n) {
var cn=n + "=";
var dc=document.cookie;
if (dc.length > 0) {
for(var b=dc.indexOf(cn); b!=-1; b=dc.indexOf(cn,b)) {
if((b!=0) && (dc.charAt(b-1) !=' ')) {
b++;
continue;
}
b+=cn.length;
var e=dc.indexOf(";",b);
if (e==-1) e=dc.length;
return unescape(dc.substring(b,e));
}
}
return null;
}
function ANSC(n,v,ex,p) {
var e=document.domain.split (".");
e.reverse();
var m=e[1] + '.' + e[0];
var cc=n+"="+escape(v);
if (ex) {
var exp=new Date;
exp.setTime(exp.getTime()+ex);
cc +=";expires="+exp.toGMTString();
}
if (p) {
cc +=";path="+p;
}
if (m) {
cc +=";domain="+m;
}
document.cookie=cc;
}
function ANGRD() {
if (top !=self || ANRD !='') {
return ANRD;
}
var rf=top.location.href;
var i=j=0;
i=rf.indexOf('/');
i=rf.indexOf('/',++i);
j=rf.indexOf('/',++i);
if (j==-1) {
j=rf.length;
}
r=rf.substring(i,j);
return r;
}
function ANTR(s) {
if (!s) {
return '';
}
s=s.replace(/^\s*/g,'');
s=s.replace(/\s*$/g,'');
return s;
}
function ANEH(m,u,l) {
var s=ANEU+'m='+escape(m)+'&u='+escape(u)+'&l='+l;
document.write('<SCR'+'IPT SRC="'+s+'" LANGUAGE="JavaScript"></SCR'+'IPT>');
return true;
}
function ANPF ()
{
if (ANSCE==1)
{
var now=new Date;
var c=ANRC ('TSC');
if (c!=null)
{
ANCB1=0;
var f=c.split("|");
var r=q=j=0;
for (var i=0; i<f.length; i++)
{
j=f[i].indexOf('O=');
if (j==0)
{
ANOO=f[i].substring(j+2);
continue;
}
j=f[i].indexOf('ST=');
if (j==0)
{
r=1;
var e=f[i].substring(j+3);
if ((Date.parse(now)/1000) - e > 86400) {
q=1;
f[i]="";
}
continue;
}
j=f[i].indexOf('3P=');
if (j==0)
{
ANCB3=f[i].substring(j+3);
if (q==1) {
f[i]="";
}
continue;
}
}
if (r==0 || q==1)
{
c=f.join("|");
ANSC("TSC",c,4*365*24*60*60*1000,"/");
ANCBD();
}
}
else
{
ANCBD();
}
}
}
function ANGCC (svc)
{
var ccc=null;
if (svc & ANSEE)
{
if (((ANPCS==2) && (ANECC !=null))   ||
((ANPCS==1) && (ANTCC==null))   )
{
ccc=ANECC.toUpperCase();
}
else
{
ccc=ANTCC;
}
}
else
{
ccc=ANTCC;
}
if ((ccc==null)         ||
!ccc.match (/\w{3}$/) )
{
ccc=ANDCC;
}
return ccc;
}
function ANCBD()
{
document.write ('<SCR' + 'IPT SRC="' + ANSCU + '"></SCR' + 'IPT>');
ANCB1=ANRC ('TSC')==null;
}
function TCDA(ps) {
if (!ps || ps=='') {
return;
}
var pa=ps.split(";");
for (var p=0; p < pa.length; p++)
{
kv=pa[p].split("=");
k=kv[0];
v=kv[1];
if (k!=null) {
k=ANTR(k);
}
if (v!=null) {
v=ANTR(v);
}
var m=k.toUpperCase();
switch (m) {
case ("SA"):
v=v.toLowerCase();
if (v!=null&&v!=''&&v.match(/[a-z]{1,2}/)) {
ANVAC=v;
}
break;
case ("SZ"):
v=v.toUpperCase();
if (v!=null&&v!='') {
ANVSZ=v;
}
break;
case ("CC"):
v=v.toUpperCase();
if (v !=null && v !='')
{
ANTCC=v;
}
break;
case ("SC"):
if (v!=null&&v!='') {
if (v.length > 256) {v=v.substring(0,256);}
ANVSC=v;
}
break;
case ("RD"):
if (v!=null&&v!='') {
if (v.length > 128) {v=v.substring(0,128);}
ANRD=v.toLowerCase();
}
break;
case ("DT"):
ANVDT=1;
break;
case ("ND"):
ANVDT=0;
break;
case ("DA"):
ANVDA=1;
break;
case ("AD"):
ANVAD=1;
break;
default:
if (v!=null&&v!='') {
ANCV(k,v);
}
}
}
ANCCF()
}
function ANCCF()
{
if (((ANP & 2) !=0)    &&
(ANVDT==1)        &&
(ANOO==0)         )
{
ANGDCC();
if (((ANSEE & 2) !=0)  &&
(ANEAC !=1)        )
{
ANGECC();
}
else
{
ANPA();
}
}
else
{
ANPA();
}
}
function ANPA()
{
if (((ANP & 2) !=0) &&
(ANDEPC13651==null) &&
(ANVDT==1)     &&
(ANOO==0)      )
{
ANDEPC13651=1;
ANVDT=0;
ANSDR();
}
if (ANVAD==1)
{
ANAP (ANVAC, ANVSZ);
ANVAD=0;
}
if (ANVDA==1)
{
ANDA();
ANVDA=0;
}
}
function ANRTXR()
{
if (ANSCE==1)
{
var c=ANRC ('TSC');
if (c==null)
{
c='T=' + ANUT + '|O=' + ANOO;
}
else
{
var f=c.split ("|");
var t=o=0;
for (var i=0; i < f.length; i++)
{
if (f[i].indexOf ('T=')==0)
{
f[i]='T=' + ANUT;
t=1;
}
if (f[i].indexOf ('O=')==0)
{
f[i]='O=' + ANOO;
o=1;
}
}
c=f.join ("|");
if (t==0)
{
c +='|T=' + ANUT;
}
if (o==0)
{
c +='|O=' + ANOO;
}
}
ANSC ("TSC", c, 4 * 365 * 24 * 60 * 60 * 1000, "/");
}
}
function Tacoda_AMS_DDC_addPair(k, v) {
ANCV(k,v);
}
function ANCV(k,v){
AMSK[AMSN]=k;
AMSVL[AMSN]=v;
AMSN++;
}
function ANTCV() {
var TVS="";
for(var i=0; i<AMSN; i++) {
if (!AMSK[i]) {
continue;
}
if (!AMSVL[i]) {
AMSVL[i]='';
}
TVS +="&v_" + escape( AMSK[i].toLowerCase() ) + "=" + escape( AMSVL[i].toLowerCase() ) ;
}
return TVS;
}
function Tacoda_AMS_DDC (tiu, tjv)
{
ANDDC (tiu, tjv);
}
function ANDA() {
var t='';
var e=ANGRD().split(".");
e.reverse();
t=e[1] + '.' + e[0];
if (typeof(ANDNX[t])!='undefined') {
t=ANDNX[t];
}
else {
t=ANDD;
}
var tiu='http://'+AMSTEP+'.'+t+'/'+AMSTES;
ANDDC(tiu,"0.0");
}
function ANDDC (tiu, tjv) {
if (((ANP & 1) !=0) &&
(AMSDPF !=1)    )
{
AMSDPF=1;
var ccc=ANGCC (1);
var ta="?"+Math.random()+"&v="+ANV+"&r="+escape(document.referrer)+"&p="+ ccc +":"+escape(ANVSC);
if (AMSLGC==1) {
ta +="&page="+escape(window.location.href);
}
ta +="&tz="+(new Date()).getTimezoneOffset()+"&s="+ANSID;
if (ANCB3==1)
{
ta+="&ckblk3";
}
if (ANCB1==1)
{
ta +="&ckblk1";
}
else
{
for(var i=0; i<AMSC.length; i++) {
var cl=AMSC[i];
var clv=ANRC(cl);
if(cl !=null) {
ta +="&c_"+escape(cl)+"="+escape(clv);
}
}
}
ANRID()
ta +=ANTCV();
document.write('<IMG'+' SRC="' + tiu + ta + '" STYLE="display: none" height="1" width="1" border="0">');
}
}
function ANRID() {
if (AMSRID !='' && AMSSID !='') {
if (ANRC (AMSRID) !=null) {
AMSSRID=AMSSID + ANRC (AMSRID);
ANCV ("regid", AMSSRID);
}
}
}
function ANDP (tc)
{
if ((ANP & 2) !=0)
{
ANTCC=tc.toUpperCase();
ANVAD=0;
ANVDA=0;
ANCCF();
}
}
function ANGDCC ()
{
if (ANCC !=1)
{
ANTCC=ANS2CC (eval (ANSCC));
}
}
function ANSDR ()
{
var ccc=ANGCC (2);
if ((ccc.indexOf (ANXCC) !=0) || (ccc.length !=ANXCC.length))
{
var ANU="";
var ckblk="";
if (ANURL==1)
{
ANU="&page=" + escape (window.location.href);
}
if (ANRDF==1)
{
ANU +="&r=" + ANGRD();
}
if (ANCB1==1)
{
ckblk +="&ckblk1";
}
if (ANCB3==1)
{
ckblk +="&ckblk3";
}
document.write ('<SCR'+'IPT SRC="' + ANDPU + 'cmd=' + ccc + '&si=' + ANSID + ANU + '&v=' + ANV + ckblk + '&cb=' + Math.random() + '" LANGUAGE="JavaScript"></SCR' + 'IPT>');
if (ANEPU !='')
{
var ANEQ='';
if (ANTCC !=null)
{
ANEQ="&tc=" + ANTCC;
}
if ((ANEJC==1) && (ANECC !=null))
{
ANEQ +="&ec=" + ANECC.toUpperCase();
if ((ANEECD==1) && (ANECD !=null))
{
ANEQ +='&ed=' + escape (ANECD);
}
if (ANERC !=null)
{
ANEQ +='&er=' + ANERC;
}
if ((ANEET !=null) && (ANEST !=null))
{
d=ANEET - ANEST;
ANEQ +='&et=' + d;
}
}
else
{
ANEQ +='&er=0';
}
document.write ('<IMG'+' SRC="' + ANEPU + 'cmd=' + ccc + '&si=' + ANSID + ANEQ + ANU + '&v=' + ANV + '&cb=' + Math.random() + '" STYLE="display: none" height="1" width="1" border="0">');
}
if (ANME==1)
{
ANME=0;
document.write ('<SCR'+'IPT SRC="' + ANMU + ccc + '&si='+ ANSID + '&cb=' + Math.random() + '" LANGUAGE="JavaScript"></SCR' + 'IPT>');
}
}
}
function ANGECC()
{
ANEAC=1;
ANEST=(new Date()).getTime();
var a=ANERP + 'pg=' + escape (window.location.href) + '&tc=';
if (ANTCC !=null)
{
a +=ANTCC;
}
document.write ('<SCR'+'IPT SRC="' + a + '" LANGUAGE="JavaScript"></SCR' + 'IPT>');
ANTOV=setTimeout (ANETO, ANEWT);
}
function ANETO()
{
}
function ANEEP()
{
if (ANEJC !=1)
{
if (ANEJT !=1)
{
ANEJC=1;
clearTimeout (ANTOV);
ANEET=(new Date()).getTime();
ANPA();
}
}
else
{
ANPA();
}
}
function ANS2CC (s)
{
if (s)
{
for (i=0; (i < AN2CCOP.length); i++)
{
if (AN2CCOP[i] && AN2CCDA[i])
{
switch (AN2CCOP[i])
{
case 'e':
if ((s.length==AN2CCDA[i].length) && (s.indexOf (AN2CCDA[i])==0))
{
return AN2CCCC[i].toUpperCase();
}
break;
case 'c':
if (s.indexOf (AN2CCDA[i]) !=-1)
{
return AN2CCCC[i].toUpperCase();
}
break;
case 'p':
if (s.indexOf(AN2CCDA[i])==0)
{
return AN2CCCC[i].toUpperCase();
}
break;
case 's':
if (s.lastIndexOf (AN2CCDA[i])==(s.length - AN2CCDA[i].length))
{
return AN2CCCC[i].toUpperCase();
}
break;
case 'r':
if (s.search (AN2CCDA[i]) !=-1)
{
return AN2CCCC[i].toUpperCase();
}
}
}
}
}
return ANDCC;
}
function ANAP(ac,sz) {
if (sz <=ANADS.length) {
ANVAC=ac.toLowerCase();
var au='<SCR'+'IPT SRC="'+ANAS+'/cgi-bin/ads/';
if (sz==4||sz==5||sz==7) {
au+='sk';
}
else {
au+='ad';
}
au+=ANSID+ANVAC+'.cgi/v=2.0S/sz='+ANADS[sz-1]+'/'+Math.round(Math.random()*100000)+'/RETURN-CODE/JS/" LANGUAGE="JavaScript"></SCR'+'IPT>';
document.write(au);
}
ANVSZ=ANDSZ;
}
document.dartTData="";
document.dartTDataValue=ANRC ("TData");
if (document.dartTDataValue !="" && document.dartTDataValue !=null)
{
var f=document.dartTDataValue.split ("|");
for (var i=0; i < f.length; i++)
{
document.dartTData +="kw=" + f[i] + ";";
}
}
document.dartTid=ANRC ("TID");
if (document.dartTid !="" && document.dartTid !=null)
{
document.dartTid="u=" + document.dartTid + ";";
}
