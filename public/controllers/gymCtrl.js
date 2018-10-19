var gymcnt = angular.module('gymCtrl', ['gymService'])


/*gymcnt.controller('ShowGymController', ['$scope','$http','Gym' , 
	function($scope, $http, Gym) {
		var vm = this;
		//vm.processing = true;

		console.log(Gym);

		$scope.showAllGym = function() {
			Gym.showAll({loc:$scope.loc})
			.success(function(data){
				vm.gyms = data;
				$scope.data = data;
			})
		};
	}
]);
*/

gymcnt.controller('MapCtrl',['$scope','$http','Gym',
     function($scope, $http, Gym, $window) {
        
        var cities = [];
        //console.log("hey");
        //console.log($scope.loc);
        //console.log($scope.city);
        var vm = this;
        $scope.booktime = [];
        $scope.date=[];

    
        $scope.showAllGym = function() {
            Gym.showAll({city:$scope.city})
            .success(function(data){
                vm.gyms = data;
                $scope.data = data;
                //console.log($scope.city);
                Gym.getMapsData($scope.city).success(function(res) {
                    //console.log(res);
                    call_cities(res);
                    // return res;
                });
            
                var mapOptions = {
                    zoom: 10,
                    center: new google.maps.LatLng(28.6139, 77.2090),
                    mapTypeId: google.maps.MapTypeId.TERRAIN
                }

                $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

                $scope.markers = [];
                
                var infoWindow = new google.maps.InfoWindow();

                function createMarker (info){
                    //alert("createMarker");
                    var marker = new google.maps.Marker({
                        map: $scope.map,
                        position: new google.maps.LatLng(info.lat, info.lng),
                        title: info.name
                    });
                    marker.content = '<div class="infoWindowContent">' + info.name + '</div>';
                    
                    google.maps.event.addListener(marker, 'click', function(){
                        infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                        infoWindow.open($scope.map, marker);
                    });
                    
                    $scope.markers.push(marker);
                    
                }  
                
                function call_cities(cities){
                    //console.log("call c");
                    //alert($scope.cities.length);
                    for (i = 0; i<cities.length; i++){
                        //console.log("qqq");
                        createMarker(cities[i]);
                    }
                }
                

                $scope.openInfoWindow = function(e, selectedMarker){
                    e.preventDefault();
                    google.maps.event.trigger(selectedMarker, 'click');
                }


            })
        };

        $scope.doBook = function(data, index) {
            console.log(data);
            console.log($scope.booktime[index]);
            console.log($scope.date[index]);
            //var userr= $window.localStorage.getItem('username');
            Gym.bookGym(data,$scope.date[index],$scope.booktime[index]);
           //.success(function(data){
                //vm.gyms = data;
                //console.log(data);
                //$scope.data = data;
            //})
        };
}
]);


/*var cities = [
    {
        city : 'Toronto',
        desc : 'This is the best city in the world!',
        lat : 28,
        lng : 77
    },
    {
        city : 'New York',
        desc : 'This city is aiiiiite!',
        lat : 28.3,
        lng : 77.1
    },
    {
        city : 'Chicago',
        desc : 'This is the second best city in the world!',
        lat : 28.8819,
        lng : 77
    },
    {
        city : 'Los Angeles',
        desc : 'This city is live!',
        lat : 28.0500,
        lng : 77.2500
    },
    {
        city : 'Las Vegas',
        desc : 'Sin City...\'nuff said!',
        lat : 28.0800,
        lng : 77.1522
    }
];
*/

// gymcnt.controller('ShowGymController', function(Gym, $http, $scope){
// // gymcnt.controller('ShowGymController', function(Gym, $http, $scope){

// 	var vm = this;
// 	//vm.processing = true;

// 	$scope.showAllGym = function() {
// 		Gym.showAll({loc:$scope.loc})
// 		.success(function(data){
// 			vm.gyms = data;
// 			$scope.data = data;
// 		})

// 	};
	
// });