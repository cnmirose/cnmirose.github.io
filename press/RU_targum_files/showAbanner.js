var now = new Date();
var ts = now.getFullYear().toString() + (now.getMonth() + 1).toString() + now.getDate().toString() + now.getHours().toString() + now.getMinutes().toString() + now.getSeconds().toString();
function showClientBanner (iposition) {
	switch (iposition) {
		case 1:
			var imageURL = 'http://media.collegepublisher.com/media/paper168/ads/63250tpr0b.gif';
			imageURL = imageURL.replace(/\[timestamp\]/g, ts);
			document.write('<img src="http://media.collegepublisher.com/media/images/blank.gif" border="0" height="2"><br>');
			document.write('<a href="http://admanager2.broadbandpublisher.com/newspaperBanners/clientClickThrough.adp?callingSite=' + (basehref.substr(7)).replace(/\//,'') + '&iad_id=2981&iPosition=1&iPaper_id=168&timeStamp=' + ts + '" target="_blank"><img src="' + imageURL + '" border="0"></a>');
			document.write('<br><img src="http://media.collegepublisher.com/media/images/blank.gif" border="0" height="2"><br>');
			var impressionIMG1=new Image();
			impressionIMG1.src="http://admanager2.broadbandpublisher.com/newspaperBanners/clientImpression.adp?aid=2981&random=" + ts;
			break;
		case 2:
			var imageURL = 'http://media.collegepublisher.com/media/paper168/ads/6lk9q1pa44.jpg';
			imageURL = imageURL.replace(/\[timestamp\]/g, ts);
			document.write('<img src="http://media.collegepublisher.com/media/images/blank.gif" border="0" height="2"><br>');
			document.write('<a href="http://admanager2.broadbandpublisher.com/newspaperBanners/clientClickThrough.adp?callingSite=' + (basehref.substr(7)).replace(/\//,'') + '&iad_id=2945&iPosition=2&iPaper_id=168&timeStamp=' + ts + '" target="_blank"><img src="' + imageURL + '" border="0"></a>');
			document.write('<br><img src="http://media.collegepublisher.com/media/images/blank.gif" border="0" height="2"><br>');
			var impressionIMG2=new Image();
			impressionIMG2.src="http://admanager2.broadbandpublisher.com/newspaperBanners/clientImpression.adp?aid=2945&random=" + ts;
			break;
		case 3:
			var imageURL = 'http://media.collegepublisher.com/media/paper168/ads/3d8g217ylr.gif';
			imageURL = imageURL.replace(/\[timestamp\]/g, ts);
			document.write('<img src="http://media.collegepublisher.com/media/images/blank.gif" border="0" height="2"><br>');
			document.write('<a href="http://admanager2.broadbandpublisher.com/newspaperBanners/clientClickThrough.adp?callingSite=' + (basehref.substr(7)).replace(/\//,'') + '&iad_id=2942&iPosition=3&iPaper_id=168&timeStamp=' + ts + '" target="_blank"><img src="' + imageURL + '" border="0"></a>');
			document.write('<br><img src="http://media.collegepublisher.com/media/images/blank.gif" border="0" height="2"><br>');
			var impressionIMG3=new Image();
			impressionIMG3.src="http://admanager2.broadbandpublisher.com/newspaperBanners/clientImpression.adp?aid=2942&random=" + ts;
			break;
	}
}
clientBannersAvailable = 1;
// total page execution time: 1.99 ms