<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="">
<meta name="author" content="">
<link rel="shortcut icon" href="../../assets/ico/favicon.png">
<title>Broad Cast</title>
<link href="css/starter-templateold.css" rel="stylesheet" type="text/css">
<!-- Bootstrap core CSS -->
<link href="css/bootstrap.css" rel="stylesheet" type="text/css">
<link href="css/starter-template.css?v=1.2" rel="stylesheet" type="text/css">
<link href="css/general.css?v=1.2" rel="stylesheet" type="text/css">
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="http://crypto-js.googlecode.com/svn/tags/3.0.2/build/rollups/md5.js"></script>
<script type="text/javascript" src="js/registerAccountScript.js"></script>

</head>
<body>
<!--====================== Header Starts==========================-->
<div class="col-md-12">
  <div class="logo"> <a href="#"><img src="images/logo_img.png" alt=""></a> </div>
</div>
<!--====================== Header Ends==========================-->
<div class="container tab-pane">
  <!--================ row_1_start ===============-->
  <div class="row">
        <div id="loginPage">
            <div class="col-md-12">
              <div class="login">
                <div class="heading">
                  <div class="log">
                    <h1>LOGIN</h1>
                  </div>
                  <div class="regester">
                    <h3><a href="javascript:" onClick="registerAccount();">Register an account</a></h3>
                  </div>
                  <div class="clear"></div>
                </div>
                <div class="blue-box">
                  <!--<form name="" action="" method="post">-->
                  <div class="user-name"> <span>User Name:</span>
                    <input class="login-filed" type="text" id="uname" name="username" value="<?php echo $_COOKIE['remember_me_user']; ?>">
                    <div class="clear"></div>
                  </div>
                  <div class="user-name"> <span>Password:</span>
                    <input class="login-filed" id="pass" type="password" name="password" value="<?php echo $_COOKIE['remember_me']; ?>">
                    <div class="clear"></div>
                  </div>
                  <div class="user-name"> <span></span>
                  <input class="checkbox123" id="remember" type="checkbox" name="remember" >
                    <span class="remmember"> Remember me</span>
                    <div class="clear"></div>
                  </div>
                  <div class="fogot1">
                    <div class="login1234">
                      <input class="login-buttan" type="submit" name="btn_login" onClick="return login()" value="Login">
                    </div>
                    <!--</form>-->
                    <div class="fogot123"> <a href="javascript:" onClick="forgetPassword();">forgot your password?</a> </div>
                    <div class="clear"></div>
                  </div>
                  <div class="clear"></div>
                </div>
                <div class="red-box" id="wrong_pass_msg" style=" display:none;"> <i>Invalid password or username, please try it again.</i>
                  <div class="clear"></div>
                </div>
                <div class="gray-box" id="empty_field" style=" display:none;"> <i>Input Username & Password,  please try it again.</i>
                  <div class="clear"></div>
                </div>
                <div class="green-box" id="success_msg" style=" display:none;"> <i>You are successfully login,</i>
                  <div class="clear"></div>
                </div>
              </div>
            </div>
         </div>
        <div id="registerOne" style="display:none;">
			<div class="col-md-12">
				<div class="login">
					<div class="heading">
						<div class="log_002">
							<h1>REGISTER</h1>
						</div>
						<div class="regester">
							<h3><a href="javascript:" onClick="backTologinp();">Login</a></h3>
						</div>
					<div class="clear"></div>
					</div>
					<div class="blue-box">
						<div class="inner-login-fild_001">
							<span>First Name:</span>
							<input class="inner-login-fild1-manual" type="text" value="">
							<div class="clear"></div>
							<span>Last Name:</span>
							<input class="inner-login-fild1-manual" type="text" value="">
							<div class="clear"></div>
							<span>Email:</span>
							<input class="inner-login-fild1-manual" type="text" value="">
							<div class="clear"></div>
							<span>Password:</span>
							<input class="inner-login-fild1-manual" type="text" value="">
							<div class="clear"></div>
							<span>Retype password:</span>
							<input class="inner-login-fild1-manual" type="text" value="">
							<div class="clear"></div>
							<div class="agree_001">
								<input type="checkbox" type="checkbox">
								<div class="agree_001_text">
									<span>I agree to the <a href="#">Terms of Services </a> and <a href="#"> Privacy policy</a></span>
								</div>
							<div class="clear"></div>
							</div>
						</div>
						
						<div class="fogot1">
							<div class="login1234">
								<input class="login-buttan" type="button" value="Register" onClick="rstepOne()">
							</div>
						<div class="clear"></div>
						</div>
						
					<div class="clear"></div>
					</div>
				</div>		
			</div>
         </div>
         <div id="registerTwo" style="display:none;">
			<div class="col-md-12">
				<div class="login">
					<div class="heading">
						<div class="log_003">
							<h1>REGISTER</h1>
						</div>
						<div class="regester">
							<h3><a href="javascript:" onClick="backTologinp();">Login</a></h3>
						</div>
					<div class="clear"></div>
					</div>
					<div class="blue-box">
						<div class="forget_box">
							<div class="forget_inner">
								<div class="forget_left"><img src="images/mobile_001.png" alt=""></div>
								<div class="forget_right_001">
									<h1>We need to Verify that you are a human.</h1>
									<p>For Protecing our service and you from any spamming attempts.</p>
								</div>
							<div class="clear"></div>
							</div>
							<div class="forget-name_001">
								<span>Phone number:</span>
								<input class="login-filed" type="text" value="">
							<div class="clear"></div>
							</div>
							
						<div class="clear"></div>
						</div>
						
						
						<div class="fogot1">
							<div class="login1234">
								<input class="login-buttan" type="button" value="Send verification code" onClick="rstepTwo()">
							</div>
						<div class="clear"></div>
						</div>
					<div class="clear"></div>
					</div>
				</div>		
			</div>
         </div>
         <div id="registerThree" style="display:none;">
			<div class="col-md-12">
				<div class="login">
					<div class="heading">
						<div class="log_001">
							<h1>REGISTER</h1>
						</div>
						<div class="regester">
							<h3><a href="javascript:" onClick="backTologinp();">Login</a></h3>
						</div>
					<div class="clear"></div>
					</div>
					<div class="blue-box">
						<div class="forget_box">
							<div class="forget_inner">
								<div class="forget_left"><img src="images/mobile_001.png" alt=""></div>
								<div class="forget_right_001">
									<h1>We send you a verification SMS to +31 614370123.</h1>
								</div>
							<div class="clear"></div>
							</div>
							<div class="forget-name_001">
								<span>Verification code:</span>
								<input class="login-filed" type="text" value="">
							<div class="clear"></div>
							</div>
							
						<div class="clear"></div>
						</div>
						
						
						<div class="fogot1">
							<div class="login1234">
								<input type="button" value="Verify" class="login-buttan">
							</div>
							<div class="fogot123">
								<a href="#">Resend the code</a>
							</div>
						<div class="clear"></div>
						</div>
					<div class="clear"></div>
					</div>
				</div>		
			</div>
         </div>
         <div id="forgetPassword" style="display:none;">
			<div class="col-md-12">
				<div class="login">
					<div class="heading">
						<div class="log">
							<h1>REGISTER</h1>
						</div>
						<div class="regester">
							<h3><a href="javascript:" onClick="backTologinp();">Login</a></h3>
						</div>
					<div class="clear"></div>
					</div>
					<div class="blue-box">
						<div class="forget_box">
							<div class="forget_inner">
								<div class="forget_left"><img src="images/forget_001.png" alt=""></div>
								<div class="forget_right_001">
									<h1>Forget Your Password?</h1>
									<p>Please type the e-mail you registered to Broadcast. We will email a code in a few seconds.</p>
								</div>
							<div class="clear"></div>
							</div>
							<div class="forget-name_001">
								<span>Enter your email address:</span>
								<input class="login-filed" type="text" value="">
							<div class="clear"></div>
							</div>
							
						<div class="clear"></div>
						</div>
						
						
						<div class="fogot1">
							<div class="login1234">
								<input class="login-buttan" type="button" value="Send E-mail">
							</div>
						<div class="clear"></div>
						</div>
					<div class="clear"></div>
					</div>
				</div>		
			</div>
         </div>
    </div>
    
  </div>
</div>
</body>
</html>
