/*********************************************************************
 * This file contains all the javascript functions used
 * for the ET Telegraph Network dropdown list.
 *
 * Updates
 *
 * 13/05/2002   J Cutbush   CR938 - Added menuId to Crossword Society
 *                          link to allow pageclass to be generated.
 *
 * 29/05/2002   L Coghlan   CR971 - Add 'Mobile Services' to the dropdown
 *                          menu list
 *  
 * 06/08/2002   S Culverwell CR1146 ReaderOffers channel
 *
 * 03/02/2003   S Culverwell CR1479 Added Dating
 *
 * 06/02/2003   S Culverwell CR1469 Added Dating
 *
 * 03/03/2003   S Culverwell CR1539 Removed all references to outdoors and family
 *
 * 07/05/2003   S Culverwell CR1672 Add Pressoffive and Advertising, remove Shopping
 *
 * 29/05/2003   S Culverwell CR1793 Business Change to drop down, becomes city news
 *
 * 26/06/2003   S Culverwell CR1875 Removed unnecesary code
 *
 * 10/07/2003   S Culverwell CR1823 Fix to losing toolbar on telegraph network popup
 *
 * 11/07/2003   S Culverwell CR1862 Add tracking to all links in the drop down menu site wide
 *
 * 12/08/2003   S Flint      CR1862  Amended code for tracking links in drop down menu 
 *
 * 27/08/2003   R Spence     CR1977  changed business file link
 *
 *********************************************************************/
function newSite(sFile) {
  var nId = sFile.indexOf(";$sessionid$");
  var newUrl = "";
  var sId = "";
  var noRedirect = false;
        var trackingParameter = "?from=dd";

  // if cookies are not used store the session id
  if (nId != -1) {
    sId = sFile.substring(nId);
  }

  var selObject = window.document.fSite.selSite
  switch(selObject.options[selObject.selectedIndex].value) {
    case "1":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/portal/index.jhtml" + trackingParameter;
      break
    case "2":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/news/index.jhtml" + trackingParameter;
      break
    case "5":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/sport/index.jhtml" + trackingParameter;
      break
    case "6":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/travel/index.jhtml" + trackingParameter;
      break
    case "7":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/money/index.jhtml" + trackingParameter;
      break
    case "8":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/motoring/index.jhtml" + trackingParameter;
      break
    case "9":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://jobs.telegraph.co.uk" + trackingParameter;
      break
    case "10":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.businessfile-online.co.uk" + trackingParameter;
      break
    case "11":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/property/index.jhtml" + trackingParameter;
      break
    case "12":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/pressoffice/index.jhtml" +trackingParameter;
      break
    case "13":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/fashion/index.jhtml" +trackingParameter;
      break
    case "14":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/gardening/index.jhtml" +trackingParameter;
      break
    case "15":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/health/index.jhtml" +trackingParameter;
      break
    case "16":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/wine/index.jhtml" +trackingParameter;
      break
    case "17":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/weather/index.jhtml" +trackingParameter;
      break
    case "18":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/opinion/index.jhtml" +trackingParameter;
      break
    case "21":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/arts/index.jhtml" +trackingParameter;
      break
    case "22":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/connected/main.jhtml?menuId=1539&menuItemId=-1&view=HEADLINESUMMARY&grid=P2&targetRule=10&from=dd";
      break
    case "23":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/arts/main.jhtml?menuId=570&menuItemId=-1&view=SUMMARY&grid=P16&targetRule=1&from=dd";
      break
    case "24":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/arts/main.jhtml?menuId=562&menuItemId=-1&view=DISPLAYCONTENT&grid=P8&targetRule=5&from=dd";
      break
    case "25":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/education/index.jhtml" +trackingParameter;
      break
    case "26":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/juiced/index.jhtml" +trackingParameter;
      break
    case "27":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/connected/main.jhtml?menuId=1536&menuItemId=-1&view=HEADLINESUMMARY&grid=P2&targetRule=10&from=dd";
      break
    case "28":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/opinion/index.jhtml" +trackingParameter;
      break
    case "29":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/news/main.jhtml?menuId=558&menuItemId=-1&view=HEADLINESUMMARY&grid=P2&siteId=5&targetRule=10&from=dd";
      break
    case "30":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/portal/index.jhtml" +trackingParameter;
      break     
    case "31":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/arts/main.jhtml?menuId=561&menuItemId=-1&view=CROSSWORD&grid=P20&from=dd";
      break
    case "32":
      newUrl = "/core/exit.jhtml" + sId + "?exit=/core/Matt/pMattTemplate.jhtml?pTitle=Matt.telegraph";
      newWin = window.open(newUrl,'Matt','scrollbars,resizable,width=404,height=600');
      newWin.moveTo(50,50)
      noRedirect = true
      break
    case "33":
      newUrl = "/core/exit.jhtml" + sId + "?exit=/money/Alex/pAlexTemplate.jhtml?pTitle=Alex.telegraph";
      newWin = window.open(newUrl,'Alex','scrollbars,resizable,width=820,height=505');
      newWin.moveTo(50,50)
      noRedirect = true
      break
    case "34":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/global/index.jhtml" +trackingParameter;
      break     
    case "35":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.internetforschools.co.uk" + trackingParameter;
      break     
    case "36":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/connected/index.jhtml" +trackingParameter;
      break     
    case "37":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/promotions/index.jhtml" +trackingParameter;
      break     
    case "38":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/money/main.jhtml?menuId=244&menuItemId=-1&view=SUMMARY&grid=M5&targetRule=2&from=dd";
      break     
    case "39":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/news/main.jhtml?menuId=1570&menuItemId=-1&view=SUMMARY&grid=P9&from=dd";
      break     
    case "40":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.tffo.co.uk" +trackingParameter;
      break
    case "41":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/money/main.jhtml?menuId=242&menuItemId=-1&view=SUMMARY&grid=M1&targetRule=2&from=dd";
      break 
    case "42":
      newUrl = "/core/exit.jhtml" + sId + "?exit=/ETHtml/content/promotions/mobileservices/mobile.jhtml" +trackingParameter;
      break 
    case "43":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/readeroffers/index.jhtml" +trackingParameter;
      break 
    case "44":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/dating/index.jhtml" +trackingParameter;
      break 
    case "45":
      newUrl = "/core/exit.jhtml" + sId + "?exit=http://www.telegraph.co.uk/pressoffice/main.jhtml?menuId=2317&menuItemId=-1&view=DISPLAYCONTENT&grid=P8&targetRule=0&from=dd";
      break       
    default:
      noRedirect = true
    }

  if (noRedirect == false) {
    newPWin = window.open(newUrl,'nPWin','directories,menubar,status,scrollbars,resizable,width=800,height=600,toolbar,location');
    newPWin.moveTo(50,50)
    newPWin.focus();
  }
  window.document.fSite.selSite.selectedIndex = 0;
}