var chatcnt = angular.module('chatCtrl', []);

chatcnt.controller('ChatController', function($scope,$http, $location, $window){
	
	var socket = io.connect();
	$scope.data=[];
	
	socket.on('new message', function(data1){
		$scope.data.push({"message1":data1,"username":$window.localStorage.getItem('username')});
     });


	
	$scope.sendMessage = function(message){
		console.log("here",message);
		
		socket.emit('send message',message);
		message='';        
		}

	
});