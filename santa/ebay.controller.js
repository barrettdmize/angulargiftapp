(function () {
  "use strict";
angular
  .module('ebay')
  .controller('EbayController', function ($scope, EbayService, $routeParams) {
    var vm = this; // vm === viewModel;

    EbayService.getData().success(function(data) {
      vm.items = data.findItemsByKeywordsResponse[0].searchResult[0].item;
      // window.glob = data;
    });



    // vm.alertMe = function () {
    //   alert('yes, it works!');
    // };
    // vm.testData = "this is in ebayController";
    //
    // EbayService.getEbayData().then(function (items) {
    //   vm.items = items;
    //   console.log(vm);
    // });
    // $scope.$on('cart:added', function () {
    //   EbayService.getEbayData().then(function (items) {
    //     vm.items = items;
    //     console.log(vm);
    //   });
    //   console.log('a item was added!!!!');
    // });
    //
    // console.log('item id: ', $routeParams.ebayId);

  })
  .controller('dummyController', function ($scope) {
    var vm = this;
      vm.testData = "this is in dummyController";
    });

})();
