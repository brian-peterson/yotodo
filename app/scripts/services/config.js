'use strict';

/**
 * @ngdoc service
 * @name yotodoApp.config
 * @description
 * # config
 * Value in the yotodoApp
 */
angular.module('yotodoApp')
  .value('config', {
    firebaseAppUrl: 'https://torrid-torch-2793.firebaseIO.com',
    taskExpiration: 604800000
  });