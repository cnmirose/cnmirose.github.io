document.write('<OBJECT ID="IERPCtl" WIDTH=0 HEIGHT=0 CLASSID="CLSID:FDC7A535-4070-4B92-A0EA-D9994BCC0DC5"></OBJECT>');
function isRealOne() {
	RealOneInst = 'undetermined';
	var agt=navigator.userAgent.toLowerCase();
	var is_nav  = ((agt.indexOf('mozilla')!=-1) && (agt.indexOf('spoofer')==-1)
					&& (agt.indexOf('compatible') == -1) && (agt.indexOf('opera')==-1)
					&& (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1));
	if (is_nav) {
		IERPCtl = 0;
	}
	
	if (navigator.plugins) {
		if ((navigator.userAgent.charAt(8)) >= ('3')) {
			var nPlayerInstalled=2;
			var i=0;
			while (navigator.plugins[i]){
				if ((navigator.plugins[i].name) == 'RealOne Player Version Plugin' || (navigator.plugins[i].name) == 'RealPlayer Version Plugin'){
					nPlayerInstalled=1;
					szPlayerVersion=navigator.plugins[i].description;
					break;
					}
					i++;
				}
			
				if ( nPlayerInstalled == 2 ){
					var nRPVersion = IERPCtl.RealPlayerVersion;
					if ( nRPVersion == null ){
						nPlayerInstalled=2;
					} 
					else {
						nPlayerInstalled=1;
					}
				}
			}       
			if (nPlayerInstalled == 1){
				RealOneInst = 'installed';  
			} 
			if (nPlayerInstalled == 2){
				RealOneInst = 'notinstalled';
			}
		} else {
			RealOneInst = 'undetermined';
		}
		if (RealOneInst == 'installed') {
				if (agt.indexOf("(r1 ") != -1) {
						RealOneInst = 'using';
				}
		}
		return RealOneInst;     
	}
	function LaunchRealChannel(page) {
		
		fullpage = page + '.smil';
		indexpage = page + '\\index.html';
		
		var agt=navigator.userAgent.toLowerCase();
		var
		is_aol = (agt.indexOf("aol") != -1);
		if (is_aol){
			window.location = (fullpage); // version for AOL browsers, was aol.html
		}
		else{
			var checkbrowser = isRealOne(); // here's where people with R1 will go
			if (checkbrowser == 'using') {
				 window.location = (fullpage);
			}
			if (checkbrowser == 'installed') {  // here's where people with R1 will go
				 window.location = (fullpage);
			}
			if (checkbrowser =='undetermined' || checkbrowser =='notinstalled') {
			
			// now the tricky part : people we're not sure about yet
				
			numPlugins = navigator.plugins.length;
			oldRealPlayer = 'false';
			for (i = 0; i < numPlugins; i++)
			{
			  plugin = navigator.plugins[i];
			  if (plugin.name.substring(0,10)=="RealPlayer")
			  {
			  oldRealPlayer = 'true';
			  }
			}	
		      }		
		if (navigator.userAgent.indexOf("Mac") != -1) {
		
			if (oldRealPlayer == 'true'){
				window.location = (fullpage);
			} else {
			window.open(indexpage,'r1popup','height=460,width=626,status=yes,toolbar=no,menubar=no,scrollbars=yes,resize=yes,location=yes');
			}
		}
		
		else {if (navigator.userAgent.indexOf("95") != -1) {
			oldRealPlayer = 'false';
			document.writeln('<script language="VBscript">');
			document.writeln('on error resume next');
			document.writeln('RealPlayerG2 = not IsNull(CreateObject("rmocx.RealPlayer G2 Control"))');
			document.writeln('if (RealPlayerG2) then');
			document.writeln('oldRealPlayerIE=\"true\"');
			document.writeln('else');
			document.writeln('oldRealPlayerIE=\"false\"');
			document.writeln('end if');
			document.writeln('</scr' + 'ipt>');
			
			numPlugins = navigator.plugins.length;
			for (i = 0; i < numPlugins; i++)
			{
			plugin = navigator.plugins[i];
			if (plugin.name.substring(0,10)=="RealPlayer")
			{
			oldRealPlayer = 'true';
			}
		}
			if (oldRealPlayer == 'true' || oldRealPlayerIE == 'true'){	
			window.location = (fullpage);
			} else {
			window.open(indexpage,'r1popup','height=460,width=626,status=yes,toolbar=no,menubar=no,scrollbars=yes,resize=yes,location=yes');
			}	 	
		}	
		
		
		else {if (navigator.userAgent.indexOf("Win") != -1) {
		
			if (checkbrowser =='undetermined' || checkbrowser =='notinstalled') {
				window.open(indexpage,'r1popup','height=460,width=626,status=yes,toolbar=no,menubar=no,scrollbars=yes,resize=yes,location=yes');
			}
			
		} else {
		
			window.open(indexpage,'r1popup','height=460,width=626,status=yes,toolbar=no,menubar=no,scrollbars=yes,resize=yes,location=yes');
		
		}
	}
	}
	}
}
function LaunchVideo(page) {
		
		fullpage = page + '.smil';
		indexpage = page + '\\index.html';
		
		var agt=navigator.userAgent.toLowerCase();
		var
		is_aol = (agt.indexOf("aol") != -1);
		if (is_aol){
			window.location = (fullpage); // version for AOL browsers, was aol.html
		}
		else{
			var checkbrowser = isRealOne(); // here's where people with R1 will go
			if (checkbrowser == 'using') {
				 window.location = (fullpage);
			}
			if (checkbrowser == 'installed') {  // here's where people with R1 will go
				 window.location = (fullpage);
			}
			if (checkbrowser =='undetermined' || checkbrowser =='notinstalled') {
			
			// now the tricky part : people we're not sure about yet
				
			numPlugins = navigator.plugins.length;
			oldRealPlayer = 'false';
			for (i = 0; i < numPlugins; i++)
			{
			  plugin = navigator.plugins[i];
			  if (plugin.name.substring(0,10)=="RealPlayer")
			  {
			  oldRealPlayer = 'true';
			  }
			}	
		      }		
		if (navigator.userAgent.indexOf("Mac") != -1) {
		
			if (oldRealPlayer == 'true'){
				window.location = (fullpage);
			} else {
			window.open(indexpage,'r1popup','height=460,width=626,status=yes,toolbar=no,menubar=no,scrollbars=yes,resize=yes,location=yes');
			}
		}
		
		else {if (navigator.userAgent.indexOf("95") != -1) {
			oldRealPlayer = 'false';
			document.writeln('<script language="VBscript">');
			document.writeln('on error resume next');
			document.writeln('RealPlayerG2 = not IsNull(CreateObject("rmocx.RealPlayer G2 Control"))');
			document.writeln('if (RealPlayerG2) then');
			document.writeln('oldRealPlayerIE=\"true\"');
			document.writeln('else');
			document.writeln('oldRealPlayerIE=\"false\"');
			document.writeln('end if');
			document.writeln('</scr' + 'ipt>');
			
			numPlugins = navigator.plugins.length;
			for (i = 0; i < numPlugins; i++)
			{
			plugin = navigator.plugins[i];
			if (plugin.name.substring(0,10)=="RealPlayer")
			{
			oldRealPlayer = 'true';
			}
		}
			if (oldRealPlayer == 'true' || oldRealPlayerIE == 'true'){	
			window.location = (fullpage);
			} else {
			window.open(indexpage,'r1popup','height=460,width=626,status=yes,toolbar=no,menubar=no,scrollbars=yes,resize=yes,location=yes');
			}	 	
		}	
		
		
		else {if (navigator.userAgent.indexOf("Win") != -1) {
		
			if (checkbrowser =='undetermined' || checkbrowser =='notinstalled') {
				window.open(indexpage,'r1popup','height=460,width=626,status=yes,toolbar=no,menubar=no,scrollbars=yes,resize=yes,location=yes');
			}
			
		} else {
		
			window.open(indexpage,'r1popup','height=460,width=626,status=yes,toolbar=no,menubar=no,scrollbars=yes,resize=yes,location=yes');
		
		}
	}
	}
	}
}
