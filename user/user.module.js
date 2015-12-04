(function () {
  "use strict";

  angular
    .module('admin', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/user', {
          templateUrl: 'user/views/list.html',
          controller: 'UsersController as adminsCtrl'
        })
        .when('/users/:userId', {
          templateUrl: 'users/views/detail.html',
          controller: 'UsersController as usersCtrl'
        });

    });



})();
