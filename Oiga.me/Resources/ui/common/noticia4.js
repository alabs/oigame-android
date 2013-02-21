function noticia4(){
	var style =  require('ui/handheld/android/Style');
	var self = Titanium.UI.createView(style.noticia4.self);
	
	var url = "https://oiga.me/campaigns.json";
	var xhr = Ti.Network.createHTTPClient({
    onload: function() {
		var json = JSON.parse(this.responseText)
		var main = json[3];
		var fotoPrincipal = Titanium.UI.createImageView({
			top:0,
			// left:'10dp',
			// right:'10dp',
			width:'130dp',
			height:'50dp',
			image:'https://oiga.me'+main.image.home.url,
			borderColor:'#000',
		});
		
		
		var title = Titanium.UI.createLabel({
			text:main.name,
			color:'#fff',
			font:{fontSize:'8dp',},
			top:'55dp',
			left:'1dp',
		});
		
		
		
		self.add(fotoPrincipal);
		self.add(title);
		
		    
	    },
	    onerror: function(e) {
			Ti.API.debug("STATUS: " + this.status);
			Ti.API.debug("TEXT:   " + this.responseText);
			Ti.API.debug("ERROR:  " + e.error);
			alert('There was an error retrieving the remote data. Try again.');
	    },
	    timeout:5000
	});
	
	
		 xhr.open("GET", url);
		 xhr.send(); 
	
	return self;
}
module.exports = noticia4;