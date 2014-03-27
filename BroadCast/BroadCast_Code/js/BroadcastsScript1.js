
// JavaScript Document

//function to only run already saved broadcast
function startNow(bId,tabId)
{
	$('#img_loading1').show();
	$("#main").css({"opacity": "0.3"});
	$.ajax({	
			type: "POST",
			contentType: "application/json",
			dataType: 'json',
			xhrFields: {
			withCredentials: true
			},
			url : "http://askfastmarket1.appspot.com/products/broadcastnew/resend/"+bId,
			cache: false,
			crossDomain: true,
			xhrFields: {
			withCredentials: true
			},
			success: function (data) {
			$('#img_loading1').hide();
			$("#main").css({"opacity": ""});
			document.body.scrollTop = document.documentElement.scrollTop = 0;
			BS();
			setTimeout(function(){$('#edit_edit_edit_'+tabId).fadeOut(3000);},4000);
				},
			error: function (data){
				alert(data.responseJSON.status);
			}
		});
}


function BeditDesign(broadcastId,div_id)
{
	
	$('#BEDIT_'+div_id).html('');
	
	var Bname = $('#broadcastName_'+div_id).val();
	var Bmessage = $('#message_'+div_id).val();
    var BsenderName = $('#senderName_'+div_id).val();
	var Btimestamp = $('#timestamp_'+div_id).val();
	var BsmsRecipients = $('#smsRecipients_'+div_id).val();
	var BemailRecipients = $('#emailRecipients_'+div_id).val();
	var BemailSubject = $('#emailSubject_'+div_id).val();
	var allContactKeys=$('#allContkeys_'+div_id).val();
	var BeditDivShow='';
	
	
	//html to display under broadast when broadcast name is clicked
	BeditDivShow = "<div id='ToggleBW"+div_id+"' style='display:none;'><div id='b_word' class='container active tab-pane'><form action='' method='post'><div class='row'><div class='col-md-12'><div class='starter-template'><h1 class='greyout'>1 BROADCAST NAME</h1><p class='lead'>Please give a unique name to your new broadcast.</p><div class='alert vanish alert-warning alert-dismissable'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button> Valid name </div><div class='alert vanish alert-success alert-dismissable'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>Invalid name </div><input type='text' id='b_bname' class='greyoutBorder' name='bname' placeholder='ASK-Fast New discount offer' required value='"+Bname+"'/></div></div></div><div class='row'><div class='col-md-12'><div class='starter-template'><div class='media'><h1 class='greyout'>2 MEDIA TYPE</h1><p class='lead'>Please choose media type that you would like to use.</p><div class='form_main_2'><div class='sms_bg greyoutBg'><div class='sms_text'><input id='b_checkbox_1' class='checkbox' type='checkbox' /><span>SMS</span><div class='clear'></div></div><div id='b_autoUpdate' style='display:none;' class='sender_id'><div class='alert vanish alert-warning alert-dismissable' style='margin-left:10px;text-align:left;'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>The number that you entered is not verified please verify the number before using </div><div class='alert vanish alert-warning alert-dismissable' style='margin-left:10px;text-align:left;'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>Please use letters </div><label>Sender ID:</label><input class='ask_fast greyoutBorder' type='text' id='b_sid' name='sid' required placeholder='ASK-Fast'/></div><div class='clear'></div></div><div class='email'> <div class='sms_bg greyoutBg'><div class='email_text'><input id='b_checkbox_2' class='checkbox' type='checkbox' /><span>E-mail</span> </div><div class='sender_id to2' id='b_to2' style='display:none;'><div class='alert vanish alert-warning alert-dismissable' style='margin-left:10px;text-align:left;'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>Please enter a valid e-mail address </div><label>Sender Email:</label><input class='ask_fast greyoutBorder' type='email' id='b_semail' value='"+BsenderName+"' /></div><div class='subject_id to2' id='b_to3' style='display:none;'><label>Subject name:</label><input class='ask_fast greyoutBorder' id='b_emailsbjt' type='text' value='"+BemailSubject+"'/></div><div class='clear'></div></div><div class='clear'></div></div><div class='email'><div class='sms_bg greyoutBg'><div class='email_text'><input id='b_checkbox_6' class='checkbox' type='checkbox' /><span>Voice Broadcast</span> </div><div class='subject_id' id='b_autoUpdate6' style='display:none;'><label>Caller ID:</label><div class='bool-slider true'><div class='inset'><div class='control'></div></div></div><div class='clearfix'></div><div class='settext'>Receivers are able to see the phone numbers of Broadcast. By turning this<br/>off, receivers are not able to see the phone numbers of your broadcast<div class='clear'></div></div><div class='upload_text'><div style='color: #FFFFFF;float: left;font-size: 19px;margin-right: 20px;margin-top: 5px;'>Audio Selection:</div><div style='float:left'><label id='lcid1' style='display: block;float: none;font-size: 19px;margin-bottom: 26px;margin-left: 0;margin-top: 10px;text-align: left;'  class='label_radio' for='radio-01'><input name='sample-radio' class='label_radio1' id='radio-01' value='1' type='radio' checked /> Text  to speech</label><label id='lcid2' style='display: block;font-size: 19px;margin-bottom: 11px;margin-left: 0;text-align: left;' class='label_radio' for='radio-02'><input name='sample-radio' class='label_radio2' id='radio-02' value='2' type='radio' /> Upload a file</label></div><div class='clear'></div></div></div><div class='clear'></div></div><div class='clear'></div></div><div class='email'><div class='sms_bg greyoutBg'><div class='sms_text'><input id='checkbox_twt' class='checkbox' type='checkbox' /><span>Twitter</span><div class='clear'></div></div><div id='twt' style='display:none;'><div id='beforeAuth' class='twttext'>You do not have any twitter account connected to your broadcast account.<div class='clear'></div></div><div id='afterTAuth' class='twttext' style='display:none'><div class='clear'></div></div><div id='twt1' class='upload11_file11'><a href='javascript:' onClick='authTwitt();'>Authorize Broadcast</a></div><div class='upload11_file11' id='twt22' style='display:none'><a href='javascript:' onClick='authTwitt111();'>Revoke access</a></div></div><div class='clear'></div></div></div><div class='message'><h1 class='greyout'>3 MESSAGE</h1></div><div class='text_aria_main greyoutBg' style='padding-top:22px;'><div class='alert vanish alert-warning alert-dismissable' style='margin-left:10px;text-align:left;'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>You reached second SMS which will increase the cost of broadcasting. </div><span class='scnmes'></span><textarea maxlength='155' id='b_textarea' class='greyoutborderanother' name='textarea' placeholder='50 percentage discount is waiting for your business.'> "+Bmessage+"</textarea><label id='b_textarea_feedback'></label></div><div class='email'><div class='sms_bg greyoutBg'><div class='language'><span>Language:</span><select class='language1'><option value='English'>English</option><option value='French'>French</option><option value='German'>German</option></select></div><div class='upload1_file1 greyoutBg'><a href='#' style='display:none;'>Upload a Voice File</a></div><div class='clear'></div></div><div class='clear'></div></div><div class='recep'><h1 class='greyout'>4 RECEPIENTS</h1></div><div class='from_file greyoutBg'><div class='from_text'><input id='b_checkbox_3' type='checkbox' name='' />From a file <span>( download sample .csv file )</span></div><div class='from_text'><input id='b_checkbox_4' type='checkbox' name='' />Contact book</div><input type='hidden' id='b_contact_search_enter' value=''><input type='hidden' id='b_broadcast_search_enter' value=''><div class='from_text'><input id='b_checkbox_5' type='checkbox' name='' />Manual</div></div><div class='from_file_2' id='b_autoUpdate3' style='display:none;padding-top:22px;'><div class='alert vanish alert-warning alert-dismissable' style='margin-left:10px;text-align:left;margin-right:10px;'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>From a file - Invalid file </div><div class='alert vanish alert-warning alert-dismissable' style='margin-left:10px;text-align:left;margin-right:10px;'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>Sorry there is something wrong with server. Please try it again later. </div><input type='submit' class='ax_button' value='Upload from PC' id='b_u79'><input type='submit' class='ax_button' value='Upload from PC' id='b_u79'><div class='uploading'>uploading feedback (65)</div></div><div class='from_file_3' id='b_autoUpdate5'  style='display:none;' ><h1>Manual entry</h1><div class='alert vanish alert-warning alert-dismissable' style='margin-left:10px;text-align:left;margin-right:10px;margin-top:13px;'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>There are some fields that we could not recognize. </div><div class='alert vanish alert-warning alert-dismissable' style='margin-left:10px;text-align:left;margin-right:10px;'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>Please enter a valid phone number. </div><div class='alert vanish alert-warning alert-dismissable' style='margin-left:10px;text-align:left;margin-right:10px;'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>Please enter a e-mail address </div><div class='name_entry'><div class='entry'><label>Name</label><input type='text'  id='b_rname' name='rname' required value=''><div class='clear'></div></div><div class='entry'><label>Mobile Number</label><input type='number' id='b_rmobile' name='rmobile' maxlength='15' required value=''><div class='clear'></div></div><div class='entry'><label>Landline Number</label><input type='tel'  id='b_rlline' name='rlline' required value=''><div class='clear'></div></div><div class='entry'><label>E-mail contact</label><input type='email'  id='b_remail' name='remail' required value=''><div class='clear'></div></div></div><div class='the_added'><p> The added contact will be saved to your contact book. You can use it, other products of ASK-Fast without any action. </p><input type='submit' value='Upload from PC' class='add_contact'></div><div class='clear'></div></div><div class='selected greyoutBg' id='b_autoUpdate4' style='display:none;padding-top:22px;'><div class='alert vanish alert-warning alert-dismissable' style='margin-left:10px;text-align:left;'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>Empty Contact book - sorry you do not have any contact in your contact book, you can upload your contacts from gmail. Please click the link. </div><div class='group'><input id='b_checkbox_7' type='checkbox' name='' />Select an individual </div><div class='group'><input id='b_checkbox_8' type='checkbox' name='' />Select a group </div><div class='selected1' id='b_autoUpdate7' style='display:none;'><div id='b_countcount'> <h2>Selected contacts (0)</h2></div><div class='group'><input id='b_prnt' type='checkbox' name='' onClick='selectall(this)' />Select all contacts </div><div id='b_checkboxContacts'></div></div><div class='selected1' id='b_autoUpdate8' style='display:none;'><div id='b_countcount1'> <h2>Selected Groups (0)</h2></div><div class='group'><input id='b_prnt1' type='checkbox' name='' onClick='selectall1(this)' />Select all groups </div><div id='b_checkboxGroups'></div></div></div><div class='save_broadcast'><div class='save_button'><input type='submit' class='sbmit123 greyoutBg' value='Save Broadcast' onClick='AddBroadcast()'></div></div></div><div class='test_broad'><div class='save_button_2'><input type='submit' class='sbmit123 greyoutBg' onClick='AddBroadcast()' value='Run Broadcast'></div><div class='alert vanish  alert-success alert-dismissable' style='margin-left:10px;text-align:left;margin-top:15px;'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>Broadcast is saved. </div><div class='alert vanish alert-warning alert-dismissable' style='margin-left:10px;text-align:left;'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>Broadcast could not be saved. </div><div class='alert vanish alert-info alert-dismissable' style='margin-left:10px;text-align:left;'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>First test is free. </div><div class='alert vanish alert-info alert-dismissable' style='margin-left:10px;text-align:left;'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>I agree that ASK-Fast is only provider of communication and I am responsible for my broadcast. </div><div class='clear'></div></div></div></div></div></div></form></div></div>";
	 
	$('#BEDIT_'+div_id).append(BeditDivShow); 
	//$('#BEDIT_'+div_id).show();
	
	
	if(document.getElementById("b_checkbox_4").checked == false)
		{
			document.getElementById("b_checkbox_4").checked = true;
			
			if($('#b_checkbox_4').is(":checked")){
				$('#b_autoUpdate4').show();
			} 
 			if($('#b_checkbox_4').is(":not(:checked)")){
	    		$('#b_autoUpdate4').hide();
			}
			document.getElementById("b_checkbox_7").checked = true;
			//bb15(BsmsRecipients,BemailRecipients,div_id,allContactKeys,2);
			//console.log("what");
			
		}
		
	if (typeof BsmsRecipients != 'undefined') 
		{
			document.getElementById("b_checkbox_1").checked = true;
			$('#b_autoUpdate').show();
		}
		
	if (typeof BemailRecipients != 'undefined') 
		{
			document.getElementById("b_checkbox_2").checked = true;
			$('#b_to2').show();
			$('#b_to3').show();
		}	
		
		
		if (document.getElementById("toggoleBWhidden").value == 'set')
		{  
			//console.log("aya");
			//console.log(5);
			$('#ToggleBW1'+div_id).hide(); 
			$('#ToggleBW'+div_id).show(); 
		}
		else
		{
	   flag=!flag;
	   if(flag)
	   {
		   //console.log(1);
		   //console.log(flag);
		   $('#ToggleBW'+div_id).hide();
		   //$('#ToggleBW').show();
	   }
	   if(!flag)
	   {	
	   		//console.log(2);
			//console.log(flag);
		    $('#ToggleBW'+div_id).show();
	   }
		}
		document.getElementById("toggoleBWhidden").value = 'unset';
		document.getElementById("toggoleBWhidden1").value = 'set';
		//console.log(document.getElementById("toggoleBWhidden1").value);
		//console.log(document.getElementById("toggoleBWhidden").value);
	
		
}



