<?php

header('Access-Control-Allow-Origin: *');

require __DIR__ . '/vendor/autoload.php';
use \Firebase\JWT\JWT;


$variables = json_decode(file_get_contents('php://input'));
if ($variables) {
    $country = empty($variables->country) ? '' : htmlspecialchars($variables->country);
    $campaignName = empty($variables->campaignName) ? '' : htmlspecialchars($variables->campaignName);


}
else{
    // só aceitar posts 
    // Senão die();
}

$key = "example_key";
$token = array(
    "valid" => true,
    "date" => "http://example.com",
    "username" => 1356999524,
    "role" => 'normal'
);

/**
 * IMPORTANT:
 * You must specify supported algorithms for your application. See
 * https://tools.ietf.org/html/draft-ietf-jose-json-web-algorithms-40
 * for a list of spec-compliant algorithms.
 */
$jwt = JWT::encode($token, $key);
var_dump($jwt);
$decoded = JWT::decode($jwt, $key, array('HS256'));

var_dump($decoded);
print_r($decoded);

/*
 NOTE: This will now be an object instead of an associative array. To get
 an associative array, you will need to cast it as such:
 */

$decoded_array = (array)$decoded;
var_dump($decoded_array);
/**
 * You can add a leeway to account for when there is a clock skew times between
 * the signing and verifying servers. It is recommended that this leeway should
 * not be bigger than a few minutes.
 *
 * Source: http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html#nbfDef
 */
JWT::$leeway = 60; // $leeway in seconds
$decoded = JWT::decode($jwt, $key, array('HS256'));
var_dump($decoded);


/**
 * Validate if token is valid
 */
if( is_string($token) ){
    $decoded = JWT::decode($jwt, $key, array('HS256'));
    if( $decoded ){

    }
    else{

    }
}

?>