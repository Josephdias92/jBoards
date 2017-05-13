(function(module) {
  module.service('Authentication', function($firebaseAuth, Users,
    localStorage) {
    var authObj = $firebaseAuth();
    this.loginViaGoogle = function() {
      return authObj.$signInWithPopup('google').then(function(
        firebaseUser) {
        localStorage.add('auth', firebaseUser);
        Users.profile(firebaseUser.user.uid).$loaded().then(
          function(user) {
            if (!user.uid) {
              user.uid = firebaseUser.user.uid;
              user.displayName = firebaseUser.user.displayName;
              var name = user.displayName.split(' ');
              user.firstname = name && name[0] || '';
              user.lastname = name && name[1] || '';
              user.initials = (user.firstname && user.firstname[
                0]) + (user.lastname && user.lastname[0]);
              user.email = firebaseUser.user.email;
              user.$save();
            }
          });
      });
    };
    this.login = function(user) {
      return authObj.$signInWithEmailAndPassword(user.email, user.password)
        .then(function(firebaseUser) {
          localStorage.add('auth', firebaseUser);
        });
    };
    this.getProfile = function() {
      // return localStorage.get('auth').user;
    };
    this.logout = function() {
      localStorage.clear();
      authObj.$signOut();
    };
    this.register = function(user) {
      return authObj.$createUserWithEmailAndPassword(user.email,
          user.password)
        .then(function(firebaseUser) {
          localStorage.add('auth', firebaseUser);
        });
    };
  });
})(angular.module('app.auth'));
