'use strict';
/* Application Service */
angular
        .module('sunloan')
        .factory('$application', function ($resource, $response, $path) {

            var $application = $resource(
                    $path.rest + '/rest/application/:method',
                    {},
                    {
                        update: {
                            method: 'PUT',
                            params: {
                                method: "@method",
                                page: "@page"
                            }
                        },
                        borrower: {
                            url: $path.rest + '/rest/application/:id',
                            params: {
                                id: "@id"
                            },
                            method: 'PUT'
                        },
                        delete: {
                            url: $path.rest + '/rest/application/:id',
                            params: {
                                id: "@id"
                            },
                            method: 'DELETE'
                        },
                        print: {
                            url: $path.rest + '/rest/borrower/:account/promissory-note/:seq' + '.pdf',
                            params: {account: '@account', seq: '@seq'},
                            method: 'GET'
                        }
                    });

            $application.prototype.$review = function () {

                return '<div class="table-buttons">' +
                        '<a class="btn btn-white btn-sm" ng-click="open(\'under_review\', $event);"> <i class="fa fa-pencil"></i> Manage</a>' +
                        '<a class="btn btn-white btn-sm" ng-click="open(\'under_review\', $event, \'evaluate\');" > <i class="fa fa-pie-chart"></i> Evaluate</a>' +
                        '<a class="btn btn-white btn-sm" ng-click="open(\'under_review\', $event, \'letter\');" > <i class="fa fa-envelope"></i> Letter</a>' +
                        '</div>';
            };

            $application.prototype.$complete = function () {

                return '<div class="table-buttons">' +
                        '<a class="btn btn-white btn-sm" ng-click="open(\'not_completed\', $event);"> <i class="fa fa-pencil"></i> Manage</a>' +
                        '</div>';
            };

            $application.prototype.$make = function () {

                return '<div class="table-buttons">' +
                        '<a class="btn btn-white btn-sm disabled" > <i class="fa fa-list-alt"></i> View</a>' +
                        '<a class="btn btn-white btn-sm" ng-click="make_loan($event)"> <i class="fa fa-money fa-fw"></i> Make a Loan</a>' +
                        '</div>';
            }

            return $application;
        });
