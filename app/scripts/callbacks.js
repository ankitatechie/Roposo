'use strict';
(function() {
    angular.module('roposoCallback', [
    	'LocalStorageModule'
    ])
    .factory('getProductsCallback', [
    	'localStorageService',
    	function (localStorageService) {
    		return function (response, scopeObject) {
    			scopeObject.productsInfo = response.products;
    			localStorageService.set('productsInfo', response.products);
    		}
    	}
    ])
})();