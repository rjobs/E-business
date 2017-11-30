'use strict';

angular.module('myApp.viewEdit', ['ui.route'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/viewEdit/:name', {
            templateUrl: 'view-edit/view-edit.html',
            controller: 'viewEditCtrl'
        });
    }])
angular.module('myApp.viewEdit', ['ui.router'])

    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.state({
            name:'view3',
            url :'/view3',
            templateUrl: 'view3/view3.html',
            controller: 'View3Ctrl'
        })
    }])
    .controller('viewEditCtrl', ['$scope','$http','$location','UserService','UserService',function($scope,$http,$location,UserService) {

    }]);