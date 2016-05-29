(function(module) {
  module.controller('boardController', function(Board, $stateParams, $state,
    BoardGet, Sticky, $mdToast) {
    var vm = this;
    vm.board = {};
    var id = $stateParams.id;
    if (id) {
      BoardGet.$promise.then(function(board) {
        vm.board = board;
      });
    } else {
      vm.boardtypes = [{
        name: 'Retrospective',
        section: [{
          name: 'What went well',
          originalName: 'What went well',
          data: []
        }, {
          name: 'what can be improved',
          originalName: 'what can be improved',
          data: []
        }, {
          name: 'Action Items',
          originalName: 'Action Items',
          data: []
        }]
      }, {
        name: 'Star Fish Retrospective',
        section: [{
          name: 'Keep Doing',
          originalName: 'Keep Doing',
          data: []
        }, {
          name: 'Less Of',
          originalName: 'Less Of',
          data: []
        }, {
          name: 'More Of',
          originalName: 'More Of',
          data: []
        }, {
          name: 'Stop Doing',
          originalName: 'Stop Doing',
          data: []
        }, {
          name: 'Start Doing',
          originalName: 'Start Doing',
          data: []
        }]
      }, {
        name: 'Six thinking hats',
        section: [{
          name: 'Managing-Blue',
          originalName: 'Managing-Blue',
          data: []
        }, {
          name: 'Information-White',
          originalName: 'Information-White',
          data: []
        }, {
          name: 'Emotions-Red',
          originalName: 'Emotions-Red',
          data: []
        }, {
          name: 'Discernment-Black',
          originalName: 'Discernment-Black',
          data: []
        }, {
          name: 'Optimistic response-Yellow',
          originalName: 'Optimistic response-Yellow',
          data: []
        }, {
          name: 'Creativity-Green',
          originalName: 'Creativity-Green',
          data: []
        }]
      }, {
        name: 'Todos',
        section: [{
          name: 'Todos',
          originalName: 'Todos',
          data: []
        }]
      }, {
        name: 'Pros and Cons',
        section: [{
          name: 'Pros',
          originalName: 'Pros',
          data: []
        }, {
          name: 'Cons',
          originalName: 'Cons',
          data: []
        }]
      }];
      vm.board.type = vm.boardtypes[0];
      vm.board.private = true;
    }

    vm.availableColors = [
      "bggreen",
      "bgblue",
      "bgpink",
      "bgpurple",
      "bgwhite",
      "bgyellow"
    ];

    vm.addSticky = function(arrRef) {
      arrRef.push({});
    };
    vm.save = function() {
      Board.save(vm.board, function(d) {
        $mdToast.show(
          $mdToast.simple()
          .textContent(d.name + ' Created!')
          .position('right bottom')
          .hideDelay(2000)
        );
        $state.go('layout.board', {
          id: d._id
        });
      });
    };
    vm.saveSticky = function(data, section) {
      var s = {
        text: data.text,
        board: vm.board._id,
        section: section._id
      };
      Sticky.save(s, function(updatedData) {
        console.log(updatedData);
      });
    };
    vm.dropCallback = function(event, index, item) {
      return item;
    };
  });
})(angular.module('app.boards'));
