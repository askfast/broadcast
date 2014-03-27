<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<script type="text/javascript" src="js/NewBroadcastScript1.js"></script>
<script type="text/javascript" src="js/NewBroadcastScript2.js"></script>
<script type="text/javascript" src="js/NewBroadcastScript3.js"></script>
<script type="text/javascript">
function broadcastFunc(datasinfo,x)
{
	
	var id = "<?php   echo $session_id; ?>";
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
					beforeSend : function(xhr) {          
					xhr.setRequestHeader("X-SESSION_ID" , id)
				  	},
					url : composedurl,
					cache: false,
					crossDomain: true,
					xhrFields: {
					withCredentials: true
					},
					success: function (data) {
					var jasonValue = JSON.stringify(data) ;
					if(x==1)
						{
							BS();
						}
					if(x==0)
						{
							MB();
						}
					document.getElementById("semail").value="";
					document.getElementById("sid").value="";
					document.getElementById("rname").value="";
					document.getElementById("rmobile").value="";
					document.getElementById("rlline").value="";
					document.getElementById("meml").value="";
					document.getElementById("bname").value="";
					document.getElementById("textarea").value="";
					document.getElementById("emailsbjt").value="";
					document.getElementById("mtwt").value="";
					document.body.scrollTop = document.documentElement.scrollTop = 0;
					$('#background_load').hide();
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
</script>
</head>

<body>
<input type="hidden" id="takeOneAction" value="" />
<input type="hidden" id="afterAuth" value="" />
<input type="hidden" id="runafterSavedcnt" value="" />
<div id="word" class="container active tab-pane">
      <form action="" method="post">
	  
      		<div id="hideGuide" style="display:none;" class="new-box-broadcast">
               <div class="new-box-broadcast-left">
                <div class="new-box-broadcast-dot">
                 <img src="images/new-box-broadcast-dot.png" alt="">
                 <img src="images/new-box-broadcast-dot1.png" alt="">
                 <img src="images/new-box-broadcast-dot1.png" alt="">
                </div>
                <div class="new-box-broadcast-logo">
                 <img src="images/new-box-broadcast-logo.png" alt="">
                </div>
               <div class="clear"></div>
               </div>
               
                <div class="new-box-broadcast-right-dontshow">
                 <a href="javascript:" onClick="hideGuide();">do not show it again</a>
                </div>
               <div class="new-box-broadcast-right">
                <div class="new-box-broadcast-right-nav">
                 <p><a href="#"><img src="images/new-box-broadcast-right-dot.png" alt=""></a>Give a name to your broadcast</p>
                 <p><a href="#"><img src="images/new-box-broadcast-right-dot.png" alt=""></a>Select your media types</p>
                 <p><a href="#"><img src="images/new-box-broadcast-right-dot.png" alt=""></a>Write your message</p>
                 <p><a href="#"><img src="images/new-box-broadcast-right-dot.png" alt=""></a>Select recepients</p>
                 <p class="new-box-broadcast-right-border"><a href="#"><img src="images/new-box-broadcast-right-dot.png" alt=""></a>Analyze results </p>
                 <div class="maindiv">
               	<div class="nextbtn1">
               <a href="javascript:" onClick="nextScreen(1);">Next ></a>
               </div>
               <div class="clear"></div>
               </div>
                 
                </div>
               </div>
              <div class="clear"></div>
      		</div>
            
            
            <div id="hideGuide1" style="display:none;" class="new-box-broadcast">
							<div class="new-box-broadcast-left">
								<div class="new-box-broadcast-dot">
									<img src="images/new-box-broadcast-dot.png" alt="">
									<img src="images/new-box-broadcast-dot.png" alt="">
									<img src="images/new-box-broadcast-dot1.png" alt="">
								</div>
								<div class="new-box-broadcast-spring">
									<img src="images/spring.png" alt="">
								</div>
							<div class="clear"></div>
							</div>
                            
								<div class="new-box-broadcast-right-dontshow1">
									<a href="javascript:" onClick="hideGuide();">do not show it again</a>
								</div>
                            <div class="new-box-broadcast-right">
								<div class="new-box-broadcast-right-nav">
									<p><a href="#"><img src="images/new-box-broadcast-right-dot.png" alt=""></a><span>For your campaigns,maybe for your birthday 
party.</span></p>
									<p><a href="#"><img src="images/new-box-broadcast-right-dot.png" alt=""></a><span>Broadcast will increase the coverage rate 
of your message. </span></p>
								<div class="clear"></div>
                                <div class="maindiv">
                                <div class="nextbtn">
                 					<a href="javascript:" onClick="nextScreen(2);">Next ></a>
                            	</div>
                                <div class="backbtn">
                                <a href="javascript:" onClick="prevScreen(1)"> < Back</a>
								</div>
                                <div class="clear"></div>
                                </div>
								</div>
							</div>
						<div class="clear"></div>
			</div>
            
            
            
            <div id="hideGuide2" style="display:none;" class="new-box-broadcast">
							<div class="new-box-broadcast-left">
								<div class="new-box-broadcast-dot">
									<img src="images/new-box-broadcast-dot.png" alt="">
									<img src="images/new-box-broadcast-dot.png" alt="">
									<img src="images/new-box-broadcast-dot.png" alt="">
								</div>
								<div class="new-box-broadcast-030">
									<img src="images/030.png" alt="">
								</div>
							<div class="clear"></div>
							</div>
                            
								<div class="new-box-broadcast-right-dontshow2">
									<a href="javascript:" onClick="hideGuide();">do not show it again</a>
								</div>
                            <div class="new-box-broadcast-right">
								<div class="new-box-broadcast-right-nav">
									<p><a href="#"><img src="images/new-box-broadcast-right-dot.png" alt=""></a><span>You can use your own contactbook from both 
Android and Iphone</span></p>
									<p><a href="#"><img src="images/new-box-broadcast-right-dot.png" alt=""></a><span>Creating groups for your broadcast</span></p>
								<div class="clear"></div>
                                <div class="maindiv">
                                <div class="backbtn1">
                            	<a href="javascript:" onClick="prevScreen(2)"> < Back</a>
                            	</div>
                                <div class="clear"></div>
                                </div>
								
								</div>
							</div>
						<div class="clear"></div>
			</div>

	  
        <!--================ row_1_start ===============-->
        <div class="row">
			
          <div class="col-md-12">
            <div class="starter-template">
              <?php /*?><h1>Hi, <?php echo $session_user; ?> </h1><?php */?>
              <h1>1 BROADCAST NAME</h1>
              <p class="lead">Please give a unique name to your new broadcast.</p>
              <!--================ Alert Starts ===============-->
              <div class="alert vanish alert-warning alert-dismissable">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>

                Valid name </div>
              <div class="alert vanish alert-success alert-dismissable">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                Invalid name </div>
              <!--================ Alert Ends ===============-->
              <input type="text" id="bname" name="bname" placeholder="ASK-Fast New discount offer"/>
            </div>
          </div>
        </div>
        <!--================ row_1_End ===============-->
        <div class="row">
          <div class="col-md-12">
            <div class="starter-template">
              <div class="media">
                <h1>2 MEDIA TYPE</h1>
                <p class="lead">Please choose media type that you would like to use.</p>
                <div class="form_main">
                  <div class="sms_bg">
                    <div class="sms_text">
                      <input id="checkbox_1" class="checkbox" type="checkbox" />
                      <span>SMS</span>
                      <div class="clear"></div>
                    </div>
                    <div id="autoUpdate" style="display:none;" class="sender_id">
                      <!--================ Alert Starts ===============-->
                      <div class="alert vanish alert-warning alert-dismissable" style="margin-left:10px;text-align:left;">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                        The number that you entered is not verified please verify the number before using </div>
                      <div class="alert vanish alert-warning alert-dismissable" style="margin-left:10px;text-align:left;">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                        Please use letters </div>
                      <!--================ Alert Ends ===============-->
                      <label>Sender ID:</label>
                      <input class="ask_fast" type="text" id="sid" name="sid" placeholder="ASK-Fast"/>
                    </div>
                    <div class="clear"></div>
                  </div>
                  <div class="email">
                    <div class="sms_bg">
                      <div class="email_text">
                        <input id="checkbox_2" class="checkbox" type="checkbox" />
                        <span>E-mail</span> </div>
                      <div class="sender_id to2" style="display:none;">
                        <!--================ Alert Starts ===============-->
                        <div class="alert vanish alert-warning alert-dismissable" style="margin-left:10px;text-align:left;">
                          <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                          Please enter a valid e-mail address </div>
                        <!--================ Alert Ends ===============-->
                        <label>Sender Email:</label>
                        <input class="ask_fast" type="text" id="semail" name="semail"  placeholder="info@ask-fast.com"/>
                      </div>
                      <div class="subject_id to2" style="display:none;">
                        <label>Subject name:</label>
                        <input class="ask_fast" id="emailsbjt" name="emailsbjt" type="text" placeholder="Discount offer"/>
                      </div>
                      <div class="clear"></div>
                    </div>
                    <div class="clear"></div>
                  </div>
                  <div class="email">
                    <div class="sms_bg">
                      <div class="email_text">
                        <input id="checkbox_6" class="checkbox" type="checkbox" />
                        <span>Voice Broadcast</span> </div>
                      <div class="subject_idght" id="autoUpdate6" style="display:none;">
                        <label>Caller ID:</label>
                        <div class="bool-slider true">
    						<div class="inset">
        					<div class="control"></div>
    						</div>
						</div>
                        <div class="clearfix"></div>
 
                        
						<div class="settext">Receivers are able to see the phone numbers of Broadcast. By turning this<br/>off, receivers are not able to see the phone numbers of your broadcast
                        <div class="clear"></div>
                        </div>
 <div class="upload_text">                       
 <div class="aud_sel">       
Audio Selection:
</div>       
<div class="tt1232">
            <label id="lcid1" class="label_radio" for="radio-01"><input name="sample-radio" class="label_radio1" id="radio-01" value="1" type="radio" checked /> Text  to speech</label>
            <label id="lcid2" class="label_radio" for="radio-02"><input name="sample-radio" class="label_radio2" id="radio-02" value="2" type="radio" /> Upload a file</label>
</div>
<div class="clear"></div>                              
</div>                        
                        
                      </div>
                      <div class="clear"></div>
                    </div>
                    <div class="clear"></div>
                  </div>
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  <div class="email">
                  <div class="sms_bg">
                    <div class="sms_text">
                      <input id="checkbox_twt" class="checkbox" type="checkbox" />
                      <span>Twitter</span>
                      <div class="clear"></div>
                    </div>
                    <div id="twt" style="display:none;">
                    <div id="beforeAuth" class="twttext">You do not have any twitter account connected to your broadcast account.
                        <div class="clear"></div></div>
                    <div id="afterTAuth" class="twttext" style="display:none">
                        <div class="clear"></div></div>
                        <div id="twt1" class="upload11_file11">
                         <a href="javascript:" onClick="authTwitt();">Authorize Broadcast</a>
                     </div>
                     <div class="upload11_file11" id="twt22" style="display:none">
                         <a href="javascript:" onClick="authTwitt111();">Revoke access</a>
                     </div>
                        
                    </div>
                    <div class="clear"></div>
                  </div>
                  </div>
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  <div class="message">
                    <h1>3 MESSAGE</h1>
                  </div>
                  
                  
                  <div class="email" id="voice" style="display:none;">
                    <div class="sms_bg">
                    
                     <div class="language" id="voiceLanguageDropdown" style="display:none;">
                         <span>Language:</span>
                       
                         <select class="language1" id="ldId">
                         <option value="nl-nl">Dutch</option>
                         <option value="ca-es">Catalan</option>
                         <option value="zh-cn">Chinese (China)</option>
                         <option value="zh-hk">Chinese (Hong Kong)</option>
                         <option value="zh-tw">Chinese (Taiwan)</option>
                         <option value="da-dk">Danish</option>
                         <option value="en-au">English (Australia)</option>
                         <option value="en-ca">English (Canada)</option>
                         <option value="en-gb">English (Great Britain)</option>
                         <option value="en-in">English (India)</option>
                         <option value="en-us">English (United States)</option>
                         <option value="fi-fi">Finnish</option>
                         <option value="fr-ca">French (Canada)</option>
                         <option value="fr-fr">French (France)</option>
                         <option value="de-de">German</option>
                         <option value="it-it">Italian</option>
                         <option value="ja-jp">Japanese</option>
                         <option value="ko-kr">Korean</option>
                         <option value="nb-no">Norwegian</option>
                         <option value="pl-pl">Polish</option>
                         <option value="pt-br">Portuguese (Brazil)</option>
                         <option value="pt-pt">Portuguese (Portugal)</option>
                         <option value="ru-ru">Russian</option>
                         <option value="es-mx">Spanish (Mexico)</option>
                         <option value="es-es">Spanish (Spain)</option>
                         <option value="sv-se">Swedish (Sweden)</option>
                         </select>
                     </div>  
      
                     <div class="upload1_file1" id="voiceuploadbutton" style="display:none;">
                         <a href="#">upload</a>
                     </div>
                      
                    <div class="clear"></div>
                    </div>
                    <div class="clear"></div>
                  </div>
                  
                  
                  <div class="text_aria_main" style="padding-top:22px;">
                    <!--================ Alert Starts ===============-->
                    <div class="alert vanish alert-warning alert-dismissable" style="margin-left:10px;text-align:left;">
                      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                      You reached second SMS which will increase the cost of broadcasting. </div>
                    <!--================ Alert Ends ===============-->
                    <span class="scnmes"></span>
                    <textarea maxlength="450" id="textarea" name="textarea" placeholder="50 percentage discount is waiting for your business."></textarea>
                    <label id="textarea_feedback"></label>
                  </div>
                  <div class="recep">
                    <h1>4 RECEPIENTS</h1>
                  </div>
                  <div class="from_file">
                    <div class="from_text">
                      <input id="checkbox_3" type="checkbox" name="" />
                      From a file <span>( download sample .csv file )</span></div>
                    <div class="from_text">
                      <input id="checkbox_4" type="checkbox" name="" />
                      Contact book</div>
                      <input type="hidden" id="contact_search_enter" value="">
                      <input type="hidden" id="broadcast_search_enter" value="">
                      <input type="hidden" id="flag" value="">
                     
                      
                    <div class="from_text">
                      <input id="checkbox_5" type="checkbox" name="" />
                      Manual</div>
                  </div>
                  <div class="from_file_2" id="autoUpdate3" style="display:none;padding-top:22px;">
                    <!--================ Alert Starts ===============-->
                    <div class="alert vanish alert-warning alert-dismissable" style="margin-left:10px;text-align:left;margin-right:10px;">
                      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                      From a file - Invalid file </div>
                    <div class="alert vanish alert-warning alert-dismissable" style="margin-left:10px;text-align:left;margin-right:10px;">
                      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                      Sorry there is something wrong with server. Please try it again later. </div>
                    <!--================ Alert Ends ===============-->
                    <input type="submit" class="ax_button" value="Upload from PC" id="u79">
                    <input type="submit" class="ax_button" value="Upload from PC" id="u79">
                    <div class="uploading">uploading feedback (65)</div>
                  </div>
                  <div class="from_file_3" id="autoUpdate5"  style="display:none;" >
                  	<div>
                    	<div class="al_left">
                    		<h1>Manual entry</h1>
                        </div>
                        <div class="al_right">
                            <input id="saveCntNewB" type="checkbox" name="" />
                            <p>Add contact to your contactbook.</p>
                        </div>
                    <div class="clear"></div>
                    </div>
                    <!--================ Alert Starts ===============-->
                    <div class="alert vanish alert-warning alert-dismissable" style="margin-left:10px;text-align:left;margin-right:10px;margin-top:13px;">
                      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                      There are some fields that we could not recognize. </div>
                    <div class="alert vanish alert-warning alert-dismissable" style="margin-left:10px;text-align:left;margin-right:10px;">
                      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                      Please enter a valid phone number. </div>
                    <div class="alert vanish alert-warning alert-dismissable" style="margin-left:10px;text-align:left;margin-right:10px;">
                      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                      Please enter a e-mail address </div>
                    <!--================ Alert Ends ===============-->
                    <div class="name_entry">
                      <div class="entry">
                        <label>First Name</label>
                        <input type="text"  id="rname" name="rname" value="" maxlength="20" onkeypress="return isCharKey(event)">
                        <div class="clear"></div>
                      </div>
                      <div class="entry">
                        <label>Last Name</label>
                        <input type="text" id="rmobile" name="rmobile" value="" maxlength="20" onkeypress="return isCharKey(event)">
                        <div class="clear"></div>
                      </div>
                      <div class="entry">
                        <label>Mobile Number</label>
                        <input type="tel"  id="rlline" name="rlline" value="" maxlength="20" onkeypress="return isNumberKey(event)">
                        <div class="clear"></div>
                      </div>
                      <div class="entry">
                        <label>Landline Number</label>
                        <input type="email"  id="mllnm" name="remail" value="" maxlength="20" onkeypress="return isNumberKey(event)">
                        <div class="clear"></div>
                      </div>
                      <div class="entry">
                        <label>E-mail contact</label>
                        <input type="email"  id="meml" name="remail" value="" maxlength="25">
                        <div class="clear"></div>
                      </div>
                      <div class="entry">
                        <label>Twitter username</label>
                        <input type="email"  id="mtwt" name="remail" value="" maxlength="20">
                        <div class="clear"></div>
                      </div>
                    </div>
                    <div class="the_added">
                     <!-- <p> The added contact will be saved to your contact book. You can use it, other products of ASK-Fast without any action. </p>-->
                     
                      <!--<input type="submit" value="Upload from PC" class="add_contact">-->
                    </div>
                    <div class="clear"></div>
                  </div>
                  <div class="selected" id="autoUpdate4" style="display:none;padding-top:22px;">
                    <!--================ Alert Starts ===============-->
                    <div class="alert vanish alert-warning alert-dismissable" style="margin-left:10px;text-align:left;">
                      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                      Empty Contact book - sorry you do not have any contact in your contact book, you can upload your contacts from gmail. Please click the link. </div>
                    <!--================ Alert Ends ===============-->
                    <div class="group">
                      <input id="checkbox_7" type="checkbox" name="" />
                      Select an individual </div>
                    <div class="group">
                      <input id="checkbox_8" type="checkbox" name="" />
                      Select a group </div>
                    <div class="selected1" id="autoUpdate7" style="display:none;">
                      <div id="countcount"> <h2>Selected contacts (0)</h2></div>
					  <div class="group">
                      <input id="prnt" type="checkbox" name="" onClick="selectall(this)" />
                      Select all contacts </div>
                      <div id="checkboxContacts"> 
                      </div>
                    </div>
                    <div class="selected1" id="autoUpdate8" style="display:none;">
                      <div id="countcount1"> <h2>Selected Groups (0)</h2></div>
					  <div class="group">
                      <input id="prnt1" type="checkbox" name="" onClick="selectall1(this)" />
                      Select all groups </div>
                      <div id="checkboxGroups"> 
                      </div>
                    </div>
                  </div>
                  <div class="save_broadcast">
                    <div class="save_button">
                      <input type="button" class="sbmit123" value="Save Broadcast" onClick="AddBroadcast(1)">
                    </div>
                  </div>
                </div>
                <div class="test_broad">
                  <div class="save_button_2">
                    <input type="button" class="sbmit123" value="Run Broadcast" onClick="AddBroadcast(0)">
                  </div>
                  <!--================ Alert Starts ===============-->
                  <div class="alert vanish  alert-success alert-dismissable" style="margin-left:10px;text-align:left;margin-top:15px;">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    Broadcast is saved. </div>
                  <div class="alert vanish alert-warning alert-dismissable" style="margin-left:10px;text-align:left;">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    Broadcast could not be saved. </div>
                  <div class="alert vanish alert-info alert-dismissable" style="margin-left:10px;text-align:left;">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    First test is free. </div>
                  <div class="alert vanish alert-info alert-dismissable" style="margin-left:10px;text-align:left;">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    I agree that ASK-Fast is only provider of communication and I am responsible for my broadcast. </div>
                  <!--================ Alert Ends ===============-->
                  <div class="clear"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
</body>
</html>