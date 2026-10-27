var Nytd_Pixel_rel_version = "0.1";
var Nytd_Pixel_values = new String();
var Nytd_Pixel_global_values = new String("&g=");

function Nytd_Pixel_addGlobalTaxonomyValue(value) {
  if (Nytd_Pixel_global_values.charAt(Nytd_Pixel_global_values.length-1) != '=') { Nytd_Pixel_global_values += "/"; }
  Nytd_Pixel_global_values += value;
}

function Nytd_Pixel() {
  if (Nytd_Pixel_global_values.length != 0){ Nytd_Pixel_values += Nytd_Pixel_global_values; }
  Nytd_Pixel_values += "&u=" + escape(document.URL);
  document.write('<img src="http://up.nytimes.com/?d=2' + Nytd_Pixel_values + '" height="1" width="1" border="0" id="upixel">');
}

