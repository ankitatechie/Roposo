'use strict';

/**
 * @ngdoc function
 * @name roposoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the roposoApp
 */
(function() {
    angular.module('roposoApp')
        .controller('HeaderCtrl', [
            '$scope', '$route',
            function($scope, $route) {
                var header = this;
                $scope.$route = $route;
            }
        ])
        .controller('MainCtrl', [
            '$scope', 'localStorageService', 'getProductsWrapper', 'removeProductUtil', 'addProductUtil', 'editProductUtil',
            function($scope, localStorageService, getProductsWrapper, removeProductUtil, addProductUtil, editProductUtil) {
                var main = this;
                main.active = 'grid';
                if (!localStorageService.get('productsInfo') || localStorageService.get('productsInfo').length === 0) {
                    main.prodcuts = getProductsWrapper(main);
                } else {
                    main.productsInfo = localStorageService.get('productsInfo');
                }
                main.editable = false;
                main.removeProduct = removeProductUtil(main);
                main.addProduct = addProductUtil(main);
                main.editProduct = editProductUtil(main);
            }
        ])
})();
