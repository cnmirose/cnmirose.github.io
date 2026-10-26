function setClientSizeCookies() {
   
    if (!document.layers) {
        var client_w = document.body.clientWidth;
        var client_h = document.body.clientHeight;
        var path = "/";
        var domain = "nytimes.com";
        
        document.cookie = "client_w=" + client_w + "; path= " + path + "; domain=" + domain;
        document.cookie = "client_h=" + client_h + "; path= " + path + "; domain=" + domain;
    }
    
}    