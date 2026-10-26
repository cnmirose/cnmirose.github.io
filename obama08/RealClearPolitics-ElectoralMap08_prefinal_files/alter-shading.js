/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
//shading

function fgetAllDataTables()
{
	if (!document.getElementsByTagName) return false;

	var eleTables = document.getElementsByTagName("table");

	for (var i=0; i < eleTables.length; i++)
	{
		if (eleTables[i].className == "data sortable")
		{
			fStripes(eleTables[i]);		
		}
	}
	
}

function fStripes(eleTable)
{
	var eleTableRows = eleTable.getElementsByTagName("tr");
	for (var i=0; i < eleTableRows.length; i++)
	{
		eleTableRows[i].className = "";
	}
	for (var i=1; i < eleTableRows.length; i++)
	{
		eleTableRows[i].className = "alt";
		i++;
	}
}