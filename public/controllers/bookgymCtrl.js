var bookgymcnt = angular.module('bookgymCtrl', ['bookgymService'])

bookgymcnt.controller('BookingController', function(Book, $scope, $routeParams){
	$scope.gymBooking = function() {
		Book.gymBook({gym_id:$routeParams.gymid, date:$scope.date, time:$scope.time})
		.success(function(data){
			console.log(data);
			$scope.data=data;
		});
	}
})

.directive('myDirective', function(Book) {
	return {
		restrict: "EA",
		template: "<div id='intro'>Boook GYM in directive</div><br><div id='info' style='display:none;'>enter date and time</div>",
		scope: {
			id: "@"
		},
		link: function(scope, elem, attrs) {
			console.log(scope.id);
			elem.bind('click', function() {
				console.log('Clicked me!');
				$('#info').show();
			});
		}
	}
});