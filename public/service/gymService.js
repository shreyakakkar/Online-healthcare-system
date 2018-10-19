var gymlogserv = angular.module('gymService', [])

gymlogserv.factory('Gym', function($http, $window){
	var gymlogFactory = {};

	gymlogFactory.create = function(gymlogData){
		return $http.post('/api/signupGym', gymlogData);
	}
	gymlogFactory.showAll = function(gymData){
		return $http.post('/api/viewGyms', gymData);
	}
	gymlogFactory.getMapsData = function(city) {
		console.log("in service",city);
		return $http.post('/api/mapData', {city:city});
	};
	gymlogFactory.bookGym = function(gym_id,date,booktime) {
		var userr = $window.localStorage.getItem('username');
		//console.log("in service",gym_id);
		return $http.post('/api/bookGym', {
				username:userr,
				gym_id:gym_id,
				date:date,
				booktime:booktime
			}
		);
	};

	return gymlogFactory;
})
