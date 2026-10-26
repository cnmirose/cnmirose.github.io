//  Copyright (c) 2000-2008 ZEDO Inc. All Rights Reserved.
function B2(){
var v1=navigator.userAgent.toLowerCase();var y6=(v1.indexOf('mac')!=-1);var a9=parseInt(navigator.appVersion);
var o6=(!y6&&(v1.indexOf('opera')==-1)&&(v1.indexOf('msie')!=-1)&&(a9>=4)&&(v1.indexOf('webtv')==-1)&&(v1.indexOf('msie 4')==-1));
if(o6){
document.writeln('<scr'+'ipt language=VBS'+'cript>');
document.writeln('on error resume next');
document.writeln('t0=IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.5"))');
document.writeln('if(t0<=0)then t0=IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.4"))');
document.writeln('</scr'+'ipt>');
}
else if(navigator.mimeTypes&&
navigator.mimeTypes["application/x-shockwave-flash"]&&
navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){
if(navigator.plugins&&navigator.plugins["Shockwave Flash"]){
var z4=navigator.plugins["Shockwave Flash"].description;
if(parseInt(z4.substring(z4.indexOf(".")-1))>=4){
t0=1;
}}}
var i4=navigator.javaEnabled();
r0=1;
if(i4){r0 |=4;}
if(t0){r0 |=8;}
if(o6){
if(document.body){
document.body.style.behavior='url(#default#clientCaps)';
if(document.body.connectionType=='lan'){
r0 |=16;
}}}
return r0;
}
var p0=0;var v0=0;var z0='0';var e0=0;var v4='';var t0=0;var p5='';var d3='';var t4='';var d4="";var i8='';
if(typeof zflag_nid!='undefined'){
p0=zflag_nid;
zflag_nid=0;
}
if(typeof zflag_sid!='undefined'){
v0=zflag_sid;
zflag_sid=0;
}
if(typeof zflag_cid!='undefined'){
z0=zflag_cid;
if(z0<0||z0>999999){
z0=0;
}
zflag_cid=0;
}
if(typeof zflag_sz!='undefined'){
e0=zflag_sz;
if(e0<0||e0>95){
e0=0;
}
zflag_sz=0;
}
if(typeof zflag_kw!='undefined'){
zflag_kw=zflag_kw.replace(/&/g,'zzazz');
v4=escape(zflag_kw);
zflag_kw="";
}
if(typeof zflag_geo!='undefined'){
if(!isNaN(zflag_geo)){
d3="&g="+zflag_geo;
zflag_geo=0;
}}
if(typeof zflag_param!='undefined'){
d4="&p="+zflag_param;
zflag_param="";
}
if(typeof zflag_click!='undefined'){
zzTrd=escape(zflag_click);
t4='&l='+zzTrd;
zflag_click="";
}
if(typeof zflag_hasAd!='undefined'){
i8='&y='+zflag_hasAd;
}
var zzStr='';var zzCountry=255;var zzMetro=0;var zzState=0;var zzSection=v0;var zzD=window.document;var zzRand=(Math.floor(Math.random()* 1000000)% 10000);var zzCustom='';var zzPat='';var zzSkip='';
var zzExp='';var zzTrd='';var zzPos=0;var zzDm1=0;var zzDm2=0;var zzDm3=0;var zzDm4=0;var zzDm5=0;var zzDm6=0;var zzDm7=0;var zzDm8=0;var zzDm9=0;var zzDm10=0;var zzAGrp=0;var zzAct=new Array();
var zzActVal=new Array();
p5=B2();
if(p5<0||p5>31){
p5=1;
}
n0='<scr'+'ipt language="JavaScript" src="http://c7.zedo.com/bar/v14-710/c1/jsc/fm.js?c='+z0+'&n='+p0+'&r='+p5+'&d='+e0+'&q='+v4+'&s='+v0+d3+d4+t4+i8+'&z='+Math.random()+'"></scr'+'ipt>';
document.write(n0);
