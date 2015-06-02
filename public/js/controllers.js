'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

  }).
  controller('loginUser', function ($scope) {
    // write Ctrl here

  }).
  controller('registerUser', function ($scope) {
    // write Ctrl here

  }).
  controller('todoHome', function($scope) {

  }).
  controller('newTodo', function($scope) {

  });