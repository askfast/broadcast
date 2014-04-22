// JavaScript Document

function forgetPassword()
{
	$('#loginPage').hide();
	$('#registerOne').hide();
	$('#registerTwo').hide();
	$('#registerThree').hide();
	$('#loginPage').hide();
	$('#forgetPassword').show();
}

function registerAccount()
{
	$('#loginPage').hide();
	$('#registerOne').show();
}

function rstepOne()
{
	$('#loginPage').hide();
	$('#registerOne').hide();
	$('#registerTwo').show();
}

function rstepTwo()
{
	$('#loginPage').hide();
	$('#registerOne').hide();
	$('#registerTwo').hide();
	$('#registerThree').show();
}

function backTologinp()
{
	$('#loginPage').hide();
	$('#registerOne').hide();
	$('#registerTwo').hide();
	$('#registerThree').hide();
	$('#forgetPassword').hide();
	$('#loginPage').show();
}

//enabling enter key for login
$(document).ready(function(){
	$(document).keypress(function(e) {
			if(e.which == 13) 
				{
					login();
				}
	});
  
});


function login(){
		var hostname = document.location.hostname;
		var uname=document.getElementById("uname").value;
		var pass=document.getElementById("pass").value;
		var passhash = CryptoJS.MD5(pass).toString();
		var check_no = 0;
		var remember=document.getElementById("remember").value;
		
		if($('#remember').is(":checked"))
			{
				check_no = 1;
			}
			
		if(uname == '' && pass == '' || uname != uname && pass != pass )
			{
				$('#wrong_pass_msg').hide(1000);
				$('#uname').val('');
				$('#pass').val('');
				$('#empty_field').show(2000);
			}
			
		 if(uname!='yasir'||pass!='broadcasttest')
			{
				if(uname != '' || pass != '' )
				{
					$('#uname').val('');
					$('#pass').val('');
					$('#empty_field').hide(1000);
					$('#wrong_pass_msg').show(1000);
				}
			
			}
					
			
		url="http://askfastmarket.appspot.com/login?username="+uname+"&password="+passhash;
		
		if(uname != '' && pass != '')
		{
		$.ajax({	
					type: "GET",
					contentType: "application/json",
					dataType: 'json', 
					beforeSend : function(xhr) {          
					xhr.setRequestHeader("X-SESSION_ID" , '')
		 		},
					
					url : url,
					crossDomain: true,
					xhrFields: {
					withCredentials: true
					},
					
					success: function (session) {
						var jasonValue = JSON.stringify(session) ; 
						var n=jasonValue.replace('{"X-SESSION_ID":"',"");
						var id=n.replace('"}',"");
						
				url="login.php";
				$.post(url,{userid:id,uname:uname,password:passhash,check_no:check_no},function(responce){

				window.location='http://broadcast.ask-fast.com/product/dynamic/home.php';


				})
					},
					error: function (data){
						alert(data.responseJSON.status);
					}
			});
		}
		
}


    
	