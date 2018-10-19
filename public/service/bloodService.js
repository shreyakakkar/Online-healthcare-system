var bloodserv = angular.module('bloodService', [])

bloodserv.factory('Donor', function($http){
	var bloodFactory = {};

	bloodFactory.addDonor = function(bloodData){
		return $http.post('/api/newdonor', bloodData);
	}

	bloodFactory.findDonor = function(donorData){
		return $http.post('/api/finddonor', donorData);
		
	}
	return bloodFactory;
});