var cntrl = angular.module('mainCtrl', [])

cntrl.controller('tempController', function(){});

cntrl.controller('MainController', function($rootScope, $location, Auth, $window) {

	var vm = this;


	vm.loggedIn = Auth.isLoggedIn();

	$rootScope.$on('$routeChangeStart', function() {

		vm.loggedIn = Auth.isLoggedIn();

		Auth.getUser()
			.then(function(data) {
				vm.user = data.data;
			});
	});


	vm.doLogin = function() {

		vm.processing = true;

		vm.error = '';
		if (!vm.loginData.types) {
			vm.loginData.types = "user";
		}
		console.log(vm.loginData);
		if(vm.loginData.types=="user")
		{
			Auth.login(vm.loginData.username, vm.loginData.password, vm.loginData.types)
				.success(function(data) {
					vm.processing = false;
					
					Auth.getUser()
						.then(function(data) {
							vm.user = data.data;
						console.log(vm.user);
						});
					console.log(data);		
					
					if(data.success)
						$location.path('/');
					else
					{	vm.error = data.message;
						alert(vm.error);
						$location.path('/login');
					}
				});
		}
		else
		{
			Auth.login(vm.loginData.username, vm.loginData.password, vm.loginData.types)
				.success(function(data) {
					vm.processing = false;
					
					Auth.getUser()
						.then(function(data) {
							vm.user = data.data;
						console.log(vm.user);
						});
					console.log(data);		
					
					if(data.success)
						$location.path('/pro');
					else
						vm.error = data.message;

				});	
		}
	}


	vm.doLogout = function() {
		Auth.logout();
		$window.localStorage.removeItem('username');
		$location.path('/logout');
	}


});