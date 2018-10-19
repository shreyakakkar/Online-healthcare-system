var a = angular.module('MyApp', ['userCtrl','mainCtrl','mainsecCtrl','chatCtrl','gymCtrl','bookgymCtrl','yogaCtrl','symptomCtrl','gymownCtrl','bloodCtrl','medCtrl','yogaownCtrl','viewproCtrl','viewproService','medService','bookgymService','gymloginService','bloodService','symptomService','yogaService','gymService','userService','authService','appRoutes'])

a.config(function($httpProvider){

	$httpProvider.interceptors.push('AuthInterceptor');
})