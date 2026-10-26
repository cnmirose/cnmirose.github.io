							var cookiestring,sUser,sUserLength, mstatus,addr,findpos,findposLength,findrate,findrateLength,inrRandom;

							try
							{
							cookiestring= document.cookie;
							cookiestring = cookiestring.toLowerCase();
							sUser = getCookievaluer('commlogu');
							sUserLength = sUser.length;
							mstatus = getCookievaluer('cmssso');
							numero= 999999.9999
							inrRandom = Math.round((Math.random() * numero+ 0.5));
							}
							catch(er) 
							{
							cookiestring=' ';
							sUserLength=0;
							}
							addr = escape(document.URL+'&random='+inrRandom);

							if ((cookiestring.indexOf('commlogp') != -1) && (sUserLength > 0)  && (mstatus == 'true') )  
							{
							    try
							       {
								findpos = getCookievaluer('artid');
								findposLength = findpos.length;
								findrate =	getCookievaluer('rating');
							        }
							    catch(er) 
							         {findposLength =0;}

							     if((findpos != '0') && (findposLength > 1) && (findrate != '0') )
								{
								var popupurlrate1='http://www1.timesofindia.indiatimes.com/rating/msid-'+findpos+',voteid-'+findpos+',vote-'+findrate+',random-'+inrRandom+'.cms';
								window.open(popupurlrate1,'Rating','toolbar=0,scrollbars=0,location=0,status=0,menubars=0,resizable=0,width=350,height=150,top="0",left="0",maximize=null');
								}
							   document.cookie = 'artid=0';
							   document.cookie = 'rating=0';
							}



							function getCookievaluer(strcookie)
							{ 
								var ipos = cookiestring.indexOf(strcookie);
								var ipos2 = cookiestring.indexOf(';',ipos);  
								if (ipos != -1) 
								{   	
									if (ipos2 == -1) 
										ipos2 = cookiestring.length;
										return unescape(cookiestring.substring((ipos+strcookie.length+1),ipos2));
								} 
							}


									
							function ratepopup(msid,vote)
							{
								if ((cookiestring.indexOf('commlogp') != -1) && (sUserLength > 0)  && (mstatus == 'true') )  
									{
										var popupurlrate='http://www1.timesofindia.indiatimes.com/rating/msid-'+msid+',voteid-'+msid+',vote-'+vote+',random-'+inrRandom+'.cms';
										window.open(popupurlrate,'Rating','toolbar=0,scrollbars=0,location=0,status=0,menubars=0,resizable=0,width=350,height=150,top="0",left="0",maximize=null');
									}
								else
									{
										document.cookie = 'artid=' + escape(msid);
						  				document.cookie = 'rating=' + escape(vote);
						  		                var addrcon = 'http://timesofindia.indiatimes.com/articleshow/'+msid+'.cms';
										document.location.href = 'http://timesofindia.indiatimes.com/login.cms?TferURL='+escape(addrcon);
									}
							}

							