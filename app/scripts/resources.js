'use strict';
(function() {
    angular.module('roposoResource', [
    	'ngResource'
    ])
    .factory('getProductsResource',[
		'$resource',
		function ($resource){
			return $resource(
				'../json/products.json',
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