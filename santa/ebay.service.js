

      (function () {
      "use strict";
      angular
        .module('ebay')
        .factory('EbayService', function ($http) {
          var url = "http://svcs.ebay.com/services/search/FindingService/v1";
          url += "?OPERATION-NAME=findItemsByKeywords";
          url += "&SERVICE-VERSION=1.0.0";
          url += "&SECURITY-APPNAME=BarrettM-08a8-4bbc-82c5-ac15aaeab92d";
          url += "&GLOBAL-ID=EBAY-US";
          url += "&RESPONSE-DATA-FORMAT=JSON";
          url += "&callback=JSON_CALLBACK";
          url += "&REST-PAYLOAD";
          url += "&keywords=michael%20jackson";
          url += "&paginationInput.entriesPerPage=100";
        function getData() {
          return $http.jsonp(url);
        }
          return {
            getData: getData
          };
        });

    })();

//       var urlOpts = {
//           baseUrl: 'http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByCategory&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=5ab1340c-dcc2-4f02-a1ba-3f5b1d0c2f73&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&categoryId=10181&paginationInput.entriesPerPage=2',
//           apiKey: 'PUT STUFF HERE',
//           method: 'PUT STUFF HERE',
//           format: 'json',
//           buildUrl: function () {
//             return this.baseUrl + 'method=' + this.method + '&api_key=' + this.apiKey + '&format=' + this.format + '&extras=date_upload&nojsoncallback=1';
//           }
//         };
//         var buildImgUrl = function (obj) {
//           return '????????????????????????';
//         };
//         var mapDataToUrls = function (collection) {
//           return _.map(collection, function (obj) {
//             return {image: buildImgUrl(obj), title: obj.title, id: obj.id, dt: moment.unix(obj.dateupload).fromNow() };
//           });
//         };
//
//         var getEbayData = function () {
//           return $http.get(urlOpts.buildUrl()).then(function (data) {
//
//             return mapDataToUrls(data.data.items.item);
//           });
//         };
//         var getSingleItem = function (itemId) {
//           return $http.get(urlOpts.buildUrl()).success(function (data) {
//             var items = mapDataToUrls(data.items.item);
//
//             var item = _.where(items, {id: itemId});
//             console.log(item);
//             return item;
//           })
//         };
//
//
//         return {
//           getEbayData: getEbayData,
//           getSingleItem: getSingleItem
//
//         };
//
//
//     });
// })();
