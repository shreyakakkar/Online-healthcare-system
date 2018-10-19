var medserv = angular.module('medService', [])

medserv.factory('Med', function($http){
	var medFactory = {};

	medFactory.searchMed = function(medData){
		return $http.post('/api/searchmed', medData);
	}
	medFactory.searchSubs = function(medData){
		return $http.post('/api/searchSubs', medData);
	}
	return medFactory;
});