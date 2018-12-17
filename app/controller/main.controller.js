rootApp.controller('MainController', ['$scope', 'moment', function ($scope, moment) {
    $scope.hideSplitShift = [true, true, true, true, true, true, true];

    $scope.schedule = [{
        "name": "Akira",
        "timetable": [
            {
                "day": "", "date": "",
                "startTime": [], "endTime": [],
                "dayOff": false, "splitShift": true, "TBA": false
            },

            {
                "day": "MON", "date": "17 Dec, 2018",
                "startTime": ["14:00", "19:00"], "endTime": ["17:00", "01:00"],
                "dayOff": false, "splitShift": true, "TBA": false
            },

            {
                "day": "TUE", "date": "18 Dec, 2018",
                "startTime": ["00:00", "00:00"], "endTime": ["00:00", "00:00"],
                "dayOff": false, "splitShift": true, "TBA": false
            },

            {
                "day": "WED", "date": "19 Dec, 2018",
                "startTime": ["00:00", "00:00"], "endTime": ["00:00", "00:00"],
                "dayOff": true, "splitShift": true, "TBA": false
            },

            {
                "day": "THU", "date": "20 Dec, 2018",
                "startTime": ["00:00", "00:00"], "endTime": ["00:00", "00:00"],
                "dayOff": true, "splitShift": true, "TBA": false
            },

            {
                "day": "FRI", "date": "21 Dec, 2018",
                "startTime": ["00:00", "00:00"], "endTime": ["00:00", "00:00"],
                "dayOff": false, "splitShift": true, "TBA": false
            },

            {
                "day": "SAT", "date": "22 Dec, 2018",
                "startTime": ["00:00", "00:00"], "endTime": ["00:00", "00:00"],
                "dayOff": false, "splitShift": true, "TBA": false
            },

            {
                "day": "SUN", "date": "23 Dec, 2018",
                "startTime": ["00:00", "00:00"], "endTime": ["00:00", "00:00"],
                "dayOff": false, "splitShift": true, "TBA": false
            }
        ]
    }];

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

    let sevenDays = moment($scope.schedule[0].timetable[1].date);
    for (let i = 0; i < 7; i++) {
        // console.log($scope.editDateTable.push(sevenDays.add(1, 'days').format('D MMM, YYYY')));
        $scope.editSchedule.timetable[i].date = sevenDays.add(1, 'days').format('D MMM, YYYY');
    }

    $scope.toggleShift = function(day) {
        $scope.hideSplitShift[day] = !$scope.hideSplitShift[day];
    };

    $scope.updateSchedule = function() {

    };
}]);