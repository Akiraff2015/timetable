rootApp.controller('EditScheduleController', ['$scope', 'moment', 'ScheduleService', function ($scope, moment, ScheduleService) {
    $scope.hideSplitShift = [true, true, true, true, true, true, true];
    $scope.editMode = [false, false, false, false, false, false, false];

    // $scope.toggleShift = function (day) {
    //     // $scope.hideSplitShift[day] = !$scope.hideSplitShift[day];
    //     $scope.editSchedule.timetable[day].splitShift = !$scope.editSchedule.timetable[day].splitShift;
    //     console.log(day);
    // };
    //
    // $scope.calculateDifferenceHours = function (day) {
    //     $scope.editSchedule.timetable[day];
    // };
    //
    // $scope.edit = function (i) {
    //     $scope.editMode[i] = !$scope.editMode[i];
    // };
    //
    // $scope.updateSchedule = function (i) {
    //     $scope.edit(i);
    // };
    //
    // $scope.dayOffToggle = function (day) {
    //     let schedule = $scope.editSchedule.timetable[day];
    //     $scope.editSchedule.timetable[day].dayOff = !$scope.editSchedule.timetable[day].dayOff;
    //
    //     // Resets time if the person toggles "Day On: Start/End Time to 00:00"
    //     schedule.startTime.forEach((day, index) => schedule.startTime[index] = "00:00");
    //     schedule.endTime.forEach((day, index) => schedule.endTime[index] = "00:00");
    // };
    //
    // $scope.editSchedule = {
    //     "name": "John Doe",
    //     "timetable": [
    //         {
    //             "day": "MON", "date": "",
    //             "startTime": ["14:00", "16:00"], "endTime": ["17:00", "22:00"],
    //             "dayOff": false, "splitShift": true, "TBA": true
    //         },
    //
    //         {
    //             "day": "TUE", "date": "",
    //             "startTime": ["00:00", "00:00"], "endTime": ["00:00", "00:00"],
    //             "dayOff": false, "splitShift": false, "TBA": true
    //         },
    //
    //         {
    //             "day": "WED", "date": "",
    //             "startTime": ["00:00", "00:00"], "endTime": ["00:00", "00:00"],
    //             "dayOff": false, "splitShift": false, "TBA": true
    //         },
    //
    //         {
    //             "day": "THU", "date": "",
    //             "startTime": ["00:00", "00:00"], "endTime": ["00:00", "00:00"],
    //             "dayOff": true, "splitShift": false, "TBA": true
    //         },
    //
    //         {
    //             "day": "FRI", "date": "",
    //             "startTime": ["00:00", "00:00"], "endTime": ["00:00", "00:00"],
    //             "dayOff": true, "splitShift": false, "TBA": true
    //         },
    //
    //         {
    //             "day": "SAT", "date": "",
    //             "startTime": ["00:00", "00:00"], "endTime": ["00:00", "00:00"],
    //             "dayOff": false, "splitShift": false, "TBA": true
    //         },
    //
    //         {
    //             "day": "SUN", "date": "",
    //             "startTime": ["00:00", "00:00"], "endTime": ["00:00", "00:00"],
    //             "dayOff": false, "splitShift": false, "TBA": true
    //         }
    //     ]
    // };
    //
    // // Get previous Monday and add 7 days to an array.
    // let sevenDays = moment($scope.schedule[0].timetable[1].date);
    // for (let i = 0; i < 7; i++) {
    //     $scope.editSchedule.timetable[i].date = sevenDays.add(1, 'days').format('D MMM, YYYY');
    // }
}]);