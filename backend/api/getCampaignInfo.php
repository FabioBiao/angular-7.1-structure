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
    $campaignName = empty($variables->campaignName) ? '' : htmlspecialchars($variables->campaignName);
}

if ($country != '' && $campaignName != '') {
    $target_dir = '../ads/' . $country . '/' . $campaignName;

    //get mainCss
    $mainCss = file_get_contents($target_dir . '/main.css');

    $result = array(
        'success' => true,
        'result' => '',
        'data' => array(
            'mainCss' => $mainCss
        )
    );
} else {
    $result['success'] = false;
    $result['result'] = 'País inválido';
}

echo json_encode($result);
die();
?>