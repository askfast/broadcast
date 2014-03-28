// JavaScript Document
function broadcastFunc(datasinfo,x)
{
	var composedurl='';
	if(x==0)
		{
			composedurl="http://askfastmarket1.appspot.com/products/broadcastnew?onlyPersist=false"
		}
		
	if(x==1)
		{
			composedurl="http://askfastmarket1.appspot.com/products/broadcastnew?onlyPersist=true"
		}
	
	$.ajax({	
					type: "POST",
					contentType: "application/json",
					dataType: 'json',
					data: datasinfo,
					xhrFields: {
					withCredentials: true
					},
					url : composedurl,
					cache: false,
					crossDomain: true,
					xhrFields: {
					withCredentials: true
					},
					success: function (data) {
					var jasonValue = JSON.stringify(data) ;
					BS();
					document.getElementById("semail").value="";
					document.getElementById("sid").value="";
					document.getElementById("rname").value="";
					document.getElementById("rmobile").value="";
					document.getElementById("rlline").value="";
					//document.getElementById("remail").value="";
					document.getElementById("meml").value="";
					document.getElementById("bname").value="";
					document.getElementById("textarea").value="";
					document.getElementById("emailsbjt").value="";
					document.getElementById("mtwt").value="";
					document.body.scrollTop = document.documentElement.scrollTop = 0;
					if(document.getElementById("takeOneAction").value=="false")
						{
							$('#takeOneAction').val('');
						}
					$("input:checkbox").each(function()
					{
						var $this = $(this); 
						if($this.is(":checked"))
							{
								checkboxes=$this.attr("id");
								$('#'+checkboxes).prop('checked', false);
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
	//console.log(document.getElementById("takeOneAction").value);
	if(document.getElementById("takeOneAction").value=="")
	{
		$('#takeOneAction').val('false');
			
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
	
		//send broadcast through twitter manually
		if(!document.getElementById('checkbox_1').checked&&document.getElementById('checkbox_5').checked&&!document.getElementById('checkbox_2').checked&&!document.getElementById('checkbox_6').checked&&document.getElementById('checkbox_twt').checked&&!document.getElementById('checkbox_4').checked)
			{
				console.log("twitter manually");
				if(broadCast_message=='')
				{
					alert("Broadcast message cannot be empty");
					
					document.getElementById("textarea").focus();
					if(document.getElementById("takeOneAction").value=="false")
						{
							$('#takeOneAction').val('');
						}
				}
				if(broadCast_name=='')
				{
					alert("Broadcsat name cannot be empty");
					document.getElementById("bname").focus();
					if(document.getElementById("takeOneAction").value=="false")
						{
							$('#takeOneAction').val('');
						}
				}
				if(manualTwitter=='')
				{
					if(document.getElementById("checkbox_4").checked == false)
						{
							document.getElementById("checkbox_4").checked = true;
						}
					alert("Twitter username cannot be empty");
					document.getElementById("mtwt").focus();
					if(document.getElementById("takeOneAction").value=="false")
						{
							$('#takeOneAction').val('');
						}
				}
				manualTwitter='@'+manualTwitter;
				datasinfo = '{"message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","addresses":{"TWITTER": [{"address":"'+manualTwitter+'"}]}}';
				//alert(datasinfo);
				console.log(manualTwitter);
				if(broadCast_name!=''&&broadCast_message!=''&&manualTwitter!='@')
				{
					console.log("sending");
					broadcastFunc(datasinfo,x);
				}
			}
		
		//send broadcast through sms manually
 	 if (document.getElementById('checkbox_1').checked&&document.getElementById('checkbox_5').checked&&!document.getElementById('checkbox_2').checked&&!document.getElementById('checkbox_6').checked&&!document.getElementById('checkbox_twt').checked&&!document.getElementById('checkbox_4').checked) 
		{
			console.log("sms manually");
			if(broadCast_name=='')
			{
				alert("Broadcsat name cannot be empty");
				document.getElementById("bname").focus();
				if(document.getElementById("takeOneAction").value=="false")
					{
						$('#takeOneAction').val('');
					}
			}
			if(senderId=='')
				{
					senderId='ASK-Fast';
					alert("Sender Id cannot be empty");
					if(document.getElementById("checkbox_1").checked == false)
						{
							document.getElementById("checkbox_1").checked = true;
						}
					document.getElementById("sid").focus();
				}
				
			if(broadCast_message=='')
				{
					alert("Broadcast message cannot be empty");
					
					document.getElementById("textarea").focus();
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
					}
				
			broadCast_message = broadCast_message.split('"').join('');
			broadCast_message = broadCast_message.split('\n').join('');
			var rmid = Math.floor(Math.random() * (9999 - 100 + 1)) + 1;
			
			datasinfo = '{"senderName":"'+senderId+'","message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","addresses":{"SMS": [{"address":"'+manualMobile+'","contactKey": "'+rmid+'"}]},"adapterList": {"SMS": ""}}';
			//alert(datasinfo);

			if(broadCast_name!=''&&senderId!=''&&broadCast_message!=''&&manualMobile!=''&&isvalidNo)
				{
					console.log("sending");
					broadcastFunc(datasinfo,x);
				}
			
		}
		
		//send broadcast through email manually
 	 if (!document.getElementById('checkbox_1').checked&&document.getElementById('checkbox_5').checked&&document.getElementById('checkbox_2').checked&&!document.getElementById('checkbox_6').checked&&!document.getElementById('checkbox_twt').checked&&!document.getElementById('checkbox_4').checked) 
		{
			console.log("email manually");
			if(broadCast_name=='')
			{
				alert("Broadcsat name cannot be empty");
				document.getElementById("bname").focus();
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
				
			if(broadCast_message=='')
				{
					alert("Broadcast message cannot be empty");
					
					document.getElementById("textarea").focus();
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
				  if(document.getElementById("takeOneAction").value=="false")
					{
						$('#takeOneAction').val('');
					}
				  return false;
				}
			}
				
			broadCast_message = broadCast_message.split('"').join('');
			broadCast_message = broadCast_message.split('\n').join('');
			var rmid = Math.floor(Math.random() * (9999 - 100 + 1)) + 1;
			
			datasinfo = '{"senderName":"'+broadCast_sender_email+'","message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","emailSubject":"'+broadCast_email_subject+'","addresses":{"EMAIL": [{"address":"'+manualEmail+'","contactKey": "'+rmid+'"}]}}';
				
			//alert(datasinfo);
						
				
		if(broadCast_name!=''&&broadCast_message!=''&&broadCast_sender_name!=''&&broadCast_sender_email!=''&&emailReg.test( broadCast_sender_email )&&isvalid)
			{
				console.log("sending");
				broadcastFunc(datasinfo,x);
				
			}
			
		}
		
		//send broadcast through voice tts manually
 	 if (!document.getElementById('checkbox_1').checked&&document.getElementById('checkbox_5').checked&&!document.getElementById('checkbox_2').checked&&document.getElementById('checkbox_6').checked&&!document.getElementById('checkbox_twt').checked&&!document.getElementById('checkbox_4').checked) 
		{
			console.log("voice tts manually");
			if(broadCast_name=='')
			{
				alert("Broadcsat name cannot be empty");
				document.getElementById("bname").focus();
				if(document.getElementById("takeOneAction").value=="false")
					{
						$('#takeOneAction').val('');
					}
			}
				
			if(broadCast_message=='')
				{
					alert("Broadcast message cannot be empty");
					
					document.getElementById("textarea").focus();
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
					}
				
			broadCast_message = broadCast_message.split('"').join('');
			broadCast_message = broadCast_message.split('\n').join('');
			var rmid = Math.floor(Math.random() * (9999 - 100 + 1)) + 1;
			//datasinfo = '{"message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","audio": "null",'+Valueofcheckbox+',"language": "'+lCode+'"}';
			datasinfo = '{"message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","addresses":{"CALL": [{"address":"'+manualMobile+'","contactKey": "'+rmid+'"}]},"language": "'+lCode+'"}';
			//alert(datasinfo);

			if(broadCast_name!=''&&broadCast_message!=''&&manualMobile!=''&&isvalidNo)
				{
					console.log("sending");
					broadcastFunc(datasinfo,x);
					
				}
			
		}
	
		if(broadCast_name=='')
			{
				alert("Broadcsat name cannot be empty");
				document.getElementById("bname").focus();
				if(document.getElementById("takeOneAction").value=="false")
					{
						$('#takeOneAction').val('');
					}
			}
			
		if(broadCast_message=='')
			{
				alert("Broadcast message cannot be empty");
				
				document.getElementById("textarea").focus();
				if(document.getElementById("takeOneAction").value=="false")
					{
						$('#takeOneAction').val('');
					}
			}
		
		
	//sms to all selected contacts
	if(document.getElementById('checkbox_7').checked&&!document.getElementById('checkbox_2').checked&&document.getElementById('checkbox_1').checked&&!document.getElementById('checkbox_6').checked)
		{
			$('#takeOneAction').val('false');
			console.log("sms to all contacts");
			//checks for validations
			if(broadCast_name=='')
			{
				alert("Broadcsat name cannot be empty");
				document.getElementById("bname").focus();
				if(document.getElementById("takeOneAction").value=="false")
					{
						$('#takeOneAction').val('');
					}
			}
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
				
			if(broadCast_message=='')
				{
					alert("Broadcast message cannot be empty");
					
					document.getElementById("textarea").focus();
					if(document.getElementById("takeOneAction").value=="false")
						{
							$('#takeOneAction').val('');
						}
				}
			
			 var counter1=0;
			 var s='';
			 var output='';
			 var j=0;
			 var k=0;
			 var a ='"addresses":{"SMS": []}';
			 var checkboxes = new Array();
			 var position = 21;
			  output = a.substr(0, position) + s + a.substr(position);
			 
			 //loop to sum up all sms recipients
			 $("input:checkbox").each(function()
			 {
			 
			var $this = $(this); 
			if($this.is(":checked"))
			{
			
				checkboxes=$this.attr("id");
				name1=$this.attr("name");
				
				if(name1=='chkbox')
					{
						var checkboxEmail=document.getElementById(checkboxes).value;
						if(checkboxEmail!='')
							{
								var c=checkboxEmail.split("|");
								counter1++;
								if(k==0)
									{
										s = '{"address": "'+c[1]+'","contactKey": "'+c[2]+'"}';
										k=1;
									}
								else
									{
									 	s = '{"address": "'+c[1]+'","contactKey": "'+c[2]+'"},';
									}
								output = output.substr(0, position) + s + output.substr(position);
							}
					
					}
				
			}
			j++;
			
			});
			
			Valueofcheckbox=output;
			if(counter1==0)
				{
					alert("Please select at least one recipient");
					if(document.getElementById("takeOneAction").value=="false")
					{
						$('#takeOneAction').val('');
					}
				}
			
			//setting JSON
			broadCast_message = broadCast_message.split('"').join('');
			broadCast_message = broadCast_message.split('\n').join('');
			
			
					datasinfo = '{"senderName":"'+senderId+'","message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'",'+Valueofcheckbox+',"adapterList": {"SMS": ""}}';
					//alert(datasinfo);
				

		if(broadCast_name!=''&&senderId!=''&&broadCast_message!=''&&counter1!=0)
			{
				//console.log("sending");
				broadcastFunc(datasinfo,x);
				
			}
		
		}
	
	
	
		// email to all selected contacts
	if(document.getElementById('checkbox_7').checked&&document.getElementById('checkbox_2').checked&&!document.getElementById('checkbox_1').checked&&!document.getElementById('checkbox_6').checked)
		{
			$('#takeOneAction').val('false');
			console.log("email to all contacts");
			console.log(document.getElementById("takeOneAction").value);
			//checks of validations
			if(broadCast_message=='')
				{
					alert("Broadcast message cannot be empty");
					
					document.getElementById("textarea").focus();
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
				 }
			if(broadCast_name=='')
			{
				alert("Broadcsat name cannot be empty");
				document.getElementById("bname").focus();
				if(document.getElementById("takeOneAction").value=="false")
					{
						$('#takeOneAction').val('');
					}
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
			 
				
			 var counter1=0;
			 var s='';
			 var output='';
			 var j=0;
			 var k=0;
			 var a ='"addresses":{"EMAIL": []}';
			 var checkboxes = new Array();
			 var position = 23;
			 output = a.substr(0, position) + s + a.substr(position);
			 
			 
			 //loop to sum up all email recipients
			 $("input:checkbox").each(function()
			 {
			 
			var $this = $(this); 
			if($this.is(":checked"))
			{
			
				checkboxes=$this.attr("id");
				name1=$this.attr("name");
				
				if(name1=='chkbox')
					{
						var checkboxEmail=document.getElementById(checkboxes).value;
						if(checkboxEmail!='')
							{
								var c=checkboxEmail.split("|");
								counter1++;
								if(k==0)
									{
										s = '{"address": "'+c[0]+'","contactKey": "'+c[2]+'"}';
										k=1;
									}
								else
									{
										s = '{"address": "'+c[0]+'","contactKey": "'+c[2]+'"},';
									}
								output = output.substr(0, position) + s + output.substr(position);
							}
					
					}
				
			}
			j++;
			
			});
			
			Valueofcheckbox=output;
			if(counter1==0)
				{
					alert("Please select at least one recipient");
					if(document.getElementById("takeOneAction").value=="false")
					{
						$('#takeOneAction').val('');
					}
				}
			//setting JSON
			broadCast_message = broadCast_message.split('"').join('');
			broadCast_message = broadCast_message.split('\n').join('');
			
			
					datasinfo = '{"senderName":"'+broadCast_sender_email+'","message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","emailSubject":"'+broadCast_email_subject+'",'+Valueofcheckbox+'}';
				
			//alert(datasinfo);
						
				
		if(broadCast_name!=''&&broadCast_message!=''&&broadCast_sender_name!=''&&broadCast_sender_email!=''&&emailReg.test( broadCast_sender_email )&&counter1!=0)
			{
				//console.log("sending");
				broadcastFunc(datasinfo,x);
				
			}
					
	}
	
	//email and sms both to all selected contacts
	if(document.getElementById('checkbox_7').checked&&document.getElementById('checkbox_2').checked&&document.getElementById('checkbox_1').checked&&!document.getElementById('checkbox_6').checked)
		{
			$('#takeOneAction').val('false');
			if(broadCast_name=='')
			{
				alert("Broadcsat name cannot be empty");
				document.getElementById("bname").focus();
				if(document.getElementById("takeOneAction").value=="false")
					{
						$('#takeOneAction').val('');
					}
			}
			//checks of validations
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
			console.log("sms and email to all contacts");
			
		
			
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
			 
			 var counter1=0;
			 var s='';var s1='';
			 var output='';var output1='';
			 var j=0;
			 var k=0;
			 var a ='"EMAIL": []}';var a1 ='"addresses":{"SMS": []';
			 var checkboxes = new Array();
			 var position = 10;var position1 = 21;
			 output = a.substr(0, position) + s + a.substr(position);
			 output1 = a1.substr(0, position1) + s1 + a1.substr(position1);
			 
			 //loop to sum up all email recipients
			 $("input:checkbox").each(function()
			 {
			 
			var $this = $(this); 
			if($this.is(":checked"))
			{
			
				checkboxes=$this.attr("id");
				name1=$this.attr("name");
				
				if(name1=='chkbox')
					{
						var checkboxEmail=document.getElementById(checkboxes).value;
						if(checkboxEmail!='')
							{
								var c=checkboxEmail.split("|");
								counter1++;
								if(k==0)
									{
										s = '{"address": "'+c[0]+'","contactKey": "'+c[2]+'"}';
										s1 = '{"address": "'+c[1]+'","contactKey": "'+c[2]+'"}';
										k=1;
									}
								else
									{
									 	s = '{"address": "'+c[0]+'","contactKey": "'+c[2]+'"},';
										s1 = '{"address": "'+c[1]+'","contactKey": "'+c[2]+'"},';
									}
								output = output.substr(0, position) + s + output.substr(position);
								output1 = output1.substr(0, position1) + s1 + output1.substr(position1);
							}
					
					}
				
			}
			j++;
			
			});
			
			Valueofcheckbox=output;
			var Valueofcheckboxmob=output1;
			
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

			if(broadCast_message=='')
				{
					alert("Broadcast message cannot be empty");
					
					document.getElementById("textarea").focus();
					if(document.getElementById("takeOneAction").value=="false")
						{
							$('#takeOneAction').val('');
						}
				}
			if(counter1==0)
				{
					alert("Please select at least one recipient");
					if(document.getElementById("takeOneAction").value=="false")
					{
						$('#takeOneAction').val('');
					}
				}
			
			
			var broadCast_name1=broadCast_name+"_"+counter1;
			//console.log(Valueofcheckboxmob);
			if(senderId=='')
			{
			senderId='ASK-Fast';
			}
			//setting JSON
			broadCast_message = broadCast_message.split('"').join('');
			broadCast_message = broadCast_message.split('\n').join('');
			datasinfo = '{"senderName":"'+senderId+'","message":"'+broadCast_message+'","emailSubject":"'+broadCast_email_subject+'","broadcastName":"'+broadCast_name+'",'+Valueofcheckboxmob+','+Valueofcheckbox+'}';
			//alert(datasinfo);
			//alert(counter1);
			//console.log(datasinfo);
			
			
			if(broadCast_name!=''&&broadCast_message!=''&&broadCast_sender_name!=''&&broadCast_sender_email!=''&&counter1!=0&&emailReg.test( broadCast_sender_email ))
				{
					//console.log('sending');
					broadcastFunc(datasinfo,x);
					
				}
		
		$('#img_loading1').hide();
			
			
			
		}
	
	
	
	//send broadcast to all contacts contained by all selected groups
	var output='';
	if (document.getElementById('checkbox_8').checked&&document.getElementById('checkbox_2').checked) 
		{
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
		
		
		//voice tts broadcast to all selected contacts
		if(document.getElementById('checkbox_6').checked&&document.getElementById('radio-01').checked&&document.getElementById('checkbox_7').checked&&!document.getElementById('checkbox_1').checked&&!document.getElementById('checkbox_2').checked)
			{
				$('#takeOneAction').val('false');
				console.log("voice to all contacts");
				//checks for validations
				if(broadCast_name=='')
				{
					alert("Broadcsat name cannot be empty");
					document.getElementById("bname").focus();
					if(document.getElementById("takeOneAction").value=="false")
						{
							$('#takeOneAction').val('');
						}
				}
				if(broadCast_message=='')
					{
						alert("Broadcast message cannot be empty");
						document.getElementById("textarea").focus();
						if(document.getElementById("takeOneAction").value=="false")
							{
								$('#takeOneAction').val('');
							}
					}
				
				 var counter1=0;
				 var s='';
				 var output='';
				 var j=0;
				 var k=0;
				 var a ='"addresses":{"CALL": []}';
				 var checkboxes = new Array();
				 var position = 22;
				  output = a.substr(0, position) + s + a.substr(position);
				 
				 //loop to sum up all sms recipients
				 $("input:checkbox").each(function()
				 {
				 
				var $this = $(this); 
				if($this.is(":checked"))
				{
				
					checkboxes=$this.attr("id");
					name1=$this.attr("name");
					
					if(name1=='chkbox')
						{
							var checkboxEmail=document.getElementById(checkboxes).value;
							if(checkboxEmail!='')
								{
									var c=checkboxEmail.split("|");
									counter1++;
									if(k==0)
										{
											s = '{"address": "'+c[1]+'","contactKey": "'+c[2]+'"}';
											k=1;
										}
									else
										{
											s = '{"address": "'+c[1]+'","contactKey": "'+c[2]+'"},';
										}
									output = output.substr(0, position) + s + output.substr(position);
								}
						
						}
					
				}
				j++;
				
				});
				
				if(counter1==0)
				{
					alert("Please select at least one recipient");
					if(document.getElementById("takeOneAction").value=="false")
					{
						$('#takeOneAction').val('');
					}
				}
				Valueofcheckbox=output;
				broadCast_message = broadCast_message.split('"').join('');
				broadCast_message = broadCast_message.split('\n').join('');
				//setting JSON
				lCode=$('#ldId').val();
				datasinfo = '{"message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","audio": "null",'+Valueofcheckbox+',"language": "'+lCode+'"}';
			if(broadCast_name!=''&&broadCast_message!=''&&counter1!=0)
				{
					//console.log('sending');
					broadcastFunc(datasinfo,x);
					$('#ldId').val("nl-nl").attr("selected", "selected");
					
				}
		
			}
			
			//voice tts and sms broadcast to all selected contacts
		if(document.getElementById('checkbox_6').checked&&document.getElementById('radio-01').checked&&document.getElementById('checkbox_7').checked&&document.getElementById('checkbox_1').checked&&!document.getElementById('checkbox_2').checked)
			{
				$('#takeOneAction').val('false');
				console.log("voice and sms to all contacts");
				//checks for validations
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
				if(broadCast_name=='')
				{
					alert("Broadcsat name cannot be empty");
					document.getElementById("bname").focus();
					if(document.getElementById("takeOneAction").value=="false")
						{
							$('#takeOneAction').val('');
						}
				}
				if(broadCast_message=='')
					{
						alert("Broadcast message cannot be empty");
						
						document.getElementById("textarea").focus();
						if(document.getElementById("takeOneAction").value=="false")
							{
								$('#takeOneAction').val('');
							}
					}
					
					 var counter1=0;
					 var s1='';var s='';
					 var output1='';
					 var j=0;
					 var k=0;
					 var a1 ='"SMS": []'; var a ='"addresses":{"CALL": []';
					 var checkboxes = new Array();
					 var position1 = 8;var position = 22;
					 output1 = a1.substr(0, position1) + s1 + a1.substr(position1);
					 output = a.substr(0, position) + s + a.substr(position);
					 
					 //loop to sum up all sms recipients
					 $("input:checkbox").each(function()
					 {
					 
					var $this = $(this); 
					if($this.is(":checked"))
					{
					
						checkboxes=$this.attr("id");
						name1=$this.attr("name");
						
						if(name1=='chkbox')
							{
								var checkboxEmail=document.getElementById(checkboxes).value;
								if(checkboxEmail!='')
									{
										var c=checkboxEmail.split("|");
										counter1++;
										if(k==0)
											{
												s1 = '{"address": "'+c[1]+'","contactKey": "'+c[2]+'"}';
												s = '{"address": "'+c[1]+'","contactKey": "'+c[2]+'"}';
												k=1;
											}
										else
											{
												s1 = '{"address": "'+c[1]+'","contactKey": "'+c[2]+'"},';
												s = '{"address": "'+c[1]+'","contactKey": "'+c[2]+'"},';
											}
										output1 = output1.substr(0, position1) + s1 + output1.substr(position1);
										output = output.substr(0, position) + s + output.substr(position);
										
									}
							
							}
						
					}
					j++;
					
					});
					
					if(counter1==0)
					{
						alert("Please select at least one recipient");
						if(document.getElementById("takeOneAction").value=="false")
					{
						$('#takeOneAction').val('');
					}
					}
					var Valueofcheckboxmob=output1;
					Valueofcheckbox=output;
					
				broadCast_message = broadCast_message.split('"').join('');
				broadCast_message = broadCast_message.split('\n').join('');
				lCode=$('#ldId').val();
				//setting JSON
				datasinfo = '{"senderName":"'+senderId+'","message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","audio": "null",'+Valueofcheckbox+','+Valueofcheckboxmob+'},"language": "'+lCode+'"}';
			if(broadCast_name!=''&&broadCast_message!=''&&counter1!=0&&senderId!='')
				{
					//console.log('sending');
					broadcastFunc(datasinfo,x);
					$('#ldId').val("nl-nl").attr("selected", "selected");
					
				}
		
			}
			
			
			
			//voice tts and email broadcast to all selected contacts
		if(document.getElementById('checkbox_6').checked&&document.getElementById('radio-01').checked&&document.getElementById('checkbox_7').checked&&document.getElementById('checkbox_2').checked&&!document.getElementById('checkbox_1').checked)
			{
				$('#takeOneAction').val('false');
				//checks of validations
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
				if(broadCast_name=='')
				{
					alert("Broadcsat name cannot be empty");
					document.getElementById("bname").focus();
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
				
			
				console.log("voice and email to all contacts");
				//checks for validations
					
				if(broadCast_message=='')
					{
						alert("Broadcast message cannot be empty");
						
						document.getElementById("textarea").focus();
						if(document.getElementById("takeOneAction").value=="false")
							{
								$('#takeOneAction').val('');
							}
					}
					
					 var counter1=0;
					 var s1='';var s='';
					 var output1='';var output='';
					 var j=0;
					 var k=0;
					 var a1 ='"CALL": []';var a ='"addresses":{"EMAIL": []';
					 var checkboxes = new Array();
					 var position1 = 9;var position = 23;
					 output1 = a1.substr(0, position1) + s1 + a1.substr(position1);
					 output = a.substr(0, position) + s + a.substr(position);
					 //loop to sum up all sms recipients
					 $("input:checkbox").each(function()
					 {
					 
					var $this = $(this); 
					if($this.is(":checked"))
					{
					
						checkboxes=$this.attr("id");
						name1=$this.attr("name");
						
						if(name1=='chkbox')
							{
								var checkboxEmail=document.getElementById(checkboxes).value;
								if(checkboxEmail!='')
									{
										var c=checkboxEmail.split("|");
										counter1++;
										if(k==0)
											{
												s1 = '{"address": "'+c[1]+'","contactKey": "'+c[2]+'"}';
												s = '{"address": "'+c[0]+'","contactKey": "'+c[2]+'"}';
												k=1;
											}
										else
											{
												s1 = '{"address": "'+c[1]+'","contactKey": "'+c[2]+'"},';
												s = '{"address": "'+c[0]+'","contactKey": "'+c[2]+'"},';
											}
										output1 = output1.substr(0, position1) + s1 + output1.substr(position1);
										output = output.substr(0, position) + s + output.substr(position);
									}
							
							}
						
					}
					j++;
					
					});
					
					var Valueofcheckboxmob=output1;
					Valueofcheckbox=output;
					if(counter1==0)
					{
						alert("Please select at least one recipient");
						if(document.getElementById("takeOneAction").value=="false")
					{
						$('#takeOneAction').val('');
					}
					}
					
				broadCast_message = broadCast_message.split('"').join('');
				broadCast_message = broadCast_message.split('\n').join('');
				lCode=$('#ldId').val();
				//setting JSON
				datasinfo = '{"senderName":"'+broadCast_sender_email+'","message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","emailSubject":"'+broadCast_email_subject+'","audio": "null",'+Valueofcheckbox+','+Valueofcheckboxmob+'},"language": "'+lCode+'"}';
			if(broadCast_name!=''&&broadCast_message!=''&&broadCast_sender_name!=''&&broadCast_sender_email!=''&&counter1!=0&&emailReg.test( broadCast_sender_email ))
				{
					//console.log('sending');
					broadcastFunc(datasinfo,x);
					$('#ldId').val("nl-nl").attr("selected", "selected");
					
				}
		
			}
			
			
			//voice tts and email and sms broadcast to all selected contacts
		if(document.getElementById('checkbox_6').checked&&document.getElementById('radio-01').checked&&document.getElementById('checkbox_7').checked&&document.getElementById('checkbox_2').checked&&document.getElementById('checkbox_1').checked)
			{
				$('#takeOneAction').val('false');
				//checks of validations
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
				 if(broadCast_name=='')
				{
					alert("Broadcsat name cannot be empty");
					document.getElementById("bname").focus();
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
				
			
				console.log("voice and email and sms to all contacts");
				//checks for validations
					
				if(broadCast_message=='')
					{
						alert("Broadcast message cannot be empty");
						
						document.getElementById("textarea").focus();
						if(document.getElementById("takeOneAction").value=="false")
							{
								$('#takeOneAction').val('');
							}
					}
					
					 var counter1=0;
					 var s2='';var s='';var s1='';
					 var output2='';var output1='';var output='';
					 var j=0;var k=0;
					 var a2 ='"CALL": []';var a1 ='"SMS": []';var a ='"addresses":{"EMAIL": []';
					 var checkboxes = new Array();
					 var position2 = 9;var position1 = 8;var position = 23;
					 output2 = a2.substr(0, position2) + s2 + a2.substr(position2);
					 output1 = a1.substr(0, position1) + s1 + a1.substr(position1);
					 output = a.substr(0, position) + s + a.substr(position);
					 
					 //loop to sum up all sms recipients
					 $("input:checkbox").each(function()
					 {
					 
					var $this = $(this); 
					if($this.is(":checked"))
					{
					
						checkboxes=$this.attr("id");
						name1=$this.attr("name");
						
						if(name1=='chkbox')
							{
								var checkboxEmail=document.getElementById(checkboxes).value;
								if(checkboxEmail!='')
									{
										var c=checkboxEmail.split("|");
										counter1++;
										if(k==0)
											{
												s2 = '{"address": "'+c[1]+'","contactKey": "'+c[2]+'"}';
												s1 = '{"address": "'+c[1]+'","contactKey": "'+c[2]+'"}';
												s = '{"address": "'+c[0]+'","contactKey": "'+c[2]+'"}';
												k=1;
											}
										else
											{
												s2 = '{"address": "'+c[1]+'","contactKey": "'+c[2]+'"},';
												s1 = '{"address": "'+c[1]+'","contactKey": "'+c[2]+'"},';
												s = '{"address": "'+c[0]+'","contactKey": "'+c[2]+'"},';
											}
										output2 = output2.substr(0, position2) + s2 + output2.substr(position2);
										output1 = output1.substr(0, position1) + s1 + output1.substr(position1);
										output = output.substr(0, position) + s + output.substr(position);
									}
							
							}
						
					}
					j++;
					
					});
					
					var Valueofcheckboxmobvo=output2;
					var Valueofcheckboxmob=output1;
					Valueofcheckbox=output;
					if(counter1==0)
					{
						alert("Please select at least one recipient");
						if(document.getElementById("takeOneAction").value=="false")
					{
						$('#takeOneAction').val('');
					}
					}
					
				broadCast_message = broadCast_message.split('"').join('');
				broadCast_message = broadCast_message.split('\n').join('');
				lCode=$('#ldId').val();
				//setting JSON
				datasinfo = '{"senderName":"'+senderId+'","message":"'+broadCast_message+'","emailSubject":"'+broadCast_email_subject+'","broadcastName":"'+broadCast_name+'","audio": "null",'+Valueofcheckbox+','+Valueofcheckboxmob+','+Valueofcheckboxmobvo+'},"language": "'+lCode+'"}';
			if(broadCast_name!=''&&broadCast_message!=''&&broadCast_sender_name!=''&&broadCast_sender_email!=''&&counter1!=0&&emailReg.test( broadCast_sender_email )&&senderId!='')
				{
					//console.log('sending');
					broadcastFunc(datasinfo,x);
					$('#ldId').val("nl-nl").attr("selected", "selected");
					
					
				}
		
			}
	
	
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
			url : "http://askfastmarket1.appspot.com/accounts/contacts?detailed=true&orderBy=firstName",
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
									
										strHtml += "<div class='ah'><span><input id='checkbox_"+count+"' type='checkbox' name='chkbox' value="+email+"|"+phone+"|"+contactKey+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/at1.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //phone
									if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid!=1&&LLineTagid==1&&specialtagid==1)
									 {
										 console.log("phone");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='checkbox_"+count+"' type='checkbox' name='chkbox' value="+email+"|"+phone+"|"+contactKey+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/latter1.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //landline
									if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid==1&&LLineTagid!=1&&specialtagid==1)
									 {
										 console.log("landline");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='checkbox_"+count+"' type='checkbox' name='chkbox' value="+email+"|"+phone+"|"+contactKey+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/phone.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //twitter
									if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid==1&&LLineTagid==1&&specialtagid!=1)
									 {
										console.log("twitter");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='checkbox_"+count+"' type='checkbox' name='chkbox' value="+email+"|"+phone+"|"+contactKey+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/twittericon.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //phone landline
									 if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid!=1&&LLineTagid!=1&&specialtagid==1)
									 {
										console.log("phone landline");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='checkbox_"+count+"' type='checkbox' name='chkbox' value="+email+"|"+phone+"|"+contactKey+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/latter1.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //phone email
									  if(flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid!=1&&LLineTagid==1&&specialtagid==1)
									 {
										console.log("phone email");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='checkbox_"+count+"' type='checkbox' name='chkbox' value="+email+"|"+phone+"|"+contactKey+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/latter1.png'><img alt='' src='images/at1.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //phone twitter
									  if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid!=1&&LLineTagid==1&&specialtagid!=1)
									 {
										 console.log("phone twitter");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='checkbox_"+count+"' type='checkbox' name='chkbox' value="+email+"|"+phone+"|"+contactKey+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/latter1.png'><img alt='' src='images/twittericon.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //landline email
									  if(flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid==1&&LLineTagid!=1&&specialtagid==1)
									 {
										 console.log("landline email");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='checkbox_"+count+"' type='checkbox' name='chkbox' value="+email+"|"+phone+"|"+contactKey+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/at1.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //landline twitter
									  if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid==1&&LLineTagid!=1&&specialtagid!=1)
									 {
										 console.log("landline twitter");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='checkbox_"+count+"' type='checkbox' name='chkbox' value="+email+"|"+phone+"|"+contactKey+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/twittericon.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									  //email twitter
									  if(flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid==1&&LLineTagid==1&&specialtagid!=1)
									 {
										 console.log("email twitter");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='checkbox_"+count+"' type='checkbox' name='chkbox' value="+email+"|"+phone+"|"+contactKey+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/at1.png'><img alt='' src='images/twittericon.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //mobile landline email
									  if(flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid!=1&&LLineTagid!=1&&specialtagid==1)
									 {
										 console.log("mobile landline email");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='checkbox_"+count+"' type='checkbox' name='chkbox' value="+email+"|"+phone+"|"+contactKey+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/latter1.png'><img alt='' src='images/at1.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //mobile email twitter or all
									  if((flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid!=1&&LLineTagid==1&&specialtagid!=1)||(flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid!=1&&LLineTagid!=1&&specialtagid!=1))
									 {
										 console.log("mobile email twitter or all");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='checkbox_"+count+"' type='checkbox' name='chkbox' value="+email+"|"+phone+"|"+contactKey+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/latter1.png'><img alt='' src='images/at1.png'><img alt='' src='images/twittericon.png'></div></span><div class='clear'></div></div>"; 
									
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
	
	//$.ajax({	
//					type: "GET",
//					contentType: "application/json",
//					dataType: 'json',
//					xhrFields: {
//					withCredentials: true
//					},
//					url : "http://askfastmarket1.appspot.com/accounts/adapterconfigs",
//					cache: false,
//					crossDomain: true,
//					xhrFields: {
//					withCredentials: true
//					},
//					success: function (data) {
//						var check =0;
//						if(data.length>0)
//							{
//								for(var i=0;i<data.length;i++)
//									{
//										if(typeof data[i].myAddress!="undefined")
//											{
//												console.log(data[i].myAddress);
//												$("#beforeAuth").hide();
//												$("#twt1").hide();
//												$("#twt22").show();
//												$("#afterTAuth").html('&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+data[i].myAddress+' will be used for twitter broadcast.');
//												$("#afterTAuth").show();
//												check =1;
//											}
//									}
//							}
//						if(check == 0)
//							{
//								$("#beforeAuth").show();
//								$("#twt22").hide();
//								$("#twt1").show();
//								$("#afterTAuth").hide();
//							}
//						},
//					error: function (data){
//						alert(data.responseJSON.status);
//					}
//				});

});