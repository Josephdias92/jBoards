(function(module) {
  module.controller('layoutController', function($state, Authentication) {
    var vm = this;
    vm.logout = function() {
      Authentication.logout();
      $state.transitionTo('login');
    };
  });
})(angular.module('app.boards'));
