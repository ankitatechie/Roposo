'use strict';
(function() {
    angular.module('roposoWrapper', [
            'roposoService',
            'roposoCallback'
        ])
        .factory('getProductsWrapper', [
            'getProductsService', 'getProductsCallback',
            function(getProductsService, getProductsCallback) {
                return function(scopeObject) {
                    var promise;
                    promise = getProductsService().$promise;
                    promise.then(function(response) {
                        getProductsCallback(response, scopeObject);
                    })
                }
            }
        ])
})();
