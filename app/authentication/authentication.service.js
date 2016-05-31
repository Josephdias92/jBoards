(function (module) {
  module.service('Authentication', function ($http, AUTH_PATH, $q, localStorage) {
    var _userData = {
      email: '',
      token: ''
    };
    this.loginViaGoogle = function () {
      $http({
        url: AUTH_PATH + '/google',
        method: 'GET'
      }).then(function (data) {
      });
    };
    this.login = function (user, scb, ecb) {
      var defered = $q.defer();
      $http({
        url: AUTH_PATH + '/local',
        data: user,
        method: 'POST'
      }).then(function (response) {
        _userData.email = user.email;
        _userData.token = response.data.token;
        localStorage.add('authData', _userData);
        defered.resolve(response);
        if (scb) {
          scb(response);
        }
      }, function (response) {
        if (ecb) {
          ecb(response);
        }
        defered.reject(response);
      });
      return defered.promise;
    };
    this.isAuthenticated = function () {
      return localStorage.get('authData') && localStorage.get('authData').length !== 0;
    };
    this.logout = function () {
      _userData.email = '';
      _userData.token = '';
      localStorage.remove('authData');
    };
    this.register = function () {
    };
  });
}(angular.module('app.auth')));