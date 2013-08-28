<?php

defined('AJXP_EXEC') or die('Access not allowed');

class Islandora extends AJXP_Plugin{

  public function switchAction($action, $httpVars, $fileVars) {
    AJXP_XMLWriter::sendMessage("Successfully islandora ingest", null);
  }
}