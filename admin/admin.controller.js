(function () {
  "use strict";
  angular
  .module('admin')
  .controller('AdminsController', function ($scope, AdminService, $routeParams) {
    var vm = this;
    vm.people = [];

    vm.createPerson = function(person) {
      console.log("CLICKED");
      console.log(person);
      AdminService.addPerson(person).success(function(data) {
        console.log("SUCCESS", data);
        vm.people.push(data);
      }).error(function(data) {
        console.log("ERROR", data);
      });
    };


    AdminService.getPerson().success(function(data) {
      console.log(data);
      vm.people = data;
    });
  });
})();
