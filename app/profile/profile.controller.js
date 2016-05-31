(function(module) {
  module.controller('profileController', function(Profile) {
    var vm = this;
    Profile.getUser().then(function(response) {
      vm.User = response.data;
    });
  });
})(angular.module('app.profile'));