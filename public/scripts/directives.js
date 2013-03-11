//#####Creating the directives object to hold all the directives##########
var directives = {};
//########################################################################
//###################START topNavBar#########################################
directives.topNavBar = function() {
  var linker      = function(scope, element, attrs) {};
//  var compile     = function(tElm) {};
  return {
    replace:     true,
    restrict:    "EA",
    transclude:  true,
    link:        linker,
//    compile:     compile,
    templateUrl: 'partials/topNavBar.tpl'
  }
};
//###################END topNavBar###########################################
//########################################################################
