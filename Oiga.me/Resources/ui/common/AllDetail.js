function AllDetail(){
	var style =  require('ui/handheld/android/Style');
	var self = Titanium.UI.createWindow(style.AllDetail.self);

	var url = "https://oiga.me/campaigns.json";
	var json,  main;
 	
 	var barraShared = Titanium.UI.createView({
 		top:'200dp',
 		height:'30dp',
 		width:'100%',
 		backgroundColor:'red',
 	});
 	var botonFacebook = Titanium.UI.createButton({
		title:'Facebook',
		left:'50dp',
		height:'28dp',
		width:'80dp',
	});

	var botonTwitter = Titanium.UI.createButton({
		title:'Twitter',
		left:'170dp',
		height:'28dp',
		width:'80dp',
	});
 	
	var xhr = Ti.Network.createHTTPClient({
	    onload: function() {

			json = JSON.parse(this.responseText);
			main = json[Titanium.App.Properties.getInt('RowId')];

			var image = Titanium.UI.createImageView({
				top:'0dp',
				height:'200dp',
				width:'320dp',
				image:'https://oiga.me'+main.image.home.url
			});

			var titulo = Ti.UI.createLabel({
		        text:main.name,
		        font:{
		            fontSize:'15dp',
			    	fontWeight:'bold'
			    },
				height:'auto',
				left:'25dp',
				top:'235dp',
				color:'#000',
				touchEnabled:false
		    });

			var contenido = Titanium.UI.createWebView({
				html:main.body,
				top:'290dp',
				borderColor:'#000',
				bottom:'5dp',
			})

			self.add(image);
			self.add(titulo);
			self.add(contenido);

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


	self.add(barraShared);
	barraShared.add(botonFacebook);
	barraShared.add(botonTwitter);


	return self;
}

module.exports = AllDetail;