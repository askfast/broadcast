// JavaScript Document

function hideGuide()
{
	$('#hideGuide').hide();
	$('#hideGuide1').hide();
	$('#hideGuide2').hide();


	if(typeof(Storage)!=="undefined")
	  {
		  window.localStorage.setItem( "status", "hide" );
		//alert(localStorage.getItem("status"));
	  }
	  //document.cookie="status=hide";

}


function nextScreen(x)
{
	if(x==1)
		{
			$('#hideGuide').hide();
			$('#hideGuide1').show();
		}
	else if(x==2)
		{
			$('#hideGuide1').hide();
			$('#hideGuide2').show();
		}
}

function prevScreen(x)
{
	if(x==1)
		{
			$('#hideGuide1').hide();
			$('#hideGuide').show();
		}
	else if(x==2)
		{
			$('#hideGuide2').hide();
			$('#hideGuide1').show();
		}
}

function addCntNewBroadcast()
{
	var rndid = Math.floor(Math.random() * (9999 - 100 + 1)) + 1;
	var fr_name=document.getElementById("rname").value;
	var srname=document.getElementById("rmobile").value;
	var mob = document.getElementById('rlline').value;
	var ldnum=document.getElementById("mllnm").value;
	var email_man = document.getElementById('meml').value;
	//var Notes = document.getElementById('Notes').value;
	var twtusername = document.getElementById('mtwt').value;
	
	if(fr_name=="" ){
	alert("Please input First Name");
	if(document.getElementById("takeOneAction").value=="false")
		{
			$('#takeOneAction').val('');
		}
	 return false;
	}
	if(srname=="" ){
	alert("Please input Surname");
	if(document.getElementById("takeOneAction").value=="false")
		{
			$('#takeOneAction').val('');
		}
	 return false;
	}
	
	if(email_man==''&&twtusername==''&&mob==''&&ldnum==''){
	alert("Please provide at least one communication alias from email, mobile, land-line and twitter username");
	if(document.getElementById("takeOneAction").value=="false")
		{
			$('#takeOneAction').val('');
		}
	 return false;
	}
	
	if(email_man!='')
		{
			var emailRegexStr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
			var isvalid = emailRegexStr.test(email_man); 
			
			 if (!isvalid) {
			  alert("Not a valid e-mail address");
			  if(document.getElementById("takeOneAction").value=="false")
					{
						$('#takeOneAction').val('');
					}
			  return false;
			}
		}
	
	if(mob!='')
		{
			var phoneNovalidation = /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/;
			var isvalidNo = phoneNovalidation.test(mob); 
			if (!isvalidNo) {
			  alert("Not a valid Phone number");
			  if(document.getElementById("takeOneAction").value=="false")
					{
						$('#takeOneAction').val('');
					}
			  return false;
			}
		}
		
	var Landlineval = /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/;
	if(ldnum!='')
		{
			var isvalidNo = Landlineval.test(ldnum); 
			if (!isvalidNo) {
			  alert("Not a valid Landline number");
			  if(document.getElementById("takeOneAction").value=="false")
					{
						$('#takeOneAction').val('');
					}
			  return false;
			}
		}
	
	
	 datas = '{"contactInfoRefs":['+rndid+'],"id":'+rndid+',"lastAvailableTime":"1380909873252","ownerKey":"yasir"}';
	 
	 datasinfo1 = '[{"contactInfoTag":"Name","contactInfo":"'+fr_name+' '+srname+'","firstName":"'+fr_name+'","lastName":"'+srname+'","contactKey": "'+rndid+'"},{"contactInfoTag":"Phone","contactInfo":"'+mob+'","contactKey": "'+rndid+'"},{"contactInfoTag":"Phone","contactInfo":"'+ldnum+'","firstName":"||","contactKey": "'+rndid+'"},{"contactInfoTag":"Email","contactInfo":"'+email_man+'","contactKey": "'+rndid+'"},{"contactInfoTag":"Special","contactInfo":"'+twtusername+'","contactKey": "'+rndid+'"}]';
	 $('#runafterSavedcnt').val('set');
	
					$('#img_loading1').show();
					$("#main").css({"opacity": "0.3"});
					$.ajax({	
						type: "POST",
						contentType: "application/json",
						dataType: 'json', 
						xhrFields: {
						withCredentials: true
						},
						data: datas,
						url : "http://askfastmarket1.appspot.com/accounts/contacts",
						cache: false,
						crossDomain: true,
						xhrFields: {
						withCredentials: true
						},
						success: function (data) {
					$('#img_loading1').show();
					$("#main").css({"opacity": "0.3"});
					$.ajax({	
						type: "PUT",
						contentType: "application/json",
						dataType: 'json', 
						xhrFields: {
						withCredentials: true
						},
						data: datasinfo1,
						url : "http://askfastmarket1.appspot.com/accounts/contactinfos?forceNewContact=true",
						cache: false,
						crossDomain: true,
						xhrFields: {
						withCredentials: true
						},
						success: function (data) {
						$('#img_loading1').hide();
						$("#main").css({"opacity": ""});
						$('#rname').val('');
						$('#rmobile').val('');
						$('#rlline').val('');
						$('#mllnm').val('');
						$('#email_man').val('');
						$('#meml').val('');
						$('#mtwt').val('');
						document.getElementById("saveCntNewB").checked = false;
						
				},
						error: function (data){
							alert(data.responseJSON.status);
				}
		});
						
				},
						error: function (data){
							alert(data.responseJSON.status);
						}
		});
}





