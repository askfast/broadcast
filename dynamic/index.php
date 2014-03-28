<?php 
session_start();
if(isset($_REQUEST['code']))
{
	
    $_SESSION['accessToken'] = get_oauth2_token($_REQUEST['code']);
	//echo "token===". $_SESSION['accessToken'];exit;
}

function get_oauth2_token($code) 
{
	
    $client_id = "25458264830-p07df80e2o9o9p956edhniflent44gbr.apps.googleusercontent.com"; //your client id
	$client_secret = "TFZ5W4Kk0augFlOVPnfUUU58"; //your client secret
	$redirect_uri = "http://broadcast.ask-fast.com/product/dynamic/index.php";
     
    $oauth2token_url = "https://accounts.google.com/o/oauth2/token";
    $clienttoken_post = array(
    "code" => $code,
    "client_id" => $client_id,
    "client_secret" => $client_secret,
    "redirect_uri" => $redirect_uri,
    "grant_type" => "authorization_code"
    );
     
    $curl = curl_init($oauth2token_url);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $clienttoken_post);
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_ANY);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
 
    $json_response = curl_exec($curl);
    curl_close($curl);
 
    $authObj = json_decode($json_response);
     
    if (isset($authObj->refresh_token)){
        global $refreshToken;
        $refreshToken = $authObj->refresh_token;
    }
               
    $accessToken = $authObj->access_token;
    return $accessToken;
}
if(isset($_SESSION['uname'])){
	include ("home.php");
}
else {
	
	include ("user_login.php");
}
?>
