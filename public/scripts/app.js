'use strict';
//####################################################
var app = angular.module('navbar_test', ['$strap.directives']);
app.config(function($routeProvider){
  $routeProvider.when('/about',       {templateUrl: 'template.tpl', controller: 'AboutCtrl'})
                .when('/custom_page', {templateUrl: 'template.tpl', controller: 'CustomCtrl'})
                .when('/home',        {templateUrl: 'template.tpl', controller: 'HomeCtrl'})
                .otherwise({redirectTo: "/home"});
});
//####################################################
//######injecting the dependencies####################
controllers.MainCtrl.$inject   = ['$scope'];
controllers.HomeCtrl.$inject   = ['$scope'];
controllers.AboutCtrl.$inject  = ['$scope'];
controllers.CustomCtrl.$inject = ['$scope'];
//####################################################
//######assigning the controllers to the application##
app.controller(controllers);
//####################################################
