var app = angular.module('app');


app.service('Service1', function ($http, $q) {

    return {
        getUserDetails: getUserDetails
    };

    function getUserDetails(username) {
        var myusername = username
        var deffered = $q.defer();
        $http.get("https://api.github.com/users/" + myusername)
            .then(function (response) {
                deffered.resolve(response)
            })
            .catch(function (error) {
                deffered.reject(error)
            });

        return deffered.promise;
    }

});


//factory and service both are singleton

https://weblogs.asp.net/dwahlin/using-an-angularjs-factory-to-interact-with-a-restful-service


app.service('myService', function () {

        // service is just a constructor function
        // that will be called with 'new'

        this.sayHello = function (name) {
            return "Hi " + name + "!";
        };
    });

app.factory('myFactory', function () {

    // factory returns an object
    // you can run some code before

    return {
        sayHello: function (name) {
            return "Hi " + name + "!";
        }
    }
});


//Display a new message after two seconds:
//var app = angular.module('myApp', []);
//app.controller('myCtrl', function ($scope, $timeout) {
//    $scope.myHeader = "Hello World!";
//    $timeout(function () {
//        $scope.myHeader = "How are you today?";
//    }, 2000);
//});


//Display the time every second:
//var app = angular.module('myApp', []);
//app.controller('myCtrl', function ($scope, $interval) {
//    $scope.theTime = new Date().toLocaleTimeString();
//    $interval(function () {
//        $scope.theTime = new Date().toLocaleTimeString();
//    }, 1000);
//})