(function () {
  "use strict";
  angular
    .module('ebay')
    .directive('nadrow', function () {
      return {
        restrict: 'EA',
        templateUrl: '????',
        link: function (scope, element, attributes) {
          element.on('click', function (evt) {
            element.text(attributes.tochanged);
            element.css('background-color', 'red');
          });

        }
      };
    });

})();
