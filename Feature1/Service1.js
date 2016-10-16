var app = angular.module('app');


app.service('Service1', function ($http, $q) {

    return {
        getUserDetails: getUserDetails
    };

    function getUserDetails() {
        var username = 'renjithgk'
        var deffered = $q.defer();
        $http.get("https://api.github.com/users/" + username)
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                deffered.reject(error)
            });

        return deffered.promise;
    }

});