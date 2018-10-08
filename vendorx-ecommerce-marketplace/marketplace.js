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
	
	var menu = '../../js/vendorx-ecommerce-admin/api/Site/Menu.js/1';
	function loadMenu() {
		$http.get(menu)
		.success(function(data) {
			$scope.menu = data;
		});
	}
	loadMenu();
	
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
			$scope.products.forEach(function(product){
				product.Link = 'product.html?category=' + $scope.category + '&product=' + product.Id;
			});
		});
	}
	loadProducts();
	
});