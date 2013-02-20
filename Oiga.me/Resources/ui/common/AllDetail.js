function AllDetail(){
	var style =  require('ui/handheld/android/Style');
	var self = Titanium.UI.createWindow(style.AllDetail.self);
	var table = Ti.UI.createTableView();
	var url = "https://oiga.me/campaigns.json";
	var json,  main;
 	
 	var barraShared = Titanium.UI.createView({
 		top:'210dp',
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
			
		
			
	     
			self.add(image);
			
	
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
	self.add(table)
	
	self.add(barraShared);
	barraShared.add(botonFacebook);
	barraShared.add(botonTwitter);
	
	
	return self;
}

module.exports = AllDetail;