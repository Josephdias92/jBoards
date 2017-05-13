(function(module) {
  module.controller('boardViewController', function(Board, $stateParams) {
    var vm = this;
    var id = $stateParams.id;
    if (id) {
      vm.board = Board.board(id);
    }
    vm.saveSticky = function(data, section) {
      var s = {
        text: data.text
      };
    };
    vm.dropCallback = function(event, index, item) {
      return item;
    };
    vm.addSticky = function(arrRef) {
      arrRef.push({});
    };
  });
})(angular.module('app.boards'));
