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

$container['view'] = function($container) {
    $view = new \Slim\Views\Twig('./views', []);

    $router = $container->get('router');
    $uri = \Slim\Http\Uri::createFromEnvironment(new \Slim\Http\Environment($_SERVER));
    $view->addExtension(new Slim\Views\TwigExtension($router, $uri));

    return $view;
};

$app->get('/', function ($request, $response, $args) {
    return $this->view->render($response, 'index.html', []);
});

$app->get('/api/v1/name/john', function($request, $response, $args) {
    $arr = array(
        "name" => "John Doe",
        "timetable" => array(
            array("day" => "MON",
                "date" => "24 Dec, 2018",
                "startTime" => array("00:00", "00:00"),
                "endTime" => array("00:00", "00:00"),
                "dayOff" => true,
                "splitShift" => true,
                "TBA" => true),

            array("day" => "TUE",
                "date" => "25 Dec, 2018",
                "startTime" => array("00:00", "00:00"),
                "endTime" => array("00:00", "00:00"),
                "dayOff" => true,
                "splitShift" => true,
                "TBA" => true),

            array("day" => "WED",
                "date" => "26 Dec, 2018",
                "startTime" => array("00:00", "00:00"),
                "endTime" => array("00:00", "00:00"),
                "dayOff" => true,
                "splitShift" => true,
                "TBA" => true),

            array("day" => "THU",
                "date" => "27 Dec, 2018",
                "startTime" => array("00:00", "00:00"),
                "endTime" => array("00:00", "00:00"),
                "dayOff" => true,
                "splitShift" => true,
                "TBA" => true),

            array("day" => "FRI",
                "date" => "28 Dec, 2018",
                "startTime" => array("00:00", "00:00"),
                "endTime" => array("00:00", "00:00"),
                "dayOff" => true,
                "splitShift" => true,
                "TBA" => true),

            array("day" => "SAT",
                "date" => "29 Dec, 2018",
                "startTime" => array("00:00", "00:00"),
                "endTime" => array("00:00", "00:00"),
                "dayOff" => true,
                "splitShift" => true,
                "TBA" => true),

            array("day" => "SUN",
                "date" => "30 Dec, 2018",
                "startTime" => array("00:00", "00:00"),
                "endTime" => array("00:00", "00:00"),
                "dayOff" => true,
                "splitShift" => true,
                "TBA" => true)
        )
    );
    return $response->withJson($arr, 201);
});

// Run app
$app->run();