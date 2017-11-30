'use strict';

angular.module('myApp.view1', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  // $routeProvider.when('/view1', {
  //   templateUrl: 'view1/view1.html',
  //   controller: 'View1Ctrl'
  // });
    $stateProvider.state({
        name:'view1',
        url :'/view1',
        templateUrl: './view1/view1.html',
        controller: 'View1Ctrl'
    })
}])

.controller('View1Ctrl', ['$scope','$http','$state','UserService','UserService',function($scope,$http,$state,UserService) {
    $scope.users = UserService.getUsers();
    if(!$scope.users) {
        UserService.all().then(function () {
            $scope.users = UserService.getUsers();
        });
    }
    $scope.addUser=function () {
        // $location.path('/view1.editUser/'+' ');
        $state.go('view1.editUser',{name:' '});
    }

    $scope.updateUser=function (name) {
        // $location.path('/view1.editUser/'+name)
        $state.go('view1.editUser',{name:name});
    }
}]);