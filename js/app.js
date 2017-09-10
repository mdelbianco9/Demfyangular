
// This is the variable for the register page
var multi = angular.module('MultiPage', ["ngRoute"]);

multi.config(function($routeProvider) {
	$routeProvider 
	.when("/", {
		templateUrl : "views/home.html"
	})
	.when("/register", {
		templateUrl : "views/register.html"
	});

});
