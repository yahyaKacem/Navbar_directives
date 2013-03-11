'use strict';
//########################################################################
var app  = angular.module('navbar_app', []);
var Url  = 'partials/content.tpl';
var when = {
             "url":     {templateUrl: Url, controller: 'UrlCtrl'},
             "buttons": {templateUrl: Url, controller: 'BtnCtrl'},
             "email":   {templateUrl: Url, controller: 'EmailCtrl'},
             "reset":   {templateUrl: Url, controller: 'ResetCtrl'},
             "submit":  {templateUrl: Url, controller: 'SubmitCtrl'},
             "otherwise": {
               templateUrl: Url,
               redirectTo: "/home",
               controller: 'MainCtrl'
             }
           };
app.config(function($routeProvider){
  $routeProvider.when('/url',    when.url)
                .when('/email',  when.email)
                .when('/reset',  when.reset)
                .when('/submit', when.submit)
                .when('/btn',    when.buttons)
                .otherwise(when.otherwise);
});
//########################################################################
//######injecting the dependencies########################################
controllers.MainCtrl.$inject = ['$scope', 'NavItems', '$route'];
//########################################################################
//######assigning the controllers to the application######################
app.controller(controllers);
app.directive(directives);
//########################################################################
