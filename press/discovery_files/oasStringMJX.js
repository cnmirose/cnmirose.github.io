/* OAS MJX [ application ] */

/* : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : : write
- get info from "oasConfigMJX.js" and 'positionList' embedded in <head>
*/
document.write("<scr" + "ipt type=\"text/javascript\" language=\"JavaScript1.1\" src=\"" + baseOAS + "adstream_mjx.cgi/" + pathForOAS + "/1" + theOASNumber + "@" + postionList + "\"><\/scr" + "ipt>");

/* AD REFRESH [adrefresh] JS */

/* ------------------------------------------------------------------------ refresh [function] */
// upon triggering of below function ... the ad banner and tower will be reloaded
function interactiveReload () {
        if (window.adbanner) { window.adbanner.location.reload(); }
        if (window.adtower) { window.adtower.location.reload(); }
}

function oasAdCap() {}

/* END OAS */
