'use strict';
(function() {
    angular.module('roposoService', [
    	'roposoResource'
    ])
    .factory('getProductsService', [
    	'getProductsResource',
    	function (getProductsResource) {
    		return function() {
    		    return getProductsResource.query();
    		};
    	}
    ])
})();
