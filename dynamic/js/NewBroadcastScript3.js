// JavaScript Document

// Twitter validations
function twitterVal(manualTwitter)
{
	if(manualTwitter=='')
		{
			if(document.getElementById("checkbox_5").checked == false)
				{
					document.getElementById("checkbox_5").checked = true;
				}
			alert("Twitter username cannot be empty");
			document.getElementById("mtwt").focus();
			if(document.getElementById("takeOneAction").value=="false")
				{
					$('#takeOneAction').val('');
				}
		}
}

// sms validations
function smsVal(senderId,manualMobile)
{
	if(senderId=='')
		{
			alert("Sender Id cannot be empty");
			if(document.getElementById("checkbox_1").checked == false)
				{
					document.getElementById("checkbox_1").checked = true;
				}
			document.getElementById("sid").focus();
			if(document.getElementById("takeOneAction").value=="false")
				{
					$('#takeOneAction').val('');
				}
		}
			
	if(manualMobile=='')
		{
			alert("Mobile number cannot be empty");
			
			document.getElementById("rlline").focus();
			if(document.getElementById("takeOneAction").value=="false")
				{
					$('#takeOneAction').val('');
				}
		}
		
	if(manualMobile!='')
		{
			var phoneNovalidation = /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/;
			var isvalidNo = phoneNovalidation.test(manualMobile); 
			if (!isvalidNo) {
			  alert("Not a valid Phone number");
			  if(document.getElementById("takeOneAction").value=="false")
				{
					$('#takeOneAction').val('');
				}
			  return false;
			}
			if (isvalidNo) {
			  return true;
			}
		}
}

//email validations
function emailVal(broadCast_sender_email,broadCast_sender_name,manualEmail)
{
	 var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	 if( !emailReg.test( broadCast_sender_email ) ) 
		 {
			 console.log("wrong");
			 alert("Please provide valid email address")
			if(document.getElementById("checkbox_2").checked == false)
			{
				document.getElementById("checkbox_2").checked = true;
			}
			document.getElementById("semail").focus();
			if(document.getElementById("takeOneAction").value=="false")
			{
				$('#takeOneAction').val('');
			}
		 }
	 if(broadCast_sender_name=='')
	{
		alert("Subject name cannot be empty");
		if(document.getElementById("checkbox_2").checked == false)
			{
				document.getElementById("checkbox_2").checked = true;
			}
		document.getElementById("emailsbjt").focus();
		if(document.getElementById("takeOneAction").value=="false")
		{
			$('#takeOneAction').val('');
		}
	}
		
	if(broadCast_sender_email=='')
		{
			alert("Sender email cannot be empty");
			if(document.getElementById("checkbox_2").checked == false)
				{
					document.getElementById("checkbox_2").checked = true;
				}
			document.getElementById("semail").focus();
			if(document.getElementById("takeOneAction").value=="false")
			{
				$('#takeOneAction').val('');
			}
		}
			
	if(manualEmail=='')
	{
		alert("Email contact field cannot be empty");
		
		document.getElementById("meml").focus();
		if(document.getElementById("takeOneAction").value=="false")
			{
				$('#takeOneAction').val('');
			}
	}
		
	if(manualEmail!='')
	{
		var emailRegexStr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		var isvalid = emailRegexStr.test(manualEmail); 
		
		 if (!isvalid) {
		  alert("Not a valid e-mail address");
		  document.getElementById("meml").focus();
		  if(document.getElementById("takeOneAction").value=="false")
			{
				$('#takeOneAction').val('');
			}
			
		  return false;
		}
		
		if(!emailReg.test( broadCast_sender_email ))
			{
				if(document.getElementById("takeOneAction").value=="false")
			{
				$('#takeOneAction').val('');
			}
				return false;
			}
			
		 if (isvalid) {
		  return true;
		}
	}
}

function ttsVal(manualMobile)
{
	if(manualMobile=='')
		{
			alert("Mobile number cannot be empty");
			
			document.getElementById("rlline").focus();
			if(document.getElementById("takeOneAction").value=="false")
				{
					$('#takeOneAction').val('');
				}
		}
		
	if(manualMobile!='')
		{
			var phoneNovalidation = /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/;
			var isvalidNo = phoneNovalidation.test(manualMobile); 
			if (!isvalidNo) {
			  alert("Not a valid Phone number");
			  if(document.getElementById("takeOneAction").value=="false")
				{
					$('#takeOneAction').val('');
				}
			  return false;
			}
			if (isvalidNo) {
			  return true;
			}
		}
}

