var rte = angular.module('appRoutes', ['ngRoute'])

rte.config(function($routeProvider, $locationProvider){

	$routeProvider
		.when('/', {
			templateUrl: 'app/views/pages/home.html',
			controller: 'tempController'
		})
		.when('/chats', {
			templateUrl: 'app/views/pages/chat.html',
			controller: 'ChatController'
		})
		.when('/login', {
			templateUrl: 'app/views/pages/login.html',
			controller: 'MainController'
		})
		.when('/signup',{
			templateUrl: 'app/views/pages/signup.html',
			controller: 'UserCreateController'
		})
		.when('/showGyms',{
		 	templateUrl: 'app/views/pages/showGyms.html',
		 	// controller: 'MapCtrl'
		 	controller: 'MapCtrl'
		})
		.when('/showYoga',{
			templateUrl: 'app/views/pages/showYogaCentres.html',
			controller: 'ShowYogaController'
		})
		.when('/symChecker',{
			templateUrl: 'app/views/pages/symptomCheck.html',
			controller: 'CheckSymController'
		})
		.when('/donateBlood',{
			templateUrl: 'app/views/pages/donorForm.html',
			controller: 'BloodDonorController'
		})
		.when('/findDonor/:bloodGroup',{
			templateUrl: 'app/views/pages/donors.html',
			controller: 'BloodDonorController'
		})
		.when('/pro',{
			templateUrl: 'app/views/pages/pro.html',
			controller: ''
		})
		.when('/viewPro',{
			templateUrl: 'app/views/pages/viewPro.html',
			controller: 'ViewProController'
		})
		.when('/signupGym',{
			templateUrl: 'app/views/pages/signupGym.html',
			controller: 'GymCreateController'
		})
		.when('/signupYoga',{
			templateUrl: 'app/views/pages/signupYoga.html',
			controller: 'YogaCreateController'
		})
		.when('/bookTrial/:gymid',{
			templateUrl: 'app/views/pages/bookGym.html',
			controller: 'BookingController'
		})
		.when('/loginPro',{
			templateUrl: 'app/views/pages/loginPro.html',
			controller: 'MainController'
		})
		.when('/checkMed',{
			templateUrl: 'app/views/pages/mediCheck.html',
			controller: 'MedSearchController'
		})
		$locationProvider.html5Mode(true);
});




		// .when('/pro',{
		// 	templateUrl: 'app/views/pages/pro.html'
		// })
		// .when('/showDoctors',{
		// 	templateUrl: 'app/views/pages/showDoctors.html'
		// })