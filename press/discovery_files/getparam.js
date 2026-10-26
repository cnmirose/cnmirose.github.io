/* GET PARAMETERS JS */

/* ------------------------------------------------------------------------ functions */
// pulls values from url
function getParam(paramName,pos) {
	var startPos = (pos) ? pos : 0;
	var url,paramBegin,paramEnd,valueBegin,paramValue
	url = window.location.search;
	paramBegin = url.indexOf(paramName,startPos);

	if (paramBegin == -1) return false
	paramEnd = paramBegin + paramName.length;
	param = url.substring(paramBegin,paramEnd);
	
	var valBegin = url.indexOf("=",paramEnd);
	var nextParam = url.indexOf("&",paramEnd);
	var valLen = (nextParam == -1) ? (url.length-(valBegin)) : (nextParam-valBegin);
	var valEnd = (nextParam == -1) ? valBegin+valLen : nextParam;

    valueBegin = paramEnd + 1
    paramValue = url.substring(valueBegin, valEnd)

	if ( (nextParam != -1) && (valBegin > nextParam) ) return getParam(param,paramEnd);
	else {

		 for (i = 0; i < paramValue.length; i++) {
			 paramValue = paramValue.replace("+", " ");
			 paramValue = paramValue.replace("%20", " ");
			 paramValue = paramValue.replace("%26", "&");
			 paramValue = paramValue.replace("%27", "'");
			 paramValue = paramValue.replace("%28", "(");
			 paramValue = paramValue.replace("%29", ")");
		}

    return paramValue
	}
}

/* END GET PARAMETERS JS */
