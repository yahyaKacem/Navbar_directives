//#####Creating the directives object to hold all the directives##########
var directives = {};
//########################################################################
//###################START navBar#########################################
directives.navBar = function($location) {
  var linker = function($scope, element, attrs, controller) {
//     Watch for the $location
    $scope.$watch(function() {
      return $location.path();
    }, function(newValue, oldValue) {
      if(newValue != oldValue){
        element.find('li[data-match-route]').each(function(k, li) {
          var $li = angular.element(li),
//          data('match-rout') does not work with dynamic attributes
//          pattern = data('match-route'),
          pattern = $li.attr('data-match-route'),
          regexp = new RegExp('^' + pattern + '$', ["i"]);
          if(regexp.test(newValue)) {
            $li.addClass('active');
          } else{
            $li.removeClass('active');
          }
        });
      }else{
        element.find('li[data-match-route]').each(function(k, li) {
          var $li = angular.element(li),
//          pattern = data('match-route'),
          pattern = $li.attr('data-match-route'),
          regexp  = new RegExp('^' + pattern + '$', ["i"]);
          if(regexp.test(newValue)) {
            $li.addClass('active');
          }else{
            $li.removeClass('active');
          }
        });
//        (newValue.replace('\/', ''));
      }
    });
  }
  return {
    replace:     true,
    restrict:    "EA",
    transclude:  true,
    link:        linker
  }
};
//###################END navBar###########################################
//########################################################################
