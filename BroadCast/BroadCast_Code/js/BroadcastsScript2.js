function imageLoadDynamically(count,Timestamp_array,i,arrlength,notCurrFirsttime,BName,recipients_count,sms_recipients,email_recipients,allContactKeys,image,firsttime,twtadp,ttsadp)
{
				var strHtml1='';var strHtml2='';
				//for current date's broadcast design
				if(Timestamp_array[i][0]==currDate)
				{
					//console.log(firsttime);
					if(Timestamp_array[i][7]==0)
					{
						strtNowbtn="<input class='edit333' id='edit_edit_edit_"+count+"'  value='' type='button'  onclick='startNow("+Timestamp_array[i][5]+","+count+")',"+count+")'>";
					}
					if(Timestamp_array[i][7]>0)
					{
						strtNowbtn='';
					}
					
					if(firsttime==0&&document.getElementById("currDateTimestamp").value==""){
						strHtml2 += "<h1 class='time'>"+Timestamp_array[i][0]+"</h1><div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><span onclick='BeditDesign("+Timestamp_array[i][5]+","+count+")'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></span></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'>"+image+"</div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'>"+strtNowbtn+"<input class='edit1' id='edit_edit_"+count+"'  value='' type='button'  onclick='editbc("+Timestamp_array[i][5]+","+count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='twtAdapter"+count+"' value='"+twtadp+"'><input type='hidden' id='ttsAdapter"+count+"' value='"+ttsadp+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div></div><span id=BEDIT_"+count+" ></span>"; 
						$("#word992").append(strHtml2);
						$('#currDateTimestamp').val('false');
					}
					else
					{
						strHtml2 += "<div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><span onclick='BeditDesign("+Timestamp_array[i][5]+","+count+")'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></span></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'>"+image+"</div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'>"+strtNowbtn+"<input class='edit1' id='edit_edit_"+count+"'  value='' type='button'  onclick='editbc("+Timestamp_array[i][5]+","+count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='twtAdapter"+count+"' value='"+twtadp+"'><input type='hidden' id='ttsAdapter"+count+"' value='"+ttsadp+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div></div><span id=BEDIT_"+count+" ></span>"; 
						$("#word992").append(strHtml2);
					}
				}
				
				else
				//for design of past broadcasts
				{
					//console.log(notCurrFirsttime);
					if(i+1<=arrlength)
					{
								if((document.getElementById("notcurrDateTimestmp").value=="")||(typeof Timestamp_array[i-1]!="undefined"&&Timestamp_array[i-1][0]==currDate))
								{
									//console.log(document.getElementById("notcurrDateTimestmp").value);
									//console.log(Timestamp_array[i][0]);
									strHtml1 += "<h1 class='time'>"+Timestamp_array[i][0]+"</h1><div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'>"+image+"</div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit22' id='edit_edit_"+count+"'  value='' type='button'  onclick='cloneBackup("+Timestamp_array[i][5]+","+count+","+recipients_count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='twtAdapter"+count+"' value='"+twtadp+"'><input type='hidden' id='ttsAdapter"+count+"' value='"+ttsadp+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_"+count+" ></span></div>";
									$('#notcurrDateTimestmp').val('false');
									//notCurrFirsttime=1;
									$("#word2").append(strHtml1);
								}
								else
								{
									//console.log(document.getElementById("notcurrDateTimestmp").value);
									//console.log(Timestamp_array[i][0]);
							strHtml1 += "<div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'>"+image+"</div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit22' id='edit_edit_"+count+"'  value='' type='button'  onclick='cloneBackup("+Timestamp_array[i][5]+","+count+","+recipients_count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='twtAdapter"+count+"' value='"+twtadp+"'><input type='hidden' id='ttsAdapter"+count+"' value='"+ttsadp+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_"+count+" ></span></div>";
							$("#word2").append(strHtml1);
								}
					}
				}
					counter=1;
}

