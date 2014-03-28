// JavaScript Document

// Broadcast name and message validations
function generalValidations(broadCast_name,broadCast_message)
{
	if(broadCast_name=='')
		{
			alert("Broadcsat name cannot be empty");
			document.getElementById("bname").focus();
			if(document.getElementById("takeOneAction").value=="false")
				{
					$('#takeOneAction').val('');
				}
		}
		if(broadCast_message==''||broadCast_message==' ')
			{
				alert("Broadcast message cannot be empty");
				
				document.getElementById("textarea").focus();
				if(document.getElementById("takeOneAction").value=="false")
					{
						$('#takeOneAction').val('');
					}
			}
}

//sms validations for all contacts
function smsCntVal(senderId)
{
	if(senderId=='')
		{
			senderId='ASK-Fast';
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
}

function calculateRecipients(rEmail,rTts,rSms,rTwitter)
{
	 var counter1=0;
	 var s2='';var s='';var s1='';var s3='';
	 var output2='';var output1='';var output='';var output3='';
	 var j=0;var k=0;
	 var a2 ='"CALL": []';var a1 ='"SMS": []';var a ='"addresses":{"EMAIL": []';var a3='"TWITTER": []';
	 
	 var checkboxes = new Array();
	 var position2 = 9;var position1 = 8;var position = 23;var position3 = 12;
	 if((rEmail==0&&rTts==1&&rSms==1&&rTwitter==0)||(rEmail==0&&rTts==0&&rSms==1&&rTwitter==0)||(rEmail==0&&rTts==0&&rSms==1&&rTwitter==1)||(rEmail==0&&rTts==1&&rSms==1&&rTwitter==1))
	 {
		 a1 ='"addresses":{"SMS": []';position1 = 21;
	 }
	 else if((rEmail==0&&rTts==1&&rSms==0&&rTwitter==0)||(rEmail==0&&rTts==1&&rSms==0&&rTwitter==1))
	 {
		 a2 ='"addresses":{"CALL": []';position2 = 22;
	 }
	 else if(rEmail==0&&rTts==0&&rSms==0&&rTwitter==1)
	 {
		 a3 ='"addresses":{"TWITTER": []';position3 = 25;
	 }
	 else
	 {
	 }
	 output2 = a2.substr(0, position2) + s2 + a2.substr(position2);
	 output1 = a1.substr(0, position1) + s1 + a1.substr(position1);
	 output = a.substr(0, position) + s + a.substr(position);
	 output3 = a3.substr(0, position3) + s3 + a3.substr(position3);
	 //loop to sum up all sms recipients
	 $("input:checkbox").each(function()
	 {
	var $this = $(this); 
	if($this.is(":checked"))
	{
		checkboxes=$this.attr("id");
		name1=$this.attr("name");
		if(name1=='chkboxx')
			{
				var checkboxEmail=document.getElementById(checkboxes).value;
				if(checkboxEmail!='')
					{
						var c=checkboxEmail.split("|");
						counter1++;
						if(k==0)
							{
								if(rTts==1)
									{
										s2 = '{"address": "'+c[1]+'","contactKey": "'+c[2]+'"}';
									}
								if(rSms==1)
									{
										s1 = '{"address": "'+c[1]+'","contactKey": "'+c[2]+'"}';
									}
								if(rEmail==1)
									{
										s = '{"address": "'+c[0]+'","contactKey": "'+c[2]+'"}';
									}
								if(rTwitter==1)
									{
										if(c[3]=='')
											{
												s3 = '{"address": "'+c[3]+'","contactKey": "'+c[2]+'"}';
											}
										else
											{
												s3 = '{"address": "@'+c[3]+'","contactKey": "'+c[2]+'"}';
											}
									}
								k=1;
							}
						else
							{
								if(rTts==1)
									{
										s2 = '{"address": "'+c[1]+'","contactKey": "'+c[2]+'"},';
									}
									if(rSms==1)
									{
										s1 = '{"address": "'+c[1]+'","contactKey": "'+c[2]+'"},';
									}
								if(rEmail==1)
									{
										s = '{"address": "'+c[0]+'","contactKey": "'+c[2]+'"},';
									}
								if(rTwitter==1)
									{
										if(c[3]=='')
											{
												s3 = '{"address": "'+c[3]+'","contactKey": "'+c[2]+'"},';
											}
										else
											{
												s3 = '{"address": "@'+c[3]+'","contactKey": "'+c[2]+'"},';
											}
									}
							}
						if(rTts==1)
							{
								output2 = output2.substr(0, position2) + s2 + output2.substr(position2);
							}
						if(rSms==1)
							{
								output1 = output1.substr(0, position1) + s1 + output1.substr(position1);
							}
						if(rEmail==1)
							{
								output = output.substr(0, position) + s + output.substr(position);
							}
						if(rTwitter==1)
							{
								output3 = output3.substr(0, position3) + s3 + output3.substr(position3);
							}
					}
			}
	}
	j++;
	});
	
	var resultant= [];resultant[0]=output;resultant[1]=output1;resultant[2]=output2;resultant[3]=output3;resultant[4]=counter1;
	//console.log(resultant);
	return resultant;
}

function recipientVal(counter1)
{
	if(counter1==0)
		{
			alert("Please select at least one recipient");
			if(document.getElementById("takeOneAction").value=="false")
			{
				$('#takeOneAction').val('');
			}
		}
}

function emailCntVal(broadCast_sender_email,broadCast_sender_name)
{
	
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
					return false;
				 }
				 else
				 {
					 return true;
				 }
}


