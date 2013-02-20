function CampaPrincipalesWin() {
	
	var style = require ('ui/handheld/android/Style');
	var self =  Titanium.UI.createWindow(style.CampaPrincipalesWin.self);
	
	var table = Ti.UI.createTableView();
	var url = "https://oiga.me/campaigns.json";
	var tableData = [];
	var json,  main, i, row,test;
 
	var xhr = Ti.Network.createHTTPClient({
    onload: function() {
	// Ti.API.debug(this.responseText);
		
	json = JSON.parse(this.responseText);
	for (i = 1; i < json.length; i++) {
	    
	    main = json[i];
	    row = Ti.UI.createTableViewRow({
	        height:'100dp',
	        rowID:i,
	    });
	    test = Ti.UI.createLabel({
	        text:main.body,
	        font:{
	            fontSize:'24dp',
		    fontWeight:'bold'
		},
		height:'auto',
		left:'10dp',
		top:'5dp',
		color:'#000',
		touchEnabled:false
	    });
	    
 
	    row.add(test);
	    tableData.push(row);
        }
		
	table.setData(tableData);
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
		 // Send the request.
		 xhr.send(); 
	self.add(table)
	
	
	table.addEventListener('click', function(e){
		alert(e.source.rowID);
	});
	
	return self;
}
module.exports = CampaPrincipalesWin;