function ApplicationTabGroup(Window) {
	
	var self = Ti.UI.createTabGroup();
	var CampaPrincipalesWin = require('ui/common/CampaPrincipalesWin');
	var AllCampaWin = require('ui/common/AllCampaWin');
	var SearchWin = require('ui/common/SearchWin');
	var campaPrincipalesWin = new CampaPrincipalesWin();
	var allCampaWin = new AllCampaWin();
	var searchWin = new SearchWin();
	
	
	var tab1 = Ti.UI.createTab({
		title: 'Campañas Principales',
		icon: 'KS_nav_ui.png',
		window: campaPrincipalesWin,
	});
	campaPrincipalesWin.containingTab = tab1;
	
	var tab2 = Ti.UI.createTab({
		title: 'Todas las Campañas',
		icon: 'KS_nav_views.png',
		window: allCampaWin,
	});
	allCampaWin.containingTab = tab2;
	
	var tab3 = Ti.UI.createTab({
		title: 'Busqueda',
		icon: 'KS_nav_views.png',
		window: searchWin,
	});
	searchWin.containingTab = tab2;
	
	self.addTab(tab1);
	self.addTab(tab2);
	self.addTab(tab3);
	
	return self;
};

module.exports = ApplicationTabGroup;
