angular.module('services', []);
angular.module('services').controller('ServicesController', function ($scope, $http, $location) {
	
	var index = '../../js/vendorx-ecommerce-admin/api/Site/Index.js/1';
	function loadIndex() {
		$http.get(index)
		.success(function(data) {
			$scope.data = data;
		});
	}
	loadIndex();
	
	var menu = '../../js/vendorx-ecommerce-admin/api/Site/Menu.js/1';
	function loadMenu() {
		$http.get(menu)
		.success(function(data) {
			$scope.menu = data;
		});
	}
	loadMenu();
	
	var services = '../../js/vendorx-ecommerce-admin/api/Site/Services.js/1';
	function loadServices() {
		$http.get(services)
		.success(function(data) {
			$scope.services = data;
		});
	}
	loadServices();
	
	var panels = '../../js/vendorx-ecommerce-admin/api/Site/Panels.js?ServicesId=1';
	function loadPanels() {
		$http.get(panels)
		.success(function(data) {
			$scope.panels = data;
		});
	}
	loadPanels();
	
	var service = '../../js/vendorx-ecommerce-admin/api/Site/Service.js?ServicesId=1';
	function loadService() {
		$http.get(service)
		.success(function(data) {
			$scope.service = data;
		});
	}
	loadService();

});