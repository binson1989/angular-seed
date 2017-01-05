'use strict';

// Declare app level module which depends on views, and components
// angular.module('myApp', [
//   'ngRoute',
//   'myApp.view1',
//   'myApp.view2',
//   'myApp.version'
// ]).
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   $locationProvider.hashPrefix('!');

//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);


angular.module('myApp', [])
  .controller('MyController', ['$scope', function ($scope) {
    $scope.greetMe = 'Binson';
  }]);

angular.element(function () {
  angular.bootstrap(document, ['myApp']);
});