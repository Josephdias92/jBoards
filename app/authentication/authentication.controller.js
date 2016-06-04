(function (module) {
  module.controller('authController', function (Authentication, $state) {
    var vm = this;
    vm.user = {};
    vm.login = function (user) {
      Authentication.login(user, function () {
        $state.transitionTo('layout.board');
      }, function (err) {
        vm.errMsg = err.data.message;
      });
    };
    vm.loginViaGoogle = function () {
      Authentication.loginViaGoogle();
    };
  });
}(angular.module('app.auth')));