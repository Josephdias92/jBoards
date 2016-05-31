(function (module) {
  'use strict';
  module.factory('authInterceptorService', function ($q, $injector, localStorage) {
    var service = {};
    /**
     * function that intercept all request and adds token if its present
     * @param  {Object} config configuration object
     * @return {Object}        modified configuration object
     */
    service.request = function (config) {
      config.headers = config.headers || {};
      var authData = localStorage.get('authData');
      if (authData) {
        config.headers.Authorization = 'Bearer ' + authData.token;
      }
      return config;
    };
    /**
     * Function will executes when their is some error with the response if response is Unauthorized,Forbidden or Not Acceptable
     * @param  {Object} response response object which contains response error and response status
     * @return {Promise}          Promise
     */
    service.responseError = function (response) {
      var $state = $injector.get('$state');
      if (response.status === 401) {
        $state.go('login');
      }
      return $q.reject(response);
    };
    return service;
  });
}(angular.module('app.auth')));