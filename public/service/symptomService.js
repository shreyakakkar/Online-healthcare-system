var symserv = angular.module('symptomService', [])

symserv.factory('Symp', function($http){
	var symFactory = {};

	symFactory.checkSym = function(symData){
		return $http.post('/api/scrap', symData);
	}

	return symFactory;
});