(function(module) {
  module.factory('Board', function(localStorage, $firebaseArray,
    $firebaseObject) {
    return {
      boards: function() {
        // var auth = localStorage.get('auth');
        var ref = firebase.database().ref('boards');
        return $firebaseArray(ref);
      },
      board: function(id) {
        var auth = localStorage.get('auth');
        var ref = firebase.database().ref('boards/' + id);
        return $firebaseObject(ref);
      },
    }
  });
})(angular.module('app.boards'));
