(function (module) {
  module.config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/');
    //
    // Now set up the states
    $stateProvider.state('login', {
      url: '/',
      controller: 'authController as vm',
      templateUrl: 'app/authentication/login.html',
      authenticate: false
    }).state('layout', {
      abstract: true,
      url: '/layout',
      templateUrl: 'app/layout/main.html',
      controller: 'layoutController as vm'
    }).state('layout.board', {
      url: '/board/:id',
      controller: 'boardController as vm',
      authenticate: true,
      params: {
        id: {
          value: null,
          squash: true
        }
      },
      resolve: {
        BoardGet: function (Board, $stateParams) {
          if ($stateParams.id) {
            return Board.get({
              id: $stateParams.id
            });
          }
        }
      },
      templateUrl: function ($stateParams) {
        if ($stateParams.id) {
          return 'app/boards/view.html';
        }
        return 'app/boards/create.html';
      }
    }).state('layout.profile', {
      url: "/profile",
      controller: 'profileController as vm',
      templateUrl: 'app/profile/profile.html',
      authenticate: true
    });
  });
    module.run(function ($rootScope, $state, Authentication) {
      $rootScope.$on('$stateChangeStart', function (event, toState) {
        if (toState.authenticate && !Authentication.isAuthenticated()) {
          $state.transitionTo('login');
          event.preventDefault();
        }
        /* if (toState.name === 'login' && Authentication.isAuthenticated()) {
              event.preventDefault();
            }*/
      });
    });
  })(angular.module('app.core'));
