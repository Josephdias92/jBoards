(function(module) {
  module.controller('boardViewController', function(Board, $stateParams,
    Sticky) {
    var vm = this;
    var id = $stateParams.id;
    if (id) {
      vm.board = Board.board(id);
      Sticky.all(id).$loaded(function(stickes) {
        vm.stickes = stickes;
      });
    }
    vm.saveSticky = function(data, sid, stickkey) {
      var sticky = Sticky.sticky(id, sid, stickkey);
      sticky.text = data.text;
      sticky.$save();
    };
    vm.dropCallback = function(event, index, item) {
      return item;
    };
    vm.removeSticky = function(sid, stickkey) {
      var sticky = Sticky.sticky(id, sid, stickkey);
      sticky.$remove();
    };
    vm.addSticky = function(sectionId) {
      console.log(sectionId)
      Sticky.section(id, sectionId).$add({
        text: ''
      });
    };
  });
})(angular.module('app.boards'));
