//###################Creating the controllers object to hold all the controlles###################
var controllers = {};
//####################################################
//###################START MainCtrl###################
controllers.MainCtrl = function($scope){
    $scope.nav_items = [
        {text: "Home",        href: "home"},
        {text: "About",       href: "about"},
        {text: "Custom", href: "custom_page"}
    ];
};
//###################END MainCtrl#####################
//####################################################
//###################START AboutCtrl##################
controllers.AboutCtrl = function($scope){
  $scope.title   = "About page";
  $scope.content = "About page content";
};
//###################END AboutCtrl####################
//####################################################
//###################START HomeCtrl###################
controllers.HomeCtrl = function($scope){
  $scope.title   = "Home page";
  $scope.content = "Home page content";
};
//###################END HomeCtrl#####################
//####################################################
//###################START CustomCtrl#################
controllers.CustomCtrl = function($scope){
  $scope.title   = "Custom page";
  $scope.content = "Custom page content";
};
//###################END CustomCtrl###################
//####################################################
