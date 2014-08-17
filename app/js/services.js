'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('beSimpleBeClever.services', []).
factory('projectService', ['$q','$resource','baseUrl', function($q,$resource,baseUrl) {

    var projectService = {};

    projectService.getAll = function() {
        var url             = baseUrl + 'json/alldata.json',
            getData         = $resource(url),
            projectsData    = getData.query();

        return projectsData.$promise;
    };

    projectService.getProject = function(project) {
        var url             = baseUrl + 'json/' + project + '.json',
            getData         = $resource(url),
            projectData     = getData.get();

        return projectData.$promise;
    };

    return projectService;

}]);
