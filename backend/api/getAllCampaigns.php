<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');


$result = array(
    'success' => false,
    'result' => '',
    'data' => ''
);

$variables = json_decode(file_get_contents('php://input'));

if ($variables) {
    $country = empty($variables->country) ? '' : htmlspecialchars($variables->country);
}
$target_dir = '../ads/' . $country ;
$dirs = array();

// directory handle
foreach(glob($target_dir .'/*', GLOB_ONLYDIR) as $dir) {
    $dirs[] = basename($dir);
}

if( $dirs != [] ){
    $result['success'] = true;
    $result['data'] = $dirs;
}
else{
    $result['success'] = false;
    $result['data'] = '';
}

echo json_encode($result);
die();
?>