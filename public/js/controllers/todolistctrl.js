controllers.controller('todoHome', function ($scope, $http) {
	$scope.message = 'Todo List Cow Made!';
	$scope.things = [];
  
  $http({
    method: 'GET',
    url: '/api/tasks'
  }).
  success(function(data, status, headers, config){
  	return $scope.things = data;
  }).
  error(function(data, status, headers, config){
  	console.log('you LOSE at GET for the list')
  });   

});
  // $scope.delete = function() {
  // 	console.log('delete the stuff');
  // 	$http({
  // 		method: 'DELETE', 
  // 		url: '/api/tasks/:id'
  // 		data: $scope.task
  // 	}).
  // 	success(function(data, status, headers, config){
  // 		console.log('you have deleted it');
  // 	}).
  // 	error(function(data, status, headers, config){
  // 		console.log('you LOSE at DELETE')
  // 	})
  // }


