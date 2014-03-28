// JavaScript Document

function downloadBroadcast(bId)
{
	 var url = "http://askfastmarket1.appspot.com/products/broadcastnew/excel/export?id="+bId;
	 window.open(url, '_blank');
}

function imageLoadDynamicallyReports(count,Timestamp_array,i,arrlength,notCurrFirsttime,BName,recipients_count,sms_recipients,email_recipients,allContactKeys,image,firsttime)
{
				var strHtml1='';var strHtml2='';
				//console.log(Timestamp_array[i][0]);
					//console.log(notCurrFirsttime);
					if(i+1<=arrlength)
					{
								if(notCurrFirsttime==0&&document.getElementById("reportsTimestamp").value=="")
								{
									//console.log(Timestamp_array[i][0]);
									strHtml1 += "<h1 class='time'>"+Timestamp_array[i][0]+"</h1><div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'>"+image+"</div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><div class='edit'><input class='download4' type='button' value='' onclick='downloadBroadcast("+Timestamp_array[i][5]+")'></div></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_"+count+" ></span></div>";
									//notCurrFirsttime=1;
									$("#word222222").append(strHtml1);
									$('#reportsTimestamp').val('false');
								}
								else
								{
							strHtml1 += "<div id=broadcast_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><h6 id='heading_edit_"+i+"'>"+BName+"</h6></div><div class='therty7'> "+recipients_count+" </div><div class='three-img'>"+image+"</div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+Timestamp_array[i][5]+","+count+");' style='display:none;'><div class='edit'><input class='download4' type='button' value='' onclick='downloadBroadcast("+Timestamp_array[i][5]+")'></div></div><input type='hidden' id='broadcastName_"+count+"' value='"+BName+"'><input type='hidden' id='message_"+count+"' value='"+Timestamp_array[i][2]+"'><input type='hidden' id='senderName_"+count+"' value='"+Timestamp_array[i][3]+"'><input type='hidden' id='emailSubject_"+count+"' value='"+Timestamp_array[i][4]+"'><input type='hidden' id='emailRecipients_"+count+"' value='"+[email_recipients]+"'><input type='hidden' id='smsRecipients_"+count+"' value='"+[sms_recipients]+"'><input type='hidden' id='timestamp_"+count+"' value='"+Timestamp_array[i][0]+"'><input type='hidden' id='landLine_"+count+"' value='"+Timestamp_array[i][2]+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_id_"+count+"' onclick='hide_hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delbc("+Timestamp_array[i][5]+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_"+count+" ></span></div>";
							$("#word222222").append(strHtml1);
								}
					}
					counter=1;
}

