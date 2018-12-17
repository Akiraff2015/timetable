<?php
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

// Run app
$app->run();