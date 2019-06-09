<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');


$result = array(
    'success' => false,
    'result' => '',
    'data' => ''
);
$variables = json_decode(file_get_contents('php://input'));

if( $variables ){
    $country = empty($variables->country) ? '' : htmlspecialchars($variables->country);
    $name = empty($variables->name) ? '' : htmlspecialchars($variables->name);
    $cssField = empty($variables->cssField) ? '' : htmlspecialchars($variables->cssField);

    $data = array(
        'country' => $country,
        'name' => $name
    );

    // Path to the directory where you want to store the campaign file.
    $target_dir = '../ads/';
    $target_file = $target_dir . $country . '/';

    if ( file_exists($target_file) ) {
        $target_ad = $target_dir . $country . '/' . $name;
        if ( file_exists($target_ad) ) {
            $result['success'] = false;
            $result['result'] = 'Campanha já existe.';
        }
        else{
            mkdir( $target_ad, 777, true );
            
            // if campaign created, lets ad the campaign folders
            if( file_exists($target_ad) ){
                $files_destination = $target_ad ;

                //adding css file
                $fp = fopen( $target_ad  .'/main.css', "w"); // create file if it doesnt exists
                fwrite($fp, $cssField);
                fclose($fp);

                //adding config.json file
                $jsonContent = json_encode($data);
                $fp = fopen( $target_ad  .'/config.json', "w"); // create file if it doesnt exists
                fwrite($fp, $jsonContent);
                fclose($fp);
                
                //adding images to images folder .. or maybe on edit only???

                $result['success'] = true;
                $result['result'] = 'Campanha criada com sucesso';
            }
            else{
                $result['success'] = false;
                $result['result'] = 'Campaign not found';
            }

        }
    }
    else{
        $result['success'] = false;
        $result['result'] = 'País inválido';
    }
}
echo json_encode($result);
die();
?>