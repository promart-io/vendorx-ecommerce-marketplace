angular.module('marketplace', []);
angular.module('marketplace').controller('MarketplaceController', function ($scope, $http, $location) {
	
	var searchParams = new URLSearchParams(window.location.search);
	$scope.category = searchParams.get('category');
	if (!$scope.category) {
		$scope.category = 1;
	}
	
	var index = '../../js/vendorx-ecommerce-admin/api/Site/Index.js/1';
	function loadIndex() {
		$http.get(index)
		.success(function(data) {
			$scope.data = data;
		});
	}
	loadIndex();
	
	var marketplace = '../../js/vendorx-ecommerce-admin/api/Site/Marketplace.js/1';
	function loadMarketplace() {
		$http.get(marketplace)
		.success(function(data) {
			$scope.marketplace = data;
		});
	}
	loadMarketplace();
	
	var slides = '../../js/vendorx-ecommerce-admin/api/Site/Slides.js?IndexId=1';
	function loadSlides() {
		$http.get(slides)
		.success(function(data) {
			$scope.slides = data;
		});
	}
	loadSlides();
	
	var categories = '../../js/vendorx-ecommerce-admin/api/Nomenclatures/Categories.js?IndexId=1';
	function loadCategories() {
		$http.get(categories)
		.success(function(data) {
			$scope.categories = data;
		});
	}
	loadCategories();
	
	var products = '../../js/vendorx-ecommerce-admin/api/Products/Products.js?CategoryId=' + $scope.category;
	function loadProducts() {
		$http.get(products)
		.success(function(data) {
			$scope.products = data;
		});
	}
	loadProducts();
	
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