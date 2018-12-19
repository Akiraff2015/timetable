// TODO: Implement RESTful API
rootApp.factory('ScheduleService', function($http) {
    return {
        getSchedule: function() {
            return $http.get('api/v1/name/john');
        }
    };
});