// sms to all contacts
function bSmsAllCon(broadCast_name,senderId,broadCast_message,x)
{
	$('#takeOneAction').val('false');
			console.log("sms to all contacts");
			var rEmail=0;var rTts=0;var rSms=1;var rTwitter=0;
			//checks for validations
			generalValidations(broadCast_name,broadCast_message);
			smsCntVal(senderId);
			var res = calculateRecipients(rEmail,rTts,rSms,rTwitter);
			Valueofcheckbox=res[1];
			recipientVal(res[4]);
			//setting JSON
			broadCast_message = broadCast_message.split('"').join('');
			broadCast_message = broadCast_message.split('\n').join('');
					datasinfo = '{"senderName":"'+senderId+'","message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'",'+Valueofcheckbox+'}}';
					
		if(broadCast_name!=''&&senderId!=''&&broadCast_message!=''&&broadCast_message!=' '&&res[4]!=0)
			{
			$("#main").css({"opacity": "0.3"});
				broadcastFunc(datasinfo,x);
			}
}
//this is the point
//email to all contacts
function bEmailAllCon(broadCast_message,broadCast_sender_email,broadCast_name,broadCast_sender_name,broadCast_email_subject,x)
{
	$('#takeOneAction').val('false');
	console.log("email to all contacts");
	var rEmail=1;var rTts=0;var rSms=0;var rTwitter=0;
	console.log(document.getElementById("takeOneAction").value);
	//checks of validations
	generalValidations(broadCast_name,broadCast_message);
	var isvalid = emailCntVal(broadCast_sender_email,broadCast_sender_name);
	var res = calculateRecipients(rEmail,rTts,rSms,rTwitter);
	Valueofcheckbox=res[0];
	recipientVal(res[4]);
	//setting JSON
	broadCast_message = broadCast_message.split('"').join('');
	broadCast_message = broadCast_message.split('\n').join('');
	datasinfo = '{"senderName":"'+broadCast_sender_email+'","message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","emailSubject":"'+broadCast_email_subject+'",'+Valueofcheckbox+'}}';
	if(broadCast_name!=''&&broadCast_message!=''&&broadCast_message!=' '&&broadCast_sender_name!=''&&broadCast_sender_email!=''&&isvalid&&res[4]!=0)
		{
			$("#main").css({"opacity": "0.3"});
			broadcastFunc(datasinfo,x);
		}
}

//sms and email to all contacts
function bEmailSmsAllCon(broadCast_name,broadCast_sender_name,broadCast_sender_email,broadCast_message,senderId,broadCast_email_subject,x)
{
	$('#takeOneAction').val('false');
	var rEmail=1;var rTts=0;var rSms=1;var rTwitter=0;
	generalValidations(broadCast_name,broadCast_message);
	//checks of validations
	var isvalid = emailCntVal(broadCast_sender_email,broadCast_sender_name);
	var res = calculateRecipients(rEmail,rTts,rSms,rTwitter);
	Valueofcheckbox=res[0];
	var Valueofcheckboxmob=res[1];
	smsCntVal(senderId);
	recipientVal(res[4]);
	//setting JSON
	broadCast_message = broadCast_message.split('"').join('');
	broadCast_message = broadCast_message.split('\n').join('');
	datasinfo = '{"senderName":"'+senderId+'","message":"'+broadCast_message+'","emailSubject":"'+broadCast_email_subject+'","broadcastName":"'+broadCast_name+'",'+Valueofcheckbox+','+Valueofcheckboxmob+'}}';
	if(broadCast_name!=''&&broadCast_message!=''&&broadCast_message!=' '&&broadCast_sender_name!=''&&broadCast_sender_email!=''&&res[4]!=0&&isvalid&&senderId!='')
		{
			$("#main").css({"opacity": "0.3"});
			broadcastFunc(datasinfo,x);
		}
	$('#img_loading1').hide();
}

