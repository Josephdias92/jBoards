(function(module) {
  module.service('Profile', function($http, SERVER_PATH, $q) {

    this.getUser = function() {
      var defered = $q.defer();
      $http({
        url: SERVER_PATH + '/users/me',
        method: 'GET'
      }).then(function(response) {
        defered.resolve(response);
      }, function(response) {
        defered.reject(response);
      });
      return defered.promise;
    };
  });
})(angular.module('app.auth'));
