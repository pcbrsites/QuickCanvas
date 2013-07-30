'use strict';

/* Directives */


angular.module('quickcanvas.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('ngEnter', function() {
          return function(scope, element, attrs) {
              element.bind("keydown keypress", function(event) {
                  if(event.which === 13 || event.which === 9) {
                      scope.$apply(function(){
                          scope.$eval(attrs.ngEnter);
                      });

                      event.preventDefault();
                  }
              });
          };
      });