//tts to all contacts
function bTtsAllCon(broadCast_name,broadCast_message,lCode,x)
{
	$('#takeOneAction').val('false');
	console.log("voice to all contacts");
	var rEmail=0;var rTts=1;var rSms=0;var rTwitter=0;
	//checks for validations
	generalValidations(broadCast_name,broadCast_message);
	var res = calculateRecipients(rEmail,rTts,rSms,rTwitter);
	recipientVal(res[4]);
	Valueofcheckbox=res[2];
	broadCast_message = broadCast_message.split('"').join('');
	broadCast_message = broadCast_message.split('\n').join('');
	//setting JSON
	lCode=$('#ldId').val();
	datasinfo = '{"message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","audio": "null",'+Valueofcheckbox+'},"language": "'+lCode+'"}';
	if(broadCast_name!=''&&broadCast_message!=''&&broadCast_message!=' '&&res[4]!=0)
		{
			$("#main").css({"opacity": "0.3"});
			broadcastFunc(datasinfo,x);
			$('#ldId').val("nl-nl").attr("selected", "selected");
		}
}

//tts sms to all contacts
function bTtsSmsAllCon(senderId,broadCast_name,broadCast_message,x)
{
	$('#takeOneAction').val('false');
	var rEmail=0;var rTts=1;var rSms=1;var rTwitter=0;
	console.log("voice and sms to all contacts");
	//checks for validations
	smsCntVal(senderId);
	generalValidations(broadCast_name,broadCast_message);
	var res = calculateRecipients(rEmail,rTts,rSms,rTwitter);
	recipientVal(res[4]);
	var Valueofcheckboxmob=res[2];
	Valueofcheckbox=res[1];
	broadCast_message = broadCast_message.split('"').join('');
	broadCast_message = broadCast_message.split('\n').join('');
	lCode=$('#ldId').val();
	//setting JSON
	datasinfo = '{"senderName":"'+senderId+'","message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","audio": "null",'+Valueofcheckbox+','+Valueofcheckboxmob+'},"language": "'+lCode+'"}';
	if(broadCast_name!=''&&broadCast_message!=''&&broadCast_message!=' '&&res[4]!=0&&senderId!='')
		{
			$("#main").css({"opacity": "0.3"});
			broadcastFunc(datasinfo,x);
			$('#ldId').val("nl-nl").attr("selected", "selected");
		}
}

//tts email to all contacts
function bTtsEmailAllCon(broadCast_sender_email,broadCast_name,broadCast_sender_name,broadCast_message,broadCast_email_subject,x)
{
	$('#takeOneAction').val('false');
	var rEmail=1;var rTts=1;var rSms=0;var rTwitter=0;
	//checks of validations
	generalValidations(broadCast_name,broadCast_message);
	var isvalid = emailCntVal(broadCast_sender_email,broadCast_sender_name);
	console.log("voice and email to all contacts");
	//checks for validations
	var res = calculateRecipients(rEmail,rTts,rSms,rTwitter);
	var Valueofcheckboxmob=res[2];
	Valueofcheckbox=res[0];
	recipientVal(res[4]);
	broadCast_message = broadCast_message.split('"').join('');
	broadCast_message = broadCast_message.split('\n').join('');
	lCode=$('#ldId').val();
	//setting JSON
	datasinfo = '{"senderName":"'+broadCast_sender_email+'","message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","emailSubject":"'+broadCast_email_subject+'","audio": "null",'+Valueofcheckbox+','+Valueofcheckboxmob+'},"language": "'+lCode+'"}';
	if(broadCast_name!=''&&broadCast_message!=''&&broadCast_message!=' '&&broadCast_sender_name!=''&&broadCast_sender_email!=''&&res[4]!=0&&isvalid)
		{
			$("#main").css({"opacity": "0.3"});
			broadcastFunc(datasinfo,x);
			$('#ldId').val("nl-nl").attr("selected", "selected");
		}
}

