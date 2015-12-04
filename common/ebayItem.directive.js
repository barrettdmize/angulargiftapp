(function () {
  "use strict"; // <ebay-person>
  angular
    .module('ebay')
    .directive('ebayPerson', function () {
      return {
        restrict: 'E',
        templateUrl: 'common/ebayPerson.directive.html',
        scope: {
          persons: '=',
          action: '&'
        },
        transclude: true
      };
    });

})();
