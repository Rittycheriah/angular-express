'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives', 
  'myApp.taskService'
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
    when('/editItem', {
      templateUrl: 'partials/editItem',
      controller: 'editTodo'
    }).
    otherwise({
      redirectTo: '/view1'
    });

  $locationProvider.html5Mode(true);

  console.log($('.menu'));
});
