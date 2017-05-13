(function(module) {
  module.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/');
    //
    // Now set up the states
    $stateProvider
      .state('login', {
        url: '/',
        controller: 'authController as vm',
        templateUrl: 'app/authentication/login.html',
        authenticate: false
      })
      .state('layout', {
        abstract: true,
        url: '/layout',
        templateUrl: 'app/layout/main.html',
        controller: 'layoutController as root'
      })
      .state('layout.board', {
        abstract: true,
        template: '<ui-view/>'
      })
      .state('layout.board.create', {
        url: '/board/create',
        controller: 'boardCreateController as vm',
        templateUrl: 'app/boards/create.html'
      })
      .state('layout.board.view', {
        url: '/board/:id',
        controller: 'boardViewController as vm',
        authenticate: true,
        resolve: {},
        templateUrl: 'app/boards/view.html'
      })
      .state('layout.board.listing', {
        url: '/board',
        controller: 'boardListingController as vm',
        authenticate: true,
        resolve: {},
        templateUrl: 'app/boards/list.html'
      })
      .state('layout.profile', {
        url: "/profile",
        controller: 'profileController as vm',
        templateUrl: 'app/profile/profile.html',
        authenticate: true
      });
  });
  module.run(function($rootScope, $state, Authentication) {
    $rootScope.$on('$stateChangeStart', function(event, toState) {
      // if (toState.authenticate && !Authentication.isAuthenticated()) {
      //   $state.transitionTo('login');
      //   event.preventDefault();
      // }
      /* if (toState.name === 'login' && Authentication.isAuthenticated()) {
            event.preventDefault();
          }*/
    });
  });
})(angular.module('app.core'));
