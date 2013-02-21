function CampaPrincipalesWin() {
	
	var style = require ('ui/handheld/android/Style');
	var self =  Titanium.UI.createWindow(style.CampaPrincipalesWin.self);
	var url = "https://oiga.me/campaigns.json";
	var Noticia2 = require('ui/common/noticia2');
	var Noticia3 = require('ui/common/noticia3');
	var Noticia4 = require('ui/common/noticia4');
	var Noticia5 = require('ui/common/noticia5');
	var noticia2 = new Noticia2();
	var noticia3 = new Noticia3();
	var noticia4 = new Noticia4();
	var noticia5 = new Noticia5();
	 
	var xhr = Ti.Network.createHTTPClient({
    onload: function() {
		var json = JSON.parse(this.responseText)
		var main = json[0];
		var fotoPrincipal = Titanium.UI.createImageView({
			top:0,
			// left:'10dp',
			// right:'10dp',
			width:'280dp',
			height:'140dp',
			image:'https://oiga.me'+main.image.home.url,
			borderColor:'#000',
		});
		
		var ContenedorTitle = Titanium.UI.createView({
			backgroundColor:'#000',
			top:'140dp',
			height:'60dp',
			width:'100%',
			borderColor:'red',
		});
		
		var title = Titanium.UI.createLabel({
			text:main.name,
			color:'#fff',
			font:{fontSize:'12dp',},
			top:'5dp',
			left:'5dp',
		});
		
		
		
		self.add(fotoPrincipal);
		self.add(ContenedorTitle);
		ContenedorTitle.add(title);
		    
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
	self.add(noticia2);
	self.add(noticia3);
	self.add(noticia4);
	self.add(noticia5);
	
	return self;
}
module.exports = CampaPrincipalesWin;