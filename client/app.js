var app = angular.module("TwitHandler", []);

app.controller("MainController", ['$scope', '$http', function($scope, $http){
    $scope.name = handleArray;
    console.log($scope.name);

    function random10() {
        return Math.floor((Math.random()*10));
    }

    var adjective = [];
    $http.get('/getAdjective').then(function (response) {
        adjective = response.data;
        console.log("adjective: " + adjective);
    });

    var noun = [];
    $http.get('/getNoun').then(function (response) {
        noun = response.data;
        console.log("noun: " + noun);
    });


    var handleArray = [];
    for (var i=0;i<10; i++){
        var adj_i = random10();
        var noun_i = random10();
        handleArray[i] = adjective[adj_i] + noun[noun_i];
        console.log("handles: "  + handleArray[i]);
    }


}]);