'use strict';

// Declare app level module which depends on filters, and services
angular.module('beSimpleBeClever', [
    'ngRoute',
    'ngResource',
    'akoenig.deckgrid',
    'beSimpleBeClever.controllers',
    'beSimpleBeClever.directives',
    'beSimpleBeClever.constants',
    'beSimpleBeClever.services'
]).
config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.when('/',
        {
          templateUrl: 'partials/home.html',
          controller: 'HomeCtrl'
        });
    $routeProvider.when('/project/:project',
        {
            templateUrl: 'partials/project.html',
            controller: 'ProjectCtrl'
        });
    $routeProvider.when('/about',
        {
            templateUrl: 'partials/about.html'
        });
    $routeProvider.when('/say-hi',
        {
            templateUrl: 'partials/say-hi.html',
            controller: 'SayHiCtrl'
        });
    $routeProvider.otherwise({redirectTo: '/'});
}]).
run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
        $rootScope.currentPage = next.$$route.originalPath;
    });
}]);

angular.module('beSimpleBeClever.constants', []).
constant('moods', {
    fire: {title: 'fire', class: 'fire'},
    stone: {title:'gemstone', class: 'stone'}
}).
constant('baseUrl', 'http://localhost:8080/app/');
