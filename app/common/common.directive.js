(function(module) {
  module.directive('submitOnEnter', function() {
    return function(scope, element, attrs) {
      element.bind("keydown keypress", function(event) {
        if (event.which === 13) {
          scope.$apply(function() {
            scope.$eval(attrs.submitOnEnter, {
              event: event
            });
          });
          event.preventDefault();
        }
      });
    };
  });
})(angular.module('app.common'));
