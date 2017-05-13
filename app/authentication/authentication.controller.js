(function(module) {
  module.controller('authController', function(Authentication, $state,
    $mdToast) {
    var vm = this;

    vm.user = {};
    vm.login = function(user) {
      Authentication.login(user)
        .then(function() {
          $state.transitionTo('layout.board.create');
        }).catch(function(err) {
          $mdToast.show($mdToast.simple()
            .textContent(err.message).hideDelay(
              5000));
        });
    };
    vm.loginViaGoogle = function() {
      Authentication.loginViaGoogle().then(function(result) {
        $state.transitionTo('layout.board.create');
      }).catch(function(error) {
        $mdToast.show($mdToast.simple()
          .textContent(error.message).hideDelay(
            5000));
      });
    };
    vm.register = function(user) {
      Authentication.register(user).then(function() {
        $state.transitionTo('layout.board.create');
      }).catch(function(err) {
        $mdToast.show($mdToast.simple()
          .textContent(err.message).hideDelay(
            5000));
      });
    };
  });
})(angular.module('app.auth'));
