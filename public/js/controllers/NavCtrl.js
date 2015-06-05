controllers.controller('NavCtrl', function ($scope, $rootScope, $location) {
	$scope.message = 'HERRO NAV'
	$scope.logout = function() {
		console.log('hit logout function')
		$rootScope.rootuser = null;
		$location.path('/')
	}
})

// CRUD && Logout by Saturday !!!! 