<?php 
//header('Content-type: application/json');
//header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

$result = false; 
$variables = json_decode(file_get_contents('php://input'));
//var_dump($variables);
if( $variables ){
    $username = empty($variables->username) ? '' : htmlspecialchars($variables->username);
    $password = empty($variables->password) ? '' : htmlspecialchars($variables->password);
}


$result = true ;
if( $result ){
    $user = array(
        'id' => '1',
        'username' => $username,
        'password' => 'password',
        'token' => '12321312',
        'logged' => false
    );
}
else{
    $user = false;
}

echo json_encode($user);
die();
?>