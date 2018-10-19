var gymserv = angular.module('gymloginService', [])

gymserv.factory('Gym1', function($http){
	var gymFactory = {};

	gymFactory.create = function(gymlogData){
		return $http.post('/api/signupGym', gymlogData);
	}
	gymFactory.showAll = function(gymData){
		return $http.post('/api/viewGyms', gymData);
	}

	return gymFactory;
});