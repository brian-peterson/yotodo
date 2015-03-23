'use strict';

/**
 * @ngdoc overview
 * @name yotodoApp
 * @description
 * # yotodoApp
 *
 * Main module of the application.
 */
angular
  .module('yotodoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/tasks.html',
        controller: 'TasksCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/tasks', {
        templateUrl: 'views/tasks.html',
        controller: 'TasksCtrl'
      })
      .when('/tasks-completed', {
        templateUrl: 'views/tasks-completed.html',
        controller: 'TasksCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