//function for displaying broadcasts
function loadBroadcast(data)
{
			//debugger
			
			var count=0;var image='';var counter=1;var i=0;var notCurrFirsttime=0;var strtNowbtn='';
			var recipients_count=0;var sms_recipients=[];var email_recipients=[];var allContactKeys=[];
			var arrlength=0;var j=0;var firsttime=0;var x=0;var z=0;var Timestamp_array = new Array();
			$('#background_load').hide();
			arrlength=data.length;
			//console.log(arrlength);
			for ( x=0; x<arrlength; x++)
			{
				
				var s="/Date("+data[x].broadcast.timeStamp+")/";
				var d = new Date(+s.replace(/\/Date\((\d+)\)\//, '$1'));
				var month = d.getUTCMonth()+1;
				var day = d.getUTCDate();
				var year = d.getUTCFullYear();
				newdate = day + "." + month + "." + year;
				Timestamp_array[x] = new Array( newdate,data[x].broadcast.broadcastName,data[x].broadcast.message,data[x].broadcast.senderName,data[x].broadcast.emailSubject,data[x].id,data[x].broadcast.addresses,data[x].broadcastCount);
					
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
									notCurrFirsttime=1;
									$('#notcurrDateTimestmp').val('');
									firsttime=1;
								}
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
											//sms_recipients.push(Timestamp_array[i][6].CALL[z].address);
											allContactKeys.push(Timestamp_array[i][6].CALL[z].contactKey);
										}
									recipients_count=recipients_count+Timestamp_array[i][6].CALL.length;
										var BName=Timestamp_array[i][1];
										image="<img src='images/phone.png' alt=''><img src='images/at1.png' alt=''>";
									imageLoadDynamically(count,Timestamp_array,i,arrlength,notCurrFirsttime,BName,recipients_count,sms_recipients,email_recipients,allContactKeys,image,firsttime,0,1);
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
									imageLoadDynamically(count,Timestamp_array,i,arrlength,notCurrFirsttime,BName,recipients_count,sms_recipients,email_recipients,allContactKeys,image,firsttime,0,1);
								}
								
								//for voice and sms and email design
								if (typeof Timestamp_array[i][6].SMS != 'undefined'&&typeof Timestamp_array[i][6].EMAIL != 'undefined'&&typeof Timestamp_array[i][6].CALL != 'undefined'&&typeof Timestamp_array[i][6].TWITTER == 'undefined') 
								{
									//console.log(3);
									for(z=0;z<Timestamp_array[i][6].CALL.length;z++)
										{
											sms_recipients.push(Timestamp_array[i][6].CALL[z].address);
											email_recipients.push(Timestamp_array[i][6].EMAIL[z].address);
											allContactKeys.push(Timestamp_array[i][6].CALL[z].contactKey);
										}
									recipients_count=recipients_count+Timestamp_array[i][6].CALL.length;
										var BName=Timestamp_array[i][1];
										image="<img src='images/phone.png' alt=''><img src='images/latter1.png' alt=''><img src='images/at1.png' alt=''>";
									imageLoadDynamically(count,Timestamp_array,i,arrlength,notCurrFirsttime,BName,recipients_count,sms_recipients,email_recipients,allContactKeys,image,firsttime,0,1);
								}
							
								//for voice only design
								if (typeof Timestamp_array[i][6].SMS == 'undefined'&&typeof Timestamp_array[i][6].EMAIL == 'undefined'&&typeof Timestamp_array[i][6].CALL != 'undefined'&&typeof Timestamp_array[i][6].TWITTER == 'undefined') 
								{
								//	console.log(4);
									for(z=0;z<Timestamp_array[i][6].CALL.length;z++)
										{
											//sms_recipients.push(Timestamp_array[i][6].CALL[z].address);
											allContactKeys.push(Timestamp_array[i][6].CALL[z].contactKey);
										}
									recipients_count=recipients_count+Timestamp_array[i][6].CALL.length;
										var BName=Timestamp_array[i][1];
										image="<img src='images/phone.png' alt=''>";
									imageLoadDynamically(count,Timestamp_array,i,arrlength,notCurrFirsttime,BName,recipients_count,sms_recipients,email_recipients,allContactKeys,image,firsttime,0,1);
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
									imageLoadDynamically(count,Timestamp_array,i,arrlength,notCurrFirsttime,BName,recipients_count,sms_recipients,email_recipients,allContactKeys,image,firsttime,0,0);
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
									console.log(recipients_count);
									var BName=Timestamp_array[i][1];
									image="<img src='images/latter1.png' alt='' />";
									imageLoadDynamically(count,Timestamp_array,i,arrlength,notCurrFirsttime,BName,recipients_count,sms_recipients,email_recipients,allContactKeys,image,firsttime,0,0);
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
									imageLoadDynamically(count,Timestamp_array,i,arrlength,notCurrFirsttime,BName,recipients_count,sms_recipients,email_recipients,allContactKeys,image,firsttime,0,0);
							}
							
							//for twitter only design
								if (typeof Timestamp_array[i][6].EMAIL == 'undefined'&&typeof Timestamp_array[i][6].SMS == 'undefined'&&typeof Timestamp_array[i][6].CALL == 'undefined'&&typeof Timestamp_array[i][6].TWITTER != 'undefined') 
								{
									//console.log(8);
									for(z=0;z<Timestamp_array[i][6].TWITTER.length;z++)
										{
											//email_recipients.push(Timestamp_array[i][6].TWITTER[z].address);
											allContactKeys.push(Timestamp_array[i][6].TWITTER[z].contactKey);
										}
									recipients_count=recipients_count+Timestamp_array[i][6].TWITTER.length;
									var BName=Timestamp_array[i][1];
									image="<img src='images/twittericon.png' alt='' />";
									imageLoadDynamically(count,Timestamp_array,i,arrlength,notCurrFirsttime,BName,recipients_count,sms_recipients,email_recipients,allContactKeys,image,firsttime,1,0);
							}
							
							//for sms twitter only design
								if (typeof Timestamp_array[i][6].EMAIL == 'undefined'&&typeof Timestamp_array[i][6].SMS != 'undefined'&&typeof Timestamp_array[i][6].CALL == 'undefined'&&typeof Timestamp_array[i][6].TWITTER != 'undefined') 
								{
									//console.log(9);
									for(z=0;z<Timestamp_array[i][6].TWITTER.length;z++)
										{
											sms_recipients.push(Timestamp_array[i][6].SMS[z].address);
											allContactKeys.push(Timestamp_array[i][6].TWITTER[z].contactKey);
										}
									recipients_count=recipients_count+Timestamp_array[i][6].TWITTER.length;
									var BName=Timestamp_array[i][1];
									image="<img src='images/twittericon.png' alt='' /><img src='images/latter1.png' alt='' />";
									imageLoadDynamically(count,Timestamp_array,i,arrlength,notCurrFirsttime,BName,recipients_count,sms_recipients,email_recipients,allContactKeys,image,firsttime,1,0);
							}
							
							//for email twitter only design
								if (typeof Timestamp_array[i][6].EMAIL != 'undefined'&&typeof Timestamp_array[i][6].SMS == 'undefined'&&typeof Timestamp_array[i][6].CALL == 'undefined'&&typeof Timestamp_array[i][6].TWITTER != 'undefined') 
								{
									//console.log(10);
									for(z=0;z<Timestamp_array[i][6].TWITTER.length;z++)
										{
											email_recipients.push(Timestamp_array[i][6].EMAIL[z].address);
											allContactKeys.push(Timestamp_array[i][6].TWITTER[z].contactKey);
										}
									recipients_count=recipients_count+Timestamp_array[i][6].TWITTER.length;
									var BName=Timestamp_array[i][1];
									image="<img src='images/twittericon.png' alt='' /><img src='images/at1.png' alt='' />";
									imageLoadDynamically(count,Timestamp_array,i,arrlength,notCurrFirsttime,BName,recipients_count,sms_recipients,email_recipients,allContactKeys,image,firsttime,1,0);
							}
							
							//for tts twitter only design
								if (typeof Timestamp_array[i][6].EMAIL == 'undefined'&&typeof Timestamp_array[i][6].SMS == 'undefined'&&typeof Timestamp_array[i][6].CALL != 'undefined'&&typeof Timestamp_array[i][6].TWITTER != 'undefined') 
								{
								//	console.log(11);
									for(z=0;z<Timestamp_array[i][6].TWITTER.length;z++)
										{
											//email_recipients.push(Timestamp_array[i][6].TWITTER[z].address);
											allContactKeys.push(Timestamp_array[i][6].TWITTER[z].contactKey);
										}
									recipients_count=recipients_count+Timestamp_array[i][6].TWITTER.length;
									var BName=Timestamp_array[i][1];
									image="<img src='images/twittericon.png' alt='' /><img src='images/phone.png' alt='' />";
									imageLoadDynamically(count,Timestamp_array,i,arrlength,notCurrFirsttime,BName,recipients_count,sms_recipients,email_recipients,allContactKeys,image,firsttime,1,1);
							}
							
							//for sms email twitter only design
								if (typeof Timestamp_array[i][6].EMAIL != 'undefined'&&typeof Timestamp_array[i][6].SMS != 'undefined'&&typeof Timestamp_array[i][6].CALL == 'undefined'&&typeof Timestamp_array[i][6].TWITTER != 'undefined') 
								{
								//	console.log(12);
									for(z=0;z<Timestamp_array[i][6].TWITTER.length;z++)
										{
											email_recipients.push(Timestamp_array[i][6].EMAIL[z].address);
											sms_recipients.push(Timestamp_array[i][6].SMS[z].address);
											allContactKeys.push(Timestamp_array[i][6].TWITTER[z].contactKey);
										}
									recipients_count=recipients_count+Timestamp_array[i][6].TWITTER.length;
									var BName=Timestamp_array[i][1];
									image="<img src='images/twittericon.png' alt='' /><img src='images/at1.png' alt='' /><img src='images/latter1.png' alt='' />";
									imageLoadDynamically(count,Timestamp_array,i,arrlength,notCurrFirsttime,BName,recipients_count,sms_recipients,email_recipients,allContactKeys,image,firsttime,1,0);
							}
							
							//for sms tts twitter only design
								if (typeof Timestamp_array[i][6].EMAIL == 'undefined'&&typeof Timestamp_array[i][6].SMS != 'undefined'&&typeof Timestamp_array[i][6].CALL != 'undefined'&&typeof Timestamp_array[i][6].TWITTER != 'undefined') 
								{
								//	console.log(13);
									for(z=0;z<Timestamp_array[i][6].TWITTER.length;z++)
										{
											sms_recipients.push(Timestamp_array[i][6].SMS[z].address);
											allContactKeys.push(Timestamp_array[i][6].TWITTER[z].contactKey);
										}
									recipients_count=recipients_count+Timestamp_array[i][6].TWITTER.length;
									var BName=Timestamp_array[i][1];
									image="<img src='images/twittericon.png' alt='' /><img src='images/phone.png' alt='' /><img src='images/latter1.png' alt='' />";
									imageLoadDynamically(count,Timestamp_array,i,arrlength,notCurrFirsttime,BName,recipients_count,sms_recipients,email_recipients,allContactKeys,image,firsttime,1,1);
							}
							
							//for email tts twitter only design
								if (typeof Timestamp_array[i][6].EMAIL != 'undefined'&&typeof Timestamp_array[i][6].SMS == 'undefined'&&typeof Timestamp_array[i][6].CALL != 'undefined'&&typeof Timestamp_array[i][6].TWITTER != 'undefined') 
								{
								//	console.log(14);
									for(z=0;z<Timestamp_array[i][6].TWITTER.length;z++)
										{
											email_recipients.push(Timestamp_array[i][6].EMAIL[z].address);
											allContactKeys.push(Timestamp_array[i][6].TWITTER[z].contactKey);
										}
									recipients_count=recipients_count+Timestamp_array[i][6].TWITTER.length;
									var BName=Timestamp_array[i][1];
									image="<img src='images/twittericon.png' alt='' /><img src='images/phone.png' alt='' /><img src='images/at1.png' alt='' />";
									imageLoadDynamically(count,Timestamp_array,i,arrlength,notCurrFirsttime,BName,recipients_count,sms_recipients,email_recipients,allContactKeys,image,firsttime,1,1);
							}
							
							//for sms email tts twitter only design
								if (typeof Timestamp_array[i][6].EMAIL != 'undefined'&&typeof Timestamp_array[i][6].SMS != 'undefined'&&typeof Timestamp_array[i][6].CALL != 'undefined'&&typeof Timestamp_array[i][6].TWITTER != 'undefined') 
								{
								//	console.log(15);
									for(z=0;z<Timestamp_array[i][6].TWITTER.length;z++)
										{
											email_recipients.push(Timestamp_array[i][6].EMAIL[z].address);
											sms_recipients.push(Timestamp_array[i][6].SMS[z].address);
											allContactKeys.push(Timestamp_array[i][6].TWITTER[z].contactKey);
										}
									recipients_count=recipients_count+Timestamp_array[i][6].TWITTER.length;
									var BName=Timestamp_array[i][1];
									image="<img src='images/twittericon.png' alt='' /><img src='images/phone.png' alt='' /><img src='images/latter1.png' alt='' /><img src='images/at1.png' alt='' />";
									imageLoadDynamically(count,Timestamp_array,i,arrlength,notCurrFirsttime,BName,recipients_count,sms_recipients,email_recipients,allContactKeys,image,firsttime,1,1);
							}
								
						count++;
						}
					
				$("#word2").show();
				$("#word992").show();
				
				if(arrlength==0)
				{
					//$("#emptyBroadcast").show();
					
				}
			$('#img_loading1').hide();
			$("#main").css({"opacity": ""});
}






