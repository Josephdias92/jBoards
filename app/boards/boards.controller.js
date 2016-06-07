(function(module) {
  module.controller('boardController', function(Board, $stateParams, $state,
    BoardGet, Sticky, $mdToast) {
    var vm = this;
    vm.availableColors = [
      'bggreen',
      'bgblue',
      'bgpink',
      'bgpurple',
      'bgoffwhite',
      'bgyellow'
    ];
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
          color: vm.availableColors[0],
          data: []
        }, {
          name: 'what can be improved',
          originalName: 'what can be improved',
          color: vm.availableColors[1],
          data: []
        }, {
          name: 'Action Items',
          originalName: 'Action Items',
          color: vm.availableColors[2],
          data: []
        }]
      }, {
        name: 'Star Fish Retrospective',
        section: [{
          name: 'Keep Doing',
          originalName: 'Keep Doing',
          color: vm.availableColors[0],
          data: []
        }, {
          name: 'Less Of',
          originalName: 'Less Of',
          color: vm.availableColors[1],
          data: []
        }, {
          name: 'More Of',
          originalName: 'More Of',
          color: vm.availableColors[2],
          data: []
        }, {
          name: 'Stop Doing',
          originalName: 'Stop Doing',
          color: vm.availableColors[3],
          data: []
        }, {
          name: 'Start Doing',
          originalName: 'Start Doing',
          color: vm.availableColors[4],
          data: []
        }]
      }, {
        name: 'Six thinking hats',
        section: [{
          name: 'Managing-Blue',
          color: vm.availableColors[0],
          originalName: 'Managing-Blue',
          data: []
        }, {
          name: 'Information-White',
          originalName: 'Information-White',
          color: vm.availableColors[1],
          data: []
        }, {
          name: 'Emotions-Red',
          originalName: 'Emotions-Red',
          color: vm.availableColors[2],
          data: []
        }, {
          name: 'Discernment-Black',
          originalName: 'Discernment-Black',
          color: vm.availableColors[3],
          data: []
        }, {
          name: 'Optimistic response-Yellow',
          color: vm.availableColors[4],
          originalName: 'Optimistic response-Yellow',
          data: []
        }, {
          name: 'Creativity-Green',
          color: vm.availableColors[5],
          originalName: 'Creativity-Green',
          data: []
        }]
      }, {
        name: 'Todos',
        section: [{
          name: 'Todos',
          originalName: 'Todos',
          color: vm.availableColors[0],
          data: []
        }]
      }, {
        name: 'Pros and Cons',
        section: [{
          name: 'Pros',
          color: vm.availableColors[1],
          originalName: 'Pros',
          data: []
        }, {
          name: 'Cons',
          originalName: 'Cons',
          color: vm.availableColors[2],
          data: []
        }]
      }];
      vm.board.type = vm.boardtypes[0];
      vm.board.private = true;
    }
    vm.addSticky = function(arrRef) {
      arrRef.push({});
    };
    vm.save = function() {
      Board.save(vm.board, function(d) {
        $mdToast.show($mdToast.simple()
          .textContent(d.name + ' Created!').hideDelay(2000));
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
