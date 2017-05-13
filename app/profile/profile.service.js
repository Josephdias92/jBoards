(function(module) {
  module.factory('Users', function($firebaseArray, $firebaseObject,
    localStorage) {
    return {
      all: function() {
        var ref = firebase.database().ref('users');
        return $firebaseArray(ref);
      },
      profile: function() {
        var auth = localStorage.get('auth');
        var ref = firebase.database().ref('users/' + auth.user.uid);
        return $firebaseObject(ref);
      }
    };
  });
})(angular.module('app.auth'));
