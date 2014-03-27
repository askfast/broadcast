<?php

	$client_id = "25458264830-p07df80e2o9o9p956edhniflent44gbr.apps.googleusercontent.com"; //your client id
	$client_secret = "TFZ5W4Kk0augFlOVPnfUUU58"; //your client secret
	$redirect_uri = "http://www.techleadz.com/BroadCast/index.php";
	$scope = "http://www.google.com/m8/feeds"; //google scope to access
	
	$url = sprintf("https://accounts.google.com/o/oauth2/auth?scope=%s&state=%s&redirect_uri=%s&response_type=code&client_id=%s&access_type=%s", $scope, $state, $redirect_uri, $client_id, $access_type);
	
	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_POST, true);
	curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_ANY);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	$AskApache_result = curl_exec ($ch);
	curl_close($ch);
	echo $AskApache_result;


?>

