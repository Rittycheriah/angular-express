controllers.controller('newTodo', function ($scope, $http, $location) {
	$scope.message = 'Another item? Save it below.'
	$scope.todo = {};

	$scope.newTask = function () {
		console.log('new task');

    $http({
      method: 'POST',
      url: '/api/tasks',
      data: $scope.todo
    }).
    success(function(data, status, headers, config) {
    	console.log('new task made!')
      console.log($scope.todo)
    	return $location.path('/todoHome');
    }).
    error(function(data, status, headers, config) {
    	console.log('you lose at new Todo')
      console.log($scope.todo)
    });
	}

});