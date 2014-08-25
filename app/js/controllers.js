'use strict';

/* Controllers */

angular.module('beSimpleBeClever.controllers', [])
.controller('AppCtrl', ['$scope','$location','moods', '$route', '$rootScope', function($scope,$location,moods,$route,$rootScope) {
    $scope.moodStatus   = false;
    $scope.moodColour   = moods.stone;
    $scope.storeColor   = null;

    $scope.isActive = function(url) {
        return url === $location.path();
    };

    $scope.isVisibleMood = function() {
        $scope.moodStatus = !$scope.moodStatus;
    }

    $rootScope.$watch('currentPage', function(newval) {

        if(newval === '/project/:project') {
            $scope.storeColor           = angular.copy($scope.moodColour.class);
            $scope.moodColour.class     = '';
        } else {
            $scope.moodColour.class     = ($scope.storeColor !== null ? $scope.storeColor : $scope.moodColour.class);
        }

    }, true);

    $scope.moodRing = function (moodTitle,moodClass) {
        $scope.moodColour.title     = moodTitle;
        $scope.moodColour.class     = moodClass;
        $scope.moodStatus           = !$scope.moodStatus;
    };

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
.controller('ProjectCtrl', ['$scope','$routeParams', '$route', 'projectService','baseUrl',
function($scope,$routeParams,$route,projectService,baseUrl) {
    $scope.project      = {};
    $scope.baseUrl      = baseUrl;
    projectService.getProject($routeParams.project).then(function(data){
        $scope.project  = data;
    });

}]);
