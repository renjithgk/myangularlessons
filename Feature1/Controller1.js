/// <reference path="../angular.js" />


var app = angular.module('app');

app.controller('Controller1', ['Service1', function(Service1) {

    var vm = this;
    vm.Title = 'Controller1';

    Service1.getUserDetails()
    .then(function (result) {
        vm.UserDetails = result;
    })
    .catch(function(error){
        vm.UserDetails = error;
    })
    .finally(function () {

    })
}])