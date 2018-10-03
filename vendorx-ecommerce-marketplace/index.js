angular.module('index', []);
angular.module('index').controller('IndexController', function ($scope, $http) {

	var main = '../../js/vendorx-ecommerce-admin/api/Site/Index.js/1';
	function loadMain() {
		$http.get(main)
		.success(function(data) {
			$scope.data = data;
		});
	}
	loadMain();
	
	var slides = '../../js/vendorx-ecommerce-admin/api/Site/Slides.js?IndexId=1';
	function loadSlides() {
		$http.get(slides)
		.success(function(data) {
			$scope.slides = data;
		});
	}
	loadSlides();
	
	var features = '../../js/vendorx-ecommerce-admin/api/Site/Features.js?IndexId=1';
	function loadFeatures() {
		$http.get(features)
		.success(function(data) {
			$scope.features = data;
		});
	}
	loadFeatures();
	
	var promotions = '../../js/vendorx-ecommerce-admin/api/Site/Promotions.js?IndexId=1';
	function loadPromotions() {
		$http.get(promotions)
		.success(function(data) {
			$scope.promotions = data;
		});
	}
	loadPromotions();
	
	var clearance = '../../js/vendorx-ecommerce-admin/api/Site/Clearance.js?IndexId=1';
	function loadClearance() {
		$http.get(clearance)
		.success(function(data) {
			$scope.clearance = data;
		});
	}
	loadClearance();
	

});