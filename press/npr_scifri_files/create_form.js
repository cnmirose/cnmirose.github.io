function createForm()
	{
		document.write('<div id="localization">');
			document.write('<form name="go_local" method="post" action="http://www.npr.org/stations/stations_results.php" onsubmit="if (document.go_local.txtSearchValue.value!=\'Call Letters\' && document.go_local.txtSearchValue.value!=\'\') {document.go_local.refUrl.value=window.location.href} else {window.location.href=\'http://www.npr.org/stations/index.php?sForm=call&refUrl=' + window.location.href + '\';return false;}">');
				document.write('<p>find your local member station:</p>');
				document.write('<input type="hidden" name="searchType" value="zipcall" />');
				document.write('<input type="hidden" name="refUrl" value="" />');
				document.write('<input name="txtSearchValue" id="txtSearchValue" value="Call Letters" onclick="clearField();" onblur="fillField();" />');
				document.write('<p>(or enter zip code)</p>');
				document.write('<input type="submit" name="find" id="localizationfind" class="button" value="find" />');
			document.write('</form>');
		document.write('</div>');
	}