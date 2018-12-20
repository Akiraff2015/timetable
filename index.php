<?php
$config = include(__DIR__ . './configs/config.php');
require 'vendor/autoload.php';
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,OPTIONS,POST,PUT,DELETE');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$app = new Slim\App([
    'templates.path' => 'app/'
]);

$container = $app->getContainer();

// Configure view
$container['view'] = function($container) {
    $view = new \Slim\Views\Twig('./views', []);

    $router = $container->get('router');
    $uri = \Slim\Http\Uri::createFromEnvironment(new \Slim\Http\Environment($_SERVER));
    $view->addExtension(new Slim\Views\TwigExtension($router, $uri));

    return $view;
};

// Configure database
$db = new PDO("mysql:host=localhost;dbname=schedule", 'root', '');

$app->get('/', function ($request, $response, $args) use ($app) {
    return $this->view->render($response, 'index.html', []);
});

// TODO: testing database (retrieving data)
$app->get('/getdata', function($req, $res, $args) use ($app, $db) {
    try {
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = $db->query("SELECT data, date_range FROM timetable WHERE id = 1 LIMIT 1")->fetch();

        $convert_to_json = json_decode($sql['data'], true);

        return $res->withJson($convert_to_json);

    } catch (PDOException $e) {
        return $res->withJson(array(
            "status" => 500,
            "message" => "Oops! Error in the database. Here is more info: " . $e->getMessage()
        ));
    }
});

// TODO: testing database (saving data). Need to change to POST request.
$app->get('/test', function($req, $res, $args) use ($app, $db) {
    $arr = array(
        "name" => "John Doe",
        "timetable" => array(
            array("day" => "MON",
                "date" => "24 Dec, 2018",
                "startTime" => array("00:00", "00:00"),
                "endTime" => array("00:00", "00:00"),
                "dayOff" => true,
                "splitShift" => true,
                "TBA" => true,
                "edit" => false),

            array("day" => "TUE",
                "date" => "25 Dec, 2018",
                "startTime" => array("00:00", "00:00"),
                "endTime" => array("00:00", "00:00"),
                "dayOff" => true,
                "splitShift" => true,
                "TBA" => true,
                "edit" => false),

            array("day" => "WED",
                "date" => "26 Dec, 2018",
                "startTime" => array("00:00", "00:00"),
                "endTime" => array("00:00", "00:00"),
                "dayOff" => true,
                "splitShift" => true,
                "TBA" => true,
                "edit" => false),

            array("day" => "THU",
                "date" => "27 Dec, 2018",
                "startTime" => array("00:00", "00:00"),
                "endTime" => array("00:00", "00:00"),
                "dayOff" => true,
                "splitShift" => true,
                "TBA" => true,
                "edit" => false),

            array("day" => "FRI",
                "date" => "28 Dec, 2018",
                "startTime" => array("00:00", "00:00"),
                "endTime" => array("00:00", "00:00"),
                "dayOff" => true,
                "splitShift" => true,
                "TBA" => true,
                "edit" => false),

            array("day" => "SAT",
                "date" => "29 Dec, 2018",
                "startTime" => array("00:00", "00:00"),
                "endTime" => array("00:00", "00:00"),
                "dayOff" => true,
                "splitShift" => true,
                "TBA" => true,
                "edit" => false),

            array("day" => "SUN",
                "date" => "30 Dec, 2018",
                "startTime" => array("00:00", "00:00"),
                "endTime" => array("00:00", "00:00"),
                "dayOff" => true,
                "splitShift" => true,
                "TBA" => true,
                "edit" => false)
        )
    );

    $time_range = array(
      "start_time" => $arr["timetable"][0]["date"],
      "end_time" => $arr["timetable"][6]["date"]
    );

    $json_schedule = json_encode($arr);
    $json_time_range = json_encode($time_range);

    try {
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = $db->prepare("INSERT INTO timetable (data, date_range) VALUES (:json_schedule, :json_time_range)");

        $sql->execute(array(
            ':json_schedule' => $json_schedule,
            ':json_time_range' => $json_time_range
        ));

        return $res->withStatus(302)->withHeader('Location', '/');

    } catch(PDOException $e) {
        return $res->withJson(array(
            "status" => 500,
            "message" => "Oops! Error in connecting to database. Here is more info: " . $e->getMessage()
        ));
    }
});

$app->get('/api/v1/name/john', function($req, $res, $args) {
    $arr = array(
        "name" => "John Doe",
        "timetable" => array(
            array("day" => "MON",
                "date" => "24 Dec, 2018",
                "startTime" => array("00:00", "00:00"),
                "endTime" => array("00:00", "00:00"),
                "dayOff" => true,
                "splitShift" => true,
                "TBA" => true,
                "edit" => false),

            array("day" => "TUE",
                "date" => "25 Dec, 2018",
                "startTime" => array("00:00", "00:00"),
                "endTime" => array("00:00", "00:00"),
                "dayOff" => true,
                "splitShift" => true,
                "TBA" => true,
                "edit" => false),

            array("day" => "WED",
                "date" => "26 Dec, 2018",
                "startTime" => array("00:00", "00:00"),
                "endTime" => array("00:00", "00:00"),
                "dayOff" => true,
                "splitShift" => true,
                "TBA" => true,
                "edit" => false),

            array("day" => "THU",
                "date" => "27 Dec, 2018",
                "startTime" => array("00:00", "00:00"),
                "endTime" => array("00:00", "00:00"),
                "dayOff" => true,
                "splitShift" => true,
                "TBA" => true,
                "edit" => false),

            array("day" => "FRI",
                "date" => "28 Dec, 2018",
                "startTime" => array("00:00", "00:00"),
                "endTime" => array("00:00", "00:00"),
                "dayOff" => true,
                "splitShift" => true,
                "TBA" => true,
                "edit" => false),

            array("day" => "SAT",
                "date" => "29 Dec, 2018",
                "startTime" => array("00:00", "00:00"),
                "endTime" => array("00:00", "00:00"),
                "dayOff" => true,
                "splitShift" => true,
                "TBA" => true,
                "edit" => false),

            array("day" => "SUN",
                "date" => "30 Dec, 2018",
                "startTime" => array("00:00", "00:00"),
                "endTime" => array("00:00", "00:00"),
                "dayOff" => true,
                "splitShift" => true,
                "TBA" => true,
                "edit" => false)
        )
    );
    return $res->withJson($arr, 201);
});

// Run app
$app->run();