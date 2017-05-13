(function(module) {
  module.factory('Section', function($firebaseArray) {
    return {
      sections: function(boardId) {
        var ref = firebase.database().ref('sections/' + boardId);
        return $firebaseArray(ref);
      }
    };
  });
})(angular.module('app.boards'));
