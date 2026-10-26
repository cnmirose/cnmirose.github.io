// JS FILE TO DO MPU ADVERTS
// R SPENCE 22/05/2003
// S Flint  21/07/2003 CR1883 Added user profile info
// S flint  24/07/2003 CR1883 Amended typos for city and country
// R Spence 01/09/2003 CR1883 Added 'if' to check if user is logged in
// R Spence 21/10/2003 CR2114 Added xml param

// AD SPACE ID
var mpuspace = "mpu";

// SET UNIQUE TRANSACTION ID
var d = new Date();
var mputransid = d.getTime();

/* DEBUG
document.write("mpuspace=" + mpuspace + "<br>");
document.write("mputransid=" + mputransid + "<br>");
document.write("mpusitename=" + mpusitename + "<br>");
document.write("mpupageclass=" + mpupageclass + "<br>");
document.write("mpuview=" + mpuview + "<br>");
document.write("mpulogstatus=" + mpulogstatus + "<br>");
document.write("mpugender=" + mpugender + "<br>");
document.write("mpupostcode=" + mpupostcode + "<br>");
document.write("mpubirthyear=" + mpubirthyear + "<br>");
document.write("mpustatus=" + mpustatus + "<br>");
document.write("mpucity=" + mpucity + "<br>");
document.write("mpucountry=" + mpucountry + "<br>");
document.write("mpuxml=" + mpuxml + "<br>");
*/

// WRITE AD SCRIPT TAG 

if (mpulogstatus == "t") {

  // USER LOGGED IN
  document.write("<scr"+"ipt language='JavaScript' src='http://ads.telegraph.co.uk/js.ng/site=" + mpusitename + "&spaceid=" + mpuspace + "&logstatus=" + mpulogstatus + "&tid=" + mputransid + "&Section=" + mpupageclass + "&view=" + mpuview + "&gender=" + mpugender + "&postcode=" + mpupostcode + "&birthyear=" + mpubirthyear + "&status=" + mpustatus + "&city=" + mpucity + "&country=" + mpucountry + "&xml=" + mpuxml + "'></scr"+"ipt>");

} else {

  // USER NOT LOGGED IN
  document.write("<scr"+"ipt language='JavaScript' src='http://ads.telegraph.co.uk/js.ng/site=" + mpusitename + "&spaceid=" + mpuspace + "&logstatus=" + mpulogstatus + "&tid=" + mputransid + "&Section=" + mpupageclass + "&view=" + mpuview + "&xml=" + mpuxml + "'></scr"+"ipt>");

} 