function AddBroadcast(x)
{
	console.log(document.getElementById("takeOneAction").value);
	if(document.getElementById("takeOneAction").value=="")
	{
		$('#takeOneAction').val('false');
			console.log("yes");
	//alert(x);
	var check=0;
	var senderId=document.getElementById("sid").value;
	var receiver_name=document.getElementById("rname").value;
	var receiver_mobile=document.getElementById("rmobile").value;
	var receiver_landLine=document.getElementById("rlline").value;
	//var receiver_email=document.getElementById("remail").value;
	var broadCast_name=document.getElementById("bname").value;
	var broadCast_message=document.getElementById("textarea").value;
	var broadCast_sender_email=document.getElementById("semail").value;
	var broadCast_sender_name=document.getElementById("emailsbjt").value;
	var broadCast_email_subject=document.getElementById("emailsbjt").value;
	var manualMobile=document.getElementById("rlline").value;
	var manualEmail=document.getElementById("meml").value;
	var manualTwitter=document.getElementById("mtwt").value;
	var phoneNo=document.getElementById("rmobile").value;
	var Valueofcheckbox='';
	var saveOnly = ',"onlyPersist":"true"';
	var run = ',"onlyPersist":"false"';
	var lCode='';
	lCode=$('#ldId').val();
		
		// send broadcast through twitter and email and tts and to all contacts
		 if(!document.getElementById('checkbox_1').checked&&!document.getElementById('checkbox_5').checked&&document.getElementById('checkbox_2').checked&&document.getElementById('checkbox_6').checked&&document.getElementById('checkbox_twt').checked&&document.getElementById('checkbox_4').checked)
			{
				console.log(1);
				bTtsEmailTwitterAllCon(broadCast_sender_email,broadCast_name,broadCast_sender_name,broadCast_message,broadCast_email_subject,lCode,x);
			}
		
		// send broadcast through twitter and tts and sms to all contacts
		 else if(document.getElementById('checkbox_1').checked&&!document.getElementById('checkbox_5').checked&&!document.getElementById('checkbox_2').checked&&document.getElementById('checkbox_6').checked&&document.getElementById('checkbox_twt').checked&&document.getElementById('checkbox_4').checked)
			{
				console.log(2);
				bTtsSmsTwitterAllCon(senderId,broadCast_name,broadCast_message,lCode,x);
			}
			
		// send broadcast through twitter and email and sms to all contacts
		 else if(document.getElementById('checkbox_1').checked&&!document.getElementById('checkbox_5').checked&&document.getElementById('checkbox_2').checked&&!document.getElementById('checkbox_6').checked&&document.getElementById('checkbox_twt').checked&&document.getElementById('checkbox_4').checked)
			{
				console.log(3);
				bEmailSmsTwitterAllCon(senderId,broadCast_sender_email,broadCast_name,broadCast_sender_name,broadCast_message,broadCast_email_subject,x);
			}
		
		// send broadcast through twitter and tts to all contacts
		 else if(!document.getElementById('checkbox_1').checked&&!document.getElementById('checkbox_5').checked&&!document.getElementById('checkbox_2').checked&&document.getElementById('checkbox_6').checked&&document.getElementById('checkbox_twt').checked&&document.getElementById('checkbox_4').checked)
			{
				console.log(4);
				bTtsTwitterAllCon(broadCast_name,broadCast_message,lCode,x);
			}
		
		// send broadcast through twitter and email to all contacts
		else if(!document.getElementById('checkbox_1').checked&&!document.getElementById('checkbox_5').checked&&document.getElementById('checkbox_2').checked&&!document.getElementById('checkbox_6').checked&&document.getElementById('checkbox_twt').checked&&document.getElementById('checkbox_4').checked)
			{
				console.log(5);
				bEmailTwitterAllCon(broadCast_sender_email,broadCast_name,broadCast_sender_name,broadCast_message,broadCast_email_subject,x);
			}
		
		// send broadcast through twitter and sms to all contacts
		 else if(document.getElementById('checkbox_1').checked&&!document.getElementById('checkbox_5').checked&&!document.getElementById('checkbox_2').checked&&!document.getElementById('checkbox_6').checked&&document.getElementById('checkbox_twt').checked&&document.getElementById('checkbox_4').checked)
			{
				console.log(6);
				bSmsTwitterAllCon(senderId,broadCast_name,broadCast_message,x);
			}
			
			// send broadcast through twitter and email and tts and sms to all contacts
		else if(document.getElementById('checkbox_1').checked&&!document.getElementById('checkbox_5').checked&&document.getElementById('checkbox_2').checked&&document.getElementById('checkbox_6').checked&&document.getElementById('checkbox_twt').checked&&document.getElementById('checkbox_4').checked)
			{
				console.log(7);
				bTtsEmailSmsTwitterAllCon(senderId,broadCast_sender_email,broadCast_name,broadCast_sender_name,broadCast_message,broadCast_email_subject,lCode,x);
			}
	
		// send broadcast through twitter to all contacts
		else if(!document.getElementById('checkbox_1').checked&&!document.getElementById('checkbox_5').checked&&!document.getElementById('checkbox_2').checked&&!document.getElementById('checkbox_6').checked&&document.getElementById('checkbox_twt').checked&&document.getElementById('checkbox_4').checked)
			{
				console.log(8);
				bTwitterAllCon(broadCast_name,broadCast_message,x);
			}
		
		// send broadcast through twitter and email and tts and sms manually
		else if(document.getElementById('checkbox_1').checked&&document.getElementById('checkbox_5').checked&&document.getElementById('checkbox_2').checked&&document.getElementById('checkbox_6').checked&&document.getElementById('checkbox_twt').checked&&!document.getElementById('checkbox_4').checked)
			{
				console.log("yes");
				if(document.getElementById('saveCntNewB').checked)
					{
						addCntNewBroadcast();
						console.log(document.getElementById('runafterSavedcnt').value);
						if(document.getElementById('runafterSavedcnt').value=="set")
						{
							console.log("in tts email tts man");
							bTwitterTtsEmailSmsMan(broadCast_message,broadCast_name,senderId,manualTwitter,manualMobile,manualEmail,broadCast_email_subject,broadCast_sender_email,broadCast_sender_name,lCode,x);
							$('#runafterSavedcnt').val('');
						}
					}
				if(!document.getElementById('saveCntNewB').checked)
					{
						bTwitterTtsEmailSmsMan(broadCast_message,broadCast_name,senderId,manualTwitter,manualMobile,manualEmail,broadCast_email_subject,broadCast_sender_email,broadCast_sender_name,lCode,x);
					}
			}
		
		// send broadcast through twitter and email and tts manually
		else if(!document.getElementById('checkbox_1').checked&&document.getElementById('checkbox_5').checked&&document.getElementById('checkbox_2').checked&&document.getElementById('checkbox_6').checked&&document.getElementById('checkbox_twt').checked&&!document.getElementById('checkbox_4').checked)
			{
				console.log("yes");
				if(document.getElementById('saveCntNewB').checked)
					{
						addCntNewBroadcast();
						console.log(document.getElementById('runafterSavedcnt').value);
						if(document.getElementById('runafterSavedcnt').value=="set")
						{
							console.log("in tts email tts man");
							bTwitterTtsEmailMan(broadCast_message,broadCast_name,manualTwitter,manualMobile,manualEmail,broadCast_email_subject,broadCast_sender_email,broadCast_sender_name,lCode,x);
							$('#runafterSavedcnt').val('');
						}
					}
				if(!document.getElementById('saveCntNewB').checked)
					{
						bTwitterTtsEmailMan(broadCast_message,broadCast_name,manualTwitter,manualMobile,manualEmail,broadCast_email_subject,broadCast_sender_email,broadCast_sender_name,lCode,x);
					}
			}
		
		// send broadcast through twitter and sms and tts manually
		else if(document.getElementById('checkbox_1').checked&&document.getElementById('checkbox_5').checked&&!document.getElementById('checkbox_2').checked&&document.getElementById('checkbox_6').checked&&document.getElementById('checkbox_twt').checked&&!document.getElementById('checkbox_4').checked)
			{
				console.log("yes");
				if(document.getElementById('saveCntNewB').checked)
					{
						addCntNewBroadcast();
						if(document.getElementById('runafterSavedcnt').value=="set")
						{
							bTwitterTtsSmsMan(broadCast_message,broadCast_name,manualTwitter,manualMobile,senderId,lCode,x);
							$('#runafterSavedcnt').val('');
						}
					}
				if(!document.getElementById('saveCntNewB').checked)
					{
						bTwitterTtsSmsMan(broadCast_message,broadCast_name,manualTwitter,manualMobile,senderId,lCode,x);
					}
			}
		
		// send broadcast through twitter and sms and email manually
		else if(document.getElementById('checkbox_1').checked&&document.getElementById('checkbox_5').checked&&document.getElementById('checkbox_2').checked&&!document.getElementById('checkbox_6').checked&&document.getElementById('checkbox_twt').checked&&!document.getElementById('checkbox_4').checked)
			{
				console.log("yes");
				if(document.getElementById('saveCntNewB').checked)
					{
						addCntNewBroadcast();
						if(document.getElementById('runafterSavedcnt').value=="set")
						{
							bTwitterEmailSmsMan(broadCast_message,broadCast_name,manualTwitter,manualEmail,broadCast_email_subject,broadCast_sender_email,broadCast_sender_name,manualMobile,senderId,x);
							$('#runafterSavedcnt').val('');
						}
					}
				if(!document.getElementById('saveCntNewB').checked)
					{
						bTwitterEmailSmsMan(broadCast_message,broadCast_name,manualTwitter,manualEmail,broadCast_email_subject,broadCast_sender_email,broadCast_sender_name,manualMobile,senderId,x);
					}
			}
		
		
		// send broadcast through twitter and tts manually
		else if(!document.getElementById('checkbox_1').checked&&document.getElementById('checkbox_5').checked&&!document.getElementById('checkbox_2').checked&&document.getElementById('checkbox_6').checked&&document.getElementById('checkbox_twt').checked&&!document.getElementById('checkbox_4').checked)
			{
				if(document.getElementById('saveCntNewB').checked)
					{
						addCntNewBroadcast();
						if(document.getElementById('runafterSavedcnt').value=="set")
						{
							bTwitterTtsMan(broadCast_message,broadCast_name,manualTwitter,manualMobile,lCode,x)
							$('#runafterSavedcnt').val('');
						}
					}
				if(!document.getElementById('saveCntNewB').checked)
					{
						bTwitterTtsMan(broadCast_message,broadCast_name,manualTwitter,manualMobile,lCode,x)
					}
			}
		
		// send broadcast through twitter and email manually
		else if(!document.getElementById('checkbox_1').checked&&document.getElementById('checkbox_5').checked&&document.getElementById('checkbox_2').checked&&!document.getElementById('checkbox_6').checked&&document.getElementById('checkbox_twt').checked&&!document.getElementById('checkbox_4').checked)
			{
				if(document.getElementById('saveCntNewB').checked)
					{
						addCntNewBroadcast();
						if(document.getElementById('runafterSavedcnt').value=="set")
						{
							bTwitterEmailMan(broadCast_message,broadCast_name,manualTwitter,manualEmail,broadCast_email_subject,broadCast_sender_email,broadCast_sender_name,x)
							$('#runafterSavedcnt').val('');
						}
					}
				if(!document.getElementById('saveCntNewB').checked)
					{
						bTwitterEmailMan(broadCast_message,broadCast_name,manualTwitter,manualEmail,broadCast_email_subject,broadCast_sender_email,broadCast_sender_name,x)
					}
			}
		
		
		// send broadcast through twitter and sms manually
		else if(document.getElementById('checkbox_1').checked&&document.getElementById('checkbox_5').checked&&!document.getElementById('checkbox_2').checked&&!document.getElementById('checkbox_6').checked&&document.getElementById('checkbox_twt').checked&&!document.getElementById('checkbox_4').checked)
			{
				if(document.getElementById('saveCntNewB').checked)
					{
						addCntNewBroadcast();
						if(document.getElementById('runafterSavedcnt').value=="set")
						{
							bTwitterSmsMan(broadCast_message,broadCast_name,manualTwitter,manualMobile,senderId,x);
							$('#runafterSavedcnt').val('');
						}
					}
				if(!document.getElementById('saveCntNewB').checked)
					{
						bTwitterSmsMan(broadCast_message,broadCast_name,manualTwitter,manualMobile,senderId,x);
					}
			}
		
		//send broadcast through twitter manually
		else if(!document.getElementById('checkbox_1').checked&&document.getElementById('checkbox_5').checked&&!document.getElementById('checkbox_2').checked&&!document.getElementById('checkbox_6').checked&&document.getElementById('checkbox_twt').checked&&!document.getElementById('checkbox_4').checked)
			{
				console.log("yes");
				if(document.getElementById('saveCntNewB').checked)
					{
						addCntNewBroadcast();
						if(document.getElementById('runafterSavedcnt').value=="set")
						{
							bTwitterMan(broadCast_message,broadCast_name,manualTwitter,x);
							$('#runafterSavedcnt').val('');
						}
					}
				if(!document.getElementById('saveCntNewB').checked)
					{
						bTwitterMan(broadCast_message,broadCast_name,manualTwitter,x);
					}
			}
		
		//send broadcast through sms manually
 	 else if (document.getElementById('checkbox_1').checked&&document.getElementById('checkbox_5').checked&&!document.getElementById('checkbox_2').checked&&!document.getElementById('checkbox_6').checked&&!document.getElementById('checkbox_twt').checked&&!document.getElementById('checkbox_4').checked) 
		{
			if(document.getElementById('saveCntNewB').checked)
				{
					addCntNewBroadcast();
					if(document.getElementById('runafterSavedcnt').value=="set")
						{
							console.log("in sms man");
							bSmsMan(broadCast_name,senderId,broadCast_message,manualMobile,x);
							$('#runafterSavedcnt').val('');
						}
				}
			if(!document.getElementById('saveCntNewB').checked)
				{
					bSmsMan(broadCast_name,senderId,broadCast_message,manualMobile,x);
				}
		}
		
		//send broadcast through email manually
 	 else if (!document.getElementById('checkbox_1').checked&&document.getElementById('checkbox_5').checked&&document.getElementById('checkbox_2').checked&&!document.getElementById('checkbox_6').checked&&!document.getElementById('checkbox_twt').checked&&!document.getElementById('checkbox_4').checked) 
		{
			if(document.getElementById('saveCntNewB').checked)
				{
					addCntNewBroadcast();
					if(document.getElementById('runafterSavedcnt').value=="set")
						{
							bEmailMan(broadCast_name,broadCast_sender_email,broadCast_sender_name,broadCast_message,manualEmail,broadCast_email_subject,x);
							$('#runafterSavedcnt').val('');
						}
				}
			if(!document.getElementById('saveCntNewB').checked)
				{
					bEmailMan(broadCast_name,broadCast_sender_email,broadCast_sender_name,broadCast_message,manualEmail,broadCast_email_subject,x);
				}
		}
		
		//send broadcast through voice tts manually
 	 else if (!document.getElementById('checkbox_1').checked&&document.getElementById('checkbox_5').checked&&!document.getElementById('checkbox_2').checked&&document.getElementById('checkbox_6').checked&&!document.getElementById('checkbox_twt').checked&&!document.getElementById('checkbox_4').checked) 
		{
			if(document.getElementById('saveCntNewB').checked)
				{
					addCntNewBroadcast();
					if(document.getElementById('runafterSavedcnt').value=="set")
						{
							bTtsMan(broadCast_name,broadCast_message,manualMobile,lCode,x);
							$('#runafterSavedcnt').val('');
						}
				}
			if(!document.getElementById('saveCntNewB').checked)
				{
					bTtsMan(broadCast_name,broadCast_message,manualMobile,lCode,x);
				}
		}
		
		//send broadcast through email and sms manually
 	 else if (document.getElementById('checkbox_1').checked&&document.getElementById('checkbox_5').checked&&document.getElementById('checkbox_2').checked&&!document.getElementById('checkbox_6').checked&&!document.getElementById('checkbox_twt').checked&&!document.getElementById('checkbox_4').checked) 
		{
			if(document.getElementById('saveCntNewB').checked)
				{
					addCntNewBroadcast();
					if(document.getElementById('runafterSavedcnt').value=="set")
						{
							bSmsEmailMan(broadCast_name,broadCast_sender_email,broadCast_sender_name,broadCast_message,manualEmail,broadCast_email_subject,senderId,manualMobile,x);
							$('#runafterSavedcnt').val('');
						}
				}
			if(!document.getElementById('saveCntNewB').checked)
				{
					bSmsEmailMan(broadCast_name,broadCast_sender_email,broadCast_sender_name,broadCast_message,manualEmail,broadCast_email_subject,senderId,manualMobile,x);
				}
		}
		
		//send broadcast through tts and sms manually
 	else if (document.getElementById('checkbox_1').checked&&document.getElementById('checkbox_5').checked&&!document.getElementById('checkbox_2').checked&&document.getElementById('checkbox_6').checked&&!document.getElementById('checkbox_twt').checked&&!document.getElementById('checkbox_4').checked) 
		{
			if(document.getElementById('saveCntNewB').checked)
				{
					addCntNewBroadcast();
					if(document.getElementById('runafterSavedcnt').value=="set")
						{
							bSmsTtsMan(broadCast_name,senderId,broadCast_message,manualMobile,lCode,x);
							$('#runafterSavedcnt').val('');
						}
				}
			if(!document.getElementById('saveCntNewB').checked)
				{
					bSmsTtsMan(broadCast_name,senderId,broadCast_message,manualMobile,lCode,x);
				}
		}
		
		//send broadcast through email and tts manually
 	else if (!document.getElementById('checkbox_1').checked&&document.getElementById('checkbox_5').checked&&document.getElementById('checkbox_2').checked&&document.getElementById('checkbox_6').checked&&!document.getElementById('checkbox_twt').checked&&!document.getElementById('checkbox_4').checked) 
		{
			if(document.getElementById('saveCntNewB').checked)
				{
					addCntNewBroadcast();
					if(document.getElementById('runafterSavedcnt').value=="set")
						{
							bTtsEmailMan(broadCast_name,broadCast_sender_email,broadCast_sender_name,broadCast_message,manualEmail,broadCast_email_subject,lCode,manualMobile,x);
							$('#runafterSavedcnt').val('');
						}
				}
			if(!document.getElementById('saveCntNewB').checked)
				{
					bTtsEmailMan(broadCast_name,broadCast_sender_email,broadCast_sender_name,broadCast_message,manualEmail,broadCast_email_subject,lCode,manualMobile,x);
				}
		}
		
		//send broadcast through email sms and tts manually
 	else if (document.getElementById('checkbox_1').checked&&document.getElementById('checkbox_5').checked&&document.getElementById('checkbox_2').checked&&document.getElementById('checkbox_6').checked&&!document.getElementById('checkbox_twt').checked&&!document.getElementById('checkbox_4').checked) 
		{
		if(document.getElementById('saveCntNewB').checked)
			{
				addCntNewBroadcast();
				if(document.getElementById('runafterSavedcnt').value=="set")
						{
							bSmsEmailTtsMan(broadCast_name,broadCast_sender_email,broadCast_sender_name,broadCast_message,manualEmail,broadCast_email_subject,senderId,manualMobile,lCode,x);
							$('#runafterSavedcnt').val('');
						}
			}
		if(!document.getElementById('saveCntNewB').checked)
			{
				bSmsEmailTtsMan(broadCast_name,broadCast_sender_email,broadCast_sender_name,broadCast_message,manualEmail,broadCast_email_subject,senderId,manualMobile,lCode,x);
			}
		}
		
	//sms to all selected contacts
	else if(document.getElementById('checkbox_7').checked&&!document.getElementById('checkbox_2').checked&&document.getElementById('checkbox_1').checked&&!document.getElementById('checkbox_6').checked)
		{
			console.log(9);
			bSmsAllCon(broadCast_name,senderId,broadCast_message,x);
		}
	
		// email to all selected contacts
	else if(document.getElementById('checkbox_7').checked&&document.getElementById('checkbox_2').checked&&!document.getElementById('checkbox_1').checked&&!document.getElementById('checkbox_6').checked)
		{
			//debugger
			console.log(10);
			bEmailAllCon(broadCast_message,broadCast_sender_email,broadCast_name,broadCast_sender_name,broadCast_email_subject,x);
		}
	
	//email and sms both to all selected contacts
	else if(document.getElementById('checkbox_7').checked&&document.getElementById('checkbox_2').checked&&document.getElementById('checkbox_1').checked&&!document.getElementById('checkbox_6').checked)
		{
			console.log(11);
			bEmailSmsAllCon(broadCast_name,broadCast_sender_name,broadCast_sender_email,broadCast_message,senderId,broadCast_email_subject,x);
		}
			
		
		//voice tts broadcast to all selected contacts
		else if(document.getElementById('checkbox_6').checked&&document.getElementById('radio-01').checked&&document.getElementById('checkbox_7').checked&&!document.getElementById('checkbox_1').checked&&!document.getElementById('checkbox_2').checked)
			{
				console.log(12);
				bTtsAllCon(broadCast_name,broadCast_message,lCode,x);
			}
			
			//voice tts and sms broadcast to all selected contacts
		else if(document.getElementById('checkbox_6').checked&&document.getElementById('radio-01').checked&&document.getElementById('checkbox_7').checked&&document.getElementById('checkbox_1').checked&&!document.getElementById('checkbox_2').checked)
			{
				console.log(13);
				bTtsSmsAllCon(senderId,broadCast_name,broadCast_message,x);
			}
			
			
			//voice tts and email broadcast to all selected contacts
		else if(document.getElementById('checkbox_6').checked&&document.getElementById('radio-01').checked&&document.getElementById('checkbox_7').checked&&document.getElementById('checkbox_2').checked&&!document.getElementById('checkbox_1').checked)
			{
				console.log(14);
				bTtsEmailAllCon(broadCast_sender_email,broadCast_name,broadCast_sender_name,broadCast_message,broadCast_email_subject,x);
			}
			
			
			//voice tts and email and sms broadcast to all selected contacts
		else if(document.getElementById('checkbox_6').checked&&document.getElementById('radio-01').checked&&document.getElementById('checkbox_7').checked&&document.getElementById('checkbox_2').checked&&document.getElementById('checkbox_1').checked)
			{
				console.log(15);
				bTtsEmailSmsAllCon(senderId,broadCast_sender_email,broadCast_name,broadCast_sender_name,broadCast_message,broadCast_email_subject,lCode,x);
			}
			
			//send broadcast to all contacts contained by all selected groups
	
	else if (document.getElementById('checkbox_8').checked&&document.getElementById('checkbox_2').checked) 
		{
			var output='';
			
			console.log("email broadcast to all groups");
			//checks of validations
			if(broadCast_sender_name=='')
				{
					alert("Subject name cannot be empty");
					if(document.getElementById("checkbox_2").checked == false)
						{
							document.getElementById("checkbox_2").checked = true;
						}
					document.getElementById("emailsbjt").focus();
				}
		
		if(broadCast_sender_email=='')
			{
				alert("Sender email cannot be empty");
				if(document.getElementById("checkbox_2").checked == false)
					{
						document.getElementById("checkbox_2").checked = true;
					}
				document.getElementById("semail").focus();
			}
			var id = "<?php  echo $session_id; ?>";
			var k=0;
			var counter=0;
			$("input:checkbox").each(function()
			{
			
			var $this = $(this); 
			if($this.is(":checked"))
				{
						var myCheckbox=$this.attr("id");
						var c=myCheckbox.split("_");
						if(c[0]=='checkbox1')
							{
								
								var group_id=document.getElementById(myCheckbox).value;
								$.ajax({	
									type: "GET",
									contentType: "application/json",
									dataType: 'html', 
									xhrFields: {
									withCredentials: true
									},
									url : "http://askfastmarket1.appspot.com/accounts/groups/"+group_id,
									cache: false,
									crossDomain: true,
									xhrFields: {
									withCredentials: true
									},
									success: function (data) {
										obj = JSON.parse(data);
										var contact_ids=obj.contactInfoIds;
										var s='';
										
										var j=0;
										
										var Valueofcheckbox='';
										var a ='"addresses":{"EMAIL": []}';
										var checkboxes = new Array();
										var position = 23;
										output = a.substr(0, position) + s + a.substr(position);
										
										var abc = '';
										
										//loop to sum up all recipients
										for(var i=0;i<contact_ids.length;i++)
											{
												counter++;
												$.ajax({	
												type: "GET",
												contentType: "application/json",
												dataType: 'html', 
												xhrFields: {
												withCredentials: true
												},
												url : "http://askfastmarket1.appspot.com/accounts/contactinfos/"+contact_ids[i],
												asycn: false,
												cache: false,
												crossDomain: true,
												xhrFields: {
												withCredentials: true
												},
												success: function (data1) {
													objcnt = JSON.parse(data1);
													
													var contact_email=objcnt.contactInfo;
													if(contact_email!='')
														{
															if(k==0)
																{
																	s = '{"address": "'+contact_email+'"}';
																	k=1;
																}
															else
																{
																	s = '{"address": "'+contact_email+'"},';
																}
																abc = abc + s;
															output = output.substr(0, position) + s + output.substr(position);
														}
													
												},
												error: function (data){
													alert(data.responseJSON.status);
												}
												});
				
											}
				
									},
									error: function (data){
										alert(data.responseJSON.status);
									}
									});
								}
				}
			});
									var check = function()
									{
										if(output1==output&&output1!='')
											{
												
													Valueofcheckbox=output1;
												
													broadCast_message = broadCast_message.split('"').join('');
													broadCast_message = broadCast_message.split('\n').join('');
													//setting JSON
													datasinfo = '{"senderName":"'+broadCast_sender_name+'","message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","emailSubject":"'+broadCast_name+'",'+Valueofcheckbox+'}';
													
																
													var id = "<?php  echo $session_id; ?>";		
												if(broadCast_name!=''&&broadCast_message!='')
												{
													broadcastFunc(datasinfo,x);
													
												
												}
											}
										else
											{
												setTimeout(check, 2000); // check again in 2 second
											}
										 
										
										output1=output;
											
									}
									var output1='';
									check();
		}
	
	else
	{}
	
	
	}
}

