<?php
include_once 'template.php';

/** Class to generate pages */

class App
{
    public $country;
    public $campaignName;

    public function __construct($country, $campaignName)
    {
        $this->country = $country;
        $this->campaignName = $campaignName;
    }

    public function run()
    {
        $template = new Template( $this->country, $this->campaignName );

        $template->renderCampaign(
            $template->renderLayout(),
            $template->getCampaignCss()
        );

    }

}

?>