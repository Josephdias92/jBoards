(function(module) {
  module.service('Board', function($resource, SERVER_PATH) {
    return $resource(SERVER_PATH + '/boards/:id', null, {
      update: {
        method: 'PUT'
      }
    });
  });
})(angular.module('app.boards'));
