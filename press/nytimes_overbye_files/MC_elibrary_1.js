/*  filename:   MC_elibrary.js
    version:    1.06
    author:     michael cosentino
    date:       09/01/04
    
    This Javascript is used for the eLibrary module for article pages.
    It extracts the NYT keywords from %%KEYWORDS%% and dynamically writes a 
    bulleted list of search terms for HighBeam
    
    02/04/04: original file created
    02/05/04: added ability to omit "bad" keywords"
    02/19/04: apply redesigned template
    03/03/04: per client's request, start from 2nd keyword. Make appropriations
              for when there are no eligible results.
    05/10/04: apply redesigned template
    09/01/04: address "undefined" bug
*/

var aKeywords = strKeywords.split(";");     // create array, semicolon delimited
var aBadKeywords = new Array("suggested");  // list of "bad" keywords   
var aLinkDesc = new Array();                // array of link descriptions
aKeywords.length -= 1;                      // remove last element due to trailing
                                            // semicolon in query string

// filter out "bad" keywords
for (j = 0; j < aBadKeywords.length; j++) {
    for (i = 0; i < aKeywords.length; i++) {
        if (aKeywords[i].indexOf(aBadKeywords[j]) != -1) {
            aKeywords.splice(i, 1);
            i--;
        }
    }
}    

// don't let user request more keywords than available
if (numKeywords > aKeywords.length) numKeywords = aKeywords.length;

// create display-ready list of keywords
for (i = 0; i < aKeywords.length; i++) {
    aLinkDesc[i] = unescape(aKeywords[i]);
    aLinkDesc[i] = aLinkDesc[i].replace(/\+|_/g, " ");
}

// write table
if (aKeywords.length > 1) {
    document.write('<p>Research <a href="http://www.highbeam.com/library/search.asp?q=' + aKeywords[1] + '&refid=' + refid + '" style="color:#c00;" target="_blank">' + aLinkDesc[1] + '</a><br><br>\n');
    document.write('HighBeam Research has an extensive archive of more than 28 million documents from 2,600 sources.<br>\n');
    document.write('<img src="http://www.highbeam.com/img/shim.gif" width="6" height="6"><br>\n');
    
    // check for "undefined"
    if (aKeywords[2]) {
        document.write('<font color="#000000">Related Research:<br>\n');
        
        for (i = 2; i <= numKeywords; i++) {
            document.write('<img src="http://www.highbeam.com/img/shim.gif" width="6" height="6"><br>\n');
            if (aKeywords[i]) {
                document.write('</font><a href="http://www.highbeam.com/library/search.asp?q=' + aKeywords[i] + '&refid=' + refid + '" style="color:#c00;" target="_blank">' + aLinkDesc[i] + '</a><br>\n');
            }
        }
    }
} else {
    document.write('<a href="http://www.highbeam.com/library/index.asp?refid=' + refid + '" targtet="_blank">HighBeam Research</a> has an extensive archive of more than 32 million documents from 2,800 sources.<br>\n');
}