// sms manually
function bSmsMan(broadCast_name,senderId,broadCast_message,manualMobile,x)
{
	$('#takeOneAction').val('false');
	console.log("sms manually");
	generalValidations(broadCast_name,broadCast_message);
	var isvalidNo=smsVal(senderId,manualMobile);
	broadCast_message = broadCast_message.split('"').join('');
	broadCast_message = broadCast_message.split('\n').join('');
	datasinfo = '{"senderName":"'+senderId+'","message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","addresses":{"SMS": [{"address":"'+manualMobile+'"}]}}';
	if(broadCast_name!=''&&senderId!=''&&broadCast_message!=''&&broadCast_message!=' '&&manualMobile!=''&&isvalidNo)
		{
			console.log("sending");
			$("#main").css({"opacity": "0.3"});
			broadcastFunc(datasinfo,x);
		}
}

// twitter manually
function bTwitterMan(broadCast_message,broadCast_name,manualTwitter,x)
{
	$('#takeOneAction').val('false');
	console.log("twitter manually");
	generalValidations(broadCast_name,broadCast_message);
	twitterVal(manualTwitter);
	manualTwitter='@'+manualTwitter;
	broadCast_message = broadCast_message.split('"').join('');
	broadCast_message = broadCast_message.split('\n').join('');
	datasinfo = '{"message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","addresses":{"TWITTER": [{"address":"'+manualTwitter+'"}]}}';
	if(broadCast_name!=''&&broadCast_message!=''&&broadCast_message!=' '&&manualTwitter!='@')
	{
		console.log("sending");
			$("#main").css({"opacity": "0.3"});
		broadcastFunc(datasinfo,x);
	}
}

// email manually
function bEmailMan(broadCast_name,broadCast_sender_email,broadCast_sender_name,broadCast_message,manualEmail,broadCast_email_subject,x)
{
	$('#takeOneAction').val('false');
	console.log("email manually");
	generalValidations(broadCast_name,broadCast_message);
	var isvalid=emailVal(broadCast_sender_email,broadCast_sender_name,manualEmail);
	broadCast_message = broadCast_message.split('"').join('');
	broadCast_message = broadCast_message.split('\n').join('');
	datasinfo = '{"senderName":"'+broadCast_sender_email+'","message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","emailSubject":"'+broadCast_email_subject+'","addresses":{"EMAIL": [{"address":"'+manualEmail+'"}]}}';
	if(broadCast_name!=''&&broadCast_message!=''&&broadCast_message!=' '&&broadCast_sender_name!=''&&broadCast_sender_email!=''&&isvalid)
		{
			console.log("sending");
			$("#main").css({"opacity": "0.3"});
			broadcastFunc(datasinfo,x);
			
		}
}

// tts manually
function bTtsMan(broadCast_name,broadCast_message,manualMobile,lCode,x)
{
	$('#takeOneAction').val('false');
	console.log("voice tts manually");
	generalValidations(broadCast_name,broadCast_message);
	var isvalidNo=ttsVal(manualMobile);
	broadCast_message = broadCast_message.split('"').join('');
	broadCast_message = broadCast_message.split('\n').join('');
	datasinfo = '{"message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","addresses":{"CALL": [{"address":"'+manualMobile+'"}]},"language": "'+lCode+'"}';
	if(broadCast_name!=''&&broadCast_message!=''&&broadCast_message!=' '&&manualMobile!=''&&isvalidNo)
		{
			console.log("sending");
			$("#main").css({"opacity": "0.3"});
			broadcastFunc(datasinfo,x);
			$('#ldId').val("nl-nl").attr("selected", "selected");
		}
}

//sms email manually
function bSmsEmailMan(broadCast_name,broadCast_sender_email,broadCast_sender_name,broadCast_message,manualEmail,broadCast_email_subject,senderId,manualMobile,x)
{
	$('#takeOneAction').val('false');
	console.log("email and sms manually");
	generalValidations(broadCast_name,broadCast_message);
	var isvalidNo=smsVal(senderId,manualMobile);
	var isvalid=emailVal(broadCast_sender_email,broadCast_sender_name,manualEmail);
	broadCast_message = broadCast_message.split('"').join('');
	broadCast_message = broadCast_message.split('\n').join('');
	datasinfo = '{"senderName":"'+broadCast_sender_email+'","message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","emailSubject":"'+broadCast_email_subject+'","addresses":{"SMS": [{"address":"'+manualMobile+'"}],"EMAIL": [{"address":"'+manualEmail+'"}]}}';
	if(broadCast_name!=''&&senderId!=''&&manualMobile!=''&&broadCast_message!=''&&broadCast_message!=' '&&broadCast_sender_name!=''&&broadCast_sender_email!=''&&isvalid&&isvalidNo)
		{
			console.log("sending");
			$("#main").css({"opacity": "0.3"});
			broadcastFunc(datasinfo,x);
		}	
}

