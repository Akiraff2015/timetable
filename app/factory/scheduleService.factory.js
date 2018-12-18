// TODO: Implement RESTful API
rootApp.factory('ScheduleService', function() {
    let schedule = [{
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

    return schedule;
});