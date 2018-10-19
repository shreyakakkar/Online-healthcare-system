 var auth1 = angular.module('authService', [])

 auth1.factory('Auth', function($http, $q, AuthToken,$window){
 	var authFactory = {};
 	authFactory.login = function(username, password, types){
 		return $http.post('/api/login', {
 			username: username,
 			password: password,
 			types: types
 		})
 		.success(function(data){
 			AuthToken.setToken(data.token);
			$window.localStorage.setItem('username',data.name);
 			//console.log("harsh"+data.name);
 			return data;
 		})
 	}
 	authFactory.logout = function(){
 		AuthToken.setToken();
 	}

 	authFactory.isLoggedIn = function(){
 		if(AuthToken.getToken())
				return true;
 		else
 			return false;
 	}

 	authFactory.getUser = function(){
 		if(AuthToken.getToken())
 			return $http.get('/api/me');
 		else
 			return $q.reject({message: "User has no token"});
 	}
 	return authFactory;

 });

 auth1.factory('AuthToken', function($window){

 	var authTokenFactory = {};

 	authTokenFactory.getToken = function(){

 		return $window.localStorage.getItem('token');
 	}

 	authTokenFactory.setToken = function(token){
 		if(token)
 			$window.localStorage.setItem('token',token);
 		else
 			$window.localStorage.removeItem('token');
 	}
 	return authTokenFactory;
 });


 auth1.factory('AuthInterceptor', function($q, $location, AuthToken){

 	var interceptorFactory = {};
 	interceptorFactory.request = function(config){
 		var token = AuthToken.getToken();
 		if(token){
 			config.headers['x-access-token'] = token;
 		}

 		return config;
 	};

 	interceptorFactory.responseError = function(response){
 		if(response.status == 403)
 			$location.path('/login');

 		return $q.reject(response);
 	}
 	return interceptorFactory;
 });





