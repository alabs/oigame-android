function ApplicationTabGroup(Window) {
	
	var self = Ti.UI.createTabGroup();
	var CampaPrincipales = require('ui/common/CampaPrincipales');
	var campaPrincipales = new CampaPrincipales();
	var win1 = new Window('Campañas Principales'),
		win2 = new Window('Todas las Campañas');
	
	var tab1 = Ti.UI.createTab({
		title: 'Campañas Principales',
		icon: 'android/images/KS_nav_ui.png',
		window: campaPrincipales
	});
	win1.containingTab = tab1;
	
	var tab2 = Ti.UI.createTab({
		title: 'Todas las Campañas',
		icon: 'android/images/KS_nav_views.png',
		window: win2
	});
	win2.containingTab = tab2;
	
	self.addTab(tab1);
	self.addTab(tab2);
	
	return self;
};

module.exports = ApplicationTabGroup;
