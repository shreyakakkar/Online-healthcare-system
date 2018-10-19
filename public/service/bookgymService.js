var bookgym = angular.module('bookgymService', [])

bookgym.factory('Book', function($http){
	var bookingFactory = {};

	bookingFactory.gymBook = function(gymbookData){
		return $http.post('/api/bookTrial', gymbookData);
	}

	// bloodFactory.findDonor = function(donorData){
	// 	return $http.post('/api/finddonor', donorData);
		
	// }
	return bookingFactory;
});