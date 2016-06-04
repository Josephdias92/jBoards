(function(module) {
<<<<<<< HEAD
  module.controller('profileController', function() {
    var vm = this;
  
=======
  module.controller('profileController', function(Profile) {
    var vm = this;
    Profile.getUser().then(function(response) {
      vm.User = response.data;
      console.log(vm.User);
    });
>>>>>>> refs/remotes/origin/master
  });
})(angular.module('app.profile'));