controllers.controller('registerUser', function ($scope, $http, $location) {
    $scope.message = 'Register Made!';
    $scope.user = {};

    $scope.register = function() {
    	console.log('register function ******');
		  $http({
		    method: 'POST',
		    url: '/api/user/register',
		    data: $scope.user
		  }).
		  success(function(data, status, headers, config){
		  	console.log('you registered!')
		  	$location.path('/view1')
		  }).
		  error(function(data, status, headers, config){
		  	console.log('you LOSE')
		  });    
    }

  })