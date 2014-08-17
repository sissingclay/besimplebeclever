'use strict';

/* Directives */


angular.module('beSimpleBeClever.directives', [])
    .directive('isBlock', [ function() {
        return {
            link: function(scope,ele,attr) {

                scope.$watch(attr.isBlock, function(newVal, oldVal) {
                    var isDisplay = (newVal === true ? "block" : "none");
                    ele[0].style.display = isDisplay;

                }, true);
            }
        };
    }]);
