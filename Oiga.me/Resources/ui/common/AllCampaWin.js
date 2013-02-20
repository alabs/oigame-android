function AllCampaWin(){
	
	var style =  require('ui/handheld/android/Style');
	var self = Titanium.UI.createWindow(style.AllCampaWin.self);
	var table = Ti.UI.createTableView();
	var url = "https://oiga.me/campaigns.json";
	var tableData = [];
	var json,  main, i, row,test;
	var AllDetail = require('ui/common/AllDetail');
 
	var xhr = Ti.Network.createHTTPClient({
	    onload: function() {
		// Ti.API.debug(this.responseText);
			
		json = JSON.parse(this.responseText);
		for (i = 0; i < json.length; i++) {
		    
		    main = json[i];
		    row = Ti.UI.createTableViewRow({
		        height:'65dp',
		        rowID:i,
		        hasChild:'true',
		    });
		    
		    var imagen = Titanium.UI.createImageView({
		    	height:'40dp',
		    	width:'50dp',
		    	left:'5dp',
		    	image:'https://oiga.me'+main.image.thumb.url,
		    	//borderColor:'red',
		    	backgroundColor:'#fff',
		    	borderRadius:5,
		    	touchEnabled:false,
		    });
		    title = Ti.UI.createLabel({
		        text:main.name,
		        font:{
		            fontSize:'10dp',
			    	fontWeight:'bold'
			    },
				height:'auto',
				left:'65dp',
				top:'10dp',
				color:'#000',
				touchEnabled:false
		    });
		    
	 
		    row.add(title);
		    row.add(imagen);
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
	xhr.send(); 
	self.add(table)
	
	
	table.addEventListener('click', function(e){
		//alert(e.source.rowID);
		var allDetail = new AllDetail();
		allDetail.open({modal:true});
		Titanium.App.Properties.setInt('RowId', e.source.rowID );
	});
	
	return self;
}
module.exports = AllCampaWin;