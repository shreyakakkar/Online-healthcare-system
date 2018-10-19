var usercnt = angular.module('userCtrl', ['userService'])

usercnt.controller('UserController', function(User){

	var vm = this;
	vm.processing = true;

	User.all()
		.success(function(data){
			vm.users = data;
		})



})

usercnt.controller('UserCreateController', function(User, $location, $window){

	var vm = this;
	vm.signupUser = function(){
		vm.message='';

		User.create(vm.userData)
			.then(function(response){
				vm.userData = {};
				vm.message = response.data.message;
				console.log('its ok!');
				console.log(response.data);
				if(response.data.code==11000)
				{
					alert("username or email field invalid");
					$location.path('/signup');
					return;	
				}
				else
				{	
					alert("an email has been sent to your account for verification")
					//$window.localStorage.setItem('token', response.data.token);
					$location.path('/send');
				}				
			},function errorCallback(response) {

            console.log('sorry buddy');

        });

	}
});