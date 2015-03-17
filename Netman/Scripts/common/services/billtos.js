'use strict';
/* Application Service */
userApp.factory('$billtos', function ($resource, $response, $path) {

    var $billtos = $resource('http://src.smartworks.api.issoa.net/:method');

            

                $billtos.prototype.$options = function () {

                    return '<div class="table-buttons">' +
                       '<a class="btn btn-white btn-sm" ng-click="open(\'billtos\',$event)"> <i class="fa fa-pencil"></i> Edit</a>' +
                       '<a class="btn btn-white btn-sm" ng-click="remove(\'billtos\',$event)"> <i class="fa fa-trash-o"></i> Remove</a>' +
                     '</div>';
                }


       return $billtos;
  });