//sms tts manually
function bSmsTtsMan(broadCast_name,senderId,broadCast_message,manualMobile,lCode,x)
{
	$('#takeOneAction').val('false');
	console.log("sms tts manually");
	generalValidations(broadCast_name,broadCast_message);
	var isvalidNo=smsVal(senderId,manualMobile);
	broadCast_message = broadCast_message.split('"').join('');
	broadCast_message = broadCast_message.split('\n').join('');
	datasinfo = '{"senderName":"'+senderId+'","message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","addresses":{"SMS": [{"address":"'+manualMobile+'"}],"CALL": [{"address":"'+manualMobile+'"}]},"language": "'+lCode+'"}';
	if(broadCast_name!=''&&senderId!=''&&broadCast_message!=''&&broadCast_message!=' '&&manualMobile!=''&&isvalidNo)
		{
			console.log("sending");
			$("#main").css({"opacity": "0.3"});
			broadcastFunc(datasinfo,x);
			$('#ldId').val("nl-nl").attr("selected", "selected");
		}
}

//tts email manually
function bTtsEmailMan(broadCast_name,broadCast_sender_email,broadCast_sender_name,broadCast_message,manualEmail,broadCast_email_subject,lCode,manualMobile,x)
{
	$('#takeOneAction').val('false');
	console.log("email and tts manually");
	generalValidations(broadCast_name,broadCast_message);
	var isvalidNo=ttsVal(manualMobile);
	var isvalid=emailVal(broadCast_sender_email,broadCast_sender_name,manualEmail);
	broadCast_message = broadCast_message.split('"').join('');
	broadCast_message = broadCast_message.split('\n').join('');
	datasinfo = '{"senderName":"'+broadCast_sender_email+'","message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","emailSubject":"'+broadCast_email_subject+'","addresses":{"CALL": [{"address":"'+manualMobile+'"}],"EMAIL": [{"address":"'+manualEmail+'"}]},"language": "'+lCode+'"}';
	if(broadCast_name!=''&&manualMobile!=''&&broadCast_message!=''&&broadCast_message!=' '&&broadCast_sender_name!=''&&broadCast_sender_email!=''&&isvalid&&isvalidNo)
		{
			console.log("sending");
			$("#main").css({"opacity": "0.3"});
			broadcastFunc(datasinfo,x);
			$('#ldId').val("nl-nl").attr("selected", "selected");
		}	
}

// sms tts email manually
function bSmsEmailTtsMan(broadCast_name,broadCast_sender_email,broadCast_sender_name,broadCast_message,manualEmail,broadCast_email_subject,senderId,manualMobile,lCode,x)
{
	$('#takeOneAction').val('false');
	console.log("email and sms and tts manually");
	generalValidations(broadCast_name,broadCast_message);
	var isvalidNo=smsVal(senderId,manualMobile);
	var isvalid=emailVal(broadCast_sender_email,broadCast_sender_name,manualEmail);
	broadCast_message = broadCast_message.split('"').join('');
	broadCast_message = broadCast_message.split('\n').join('');
	datasinfo = '{"senderName":"'+broadCast_sender_email+'","message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","emailSubject":"'+broadCast_email_subject+'","addresses":{"SMS": [{"address":"'+manualMobile+'"}],"CALL": [{"address":"'+manualMobile+'"}],"EMAIL": [{"address":"'+manualEmail+'"}]},"language": "'+lCode+'"}';
	if(broadCast_name!=''&&senderId!=''&&manualMobile!=''&&broadCast_message!=''&&broadCast_message!=' '&&broadCast_sender_name!=''&&broadCast_sender_email!=''&&isvalid&&isvalidNo)
		{
			console.log("sending");
			$("#main").css({"opacity": "0.3"});
			broadcastFunc(datasinfo,x);
			$('#ldId').val("nl-nl").attr("selected", "selected");
		}	
}

// Twitter sms manually
function bTwitterSmsMan(broadCast_message,broadCast_name,manualTwitter,manualMobile,senderId,x)
{
	$('#takeOneAction').val('false');
	console.log("twitter sms manually");
	generalValidations(broadCast_name,broadCast_message);
	twitterVal(manualTwitter);
	var isvalidNo=smsVal(senderId,manualMobile);
	broadCast_message = broadCast_message.split('"').join('');
	broadCast_message = broadCast_message.split('\n').join('');					
	manualTwitter='@'+manualTwitter;
	datasinfo = '{"senderName":"'+senderId+'","message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","addresses":{"TWITTER": [{"address":"'+manualTwitter+'"}],"SMS": [{"address":"'+manualMobile+'"}]}}';
	console.log(manualTwitter);
	if(broadCast_name!=''&&broadCast_message!=''&&senderId!=''&&broadCast_message!=' '&&manualTwitter!='@'&&manualMobile!=''&&isvalidNo)
	{
		console.log("sending");
			$("#main").css({"opacity": "0.3"});
		broadcastFunc(datasinfo,x);
	}
}

