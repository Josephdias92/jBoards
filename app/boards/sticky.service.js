(function(module) {
  module.service('Sticky', function($resource, SERVER_PATH) {
    return $resource(SERVER_PATH + '/stickies/:id', null, {
      update: {
        method: 'PUT'
      }
    });
  });
})(angular.module('app.boards'));
