<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<script type="text/javascript" src="js/ReportsScript.js"></script>
<script>
function word_4(){
	
	AllDivs();
	var id = "<?php   echo $session_id; ?>";
	$('#reportsTimestamp').val('');
	$('#contact_search_enter').val('');
	$('#broadcst_search_enter').val('');
	$('#background_load').hide(); 
	$("#word23456").show();
	$('#word2').val('');
	$('#word992').val('');
	$('#word222222').val('');
	document.getElementById("word2").innerHTML = "";
	document.getElementById("word992").innerHTML = "";
	document.getElementById("word222222").innerHTML = "";
	$('#img_loading1').show();
	$("#main").css({"opacity": "0.3"});
	var count=0;
	var counter=1;
	var i=0;
	var notCurrFirsttime=0;	
	
	$.ajax({	
		type: "GET",
		contentType: "application/json",
		dataType: 'html', 
		beforeSend : function(xhr) {          
			xhr.setRequestHeader("X-SESSION_ID" , id)
		  },
		url : "http://askfastmarket.appspot.com/products/broadcastnew",
		cache: false,
		crossDomain: true,
		xhrFields: {
		withCredentials: true
		},
		success: function (data) 
		{
			data = JSON.parse(data);
			var recipients_count=0;
			var sms_recipients=[];
			var email_recipients=[];
			$('#background_load').hide();
			var arrlength=0;
			var j=0;
			arrlength=data.length;
			//console.log(arrlength);
			var firsttime=0;
			var x=0;
			var z=0;
			var Timestamp_array = new Array();
			for ( x=0; x<arrlength; x++)
			{
				
				var s="/Date("+data[x].broadcast.timeStamp+")/";
				
				var d = new Date(+s.replace(/\/Date\((\d+)\)\//, '$1'));
				var month = d.getUTCMonth()+1;
				var day = d.getUTCDate();
				var year = d.getUTCFullYear();
				newdate = day + "." + month + "." + year;
				Timestamp_array[x] = new Array( newdate,data[x].broadcast.broadcastName,data[x].broadcast.message,data[x].broadcast.senderName,data[x].broadcast.emailSubject,data[x].id,data[x].broadcast.addresses);
					
				}
					var today = new Date();
					var dd = today.getDate();
					var mm = today.getMonth()+1;
					var yyyy = today.getFullYear();
					currDate = dd + "." + mm + "." + yyyy;
					
						for ( i=0; i<arrlength; i++)
						{
							//console.log("||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");
							//console.log(Timestamp_array[i][0]);
							strtNowbtn='';
							recipients_count=0;
							sms_recipients=[];
							email_recipients=[];
							allContactKeys=[];
							image='';
							//debugger
								if(typeof Timestamp_array[i-1]!="undefined"&&Timestamp_array[i][0] != Timestamp_array[i-1][0])
								{
									notCurrFirsttime=0;
									firsttime=1;
									$('#reportsTimestamp').val('');
								}
								//if(typeof Timestamp_array[i+1]!="undefined"&&Timestamp_array[i][0] == Timestamp_array[i+1][0])
//								{
//									notCurrFirsttime=1;
//									firsttime=1;
//								}
								if(typeof Timestamp_array[i+1]=="undefined")
								{
									notCurrFirsttime=0;
									firsttime=0;
								}
								
								//for voice and and email designs
								if (typeof Timestamp_array[i][6].SMS == 'undefined'&&typeof Timestamp_array[i][6].EMAIL != 'undefined'&&typeof Timestamp_array[i][6].CALL != 'undefined'&&typeof Timestamp_array[i][6].TWITTER == 'undefined') 
								{
									//console.log(1);
									for(z=0;z<Timestamp_array[i][6].CALL.length;z++)
										{
											sms_recipients.push(Timestamp_array[i][6].CALL[z].address);
											allContactKeys.push(Timestamp_array[i][6].CALL[z].contactKey);
										}
									recipients_count=recipients_count+Timestamp_array[i][6].CALL.length;
										var BName=Timestamp_array[i][1];
										image="<img src='images/phone.png' alt=''><img src='images/at1.png' alt=''>";
									imageLoadDynamicallyReports(count,Timestamp_array,i,arrlength,notCurrFirsttime,BName,recipients_count,sms_recipients,email_recipients,allContactKeys,image,firsttime);
								}
								
								//for voice and sms design
								if (typeof Timestamp_array[i][6].SMS != 'undefined'&&typeof Timestamp_array[i][6].EMAIL == 'undefined'&&typeof Timestamp_array[i][6].CALL != 'undefined'&&typeof Timestamp_array[i][6].TWITTER == 'undefined') 
								{
									//console.log(2);
									for(z=0;z<Timestamp_array[i][6].CALL.length;z++)
										{
											sms_recipients.push(Timestamp_array[i][6].CALL[z].address);
											allContactKeys.push(Timestamp_array[i][6].CALL[z].contactKey);
										}
									recipients_count=recipients_count+Timestamp_array[i][6].CALL.length;
										var BName=Timestamp_array[i][1];
										image="<img src='images/phone.png' alt=''><img src='images/latter1.png' alt=''>";
									imageLoadDynamicallyReports(count,Timestamp_array,i,arrlength,notCurrFirsttime,BName,recipients_count,sms_recipients,email_recipients,allContactKeys,image,firsttime);
								}
								
								//for voice and sms and email design
								if (typeof Timestamp_array[i][6].SMS != 'undefined'&&typeof Timestamp_array[i][6].EMAIL != 'undefined'&&typeof Timestamp_array[i][6].CALL != 'undefined'&&typeof Timestamp_array[i][6].TWITTER == 'undefined') 
								{
									//console.log(3);
									for(z=0;z<Timestamp_array[i][6].CALL.length;z++)
										{
											sms_recipients.push(Timestamp_array[i][6].CALL[z].address);
											allContactKeys.push(Timestamp_array[i][6].CALL[z].contactKey);
										}
									recipients_count=recipients_count+Timestamp_array[i][6].CALL.length;
										var BName=Timestamp_array[i][1];
										image="<img src='images/phone.png' alt=''><img src='images/latter1.png' alt=''><img src='images/at1.png' alt=''>";
									imageLoadDynamicallyReports(count,Timestamp_array,i,arrlength,notCurrFirsttime,BName,recipients_count,sms_recipients,email_recipients,allContactKeys,image,firsttime);
								}
							
								//for voice only design
								if (typeof Timestamp_array[i][6].SMS == 'undefined'&&typeof Timestamp_array[i][6].EMAIL == 'undefined'&&typeof Timestamp_array[i][6].CALL != 'undefined'&&typeof Timestamp_array[i][6].TWITTER == 'undefined') 
								{
								//	console.log(4);
									for(z=0;z<Timestamp_array[i][6].CALL.length;z++)
										{
											sms_recipients.push(Timestamp_array[i][6].CALL[z].address);
											allContactKeys.push(Timestamp_array[i][6].CALL[z].contactKey);
										}
									recipients_count=recipients_count+Timestamp_array[i][6].CALL.length;
										var BName=Timestamp_array[i][1];
										image="<img src='images/phone.png' alt=''>";
									imageLoadDynamicallyReports(count,Timestamp_array,i,arrlength,notCurrFirsttime,BName,recipients_count,sms_recipients,email_recipients,allContactKeys,image,firsttime);
								}
								
								//for sms and email design
								if (typeof Timestamp_array[i][6].SMS != 'undefined'&&typeof Timestamp_array[i][6].EMAIL != 'undefined'&&typeof Timestamp_array[i][6].CALL == 'undefined'&&typeof Timestamp_array[i][6].TWITTER == 'undefined') 
								{
								//	console.log(5);
									for(z=0;z<Timestamp_array[i][6].SMS.length;z++)
										{
											var BName=Timestamp_array[i][1];
											sms_recipients.push(Timestamp_array[i][6].SMS[z].address);
											email_recipients.push(Timestamp_array[i][6].EMAIL[z].address);
											allContactKeys.push(Timestamp_array[i][6].EMAIL[z].contactKey);
										}
									recipients_count=recipients_count+Timestamp_array[i][6].SMS.length;
										var BName=Timestamp_array[i][1];
										image="<img src='images/latter1.png' alt='' /><img src='images/at1.png' alt='' />";
									imageLoadDynamicallyReports(count,Timestamp_array,i,arrlength,notCurrFirsttime,BName,recipients_count,sms_recipients,email_recipients,allContactKeys,image,firsttime);
								}
								
								//for sms only design
								if (typeof Timestamp_array[i][6].SMS != 'undefined'&&typeof Timestamp_array[i][6].EMAIL == 'undefined'&&typeof Timestamp_array[i][6].CALL == 'undefined'&&typeof Timestamp_array[i][6].TWITTER == 'undefined') 
								{
									//console.log(6);
									for(z=0;z<Timestamp_array[i][6].SMS.length;z++)
										{
											sms_recipients.push(Timestamp_array[i][6].SMS[z].address);
											allContactKeys.push(Timestamp_array[i][6].SMS[z].contactKey);
										}
									recipients_count=recipients_count+Timestamp_array[i][6].SMS.length;
									var BName=Timestamp_array[i][1];
									image="<img src='images/latter1.png' alt='' />";
									imageLoadDynamicallyReports(count,Timestamp_array,i,arrlength,notCurrFirsttime,BName,recipients_count,sms_recipients,email_recipients,allContactKeys,image,firsttime);
								}
								
								//for email only design
								if (typeof Timestamp_array[i][6].EMAIL != 'undefined'&&typeof Timestamp_array[i][6].SMS == 'undefined'&&typeof Timestamp_array[i][6].CALL == 'undefined'&&typeof Timestamp_array[i][6].TWITTER == 'undefined') 
								{
									//console.log(7);
									for(z=0;z<Timestamp_array[i][6].EMAIL.length;z++)
										{
											email_recipients.push(Timestamp_array[i][6].EMAIL[z].address);
											allContactKeys.push(Timestamp_array[i][6].EMAIL[z].contactKey);
										}
									recipients_count=recipients_count+Timestamp_array[i][6].EMAIL.length;
									var BName=Timestamp_array[i][1];
									image="<img src='images/at1.png' alt='' />";
									imageLoadDynamicallyReports(count,Timestamp_array,i,arrlength,notCurrFirsttime,BName,recipients_count,sms_recipients,email_recipients,allContactKeys,image,firsttime);
							}
							
							//for twitter only design
								if (typeof Timestamp_array[i][6].EMAIL == 'undefined'&&typeof Timestamp_array[i][6].SMS == 'undefined'&&typeof Timestamp_array[i][6].CALL == 'undefined'&&typeof Timestamp_array[i][6].TWITTER != 'undefined') 
								{
									//console.log(8);
									for(z=0;z<Timestamp_array[i][6].TWITTER.length;z++)
										{
											email_recipients.push(Timestamp_array[i][6].TWITTER[z].address);
											allContactKeys.push(Timestamp_array[i][6].TWITTER[z].contactKey);
										}
									recipients_count=recipients_count+Timestamp_array[i][6].TWITTER.length;
									var BName=Timestamp_array[i][1];
									image="<img src='images/twittericon.png' alt='' />";
									imageLoadDynamicallyReports(count,Timestamp_array,i,arrlength,notCurrFirsttime,BName,recipients_count,sms_recipients,email_recipients,allContactKeys,image,firsttime);
							}
							
							//for sms twitter only design
								if (typeof Timestamp_array[i][6].EMAIL == 'undefined'&&typeof Timestamp_array[i][6].SMS != 'undefined'&&typeof Timestamp_array[i][6].CALL == 'undefined'&&typeof Timestamp_array[i][6].TWITTER != 'undefined') 
								{
									//console.log(9);
									for(z=0;z<Timestamp_array[i][6].TWITTER.length;z++)
										{
											email_recipients.push(Timestamp_array[i][6].TWITTER[z].address);
											allContactKeys.push(Timestamp_array[i][6].TWITTER[z].contactKey);
										}
									recipients_count=recipients_count+Timestamp_array[i][6].TWITTER.length;
									var BName=Timestamp_array[i][1];
									image="<img src='images/twittericon.png' alt='' /><img src='images/latter1.png' alt='' />";
									imageLoadDynamicallyReports(count,Timestamp_array,i,arrlength,notCurrFirsttime,BName,recipients_count,sms_recipients,email_recipients,allContactKeys,image,firsttime);
							}
							
							//for email twitter only design
								if (typeof Timestamp_array[i][6].EMAIL != 'undefined'&&typeof Timestamp_array[i][6].SMS == 'undefined'&&typeof Timestamp_array[i][6].CALL == 'undefined'&&typeof Timestamp_array[i][6].TWITTER != 'undefined') 
								{
									//console.log(10);
									for(z=0;z<Timestamp_array[i][6].TWITTER.length;z++)
										{
											email_recipients.push(Timestamp_array[i][6].TWITTER[z].address);
											allContactKeys.push(Timestamp_array[i][6].TWITTER[z].contactKey);
										}
									recipients_count=recipients_count+Timestamp_array[i][6].TWITTER.length;
									var BName=Timestamp_array[i][1];
									image="<img src='images/twittericon.png' alt='' /><img src='images/at1.png' alt='' />";
									imageLoadDynamicallyReports(count,Timestamp_array,i,arrlength,notCurrFirsttime,BName,recipients_count,sms_recipients,email_recipients,allContactKeys,image,firsttime);
							}
							
							//for tts twitter only design
								if (typeof Timestamp_array[i][6].EMAIL == 'undefined'&&typeof Timestamp_array[i][6].SMS == 'undefined'&&typeof Timestamp_array[i][6].CALL != 'undefined'&&typeof Timestamp_array[i][6].TWITTER != 'undefined') 
								{
								//	console.log(11);
									for(z=0;z<Timestamp_array[i][6].TWITTER.length;z++)
										{
											email_recipients.push(Timestamp_array[i][6].TWITTER[z].address);
											allContactKeys.push(Timestamp_array[i][6].TWITTER[z].contactKey);
										}
									recipients_count=recipients_count+Timestamp_array[i][6].TWITTER.length;
									var BName=Timestamp_array[i][1];
									image="<img src='images/twittericon.png' alt='' /><img src='images/phone.png' alt='' />";
									imageLoadDynamicallyReports(count,Timestamp_array,i,arrlength,notCurrFirsttime,BName,recipients_count,sms_recipients,email_recipients,allContactKeys,image,firsttime);
							}
							
							//for sms email twitter only design
								if (typeof Timestamp_array[i][6].EMAIL != 'undefined'&&typeof Timestamp_array[i][6].SMS != 'undefined'&&typeof Timestamp_array[i][6].CALL == 'undefined'&&typeof Timestamp_array[i][6].TWITTER != 'undefined') 
								{
								//	console.log(12);
									for(z=0;z<Timestamp_array[i][6].TWITTER.length;z++)
										{
											email_recipients.push(Timestamp_array[i][6].TWITTER[z].address);
											allContactKeys.push(Timestamp_array[i][6].TWITTER[z].contactKey);
										}
									recipients_count=recipients_count+Timestamp_array[i][6].TWITTER.length;
									var BName=Timestamp_array[i][1];
									image="<img src='images/twittericon.png' alt='' /><img src='images/at1.png' alt='' /><img src='images/latter1.png' alt='' />";
									imageLoadDynamicallyReports(count,Timestamp_array,i,arrlength,notCurrFirsttime,BName,recipients_count,sms_recipients,email_recipients,allContactKeys,image,firsttime);
							}
							
							//for sms tts twitter only design
								if (typeof Timestamp_array[i][6].EMAIL == 'undefined'&&typeof Timestamp_array[i][6].SMS != 'undefined'&&typeof Timestamp_array[i][6].CALL != 'undefined'&&typeof Timestamp_array[i][6].TWITTER != 'undefined') 
								{
								//	console.log(13);
									for(z=0;z<Timestamp_array[i][6].TWITTER.length;z++)
										{
											email_recipients.push(Timestamp_array[i][6].TWITTER[z].address);
											allContactKeys.push(Timestamp_array[i][6].TWITTER[z].contactKey);
										}
									recipients_count=recipients_count+Timestamp_array[i][6].TWITTER.length;
									var BName=Timestamp_array[i][1];
									image="<img src='images/twittericon.png' alt='' /><img src='images/phone.png' alt='' /><img src='images/latter1.png' alt='' />";
									imageLoadDynamicallyReports(count,Timestamp_array,i,arrlength,notCurrFirsttime,BName,recipients_count,sms_recipients,email_recipients,allContactKeys,image,firsttime);
							}
							
							//for email tts twitter only design
								if (typeof Timestamp_array[i][6].EMAIL != 'undefined'&&typeof Timestamp_array[i][6].SMS == 'undefined'&&typeof Timestamp_array[i][6].CALL != 'undefined'&&typeof Timestamp_array[i][6].TWITTER != 'undefined') 
								{
								//	console.log(14);
									for(z=0;z<Timestamp_array[i][6].TWITTER.length;z++)
										{
											email_recipients.push(Timestamp_array[i][6].TWITTER[z].address);
											allContactKeys.push(Timestamp_array[i][6].TWITTER[z].contactKey);
										}
									recipients_count=recipients_count+Timestamp_array[i][6].TWITTER.length;
									var BName=Timestamp_array[i][1];
									image="<img src='images/twittericon.png' alt='' /><img src='images/phone.png' alt='' /><img src='images/at1.png' alt='' />";
									imageLoadDynamicallyReports(count,Timestamp_array,i,arrlength,notCurrFirsttime,BName,recipients_count,sms_recipients,email_recipients,allContactKeys,image,firsttime);
							}
							
							//for sms email tts twitter only design
								if (typeof Timestamp_array[i][6].EMAIL != 'undefined'&&typeof Timestamp_array[i][6].SMS != 'undefined'&&typeof Timestamp_array[i][6].CALL != 'undefined'&&typeof Timestamp_array[i][6].TWITTER != 'undefined') 
								{
								//	console.log(15);
									for(z=0;z<Timestamp_array[i][6].TWITTER.length;z++)
										{
											email_recipients.push(Timestamp_array[i][6].TWITTER[z].address);
											allContactKeys.push(Timestamp_array[i][6].TWITTER[z].contactKey);
										}
									recipients_count=recipients_count+Timestamp_array[i][6].TWITTER.length;
									var BName=Timestamp_array[i][1];
									image="<img src='images/twittericon.png' alt='' /><img src='images/phone.png' alt='' /><img src='images/latter1.png' alt='' /><img src='images/at1.png' alt='' />";
									imageLoadDynamicallyReports(count,Timestamp_array,i,arrlength,notCurrFirsttime,BName,recipients_count,sms_recipients,email_recipients,allContactKeys,image,firsttime);
							}
								
						count++;
						}
					
				//$("#word2").show();
//				$("#word992").show();
				$('#word222222').show();
				
				if(arrlength==0)
				{
					//$("#emptyBroadcast").show();
					
				}
			$('#img_loading1').hide();
			$("#main").css({"opacity": ""});
		},
		error: function (data){
			alert(data.responseJSON.status);
		}
		

		});
		
	$('#background_load').hide();
	


}
</script>
</head>

<body>
<input type="hidden" id="reportsTimestamp" value="" />
			<div id="word23456" class="container tab-pane">
			<div class="row">
			<div class="col-md-12">
				<div class="list">
					<h1>REPORTS</h1>
					<p>Your active broadcast will be appeared at the top of the list. </p>
				<div class="clear"></div>
				</div>
				<div class="list_search">
					<input class="list_search123" type="text" placeholder="search box">
					<input class="list_search1234" type="submit" value="">
				</div>
                </div>
                </div>
                </div>
                
<div id="word222222" class="container tab-pane">
   
		
		
				<!--<div class="football23">
					<div class="football-left">
						<div class="footbal">
							<h6>Broadcast football</h6>
							<p><i>was finished</i></p>
						</div>
						<div class="therty7">
							37
						</div>
						<div class="three-img">
							<img src="images/phone.png" alt="" /><img src="images/latter1.png" alt="" /><img src="images/at1.png" alt="" />
						</div>
					</div>
					<div class="football-right">
						<div class="edit">
							<input class="download4" type="button" value="">
						</div>
						<div class="close123">
							<a href="#"><img src="images/close.png" alt="" /></a>
						</div>
					<div class="clear"></div>
					</div>
					<div class="footbal-inner">
						<div class="all-mambers">
							<div class="all-mambers-img">
								37
							</div>
							<div class="all-mambers-pinkimg">
								100%
							</div>
							<div class="footbal-inner-text">
								All members are recived your broadcast
							</div>
						<div class="clear"></div>
						</div>
						<div class="all-mambers-right">
							<div class="called">
								<div class="called12">
									&nbsp;
								</div>
								<div class="called123">
									66%
								</div>
								<div class="called1234">
									<p>Broadcast called 21 people.<br> 7 of them did not picked up phone.</p>
								</div>
							<div class="clear"></div>
							</div>
							
							
							
							<div class="called-two">
								<div class="called12-two">
									&nbsp;
								</div>
								<div class="called123-two">
									33%
								</div>
								<div class="called1234-two">
									<p>Broadcast sent 7 SMS to these people.</p>
								</div>
							<div class="clear"></div>
							</div>
							
							
							<div class="called-3">
								<div class="called12-3">
									&nbsp;
								</div>
								<div class="called123-two">
									83%
								</div>
								<div class="called1234-two">
									<p>Broadcast sent 31 e-mail in total.</p>
								</div>
							<div class="clear"></div>
							</div>
							
						<div class="clear"></div>
						</div>
					<div class="clear"></div>
					</div>
				<div class="clear"></div>
				</div>
				
				
				<div class="football">
					<div class="football-left">
						<div class="footbal">
							<h6>Marketing 0011</h6>
							<p><i>was finished</i></p>
						</div>
						<div class="therty7">
							37
						</div>
						<div class="three-img">
							<img src="images/phone.png" alt="" /><img src="images/latter1.png" alt="" /><img src="images/at1.png" alt="" />
						</div>
					</div>
					<div class="football-right">
						<div class="edit">
							<input class="download4" type="button" value="">
						</div>
						<div class="close123">
							<a href="#"><img src="images/close.png" alt="" /></a>
						</div>
					<div class="clear"></div>
					</div>
				<div class="clear"></div>
				</div>
				<div class="date">
						<h2>15.10.2013</h2>
					<div class="clear"></div>
					</div>
					
					<div class="football">
					<div class="football-left">
						<div class="footbal">
							<h6>Ticket 0013</h6>
							<p><i>was finished.</i></p>
						</div>
						<div class="therty7">
							11
						</div>
						<div class="three-img">
							<img src="images/phone.png" alt="" /><img src="images/latter1.png" alt="" />
						</div>
					</div>
					<div class="football-right">
						<div class="edit">
							<input class="download4" type="button" value="">
						</div>
						<div class="close123">
							<a href="#"><img src="images/close.png" alt="" /></a>
						</div>
					</div>
				<div class="clear"></div>
				</div>
				
				
				<div class="football">
					<div class="football-left">
						<div class="footbal">
							<h6>Ticket 0013</h6>
							<p><i>was finished.</i></p>
						</div>
						<div class="therty7">
							11
						</div>
						<div class="three-img">
							<img src="images/phone.png" alt="" /><img src="images/latter1.png" alt="" />
						</div>
					</div>
					<div class="football-right">
						<div class="edit">
							<input class="download4" type="button" value="">
						</div>
						<div class="close123">
							<a href="#"><img src="images/close.png" alt="" /></a>
						</div>
					<div class="clear"></div>
					</div>
				<div class="clear"></div>
				</div>
				<div class="date">
						<h2>31.09.2013</h2>
					<div class="clear"></div>
					</div>
					
					<div class="football">
					<div class="football-left">
						<div class="footbal">
							<h6>Ticket 0013</h6>
							<p><i>was finished.</i></p>
						</div>
						<div class="therty7">
							11
						</div>
						<div class="three-img">
							<img src="images/phone.png" alt="" />
						</div>
					</div>
					<div class="football-right">
						<div class="edit">
							<input class="download4" type="button" value="">
						</div>
						<div class="close123">
							<a href="#"><img src="images/close.png" alt="" /></a>
						</div>
					</div>
				<div class="clear"></div>
				</div>
				
				
				<div class="football">
					<div class="football-left">
						<div class="footbal">
							<h6>Ticket 0013</h6>
							<p><i>was finished.</i></p>
						</div>
						<div class="therty7">
							11
						</div>
						<div class="three-img">
							<img src="images/phone.png" alt="" />
						</div>
					</div>
					<div class="football-right">
						<div class="edit">
							<input class="download4" type="button" value="">
						</div>
						<div class="close123">
							<a href="#"><img src="images/close.png" alt="" /></a>
						</div>
					</div>
				<div class="clear"></div>
				</div>
				<div class="clear"></div>
				</div>
			</div>
		<div class="clear"></div>-->
       
		</div>
</body>
</html>