// twitter email manually
function bTwitterEmailMan(broadCast_message,broadCast_name,manualTwitter,manualEmail,broadCast_email_subject,broadCast_sender_email,broadCast_sender_name,x)
{
	$('#takeOneAction').val('false');
	console.log("twitter manually");
	generalValidations(broadCast_name,broadCast_message);
	twitterVal(manualTwitter);
	var isvalid=emailVal(broadCast_sender_email,broadCast_sender_name,manualEmail);
	manualTwitter='@'+manualTwitter;
	broadCast_message = broadCast_message.split('"').join('');
	broadCast_message = broadCast_message.split('\n').join('');
	datasinfo = '{"senderName":"'+broadCast_sender_email+'","message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","emailSubject":"'+broadCast_email_subject+'","addresses":{"TWITTER": [{"address":"'+manualTwitter+'"}],"EMAIL": [{"address":"'+manualEmail+'"}]}}';
	
	console.log(manualTwitter);
	if(broadCast_name!=''&&broadCast_message!=''&&broadCast_message!=' '&&manualTwitter!='@'&&broadCast_sender_name!=''&&broadCast_sender_email!=''&&isvalid)
	{
		console.log("sending");
			$("#main").css({"opacity": "0.3"});
		broadcastFunc(datasinfo,x);
	}
}

// twitter tts manually
function bTwitterTtsMan(broadCast_message,broadCast_name,manualTwitter,manualMobile,lCode,x)
{
	$('#takeOneAction').val('false');
	console.log("twitter tts manually");
	generalValidations(broadCast_name,broadCast_message);
	twitterVal(manualTwitter);
	var isvalidNo=ttsVal(manualMobile);
	manualTwitter='@'+manualTwitter;
	broadCast_message = broadCast_message.split('"').join('');
	broadCast_message = broadCast_message.split('\n').join('');
	datasinfo = '{"message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","addresses":{"TWITTER": [{"address":"'+manualTwitter+'"}],"CALL": [{"address":"'+manualMobile+'"}]},"language": "'+lCode+'"}';
	console.log(manualTwitter);
	if(broadCast_name!=''&&broadCast_message!=''&&broadCast_message!=' '&&manualTwitter!='@'&&manualMobile!=''&&isvalidNo)
	{
		console.log("sending");
			$("#main").css({"opacity": "0.3"});
		broadcastFunc(datasinfo,x);
		$('#ldId').val("nl-nl").attr("selected", "selected");
	}
}

// twitter sms email manually
function bTwitterEmailSmsMan(broadCast_message,broadCast_name,manualTwitter,manualEmail,broadCast_email_subject,broadCast_sender_email,broadCast_sender_name,manualMobile,senderId,x)
{
	$('#takeOneAction').val('false');
	console.log("twitter sms email manually");
	generalValidations(broadCast_name,broadCast_message);
	twitterVal(manualTwitter);
	var isvalidNo=smsVal(senderId,manualMobile);
	var isvalid=emailVal(broadCast_sender_email,broadCast_sender_name,manualEmail);
	manualTwitter='@'+manualTwitter;
	broadCast_message = broadCast_message.split('"').join('');
	broadCast_message = broadCast_message.split('\n').join('');
	datasinfo = '{"senderName":"'+broadCast_sender_email+'","message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","emailSubject":"'+broadCast_email_subject+'","addresses":{"TWITTER": [{"address":"'+manualTwitter+'"}],"EMAIL": [{"address":"'+manualEmail+'"}],"SMS": [{"address":"'+manualMobile+'"}]}}';
	console.log(manualTwitter);
	if(broadCast_name!=''&&broadCast_message!=''&&broadCast_message!=' '&&manualTwitter!='@'&&broadCast_sender_name!=''&&broadCast_sender_email!=''&&senderId!=''&&manualMobile!=''&&isvalid&&isvalidNo)
	{
		console.log("sending");
			$("#main").css({"opacity": "0.3"});
		broadcastFunc(datasinfo,x);
	}
}

