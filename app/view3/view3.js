'use strict';

angular.module('myApp.view3', ['ui.router'])

    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.state({
            name:'view3',
            url :'/view3',
            templateUrl: 'view3/view3.html',
            controller: 'View3Ctrl'
        })
    }])

.controller('View3Ctrl', ['$http',function($http) {

}]);