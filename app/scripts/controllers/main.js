'use strict';

/**
 * @ngdoc function
 * @name yotodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yotodoApp
 */
angular.module('yotodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
