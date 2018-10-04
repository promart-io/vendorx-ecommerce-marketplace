angular.module('product', []);
angular.module('product').controller('ProductController', function ($scope, $http, $location) {
	
	var searchParams = new URLSearchParams(window.location.search);
	$scope.category = searchParams.get('category');
	if (!$scope.category) {
		$scope.category = 1;
	}
	$scope.id = searchParams.get('product');
	if (!$scope.id) {
		$scope.id = 1;
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
	
	var categories = '../../js/vendorx-ecommerce-admin/api/Nomenclatures/Categories.js?IndexId=1';
	function loadCategories() {
		$http.get(categories)
		.success(function(data) {
			$scope.categories = data;
		});
	}
	loadCategories();
	
	var product = '../../js/vendorx-ecommerce-admin/api/Products/Products.js/' + $scope.id;
	function loadProduct() {
		$http.get(product)
		.success(function(data) {
			$scope.product = data;
		});
	}
	loadProduct();
	
	var products = '../../js/vendorx-ecommerce-admin/api/Products/Products.js?CategoryId=' + $scope.category;
	function loadProducts() {
		$http.get(products)
		.success(function(data) {
			$scope.products = data;
			$scope.products.forEach(function(product, index, object){
				if (product.Id === $scope.product.Id) {
    				object.splice(index, 1);
  				}
				product.Link = 'product.html?category=' + $scope.category + '&product=' + product.Id;
			});
		});
	}
	loadProducts();
	

});