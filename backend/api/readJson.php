<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');


$content = file_get_contents("json/countryList.json");
$content = json_decode($content, true);
echo json_encode($content);
die();
?>