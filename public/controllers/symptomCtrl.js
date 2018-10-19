var symcnt = angular.module('symptomCtrl', ['symptomService'])


symcnt.controller('CheckSymController', function(Symp, $http, $scope){

	var vm = this;
	//vm.processing = true;

	$scope.checkSym = function() {
		Symp.checkSym({symptom:$scope.sym1})
		.success(function(data){
			vm.sym = data;
			console.log(data);
			$scope.data = data;
		})

	};
	
});