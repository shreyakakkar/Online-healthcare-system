var viewprocnt = angular.module('viewproCtrl', ['viewproService'])


bloodcnt.controller('ViewProController', function(Booking,$window, $http, $scope, $routeParams){

	var vm = this;
	//vm.processing = true;
	
	$scope.showBooking = function(){
		var gym_username = $window.localStorage.getItem('username');
		Booking.showBooking(gym_username)
		.success(function(data){
			vm.bookings = data;
			console.log(data);
			$scope.data = data;
		})
	}
	$scope.emailSend = function(email_id,xyz){
		console.log(email_id);
		var gym_username = $window.localStorage.getItem('username');
		Booking.sendMail(gym_username,email_id)
		.success(function(data){
			vm.bookings = data;
			console.log(data);
			$scope.data = data;
		})
	}
	
});