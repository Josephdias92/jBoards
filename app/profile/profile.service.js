(function(module) {
  module.factory('Users', function($firebaseArray, $firebaseObject,
    localStorage) {
    return {
      search: function(queryString) {
        var ref = firebase.database().ref('users');
        ref.orderByKey().startAt(queryString).endAt(queryString +
          "\uf8ff");
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
