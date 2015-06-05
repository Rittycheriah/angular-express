controllers.controller('loginUser', function ($scope, $http, $location, $rootScope) {
	$scope.message = 'Login Goat Made!'
  $scope.user = {};

  $scope.login = function() {
  	console.log('login function');
  	$http({
  		method: 'POST',
  		url: '/api/user/login',
  		data: $scope.user
  	}).
  	success(function(data, status, headers, config){
  		console.log('you logged in!')
  		$location.path('/todoHome')
  		$rootScope.rootuser = data.username;
  	}).
  	error(function(data, status, headers, config){
  		console.log('you lose login')
  	})
  }

 })
