/// <reference path="angular.min.js" />

(function () {
    var app = angular.module("phytotron", ["ngRoute"])
        .config(function ($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "partials/home.html",
                    controller: "homeController"
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
        .controller("homeController", function ($scope) {
            $scope.message = "under home controller";
            var savedApps = [
                {
                    title: "Sample Project 1",
                    start: "4/3/2016",
                    end: "6/6/2016",
                    lastModified: "3/25/2015 12:13"
            },
                {
                    title: "Sample Project 2",
                    start: "4/3/2014",
                    end: "6/16/2016",
                    lastModified: "7/15/2015 11:44"
            },
                {
                    title: "Sample Project 3",
                    start: "11/8/2016",
                    end: "6/6/2017",
                    lastModified: "7/03/2016 17:05"
            },
                {
                    title: "Sample Project 4",
                    start: "5/25/2016",
                    end: "9/30/2016",
                    lastModified: "3/25/2015 17:23"
            }
                        ];
            $scope.savedApps = savedApps;

        })
        .controller("newApplController", function ($scope) {

        })
        .controller("historyController", function ($scope) {
            var historyApps = [
                {
                    projectId: 558343,
                    projectTitle: "Sample Project 1",
                    status: "submitted",
                    submitDate: "4/1/2016",
                    start: "4/3/2016",
                    end: "6/6/2016",
                    lastModified: "3/25/2015 12:13"
            },
                {
                    projectId: 558543,
                    projectTitle: "Sample Project 2",
                    status: "Approved",
                    submitDate: "4/1/2016",
                    start: "4/3/2016",
                    end: "6/6/2016",
                    lastModified: "1/25/2016 10:23"
            },
                {
                    projectId: 550001,
                    projectTitle: "My Project",
                    status: "Completed",
                    submitDate: "2015-11-21T21:43:40.000Z",
                    start: "4/3/2016",
                    end: "6/6/2016",
                    lastModified: "3/11/2016 08:23"
            },
                {
                    projectId: 550034,
                    projectTitle: "My Project",
                    status: "Updated",
                    submitDate: "4/4/2016",
                    start: "11/2/2016",
                    end: "6/5/2017",
                    lastModified: "10/10/2015 14:11"
            },
                {
                    projectId: 501343,
                    projectTitle: "Testing",
                    status: "Pending",
                    submitDate: "4/1/2016",
                    start: "4/3/2016",
                    end: "6/6/2016",
                    lastModified: "7/03/2016 17:05"
            }
                        ];
            $scope.historyApps = historyApps;
        });

    app.controller("applicationController", function ($scope) {});




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