function authTwitt()
{
	window.location='http://askfastmarket1.appspot.com/accounts/adapterconfigs/twitter/oauth?frontendCallback=http://www.techleadz.com/BroadCast/index.php';
	$('#afterAuth').val('set');
}

function authTwitt111()
{
	window.open("https://twitter.com/settings/applications", '_blank');
}

//function to load contacts by click of a checkbox on new broadcast page
function checkboxContacts(){
		
		$('#main_icon').show();
		$("#checkboxContacts").html('');
		var count = 10;
		var count2 = 1;
		var phone = '';
		var email = '' ;
		var landLine = '' ;
		
		delay();
		
		var div_id = 1;
		var phone = '';
		var email = '' ;
		var landLine = '' ;
		var strHtml = '';
		var Note='';
		var twittername = '';
		var emailTagid=1;
		var PhoneTagid=1;
		var LLineTagid=1;
		var NoteId=1;
		var contactKey='';
     
		$('#img_loading1').show();
		$("#main").css({"opacity": "0.3"});
		$.ajax({	
			type: "GET",
			contentType: "application/json",
			dataType: 'JSON', 
			xhrFields: {
			withCredentials: true
			},
			url : "http://askfastmarket1.appspot.com/accounts/contacts?detailed=true&orderBy=firstName&fetchOwner=false",
			cache: false,

			success: function (data) {
				//debugger
				
						var counterLoop = 0;
						var strHtml = '';
						arrlength=0;
						arrlength = data.length;
				//debugger
						for (var i=0; i<arrlength; i++)
						{	
									
									Note='';
								    phone = '';
									email = '';
									landLine = '';
									fstname = '';
									flname = '';
									lstname = '';
									twittername = '';
									emailTagid=1;
									PhoneTagid=1;
									LLineTagid=1;
									NoteId=1;
									nametagid=1;
									specialtagid=1;
									isPart=0;
									contactKey='';
									
									var contactinfosLength=data[i].contactInfos.length;
									contactKey=data[i].id;
								
									for(var j=0;j<contactinfosLength;j++)
										{
											for(m=0;m<data[i].contactInfos[j].groupKeys.length;m++)
												{
													//if(data[i].contactInfos[j].groupKeys[m]==gpID)
//													{
//														isPart=1;
//													}
												}
											//all about note
											if(typeof 	data[i].contactInfos[j] != "undefined")
													{
													if(data[i].contactInfos[j].contactInfoTag=="OTHER")
													{
														
														 NoteId=data[i].contactInfos[j].id;
														 Note=data[i].contactInfos[j].contactInfo;
														
													}
												
													if(data[i].contactInfos[j].contactInfoTag=="NAME")
														{
															nametagid=data[i].contactInfos[j].id;
															var fstname = data[i].contactInfos[j].firstName;
															var lstname = data[i].contactInfos[j].lastName;
															var flname = fstname+" "+lstname;
														}
														
													if(data[i].contactInfos[j].contactInfoTag=="SPECIAL")
													{
														 specialtagid=data[i].contactInfos[j].id;
														 twittername=data[i].contactInfos[j].contactInfo;
													}
													
													if(data[i].contactInfos[j].contactInfoTag=="EMAIL")
														{
															var emailTagid=data[i].contactInfos[j].id;
															email=data[i].contactInfos[j].contactInfo; 
														}
													if(data[i].contactInfos[j].contactInfoTag=="PHONE"&&data[i].contactInfos[j].firstName !="||")
														{
															var PhoneTagid=data[i].contactInfos[j].id;
														}
													if(data[i].contactInfos[j].contactInfoTag=="PHONE"&&data[i].contactInfos[j].firstName =="||")
														{
															var LLineTagid=data[i].contactInfos[j].id;
														}
													
													
													 if(data[i].contactInfos[j].contactInfoTag=="PHONE"&&data[i].contactInfos[j].firstName !="||")
														 {
															 phone=data[i].contactInfos[j].contactInfo;
															 
														 }
													 if(data[i].contactInfos[j].contactInfoTag=="PHONE"&&data[i].contactInfos[j].firstName =="||")
													 {	 landLine='';
														 landLine=data[i].contactInfos[j].contactInfo;
													 }
												 
												 
													}
	
										}
										
										
										//email
									 if(flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid==1&&LLineTagid==1&&specialtagid==1)
									 {
										 console.log("email");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='checkbox_"+count+"' type='checkbox' name='chkboxx' value="+email+"|"+phone+"|"+contactKey+"|"+twittername+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/at1.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //phone
									if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid!=1&&LLineTagid==1&&specialtagid==1)
									 {
										 console.log("phone");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='checkbox_"+count+"' type='checkbox' name='chkboxx' value="+email+"|"+phone+"|"+contactKey+"|"+twittername+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/latter1.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //landline
									if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid==1&&LLineTagid!=1&&specialtagid==1)
									 {
										 console.log("landline");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='checkbox_"+count+"' type='checkbox' name='chkboxx' value="+email+"|"+phone+"|"+contactKey+"|"+twittername+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/phone.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //twitter
									if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid==1&&LLineTagid==1&&specialtagid!=1)
									 {
										console.log("twitter");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='checkbox_"+count+"' type='checkbox' name='chkboxx' value="+email+"|"+phone+"|"+contactKey+"|"+twittername+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/twittericon.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //phone landline
									 if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid!=1&&LLineTagid!=1&&specialtagid==1)
									 {
										console.log("phone landline");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='checkbox_"+count+"' type='checkbox' name='chkboxx' value="+email+"|"+phone+"|"+contactKey+"|"+twittername+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/latter1.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //phone email
									  if(flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid!=1&&LLineTagid==1&&specialtagid==1)
									 {
										console.log("phone email");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='checkbox_"+count+"' type='checkbox' name='chkboxx' value="+email+"|"+phone+"|"+contactKey+"|"+twittername+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/latter1.png'><img alt='' src='images/at1.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //phone twitter
									  if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid!=1&&LLineTagid==1&&specialtagid!=1)
									 {
										 console.log("phone twitter");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='checkbox_"+count+"' type='checkbox' name='chkboxx' value="+email+"|"+phone+"|"+contactKey+"|"+twittername+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/latter1.png'><img alt='' src='images/twittericon.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //landline email
									  if(flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid==1&&LLineTagid!=1&&specialtagid==1)
									 {
										 console.log("landline email");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='checkbox_"+count+"' type='checkbox' name='chkboxx' value="+email+"|"+phone+"|"+contactKey+"|"+twittername+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/at1.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //landline twitter
									  if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid==1&&LLineTagid!=1&&specialtagid!=1)
									 {
										 console.log("landline twitter");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='checkbox_"+count+"' type='checkbox' name='chkboxx' value="+email+"|"+phone+"|"+contactKey+"|"+twittername+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/twittericon.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									  //email twitter
									  if(flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid==1&&LLineTagid==1&&specialtagid!=1)
									 {
										 console.log("email twitter");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='checkbox_"+count+"' type='checkbox' name='chkboxx' value="+email+"|"+phone+"|"+contactKey+"|"+twittername+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/at1.png'><img alt='' src='images/twittericon.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //mobile landline email
									  if(flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid!=1&&LLineTagid!=1&&specialtagid==1)
									 {
										 console.log("mobile landline email");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='checkbox_"+count+"' type='checkbox' name='chkboxx' value="+email+"|"+phone+"|"+contactKey+"|"+twittername+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/latter1.png'><img alt='' src='images/at1.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //mobile email twitter or all
									  if((flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid!=1&&LLineTagid==1&&specialtagid!=1)||(flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid!=1&&LLineTagid!=1&&specialtagid!=1))
									 {
										 console.log("mobile email twitter or all");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='checkbox_"+count+"' type='checkbox' name='chkboxx' value="+email+"|"+phone+"|"+contactKey+"|"+twittername+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/latter1.png'><img alt='' src='images/at1.png'><img alt='' src='images/twittericon.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
							 
							$("#checkboxContacts").html(strHtml);
							$("#checkboxContacts").show();
							$('#img_loading1').hide();
							$("#main").css({"opacity": ""});
					
				}
						if(arrlength==0)
							 {
							 //alert("hello");
							 	//$("#emptycontactlist").show();
							 	//$("#div_individuals").html("Your contact list is empty.");
								//$("#div_individuals").show();
							 }
			},
			error: function (data){
				alert(data.responseJSON.status);
			} 
		});
		
}




//function to load groups by click of checkbox on new broadcast page
function checkboxGroupsF(){
		
		$('#main_icon').show();
		$("#checkboxGroups").html('');
		var count = 10;
		var count2 = 1;
		var phone = '';
		var email = '' ;
		var landLine = '' ;
		
		delay();
		
		var div_id = 1;
		$('#img_loading1').show();
		$("#main").css({"opacity": "0.3"});
		$.ajax({	
			type: "GET",
			contentType: "application/json",
			dataType: 'JSON', 
			xhrFields: {
			withCredentials: true
			},
			url : "http://askfastmarket1.appspot.com/accounts/groups?detailed=false",
			cache: false,
			crossDomain: true,
			success: function (data) {
				var counterLoop = 0;
				var strHtml = '';
				var counterLoop = 0;
				var strHtml = '';
				arrlength = data.length;
				for (var i=0; i<arrlength; i++)
				{	
				
						 if(data[i].name)
						 {
							var grpname = data[i].name;
						 }
						 else
						 {
							grpname = '';
						 }
						
						 if(grpname != '')
						 {
						 gpname = grpname;
						 counterLoop++;
						 }
						 else
						 {
							gpname = '';	
						 }
						 
	
						 if(gpname != '')
						 {
							count++;
							strHtml += "<div class='ah'><span><input id='checkbox1_"+count+"' type='checkbox' name='chkbox1' value="+data[i].id+" onClick='changeparent1()' /></span><span>"+gpname+"</span> <span class='icon'><img src='images/twtter.png' alt='latter' /><img src='images/at.png' alt='latter' /><img src='images/latter.png' alt='latter' /></span><div class='clear'></div></div>";
					
						 }
						$("#checkboxGroups").html(strHtml);
						$("#checkboxGroups").show();
						$('#img_loading1').hide(); 
						$("#main").css({"opacity": ""});
					
				}
					if(arrlength==0)
							 {
								$("#emptyGrouplist").show();
							 }
			},
			error: function (data){
				alert(data.responseJSON.status);
			}
		});
		
}


//calling function to load contacts on new broadcast page 	
$(document).ready(function(){
	
	$('#checkbox_7').click(function () {
		if(this.checked)
			{
				checkboxContacts();
			}
	
	});
	
	//calling function to load groups on new broadcast page
	$('#checkbox_8').click(function () {
		if(this.checked)
			{
				checkboxGroupsF();
			}
	
	});
	
	$.ajax({	
					type: "GET",
					contentType: "application/json",
					dataType: 'json',
					xhrFields: {
					withCredentials: true
					},
					url : "http://askfastmarket1.appspot.com/accounts/adapterconfigs",
					cache: false,
					crossDomain: true,
					xhrFields: {
					withCredentials: true
					},
					success: function (data) {
						var check =0;
						if(data.length>0)
							{
								for(var i=0;i<data.length;i++)
									{
										if(typeof data[i].myAddress!="undefined")
											{
												console.log(data[i].myAddress);
												$("#beforeAuth").hide();
												$("#twt1").hide();
												$("#twt22").show();
												$("#afterTAuth").html('&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+data[i].myAddress+' will be used for twitter broadcast.');
												$("#afterTAuth").show();
												check =1;
											}
									}
							}
						if(check == 0)
							{
								$("#beforeAuth").show();
								$("#twt22").hide();
								$("#twt1").show();
								$("#afterTAuth").hide();
							}
						},
					error: function (data){
						alert(data.responseJSON.status);
					}
				});
				
				if(window.localStorage.getItem("status")=='hide')
					{
						$('#hideGuide').hide();
						$('#hideGuide1').hide();
						$('#hideGuide2').hide();
					}
				else
					{
						$('#hideGuide').show();
					}
					console.log(window.localStorage.getItem("status"));
					//window.localStorage.setItem( "status", "" );
					//if(document.cookie=='hide')
//					{
//						$('#hideGuide').hide();
//						$('#hideGuide1').hide();
//						$('#hideGuide2').hide();
//					}
//					console.log(document.cookie);

});