// twitter sms tts manually
function bTwitterTtsSmsMan(broadCast_message,broadCast_name,manualTwitter,manualMobile,senderId,lCode,x)
{
	$('#takeOneAction').val('false');
	console.log("twitter sms tts manually");
	generalValidations(broadCast_name,broadCast_message);
	twitterVal(manualTwitter);
	var isvalidNo=smsVal(senderId,manualMobile);
	manualTwitter='@'+manualTwitter;
	broadCast_message = broadCast_message.split('"').join('');
	broadCast_message = broadCast_message.split('\n').join('');
	datasinfo = '{"senderName":"'+senderId+'","message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","addresses":{"TWITTER": [{"address":"'+manualTwitter+'"}],"SMS": [{"address":"'+manualMobile+'"}],"CALL": [{"address":"'+manualMobile+'"}]},"language": "'+lCode+'"}';
	console.log(manualTwitter);
	if(broadCast_name!=''&&broadCast_message!=''&&broadCast_message!=' '&&manualTwitter!='@'&&senderId!=''&&manualMobile!=''&&isvalidNo)
	{
		console.log("sending");
			$("#main").css({"opacity": "0.3"});
		broadcastFunc(datasinfo,x);
		$('#ldId').val("nl-nl").attr("selected", "selected");
	}
}

// twitter email tts manually
function bTwitterTtsEmailMan(broadCast_message,broadCast_name,manualTwitter,manualMobile,manualEmail,broadCast_email_subject,broadCast_sender_email,broadCast_sender_name,lCode,x)
{
	$('#takeOneAction').val('false');
	console.log("twitter email tts manually");
	generalValidations(broadCast_name,broadCast_message);
	twitterVal(manualTwitter);
	var isvalidNo=ttsVal(manualMobile);
	var isvalid=emailVal(broadCast_sender_email,broadCast_sender_name,manualEmail);
	manualTwitter='@'+manualTwitter;
	broadCast_message = broadCast_message.split('"').join('');
	broadCast_message = broadCast_message.split('\n').join('');
	datasinfo = '{"senderName":"'+broadCast_sender_email+'","message":"'+broadCast_message+'","emailSubject":"'+broadCast_email_subject+'","broadcastName":"'+broadCast_name+'","addresses":{"TWITTER": [{"address":"'+manualTwitter+'"}],"EMAIL": [{"address":"'+manualEmail+'"}],"CALL": [{"address":"'+manualMobile+'"}]},"language": "'+lCode+'"}';
	console.log(manualTwitter);
	if(broadCast_name!=''&&broadCast_message!=''&&broadCast_message!=' '&&manualTwitter!='@'&&manualMobile!=''&&broadCast_sender_name!=''&&broadCast_sender_email!=''&&isvalid&&isvalidNo)
	{
		console.log("sending");
			$("#main").css({"opacity": "0.3"});
		broadcastFunc(datasinfo,x);
		$('#ldId').val("nl-nl").attr("selected", "selected");
	}
}


// twitter email tts sms manually
function bTwitterTtsEmailSmsMan(broadCast_message,broadCast_name,senderId,manualTwitter,manualMobile,manualEmail,broadCast_email_subject,broadCast_sender_email,broadCast_sender_name,lCode,x)
{
	$('#takeOneAction').val('false');
	console.log("twitter email tts sms manually");
	generalValidations(broadCast_name,broadCast_message);
	twitterVal(manualTwitter);
	var isvalidNo=smsVal(senderId,manualMobile);
	var isvalid=emailVal(broadCast_sender_email,broadCast_sender_name,manualEmail);
	manualTwitter='@'+manualTwitter;
	broadCast_message = broadCast_message.split('"').join('');
	broadCast_message = broadCast_message.split('\n').join('');
	datasinfo = '{"senderName":"'+broadCast_sender_email+'","message":"'+broadCast_message+'","emailSubject":"'+broadCast_email_subject+'","broadcastName":"'+broadCast_name+'","addresses":{"TWITTER": [{"address":"'+manualTwitter+'"}],"SMS": [{"address":"'+manualMobile+'"}],"EMAIL": [{"address":"'+manualEmail+'"}],"CALL": [{"address":"'+manualMobile+'"}]},"language": "'+lCode+'"}';
	console.log(manualTwitter);
	if(broadCast_name!=''&&broadCast_message!=''&&broadCast_message!=' '&&manualTwitter!='@'&&manualMobile!=''&&broadCast_sender_name!=''&&broadCast_sender_email!=''&&isvalid&&isvalidNo)
	{
		console.log("sending");
			$("#main").css({"opacity": "0.3"});
		broadcastFunc(datasinfo,x);
		$('#ldId').val("nl-nl").attr("selected", "selected");
	}
}
