<?php
//var_dump( phpversion()); die();

// c:\Users\fabio.madeira\Desktop\Projects\ConsentGateway\backoffice-cg\backend\campaigns>
// C:\wamp64\bin\php\php5.6.35

/** Parameters on url country and campaing name */
if(!isset($_GET['c']) || is_numeric($_GET['c'])){
	die('Country in url is mandatory');
	return;
}

if(!isset($_GET['n']) || is_numeric($_GET['n'])){
	die('Campaign name in url is mandatory');
	return;
}

include_once 'app.php';

$country = empty( $_GET['c'] ) ? '' : htmlspecialchars( $_GET['c'] );
$name = empty( $_GET['n'] ) ? '' : htmlspecialchars( $_GET['n'] );

$app = new App($country, $name);
$app->run(); //generate pages

?>