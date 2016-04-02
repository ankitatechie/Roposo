'use strict';

/**
 * @ngdoc overview
 * @name roposoApp
 * @description
 * # roposoApp
 *
 * Main module of the application.
 */
angular
  .module('roposoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule',
    'roposoWrapper',
    'roposoUtil'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/grid1.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        active: 'grid'
      })
      .when('/grid', {
        templateUrl: 'views/grid1.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        active: 'grid'
      })
      .when('/list', {
        templateUrl: 'views/grid2.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        active: 'list'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
