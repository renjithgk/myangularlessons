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