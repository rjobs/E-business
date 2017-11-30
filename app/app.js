'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'ui.router.state.events',
    'myApp.view1',
  'myApp.view1.editUser',
   // 'myApp.view2',
    'myApp.view3',
  // 'myApp.viewEdit',
  'myApp.version',
    'myApp.userService'
]).
config(['$urlRouterProvider',function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/view1');
}]);