function editbc(broadcastId,div_id){
	
	//console.log(div_id);
	//console.log(document.getElementById("toggoleBWhidden1").value);
	//console.log(document.getElementById("toggoleBWhidden").value);
	
	
	$('#BEDIT_'+div_id).html('');
	
	var Bname = $('#broadcastName_'+div_id).val();
	var Bmessage = $('#message_'+div_id).val();
    var BsenderName = $('#senderName_'+div_id).val();
	var Btimestamp = $('#timestamp_'+div_id).val();
	var BsmsRecipients = $('#smsRecipients_'+div_id).val();
	var BemailRecipients = $('#emailRecipients_'+div_id).val();
	var Bemailsubject = $('#emailSubject_'+div_id).val();
	var allContactKeys=$('#allContkeys_'+div_id).val();
	var istwt=$('#twtAdapter'+div_id).val();
	var istts=$('#ttsAdapter'+div_id).val();
	console.log(BemailRecipients);
	console.log(BsmsRecipients);
	
	var BeditDivShow='';
	
	//html for design to display under broadcast when edit button is clicked
	BeditDivShow = "<div id='ToggleBW1"+div_id+"' style='display:none';><div id='bb_word' class='container active tab-pane'><form action='' method='post'><div class='row'><div class='col-md-12'><div class='starter-template'><h1>1 BROADCAST NAME</h1><p class='lead'>Please give a unique name to your new broadcast.</p><div class='alert vanish alert-warning alert-dismissable'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button> Valid name </div><div class='alert vanish alert-success alert-dismissable'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>Invalid name </div><input type='text' id='bb_bname' name='bname' placeholder='ASK-Fast New discount offer' required value='"+Bname+"'/></div></div></div><div class='row'><div class='col-md-12'><div class='starter-template'><div class='media'><h1>2 MEDIA TYPE</h1><p class='lead'>Please choose media type that you would like to use.</p><div class='form_main'><div class='sms_bg'><div class='sms_text'><input id='bb_checkbox_1"+div_id+"' class='checkbox' type='checkbox' onclick='bb1("+div_id+")'/><span>SMS</span><div class='clear'></div></div><div id='bb_autoUpdate"+div_id+"' style='display:none;' class='sender_id'><div class='alert vanish alert-warning alert-dismissable' style='margin-left:10px;text-align:left;'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>The number that you entered is not verified please verify the number before using </div><div class='alert vanish alert-warning alert-dismissable' style='margin-left:10px;text-align:left;'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>Please use letters </div><label>Sender ID:</label><input class='ask_fast' type='text' id='bb_sid"+div_id+"' value=''/></div><div class='clear'></div></div><div class='email'> <div class='sms_bg'><div class='email_text'><input id='bb_checkbox_2"+div_id+"' class='checkbox' type='checkbox' onclick='bb2("+div_id+")'/><span>E-mail</span> </div><div class='sender_id to2' id='bb_to2"+div_id+"' style='display:none;'><div class='alert vanish alert-warning alert-dismissable' style='margin-left:10px;text-align:left;'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>Please enter a valid e-mail address </div><label>Sender Email:</label><input class='ask_fast' type='email' id='bb_semail"+div_id+"' name='semail'  placeholder='info@ask-fast.com' required value='' /></div><div class='subject_id to2' id='bb_to3"+div_id+"' style='display:none;'><label>Subject name:</label><input class='ask_fast' id='bb_emailsbjt"+div_id+"' type='text' value=''/></div><div class='clear'></div></div><div class='clear'></div></div><div class='email'><div class='sms_bg'><div class='email_text'><input id='bb_checkbox_6"+div_id+"' class='checkbox' type='checkbox' onclick='bb3("+div_id+")'/><span>Voice Broadcast</span> </div><div class='subject_idght' id='bb_autoUpdate6"+div_id+"' style='display:none;'><label>Caller ID:</label><div class='bool-slider true'><div class='inset'><div class='control'></div></div></div><div class='clearfix'></div><div class='settext'>Receivers are able to see the phone numbers of Broadcast. By turning this<br/>off, receivers are not able to see the phone numbers of your broadcast<div class='clear'></div></div><div class='upload_text'><div style='color: #FFFFFF;float: left;font-size: 19px;margin-right: 20px;margin-top: 5px;'>Audio Selection:</div><div class='tt1232'><label id='lcid1' class='label_radio' for='radio-01'><input name='sample-radio' class='label_radio1' id='radio-01' value='1' type='radio' checked /> Text  to speech</label><label id='lcid2' class='label_radio' for='radio-02'><input name='sample-radio' class='label_radio2' id='radio-02' value='2' type='radio' /> Upload a file</label></div><div class='clear'></div></div></div><div class='clear'></div></div><div class='clear'></div></div><div class='email'><div class='sms_bg'><div class='sms_text'><input id='bb_checkbox_twt"+div_id+"' class='checkbox' type='checkbox' onclick='bb12("+div_id+")'/><span>Twitter</span><div class='clear'></div></div><div id='bb_twt"+div_id+"' style='display:none;'><div id='beforeAuth' class='twttext'>You do not have any twitter account connected to your broadcast account.<div class='clear'></div></div><div id='afterTAuth' class='twttext' style='display:none'><div class='clear'></div></div><div id='twt1' class='upload11_file11'><a href='javascript:' onClick='authTwitt();'>Authorize Broadcast</a></div><div class='upload11_file11' id='twt22' style='display:none'><a href='javascript:' onClick='authTwitt111();'>Revoke access</a></div></div><div class='clear'></div></div></div><div class='message'><h1>3 MESSAGE</h1></div><div class='text_aria_main' style='padding-top:22px;'><div class='alert vanish alert-warning alert-dismissable' style='margin-left:10px;text-align:left;'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>You reached second SMS which will increase the cost of broadcasting. </div><span class='scnmes'></span><textarea maxlength='155' id='bb_textarea' name='textarea' placeholder='50 percentage discount is waiting for your business.'>"+Bmessage+" </textarea><label id='bb_textarea_feedback'></label></div><div class='email'><div class='sms_bg'><div class='language'><span>Language:</span><select class='language1'><option value='English'>English</option><option value='French'>French</option><option value='German'>German</option></select></div><div class='upload1_file1'><a href='#' style='display:none;'>Upload a Voice File</a></div><div class='clear'></div></div><div class='clear'></div></div><div class='recep'><h1>4 RECEPIENTS</h1></div><div class='from_file'><div class='from_text'><input id='bb_checkbox_3' type='checkbox' name='' onclick='bb9()'/>From a file <span>( download sample .csv file )</span></div><div class='from_text'><input id='bb_checkbox_4"+div_id+"' type='checkbox' name='' onclick='bb10("+div_id+")'/>Contact book</div><input type='hidden' id='bb_contact_search_enter' value=''><input type='hidden' id='bb_broadcast_search_enter' value=''><div class='from_text'><input id='bb_checkbox_5' type='checkbox' name='' onclick='bb11()'/>Manual</div></div><div class='from_file_2' id='bb_autoUpdate3' style='display:none;padding-top:22px;'><div class='alert vanish alert-warning alert-dismissable' style='margin-left:10px;text-align:left;margin-right:10px;'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>From a file - Invalid file </div><div class='alert vanish alert-warning alert-dismissable' style='margin-left:10px;text-align:left;margin-right:10px;'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>Sorry there is something wrong with server. Please try it again later. </div><input type='submit' class='ax_button' value='Upload from PC' id='bb_u79'><input type='submit' class='ax_button' value='Upload from PC' id='bb_u79'><div class='uploading'>uploading feedback (65)</div></div><div class='from_file_3' id='bb_autoUpdate5'  style='display:none;' ><h1>Manual entry</h1><div class='alert vanish alert-warning alert-dismissable' style='margin-left:10px;text-align:left;margin-right:10px;margin-top:13px;'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>There are some fields that we could not recognize. </div><div class='alert vanish alert-warning alert-dismissable' style='margin-left:10px;text-align:left;margin-right:10px;'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>Please enter a valid phone number. </div><div class='alert vanish alert-warning alert-dismissable' style='margin-left:10px;text-align:left;margin-right:10px;'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>Please enter a e-mail address </div><div class='name_entry'><div class='entry'><label>Name</label><input type='text'  id='bb_rname' name='rname' required value=''><div class='clear'></div></div><div class='entry'><label>Mobile Number</label><input type='number' id='bb_rmobile' name='rmobile' maxlength='15' required value=''><div class='clear'></div></div><div class='entry'><label>Landline Number</label><input type='tel'  id='bb_rlline' name='rlline' required value=''><div class='clear'></div></div><div class='entry'><label>E-mail contact</label><input type='email'  id='bb_remail' name='remail' required value=''><div class='clear'></div></div></div><div class='the_added'><p> The added contact will be saved to your contact book. You can use it, other products of ASK-Fast without any action. </p><input type='submit' value='Upload from PC' class='add_contact'></div><div class='clear'></div></div><div class='selected' id='bb_autoUpdate4"+div_id+"' style='display:none;padding-top:22px;'><div class='alert vanish alert-warning alert-dismissable' style='margin-left:10px;text-align:left;'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>Empty Contact book - sorry you do not have any contact in your contact book, you can upload your contacts from gmail. Please click the link. </div><div class='group'><input id='bb_checkbox_7' type='checkbox' name=''/>Select an individual </div><div class='group'><input id='bb_checkbox_8' type='checkbox' name='' />Select a group </div><div class='selected1' id='bb_autoUpdate7"+div_id+"' style='display:none;'><div id='bb_countcount'> <h2>Selected contacts (0)</h2></div><div class='group'><input id='bb_prnt' type='checkbox' name='' onClick='selectall(this)' />Select all contacts </div><div id='bb_checkboxContacts"+div_id+"'></div></div><div class='selected1' id='bb_autoUpdate8' style='display:none;'><div id='bb_countcount1'> <h2>Selected Groups (0)</h2></div><div class='group'><input id='bb_prnt1' type='checkbox' name='' onClick='selectall1(this)' />Select all groups </div><div id='bb_checkboxGroups'></div></div></div><div class='save_broadcast'><div class='save_button'><input type='submit' class='sbmit123' value='Update Broadcast' onClick='updatebroadcast("+broadcastId+","+div_id+")'></div></div></div><div class='test_broad'><div class='save_button_2'></div><div class='alert vanish  alert-success alert-dismissable' style='margin-left:10px;text-align:left;margin-top:15px;'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>Broadcast is saved. </div><div class='alert vanish alert-warning alert-dismissable' style='margin-left:10px;text-align:left;'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>Broadcast could not be saved. </div><div class='alert vanish alert-info alert-dismissable' style='margin-left:10px;text-align:left;'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>First test is free. </div><div class='alert vanish alert-info alert-dismissable' style='margin-left:10px;text-align:left;'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>I agree that ASK-Fast is only provider of communication and I am responsible for my broadcast. </div><div class='clear'></div></div></div></div></div></div></form></div></div>";
	 
	$('#BEDIT_'+div_id).append(BeditDivShow); 
	//$('#BEDIT_'+div_id).show();
	if(document.getElementById("flag").value == 'set')
	{
		document.getElementById("bb_checkbox_7").checked = false;
		document.getElementById("bb_checkbox_4"+div_id).checked = false;
	}
	
	
	if (typeof BsmsRecipients != 'undefined'&&BsmsRecipients!='') 
		{
			document.getElementById("bb_checkbox_1"+div_id).checked = true;
			document.getElementById("bb_sid"+div_id).value = BsenderName;
			$('#bb_autoUpdate'+div_id).show();
		}
		
		if (istwt==1) 
		{
			document.getElementById("bb_checkbox_twt"+div_id).checked = true;
			$('#bb_twt'+div_id).show();
		}
		if (istts==1) 
		{
			document.getElementById("bb_checkbox_6"+div_id).checked = true;
			$('#bb_autoUpdate6'+div_id).show();
		}
		
	if (typeof BemailRecipients != 'undefined'&&BemailRecipients!='') 
		{
			document.getElementById("bb_checkbox_2"+div_id).checked = true;
			document.getElementById("bb_semail"+div_id).value = BsenderName;
			document.getElementById("bb_emailsbjt"+div_id).value = Bemailsubject;
			$('#bb_to2'+div_id).show();
			$('#bb_to3'+div_id).show();
		}	
		
		if(document.getElementById("bb_checkbox_4"+div_id).checked == false)
		{
		document.getElementById("bb_checkbox_4"+div_id).checked = true;
		$('#bb_autoUpdate4'+div_id).show();
		}
		
		if(document.getElementById("bb_checkbox_7").checked == false)
		{
		document.getElementById("bb_checkbox_7").checked = true;
		document.getElementById("bb_checkbox_4"+div_id).checked = true;
		bb15(BsmsRecipients,BemailRecipients,div_id,allContactKeys,1);
		}
		
		if (document.getElementById("toggoleBWhidden1").value == 'set')
		{  
			//console.log("aya");
			//console.log(6);
			$('#ToggleBW'+div_id).hide(); 
			$('#ToggleBW1'+div_id).show(); 
		}
		else
		{
	   flag=!flag;
	   if(flag)
	   {
		   //console.log(3);
		  // console.log(flag);
		   $('#ToggleBW1'+div_id).hide();
		   //$('#ToggleBW1').show();
	   }
	   if(!flag)
	   {
		   // console.log(4);
			//console.log(flag);
		    $('#ToggleBW1'+div_id).show();
	   }
		}
		document.getElementById("toggoleBWhidden").value = 'set';
		document.getElementById("toggoleBWhidden1").value = 'unset';
		
}



