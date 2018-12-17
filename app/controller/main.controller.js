rootApp.controller('MainController', ['$scope', function($scope) {
    $scope.schedule = [{
        "name": "Akira",
        "timetable": [
            {
                "day": "",
                "date": "",
                "startTime": [],
                "endTime": [],
                "dayOff": false,
                "splitShift": true
            },

            {
                "day": "MON",
                "date": "17 Dec, 2018",
                "startTime": ["14:00", "19:00"],
                "endTime": ["17:00", "01:00"],
                "dayOff": false,
                "splitShift": true
            },

            {
                "day": "TUE",
                "date": "18 Dec, 2018",
                "startTime": ["00:00", "00:00"],
                "endTime": ["00:00", "00:00"],
                "dayOff": false,
                "splitShift": true
            },

            {
                "day": "WED",
                "date": "19 Dec, 2018",
                "startTime": ["00:00", "00:00"],
                "endTime": ["00:00", "00:00"],
                "dayOff": true,
                "splitShift": true
            },

            {
                "day": "THU",
                "date": "20 Dec, 2018",
                "startTime": ["00:00", "00:00"],
                "endTime": ["00:00", "00:00"],
                "dayOff": true,
                "splitShift": true
            },

            {
                "day": "FRI",
                "date": "21 Dec, 2018",
                "startTime": ["00:00", "00:00"],
                "endTime": ["00:00", "00:00"],
                "dayOff": false,
                "splitShift": true
            },

            {
                "day": "SAT",
                "date": "22 Dec, 2018",
                "startTime": ["00:00", "00:00"],
                "endTime": ["00:00", "00:00"],
                "dayOff": false,
                "splitShift": true
            },

            {
                "day": "SUN",
                "date": "23 Dec, 2018",
                "startTime": ["00:00", "00:00"],
                "endTime": ["00:00", "00:00"],
                "dayOff": false,
                "splitShift": true
            }
        ]
    }];
}]);