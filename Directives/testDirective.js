/// <reference path="../angular.js" />


var app = angular.module('app');

app.directive('testDirective', function () {
    return {
        template: '<h1>Hello Directive</h1>'
    };
});

//Scope
//https://www.undefinednull.com/2014/02/11/mastering-the-scope-of-a-directive-in-angularjs/