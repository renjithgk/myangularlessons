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

