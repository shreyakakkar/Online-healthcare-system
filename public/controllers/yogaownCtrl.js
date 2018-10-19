var yogaaacnt = angular.module('yogaownCtrl', ['yogaService'])

yogaaacnt.controller('YogaCreateController', function(Yoga, $location, $window, geoDataService){

	var vm = this;
    vm.yogalogData = {};
    vm.signupYoga = function(){
        vm.message='';

        var geoObj = geoDataService.getData();
        console.log(vm.yogalogData);

        vm.yogalogData.lat = geoObj.lat;
        vm.yogalogData.lng = geoObj.lng;
        console.log(vm.yogalogData);
        
		Yoga.create(vm.yogalogData)
			.then(function(response){
				vm.userData = {};
				vm.message = response.data.message;

				$window.localStorage.setItem('token', response.data.token);
				$location.path('/pro');				
			})
	}

	vm.doSearch = function($scope){

                if($scope.location === ''){
                    alert('Directive did not update the location property in parent controller.');
                } else {
                    alert('Yay. Location: ' + $scope.location);
                }
            
	}
})


  .service('geoDataService', function() {
    var geoObj = {};
    this.setData = function(data) {
        geoObj.lat = data.lat;
        geoObj.lng = data.lng;
    };
    this.getData = function() {
        return geoObj;
    };
  })

  .directive('googlePlacess', function(geoDataService){
                return {
                    restrict:'E',
                    replace:true,
                    // transclude:true,
                    scope: {location:'='},
                    template: '<input id="google_places_ac" name="google_places_ac" type="text" class="input-block-level"/>',
                    link: function($scope, elm, attrs){
                        var autocomplete = new google.maps.places.Autocomplete($("#google_places_ac")[0], {});
                        google.maps.event.addListener(autocomplete, 'place_changed', function() {
                            var place = autocomplete.getPlace();
                            $scope.location = place.geometry.location.lat() + ',' + place.geometry.location.lng();
                            geoDataService.setData({lat: place.geometry.location.lat(), lng: place.geometry.location.lng()});
                            $scope.$apply();
                        });
                    }
                }
  });
