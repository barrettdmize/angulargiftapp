
(function () {
  "use strict";

  angular
    .module('admin', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/admins', {
          templateUrl: 'admin/views/list.html',
          controller: 'AdminsController as adminsCtrl'
        })
        .when('/admins/:adminId', {
          templateUrl: 'admins/views/detail.html',
          controller: 'AdminsController as adminsCtrl'
        });

    });



})();
