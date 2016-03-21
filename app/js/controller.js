var myController = angular.module('myController',[]);

myController.controller('homeController',function($scope){
	$scope.animals = ['dog','cat','bird'];
});

myController.controller('detailController',['$scope','$routeParams',function($scope,$routeParams){
	$scope.animalImage = $routeParams.whatAnimal;
}]);