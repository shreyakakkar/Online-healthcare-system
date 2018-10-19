var viewproserv = angular.module('viewproService', [])

viewproserv.factory('Booking', function($http){
	var viewproFactory = {};

	viewproFactory.showBooking = function(gym_username){
		return $http.post('/api/findBookings', {username:gym_username});
		
	}

	viewproFactory.sendMail = function(gym_username,email_id){
		console.log(gym_username);
		console.log(email_id);
		return $http.post('/api/confirmation', {username:gym_username,email:email_id});
		
	}
	return viewproFactory;
});