'use strict';


var myApplication = angular.module("myApplication", [])
    .controller('myCtrl', function ($scope) {
        console.log('Controller initialized');
    });

fetchData().then(bootstrapApplication);

function fetchData() {
    var initInjector = angular.injector(["ng"]);
    var $http = initInjector.get("$http");

    return $http.get("http://localhost:2900/api/categories").then(function (response) {
        myApplication.constant("config", response.data);
    }, function (errorResponse) {
        // Handle error case
    });
}

function bootstrapApplication() {
    angular.element(document).ready(function () {
        angular.bootstrap(document, ["myApplication"]);
    });
}

//Declare app level module which depends on views, and components
// angular.module('myApp', [
//   'ngRoute',
//   'myApp.view1',
//   'myApp.view2',
//   'myApp.version'
// ]).
// config(['$locationProvider', '$routeProvider', '$http', function($locationProvider, $routeProvider, $http) {
//   $locationProvider.hashPrefix('!');



//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);


// angular.module('myApp', [])
//   .controller('MyController', ['$scope', function ($scope) {
//     $scope.greetMe = 'Binson';
//   }]);

// angular.element(function () {
//   angular.bootstrap(document, ['myApp']);
// });

// var myApp = angular.module('myApp', ['ngRoute']);

// myApp.config(function ($routeProvider) {
//     console.log("app config");
// });

// myApp.run(function () {
//     console.log("app run");
// });

// myApp.controller('myCtrl', function($scope) {
//     console.log("app controller");
// });




