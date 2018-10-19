var yogacnt = angular.module('yogaCtrl', ['yogaService'])


yogacnt.controller('ShowYogaController', function(Yoga, $http, $scope){

	var vm = this;
	//vm.processing = true;

	$scope.showAllyoga = function() {
		Yoga.showAllyoga({loc1:$scope.loc1})
			.success(function(data){
				vm.yogacentres = data;
				$scope.data1 = data;
		})

	};
	
});