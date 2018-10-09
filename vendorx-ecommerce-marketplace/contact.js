angular.module('contact', []);
angular.module('contact').controller('ContactController', function ($scope, $http, $location, $sce) {
	
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
	
	var contact = '../../js/vendorx-ecommerce-admin/api/Site/Contact.js/1';
	function loadContact() {
		$http.get(contact)
		.success(function(data) {
			$scope.contact = data;
			$scope.location = $sce.trustAsResourceUrl('https://maps.google.com/maps?q=' + data.Street + '%20' + data.City + '=&z=13&ie=UTF8&iwloc=&output=embed');
		});
	}
	loadContact();
	
	
	

});