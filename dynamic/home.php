<?php 

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: *');

	if(!isset($_SESSION['uname'])){
		header("location:index.php");
	}
	else {
		$session_user = $_SESSION['uname'];
		$session_id = $_SESSION['userid'];
	}
?>
<?php
if(isset($_SESSION['accessToken']))
{
	$token1=$_SESSION['accessToken'];?>
	Gmail_Contacts_Info1("<?php echo $token1; ?>");
	<?php
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="">
<meta name="author" content="">
<link rel="shortcut icon" href="../../assets/ico/favicon.png">
<link rel="stylesheet" href="css/general.css?v=1.2" type="text/css" media="screen" />
<link rel="stylesheet" type="text/css" href="css/style.css" />
		
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.8.0.min.js"></script>
<script type="text/javascript" src="js/lightbox.js?v=1.2"></script>
<script type="text/javascript" src="js/BroadcastCommonScript.js"></script>


<title>Broad Cast</title>
<!-- Bootstrap core CSS -->
<link href="css/bootstrap.css" rel="stylesheet" type="text/css">
<link href="css/starter-template.css?v=1.2" rel="stylesheet" type="text/css">

</head>
<body>



<div id="main">
  <!--====================== Header Starts==========================-->
  <div class="col-md-12">
    <div class="logo"> <a href="#"><img src="images/logo_img.png" alt=""></a> </div>
  	<div class="pull-right">
    

 <div class="btn-group login_logout">
    <a class="btn btn-primary" href="#"><span class="glyphicon glyphicon-user" style="text-align:left; display:inline-block; float:none;"></span>Hi, <?php echo $session_user; ?></a>
    <a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>
    
    <ul class="lftg dropdown-menu">
    
    
    <li><a href="javascript:" onClick="accountDetails();"><span class="glyphicon glyphicon-list-alt" style="text-align:left; display:inline-block; float:none;"></span> Account Details</a></li>
    <li><a href="javascript:" onClick="accountSettings();"><span class="glyphicon glyphicon-wrench"></span>Account Settings</a></li>
    <li><a href="javascript:" onClick="logout();"><span class="glyphicon glyphicon-off" style="text-align:left; display:inline-block; float:none;"></span>Sign Out</a></li>
    
    </ul>
    
    </div>
    
    </div>
  </div>
  <!--====================== Header Ends==========================-->
  <div class="tab-content" id="myTabContent">
    <!--================ container_1_start ===============-->
    <?php include ("NewBroadcastDesign.php"); ?>
    <!---=========================row2=====================-->
    <?php include ("BroadcastsDesign.php"); ?>
    <!--================ row_1_End ===============-->
    <?php include ("ReportsDesign.php"); ?>
        
         </div>
    <!--</form>	-->
    <!---=========================row3=====================-->
    <!---=========================row6=====================-->
	<input type="hidden" id="beforeEditname" />
    <input type="hidden" id="beforeEditemail" />
    <input type="hidden" id="beforeEditaddress" />
    <div id="word6" class="container  tab-pane" style="display:none;">
      <form action="" method="post">
        <!--================ row_1_start ===============-->
        <div class="row" >
          <div class="col-md-12" >
            <div class="contact"  id="btn_show">
              <h1 style=" color:#000; width:100%;">Hi, <?php echo $session_user; ?> </h1>
              <br>
              <h1>Groups</h1>
              <span style="padding-left:10px;">
              <input  class="add" type="button"  onClick="logout()" value="Logout">
              </span> <span>
              <input id="np" class="add" type="button"  onClick="showadd()" value="Add a Group">
              </span>
              <div class="clear"></div>
            </div>
            <div class="box"> <span>Group Name</span><span>Reaching Media</span><span>Keywords</span><span>Actions</span>
              <div class="clear"></div>
            </div>
            <div class="contact-name" id="contact-name">
              <div class="clear"></div>
            </div>
          </div>
        </div>
        <!--================ row_1_End ===============-->
        <div class="row" >
          <div id="add" style="display:none;" class="col-md-12">
            <div class="contact"> <span>
              <input class="add" type="button" onClick="addgrp()" value="Add a Group">
              </span>
              <div class="clear"></div>
            </div>
            <div class="u17" id="add_btn_hide"> <img src="images/image_u17.png" alt="" /> </div>
            <div class="shortage123">
              <div class="shortage">
                <h3>Ahmet Bektes</h3>
                <p>Shortags</p>
                <input class="work" type="button" value="Work">
                <input class="work" type="button" value="Sportcenter">
                <img src="images/u167.png" alt="" />
                <div class="clear"></div>
              </div>
              <div class="mobile"> <span>
                <p>Group Name:</p>
                <input class="mobile123" id="gpname" name="gpname" type="text" value="">
                </span> <span class="u167"><img src="images/u167.png" alt="" /></span>
                <div class="clear"></div>
                <span>
                <p>Contact_1:</p>
                <input class="mobile123" id="ctn_1" name="ctn_1" type="text" value="">
                </span>
                <div class="clear"></div>
                <span>
                <p>Contact_2:</p>
                <input class="mobile123" id="ctn_2" name="ctn_2" type="text" value="">
                </span>
                <div class="clear"></div>
                <span>
                <p>Contact_3:</p>
                <input class="mobile123" id="ctn_3" name="ctn_3" type="text" value="">
                </span>
                <div class="clear"></div>
                <span>
                <p>Contact_4:</p>
                <input class="mobile123" id="ctn_4" name="ctn_4" type="text" value="">
                </span>
                <div class="clear"></div>
                <span>
                <p>Contact_5:</p>
                <input class="mobile123" id="ctn_5" name="ctn_5" type="text" value="">
                </span>
                <div class="clear"></div>
                <div class="clear"></div>
              </div>
              <div class="fb-icon"> <a href="#"><img src="images/u41.png" alt="" /></a> <a href="#"><img src="images/u43.png.ico" alt="" /></a> <a href="#"><img src="images/u45.png" alt="" /></a> </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <!---=========================row6=====================-->
	<div id="google_login" style="display:none"></div>
    <!---=========================row5=====================-->
    <?php include ("ContactbookDesign.php"); ?>
    <!---=========================row5=====================-->
    <!--<div id="word4" class="container tab-pane">
      
        <div class="row">
            <div class="reports1" style="display:none"> </div>
          </div>
        </div>-->
      
    </div>
    <!---=========================row4=====================-->
  </div>
  <!-- /.container -->
  <!--================ container_1_End ===============-->
  <div class="left_icon">
    <ul>
      <li><a  data-toggle="tab" href="#word"><img src="images/active_img.png" height="100%" onClick="word_1()" width="100%" alt="new"></a></li>
      <li><a data-toggle="tab" href="#word2"><img src="images/broadcast.png" height="100%" onClick="loadingBroadcasts()" width="100%" alt="new"></a></li>
      <li class="clk"><a data-toggle="tab" href="#word5"><img src="images/coctactbook.png" onClick="showcnt1()" height="100%" width="100%" alt="new"></a> </li>
      <li><a data-toggle="tab" href="#word4"><img src="images/report.png" height="100%" onClick="word_4()" width="100%" alt="new"></a></li>
    </ul>
    <div class="clear"></div>
  </div>
  
  <div id="popupContact" class="popupContactJournal" style="z-index:9000;display:none;">
    <div class="container tab-pane" style="padding-left: 17px !important;">
      <form action="" method="post">
        <!--================ row_1_start ===============-->
        <div class="row">
          <div class="col-md-12">
            <div class="login-page-manual">
              <div class="inner-login-manual">
                <div class="top-heading-manual">
                  <div class="heading-manual">
                    <h1>MANUAL ENTRY INDIVIDUAL</h1>
                  </div>
                  <a id="popupContactClose">
                  <div class="close12345-manual"> <img src="images/u36.png.ico" alt=""> </div>
                  </a>
                  <div class="clear"></div>
                </div>
                <div class="login-page-inner-manual">
                  <div class="inner-login-img-manual"> <img src="images/manual-img.png" alt=""> </div>
                  <div class="inner-login-fild-manual"> <span>Name:</span>
                    <input class="inner-login-fild1-manual" type="text" id="fr_name" name="fr_name" value="" maxlength="20" onkeypress="return isCharKey(event)">
                    <span class="plus-manual">&nbsp;</span>
                    <div class="clear"></div>
                    <span>Surname:</span>
                    <input class="inner-login-fild1-manual" id="srname" name="srname" type="text" value="" maxlength="20" onkeypress="return isCharKey(event)">
                    <span class="plus-manual">&nbsp;</span>
                    <div class="clear"></div>
                    <span>Mobile:</span>
                    <input class="inner-login-fild1-manual" type="text" id="mob" name="mob" value="" maxlength="20" onkeypress="return isNumberKey(event)" >
                    <span class="plus-manual"><img src="images/plus.png" alt=""></span>
                    <div class="clear"></div>
                    <span>Landline:</span>
                    <input class="inner-login-fild1-manual" type="text" id="ldnum" name="ldnum" value="" maxlength="20" onkeypress="return isNumberKey(event)">
                    <span class="plus-manual">&nbsp;</span>
                    <div class="clear"></div>
                    <span>E-mail:</span>
                    <input class="inner-login-fild1-manual" id="email_man" name="email_man" type="text" value="" maxlength="25" >
                    <span class="plus-manual"><img src="images/plus.png" alt=""></span>
                    <div class="clear"></div>
                    <span class="twttwt">Twitter Username:</span>
                    <input class="inner-login-fild1-manual" type="text" id="twtusername" name="tusername" value="" maxlength="20" >
                    <span>Notes:</span>
                    <input class="inner-login-fild1-manual" type="text" id="Notes" name="Notes" value="" maxlength="40" >
                    <span class="plus-manual">&nbsp;</span>
                    <div class="clear"></div>
                    <div class="add-contact1-manual">
                      <input class="add-contact-manual" id="add_contant" type="button" onClick="addcnt2();"  value="Add Contact">
                      <div class="clear"></div>
                    </div>
                  </div>
                  <div class="clear"></div>
                </div>
              </div>
              <div class="clear"></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  
    <div id="popupContact4" class="popupContactJournal" style="z-index:9000;display:none;">
        <div class="container tab-pane" style="padding-left: 17px !important;">
            <div class="row">
                <div class="col-md-12">
                
                <div class="login-page-manual">
					<div class="inner-login-manual" style="padding: 0 20px;width: 700px;">
						<div class="top-heading-manual" style="padding: 0 0 10px;">
							<div class="heading-manual">
								<h1>ACCOUNT SETTINGS</h1>
							</div>
                            <a id="popupContactClose4">
							<div class="close12345-manual" style="float: right;padding: 25px 0px 0;">
								<img src="images/u36.png.ico" alt="">
							</div>
                            </a>
						<div class="clear"></div>
						</div>
						<div class="account-setting">
							<div class="account-setting1">
								<p>Password:</p>
								<input class="account-setting1-input" type="password" placeholder="********************">
							</div>
							<div class="account-setting2">
								<a href="#">Change Password</a>
							</div>
						<div class="clear"></div>
						</div>
						
						<div class="account-setting12">
							<div class="account-setting112">
								<p>Credits:</p>
								<input class="account-setting1-input" type="text" placeholder="15.00 EUR">
							</div>
							<div class="account-setting2">
								<a href="#">Top up Credits</a>
							</div>
						<div class="clear"></div>
						</div>
						
					</div>
				<div class="clear"></div>
				</div>
                
                </div>
            </div>
        </div>
    </div>
    
    <div id="popupContact5" class="popupContactJournal" style="z-index:9000;display:none;">
        <div class="container tab-pane" style="padding-left: 17px !important;">
            <div class="row">
                <div class="col-md-12">
                
                <div class="login-page-manual">
					<div class="inner-login-manual" style="padding: 0 20px;width: 700px;">
						<div class="top-heading-manual" style="padding: 0 0 10px;">
							<div class="heading-manual">
								<h1>ACCOUNT DETAILS</h1>
							</div>
                            <a id="popupContactClose5">
							<div class="close12345-manual" style="float: right;padding: 25px 0px 0;">
								<img src="images/u36.png.ico" alt="">
							</div>
                            </a>
						<div class="clear"></div>
						</div>
						<div class="account-details-inner">
							<div class="account-details-inner1">
								<p>Name:</p>
								<input class="account-setting1-input" id="accDetName" type="text" placeholder="Ahmet Bektes" readonly>
							</div>
							<div class="account-details-inner1">
								<p>Email:</p>
								<input class="account-setting1-input" id="accDetEmail" type="text" placeholder="abektes@ask-cs.com" readonly>
							</div>
							<div class="account-details-inner1">
								<p>Address:</p>
								<input class="account-setting1-input" id="accDetAddress" type="text" placeholder="Coolhaven, Rotterdam" readonly>
							</div>
							<div id="accDetedit" class="account-setting2">
								<a href="javascript:" onClick="editAccountDetails1();">Edit</a>
							</div>
                            <div id="accDetsave" class="account-setting2" style="display:none">
								<a href="javascript:" onClick="editAccountDetails();">Save</a>
							</div>
						<div class="clear"></div>
						</div>
						
						
						
					</div>
				<div class="clear"></div>
				</div>
                
                </div>
            </div>
        </div>
    </div>
  
  
  <div id="popupContact6" class="popupContactJournal" style="z-index:9000;display:none;">
    <div class="container tab-pane" style="padding-left: 17px !important;">
        <!--================ row_1_start ===============-->
        <div class="row">
          <div class="col-md-12">
          <div class="login-page-manual">
					<div class="inner-login123456-manual">
						<div class="top-heading-manual">
							<div class="heading-manual">
								<h1>UPLOAD FROM CSV FILE</h1>
							</div>
							<a id="popupContactClose6">
							<div class="close123456-manual">
								<img src="images/u36.png.ico" alt="">
							</div>
							</a>
						<div class="clear"></div>
						</div>
						<div class="upload">
							<div class="speed-upload">
								<p>You can speed up adding contact action by using csv format files. Please indicate which csv files format do you have?</p>
							</div>
							<div class="speed-upload1">
								<div class="speed-upload123 active123">
								 <a href="#"><img src="images/upload1.png" alt=""></a>
								</div>
								<div class="speed-upload1231 active1231">
								 <a href="#"><img src="images/upload2.png" alt=""></a>
								</div>
								<div class="speed-upload1232 active1232">
								 <a href="#"><img src="images/upload3.png" alt=""></a>
								</div>
								<div class="speed-upload1233 active1233">
								 <a href="javascript:" onClick="fileup();"><u>advanced csv options</u></a>
								</div>
							   <div class="clear"></div>
							   </div>
							<div id="add_contect_btn" class="upload-butan">
									<input class="upload1-butan" type="submit" value="Add Contact">
								<div class="clear"></div>
								</div>
						<div class="clear"></div>
						</div>
						<div id="uploading_hed" class="uploadin10">
							<p class="uploadin101">uploading</p>
							<p>Our system found 123 individual contact entry in this file.<br>All of them added to your contactbook.</p>
						</div>
						<div id="status_bar" class="uploadin10" style="display:none;">
							<p class="uploadin101">uploading. 10%</p>
						</div>
						
						<div id="disply_fileform" class="upload" style="display:none;">
							<div class="speed-upload1">
								<p>We are also supporting customized csv format.<br>Please enter value head before start uploading.</p>
							</div>
							<div class="upload-fild1">
								<span>Name:</span>
								<input class="upload-fild123" type="text" value=""  onkeypress="return isCharKey(event)">
								<div class="clear"></div>
								<span>Surname:</span>
								<input class="upload-fild123" type="text" value=""  onkeypress="return isCharKey(event)">
								<div class="clear"></div>
								<span>Mobile:</span>
								<input class="upload-fild123" type="text" value="" onKeyPress="return isNumberKey(event)">
								<div class="clear"></div>
								<span>Landline:</span>
								<input class="upload-fild123" type="text" value=""  onkeypress="return isNumberKey(event)">
								<div class="clear"></div>
								<span>E-mail:</span>
								<input class="upload-fild123" type="text" value="">
								<div class="clear"></div>
							</div>
						<div class="clear"></div>
						
						</div>
						<div id="open_addcontact" class="upload-butan">
									<input class="upload1-butan" type="submit" value="Add Contact">
								<div class="clear"></div>
								</div>
					</div>
				<div class="clear"></div>
				</div>	
          </div>
        </div>
     </div>
  </div>
  
  
  
  
  <div id="popupContact2" class="popupContactJournal" style="z-index:9000;display:none;">
    <div class="container tab-pane" style="padding-left: 17px !important;">
      <form action="" method="post">
        <!--================ row_1_start ===============-->
        <div class="row">
          <div class="col-md-12">
          
          
          <div class="manual-popup">
		<div class="manual-entery12345">
			<div class="manual-heading">
				<h2>Create a new group</h2>
			</div>
            <a id="popupContactClose2">
			<div class="dell-buttan">
				<img src="images/u36.png.ico" alt="" />
			</div>
            </a>
		<div class="clear"></div>
		</div>
		<div class="group-name-area">
			<form>
				<div class="group-name" >
					<input class="groupname" type="text" placeholder="group name" id="group_name" />
				</div>
				<div class="group-name-buttan">
					<input class="group-name-buttan123" type="button" value="Create Group" onClick="addgrp1();" />
				</div>
			</form>
		</div>
	<div class="clear"></div>
	</div>
    
    
             
          </div>
        </div>
      </form>
    </div>
  </div>
  <div id="popupContact3" class="popupContactJournal" style="z-index:9000;display:none; left: 164.5px;">
    <div class="container tab-pane" style="padding-left: 0 !important;">



	



		<!--================ row_1_start ===============-->




		<div class="row">

			
            <!--<div class="top-heading-manual">
                  <div class="heading-manual">
                    <h1>MANUAL ENTRY INDIVIDUAL</h1>
                  </div>
                  <a id="popupContactClose">
                  <div class="close12345-manual"> <img src="images/u36.png.ico" alt=""> </div>
                  </a>
                  <div class="clear"></div>
                </div>-->
            
            
            
            

			<div class="col-md-12">
             <div class="adgrpcnt">
             	<div class="bothhc" id="line" style="display:none;">
             	  <div class="heading-manual_001">
                    <h1 id="forAdd" style="display:none;">Add selected individuals into group</h1>
                    <h1 id="forRem" style="display:none;">Remove selected individuals from group</h1>
                  </div>
                  <a id="popupContactClose3">
                  <div class="close12345-manual111"> <img src="images/u36.png.ico" alt=""> </div>
                  </a>
                  <div class="clear"></div>
                </div>
                  <div class="clear"></div>
                 <div id="adgrpcntid">
                 </div>
                 <!--<div class="group-name-buttan11111111" id="addmmbid" style="display:none;">
					<input class="group-name-buttan123" type="button" value="Add members" onClick="add_member()" />
				</div>-->
        	</div>
  
        
				
                
                	
			</div>
			
			
		</div>
		
		
		
	
	
	
	
	</div>
    </div>
  
  <div id="background_load" class="background-loader bck-color" style="display:none"  > </div>
  <!-- Bootstrap core JavaScript



    ================================================== -->
  <!-- Placed at the end of the document so the pages load faster -->
<script src="js/jquery.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/tab.js"></script>
  <script src="js/file.js"></script>
  <script src="js/limit.js"></script>
  <script src="js/jquery.numeric.js"></script>
<script>

$( document ).ready(function() 

{

	
$('input[type=file]').bootstrapFileInput();
$('.file-inputs').bootstrapFileInput();	
	
var text_max = 450;
		$('#textarea_feedback').html(text_max + '/450');
		$('#textarea').keyup(function() {
			var text_length = $('#textarea').val().length;
			var text_remaining = text_max - text_length;
			$('#textarea_feedback').html(text_remaining + '/450');
		});
		
		
		
});	



	var d = document;
    var safari = (navigator.userAgent.toLowerCase().indexOf('safari') != -1) ? true : false;
    var gebtn = function(parEl,child) { return parEl.getElementsByTagName(child); };
    onload = function() {
        
        var body = gebtn(d,'body')[0];
        body.className = body.className && body.className != '' ? body.className + ' has-js' : 'has-js';
        
        if (!d.getElementById || !d.createTextNode) return;
        var ls = gebtn(d,'label');
        for (var i = 0; i < ls.length; i++) {
            var l = ls[i];
            if (l.className.indexOf('label_') == -1) continue;
            var inp = gebtn(l,'input')[0];
            if (l.className == 'label_check') {
                l.className = (safari && inp.checked == true || inp.checked) ? 'label_check c_on' : 'label_check c_off';
                l.onclick = check_it;
            };
            if (l.className == 'label_radio') {
                l.className = (safari && inp.checked == true || inp.checked) ? 'label_radio r_on' : 'label_radio r_off';
                l.onclick = turn_radio;
            };
        };
    };
    var check_it = function() {
        var inp = gebtn(this,'input')[0];
        if (this.className == 'label_check c_off' || (!safari && inp.checked)) {
            this.className = 'label_check c_on';
            if (safari) inp.click();
        } else {
            this.className = 'label_check c_off';
            if (safari) inp.click();
        };
    };
    var turn_radio = function() {
		//debugger
        var inp = gebtn(this,'input')[0];
        if (this.className == 'label_radio r_off' || inp.checked) {
            var ls = gebtn(this.parentNode,'label');
            for (var i = 0; i < ls.length; i++) {
                var l = ls[i];
                if (l.className.indexOf('label_radio') == -1)  continue;
                l.className = 'label_radio r_off';
            };
            this.className = 'label_radio r_on';
            if (safari) inp.click();
        } else {
            this.className = 'label_radio r_off';
            if (safari) inp.click();
        };
    };
	</script>

  
</div>
</body>
</html>
<div id="img_loading1" style="display:none"><img src="images/ajax-loader.gif" id="img_loading" class="loadimageUploadAjax2" /></div>
			
			<div id="broadcastsaved" class="sd12" style="display:none">Broadcast saved</div>
            <div id="broadcastcloned" style="display:none">Broadcast cloned</div>
            <div id="msgBroadcasted" class="sd12" style="display:none">Message Broadcasted</div>
            <div id="noMatch" style="display:none">No match found</div>
            
			
            
            
