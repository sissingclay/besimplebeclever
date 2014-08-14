'use strict';

/* Controllers */

angular.module('beSimpleBeClever.controllers', [])
.controller('HomeCtrl', ['$scope', function($scope) {

    $scope.photos = [
        {id: 'p1', 'title': 'A nice day!', src: "http://lorempixel.com/300/400/"},
        {id: 'p2', 'title': 'Puh!', src: "http://lorempixel.com/300/400/sports"},
        {id: 'p3', 'title': 'What a club!', src: "http://lorempixel.com/300/400/nightlife"}
    ];

}])
.controller('AboutCtrl', ['$scope', function($scope) {

}]);
