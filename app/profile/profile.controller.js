(function(module) {
  module.controller('profileController', function(Users, $mdToast) {
    var vm = this;
    vm.user = Users.profile();

    vm.save = function(user) {
      user.$save().then(function() {
        $mdToast.show($mdToast.simple()
          .textContent(user.displayName + ' Saved!').hideDelay(
            2000));
      });
    }
  });
})(angular.module('app.profile'));
