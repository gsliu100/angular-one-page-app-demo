var myapp = angular.module('onePageApp',['ngRoute','ngAnimate','myController']);

myapp.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/',{
		templateUrl:'tpl/home.html',
		controller:'homeController'
	}).when('/:whatAnimal',{
		templateUrl:'tpl/detail.html',
		controller:'detailController'
	}).otherwise({
		redirectTo:'/'
	})
}]);