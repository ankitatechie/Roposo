'use strict';
(function() {
    angular.module('roposoResource', [
    	'ngResource'
    ])
    .factory('getProductsResource',[
		'$resource',
		function ($resource){
			return $resource(
				'http://localhost:9003/scripts/products.json',
				{},
				{
					query: {
						method: 'GET'
					}
				},
				{stripTrailingSlashes: false}
			);
		}
	]);
})();