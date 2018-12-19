rootApp.component('editSchedule', {
    templateUrl: './app/edit_schedule/components/table.html',
    controller: function($scope, $http, ScheduleService) {
        // GET response schedule
        $scope.schedule = ScheduleService.getSchedule().then(res => $scope.schedule = res.data);

        $scope.myFunc = function(i) {
            console.log(i);
        }
    }
});

rootApp.component('editButton', {
   templateUrl: './app/edit_schedule/components/editTable.html'
});