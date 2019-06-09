<?php

// http://backoffice-cg-backend/campaigns/index.php?c=uae&n=testes123

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

    //call campaign index to generate the file

    $live_url = 'backoffice-cg-backend'; //http://backoffice-cg-backend/campaigns/index.php?c=uae&n=testes123

    // Curl Call Setup
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_URL, $live_url . '/campaigns/index.php?c=' . $country . '&n=' . $campaignName);
    curl_setopt($ch, CURLOPT_PUT, 1);
    // Execute Call
    $server_output = curl_exec($ch); 
    // Close curl
    curl_close($ch);

    $server_output = json_decode($server_output);
var_dump($server_output);
    $result['success'] = $server_output->success;
    $result['result'] = $server_output->result;
} else {
    $result['result'] = 'no variables selected';
}



echo json_encode($result);
die();

?>