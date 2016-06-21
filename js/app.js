/*(function () {
    var app = angular.module("phytotron", [ ]);
    app.controller('phyController',function() {
        this.project = project;
    });
    var project = {
        name: 'abcd',
        price:3.44
    }
})();
      */

(function () {
var app = angular.module("phytotron", ["ngRoute"]);
    app.config(['$routeProvider',function ($routeProvider) {
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
    }]);
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