//tts email sms to all contacts
function bTtsEmailSmsAllCon(senderId,broadCast_sender_email,broadCast_name,broadCast_sender_name,broadCast_message,broadCast_email_subject,lCode,x)
{
	$('#takeOneAction').val('false');
	var rEmail=1;var rTts=1;var rSms=1;var rTwitter=0;
	//checks of validations
	generalValidations(broadCast_name,broadCast_message);
	smsCntVal(senderId);
	var isvalid = emailCntVal(broadCast_sender_email,broadCast_sender_name);
	console.log("email and sms to all contacts");
	//checks for validations
	var res = calculateRecipients(rEmail,rTts,rSms,rTwitter);
	var Valueofcheckboxmobvo=res[2];
	var Valueofcheckboxmob=res[1];
	Valueofcheckbox=res[0];
	recipientVal(res[4]);
	broadCast_message = broadCast_message.split('"').join('');
	broadCast_message = broadCast_message.split('\n').join('');
	lCode=$('#ldId').val();
	//setting JSON
	datasinfo = '{"senderName":"'+senderId+'","message":"'+broadCast_message+'","emailSubject":"'+broadCast_email_subject+'","broadcastName":"'+broadCast_name+'","audio": "null",'+Valueofcheckbox+','+Valueofcheckboxmob+','+Valueofcheckboxmobvo+'},"language": "'+lCode+'"}';
	if(broadCast_name!=''&&broadCast_message!=''&&broadCast_message!=' '&&broadCast_sender_name!=''&&broadCast_sender_email!=''&&res[4]!=0&&isvalid&&senderId!='')
		{
			$("#main").css({"opacity": "0.3"});
			broadcastFunc(datasinfo,x);
			$('#ldId').val("nl-nl").attr("selected", "selected");
		}
}

//twitter to all contacts
function bTwitterAllCon(broadCast_name,broadCast_message,x)
{
	$('#takeOneAction').val('false');
	var rEmail=0;var rTts=0;var rSms=0;var rTwitter=1;
	//checks of validations
	generalValidations(broadCast_name,broadCast_message);
	console.log("twitter to all contacts");
	//checks for validations
	var res = calculateRecipients(rEmail,rTts,rSms,rTwitter);
	var Valueofcheckboxtwtvo=res[3];
	recipientVal(res[4]);
	broadCast_message = broadCast_message.split('"').join('');
	broadCast_message = broadCast_message.split('\n').join('');
	//setting JSON
	datasinfo = '{"message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'",'+Valueofcheckboxtwtvo+'}}';
	if(broadCast_name!=''&&broadCast_message!=''&&broadCast_message!=' '&&res[4]!=0)
		{
			console.log('sending');
			$("#main").css({"opacity": "0.3"});
			broadcastFunc(datasinfo,x);
		}
}

//sms twitter to all contacts
function bSmsTwitterAllCon(senderId,broadCast_name,broadCast_message,x)
{
	$('#takeOneAction').val('false');
	var rEmail=0;var rTts=0;var rSms=1;var rTwitter=1;
	//checks of validations
	smsCntVal(senderId);
	generalValidations(broadCast_name,broadCast_message);
	console.log("sms twitter to all contacts");
	//checks for validations
	var res = calculateRecipients(rEmail,rTts,rSms,rTwitter);
	var Valueofcheckboxtwtvo=res[3];
	var Valueofcheckboxmob=res[1];
	recipientVal(res[4]);
	broadCast_message = broadCast_message.split('"').join('');
	broadCast_message = broadCast_message.split('\n').join('');
	//setting JSON
	datasinfo = '{"senderName":"'+senderId+'","message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'",'+Valueofcheckboxmob+','+Valueofcheckboxtwtvo+'}}';
	if(broadCast_name!=''&&broadCast_message!=''&&broadCast_message!=' '&&res[4]!=0&&senderId!='')
		{
			console.log('sending');
			$("#main").css({"opacity": "0.3"});
			broadcastFunc(datasinfo,x);
		}
}



