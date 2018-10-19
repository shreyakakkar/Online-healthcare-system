var bloodcnt = angular.module('bloodCtrl', ['bloodService'])


bloodcnt.controller('BloodDonorController', function(Donor, $http, $scope, $routeParams){

	var vm = this;
	//vm.processing = true;

	$scope.addDonor = function() {
		Donor.addDonor({name:$scope.name, age:$scope.age, bloodGroup:$scope.bloodGroup, mobNo:$scope.mobNo, city:$scope.city, lastdonated:$scope.lastdonated})
		.success(function(data){
			vm.donor = data;
			console.log(data.message);
			$scope.data = data;
		})
	}

	$scope.findDonor = function(){
		Donor.findDonor({city:$scope.city, bloodGroup:$routeParams.bloodGroup})
		.success(function(data){
			vm.donors = data;
			console.log(data);
			$scope.data = data;
		})
	}
	
});