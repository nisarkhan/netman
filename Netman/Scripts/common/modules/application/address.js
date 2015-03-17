'use strict';
/* Dashboard Controller */

angular
  .module('sunloan')
  .controller('application.address',
    function($scope, $routeParams, $location, $storage, $application){

      /* default data */
      $scope.application = $application.get({ method: $routeParams.id }, function(response){  
        if(! 'id' in response) $location.path('application');
      });

      $scope.create = function(address){

        var application = {};
        application.page = 3;
        application.method = $scope.application.id;

        if(!application.residences){
          application.residences = [];
        }
        application.residences = $scope.application.residences; //angular.copy(address); 
        $application
          .update(application, function(response, headers){
            $location.path('application/'+response.id+'/options');
          });
      };

      /* get dropdown data */
      $application.get({ method: 'types' }, function( types ){
        $scope.dropdown = types;
      });

  });
