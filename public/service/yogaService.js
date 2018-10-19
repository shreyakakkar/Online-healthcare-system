var yogaserv = angular.module('yogaService', []);

yogaserv.factory('Yoga', function($http){
	var yogaFactory = {};

	yogaFactory.create = function(yogalogData){
		return $http.post('/api/signupYoga', yogalogData);
	}

	yogaFactory.showAllyoga = function(yogaData){
		return $http.post('/api/viewYogaCentres', yogaData);
	}

	yogaFactory.getMapsData = function(city) {
		return $http.post('/api/mapData', city);
	}
	return yogaFactory;
});