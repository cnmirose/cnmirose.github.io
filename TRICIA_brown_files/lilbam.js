function dropdownSelect(dropdown){
	for (i=0;i<dropdown.options.length;i++){
	
		if (dropdown.options[i].selected){
	
			if (dropdown.options[i].value != ''){
				location.href = 'https://bucket.worldofbits.brown.edu/TRICIA_brown_files/class-notes/class-notes---' + dropdown.options[i].value + '.html';
			}
			
		}
	} 
}

function set_margin_for_body_image_element(el) {
  var lr = el.getStyle("float");
  if (lr.match(/left/i)) {
    el.setStyle({margin:"10px 20px 10px 0px"});
    el.setStyle({padding:'0'});
  }else{
    el.setStyle({margin:"10px 10px 10px 20px"});
    el.setStyle({padding:'0'});
  }
}

function margin_bumps() {
  var captions = $$(".jce_caption");
  captions.each(function(caption){
    set_margin_for_body_image_element(caption);
  });
  var uncaptioned = $$(".bodytext p img");
  uncaptioned.each(function(caption){
    set_margin_for_body_image_element(caption);
  });
}

google.setOnLoadCallback(function(){margin_bumps()});


google.load("feeds", "1");
 
    function sportsBox() {
	
      var sports = new google.feeds.Feed("http://brownbears.cstv.com/headline-rss.xml");
      sports.load(function(result) {
        if (!result.error) {
          var headline = document.getElementById("sportsheadline");
 		  		var content = document.getElementById("sportscontent");
          var entry = result.feed.entries[0];
          headline.innerHTML = ('<a href="'+entry.link+'">'+entry.title+'</a>');
					var contentContent = (entry.content).substring(0, 106);
		  		content.innerHTML = contentContent;
        }
      });
    }


		function onTheHill() {
			var mediarelations = new google.feeds.Feed("http://www.brown.edu/Administration/News_Bureau/Databases/xml.php");
      mediarelations.load(function(result) {
        if (!result.error) {
          var headline = document.getElementById("mediarelations_headline");
 		  		var content = document.getElementById("mediarelations_content");
          var entry = result.feed.entries[0];
          headline.innerHTML = ('<a href="'+entry.link+'">'+entry.title+'</a>');
		  		content.innerHTML = entry.content;
		
					var headline2 = document.getElementById("mediarelations_headline2");
 		  		var content2 = document.getElementById("mediarelations_content2");
          var entry2 = result.feed.entries[1];
          headline2.innerHTML = ('<a href="'+entry2.link+'">'+entry2.title+'</a>');
		  		content2.innerHTML = entry2.content;
		
					var headline3 = document.getElementById("mediarelations_headline3");
 		  		var content3 = document.getElementById("mediarelations_content3");
          var entry3 = result.feed.entries[2];
          headline3.innerHTML = ('<a href="'+entry3.link+'">'+entry3.title+'</a>');
		  		content3.innerHTML = entry3.content;
        }
      });

			var dailyherald = new google.feeds.Feed("http://www.browndailyherald.com/articles.rss");
      dailyherald.load(function(result) {
        if (!result.error) {
          var headline = document.getElementById("bdh_headline");
 		  		var content = document.getElementById("bdh_content");
          var entry = result.feed.entries[0];
          headline.innerHTML = ('<a href="'+entry.link+'">'+entry.title+'</a>');
		  		content.innerHTML = entry.content;
		
					var headline2 = document.getElementById("bdh_headline2");
 		  		var content2 = document.getElementById("bdh_content2");
          var entry2 = result.feed.entries[1];
          headline2.innerHTML = ('<a href="'+entry2.link+'">'+entry2.title+'</a>');
		  		content2.innerHTML = entry2.content;
		
					var headline3 = document.getElementById("bdh_headline3");
 		  		var content3 = document.getElementById("bdh_content3");
          var entry3 = result.feed.entries[2];
          headline3.innerHTML = ('<a href="'+entry3.link+'">'+entry3.title+'</a>');
		  		content3.innerHTML = entry3.content;
        }
      });

			var googlenews = new google.feeds.Feed("http://news.google.com/news?hl=en&client=firefox-a&rls=org.mozilla%3Aen-US%3Aofficial&hs=FhZ&ie=UTF-8&oe=UTF-8&um=1&tab=wn&q=%22brown+university&output=rss");
      googlenews.load(function(result) {
        if (!result.error) {
          var headline = document.getElementById("googlenews_headline");
 		  		var content = document.getElementById("googlenews_content");
          var entry = result.feed.entries[0];
		  		content.innerHTML = entry.content;
		
					var headline2 = document.getElementById("googlenews_headline2");
 		  		var content2 = document.getElementById("googlenews_content2");
          var entry2 = result.feed.entries[1];
		  		content2.innerHTML = entry2.content;
		
					var headline3 = document.getElementById("googlenews_headline3");
 		  		var content3 = document.getElementById("googlenews_content3");
          var entry3 = result.feed.entries[2];
		  		content3.innerHTML = entry3.content;
        }
      });
		}

google.setOnLoadCallback(sportsBox);
//google.setOnLoadCallback(onTheHill);

