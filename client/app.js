var app = angular.module("TwitHandler", []);

app.controller("MainController", ['$scope', '$http', function($scope, $http){


    //generate a random integer between 0 and 9
    function random10() {
        return Math.floor((Math.random()*10));
    }

    //declare global variables
    var adjective = [];
    var noun = [];
    $scope.handles = [];


    // http call to read in the file of adjectives
    // - calls getNoun when done receiving the file
    function getAdj(){
        $http.get('/getAdjective').then(function (response) {
            adjective = response.data;
            getNoun();
        })};


    // http call to read in the file of nouns
    // - calls genHandle when done receiving the file
    function getNoun(){
        $http.get('/getNoun').then(function (response) {
            noun = response.data;
            genHandles()
        })};


    // takes the array of adjectives and nouns,
    // generates a random number to index to a random
    // word in each array, concatenates them to form
    // a handle and pushes onto a handles array which
    // is bound to variables on the html page.
    function genHandles() {
        for (var i = 0; i < 10; i++) {
            var adj_index = random10();
            var noun_index = random10();
            var handle= adjective[adj_index].adjective + noun[noun_index].noun;
            console.log("client/genHandles/handle: " + handle);
            $scope.handles.push(handle);
        }
    }

    // call the string of functions
    getAdj();

}]);