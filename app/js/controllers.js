'use strict';

/* Controllers */

angular.module('beSimpleBeClever.controllers', [])
.controller('AppCtrl', ['$scope','$location','moods', function($scope,$location,moods) {
    $scope.moodStatus   = false;
    $scope.moodColour   = moods.stone;

    console.log($location.path('/project'));

    $scope.isActive = function(url) {
        return url === $location.path();
    };

    $scope.isVisibleMood = function() {
        $scope.moodStatus = !$scope.moodStatus;
    }

    $scope.moodRing = function (moodTitle,moodClass) {
        $scope.moodColour.title     = moodTitle;
        $scope.moodColour.class     = moodClass;
        $scope.moodStatus           = !$scope.moodStatus;
    }

}])
.controller('HomeCtrl', ['$scope', 'projectService', function($scope,projectService) {

    $scope.photos = {};

    projectService.getAll().then(function(data){
        $scope.photos = data;
    });

}])
.controller('SayHiCtrl', ['$scope', function($scope) {
    $scope.submitted = false;

    $scope.submitForm = function(form) {
        if(form.$valid) {
            alert('valid');
        } else {
            $scope.submitted = true;
        }
    };
}])
.controller('ProjectCtrl', ['$scope','$routeParams','projectService','baseUrl', function($scope,$routeParams,projectService,baseUrl) {
        $scope.project      = {};
        $scope.baseUrl      = baseUrl;

        projectService.getProject($routeParams.project).then(function(data){
            $scope.project  = data;
        });

}]);
