var medcnt = angular.module('medCtrl', ['medService'])


medcnt.controller('MedSearchController', function(Med, $http, $scope){

	var vm = this;
	//vm.processing = true;

	$scope.searchMed = function() {
		Med.searchMed({name:$scope.name})
		.success(function(data){
			//vm.sym = data;
			console.log(data);
			$scope.data = data;
		})
		Med.searchSubs({name:$scope.name})
		.success(function(subs){
			console.log(subs);
			$scope.subs = subs;
		})

	};
	
});