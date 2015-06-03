'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/view1', {
      templateUrl: 'partials/partial1',
      controller: 'loginUser'
    }).
    when('/view2', {
      templateUrl: 'partials/partial2',
      controller: 'registerUser'
    }).
    when('/todoHome',{
      templateUrl: 'partials/todoHome',
      controller:'todoHome'
    }).
    when('/newTodo',{
      templateUrl: 'partials/newTodo',
      controller: 'newTodo'
    }).
    otherwise({
      redirectTo: '/view1'
    });

  $locationProvider.html5Mode(true);

  console.log($('.menu'));
});
