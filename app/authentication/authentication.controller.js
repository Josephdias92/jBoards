(function(module) {
  module.controller('authController', function(Authentication, $state) {
    var vm = this;
    vm.user = {};
    vm.login = function(user) {
      Authentication.login(user,
        function(data) {
          $state.transitionTo("layout.board");
        },
        function(err) {
          console.log(err);
        });
    };

    vm.loginViaGoogle = function() {
      Authentication.loginViaGoogle();
    };
  });
})(angular.module('app.auth'));
