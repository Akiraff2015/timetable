rootApp.controller('EditScheduleController', ['$scope', 'moment', 'ScheduleService', function($scope, moment, ScheduleService) {
    $scope.hideSplitShift = [true, true, true, true, true, true, true];
    $scope.editMode = [false, false, false, false, false, false, false];
    $scope.schedule = ScheduleService;

    $scope.editSchedule = {
        "name": "Akira",
        "timetable": [
            {
                "day": "MON", "date": "",
                "startTime": ["14:00", "16:00"], "endTime": ["17:00", "22:00"],
                "dayOff": false, "splitShift": false, "TBA": true
            },

            {
                "day": "TUE", "date": "",
                "startTime": ["00:00", "00:00"], "endTime": ["00:00", "00:00"],
                "dayOff": false, "splitShift": false, "TBA": true
            },

            {
                "day": "WED", "date": "",
                "startTime": ["00:00", "00:00"], "endTime": ["00:00", "00:00"],
                "dayOff": false, "splitShift": false, "TBA": true
            },

            {
                "day": "THU", "date": "",
                "startTime": ["00:00", "00:00"], "endTime": ["00:00", "00:00"],
                "dayOff": false, "splitShift": false, "TBA": true
            },

            {
                "day": "FRI", "date": "",
                "startTime": ["00:00", "00:00"], "endTime": ["00:00", "00:00"],
                "dayOff": false, "splitShift": false, "TBA": true
            },

            {
                "day": "SAT", "date": "",
                "startTime": ["00:00", "00:00"], "endTime": ["00:00", "00:00"],
                "dayOff": false, "splitShift": false, "TBA": true
            },

            {
                "day": "SUN", "date": "",
                "startTime": ["00:00", "00:00"], "endTime": ["00:00", "00:00"],
                "dayOff": false, "splitShift": false, "TBA": true
            }
        ]
    };

    // Get previous Monday and add 7 days to an array.
    let sevenDays = moment($scope.schedule[0].timetable[1].date);
    for (let i = 0; i < 7; i++) {
        $scope.editSchedule.timetable[i].date = sevenDays.add(1, 'days').format('D MMM, YYYY');
    }
}]);