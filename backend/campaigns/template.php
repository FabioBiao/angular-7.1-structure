<?php

/** * Class Template - class for rendering PHP templates */

//Parent directory
$path = dirname(__DIR__);

//Include TWIG autoloader
require $path . "/campaigns/vendor/autoload.php";

class Template
{
    public $country;
    public $campaignName;

    public function __construct($country, $campaignName)
    {
        $this->country = $country;
        $this->campaignName = $campaignName;
    }

    /*--------------------------------------------------------
     * FUNCTIONS TO BUILD HTML + CSS based on $templateLayoutType
     * - HTML BLOCKS
     * - Default CSS + Configured CSS + CustomCss
     *-------------------------------------------------------*/

    public function renderCampaign( $layout , $cssCode)
    {
        $result = array(
            'success' => true,
            'result' => 'Campanha gerada com sucesso'
        );

        $target_dir = '../ads/' . $this->country . '/' . $this->campaignName;
       
        //create dynamic HTML file
        try {
            $fp = fopen( $target_dir . '/index.php', "w"); // create file if it doesnt exists
            fwrite($fp, $layout);
            fclose($fp);

            $result['success'] = true;
            $result['result'] = 'success';
        }
        catch (Exception $e) {
            $result['success'] = false;
            $result['result'] = 'PROBLEMS CREATING FILE: ' . $e;
            echo json_encode($result); 
            die();
        }

        echo json_encode($result); 
    }

    public function renderLayout(){
        $data = $this->getCampaignData();

        try{
        // specify where to look for templates
        $loader = new Twig_Loader_Filesystem('../ads/' . $this->country . '/' . $this->campaignName . '/');

        // initialize Twig environment
        $twig = new Twig_Environment($loader);

        // load template
        $template = $twig->loadTemplate('index_render.php');

        // set template variables
        $body = $template->render(
            array(
                'teste' => 'twig funcionar',
                'teste2' => '{{message}}'
            ));        
        }
        catch(Exception $e) {
            $result['success'] = false;
            $result['result'] = 'PROBLEMS CREATING FILE: ' . $e;
            echo json_encode($result); 
            die();
        }

        return $body;
    }

    private function getCampaignData()
    {
        return '';
    }

    public function getCampaignCss()
    {
        $target_dir = '../ads/' . $this->country . '/' . $this->campaignName;

        $cssFile = file_get_contents($target_dir . '/main.css');

        return $cssFile;
    }

}

