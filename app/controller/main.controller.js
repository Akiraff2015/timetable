rootApp.controller('MainController', ['$scope', 'moment', 'ScheduleService', function ($scope, moment, ScheduleService) {
    $scope.schedule = ScheduleService;

    $scope.toggleShift = function(day) {
        $scope.hideSplitShift[day] = !$scope.hideSplitShift[day];
    };

    $scope.updateSchedule = function() {

    };
}]);