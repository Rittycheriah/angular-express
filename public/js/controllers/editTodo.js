controllers.controller('editTodo', 

  [
    '$scope', 
    '$http', 
    '$location', 
    'taskService', 

      function ($scope, $http, $location, taskService) {
  	  $scope.message = 'Edit Todo Cluck It!';
  	  $scope.todo = {};
      $scope.task = taskService.getTask();

      var del = function(thingId) {
        console.log('delete the stuff for edit');
        $http({
          method: 'DELETE', 
          url: '/api/tasks/' + thingId,
          data: $scope.task
        }).
        success(function(data, status, headers, config){
          console.log('you have deleted it');
        }).
        error(function(data, status, headers, config){
          console.log('you LOSE at DELETE')
        })
      };

      // var postEdit = function (todo) {

      //   $http({
      //     method: 'POST', 
      //     url: '/api/tasks'
      //   }).
      //   success(function(data, status, headers, config) {
      //     return $location.path('/todoHome')
      //   }).
      //   error(function(data, status, headers, config)) {
      //     console.log('******* FROM EDIT POST', data);
      //     console.log('you lose at EDIT POST');
      //   }
      // };

  	  $scope.updateTask = function(thingId, todo) {
    	  del(thingId);
        postEdit(todo);
  	  };
    }
  ]
);