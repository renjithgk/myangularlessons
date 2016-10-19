/// <reference path="../angular.js" />


var app = angular.module('app');

app.controller('Controller1', ['Service1', function(Service1) {

    var vm = this;
    vm.Title = 'Controller1';

    vm.names = ["john", "bill", "charlie", "robert", "alban", "oscar", "marie", "celine", "brad", "drew", "rebecca", "michel", "francis", "jean", "paul", "pierre", "nicolas", "alfred", "gerard", "louis", "albert", "edouard", "benoit", "guillaume", "nicolas", "joseph"];

    vm.selected = undefined;

    vm.countries = [
     { name: 'Afghanistan', code: 'AF' },
     { name: 'Antigua and Barbuda', code: 'AG' },
     { name: 'Bahamas', code: 'BS' },
     { name: 'Cambodia', code: 'KH' },
     { name: 'Cape Verde', code: 'CV' }
    ];


    Service1.getUserDetails('renjithgk')
    .then(function (result) {
        vm.UserDetails = result.data;
    })
    .catch(function(error){
        vm.UserDetails = error;
    })
    .finally(function () {

    })
}])