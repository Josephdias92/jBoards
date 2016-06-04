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
})(angular.module('app.core'));
