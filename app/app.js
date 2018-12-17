let rootApp = angular.module('rootApp', ['angularMoment']).config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[').endSymbol(']}');
});