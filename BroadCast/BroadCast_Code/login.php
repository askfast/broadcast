<?php
	session_start();

	$userid  = $_POST['userid'];
	$uname  = $_POST['uname'];
	$pass  = $_POST['pass'];
	$check_ok  = $_POST['check_no'];
	
	
	$_SESSION['userid'] =  $userid;
	$_SESSION['uname'] =  $uname;
	//if($check_ok == 1){
	//$weak = time() + 604800;
	//setcookie('remember_me_user', $_POST['uname'], $weak); 
	//setcookie('remember_me', $_POST['pass'], $weak);
	//}
		
?>