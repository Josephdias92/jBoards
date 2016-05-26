(function(module) {
  module.controller('boardController', function() {
    var vm = this;
    vm.board = {};
    vm.boardtypes = [{
      name: 'Retrospective',
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
      section: [{
        name: 'Todos',
        originalName: 'Todos',
        data: []
      }]
    }, {
      name: 'Pros and Cons',
      id: 5,
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

    vm.board.type = vm.boardtypes[1];
    vm.availableColors = [
      "#FFEB3B",
      "#F44336",
      "#03A9F4",
      "#FF9800" ];
    vm.addSticky = function(arrRef) {
      arrRef.push({text:"Enter Your Text Here"});
    };

    vm.dropCallback = function(event, index, item) {
      console.log(index,item);
      return item;
    };
  });
})(angular.module('app.boards'));
