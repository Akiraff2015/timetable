# Schedule Roaster
A very simple roaster schedule, that I am developing for a restaurant that I am currently work in.
Most of the staff members have a very low tech understanding. And would like to create a clean user friendly
experience, for all staff members being able to see their roaster.

In addition, would like also create a simple feature which allows business owners to keep in track of their
staffs. Reassure that they always on budget in order to pay the staff.

![hello](https://i.imgur.com/Hs3TW7e.png)


## Case Study
1. Currently nobody can create a Roaster Schedule via the Spreadsheet. Therefore I am creating a simple and yet
user friendly roaster for the manager being able to create powerful schedule, and manage the time of the Staff Team.

2. **Simple.** The roaster needs to be simple: basic CRUD operation (staff's schedule), monitoring the staff's hours.
And being able to see past hours.

3. Mobile friendly. Must be mobile friendly, since most of the staffs are always using their phone on break hours. Thefore,
I would like to ensure that the user experience is the best for mobile users.

## Work In Progress
[ ] **Database**

I will be using SQL. However my data will be stored in a JSON format.

On the `main.controller.js` file, there is a standard JSON structure, that I would like to be getting via by `$http`.
Once I implement RESTful API.

```javascript
"name": "Akira",
  "timetable": [{
    "day": "",
    "date": "",
    "startTime": [],
    "endTime": [],
    "dayOff": false,
    "splitShift": true
  },
  ...
];
```


[ ] **User Authentication**

Still looking alternative solutions at this very moment. Currently I have `madesimple\slim-auth` 
[library](https://packagist.org/packages/madesimple/slim-auth). Which seems that is going to solve
my problem.


[ ] **Graphs**

I would like to give the Admin dashboard, a visual appealing. Therefore my solution would be adding graphs.
Mainly would be using bar graphs, to show the total hours a staff have worked in a: day / week / fortnight / month.

## Initial Release
I have plans in releasing a beta stage on January 1st 2019, in order to get everyone's feedback before going on 
final stage. The final stage, is creating crone jobs, and reassuring to improve the quality of the app.
