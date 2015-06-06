controllers.controller('todoHome', 
  [
    '$scope',
    '$http',
    '$location',
    'taskService',

    function ($scope, $http, $location, taskService) {
    	$scope.message = 'Todo List Cow Made!';
    	$scope.things = [];
      $scope.task='';

      console.log('taskService',taskService)

      var getList = function () {
        $http({
          method: 'GET',
          url: '/api/tasks'
        }).
        success(function(data, status, headers, config){
        	$scope.things = data;
        }).
        error(function(data, status, headers, config){
        	console.log('you LOSE at GET for the list')
        });   
      };
      getList();

      $scope.delete = function(thingId) {
        console.log('delete the stuff');
        $http({
          method: 'DELETE', 
          url: '/api/tasks/' + thingId,
          data: $scope.task
        }).
        success(function(data, status, headers, config){
          console.log('you have deleted it');
          getList();
        }).
        error(function(data, status, headers, config){
          console.log('you LOSE at DELETE')
        })
      };

      $scope.edit = function(thingId) {
      console.log('EDIT the stuff');
        $http({
          method: 'GET', 
          url: '/api/tasks/' + thingId
        }).
        success(function(data, status, headers, config){
          console.log('you have GET edited it', data[0]);
          taskService.setTask(data[0]);
          $scope.task = data[0];
          $location.path('editItem');
          console.log('**********' , $scope.task);
        }).
        error(function(data, status, headers, config){
          console.log('you LOSE at GET for Edit');
        })
      };
    }
  ]
);


