(function(module) {
  module.factory('Sticky', function($firebaseArray, $firebaseObject) {
    return {
      all: function(boardId) {
        var ref = firebase.database().ref('sticky/' + boardId);
        return $firebaseObject(ref);
      },
      sticky: function(boardId, sectionId, stickyId) {
        var ref = firebase.database().ref('sticky').child(boardId).child(
          sectionId).child(stickyId);
        return $firebaseObject(ref);
      },
      section: function(boardId, sectionId) {
        var ref = firebase.database().ref('sticky/' + boardId + '/' +
          sectionId);
        return $firebaseArray(ref);
      }
    };
  });
})(angular.module('app.boards'));
