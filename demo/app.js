var app = angular.module('App', [
  'mytestnodule'
]);

app.controller('BaseCtrl', function($scope) {
  'use strict';

  $scope.myName = 'Scott';
});