//backup function for word_245
function word_245Backup(Bname,Bmessage,BsenderName,BemailSubject)
{
	
	AllDivs();
	$('#broadcast_search_enter').val('set');
	$('#contact_search_enter').val('');
	$('#broadcst_search_enter').val('');
	$('#background_load').hide(); 
	$("#word1992").show();
	
	document.getElementById("word2").innerHTML = "";
	document.getElementById("word992").innerHTML = "";
	$('#img_loading1').show();
	$("#main").css({"opacity": "0.3"});

	
	var count=0;
	var counter=1;
	var i=0;
	var notCurrFirsttime=0;	
	
	$.ajax({	
		type: "GET",
		contentType: "application/json", 
		url : "http://askfastmarket1.appspot.com/products/broadcastnew",
		cache: false,
		crossDomain: true,
		xhrFields: {
		withCredentials: true
		},
		success: function (data) 
		{
			
			var recipients_count=0;
			var sms_recipients=[];
			var email_recipients=[];
			$('#background_load').hide();
			var arrlength=0;
			var j=0;
			var x=0;
			var z=0;
			arrlength=data.length;
			var firsttime=0;
			var Timestamp_array = new Array();
			for ( x=0; x<arrlength; x++)
			{
				
				var s="/Date("+data[x].broadcast.timeStamp+")/";
				
				var d = new Date(+s.replace(/\/Date\((\d+)\)\//, '$1'));
				var month = d.getUTCMonth()+1;
				var day = d.getUTCDate();
				var year = d.getUTCFullYear();
				newdate = day + "." + month + "." + year;
				Timestamp_array[x] = new Array( newdate,data[x].broadcast.broadcastName,data[x].broadcast.message,data[x].broadcast.senderName,data[x].broadcast.emailSubject,data[x].id,data[x].broadcast.addresses );
					
				}
					
					var today = new Date();
					var dd = today.getDate();
					var mm = today.getMonth()+1;
					var yyyy = today.getFullYear();
					currDate = dd + "." + mm + "." + yyyy;
					var Clonein = 0;
						for ( i=0; i<arrlength; i++)
						{
							
							recipients_count=0;
							sms_recipients=[];
							email_recipients=[];
								if(typeof Timestamp_array[i+1]!="undefined"&&Timestamp_array[i][0] != Timestamp_array[i+1][0])
								{
									notCurrFirsttime=0;
								}
								if(typeof Timestamp_array[i+1]=="undefined")
								{
									notCurrFirsttime=1;
								}
								
								//for voice and and email design
								if (typeof Timestamp_array[i][6].SMS == 'undefined'&&typeof Timestamp_array[i][6].EMAIL != 'undefined'&&typeof Timestamp_array[i][6].CALL != 'undefined') 
								{
									for(z=0;z<Timestamp_array[i][6].CALL.length;z++)
										{
											sms_recipients.push(Timestamp_array[i][6].CALL[z].address);
										}
									
									recipients_count=recipients_count+Timestamp_array[i][6].CALL.length;
									
										var BName=Timestamp_array[i][1];
							
							
				var strHtml1='';
				var strHtml2='';
				//for current date's broadcast design
				if(Timestamp_array[i][0]==currDate)
				{
					
					if(firsttime==0){
						strHtml2 += "<h1 class='time'>"+Timestamp_array[i][0]+"</h1><div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><span onclick='BeditDesign("+Timestamp_array[i][5]+","+count+")'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></span></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/phone.png' alt=''><img src='images/at1.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit333' id='edit_edit_edit_"+count+"'  value='' type='button'  onclick=''><input class='edit1' id='edit_edit_"+count+"'  value='' type='button'  onclick='editbc("+Timestamp_array[i][5]+","+count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div></div><span id=BEDIT_"+count+" ></span>"; 
						$("#word992").append(strHtml2);
						firsttime=1;
					}
					
					
					else
					{
						strHtml2 += "<div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><span onclick='BeditDesign("+Timestamp_array[i][5]+","+count+")'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></span></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/phone.png' alt=''><img src='images/at1.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit333' id='edit_edit_edit_"+count+"'  value='' type='button'  onclick=''><input class='edit1' id='edit_edit_"+count+"'  value='' type='button'  onclick='editbc("+Timestamp_array[i][5]+","+count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div></div><span id=BEDIT_"+count+" ></span>"; 
						$("#word992").append(strHtml2);
					}
				}
				
				else
				//for design of past broadcasts
				{
					if(i+1<=arrlength)
					{
						var z=Timestamp_array[i][0];
						//var  l=Timestamp_array[i+1][0];
						if(typeof Timestamp_array[i+1]!="undefined"&&(Timestamp_array[i][0] != Timestamp_array[i+1][0] )&&Timestamp_array[i+1][0]!=currDate)
						{
						strHtml1 += "<div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/phone.png' alt=''><img src='images/at1.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit22' id='edit_edit_"+count+"'  value='' type='button'  onclick='cloneBackup("+Timestamp_array[i][5]+","+count+","+recipients_count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_"+count+" ></span></div>"; 
						$("#word2").append(strHtml1);
						}
						
						
						else
						{
								if(notCurrFirsttime==0)
								{
									strHtml1 += "<h1 class='time'>"+Timestamp_array[i][0]+"</h1><div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/phone.png' alt=''><img src='images/at1.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit22' id='edit_edit_"+count+"'  value='' type='button'  onclick='cloneBackup("+Timestamp_array[i][5]+","+count+","+recipients_count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_"+count+" ></span></div>";
									notCurrFirsttime=1;
									$("#word2").append(strHtml1);
								}
								
								
								else
								{
							strHtml1 += "<div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/phone.png' alt=''><img src='images/at1.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit22' id='edit_edit_"+count+"'  value='' type='button'  onclick='cloneBackup("+Timestamp_array[i][5]+","+count+","+recipients_count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_"+count+" ></span></div>";
							$("#word2").append(strHtml1);
								}
						}
					}
				}
				
				
					
					counter=1;
								}
								
								
								//for voice and sms design
								if (typeof Timestamp_array[i][6].SMS != 'undefined'&&typeof Timestamp_array[i][6].EMAIL == 'undefined'&&typeof Timestamp_array[i][6].CALL != 'undefined') 
								{
									for(z=0;z<Timestamp_array[i][6].CALL.length;z++)
										{
											sms_recipients.push(Timestamp_array[i][6].CALL[z].address);
										}
									
									recipients_count=recipients_count+Timestamp_array[i][6].CALL.length;
									
										var BName=Timestamp_array[i][1];
							
							
				var strHtml1='';
				var strHtml2='';
				//for current date's broadcast design
				if(Timestamp_array[i][0]==currDate)
				{
					
					if(firsttime==0){
						strHtml2 += "<h1 class='time'>"+Timestamp_array[i][0]+"</h1><div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><span onclick='BeditDesign("+Timestamp_array[i][5]+","+count+")'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></span></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/phone.png' alt=''><img src='images/latter1.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit333' id='edit_edit_edit_"+count+"'  value='' type='button'  onclick=''><input class='edit1' id='edit_edit_"+count+"'  value='' type='button'  onclick='editbc("+Timestamp_array[i][5]+","+count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div></div><span id=BEDIT_"+count+" ></span>"; 
						$("#word992").append(strHtml2);
						firsttime=1;
					}
					
					
					else
					{
						strHtml2 += "<div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><span onclick='BeditDesign("+Timestamp_array[i][5]+","+count+")'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></span></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/phone.png' alt=''><img src='images/latter1.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit333' id='edit_edit_edit_"+count+"'  value='' type='button'  onclick=''><input class='edit1' id='edit_edit_"+count+"'  value='' type='button'  onclick='editbc("+Timestamp_array[i][5]+","+count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div></div><span id=BEDIT_"+count+" ></span>"; 
						$("#word992").append(strHtml2);
					}
				}
				
				else
				//for design of past broadcasts
				{
					if(i+1<=arrlength)
					{
						var z=Timestamp_array[i][0];
						//var  l=Timestamp_array[i+1][0];
						if(typeof Timestamp_array[i+1]!="undefined"&&(Timestamp_array[i][0] != Timestamp_array[i+1][0] )&&Timestamp_array[i+1][0]!=currDate)
						{
						strHtml1 += "<div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/phone.png' alt=''><img src='images/latter1.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit22' id='edit_edit_"+count+"'  value='' type='button'  onclick='cloneBackup("+Timestamp_array[i][5]+","+count+","+recipients_count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_"+count+" ></span></div>"; 
						$("#word2").append(strHtml1);
						}
						
						
						else
						{
								if(notCurrFirsttime==0)
								{
									strHtml1 += "<h1 class='time'>"+Timestamp_array[i][0]+"</h1><div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/phone.png' alt=''><img src='images/latter1.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit22' id='edit_edit_"+count+"'  value='' type='button'  onclick='cloneBackup("+Timestamp_array[i][5]+","+count+","+recipients_count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_"+count+" ></span></div>";
									notCurrFirsttime=1;
									$("#word2").append(strHtml1);
								}
								
								
								else
								{
							strHtml1 += "<div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/phone.png' alt=''><img src='images/latter1.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit22' id='edit_edit_"+count+"'  value='' type='button'  onclick='cloneBackup("+Timestamp_array[i][5]+","+count+","+recipients_count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_"+count+" ></span></div>";
							$("#word2").append(strHtml1);
								}
						}
					}
				}
				
				
					
					counter=1;
								}
								
								
								
								//for voice and sms and email design
								if (typeof Timestamp_array[i][6].SMS != 'undefined'&&typeof Timestamp_array[i][6].EMAIL != 'undefined'&&typeof Timestamp_array[i][6].CALL != 'undefined') 
								{
									for(z=0;z<Timestamp_array[i][6].CALL.length;z++)
										{
											sms_recipients.push(Timestamp_array[i][6].CALL[z].address);
										}
									
									recipients_count=recipients_count+Timestamp_array[i][6].CALL.length;
									
										var BName=Timestamp_array[i][1];
							
							
				var strHtml1='';
				var strHtml2='';
				//for current date's broadcast design
				if(Timestamp_array[i][0]==currDate)
				{
					
					if(firsttime==0){
						strHtml2 += "<h1 class='time'>"+Timestamp_array[i][0]+"</h1><div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><span onclick='BeditDesign("+Timestamp_array[i][5]+","+count+")'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></span></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/phone.png' alt=''><img src='images/latter1.png' alt=''><img src='images/at1.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit333' id='edit_edit_edit_"+count+"'  value='' type='button'  onclick=''><input class='edit1' id='edit_edit_"+count+"'  value='' type='button'  onclick='editbc("+Timestamp_array[i][5]+","+count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div></div><span id=BEDIT_"+count+" ></span>"; 
						$("#word992").append(strHtml2);
						firsttime=1;
					}
					
					
					else
					{
						strHtml2 += "<div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><span onclick='BeditDesign("+Timestamp_array[i][5]+","+count+")'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></span></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/phone.png' alt=''><img src='images/latter1.png' alt=''><img src='images/at1.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit333' id='edit_edit_edit_"+count+"'  value='' type='button'  onclick=''><input class='edit1' id='edit_edit_"+count+"'  value='' type='button'  onclick='editbc("+Timestamp_array[i][5]+","+count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div></div><span id=BEDIT_"+count+" ></span>"; 
						$("#word992").append(strHtml2);
					}
				}
				
				else
				//for design of past broadcasts
				{
					if(i+1<=arrlength)
					{
						var z=Timestamp_array[i][0];
						//var  l=Timestamp_array[i+1][0];
						if(typeof Timestamp_array[i+1]!="undefined"&&(Timestamp_array[i][0] != Timestamp_array[i+1][0] )&&Timestamp_array[i+1][0]!=currDate)
						{
						strHtml1 += "<div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/phone.png' alt=''><img src='images/latter1.png' alt=''><img src='images/at1.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit22' id='edit_edit_"+count+"'  value='' type='button'  onclick='cloneBackup("+Timestamp_array[i][5]+","+count+","+recipients_count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_"+count+" ></span></div>"; 
						$("#word2").append(strHtml1);
						}
						
						
						else
						{
								if(notCurrFirsttime==0)
								{
									strHtml1 += "<h1 class='time'>"+Timestamp_array[i][0]+"</h1><div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/phone.png' alt=''><img src='images/latter1.png' alt=''><img src='images/at1.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit22' id='edit_edit_"+count+"'  value='' type='button'  onclick='cloneBackup("+Timestamp_array[i][5]+","+count+","+recipients_count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_"+count+" ></span></div>";
									notCurrFirsttime=1;
									$("#word2").append(strHtml1);
								}
								
								
								else
								{
							strHtml1 += "<div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/phone.png' alt=''><img src='images/latter1.png' alt=''><img src='images/at1.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit22' id='edit_edit_"+count+"'  value='' type='button'  onclick='cloneBackup("+Timestamp_array[i][5]+","+count+","+recipients_count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_"+count+" ></span></div>";
							$("#word2").append(strHtml1);
								}
						}
					}
				}
				
				
					
					counter=1;
								}

								
								//for voice design
								if (typeof Timestamp_array[i][6].SMS == 'undefined'&&typeof Timestamp_array[i][6].EMAIL == 'undefined'&&typeof Timestamp_array[i][6].CALL != 'undefined') 
								{
									for(z=0;z<Timestamp_array[i][6].CALL.length;z++)
										{
											sms_recipients.push(Timestamp_array[i][6].CALL[z].address);
										}
									
									recipients_count=recipients_count+Timestamp_array[i][6].CALL.length;
									
										var BName=Timestamp_array[i][1];
							
							
				var strHtml1='';
				var strHtml2='';
				//for current date's broadcast design
				if(Timestamp_array[i][0]==currDate)
				{
					
					if(firsttime==0){
						strHtml2 += "<h1 class='time'>"+Timestamp_array[i][0]+"</h1><div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><span onclick='BeditDesign("+Timestamp_array[i][5]+","+count+")'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></span></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/phone.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit333' id='edit_edit_edit_"+count+"'  value='' type='button'  onclick=''><input class='edit1' id='edit_edit_"+count+"'  value='' type='button'  onclick='editbc("+Timestamp_array[i][5]+","+count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div></div><span id=BEDIT_"+count+" ></span>"; 
						$("#word992").append(strHtml2);
						firsttime=1;
					}
					
					
					else
					{
						strHtml2 += "<div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><span onclick='BeditDesign("+Timestamp_array[i][5]+","+count+")'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></span></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/phone.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit333' id='edit_edit_edit_"+count+"'  value='' type='button'  onclick=''><input class='edit1' id='edit_edit_"+count+"'  value='' type='button'  onclick='editbc("+Timestamp_array[i][5]+","+count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div></div><span id=BEDIT_"+count+" ></span>"; 
						$("#word992").append(strHtml2);
					}
				}
				
				else
				//for design of past broadcasts
				{
					if(i+1<=arrlength)
					{
						var z=Timestamp_array[i][0];
						//var  l=Timestamp_array[i+1][0];
						if(typeof Timestamp_array[i+1]!="undefined"&&(Timestamp_array[i][0] != Timestamp_array[i+1][0] )&&Timestamp_array[i+1][0]!=currDate)
						{
						strHtml1 += "<div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/phone.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit22' id='edit_edit_"+count+"'  value='' type='button'  onclick='cloneBackup("+Timestamp_array[i][5]+","+count+","+recipients_count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_"+count+" ></span></div>"; 
						$("#word2").append(strHtml1);
						}
						
						
						else
						{
								if(notCurrFirsttime==0)
								{
									strHtml1 += "<h1 class='time'>"+Timestamp_array[i][0]+"</h1><div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/phone.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit22' id='edit_edit_"+count+"'  value='' type='button'  onclick='cloneBackup("+Timestamp_array[i][5]+","+count+","+recipients_count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_"+count+" ></span></div>";
									notCurrFirsttime=1;
									$("#word2").append(strHtml1);
								}
								
								
								else
								{
							strHtml1 += "<div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/phone.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit22' id='edit_edit_"+count+"'  value='' type='button'  onclick='cloneBackup("+Timestamp_array[i][5]+","+count+","+recipients_count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_"+count+" ></span></div>";
							$("#word2").append(strHtml1);
								}
						}
					}
				}
				
				
					
					counter=1;
								}
								//for sms and email design
								if (typeof Timestamp_array[i][6].SMS != 'undefined'&&typeof Timestamp_array[i][6].EMAIL != 'undefined'&&typeof Timestamp_array[i][6].CALL == 'undefined') 
								{
									for(z=0;z<Timestamp_array[i][6].SMS.length;z++)
										{
											sms_recipients.push(Timestamp_array[i][6].SMS[z].address);
											email_recipients.push(Timestamp_array[i][6].EMAIL[z].address);
										}
									recipients_count=recipients_count+Timestamp_array[i][6].SMS.length;
										var BName=Timestamp_array[i][1];
							
								
							
				var strHtml1='';
				var strHtml2='';
				
				if(Timestamp_array[i][0]==currDate)
				{
					if(Timestamp_array[i][1]==Bname&&Timestamp_array[i][3]==BsenderName&&Clonein==0)
					{
						var divId = count;
						
						strHtml2 += "<div id=curr_"+count+"><h1 class='time'>Recently cloned broadcast</h1><div id=broadcast_"+count+" ><div class='football' style='background:#00CCFF;'><div class='football-left'><div class='footbal'><span onclick='BeditDesign("+Timestamp_array[i][5]+","+count+")'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></span></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/latter1.png' alt='' /><img src='images/at1.png' alt='' /></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit333' id='edit_edit_edit_"+count+"'  value='' type='button'  onclick=''><input class='edit1' id='edit_edit_"+count+"'  value='' type='button'  onclick='editbc("+Timestamp_array[i][5]+","+count+",'"+[sms_recipients]+"','"+[email_recipients]+"')'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delcnt("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div></div></div><span id=BEDIT_"+count+" ></span>"; 
						$("#word992").append(strHtml2);
						Clonein=1;
					}
					
					
					else
					{
						
					if(firsttime==0){
						strHtml2 += "<h1 class='time'>"+Timestamp_array[i][0]+"</h1><div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><span onclick='BeditDesign("+Timestamp_array[i][5]+","+count+")'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></span></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/latter1.png' alt='' /><img src='images/at1.png' alt='' /></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit333' id='edit_edit_edit_"+count+"'  value='' type='button'  onclick=''><input class='edit1' id='edit_edit_"+count+"'  value='' type='button'  onclick='editbc("+Timestamp_array[i][5]+","+count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div></div><span id=BEDIT_"+count+" ></span>"; 
						$("#word992").append(strHtml2);
						firsttime=1;
					}
					
					
					else
					{
						strHtml2 += "<div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/latter1.png' alt='' /><img src='images/at1.png' alt='' /></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit333' id='edit_edit_edit_"+count+"'  value='' type='button'  onclick=''><input class='edit1' id='edit_edit_"+count+"'  value='' type='button'  onclick='editbc("+Timestamp_array[i][5]+","+count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_"+count+" ></span></div>"; 
						$("#word992").append(strHtml2);
					}
					}
				}
				
				else
				{
					
					if(i+1<=arrlength)
					{
						var z=Timestamp_array[i][0];
						var  l=Timestamp_array[i+1][0];
						if(typeof Timestamp_array[i+1]!="undefined"&&(Timestamp_array[i][0] != Timestamp_array[i+1][0] )&&Timestamp_array[i+1][0]!=currDate)
						{
						strHtml1 += "<div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/latter1.png' alt='' /><img src='images/at1.png' alt='' /></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit22' id='edit_edit_"+count+"'  value='' type='button'  onclick='cloneBackup("+Timestamp_array[i][5]+","+count+","+recipients_count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_"+count+" ></span></div>";
						$("#word2").append(strHtml1); 
						}
						
						
						else
						{
								if(notCurrFirsttime==0)
								{
									strHtml1 += "<h1 class='time'>"+Timestamp_array[i][0]+"</h1><div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/latter1.png' alt='' /><img src='images/at1.png' alt='' /></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit22' id='edit_edit_"+count+"'  value='' type='button'  onclick='cloneBackup("+Timestamp_array[i][5]+","+count+","+recipients_count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_"+count+" ></span></div>";
									$("#word2").append(strHtml1);
									notCurrFirsttime=1;
								}
								
								
								else
								{
							strHtml1 += "<div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/latter1.png' alt='' /><img src='images/at1.png' alt='' /></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit22' id='edit_edit_"+count+"'  value='' type='button'  onclick='cloneBackup("+Timestamp_array[i][5]+","+count+","+recipients_count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_"+count+" ></span></div>";
							$("#word2").append(strHtml1);
								}
						}
					}
				}
				
				
					
					counter=1;
								}
								
								//for sms only design
								if (typeof Timestamp_array[i][6].SMS != 'undefined'&&typeof Timestamp_array[i][6].EMAIL == 'undefined'&&typeof Timestamp_array[i][6].CALL == 'undefined') 
								{
									for(z=0;z<Timestamp_array[i][6].SMS.length;z++)
										{
											sms_recipients.push(Timestamp_array[i][6].SMS[z].address);
										}
									recipients_count=recipients_count+Timestamp_array[i][6].SMS.length;
									var BName=Timestamp_array[i][1];
							
								
							
							
				var strHtml1='';
				var strHtml2='';
				
				if(Timestamp_array[i][0]==currDate)
				{
					
					if(Timestamp_array[i][1]==Bname&&Timestamp_array[i][3]==BsenderName&&Clonein==0)
					{
						
						var divId = count;
						strHtml2 += "<div id=curr_"+count+"><h1 class='time'>Recently cloned broadcast</h1><div id=broadcast_"+count+" ><div class='football' style='background:#00CCFF;'><div class='football-left'><div class='footbal'><span onclick='BeditDesign("+Timestamp_array[i][5]+","+count+")'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></span></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/latter1.png' alt='' /></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit333' id='edit_edit_edit_"+count+"'  value='' type='button'  onclick=''><input class='edit1' id='edit_edit_"+count+"'  value='' type='button'  onclick='editbc("+Timestamp_array[i][5]+","+count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delcnt("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div></div></div><span id=BEDIT_"+count+" ></span>"; 
						$("#word992").append(strHtml2);
						Clonein=1;
					}
					
					else
					
					{
						
					if(firsttime==0){

						strHtml2 += "<h1 class='time'>"+Timestamp_array[i][0]+"</h1><div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><span onclick='BeditDesign("+Timestamp_array[i][5]+","+count+")'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></span></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/latter1.png' alt='' /></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit333' id='edit_edit_edit_"+count+"'  value='' type='button'  onclick=''><input class='edit1' id='edit_edit_"+count+"'  value='' type='button'  onclick='editbc("+Timestamp_array[i][5]+","+count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div></div><span id=BEDIT_"+count+" ></span>"; 
						$("#word992").append(strHtml2);
						firsttime=1;
					}
					
					else
					{
						strHtml2 += "<div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/latter1.png' alt='' /></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit333' id='edit_edit_edit_"+count+"'  value='' type='button'  onclick=''><input class='edit1' id='edit_edit_"+count+"'  value='' type='button'  onclick='editbc("+Timestamp_array[i][5]+","+count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_"+count+" ></span></div>"; 
						$("#word992").append(strHtml2);
					}
					}
				}
				
				else
				{
					if(i+1<=arrlength)
					{
						var z=Timestamp_array[i][0];
						//var  l=Timestamp_array[i+1][0];
						if(typeof Timestamp_array[i+1]!="undefined"&&(Timestamp_array[i][0] != Timestamp_array[i+1][0] )&&Timestamp_array[i+1][0]!=currDate)
						{
						strHtml1 += "<div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/latter1.png' alt='' /></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit22' id='edit_edit_"+count+"'  value='' type='button'  onclick='cloneBackup("+Timestamp_array[i][5]+","+count+","+recipients_count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_"+count+" ></span></div>"; 
						$("#word2").append(strHtml1);
						}
						
						
						else
						{
								if(notCurrFirsttime==0)
								{
									strHtml1 += "<h1 class='time'>"+Timestamp_array[i][0]+"</h1><div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/latter1.png' alt='' /></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit22' id='edit_edit_"+count+"'  value='' type='button'  onclick='cloneBackup("+Timestamp_array[i][5]+","+count+","+recipients_count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_"+count+" ></span></div>";
									$("#word2").append(strHtml1);
									notCurrFirsttime=1;
								}
								
								
								else
								{
							strHtml1 += "<div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/latter1.png' alt='' /></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit22' id='edit_edit_"+count+"'  value='' type='button'  onclick='cloneBackup("+Timestamp_array[i][5]+","+count+","+recipients_count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='allContkeys_"+count+"' value='"+[allContactKeys]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_"+count+" ></span></div>";
							$("#word2").append(strHtml1);
								}
						}
					}
				}
				
				
				
					counter=1;
								}
								
								//for email only design
								if (typeof Timestamp_array[i][6].EMAIL != 'undefined'&&typeof Timestamp_array[i][6].SMS == 'undefined'&&typeof Timestamp_array[i][6].CALL == 'undefined') 
								{
									for(z=0;z<Timestamp_array[i][6].EMAIL.length;z++)
										{
											email_recipients.push(Timestamp_array[i][6].EMAIL[z].address);
										}
									recipients_count=recipients_count+Timestamp_array[i][6].EMAIL.length;
									var BName=Timestamp_array[i][1];
							
							
				var strHtml1='';
				var strHtml2='';
				
				if(Timestamp_array[i][0]==currDate)
				{
					
					if(Timestamp_array[i][1]==Bname&&Timestamp_array[i][3]==BsenderName&&Clonein==0)
					{
						var divId = count;
						strHtml2 += "<div id=curr_"+count+"><h1 class='time'>Recently cloned broadcast</h1><div id=broadcast_"+count+" ><div class='football' style='background:#00CCFF;'><div class='football-left'><div class='footbal'><span onclick='BeditDesign("+Timestamp_array[i][5]+","+count+")'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></span></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/at1.png' alt='' /></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit333' id='edit_edit_edit_"+count+"'  value='' type='button'  onclick=''><input class='edit1' id='edit_edit_"+count+"'  value='' type='button'  onclick='editbc("+Timestamp_array[i][5]+","+count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delcnt("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div></div></div><span id=BEDIT_"+count+" ></span>"; 
						$("#word992").append(strHtml2);
						Clonein=1;
					}
					
					else
					{
						
						
					if(firsttime==0){
						strHtml2 += "<h1 class='time'>"+Timestamp_array[i][0]+"</h1><div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><span onclick='BeditDesign("+Timestamp_array[i][5]+","+count+")'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></span></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/at1.png' alt='' /></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit333' id='edit_edit_edit_"+count+"'  value='' type='button'  onclick=''><input class='edit1' id='edit_edit_"+count+"'  value='' type='button'  onclick='editbc("+Timestamp_array[i][5]+","+count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div></div><span id=BEDIT_"+count+" ></span>"; 
						$("#word992").append(strHtml2);
						firsttime=1;
					}
					
					
					else
					{
						strHtml2 += "<div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/at1.png' alt='' /></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit333' id='edit_edit_edit_"+count+"'  value='' type='button'  onclick=''><input class='edit1' id='edit_edit_"+count+"'  value='' type='button'  onclick='editbc("+Timestamp_array[i][5]+","+count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_"+count+" ></span></div>"; 
						$("#word992").append(strHtml2);
					}
					}
				}
				
				else
				{
					
					
					if(i+1<=arrlength)
					{
						var z=Timestamp_array[i][0];
						//var  l=Timestamp_array[i+1][0];
						if( typeof Timestamp_array[i+1]!="undefined"&&(Timestamp_array[i][0] != Timestamp_array[i+1][0] )&&Timestamp_array[i+1][0]!=currDate)
						{
						strHtml1 += "<div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/at1.png' alt='' /></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit22' id='edit_edit_"+count+"'  value='' type='button'  onclick='cloneBackup("+Timestamp_array[i][5]+","+count+","+recipients_count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_"+count+" ></span></div>"; notCurrFirsttime=0;
						$("#word2").append(strHtml1);
						}
						
						
						
						else
						{
								if(notCurrFirsttime==0)
								{
									strHtml1 += "<h1 class='time'>"+Timestamp_array[i][0]+"</h1><div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/at1.png' alt='' /></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit22' id='edit_edit_"+count+"'  value='' type='button'  onclick='cloneBackup("+Timestamp_array[i][5]+","+count+","+recipients_count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_"+count+" ></span></div>";
									notCurrFirsttime=1;
									$("#word2").append(strHtml1);
								}
								
								
								
								else
								{
							strHtml1 += "<div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'><img src='images/at1.png' alt='' /></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><input class='edit22' id='edit_edit_"+count+"'  value='' type='button'  onclick='cloneBackup("+Timestamp_array[i][5]+","+count+","+recipients_count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_"+count+" ></span></div>";
							$("#word2").append(strHtml1);
								}
						}
					}
				}
				
				
					
					counter=1;	
								}
				
						}
					
				$("#word2").show();
				$("#word992").show();
				
				if(arrlength==0)
				{
					//$("#emptyBroadcast").show();
					
				}
			$('#img_loading1').hide();
			$("#main").css({"opacity": ""});
			$('html,body').animate({ scrollTop: $('#curr_'+divId).offset().top }, 'slow');
		},
		error: function (data){
			alert(data.responseJSON.status);
		}
		

		});
		
	$('#background_load').hide();
	

}
// JavaScript Document