//update broadcast
function updatebroadcast(BID,div_id)
{
		
	var check=0;
	var senderId=document.getElementById("bb_sid").value;
	var receiver_name=document.getElementById("bb_rname").value;
	var receiver_mobile=document.getElementById("bb_rmobile").value;
	var receiver_landLine=document.getElementById("bb_rlline").value;
	var receiver_email=document.getElementById("bb_remail").value;
	var broadCast_name=document.getElementById("bb_bname").value;
	var broadCast_message=document.getElementById("bb_textarea").value;
	var broadCast_sender_email=document.getElementById("bb_semail").value;
	var broadCast_sender_name=document.getElementById("bb_emailsbjt").value;
	var broadCast_email_subject=document.getElementById("bb_emailsbjt").value;
	var phoneNo=document.getElementById("rmobile").value;
	var Valueofcheckbox='';
	if(document.getElementById("flag").value=='set')
	{
		document.getElementById("bb_checkbox_7").checked = true;
	}
		
		//send broadcast through sms manually
 	 if (document.getElementById('checkbox_1').checked&&document.getElementById('checkbox_5').checked||document.getElementById('checkbox_1').checked&&document.getElementById('checkbox_5').checked&&document.getElementById('checkbox_2').checked) 
		{
			//console.log("1");
			if(senderId=='')
				{
					alert("Sender Id cannot be empty");
					if(document.getElementById("checkbox_1").checked == false)
						{
							document.getElementById("checkbox_1").checked = true;
						}
					document.getElementById("sid").focus();
				}
				
			if(phoneNo=='')
				{
					alert("Mobile Number cannot be empty");
					if(document.getElementById("checkbox_5").checked == false)
						{
							document.getElementById("checkbox_5").checked = true;
						}
					document.getElementById("rmobile").focus();
				}
			
			if(broadCast_message=='')
				{
					alert("Broadcast message cannot be empty");
					
					document.getElementById("textarea").focus();
				}
	datasinfo ='{"addresses": {"SMS": [{"address": "'+phoneNo+'"}]},"adapterList": {"SMS": ""},"senderName": "'+senderId+'","message":"'+broadCast_message+'","retryMethod":"MANUAL","broadcastName": "'+broadCast_name+'"}';
	

		if(broadCast_name!=''&&phoneNo!=''&&senderId!=''&&broadCast_message!='')
			{
			
			$.ajax({	
				type: "POST",
				contentType: "application/json",
				dataType: 'json',
				data: datasinfo,
				xhrFields: {
				withCredentials: true
				}, 
				url : "http://askfastmarket1.appspot.com/products/broadcastnew",
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
				document.getElementById("remail").value="";
				document.getElementById("bname").value="";
				document.getElementById("textarea").value="";
				document.getElementById("emailsbjt").value="";
				document.body.scrollTop = document.documentElement.scrollTop = 0;
					},
				error: function (data){
					alert(data.responseJSON.status);
				}
			});
			
			}
		}
		
		//send broadcast through email manually
	if (document.getElementById('checkbox_2').checked&&document.getElementById('checkbox_5').checked) 
		{
			if(receiver_email!='')
			{
			
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
            Valueofcheckbox='"addresses":{"EMAIL": [{"address": "'+receiver_email+'"}]}';
			
	datasinfo = '{"senderName":"'+broadCast_sender_email+'","message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","emailSubject":"'+broadCast_email_subject+'",'+Valueofcheckbox+'}';
	

		if(broadCast_name!=''&&broadCast_message!='')
			{
			
				$.ajax({	
					type: "POST",
					contentType: "application/json",
					dataType: 'json',
					data: datasinfo,
					xhrFields: {
					withCredentials: true
					}, 
					url : "http://askfastmarket1.appspot.com/products/broadcastnew",
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
					document.getElementById("remail").value="";
					document.getElementById("bname").value="";
					document.getElementById("textarea").value="";
					document.getElementById("emailsbjt").value="";
					document.body.scrollTop = document.documentElement.scrollTop = 0;
						},
					error: function (data){
						alert(data.responseJSON.status);
					}
				});
			
			}
		}
		
        }
	
	
	//sms to all selected contacts
	if(document.getElementById('bb_checkbox_7').checked&&!document.getElementById('bb_checkbox_2').checked&&document.getElementById('bb_checkbox_1').checked)
		{
			
			if(senderId=='')
				{
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
									s = '{"address": "'+c[1]+'"}';
									k=1;
								}
							else
								{
									 s = '{"address": "'+c[1]+'"},';
								}
							output = output.substr(0, position) + s + output.substr(position);
						}
				
				}
				
			}
			j++;
			
			});
			
			Valueofcheckbox=output;
			var broadCast_name1=broadCast_name+"_"+counter1;
			var broadCast_message1=broadCast_message+"|sms";
			
			datasinfo = '{"broadcast": {"senderName":"'+senderId+'","message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'",'+Valueofcheckbox+',"adapterList": {"SMS": ""}},"id": "'+BID+'","retryInfos": {},"ownerKey": "yasir"}';
		if(broadCast_name!=''&&senderId!=''&&broadCast_message!='')
			{
			
				$.ajax({	
					type: "PUT",
					contentType: "application/json",
					dataType: 'json',
					data: datasinfo,
					xhrFields: {
					withCredentials: true
					}, 
					url : "http://askfastmarket1.appspot.com/products/broadcastnew/"+BID,
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
					document.getElementById("remail").value="";
					document.getElementById("bname").value="";
					document.getElementById("textarea").value="";
					document.getElementById("emailsbjt").value="";
					document.body.scrollTop = document.documentElement.scrollTop = 0;
					word_2Backup();
						},
					error: function (data){
						alert(data.responseJSON.status);
					}
				});
			
			}
		
		}
	
	
	
		// email to all selected contacts
	if(document.getElementById('bb_checkbox_7').checked&&document.getElementById('bb_checkbox_2').checked&&!document.getElementById('bb_checkbox_1').checked)
		{
			
			
			if(broadCast_sender_name=='')
				{
					alert("Subject name cannot be empty");
					if(document.getElementById("bb_checkbox_2").checked == false)
						{
							document.getElementById("bb_checkbox_2").checked = true;
						}
					document.getElementById("bb_emailsbjt").focus();
				}
		
		if(broadCast_sender_email=='')
			{
				alert("Sender email cannot be empty");
				if(document.getElementById("bb_checkbox_2").checked == false)
					{
						document.getElementById("checkbox_2").checked = true;
					}
				document.getElementById("bb_semail").focus();
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
			 
			 $("input:checkbox").each(function()
			 {
			 
			var $this = $(this); 
			if($this.is(":checked"))
			{
			
				checkboxes=$this.attr("id");
				name1=$this.attr("name");
				var d=checkboxes.split("_");
				if(name1=='chkbox'&&d[0]=='bbc')
				{
					var checkboxEmail=document.getElementById(checkboxes).value;
					if(checkboxEmail!='')
						{
							var c=checkboxEmail.split("|");
							counter1++;
							if(k==0)
								{
									s = '{"address": "'+c[0]+'"}';
									k=1;
								}
							else
								{
								 s = '{"address": "'+c[0]+'"},';
								}
							output = output.substr(0, position) + s + output.substr(position);
						}
				
				}
				
			}
			j++;
			
			});
			
			Valueofcheckbox=output;
			
			datasinfo = '{"broadcast": {"senderName":"'+broadCast_sender_email+'","message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","emailSubject":"'+broadCast_email_subject+'",'+Valueofcheckbox+'},"id": "'+BID+'","retryInfos": {},"ownerKey": "yasir"}';
			
				
		if(broadCast_name!=''&&broadCast_message!='')
			{
				$.ajax({	
				type: "PUT",
				contentType: "application/json",
				dataType: 'json',
				data: datasinfo,
				xhrFields: {
				withCredentials: true
				}, 
				url : "http://askfastmarket1.appspot.com/products/broadcastnew/"+BID,
				cache: false,
				crossDomain: true,
				xhrFields: {
				withCredentials: true
				},
				success: function (data) 
				{
					var jasonValue = JSON.stringify(data) ;
					BS();
					document.getElementById("semail").value="";
					document.getElementById("sid").value="";
					document.getElementById("rname").value="";
					document.getElementById("rmobile").value="";
					document.getElementById("rlline").value="";
					document.getElementById("remail").value="";
					document.getElementById("bname").value="";
					document.getElementById("textarea").value="";
					document.getElementById("emailsbjt").value="";
					document.body.scrollTop = document.documentElement.scrollTop = 0;
					$("input:checkbox").each(function()
					{
						var $this = $(this); 
						if($this.is(":checked"))
							{
								checkboxes=$this.attr("id");
								$('#'+checkboxes).prop('checked', false);
							}
					});
					word_2Backup();
				
				},
				error: function (data){
					alert(data.responseJSON.status);
				}
				});
			
			}
					
	}
	
	//email and sms both to all selected contacts
	if(document.getElementById('bb_checkbox_7').checked&&document.getElementById('bb_checkbox_2').checked&&document.getElementById('bb_checkbox_1').checked)
		{
			$('#img_loading1').show();
				$("#main").css({"opacity": "0.3"});
			//console.log("both sms and email");
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
			 var counter1=0;
			 var s='';
			 var output='';
			 var j=0;
			 var k=0;
			 var a ='"EMAIL": []}';
			 var checkboxes = new Array();
			 var position = 10;
			 output = a.substr(0, position) + s + a.substr(position);
			 
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
										s = '{"address": "'+c[0]+'"}';
										k=1;
									}
								else
									{
										s = '{"address": "'+c[0]+'"},';
									}
								output = output.substr(0, position) + s + output.substr(position);
							}
					
					}
				
			}
			j++;
			
			});
			
			Valueofcheckbox=output;
			
			if(senderId=='')
				{
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
				}
			
	
			 var counter1=0;
			 var s='';
			 var output='';
			 var j=0;
			 var k=0;
			 var a ='"addresses":{"SMS": []';
			 var checkboxes = new Array();
			 var position = 21;
			 output = a.substr(0, position) + s + a.substr(position);
			 
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
										s = '{"address": "'+c[1]+'"}';
										k=1;
									}
								else
									{
									 	s = '{"address": "'+c[1]+'"},';
									}
								output = output.substr(0, position) + s + output.substr(position);
							}
					
					}
				
			}
			j++;
			
			});
			
			var Valueofcheckboxmob=output;
			var broadCast_name1=broadCast_name+"_"+counter1;
			
			
			datasinfo = '{"broadcast": {"senderName":"'+senderId+'","message":"'+broadCast_message+'","emailSubject":"'+broadCast_email_subject+'","broadcastName":"'+broadCast_name+'",'+Valueofcheckboxmob+','+Valueofcheckbox+'},"id": "'+BID+'","retryInfos": {},"ownerKey": "yasir"}';
			
			
			if(broadCast_name!=''&&broadCast_message!='')
				{
					$.ajax({	
					type: "PUT",
					contentType: "application/json",
					dataType: 'json',
					data: datasinfo,
					xhrFields: {
					withCredentials: true
					}, 
					url : "http://askfastmarket1.appspot.com/products/broadcastnew/"+BID,
					cache: false,
					crossDomain: true,
					xhrFields: {
					withCredentials: true
					},
					success: function (data) 
					{
						var jasonValue = JSON.stringify(data) ;
						BS();
						document.getElementById("semail").value="";
						document.getElementById("sid").value="";
						document.getElementById("rname").value="";
						document.getElementById("rmobile").value="";
						document.getElementById("rlline").value="";
						document.getElementById("remail").value="";
						document.getElementById("bname").value="";
						document.getElementById("textarea").value="";
						document.getElementById("emailsbjt").value="";
						document.body.scrollTop = document.documentElement.scrollTop = 0;
						$("input:checkbox").each(function()
						{
							var $this = $(this); 
							if($this.is(":checked"))
								{
									checkboxes=$this.attr("id");
									$('#'+checkboxes).prop('checked', false);
								}
						});
						word_2Backup();
					
					},
					error: function (data){
						alert(data.responseJSON.status);
					}
					});
				
				}
		
		$('#img_loading1').hide();
			
			
			
		}
	
	
	
	//send broadcast to all contacts contained by all selected groups
	var output='';
	if (document.getElementById('checkbox_8').checked&&document.getElementById('checkbox_2').checked) 
		{
			//console.log("4");
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
													
													
													datasinfo = '{"senderName":"'+broadCast_sender_name+'","message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","emailSubject":"'+broadCast_name+'",'+Valueofcheckbox+'}';
													
																
													var id = "<?php  echo $session_id; ?>";		
												if(broadCast_name!=''&&broadCast_message!='')
												{
													$.ajax({	
													type: "POST",
													contentType: "application/json",
													dataType: 'json',
													data: datasinfo,
													xhrFields: {
													withCredentials: true
													},
													url : "http://askfastmarket1.appspot.com/products/broadcastnew",
													cache: false,
													crossDomain: true,
													xhrFields: {
													withCredentials: true
													},
													success: function (data) 
													{
														var jasonValue = JSON.stringify(data) ;
														BS();
														document.getElementById("semail").value="";
														document.getElementById("sid").value="";
														document.getElementById("rname").value="";
														document.getElementById("rmobile").value="";
														document.getElementById("rlline").value="";
														document.getElementById("remail").value="";
														document.getElementById("bname").value="";
														document.getElementById("textarea").value="";
														document.getElementById("emailsbjt").value="";
														document.body.scrollTop = document.documentElement.scrollTop = 0;
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
	
	

}


//onclick functions of checkboxes of broadcast edit design
function bb1(x)
{
	
	if($('#bb_checkbox_1'+x).is(":checked")){
		$('#bb_autoUpdate'+x).show();
	}
	
	if($('#bb_checkbox_1'+x).is(":not(:checked)")){
		$('#bb_autoUpdate'+x).hide();
	}
}

function bb12(x)
{
	
	if($('#bb_checkbox_twt'+x).is(":checked")){
				$('#bb_twt'+x).show();
			}
	if($('#bb_checkbox_twt'+x).is(":not(:checked)")){
		$('#bb_twt'+x).hide();
	}
}



function bb2(x)
{
		if($('#bb_checkbox_2'+x).is(":checked")){
			$('#bb_to2'+x).show();
			$('#bb_to3'+x).show();
		}
		
		if($('#bb_checkbox_2'+x).is(":not(:checked)")){
			$('#bb_to2'+x).hide();
			$('#bb_to3'+x).hide();
		}
}



function bb3(x)
{
	
			if($('#bb_checkbox_6'+x).is(":checked")){
				$('#bb_autoUpdate6'+x).show();
			} 
			
			if($('#bb_checkbox_6'+x).is(":not(:checked)")){
				$('#bb_autoUpdate6'+x).hide();
			}
}



function bb9()
{
		if($('#bb_checkbox_3').is(":checked")){
			$('#bb_autoUpdate3').show();
		} 
		
		if($('#bb_checkbox_3').is(":not(:checked)")){
			$('#bb_autoUpdate3').hide();
		}
}



function bb10(c)
{
		if($('#bb_checkbox_4'+c).is(":checked")){
		$('#bb_autoUpdate4'+c).show();
		} 
		
		if($('#bb_checkbox_4'+c).is(":not(:checked)")){
		$('#bb_autoUpdate4'+c).hide();
		}
}




function bb11()
{
	if($('#bb_checkbox_5').is(":checked")){
	$('#bb_autoUpdate5').show();
	} 
	
	if($('#bb_checkbox_5').is(":not(:checked)")){
	$('#bb_autoUpdate5').hide();
	}
}


function bb15(smsr,emailr,c,allContactKeys,x)
{
	console.log(x);
	var arrayAck = allContactKeys.split(',');
	var arrayallCk=[];
	for(var l1=0;l1<arrayAck.length;l1++)
		{
			arrayallCk.push(+arrayAck[l1]);
		}
	if(typeof smsr != "undefined")
		{
			var arrays = smsr.split(',');
		}
	if(typeof emailr != "undefined")
		{
			var arraye = emailr.split(',');
		}
		
	if($('#bb_checkbox_7').is(":checked")||$('#b_checkbox_7').is(":checked")){
		
		$('#main_icon').show();
		$("#bb_checkboxContacts"+c).html('');
		$("#b_checkboxContacts").html('');
		var count = 10;
		var count2 = 1;
		var phone = '';
		var email = '' ;
		var landLine = '' ;
		var found=-5;
		var checkTheseboxes = [];
		
		var div_id = 1;
		
		
		
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
				var counterLoop = 0;
						strHtml = '';
						arrlength=0;
						arrlength = data.length;
				
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
										// console.log("email");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='bbc_checkbox_"+count+""+c+"' type='checkbox' name='chkbox' value="+email+"|"+phone+"|"+contactKey+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/at1.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //phone
									if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid!=1&&LLineTagid==1&&specialtagid==1)
									 {
										 //console.log("phone");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='bbc_checkbox_"+count+""+c+"' type='checkbox' name='chkbox' value="+email+"|"+phone+"|"+contactKey+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/latter1.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //landline
									if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid==1&&LLineTagid!=1&&specialtagid==1)
									 {
										// console.log("landline");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='bbc_checkbox_"+count+""+c+"' type='checkbox' name='chkbox' value="+email+"|"+phone+"|"+contactKey+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/phone.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //twitter
									if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid==1&&LLineTagid==1&&specialtagid!=1)
									 {
										//console.log("twitter");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='bbc_checkbox_"+count+""+c+"' type='checkbox' name='chkbox' value="+email+"|"+phone+"|"+contactKey+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/twittericon.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //phone landline
									 if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid!=1&&LLineTagid!=1&&specialtagid==1)
									 {
										//console.log("phone landline");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='bbc_checkbox_"+count+""+c+"' type='checkbox' name='chkbox' value="+email+"|"+phone+"|"+contactKey+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/latter1.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //phone email
									  if(flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid!=1&&LLineTagid==1&&specialtagid==1)
									 {
										//console.log("phone email");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='bbc_checkbox_"+count+""+c+"' type='checkbox' name='chkbox' value="+email+"|"+phone+"|"+contactKey+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/latter1.png'><img alt='' src='images/at1.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //phone twitter
									  if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid!=1&&LLineTagid==1&&specialtagid!=1)
									 {
										// console.log("phone twitter");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='bbc_checkbox_"+count+""+c+"' type='checkbox' name='chkbox' value="+email+"|"+phone+"|"+contactKey+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/latter1.png'><img alt='' src='images/twittericon.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //landline email
									  if(flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid==1&&LLineTagid!=1&&specialtagid==1)
									 {
										// console.log("landline email");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='bbc_checkbox_"+count+""+c+"' type='checkbox' name='chkbox' value="+email+"|"+phone+"|"+contactKey+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/at1.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //landline twitter
									  if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid==1&&LLineTagid!=1&&specialtagid!=1)
									 {
										// console.log("landline twitter");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='bbc_checkbox_"+count+""+c+"' type='checkbox' name='chkbox' value="+email+"|"+phone+"|"+contactKey+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/twittericon.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									  //email twitter
									  if(flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid==1&&LLineTagid==1&&specialtagid!=1)
									 {
										// console.log("email twitter");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='bbc_checkbox_"+count+""+c+"' type='checkbox' name='chkbox' value="+email+"|"+phone+"|"+contactKey+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/at1.png'><img alt='' src='images/twittericon.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //mobile landline email
									  if(flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid!=1&&LLineTagid!=1&&specialtagid==1)
									 {
										// console.log("mobile landline email");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='bbc_checkbox_"+count+""+c+"' type='checkbox' name='chkbox' value="+email+"|"+phone+"|"+contactKey+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/latter1.png'><img alt='' src='images/at1.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //mobile email twitter or all
									  if((flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid!=1&&LLineTagid==1&&specialtagid!=1)||(flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid!=1&&LLineTagid!=1&&specialtagid!=1))
									 {
										// console.log("mobile email twitter or all");
										count++;
										div_id++;
									
										strHtml += "<div class='ah'><span><input id='bbc_checkbox_"+count+""+c+"' type='checkbox' name='chkbox' value="+email+"|"+phone+"|"+contactKey+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/latter1.png'><img alt='' src='images/at1.png'><img alt='' src='images/twittericon.png'></div></span><div class='clear'></div></div>"; 
									
									 }
							 
							if(x==1)
								{
									$("#bb_autoUpdate7"+c).show();
									$("#bb_checkboxContacts"+c).html(strHtml);
									$("#bb_checkboxContacts"+c).show();
								}
							if(x==2)
								{
									console.log("what");
									$("#b_checkboxContacts").show();
									$("#b_checkboxContacts").html(strHtml);
									$("#b_checkboxContacts").show();
								}

								
							$('#img_loading1').hide();
							$("#main").css({"opacity": ""});
							
							//console.log(arrayAck);
							//console.log(contactKey);
							//debugger
							if(arrayallCk.indexOf(contactKey)!== -1)
							{
								//console.log("should");
								checkTheseboxes.push(count);
							}
							
							
							if(typeof emailr != "undefined")
								{
							if(arraye.indexOf(email) !== -1)
							{
								//checkTheseboxes.push(count);
							}
								}
								
								if(typeof smsr != "undefined")
								{
							if(arrays.indexOf(phone) !== -1)
							{
								//checkTheseboxes.push(count);
							}
								}
							
					
				}
						if(arrlength==0)
							 {
							 //alert("hello");
							 	//$("#emptycontactlist").show();
							 	//$("#div_individuals").html("Your contact list is empty.");
								//$("#div_individuals").show();
							 }
							// console.log(checkTheseboxes);
						for(var a4=0;a4<checkTheseboxes.length;a4++)
						{
							document.getElementById("bbc_checkbox_"+checkTheseboxes[a4]+""+c+"").checked = true;
						}
			} ,
			error: function (data){
				alert(data.responseJSON.status);
			}
		});
		
	}
	//document.getElementById("bb_checkbox_7").checked = false;
	document.getElementById("flag").value = 'set' ;

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


//delete broadcast
function delbc(broadcastID,divId)
{
	  var x;
      var r=confirm("Do you want to Delete this Broadast");
	   if (r==true)
	   {
			x="You pressed OK!";
	   }
	   else
	   {
	   		return false;
	   }
		    $('#img_loading1').show();
			$("#main").css({"opacity": "0.3"});
		// ajax request to get contact's
			$.ajax({	
				type: "DELETE",
				contentType: "application/json",
				dataType: 'html', 
				xhrFields: {
				withCredentials: true
				},
				url : "http://askfastmarket1.appspot.com/products/broadcastnew/"+broadcastID,
				cache: false,
				crossDomain: true,
				xhrFields: {
				withCredentials: true
				},
				success: function (data) {
	
				// ajax request to get contact's
					$('#broadcast_'+divId).fadeOut(1000);
				
				$('#img_loading1').hide();
				$("#main").css({"opacity": ""});
				
				},
				error: function (data){
					alert(data.responseJSON.status);
				}
				
			});
	
}



function cloneBackup(broadcastId,div_id,dynamic_counter)
{
	AllDivs();
	$('#img_loading1').show();
	$("#main").css({"opacity": "0.3"});
	$("#word1992").show();
	var Bname = $('#broadcastName_'+div_id).val();
	var Bmessage = $('#message_'+div_id).val();
    var BsenderName = $('#senderName_'+div_id).val();
	var BemailSubject = $('#emailSubject_'+div_id).val();
	var BsmsRecipients = $('#smsRecipients_'+div_id).val();
	var BemailRecipients = $('#emailRecipients_'+div_id).val();
	var Valueofcheckboxem='';
	var Valueofcheckboxsm='';
	
	if (typeof BemailSubject != 'undefined') 
		{
			BemailSubject='subject';
		}
		
	if (typeof BsmsRecipients != 'undefined') 
		{
			var BsmsRecipientsArray = new Array();
			BsmsRecipientsArray = BsmsRecipients.split(",");
			var counter1=0;
			var s1='';
			var output1='';
			var j1=0;
			var k1=0;
			if (typeof BemailRecipients != 'undefined') 
				{
					var a1 ='"addresses":{"SMS": []';
				}
				else
				{
			var a1 ='"addresses":{"SMS": []}';
				}
			var checkboxes = new Array();
			var position1 = 21;
			output1 = a1.substr(0, position1) + s1 + a1.substr(position1);
			for(var sm=0;sm<BsmsRecipientsArray.length;sm++)
				{
					counter1++;
					if(k1==0)
						{
							s1 = '{"address": "'+BsmsRecipientsArray[sm]+'"}';
							k1=1;
						}
					else
						{
							s1 = '{"address": "'+BsmsRecipientsArray[sm]+'"},';
						}
					output1 = output1.substr(0, position1) + s1 + output1.substr(position1);
				}
				Valueofcheckboxsm=output1;
		}
		
	if (typeof BemailRecipients != 'undefined') 
		{
			var BemailRecipientsArray = new Array();
			BemailRecipientsArray = BemailRecipients.split(",");
			var counter1=0;
			var s='';
			var output='';
			var j=0;
			var k=0;
			if(Valueofcheckboxsm!='')
			{
				var a ='"EMAIL": []}}';
				var position = 10;
			}
			else
			{
			var a ='"addresses":{"EMAIL": []}';
			var position = 23;
			}
			var checkboxes = new Array();
			
			output = a.substr(0, position) + s + a.substr(position);
			for(var em=0;em<BemailRecipientsArray.length;em++)
				{
					counter1++;
					if(k==0)
						{
							s = '{"address": "'+BemailRecipientsArray[em]+'"}';
							k=1;
						}
					else
						{
							s = '{"address": "'+BemailRecipientsArray[em]+'"},';
						}
					output = output.substr(0, position) + s + output.substr(position);
				}
				Valueofcheckboxem=output;
		}	
	
	if(Bname=='undefined')
		{
			Bname='test';
		}
		

		//set JSON
		if(Valueofcheckboxem!=''&&Valueofcheckboxsm=='')
		{
			datasinfo = '{"senderName":"'+BsenderName+'","message":"'+Bmessage+'","broadcastName":"'+Bname+'","emailSubject":"'+BemailSubject+'",'+Valueofcheckboxem+'}';
		}
		
		
		if(Valueofcheckboxsm!=''&&Valueofcheckboxem=='')
		{
			
			datasinfo = '{"senderName":"'+BsenderName+'","message":"'+Bmessage+'","broadcastName":"'+Bname+'",'+Valueofcheckboxsm+',"adapterList": {"SMS": ""}}';
		}
		
		if(Valueofcheckboxem!=''&&Valueofcheckboxsm!='')
			{
				datasinfo = '{"senderName":"'+BsenderName+'","message":"'+Bmessage+'","emailSubject":"'+BemailSubject+'","broadcastName":"'+Bname+'",'+Valueofcheckboxsm+','+Valueofcheckboxem+'';
			}
		
	//alert(datasinfo);
	if(Bname!=''&&Bmessage!='')
		{
			$("#main").css({"opacity": "0.3"});
		
			$.ajax({	
			type: "POST",
			contentType: "application/json",
			dataType: 'json',
			data: datasinfo,
			xhrFields: {
			withCredentials: true
			}, 
			url : "http://askfastmarket1.appspot.com/products/broadcastnew",
			cache: false,
			crossDomain: true,
			xhrFields: {
			withCredentials: true
			},
			success: function (data) {
			var jasonValue = JSON.stringify(data) ;
			BCloned();
			document.getElementById("semail").value="";
			document.getElementById("sid").value="";
			document.getElementById("rname").value="";
			document.getElementById("rmobile").value="";
			document.getElementById("rlline").value="";
			document.getElementById("remail").value="";
			document.getElementById("bname").value="";

			document.getElementById("textarea").value="";
			document.getElementById("emailsbjt").value="";
			document.body.scrollTop = document.documentElement.scrollTop = 0;
			word_245Backup(Bname,Bmessage,BsenderName,BemailSubject);
			},
			error: function (data){
				alert(data.responseJSON.status);
			}
			});
			
		}
	
}


//search broadcast
function search_broadcast()
{
	var search_token1=document.getElementById("search_broadcast_field").value;
	if(search_token1=='')
		{
			loadingBroadcasts();
		}
	else
		{
			AllDivs();
			$('#broadcast_search_enter').val('set');
			$('#contact_search_enter').val('');
			$('#broadcst_search_enter').val('');
			$('#background_load').hide(); 
			$("#word1992").show();
			
			$('#word2').val('');
			$('#word992').val('');
			document.getElementById("word2").innerHTML = "";
			document.getElementById("word992").innerHTML = "";
			$('#img_loading1').show();
			$("#main").css({"opacity": "0.3"});
				
			$.ajax({	
					type: "GET",
					contentType: "application/json",
					dataType: 'html', 
					xhrFields: {
					withCredentials: true
					},
					url : "http://askfastmarket1.appspot.com/products/broadcastnew/prefixsearch/"+search_token1,
					cache: false,
		
					success: function (obj) {
										data = JSON.parse(obj);
										//debugger
											//if no match wass found
										if(data.length==0)
											{
												AllDivs();
												$('#word1992').show();
												$('#word2').html('');
												$('#Broadcast_Search_Results').show();
												NoMatch();
												document.getElementById("search_broadcast_field").value='';
												
												var flname='Empty';
												var fstname='Empty';
												var lstname='Empty';
												var email='Empty';
												var phone='Empty';
												var landLine='Empty';
												var count = 1;
												var message="<span id=contact_"+count+" ><div class='football' style='padding: 18px 0px;'> <div class='football-left' style='width:100%; text-align:center !important;'><div class='footbal' style='width:100%;'><h6 id='heading_edit_"+count+"'>"+flname+"</h6></div></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_cnt_"+count+" ></span></div></span>";
												$("#Broadcast_Search_Results_div").html(message);
												$("#Broadcast_Search_Results_div").show();
												
												
											}
											//if match was found
										else
											{
												$("#Broadcast_Search_Results_div").hide();
												$('#Broadcast_Search_Results').show();
												loadBroadcast(data);
												document.getElementById("search_broadcast_field").value='';
											}
												},
					error: function (data){
						alert(data.responseJSON.status);
					}
			});
		}
}

$(document).ready(function(){
	//document.cookie="username=set";
	$(document).keypress(function(e) {
		if(e.which == 13&&document.getElementById("broadcast_search_enter").value=='set') {
		search_broadcast();
    }
	});
});

