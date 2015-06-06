controllers.controller('editTodo', 

  [
    '$scope', 
    '$http', 
    '$location', 
    'taskService', 

      function ($scope, $http, $location, taskService) {
  	  $scope.message = 'Edit Todo Cluck It!'
  	  $scope.todo = {};
      $scope.task = taskService.getTask();

  	  $scope.updateTask = function () {
    		console.log('editted task');

        $http({
          method: 'POST',
          url: '/api/tasks'
        }).
        success(function(data, status, headers, config) {
        	console.log('editted task made!')
          console.log($scope.todo)
        	return $location.path('/todoHome');
        }).
        error(function(data, status, headers, config) {
        	console.log('you lose at EDIT Todo')
          console.log($scope.todo)
        });
  	  };
    }
  ]
);