//email twitter to all contacts
function bEmailTwitterAllCon(broadCast_sender_email,broadCast_name,broadCast_sender_name,broadCast_message,broadCast_email_subject,x)
{
	$('#takeOneAction').val('false');
	var rEmail=1;var rTts=0;var rSms=0;var rTwitter=1;
	//checks of validations
	generalValidations(broadCast_name,broadCast_message);
	var isvalid = emailCntVal(broadCast_sender_email,broadCast_sender_name);
	console.log("email twitter to all contacts");
	//checks for validations
	var res = calculateRecipients(rEmail,rTts,rSms,rTwitter);
	var Valueofcheckboxtwtvo=res[3];
	Valueofcheckbox=res[0];
	recipientVal(res[4]);
	broadCast_message = broadCast_message.split('"').join('');
	broadCast_message = broadCast_message.split('\n').join('');
	//setting JSON
	datasinfo = '{"senderName":"'+broadCast_sender_email+'","message":"'+broadCast_message+'","emailSubject":"'+broadCast_email_subject+'","broadcastName":"'+broadCast_name+'",'+Valueofcheckbox+','+Valueofcheckboxtwtvo+'}}';
	if(broadCast_name!=''&&broadCast_message!=''&&broadCast_message!=' '&&broadCast_sender_name!=''&&broadCast_sender_email!=''&&res[4]!=0&&isvalid)
		{
			console.log('sending');
			$("#main").css({"opacity": "0.3"});
			broadcastFunc(datasinfo,x);
		}
}


//tts twitter to all contacts
function bTtsTwitterAllCon(broadCast_name,broadCast_message,lCode,x)
{
	$('#takeOneAction').val('false');
	var rEmail=0;var rTts=1;var rSms=0;var rTwitter=1;
	//checks of validations
	generalValidations(broadCast_name,broadCast_message);
	console.log("voice and email and sms twitter to all contacts");
	//checks for validations
	var res = calculateRecipients(rEmail,rTts,rSms,rTwitter);
	var Valueofcheckboxtwtvo=res[3];
	var Valueofcheckboxmobvo=res[2];
	recipientVal(res[4]);
	broadCast_message = broadCast_message.split('"').join('');
	broadCast_message = broadCast_message.split('\n').join('');
	lCode=$('#ldId').val();
	//setting JSON
	datasinfo = '{"senderName":"","message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","audio": "null",'+Valueofcheckboxmobvo+','+Valueofcheckboxtwtvo+'},"language": "'+lCode+'"}';
	if(broadCast_name!=''&&broadCast_message!=''&&broadCast_message!=' '&&res[4]!=0)
		{
			console.log('sending');
			$("#main").css({"opacity": "0.3"});
			broadcastFunc(datasinfo,x);
			$('#ldId').val("nl-nl").attr("selected", "selected");
		}
}

// email sms twitter to all contacts
function bEmailSmsTwitterAllCon(senderId,broadCast_sender_email,broadCast_name,broadCast_sender_name,broadCast_message,broadCast_email_subject,x)
{
	$('#takeOneAction').val('false');
	var rEmail=1;var rTts=0;var rSms=1;var rTwitter=1;
	//checks of validations
	smsCntVal(senderId);
	generalValidations(broadCast_name,broadCast_message);
	var isvalid = emailCntVal(broadCast_sender_email,broadCast_sender_name);
	console.log("voice and email and sms twitter to all contacts");
	//checks for validations
	var res = calculateRecipients(rEmail,rTts,rSms,rTwitter);
	var Valueofcheckboxtwtvo=res[3];
	var Valueofcheckboxmob=res[1];
	Valueofcheckbox=res[0];
	recipientVal(res[4]);
	broadCast_message = broadCast_message.split('"').join('');
	broadCast_message = broadCast_message.split('\n').join('');
	//setting JSON
	datasinfo = '{"senderName":"'+senderId+'","message":"'+broadCast_message+'","emailSubject":"'+broadCast_email_subject+'","broadcastName":"'+broadCast_name+'",'+Valueofcheckbox+','+Valueofcheckboxmob+','+Valueofcheckboxtwtvo+'}}';
	if(broadCast_name!=''&&broadCast_message!=''&&broadCast_message!=' '&&broadCast_sender_name!=''&&broadCast_sender_email!=''&&res[4]!=0&&isvalid&&senderId!='')
		{
			console.log('sending');
			$("#main").css({"opacity": "0.3"});
			broadcastFunc(datasinfo,x);
		}
}

