/// <reference path="angular.min.js" />

(function () {
    var app = angular.module("phytotron", ["ngRoute"])
        .config(function ($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "partials/home.html",
                    controller: "abcController"
                })
                .when("/home", {
                    templateUrl: "partials/home.html",
                    controller: "homeController"
                })
                .when("/history", {
                    templateUrl: "partials/history.html",
                    controller: "historyController"
                })
                .when("/newAppl", {
                    templateUrl: "partials/newAppl.html",
                    controller: "newApplController"
                })
                .when("/chambers", {
                    templateUrl: "partials/sample.html",
                    controller: "sampleController"
                })
    })
    .controller("abcController",function($scope){
        $scope.message="under abc controller";
        var savedApps = [
            {
                title: "Sample Project 1",
                start: "4/3/2016",
                end: "6/6/2016",
                lastUpdate: "17:21"
            },
            {
                title: "Sample Project 2",
                start: "4/3/2014",
                end: "6/16/2016",
                lastUpdate: "11:44"
            },
            {
                title: "Sample Project 3",
                start: "11/8/2016",
                end: "6/6/2017",
                lastUpdate: "12:05"
            },
            {
                title: "Sample Project 4",
                start: "5/25/2016",
                end: "9/30/2016",
                lastUpdate: "17:05"
            }
                        ];
        $scope.savedApps = savedApps;
        
    })
    .controller("newApplController",function($scope){
        
    })
    .controller("homeController",function($scope){
        
    })
    .controller("historyController",function($scope){
        
    });
    
    app.controller("applicationController", function ($scope) {
        $scope.message = "sample check";
        var emp = {
            name: "ankit",
            title: "mr",
            age: 26
        };
        $scope.emp = emp;
        var savedApps = [
            {
                title: "Sample Project 1",
                start: "4/3/2016",
                end: "6/6/2016",
                lastUpdate: "17:05"
            },
            {
                title: "Sample Project 2",
                start: "4/3/2014",
                end: "6/16/2016",
                lastUpdate: "17:05"
            },
            {
                title: "Sample Project 3",
                start: "11/8/2016",
                end: "6/6/2017",
                lastUpdate: "17:05"
            },
            {
                title: "Sample Project 4",
                start: "5/25/2016",
                end: "9/30/2016",
                lastUpdate: "17:05"
            }
                        ];
        $scope.savedApps = savedApps;
    });




    /* .controller("abcController", function ($scope) {
        $scope.message = "1234";
    })
    .controller("homeController", function ($scope) {
        $scope.message = "xyz";
    })
    .controller("sampleController", function ($scope) {})
});*/

})();

/*var app = angular.module("phytotron", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "partials/home.html",
                controller: "abcController"
            })
            .when("/home", {
                templateUrl: "partials/home.html",
                controller: "homeController"
            })
            .when("/sample", {
                templateUrl: "partials/sample.html",
                controller: "sampleController"
            })
    })
    .controller("abcController", function ($scope) {
        $scope.message = "1234";
    })
   .controller("homeController", function ($scope) {
        $scope.message = "xyz";
    })
    .controller("sampleController", function ($scope) {})
});*/