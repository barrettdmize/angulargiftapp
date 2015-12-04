(function () {
  "use strict";

  angular
    .module('ebay', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/ebay', {
          templateUrl: 'ebay/views/list.html',
          controller: 'EbayController as ebayCtrl',
          // controllerAs: 'ebayCtrl'
        })
        .when('/ebay/:ebayId', {
          templateUrl: 'ebay/views/detail.html',
          controller: 'EbayController as ebayCtrl',
          // controllerAs: 'ebayCtrl'
        })
        .otherwise({ redirectTo: '/404'});
    });


})();
