(function(module) {
  module.config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
  });
  module.config(function($mdThemingProvider) {
    var background = $mdThemingProvider.extendPalette('grey', {
      'hue-1': '100',
      A100: 'f2f2f2'
    });
    $mdThemingProvider.definePalette('background', background);
    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .backgroundPalette('background');
  });
  module.config(function() {
    var config = {
      apiKey: "AIzaSyB4cdl8gcBbtGeZMH9ByyTL-xW3ppcf1k4",
      authDomain: "personal-f544c.firebaseapp.com",
      databaseURL: "https://personal-f544c.firebaseio.com",
      projectId: "personal-f544c",
      storageBucket: "personal-f544c.appspot.com",
      messagingSenderId: "545670407884"
    };
    firebase.initializeApp(config);
  });
})(angular.module('app.core'));
