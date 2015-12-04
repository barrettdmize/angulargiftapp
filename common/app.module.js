
(function () {
  "use strict";

  angular
    .module('app', [
      'ui.router',
      'underscore',
      'moment',
      // 'ebay',
      // 'admins'

    ])

         .config(function ($stateProvider, $urlRouterProvider) {
           $urlRouterProvider.otherwise('/addpersonview');
           $stateProvider
             .state('addpersonview', {
               url: '/addpersonview',
               templateUrl: 'addpersonview.html'
             })
             .state('addinterestview', {
               url: '/addinterestview',
               templateUrl: 'addinterestview.html'
             });

           });

  angular
    .module('underscore', [])
    .factory('_', function ($window) {
      return $window._;
    });
  angular
    .module('moment', [])
    .factory('moment', function ($window) {
      return $window.moment;
    });

})();
