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
	
	var slides = '../../js/vendorx-ecommerce-admin/api/Site/Slides.js';

	function loadSlides() {
		$http.get(slides)
		.success(function(data) {
			$scope.slides = data;
		});
	}
	loadSlides();
	
	

});