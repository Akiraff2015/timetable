rootApp.component('editSchedule', {
    templateUrl: './app/edit_schedule/components/table.html',
    controller: function($scope, $http, ScheduleService) {
        // GET response schedule
        $scope.schedule = ScheduleService.getSchedule().then(res => $scope.schedule = res.data);

        $scope.toggleEdit = function(i) {
            $scope.schedule.timetable[i].edit = !$scope.schedule.timetable[i].edit;
        }
    }
});

rootApp.component('editForm', {
   templateUrl: './app/edit_schedule/components/editForm.html'
});