//tts sms twitter to all contacts
function bTtsSmsTwitterAllCon(senderId,broadCast_name,broadCast_message,lCode,x)
{
	$('#takeOneAction').val('false');
	var rEmail=0;var rTts=1;var rSms=1;var rTwitter=1;
	//checks of validations
	smsCntVal(senderId);
	generalValidations(broadCast_name,broadCast_message);
	console.log("voice and email and sms twitter to all contacts");
	//checks for validations
	var res = calculateRecipients(rEmail,rTts,rSms,rTwitter);
	var Valueofcheckboxtwtvo=res[3];
	var Valueofcheckboxmobvo=res[2];
	var Valueofcheckboxmob=res[1];
	recipientVal(res[4]);
	broadCast_message = broadCast_message.split('"').join('');
	broadCast_message = broadCast_message.split('\n').join('');
	lCode=$('#ldId').val();
	//setting JSON
	datasinfo = '{"senderName":"'+senderId+'","message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","audio": "null",'+Valueofcheckboxmob+','+Valueofcheckboxmobvo+','+Valueofcheckboxtwtvo+'},"language": "'+lCode+'"}';
	if(broadCast_name!=''&&broadCast_message!=''&&broadCast_message!=' '&&res[4]!=0&&senderId!='')
		{
			console.log('sending');
			$("#main").css({"opacity": "0.3"});
			broadcastFunc(datasinfo,x);
			$('#ldId').val("nl-nl").attr("selected", "selected");
		}
}

//tts email twitter to all contacts
function bTtsEmailTwitterAllCon(broadCast_sender_email,broadCast_name,broadCast_sender_name,broadCast_message,broadCast_email_subject,lCode,x)
{
	$('#takeOneAction').val('false');
	var rEmail=1;var rTts=1;var rSms=0;var rTwitter=1;
	//checks of validations
	generalValidations(broadCast_name,broadCast_message);
	var isvalid = emailCntVal(broadCast_sender_email,broadCast_sender_name);
	console.log("voice and email and sms twitter to all contacts");
	//checks for validations
	var res = calculateRecipients(rEmail,rTts,rSms,rTwitter);
	var Valueofcheckboxtwtvo=res[3];
	var Valueofcheckboxmobvo=res[2];
	Valueofcheckbox=res[0];
	recipientVal(res[4]);
	broadCast_message = broadCast_message.split('"').join('');
	broadCast_message = broadCast_message.split('\n').join('');
	lCode=$('#ldId').val();
	//setting JSON
	datasinfo = '{"senderName":"'+broadCast_sender_email+'","message":"'+broadCast_message+'","emailSubject":"'+broadCast_email_subject+'","broadcastName":"'+broadCast_name+'","audio": "null",'+Valueofcheckbox+','+Valueofcheckboxmobvo+','+Valueofcheckboxtwtvo+'},"language": "'+lCode+'"}';
	if(broadCast_name!=''&&broadCast_message!=''&&broadCast_message!=' '&&broadCast_sender_name!=''&&broadCast_sender_email!=''&&res[4]!=0&&isvalid)
		{
			console.log('sending');
			$("#main").css({"opacity": "0.3"});
			broadcastFunc(datasinfo,x);
			$('#ldId').val("nl-nl").attr("selected", "selected");
		}
}

//tts email sms twitter to all contacts
function bTtsEmailSmsTwitterAllCon(senderId,broadCast_sender_email,broadCast_name,broadCast_sender_name,broadCast_message,broadCast_email_subject,lCode,x)
{
	$('#takeOneAction').val('false');
	var rEmail=1;var rTts=1;var rSms=1;var rTwitter=1;
	//checks of validations
	smsCntVal(senderId);
	generalValidations(broadCast_name,broadCast_message);
	var isvalid = emailCntVal(broadCast_sender_email,broadCast_sender_name);
	console.log("voice and email and sms twitter to all contacts");
	//checks for validations
	var res = calculateRecipients(rEmail,rTts,rSms,rTwitter);
	var Valueofcheckboxtwtvo=res[3];
	var Valueofcheckboxmobvo=res[2];
	var Valueofcheckboxmob=res[1];
	Valueofcheckbox=res[0];
	recipientVal(res[4]);
	broadCast_message = broadCast_message.split('"').join('');
	broadCast_message = broadCast_message.split('\n').join('');
	lCode=$('#ldId').val();
	//setting JSON
	datasinfo = '{"senderName":"'+senderId+'","message":"'+broadCast_message+'","emailSubject":"'+broadCast_email_subject+'","broadcastName":"'+broadCast_name+'","audio": "null",'+Valueofcheckbox+','+Valueofcheckboxmob+','+Valueofcheckboxmobvo+','+Valueofcheckboxtwtvo+'},"language": "'+lCode+'"}';
	if(broadCast_name!=''&&broadCast_message!=''&&broadCast_message!=' '&&broadCast_sender_name!=''&&broadCast_sender_email!=''&&res[4]!=0&&isvalid&&senderId!='')
		{
			console.log('sending');
			$("#main").css({"opacity": "0.3"});
			broadcastFunc(datasinfo,x);
			$('#ldId').val("nl-nl").attr("selected", "selected");
		}
}