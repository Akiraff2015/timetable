rootApp.controller('MainController', ['$scope', 'moment', 'ScheduleService', function ($scope, moment, ScheduleService) {
    $scope.schedule = ScheduleService;
}]);