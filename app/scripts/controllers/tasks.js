'use strict';

/**
 * @ngdoc function
 * @name yotodoApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the yotodoApp
 */

    angular.module('yotodoApp')
.controller('TasksCtrl', function ($scope, $window, $firebase, config) {
  var ref = new $window.Firebase(config.firebaseAppUrl + '/tasks/');
  // create an AngularFire reference to the data
  var sync = $firebase(ref);
  // download the data into a local array
  $scope.tasks = sync.$asArray();

  $scope.addTask = function (taskTitle, taskPriority) {
    $scope.tasks.$add({
      name: taskTitle,
      priority: taskPriority,
      createdAt: new Date().getTime(),
      isComplete: false
    }).then(function () {
      $scope.newTaskText = '';
      $scope.newTaskPriority = '';
    });
  };

  $scope.completeTask = function (task) {
    task.isComplete = true;
    $scope.tasks.$save(task);

  };
});
