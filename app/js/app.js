'use strict';

// Declare app level module which depends on filters, and services
angular.module('beSimpleBeClever', [
    'ngRoute',
    'akoenig.deckgrid',
    'beSimpleBeClever.controllers'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/',
        {
          templateUrl: 'partials/home.html',
          controller: 'HomeCtrl'
        });
    $routeProvider.when('/about',
        {
            templateUrl: 'partials/about.html',
            controller: 'AboutCtrl'
        });
    $routeProvider.when('/say-hi',
        {
            templateUrl: 'partials/say-hi.html',
            controller: 'HiCtrl'
        });
    $routeProvider.otherwise({redirectTo: '/'});
}]);
