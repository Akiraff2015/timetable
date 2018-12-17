let rootApp = angular.module('rootApp', []).config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[').endSymbol(']}');
});

rootApp.controller('mainController', ['$scope', function($scope) {
    $scope.message = "Hello";
}]);