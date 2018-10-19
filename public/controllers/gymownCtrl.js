var gymmmcnt = angular.module('gymownCtrl', ['gymService'])

gymmmcnt.controller('GymCreateController',function(Gym, $location,$scope, $window, geoDataService){

	var vm = this;
    vm.gymlogData = {};
    vm.signupGym = function(){
        vm.message='';

        var geoObj = geoDataService.getData();
        console.log(vm.gymlogData);

        vm.gymlogData.lat = geoObj.lat;
        vm.gymlogData.lng = geoObj.lng;
        console.log(vm.gymlogData);
        
		Gym.create(vm.gymlogData)
			.then(function(response){
				vm.userData = {};
				vm.message = response.data.message;

				$window.localStorage.setItem('token', response.data.token);
				$location.path('/pro');				
			})
	}

	/*
     // Create file uploader instance
    $scope.uploader = new FileUploader({
      url: 'server/editBanner'
    });

    // Set file uploader image filter
    $scope.uploader.filters.push({
      name: 'imageFilter',
      fn: function (item, options) {
        var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
        return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
      }
    });

    // Called after the user selected a new picture file
    $scope.uploader.onAfterAddingFile = function (fileItem) {
      if ($window.FileReader) {
        var fileReader = new FileReader();
        fileReader.readAsDataURL(fileItem._file);

        fileReader.onload = function (fileReaderEvent) {
          $timeout(function () {
            $scope.imageURL = fileReaderEvent.target.result;
          }, 0);
        };
      }
    };

    // Called after the user has successfully uploaded a new picture
    $scope.uploader.onSuccessItem = function (fileItem, response, status, headers) {
      // Show success message
      $scope.success = true;
      // Populate user object
      //$scope.editProfile.imageURL = response.imageURL;
      console.log(response);
    };

    // Called after the user has failed to uploaded a new picture
    $scope.uploader.onErrorItem = function (fileItem, response, status, headers) {
      $scope.error = response.message;
    };

    // Change Company banner
    $scope.uploadBanner = function () {
      // Clear messages
      $scope.success = $scope.error = null;

      // Start upload
      $scope.uploader.uploadAll();
    };*/

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

  .directive('googlePlaces', function(geoDataService){
                return {
                    restrict:'E',
                    replace:true,
                    // transclude:true,
                    scope: {location:'='},
                    template: '<input id="google_places_ac" ng-model="gym.gymlogData.address" name="google_places_ac" type="text" class="input-block-level"/>',
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
