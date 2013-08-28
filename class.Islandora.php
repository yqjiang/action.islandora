<?php

defined('AJXP_EXEC') or die('Access not allowed');

class Islandora extends AJXP_Plugin{

  public function switchAction($action, $httpVars, $fileVars) {
    echo("hello");
  }
}