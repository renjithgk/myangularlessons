var app = angular.module('app');

app.config(function ($routeProvider) {
    $routeProvider
    .when("/Controller1", {
        templateUrl: "Feature1/Controller1.html", controller:"Controller1", controllerAs: "vm"
    })
    .when("/Controller2", {
        templateUrl: "Feature2/Controller2.html", controller:"Controller2", controllerAs: "vm"
    })
    .otherwise({
        redirectTo: "/Controller1"
    });
});