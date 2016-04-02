'use strict';
(function() {
    angular.module('roposoUtil', [
            'LocalStorageModule'
        ])
        .factory('removeProductUtil', [
            'localStorageService',
            function(localStorageService) {
                return function(scopeObject) {
                    return function(product, index) {
                        var products = localStorageService.get('productsInfo');
                        for (var i = 0; i < products.length; i++) {
                            if (i === index) {
                                products.splice(i, 1);
                                break;
                            }
                        }
                        localStorageService.set('productsInfo', products);
                        scopeObject.productsInfo = localStorageService.get('productsInfo');
                    }
                }
            }
        ])
        .factory('addProductUtil', [
            'localStorageService',
            function(localStorageService) {
                return function(scopeObject) {
                    return function() {
                        var products = localStorageService.get('productsInfo');
                        var newProduct = products[0];
                        newProduct = {
                            image: 'images/small/img9.png',
                            title: 'Add New Title',
                            description: 'Add Your Description'
                        }
                        products.push(newProduct);
                        localStorageService.set('productsInfo', products);
                        scopeObject.productsInfo = localStorageService.get('productsInfo');
                    }
                }
            }
        ])
        .factory('editProductUtil', [
            'localStorageService',
            function(localStorageService) {
                return function(scopeObject) {
                    return function(product, index, reset) {
                        if (!reset) {
                            localStorageService.set('productsInfo', scopeObject.productsInfo);
                            scopeObject.productsInfo = localStorageService.get('productsInfo');
                        }else{
                        	scopeObject.productsInfo = localStorageService.get('productsInfo');
                        }
                    }
                }
            }
        ])
})();
