angular.module('about', []);
angular.module('about').controller('AboutController', function ($scope, $http, $location) {
	
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
	
	var about = '../../js/vendorx-ecommerce-admin/api/Site/About.js/1';
	function loadAbout() {
		$http.get(about)
		.success(function(data) {
			$scope.about = data;
		});
	}
	loadAbout();

});