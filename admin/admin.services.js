(function () {
  "use strict";
  angular
  .module('admin')
  .factory('AdminService', function ($http, $rootScope) {
    var url = 'http://tiny-tiny.herokuapp.com/collections/angulargiftapp';

    var getAddedPersons = function () {
      return $http.get(url);
    };

    var addPerson = function (person) {
      return $http.post(url, person);
    };

    var getSinglePerson = function (personId) {
      return $http.get(url + '/' + personId);
    };
    

    var deletePerson = function (personId) {
      $http.delete(url + '/' + personId).then(function (res) {
        console.log(res);
          $rootScope.$broadcast('person:deleted');
      });
    };

    var updatedeletedPerson = function (person) {
      $http.put(url + '/' + person._id, person).then(function (res) {
        console.log(res);
      });
    };

    return {
      getPerson: getAddedPersons,
      getSinglePerson: getSinglePerson,
      deletePerson: deletePerson,
      addPerson: addPerson
      // updateAddedPerson: updateAddedPerson,
      // addAdminedPerson: addAdminedPerson
    };





  });
})();
