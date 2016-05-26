(function(module) {
  module.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
      .state('login', {
        url: "/",
        templateUrl: "app/authentication/login.html"
      })
      .state('layout', {
        abstract: true,
        url: "/layout",
        templateUrl: "app/layout/main.html"
      })
      .state('layout.board', {
        url: "/board/:id",
        controller: 'boardController as vm',
        params: {
          id: {
            value: null,
            squash: true
          }
        },
        resolve:{
          BoardGet:function(Board,$stateParams){
            return Board.get({id:$stateParams.id});
          }
        },
        templateUrl: function($stateParams) {
          if ($stateParams.id) {
            return 'app/boards/view.html';
          }
          return 'app/boards/create.html';
        }
      });
  });
})(angular.module('app.core'));
