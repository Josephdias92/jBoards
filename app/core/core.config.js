(function (module) {
  module.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
  });
}(angular.module('app.core')));