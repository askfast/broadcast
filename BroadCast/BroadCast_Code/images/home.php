<?php 

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: *');

	if(!isset($_SESSION['uname'])){
		header("location:index.php");
	}
	else {
		$session_user = $_SESSION['uname'];
		$session_id = $_SESSION['userid'];
	}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="">
<meta name="author" content="">
<link rel="shortcut icon" href="../../assets/ico/favicon.png">
<link rel="stylesheet" href="css/general.css?v=1.2" type="text/css" media="screen" />




		
		
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>



<script type="text/javascript" src="js/lightbox.js?v=1.2"></script>


<script type="text/javascript">




function isNumberKey(evt)
{
  var charCode = (evt.which) ? evt.which : event.keyCode;
  if (charCode != 46 && charCode > 31 
	&& (charCode < 48 || charCode > 57))
	 return false;

  return true;
}

function isCharKey(evt)
{
  var charCode = (evt.which) ? evt.which : event.keyCode;
  
  if (charCode > 57 || charCode == 8)
	{
	  return true;
	}
	else
	{
	return false;
	}
}










$(document).ready(function(){


$('#checkbox_7').click(function () {
if(this.checked)
{
checkboxContacts();
}
//alert("hello");

});

});
 
 
<?php
if(isset($_SESSION['accessToken']))
{
	$token1=$_SESSION['accessToken'];?>
	Gmail_Contacts_Info("<?php echo $token1; ?>");
	<?php
}
?>
///////////////////////////

function BS()
{
		$('#broadcastsaved').show();
		$("#main").css({"opacity": "0.3"});
setTimeout(function(){$('#broadcastsaved').hide();$("#main").css({"opacity": ""});},3000);
//setTimeout(function(){alert("Hello")},3000);
}

function AddBroadcast()
{	
	var check=0;
	
	var senderId=document.getElementById("sid").value;
	var receiver_name=document.getElementById("rname").value;
	var receiver_mobile=document.getElementById("rmobile").value;
	var receiver_landLine=document.getElementById("rlline").value;
	var receiver_email=document.getElementById("remail").value;
	var broadCast_name=document.getElementById("bname").value;
	var broadCast_message=document.getElementById("textarea").value;
	var broadCast_sender_email=document.getElementById("semail").value;
	var broadCast_sender_name=document.getElementById("emailsbjt").value;
	//alert(broadCast_sender_name);alert(broadCast_sender_email);
	var Valueofcheckbox='';
	if (document.getElementById('checkbox_2').checked) 
		{
            Valueofcheckbox='"addresses":{"EMAIL": [{"address": "'+receiver_email+'"}]}';
        }
 	 if (document.getElementById('checkbox_1').checked) 
		{
			Valueofcheckbox='"adapterList": {"CALL": "'+senderId+'"}';
		}
	if(document.getElementById('checkbox_7').checked)
		{
			//alert("hello");
			 // checkboxes = document.getElementsByName('chkbox');
			 var checkboxes = new Array();
			 
			 $("input:checkbox").each(function()
			 {
			var $this = $(this); 
			if($this.is(":checked"))
			{
				checkboxes=$this.attr("id");
				c=checkboxes.split("_");
				//alert(c[1]);
				if(c[1]>=11)
				{
				var checkboxEmail=document.getElementById(checkboxes).value;
					if(checkboxEmail!='')
					{
						Valueofcheckbox='"addresses":{"EMAIL": [{"address": "'+checkboxEmail+'"}]}';
						var id = "<?php echo $session_id; ?>";
						datasinfo = '{"senderName":"'+broadCast_sender_name+'","message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","emailSubject":"'+broadCast_sender_email+'",'+Valueofcheckbox+'}';
						
						
		if(broadCast_name!=''&&broadCast_message!='')
		{
			//alert(datasinfo);
			$.ajax({	
			type: "POST",
			contentType: "application/json",
			dataType: 'json',
			//data: {datasinfo:datasinfo},
			data: datasinfo,
			beforeSend : function(xhr) {          
				xhr.setRequestHeader("X-SESSION_ID" , id)
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
				//document.getElementById("clrid").value="";
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
			
			}
			});
		
		}
					
					}
				//alert(checkboxEmail);
				//console.log($this.attr("id"));
				}
				
			}
		});
		var check=1;
	}
	//alert(checkboxes.length);
	//debugger
	if(check!=1)
	{
	var id = "<?php echo $session_id; ?>";
	

	datasinfo = '{"senderName":"'+broadCast_sender_name+'","message":"'+broadCast_message+'","broadcastName":"'+broadCast_name+'","emailSubject":"'+broadCast_sender_email+'",'+Valueofcheckbox+'}';
	
//alert(datasinfo);
//	debugger

		if(broadCast_name!=''&&broadCast_message!='')
		{
		
		$.ajax({	
			type: "POST",
			contentType: "application/json",
			dataType: 'json',
			//data: {datasinfo:datasinfo},
			data: datasinfo,
			beforeSend : function(xhr) {          
				xhr.setRequestHeader("X-SESSION_ID" , id)
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
			//document.getElementById("clrid").value="";
			document.body.scrollTop = document.documentElement.scrollTop = 0;
			
			//alert(jasonValue);
				}
		});
		
		}
		}
}


function GoogleLogin()
{
	$.ajax({
		type: "POST",
		url: "main_sik.php",
		success: function(msg){
		//alert(msg);
		//debugger;
			$('#google_login').append(msg);
			$('#google_login a').attr('id','google_login_click');
		window.location.href=document.getElementById('google_login_click');
			
		}
		
	});
}

function Gmail_Contacts_Info(a){
	
	var name = '';
	var email = '';
	var phone = 0;
	var ldnum = 0;
	var id = "<?php echo $session_id; ?>";
	
	$('#img_loading1').show();
	$("#main").css({"opacity": "0.3"});
	
	$.ajax({ 
		type: "POST",
		url: "contacts_sik.php",
		data: {'token':a},

		success: function(msg){
			$('#word').hide();
			$('#word2').hide();
			$('#word5').show();
			$('#main_icon').show();
			
			$('#img_loading1').show();
			$("#main").css({"opacity": "0.3"});
			
			var data2 = JSON.parse(msg);
			for (var i=0; i<data2.length; i++){
				fname = data2[i].name.split(' ')[0];
				lname = data2[i].name.split(' ')[1];
				email = data2[i].email;
				phone = data2[i].phone;		
				if (fname==''){fname='empty';}
				if (email==''){email='empty';}
				if (lname==''){lname='empty';}
				if (lname=='undefined'){lname='empty';}
				if (fname=='n'){fname='empty';}
				var rndid = Math.floor(Math.random() * (9999 - 100 + 1)) + 1+i;
				 
	 			datas = '{"contactInfoRefs":['+rndid+'],"id":'+rndid+',"lastAvailableTime":"1380909873252","ownerKey":"yasir"}';
	  datasinfo = '{"id":'+rndid+',"contactInfoTag":"Email","contactInfo":"'+email+'","firstName":"'+fname+'","lastName":"'+lname+'"}';   
		
		
	//	datasinfo = '{"id":'+rndid+',"contactInfoTag": [{ "contactInfoTag":"Email","contactInfoTag":"Phone","contactInfoTag":"Mobile"}],"contactInfo": [{ "Email":'+email+',"Phone":'+phone+',"Mobile":'+ldnum+'}],"firstName":"'+fname+'","lastName":"'+lname+'"}';   
				
	 			
				var strhtml = "<span id=contact_"+rndid+" ><div class='football'> <div class='football-left'><div class='footbal'><h6 id='heading_edit_"+rndid+"'>"+fname+" "+lname+"</h6><p><i>Individual</i></p></div><div class='three-img'><img src='images/phone.png' alt=''><img src='images/latter1.png' alt=''><img src='images/at1.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+rndid+"' onclick='editcontact("+msg.id+","+rndid+");' style='display:none;'><input class='edit1' id='edit_edit_"+rndid+"'  value='' type='button'  onclick='updatecnt("+msg.id+","+rndid+")'></div><input type='hidden' id='fname_"+rndid+"' value='"+fname+"'><input type='hidden' id='lname_"+rndid+"' value='"+lname+"'><input type='hidden' id='email_"+rndid+"' value='"+email+"'><input type='hidden' id='phone_"+rndid+"' value='"+mob+"'><input type='hidden' id='landLine_"+rndid+"' value='"+ldnum+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_"+rndid+"' onclick='hide_divContact("+rndid+");' style='display:none;'><a href='javascript:' onclick='delcnt("+msg.id+","+rndid+")' id='Cdel_"+rndid+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_"+rndid+" ></span></div></span>";
					
					$('#div_individuals').after(strhtml);
				$('#img_loading1').show();
				$("#main").css({"opacity": "0.3"});
				$.ajax({	
					type: "POST",
					contentType: "application/json",
					dataType: 'json', 
					beforeSend : function(xhr) {          
					xhr.setRequestHeader("X-SESSION_ID" , id)
		 		},
					data: datas,
					url : "http://askfastmarket1.appspot.com/accounts/contacts",
					crossDomain: true,
					xhrFields: {
					withCredentials: true
					},
					
					success: function (data) {
					$('#fr_name').val('');
					$('#srname').val('');
					$('#mob').val('');
					$('#ldnum').val('');
					$('#email_man').val('');
					
					
					$('#img_loading1').hide();
					$("#main").css({"opacity": ""});
					$('#popupContact').hide(); 
					$('#background_load').hide(); 
				}
			});
				$('#div_individuals').after(strhtml);
				$('#img_loading1').show();
				$.ajax({	
				type: "POST",
				contentType: "application/json",
				dataType: 'json',
				data: datasinfo,
				
				beforeSend : function(xhr) {          
					xhr.setRequestHeader("X-SESSION_ID" , id)
				 }, 
				url : "http://askfastmarket1.appspot.com/accounts/contactinfos?strict=true",
				crossDomain: true,
				xhrFields: {
				withCredentials: true
				},
				success: function (data) {
					$('#img_loading1').hide();
					$("#main").css({"opacity": ""});
				}
			});
				
			}	
		
			
		 },
	});
}


function manual_EntryIndividual(){
	centerPopup();
	loadPopup();
	
		var zoomListeners = [];
		
		(function(){
		var lastWidth = 0;
			function pollZoomFireEvent() {
		var widthNow = jQuery(window).width();
		if (lastWidth == widthNow) return;
		lastWidth = widthNow;
		var height = $( window ).height();
		height=height/2;
		var width = $( window ).width();
		width=width/2;
		var popupContactWidth=	$('#popupContact3').width();
		popupContactWidth=popupContactWidth/2;
		var popupContactheight=	$('#popupContact3').height();
		popupContactheight=popupContactheight/2;
		var finalWidth=width-popupContactWidth;
		var finalheight=height-popupContactheight;
		
		$('#background_load').show();
		$('#popupContact').show();
		$('#popupContact2').hide();
		$('#popupContact').css('position', 'fixed');
		$('#popupContact').css('top', finalheight);
		$('#popupContact').css('left', finalWidth+110);
		for (i = zoomListeners.length - 1; i >= 0; --i) {
		zoomListeners[i]();
		}
		}
		setInterval(pollZoomFireEvent, 100);
		})();
	
	
}

function manual_EntryGroup(){
	centerPopup();
	loadPopup2();
	var zoomListeners = [];
		
		(function(){
		var lastWidth = 0;
			function pollZoomFireEvent() {
		var widthNow = jQuery(window).width();
		if (lastWidth == widthNow) return;
		lastWidth = widthNow;
		var height = $( window ).height();
		height=height/2;
		var width = $( window ).width();
		width=width/2;
		var popupContactWidth=	$('#popupContact2').width();
		popupContactWidth=popupContactWidth/2;
		var popupContactheight=	$('#popupContact2').height();
		popupContactheight=popupContactheight/2;
		var finalWidth=width-popupContactWidth;
		var finalheight=height-popupContactheight;
		
		$('#background_load').show();
		$('#popupContact').show();
		$('#popupContact2').hide();
		$('#popupContact2').css('position', 'fixed');
		$('#popupContact2').css('top', finalheight);
		$('#popupContact2').css('left', finalWidth+110);
		for (i = zoomListeners.length - 1; i >= 0; --i) {
		zoomListeners[i]();
		}
		}
		setInterval(pollZoomFireEvent, 100);
		})();	

	
}

function add_contactid(no){
	$('#group_plus_'+no).remove();
	no++;
	
	contatct = "<span>Contact ID:</span><input class='inner-login-fild1-manual' type='text' id='contactID_"+no+"' name='mob' value='' placeholder='eg: 46'><span class='plus-manual' id='group_plus_"+no+"'><img src='images/plus.png' alt='' onClick='add_contactid("+no+");'></span><div class='clear'></div>";
	$('#apend_contactid').append(contatct);
	//document.getElementBy('scrol_plus').scrollTop = 10000;
	$('#scrol_plus').scrollTop(10000);
	$('#hdn_total_no').val(no);
}
function upload_csv_file(){

	centerPopup();
	loadPopup3();
	
	var zoomListeners = [];
		
		(function(){
		var lastWidth = 0;
			function pollZoomFireEvent() {
		var widthNow = jQuery(window).width();
		if (lastWidth == widthNow) return;
		lastWidth = widthNow;
		var height = $( window ).height();
		height=height/2;
		var width = $( window ).width();
		width=width/2;
		var popupContactWidth=	$('#popupContact3').width();
		popupContactWidth=popupContactWidth/2;
		var popupContactheight=	$('#popupContact3').height();
		popupContactheight=popupContactheight/2;
		var finalWidth=width-popupContactWidth;
		var finalheight=height-popupContactheight;
		
		$('#add_contect_btn').show();
		$('#open_addcontact').hide();
		$('#background_load').show();
		$('#popupContact').hide();
		$('#popupContact2').hide();
		$('#popupContact3').show();
		$('#disply_fileform').hide();
		$('#popupContact3').css('position', 'fixed');
		$('#popupContact3').css('top', finalheight);
		$('#popupContact3').css('left', finalWidth+40);
		for (i = zoomListeners.length - 1; i >= 0; --i) {
		zoomListeners[i]();
		}
		}
		setInterval(pollZoomFireEvent, 100);
		})();	
		
	
}
function add_csvfile(){
//alert("hello");

	//datasinfo='{"addresses": {"EMAIL": [{"address": ""},{"address": "<emailaddress2>"}]},"adapterList": {"CALL": "<callingadapterId>"},"senderName": "<senderName(usedforallbutCALLchannel)>","message": "Testmessage","retryMethod": "AUTO|MANUAL","retryLimit": "sadsa","broadcastName": "sadsa","emailSubject": "sadsa"
//}';

	var id = "<?php echo $session_id; ?>";
	$.ajax({	
			type: "GET",
			contentType: "application/json",
			//dataType: 'json',
			//data: {datasinfo:datasinfo},
			//data: datasinfo,
			beforeSend : function(xhr) {          
				xhr.setRequestHeader("X-SESSION_ID" , id)
			 }, 

			url : "http://askfastmarket1.appspot.com/blobstore/test.csv?!",
			
			
			
			cache: false,
			crossDomain: true,
			xhrFields: {
			withCredentials: true
			},
			success: function (data) {
			alert("hello");
			//var jasonValue = JSON.stringify(data) ;
			//alert(jasonValue);
				}
		});


	$('#disply_fileform').toggle();
	$('#uploading_hed').hide();
	$('#add_contect_btn').hide();
	$('#open_addcontact').show();
}
function chk_showContact(){
	
	if (!$('#demo_box_1').is(':checked')){
		$("#show_individuals").show();
	}
	else{
		$("#show_individuals").hide();
	}
	
	if (!$('#demo_box_2').is(':checked')){
		$("#show_groups").show();
	}
	else{
		$("#show_groups").hide();
	}
	
}

function hide_divContact(id){
	$('#contactEdit_'+id).hide();
	$('#Cdone_id_'+id).hide();
	$('#Ccancel_id_'+id).hide();
	$('#edit_edit_'+id).show();
	$('#Cdel_'+id).show();
}

function hide_divGroup(id){
	$('#GroupEdit_'+id).hide();
	$('#Gdone_id_'+id).hide();
	$('#Gcancel_id_'+id).hide();
	$('#Gedit_edit_'+id).show();
	$('#Gdel_'+id).show();
}

function editBroadcast(count_id,div_id){
//alert("hello");


	var b_name=document.getElementById("broadcastName_"+div_id).value;
	var b_message=document.getElementById("message_"+div_id).value;
	var b_senderName=document.getElementById("senderName_"+div_id).value;
	var b_emailSubject=document.getElementById("emailSubject_"+div_id).value;
	
	//alert(b_name);alert(b_message);alert(b_senderName);alert(b_emailSubject);
	
	if(b_message==""){
		alert("First Name Is Empty");
	 	return false;
	}
	if(b_senderName==""){
		alert("Last Name Is Empty");
	 	return false;
	}
	if(b_emailSubject=="" ){
		alert("E-Mail Is Empty");
	 	return false;
	}

	var emailRegexStr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	var isvalid = emailRegexStr.test(b_emailSubject); 
	
	if (!isvalid) {
	  alert("Not a valid e-mail address");
	  return false;
	}
	var id = "<?php echo $session_id; ?>";
	
	//Valueofcheckbox='"addresses":{"EMAIL": [{"address": "test@gmail.com"}]}';
//	Valueofcheckbox='"adapterList": {"CALL": "'+senderId+'"}';
	datasinfo = '{"senderName":"'+b_senderName+'","message":"'+b_message+'","broadcastName":"'+b_name+'","emailSubject":"'+b_emailSubject+'","addresses":{"EMAIL": [{"address": "test@gmail.com"}]}}';
	//alert(datasinfo);
	//debugger
	
	//datas = '{"contactInfoRefs":['+count_id+'],"id":'+count_id+'}';
//datasinfo = '{"id":'+edit_id+',"contactInfoTag":"Email","contactInfo":"'+edit_email+'","firstName":"'+edit_fname+'","lastName":"'+edit_lname+'"}'; 
	
		//	datasinfo = '{"id":'+rndid+',"contactInfoTag": [{ "contactInfoTag":"Email","contactInfoTag":"Phone","contactInfoTag":"Mobile"}],"contactInfo": [{ "Email":'+email+',"Phone":'+phone+',"Mobile":'+ldnum+'}],"firstName":"'+fname+'","lastName":"'+lname+'"}';   
			
	//$('#img_loading1').show();
//	$("#main").css({"opacity": "0.3"});
	
	$.ajax({	
		type: "PUT",
		contentType: "application/json",
		dataType: 'json', 
		data: datasinfo,
		beforeSend : function(xhr) {          
			xhr.setRequestHeader("X-SESSION_ID" , id)
		  },
		url : "http://askfastmarket1.appspot.com/products/broadcastnew/"+count_id,
		cache: false,
		crossDomain: true,
		xhrFields: {
		withCredentials: true
		},
		success: function (data) {
		alert("hello");

			
		}
	});
						
		
	//$.ajax({	
//		type: "PUT",
//		contentType: "application/json",
//		dataType: 'json',
//		data: datasinfo,
//		beforeSend : function(xhr) {          
//			xhr.setRequestHeader("X-SESSION_ID" , id)
//		  }, 
//		url : "http://askfastmarket1.appspot.com/accounts/contactinfos/"+count_id,
//		cache: false,
//		crossDomain: true,
//		xhrFields: {
//		withCredentials: true
//		},
//		success: function (data) {
//			console.log(data);
//			$('#contact_'+div_id).fadeOut(40);
//			$('#heading_edit_'+div_id).html(edit_fname+' '+edit_lname );
//			$('#fname_'+div_id).val(edit_fname);
//			$('#lname_'+div_id).val(edit_lname);
//			$('#email_'+div_id).val(edit_email);
//			$('#phone_'+div_id).val(edit_mobile);	
//			$('#landLine_'+div_id).val(edit_landno);		
//						
//			$('#contactEdit_'+div_id).hide();
//			$('#edit_contact_'+div_id).hide();
//			$('#edit_edit_'+div_id).show();
//			$('#img_loading1').hide(); 
//			$("#main").css({"opacity": ""});						
//			$('#Cdone_id_'+div_id).hide();					
//			$('#Cdel_'+div_id).show();
//			$('#Ccancel_id_'+div_id).hide();
//			
//			$('#contact_'+div_id).fadeIn(2000);
//			$('#contact_'+div_id).focus();
//			
//		}
//	});

}

function word_2(){
	AllDivs();
	delay();
	document.getElementById("word2").innerHTML = "";
	//$('#word2').show();
	$('#img_loading1').show();
	$("#main").css({"opacity": "0.3"});

	
	var count=0;
	var i=0;	
	
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
		//$('#img_loading1').show();
		//$("#main").css({"opacity": ""});
		//alert(data[0].id);
//			debugger
			var arrlength=0;
			arrlength=data.length;
			
			
			for ( i=0; i<arrlength; i++)
			{
				//alert(i);
				count++;
				var strHtml1='';
				strHtml1 += "<span id=contact_"+count+" ><div class='football'><div class='football-left'><div class='footbal'><h6 id='heading_edit_"+i+"'>"+data[i].broadcast.broadcastName+"</h6></div><div class='therty7'> 1 </div><div class='three-img'> <img src='images/phone.png' alt='' /><img src='images/latter1.png' alt='' /><img src='images/at1.png' alt='' /></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editBroadcast("+data[i].id+","+count+");' style='display:none;'><input class='edit1' id='edit_edit_"+count+"'  value='' type='button'  onclick='editbc("+data[i].id+","+count+")'></div><input type='hidden' id='broadcastName_"+count+"' value='"+data[i].broadcast.broadcastName+"'><input type='hidden' id='message_"+count+"' value='"+data[i].broadcast.message+"'><input type='hidden' id='senderName_"+count+"' value='"+data[i].broadcast.senderName+"'><input type='hidden' id='emailSubject_"+count+"' value='"+data[i].broadcast.emailSubject+"'><input type='hidden' id='landLine_"+count+"' value='"+data[i].broadcast.message+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_"+count+"' onclick='hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delcnt("+data[i].id+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_"+count+" ></span></span>"; 
				
				/*strHtml1 += "<div class='football'><div class='football-left'><div class='footbal'><h6 id='heading_edit_0'>abcg</h6></div><div class='therty7'> 37 </div><div class='three-img'> <img alt='' src='images/phone.png'><img alt='' src='images/latter1.png'><img alt='' src='images/at1.png'></div></div><div class='football-right'><div class='edit'><img style='display:none;' onclick='editBroadcast(4506199156326400,1);' id='Cdone_id_1' src='images/done.png'><input type='button' onclick='editbc(4506199156326400,1)' value='' id='edit_edit_1' class='edit1'></div><input type='hidden' value='abcg' id='broadcastName_1'><input type='hidden' value=' d' id='message_1'><input type='hidden' value='asdf' id='senderName_1'><input type='hidden' value='skinder.ameen@gmail.com' id='emailSubject_1'><input type='hidden' value=' d' id='landLine_1'><div class='close123'><img style='display:none;' onclick='hide_divContact(1);' id='Ccancel_id_1' src='images/cancel.png'><a id='Cdel_1' onclick='delcnt(4506199156326400,1)' href='javascript:'><img alt='' src='images/close.png'></a></div><div class='clear'></div></div><div class='clear'></div><span id='contactEdit_1'></span></div>";*/
							
			
							
							
					$("#word2").append(strHtml1);
					$("#word2").show();
				}
				
				
				if(arrlength==0)
				{
					//$("#emptyBroadcast").show();
					
				}
			$('#img_loading1').hide();
		}
		
//			$("#main").css({"opacity": ""});

		});
		//$('#word222222').hide();
		//$('#word6').hide();
		
	
	
}

function word_1(){
	AllDivs();
	$('#word').show();
	
	//if (document.getElementById('checkbox_7').checked) 
//		{
//            alert("hello");
//        }
		
	
}



function word_4(){
	AllDivs();
	$('#word222222').show();
}

function showadd(){
	$('#element1').show();
	$('#element2').show();
}

// logout
function logout(){
	url="logout.php";
	$.post(url,function(responce){
		window.location ="/BroadCast/index.php";
	});
} 
		
function updategrp(){

	var x;
    var r=confirm("Do you want to Edit this Group");
   	if (r==true)
   	{
		 x="You pressed OK!";
   	}
   	else
   	{
		return false;
  	}
}

function duplicategrp(){
	var x;
    var r=confirm("Do you want to Duplicate copy of this Group");
	   if (r==true)
	   {
			x="You pressed OK!";
	   }
	   else
	   {
			return false;
	  }

}

function deletebc(){
	var x;
    var r=confirm("Do you want to Delete this Broad Cast");
	   if (r==true)
	   {
			x="You pressed OK!";
	   }
	   else
	   {
			return false;
	  }

}

function editbc(broadcastId,div_id){

	$('#contactEdit_'+div_id).html('');
	$('#edit_edit_'+div_id).hide();
	$('#Cdone_id_'+div_id).show();
	
	$('#Cdel_'+div_id).hide();
	$('#Ccancel_id_'+div_id).show();
	
	var Bname = $('#broadcastName_'+div_id).val();
	var Bmessage = $('#message_'+div_id).val();
    var BsenderName = $('#senderName_'+div_id).val();
	var BemailSubject = $('#emailSubject_'+div_id).val();
	//var landLine = $('#landLine_'+div_id).val();
	
	var edithtml = "<div id=edit_contact_"+div_id+" class='light-blu'><div class='light-blu-inner'><div class='light-blu-left'><h3>"+Bname+"</h3><p>Notes:</p><textarea class='light-blu-text'></textarea></div><div class='light-blu-right'><span>Name:</span><input class='light-blu-in' type='hidden' id=edit_id_"+div_id+" value='"+broadcastId+"' placeholder='First Name'><input class='light-blu-in' type='text' id='edit_bName_"+div_id+"' value='"+Bname+"' placeholder='First Name'><div class='clear'></div><span>Message:</span><input class='light-blu-in' type='text' placeholder='Last Name' id='edit_Bmessage_"+div_id+"' value='"+Bmessage+"'><div class='clear'></div><span>Sender Name:</span><input class='light-blu-in' id='edit_Bsendername_"+div_id+"' type='text' value='"+BsenderName+"' placeholder='+31 1234567'><div class='clear'></div><span>Email subject:</span><input class='light-blu-in' id='edit_Bemailsubject_"+div_id+"' value='"+BemailSubject+"' type='text' placeholder=''><div class='clear'></div></div></div><div class='clear'></div></div>"
	 
	$('#contactEdit_'+div_id).append(edithtml); 
	$('#contactEdit_'+div_id).show();
	//var x;
//    var r=confirm("Do you want to Update this Broad Cast");
//	   if (r==true)
//	   {
//			x="You pressed OK!";
//	   }
//	   else
//	   {
//			return false;
//	  }

}

function fileup(){
	//alert('hghj');


   //alert(cntctid);
		var id = "<?php echo $session_id; ?>";
			// ajax request to get contact's
		var url = "http://askfastmarket1.appspot.com/blobstore/hello.csv?!";
				
		//	var url = "http://askfastmarket1.appspot.com/accounts/contacts";
			//alert(url);
			/*$.ajax({
				type: "GET",
			   //contentType: "text/html", // ..
				dataType: 'JSONP', 
				beforeSend : function(xhr) {          
					xhr.setRequestHeader("X-SESSION_ID" , id)
				  },
				url:url,
				cache: false, // ..
				crossDomain: true,
				xhrFields: {
				withCredentials: true
				},
				complete: function(data) {
				
				}
		});*/
		
		$.ajax({
			  url: url,
			  type: "GET",
			  dataType: 'html',
			  cache: false, 
			  crossDomain: true,
			  success: function (data) {
				  $('#apnd_fileUpload').html(data);
			  },
			   
			failure: function (msg) {
			//	alert('somethin went wrong' + msg);
			}
		});
	}
	
	// del contant
	
function delcnt(cntctid,span_id){
	  var x;
      var r=confirm("Do you want to Delete this contact");
	  //alert(r);
	   if (r==true)
	   {
			x="You pressed OK!";
	   }
	   else
	   {
	   		return false;
	  }
		var id = "<?php echo $session_id; ?>";
		    $('#img_loading1').show();
			$("#main").css({"opacity": "0.3"});
		// ajax request to get contact's
			$.ajax({	
				type: "DELETE",
				contentType: "application/json",
				dataType: 'html', 
			//	data: datas,
				beforeSend : function(xhr) {          
					xhr.setRequestHeader("X-SESSION_ID" , id)
				  },
				url : "http://askfastmarket1.appspot.com/accounts/contacts/"+cntctid,
				cache: false,
				crossDomain: true,
				xhrFields: {
				withCredentials: true
				},
				success: function (data) {
	
				// ajax request to get contact's
					$('#contact_'+span_id).fadeOut(1000);
				
				$('#img_loading1').hide();
				$("#main").css({"opacity": ""});
				
				},
				
				error: function(xhr, status, error) {
					// Display a generic error for now.
				//	alert("oooops there is some issue while deleting contact!");
				$('#img_loading1').hide();
				$("#main").css({"opacity": ""});
				  }
				
			});
			
				
}
	// del contant
function delGroup(cntctid,span_id){
	  var x;
      var r=confirm("Do you want to Delete this Group");
	  //alert(r);
	   if (r==true)
	   {
			x="You pressed OK!";
	   }
	   else
	   {
	   		return false;
	  }
		var id = "<?php echo $session_id; ?>";
		    $('#img_loading1').show();
			$("#main").css({"opacity": "0.3"});
		// ajax request to get contact's
			$.ajax({	
				type: "DELETE",
				contentType: "application/json",
				dataType: 'html', 
			//	data: datas,
				beforeSend : function(xhr) {          
					xhr.setRequestHeader("X-SESSION_ID" , id)
				  },
				url : "http://askfastmarket1.appspot.com/accounts/groups/"+cntctid, 
				cache: false,
				crossDomain: true,
				xhrFields: {
				withCredentials: true
				},
				success: function (data) {
	
				// ajax request to get contact's
					$('#Gcontact_'+span_id).fadeOut(1000);
				
				$('#img_loading1').hide();
				$("#main").css({"opacity": ""});
				
				}
			});
				
}
	
		//update content
function updatecnt(cntctid,div_id){
	
	$('#contactEdit_'+div_id).html('');
	$('#edit_edit_'+div_id).hide();
	$('#Cdone_id_'+div_id).show();
	
	$('#Cdel_'+div_id).hide();
	$('#Ccancel_id_'+div_id).show();
	
	var fname = $('#fname_'+div_id).val();
	var lname = $('#lname_'+div_id).val();
    var email = $('#email_'+div_id).val();
	var phone = $('#phone_'+div_id).val();
	var landLine = $('#landLine_'+div_id).val();
	
	var edithtml = "<div id=edit_contact_"+div_id+" class='light-blu'><div class='light-blu-inner'><div class='light-blu-left'><h3>"+fname+" "+lname+"</h3><p>Notes:</p><textarea class='light-blu-text'></textarea></div><div class='light-blu-right'><span>Name:</span><input class='light-blu-in' type='hidden' id=edit_id_"+div_id+" value='"+cntctid+"' placeholder='First Name'><input class='light-blu-in' type='text' id='edit_fname_"+div_id+"' value='"+fname+"' placeholder='First Name'><div class='clear'></div><span>Surname:</span><input class='light-blu-in' type='text' placeholder='Last Name' id='edit_lname_"+div_id+"' value='"+lname+"'><div class='clear'></div><span>Mobile:</span><input class='light-blu-in' id='edit_mobile_"+div_id+"' type='text' value='"+phone+"' placeholder='+31 1234567'><div class='clear'></div><span>Landline:</span><input class='light-blu-in' id='edit_landno_"+div_id+"' value='"+landLine+"' type='text' placeholder=''><div class='clear'></div><span>E-mail:</span><input class='light-blu-in' type='text' id='edit_email_"+div_id+"' value='"+email+"' placeholder='your-Email@gmail.com'><div class='clear'></div></div></div><div class='clear'></div></div>"
	 
	$('#contactEdit_'+div_id).append(edithtml); 
	$('#contactEdit_'+div_id).show();
	//$('#btn_edit').removeAttribute('onclick');
	//$('#btn_edit').attr('onclick','editcontact('+pid+')');
}

function showGroupBtn(gpID,div_id){

	$('#GroupEdit_'+div_id).html('');
	$('#Gedit_edit_'+div_id).hide();
	$('#Gdone_id_'+div_id).show();
	
	$('#Gdel_'+div_id).hide();
	$('#Gcancel_id_'+div_id).show();
	
	var gpname = $('#gname_'+div_id).val();
	/*<div class='light-blu-left'><h3>"+gpname+"</h3><p>Notes:</p><textarea class='light-blu-text'></textarea></div>*/
	var edithtml = "<div id=Gedit_contact_"+div_id+" class='light-blu' style='height: 95px;'><div class='light-blu-inner'><div class='light-blu-right'><span>Name:</span><input class='light-blu-in' type='hidden' id=Gedit_id_"+div_id+" value='"+gpID+"' placeholder='Group Name'><input class='light-blu-in' type='text' id=edit_gpname_"+div_id+" value='"+gpname+"' placeholder='First Name'><div class='clear'></div></div><div class='clear'></div></div>"
	
	$('#GroupEdit_'+div_id).append(edithtml); 
	$('#GroupEdit_'+div_id).show();


}

	//update content
	
	
function updateGroup(count_id,div_id){

	var name=$('#edit_gpname_'+div_id).val();
	
	if(name==""){
		alert("Group Name cannot be empty.");
	 	return false;
	}

	var id = "<?php echo $session_id; ?>";
	
	datasinfo = '{"name":"'+name+'"}';   
			
	$('#img_loading1').show();
	$("#main").css({"opacity": "0.3"});
		
	$.ajax({	
		type: "PUT",
		contentType: "application/json",
		dataType: 'json',
		data: datasinfo,
		beforeSend : function(xhr) {          
			xhr.setRequestHeader("X-SESSION_ID" , id)
		  }, 
		url : "http://askfastmarket1.appspot.com/accounts/groups/"+count_id,
		cache: false,
		crossDomain: true,
		xhrFields: {
		withCredentials: true
		},
		success: function (data) {
			console.log(data);
			$('#Gcontact_'+div_id).fadeOut(40);
			$('#Gheading_edit_'+div_id).html(name);
			$('#gname_'+div_id).val(name);
					
			$('#GroupEdit_'+div_id).hide();
			$('#Gedit_contact_'+div_id).hide();
			$('#Gedit_edit_'+div_id).show();
			$('#img_loading1').hide(); 
			$("#main").css({"opacity": ""});						
			$('#Gdone_id_'+div_id).hide();					
			$('#Gdel_'+div_id).show();
			$('#Gcancel_id_'+div_id).hide();
			
			$('#Gcontact_'+div_id).fadeIn(2000);
			$('#Gcontact_'+div_id).focus();
			
		}
	});
}
	
	//edit contact
function editcontact(count_id,div_id){

	var edit_id=document.getElementById("edit_id_"+div_id).value;
	var edit_fname=document.getElementById("edit_fname_"+div_id).value;
	var edit_lname=document.getElementById("edit_lname_"+div_id).value;
	var edit_mobile=document.getElementById("edit_mobile_"+div_id).value;
	var edit_landno=document.getElementById("edit_landno_"+div_id).value;
	var edit_email = document.getElementById("edit_email_"+div_id).value;
	
	if(edit_fname==""){
		alert("First Name Is Empty");
	 	return false;
	}
	if(edit_lname==""){
		alert("Last Name Is Empty");
	 	return false;
	}
	if(edit_email=="" ){
		alert("E-Mail Is Empty");
	 	return false;
	}

	var emailRegexStr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	var isvalid = emailRegexStr.test(edit_email); 
	
	if (!isvalid) {
	  alert("Not a valid e-mail address");
	  return false;
	}
	var id = "<?php echo $session_id; ?>";
	datas = '{"contactInfoRefs":['+count_id+'],"id":'+count_id+'}';
datasinfo = '{"id":'+edit_id+',"contactInfoTag":"Email","contactInfo":"'+edit_email+'","firstName":"'+edit_fname+'","lastName":"'+edit_lname+'"}'; 
	
		//	datasinfo = '{"id":'+rndid+',"contactInfoTag": [{ "contactInfoTag":"Email","contactInfoTag":"Phone","contactInfoTag":"Mobile"}],"contactInfo": [{ "Email":'+email+',"Phone":'+phone+',"Mobile":'+ldnum+'}],"firstName":"'+fname+'","lastName":"'+lname+'"}';   
			
	$('#img_loading1').show();
	$("#main").css({"opacity": "0.3"});
	
	$.ajax({	
		type: "PUT",
		contentType: "application/json",
		dataType: 'json', 
		data: datas,
		beforeSend : function(xhr) {          
			xhr.setRequestHeader("X-SESSION_ID" , id)
		  },
		url : "http://askfastmarket1.appspot.com/accounts/contacts/"+count_id,
		cache: false,
		crossDomain: true,
		xhrFields: {
		withCredentials: true
		},
		success: function (data) {

			
		}
	});
						
		
	$.ajax({	
		type: "PUT",
		contentType: "application/json",
		dataType: 'json',
		data: datasinfo,
		beforeSend : function(xhr) {          
			xhr.setRequestHeader("X-SESSION_ID" , id)
		  }, 
		url : "http://askfastmarket1.appspot.com/accounts/contactinfos/"+count_id,
		cache: false,
		crossDomain: true,
		xhrFields: {
		withCredentials: true
		},
		success: function (data) {
			console.log(data);
			$('#contact_'+div_id).fadeOut(40);
			$('#heading_edit_'+div_id).html(edit_fname+' '+edit_lname );
			$('#fname_'+div_id).val(edit_fname);
			$('#lname_'+div_id).val(edit_lname);
			$('#email_'+div_id).val(edit_email);
			$('#phone_'+div_id).val(edit_mobile);	
			$('#landLine_'+div_id).val(edit_landno);		
						
			$('#contactEdit_'+div_id).hide();
			$('#edit_contact_'+div_id).hide();
			$('#edit_edit_'+div_id).show();
			$('#img_loading1').hide(); 
			$("#main").css({"opacity": ""});						
			$('#Cdone_id_'+div_id).hide();					
			$('#Cdel_'+div_id).show();
			$('#Ccancel_id_'+div_id).hide();
			
			$('#contact_'+div_id).fadeIn(2000);
			$('#contact_'+div_id).focus();
			
		}
	});
}
	//edit contact
	
	// show contant
function AllDivs()
{
	$('#word').hide();
	$('#word6').hide();
	$('#word5').hide();
	$('#word222222').hide();
	$('#word2').hide();
	$("#emptycontactlist").hide();
	$("#emptyGrouplist").hide();
	
}

function delay()
{
		$('#img_loading1').show();
		$("#main").css({"opacity": "0.3"});
setTimeout(function(){$('#img_loading1').hide(); 
		$("#main").css({"opacity": ""});},3000);
}

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
	    var id = "<?php echo $session_id; ?>";
     
		$('#img_loading1').show();
		$("#main").css({"opacity": "0.3"});
		$.ajax({	
			type: "GET",
			contentType: "application/json",
			dataType: 'html', 

			beforeSend : function(xhr) {          
				xhr.setRequestHeader("X-SESSION_ID" , id)
			  },
			url : "http://askfastmarket1.appspot.com/accounts/contacts",
			cache: false,

			success: function (data) {
				var counterLoop = 0;
				var strHtml = '';
				obj = JSON.parse(data);
				arrlength=0;
				arrlength = obj.length;
	
				for (var i=1; i<arrlength; i++)
				{	
					//obj = JSON.parse(data);
					ctid = obj[i].id;					
	
					$.ajax({	
						type: "GET",
						contentType: "application/json",
						dataType: 'html', 
					//	data: datas,
						beforeSend : function(xhr) {          
							xhr.setRequestHeader("X-SESSION_ID" , id)
						  },
						url : "http://askfastmarket1.appspot.com/accounts/contactinfos/"+ctid,
						//alert(url);
						cache: false,
						crossDomain: true,
						xhrFields: {
						withCredentials: true
						},
						success: function (data) {
	
							obj = JSON.parse(data);
							
							 if(obj.firstName){
								fstname = obj.firstName;
							 }
							 else{
								fstname = '';
							 }
							 if(obj.firstName){
								lstname = obj.lastName;
							 }
							 else{
								lstname = '';
							 }
							 if(fstname != '' && lstname != ''){
								flname = fstname+" "+lstname;
								counterLoop++;
							 }
							 else{
								flname = '';	
							 }
							 if (obj.contactInfo){
							
								var infoString = obj.contactInfo;
							
								var mySplitResult = infoString.split("|");
								
								for(i = 0; i < mySplitResult.length; i++){
									if (i == 0){
										 email =  mySplitResult[i]; 
									}
									if (i == 1){
										 phone =  mySplitResult[i]; 
									}
									if (i == 2){
										 landLine =  mySplitResult[i]; 
									}						
								}										
							 }
							 
							 if(flname != ''&& fstname != "N")
							 {
								count++;
								div_id++;
							
								strHtml += "<div class='ahmet'><span><input id='checkbox_"+count+"' type='checkbox' name='chkbox' value="+email+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon'><img src='images/twtter.png' alt='latter' /><img src='images/at.png' alt='latter' /><img src='images/latter.png' alt='latter' /></span><div class='clear'></div></div>"; 
								
								
							
							 }
							 
							$("#checkboxContacts").html(strHtml);
							$("#checkboxContacts").show();
							$('#img_loading1').hide();
							$("#main").css({"opacity": ""});
							 
						}
					});
				}
						if(arrlength==0)
							 {
							 //alert("hello");
							 	//$("#emptycontactlist").show();
							 	//$("#div_individuals").html("Your contact list is empty.");
								//$("#div_individuals").show();
							 }
			} 
		});
		
}

function showcnt(){
		
		AllDivs();
		$('#word5').show();
		$('#main_icon').show();
		$("#div_individuals").html('');
		var count = 1;
		var count2 = 1;
		var phone = '';
		var email = '' ;
		var landLine = '' ;
		
		delay();
		
		var div_id = 1;
	    var id = "<?php echo $session_id; ?>";
	 //alert(id);
	 // ajax request to get contact's
     
		$('#img_loading1').show();
		$("#main").css({"opacity": "0.3"});
		$.ajax({	
			type: "GET",
			contentType: "application/json",
			dataType: 'html', 

			beforeSend : function(xhr) {          
				xhr.setRequestHeader("X-SESSION_ID" , id)
			  },
			url : "http://askfastmarket1.appspot.com/accounts/contacts",
			cache: false,

			success: function (data) {
				var counterLoop = 0;
				var strHtml = '';
				obj = JSON.parse(data);
				arrlength=0;
				arrlength = obj.length;
	
				for (var i=1; i<arrlength; i++)
				{	
					//obj = JSON.parse(data);
					ctid = obj[i].id;					
	
					$.ajax({	
						type: "GET",
						contentType: "application/json",
						dataType: 'html', 
					//	data: datas,
						beforeSend : function(xhr) {          
							xhr.setRequestHeader("X-SESSION_ID" , id)
						  },
						url : "http://askfastmarket1.appspot.com/accounts/contactinfos/"+ctid,
						//alert(url);
						cache: false,
						crossDomain: true,
						xhrFields: {
						withCredentials: true
						},
						success: function (data) {
	
							obj = JSON.parse(data);
							
							 if(obj.firstName){
								fstname = obj.firstName;
							 }
							 else{
								fstname = '';
							 }
							 if(obj.firstName){
								lstname = obj.lastName;
							 }
							 else{
								lstname = '';
							 }
							 if(fstname != '' && lstname != ''){
								flname = fstname+" "+lstname;
								counterLoop++;
							 }
							 else{
								flname = '';	
							 }
							 if (obj.contactInfo){
							
								var infoString = obj.contactInfo;
							
								var mySplitResult = infoString.split("|");
								
								for(i = 0; i < mySplitResult.length; i++){
									if (i == 0){
										 email =  mySplitResult[i]; 
									}
									if (i == 1){
										 phone =  mySplitResult[i]; 
									}
									if (i == 2){
										 landLine =  mySplitResult[i]; 
									}						
								}										
							 }
							 
							 if(flname != ''&& fstname != "N")
							 {
								count++;
								div_id++;
							
								strHtml += "<span id=contact_"+count+" ><div class='football'> <div class='football-left'><div class='footbal'><h6 id='heading_edit_"+count+"'>"+flname+"</h6><p><i>Individual</i></p></div><div class='three-img'><img src='images/phone.png' alt=''><img src='images/latter1.png' alt=''><img src='images/at1.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+count+"' onclick='editcontact("+obj.id+","+count+");' style='display:none;'><input class='edit1' id='edit_edit_"+count+"'  value='' type='button'  onclick='updatecnt("+obj.id+","+count+")'></div><input type='hidden' id='fname_"+count+"' value='"+fstname+"'><input type='hidden' id='lname_"+count+"' value='"+lstname+"'><input type='hidden' id='email_"+count+"' value='"+email+"'><input type='hidden' id='phone_"+count+"' value='"+phone+"'><input type='hidden' id='landLine_"+count+"' value='"+landLine+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_"+count+"' onclick='hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delcnt("+obj.id+","+count+")' id='Cdel_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_"+count+" ></span></div></span>"; 
							
							 }
							 
							 //$("#emptycontactlist").hide();
							 //$("#emptyGrouplist").hide();
							$("#div_individuals").html(strHtml);
							$("#div_individuals").show();
							$('#img_loading1').hide();
							$("#main").css({"opacity": ""});
							 
						}
					});
				}
						if(arrlength==0)
							 {
							 //alert("hello");
							 	//$("#emptycontactlist").show();
							 	//$("#div_individuals").html("Your contact list is empty.");
								//$("#div_individuals").show();
							 }
			} 
		});
			

		$.ajax({	
			type: "GET",
			contentType: "application/json",
			dataType: 'html', 
		//	data: datas,
			beforeSend : function(xhr) {          
				xhr.setRequestHeader("X-SESSION_ID" , id)
			  },
			url : "http://askfastmarket1.appspot.com/accounts/groups",
			cache: false,
			crossDomain: true,
			success: function (data) {
				var counterLoop = 0;
				var strHtml = '';
				obj = JSON.parse(data);
				arrlength=0;
				arrlength = obj.length;
				//alert(arrlength);
				for (var i=1; i<arrlength; i++)
				{	
					//obj = JSON.parse(data);
					ctid = obj[i].id;
					//alert(ctid);					
					
					$.ajax({	
						type: "GET",
						contentType: "application/json",
						dataType: 'html', 
					//	data: datas,
						beforeSend : function(xhr) {          
							xhr.setRequestHeader("X-SESSION_ID" , id)
						  },
						url : "http://askfastmarket1.appspot.com/accounts/groups/"+ctid,
						//alert(url);
						cache: false,
						crossDomain: true,
						xhrFields: {
						withCredentials: true
						},
						success: function (data) {
						// alert(data+"info");
						 obj = JSON.parse(data);
						  //alert(obj.name);
						 if(obj.name)
						 {
							grpname = obj.name;
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
							count2++;
							strHtml += "<span id=Gcontact_"+count2+" ><div class='football'> <div class='football-left'><div class='footbal'><h6 id='Gheading_edit_"+count2+"'>"+gpname+"</h6><p><i>Group</i></p></div><div class='three-img'><img src='images/phone.png' alt=''><img src='images/latter1.png' alt=''><img src='images/at1.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Gdone_id_"+count2+"' onclick='updateGroup("+obj.id+","+count2+");' style='display:none;'><input class='edit1' id='Gedit_edit_"+count2+"' value='' type='button' onclick='showGroupBtn("+obj.id+","+count2+")'><input type='hidden' id='gname_"+count2+"' value='"+gpname+"'></div><div class='close123'><img src='images/cancel.png' id='Gcancel_id_"+count2+"' onclick='hide_divGroup("+count2+");' style='display:none;'><a href='javascript:' onclick='delGroup("+obj.id+","+count2+")' id='Gdel_"+count2+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=GroupEdit_"+count2+" ></span></div></span>";
					
						 }
						 //$("#emptyGrouplist").hide();
						$("#div_groups").html(strHtml);
						$("#div_groups").show();
						$('#img_loading1').hide(); 
						$("#main").css({"opacity": ""});
						
						}
					});
					
				}
					if(arrlength==0)
							 {
							 //alert("hello");
							 	//$("#div_groups").html("Your group list is empty.");
								$("#emptyGrouplist").show();
							 }
			}
		});
		
		
			
}
	
	
	
	// Add Cont
function addcnt(){

	var rndid = Math.floor(Math.random() * (9999 - 100 + 1)) + 1;
	var fr_name=document.getElementById("fr_name").value;
	var srname=document.getElementById("srname").value;
	var mob = document.getElementById('mob').value;
	var ldnum=document.getElementById("ldnum").value;
	var email_man = document.getElementById('email_man').value;
	
	if(fr_name=="" ){
	alert("Please input First Name");
	 return false;
	}
	if(mob=="" ){
	alert("Please input Mobile Number");
	 return false;
	}
	if(ldnum=="" ){
	alert("Please input Landline Number");
	 return false;
	}
	
	if(email_man=="" ){
	alert("Please input E-Mail");
	 return false;
	}
	
	if(isNaN(mob))

	{
		alert("Mobile number is not an integer");
		return false;
	}
	if(isNaN(ldnum))
	{
		alert("Landline number is not an integer");
		return false;
	}
	
	var emailRegexStr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	var isvalid = emailRegexStr.test(email_man); 
	
	 if (!isvalid) {
	  alert("Not a valid e-mail address");
	  return false;
	}
	
	
	 var id = "<?php echo $session_id; ?>";
	 datas = '{"contactInfoRefs":['+rndid+'],"id":'+rndid+',"lastAvailableTime":"1380909873252","ownerKey":"yasir"}';
	// datasinfo = '{"id":'+rndid+',"contactInfoTag":"Email","contactInfo":"'+email_man+'|'+mob+'|'+ldnum+'","firstName":"'+fr_name+'","lastName":"'+srname+'"}';  
	 datasinfo = '{"id":'+rndid+',"contactInfoTag":"Email","contactInfo":"'+email_man+'","firstName":"'+fr_name+'","lastName":"'+srname+'"}';   
	// datasinfo = '{"id":'+rndid+',"contactInfoTag":"Email","contactInfo":"'+email_man+'|'+mob+'|'+ldnum+'","firstName":"'+fr_name+'","lastName":"'+srname+'"}';   
	
			//datasinfo = '{"id":'+rndid+',"contactInfoTag": [{ "contactInfoTag1":"Email","contactInfoTag2":"Phone","contactInfoTag3":"Mobile"}],"contactInfo": [{ "Email":"'+email_man+'","Phone":'+ldnum+',"Mobile":'+mob+'}],"firstName":"'+fr_name+'","lastName":"'+srname+'"}';   
			
					//		datasinfo = '{"id":'+rndid+',"contactInfoTag": [{ "contactInfoTag":"Email"}],"contactInfo": [{ "Email":"'+email_man+'"}],"firstName":"'+fr_name+'","lastName":"'+srname+'"}'; 
			
			


//alert(datasinfo);
	
	
	//datasinfo = '{"id":'+rndid+',"contactInfoTag":"Phone","contactInfo":"'+mob+'","firstName":"'+fr_name+'","lastName":"'+srname+'"}';   
	 
					$('#img_loading1').show();
					$("#main").css({"opacity": "0.3"});
					$.ajax({	
						type: "POST",
						contentType: "application/json",
						dataType: 'json', 
						beforeSend : function(xhr) {          
				xhr.setRequestHeader("X-SESSION_ID" , id)
			 },
						data: datas,
						url : "http://askfastmarket1.appspot.com/accounts/contacts",
						cache: false,
						crossDomain: true,
						xhrFields: {
						withCredentials: true
						},
						success: function (data) {
						//alert(data);
						$('#fr_name').val('');
						$('#srname').val('');
						$('#mob').val('');
						$('#ldnum').val('');
						$('#email_man').val('');
						
						var strhtml = "<span id=contact_"+rndid+" ><div class='football'> <div class='football-left'><div class='footbal'><h6 id='heading_edit_"+rndid+"'>"+fr_name+" "+srname+"</h6><p><i>Individual</i></p></div><div class='three-img'><img src='images/phone.png' alt=''><img src='images/latter1.png' alt=''><img src='images/at1.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_"+rndid+"' onclick='editcontact("+obj.id+","+rndid+");' style='display:none;'><input class='edit1' id='edit_edit_"+rndid+"'  value='' type='button'  onclick='updatecnt("+obj.id+","+rndid+")'></div><input type='hidden' id='fname_"+rndid+"' value='"+fr_name+"'><input type='hidden' id='lname_"+rndid+"' value='"+srname+"'><input type='hidden' id='email_"+rndid+"' value='"+email_man+"'><input type='hidden' id='phone_"+rndid+"' value='"+mob+"'><input type='hidden' id='landLine_"+rndid+"' value='"+ldnum+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_"+rndid+"' onclick='hide_divContact("+rndid+");' style='display:none;'><a href='javascript:' onclick='delcnt("+obj.id+","+rndid+")' id='Cdel_"+rndid+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_"+rndid+" ></span></div></span>";
						
						$('#div_individuals').after(strhtml);
						$('#img_loading1').hide();
						$("#main").css({"opacity": ""});
						$('#popupContact').hide(); 
						$('#background_load').hide(); 
				}
		});
		
		//datasinfo = JSON.stringify(datasinfo);
		console.log(datasinfo);
		// ajax request to add contact info
		$.ajax({	
			type: "POST",
			contentType: "application/json",
			dataType: 'json',
			data: datasinfo,
			beforeSend : function(xhr) {          
				xhr.setRequestHeader("X-SESSION_ID" , id)
			 }, 
			url : "http://askfastmarket1.appspot.com/accounts/contactinfos?strict=true",
			cache: false,
			crossDomain: true,
			xhrFields: {
			withCredentials: true
			},
			success: function (data) {
				console.log(data);
				}
		});
}
	// Add Cont
	
	//del Group
function delgroup(groupid){
	 var x;
      var r=confirm("Do you want to Delete this Group");
	  //alert(r);
	   if (r==true)
	   {
			x="You pressed OK!";
	   }
	   else
	   {
			return false;
	  }
	
   //alert(groupid);
   		var id = "<?php echo $session_id; ?>";
   		// ajax request to get contact's
			$.ajax({	
				type: "DELETE",
				contentType: "application/json",
				dataType: 'html', 
			//	data: datas,
				beforeSend : function(xhr) {          
					xhr.setRequestHeader("X-SESSION_ID" , id)
				  },
				url : "http://askfastmarket1.appspot.com/accounts/groups/"+groupid,
				cache: false,
				crossDomain: true,
				xhrFields: {
				withCredentials: true
				},
				success: function (data) {
				// ajax request to get contact's
				$('#img_loading1').show();
				$("#main").css({"opacity": "0.3"});
				
				$.ajax({	
				type: "GET",
				contentType: "application/json",
				dataType: 'html', 
			    //data: datas,
				beforeSend : function(xhr) {          
					xhr.setRequestHeader("X-SESSION_ID" , id)
				  },
				url : "http://askfastmarket1.appspot.com/accounts/groups",
				cache: false,
				crossDomain: true,
				xhrFields: {
				withCredentials: true
				},
				success: function (data) {
				var counterLoop = 0;
				var strHtml = '';
				obj = JSON.parse(data);
				arrlength = obj.length;
				//alert(arrlength);
					for (var i=1; i<arrlength; i++)
						{	
					//obj = JSON.parse(data);
					ctid = obj[i].id;
					//alert(ctid);					
					
					 $.ajax({	
					type: "GET",
					contentType: "application/json",
					dataType: 'html', 
				//	data: datas,
					beforeSend : function(xhr) {          
						xhr.setRequestHeader("X-SESSION_ID" , id)
					  },
					url : "http://askfastmarket1.appspot.com/accounts/groups/"+ctid,
					//alert(url);
					cache: false,
					crossDomain: true,
					xhrFields: {
					withCredentials: true
					},
					success: function (data) {
					// alert(data+"info");
					 obj = JSON.parse(data);
					  //alert(obj.name);
					 if(obj.name)
					 {
						grpname = obj.name;
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
					 
					if(counterLoop%2 == 0){
					 var myclass = "class='contact-name2'";
					 }else{
					 var myclass = "class='contact-name1 contact-name2'";
					 }
					 if(gpname != '')
					 {
					strHtml += "<p "+myclass+"><span>"+gpname+"</span><span>Reaching Media</span><span>Keywords</span><span><span><input type='button' class='edit1' onclick='updatecnt()' value=''></span><span style='padding-left:35px;'><img alt='' onclick='delgroup("+obj.id+")' src='images/close.png'></span><span style='padding-left:24px;'><input type='button' class='dupli' onclick='duplicategrp()' value=''></span></span></p>"; 
					 }
					$(".contact-name").html(strHtml);
					$('#img_loading1').hide();
					$("#main").css({"opacity": ""});
					}
				})
					
					}
				}
				
				}) 
				//alert(data);
				}
				}) 
		}
	//del group
	
	//show group
function showgroup(){
				

				$("#contact-name").show();
			    var id = "<?php echo $session_id; ?>";
				//alert(id);
				$('#img_loading1').show();
				$("#main").css({"opacity": "0.3"});;
				$.ajax({	
				type: "GET",
				contentType: "application/json",
				dataType: 'html', 
			    //data: datas,
				beforeSend : function(xhr) {          
					xhr.setRequestHeader("X-SESSION_ID" , id)
				  },
				url : "http://askfastmarket1.appspot.com/accounts/groups",
				cache: false,
				crossDomain: true,
				xhrFields: {
				withCredentials: true
				},
				success: function (data) {
				var counterLoop = 0;
				var strHtml = '';
				obj = JSON.parse(data);
				arrlength = obj.length;
				//alert(arrlength);
					for (var i=1; i<arrlength; i++)
						{	
					//obj = JSON.parse(data);
					ctid = obj[i].id;
					//alert(ctid);					
					
					 $.ajax({	
					type: "GET",
					contentType: "application/json",
					dataType: 'html', 
				//	data: datas,
					beforeSend : function(xhr) {          
						xhr.setRequestHeader("X-SESSION_ID" , id)
					  },
					url : "http://askfastmarket1.appspot.com/accounts/groups/"+ctid,
					//alert(url);
					cache: false,
					crossDomain: true,
					xhrFields: {
					withCredentials: true
					},
					success: function (data) {
					// alert(data+"info");
					 obj = JSON.parse(data);
					  //alert(obj.name);
					 if(obj.name)
					 {
						grpname = obj.name;
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
					 
					if(counterLoop%2 == 0){
					 var myclass = "class='contact-name2'";
					 }else{
					 var myclass = "class='contact-name1 contact-name2'";
					 }
					 if(gpname != '')
					 {
					strHtml += "<p "+myclass+"><span>"+gpname+"</span><span>Reaching Media</span><span>Keywords</span><span><span><input type='button' class='edit1' onclick='updategrp()' value=''></span><span style='padding-left:35px;'><img alt='' onclick='delgroup("+obj.id+")' src='images/close.png'></span><span style='padding-left:24px;'><input type='button' class='dupli' onclick='duplicategrp()' value=''></span></span></p>"; 
					 }
					$("#contact-name").html(strHtml);
					$('#img_loading1').hide(); 
					$("#main").css({"opacity": ""});
					
					}
				})
					
			}
		}
				
	})
}

function changeparent()
{
//alert("hello");
	document.getElementById("prnt").checked = false;
	var count=0;var count1='';
	
	$("input:checkbox").each(function()
		{
				var $this = $(this); 
				if($this.is(":checked"))
					{
						checkboxes=$this.attr("id");
						c=checkboxes.split("_");
						//alert(c[1]);
						if(c[1]>=11)
							{
								count++;
							}
					}
		});
				//alert(count);
		count1 +="<h2>Selected contacts ("+count+")</h2>";
		$('#countcount').html(count1);
				
				
}
	
function selectall(source) 
{
  checkboxes = document.getElementsByName('chkbox');
  var count=0;var count1='';
  for(var i=0, n=checkboxes.length;i<n;i++) 
	  {
		count++;
		checkboxes[i].checked = source.checked;
	  }
  		if($(source).is(':checked'))
			{
				count1 +="<h2>Selected contacts ("+count+")</h2>";
				$('#countcount').html(count1);
			}
		if(!$(source).is(':checked'))
			{
				count1 +="<h2>Selected contacts (0)</h2>";
				$('#countcount').html(count1);
			}
		
}
	//show group
	
	//Add Groups
function addgrp(){
	
		var fsv = ''; 
		var rndid = Math.floor(Math.random() * (9999 - 100 + 1)) + 1;
		var gpname = $('#group_name').val();

		if (gpname == '' ){
			alert("Group Name cannot be empty.");
			return false;
		}
		
		var conid = 1;
		var allID = '';
		var seprate = ',';
		
		var no = $('#hdn_total_no').val();
		
		for (i=1; i<=no; i++){
			conid =  $('#contactID_'+i).val();
			
			if (conid == ''){
				alert("Contact "+i+" cannot be empty.");
				return false;
			}
			
			if(isNaN(conid))
			{
				alert("Contact "+i+" is not an integer.");
				return false;
			}
			
			if (i == no ){
				seprate = '';
			}
			
			allID += conid+seprate; 
 		}

		var id = "<?php echo $session_id; ?>";
		
		 datasinfo = '{"contactInfoIds": ['+allID+'],"id":'+rndid+',"name":"'+gpname+'" }'; 

		// alert(datasinfo);
			
		$('#img_loading1').show();
		$("#main").css({"opacity": "0.3"});
		$.ajax({ 
			type: "POST",
			contentType: "application/json",
			dataType: 'json', 
			data: datasinfo,
			//data: datas,
			beforeSend : function(xhr) {          
				xhr.setRequestHeader("X-SESSION_ID" , id)
			  },
			url : "http://askfastmarket1.appspot.com/accounts/groups",
			cache: false,
			crossDomain: true,
			xhrFields: {
			withCredentials: true
			},
			success: function (data) {

				
	     	        /*$.ajax({	
				type: "GET",
				contentType: "application/json",
				dataType: 'html', 
				//data: datas,
				beforeSend : function(xhr) {          
					xhr.setRequestHeader("X-SESSION_ID" , id)
				  },
				url : "http://askfastmarket1.appspot.com/accounts/groups",
				cache: false,
				crossDomain: true,
				xhrFields: {
				withCredentials: true
				},
				success: function (data) {
				var counterLoop = 0;
				var strHtml = '';
				obj = JSON.parse(data);
				arrlength = obj.length;
				//alert(arrlength);
					for (var i=1; i<arrlength; i++)
						{	
					//obj = JSON.parse(data);
					ctid = obj[i].id;
					//alert(ctid);					
					
					 $.ajax({	
					type: "GET",
					contentType: "application/json",
					dataType: 'html', 
				//	data: datas,
					beforeSend : function(xhr) {          
						xhr.setRequestHeader("X-SESSION_ID" , id)
					  },
					url : "http://askfastmarket1.appspot.com/accounts/groups/"+ctid,
					//alert(url);
					cache: false,
					crossDomain: true,
					xhrFields: {
					withCredentials: true
					},
					success: function (data) {
					// alert(data+"info");
					 obj = JSON.parse(data);
					  //alert(obj.name);
					 if(obj.name)
					 {
						grpname = obj.name;
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
					 
					if(counterLoop%2 == 0){
					 var myclass = "class='contact-name2'";
					 }else{
					 var myclass = "class='contact-name1 contact-name2'";
					 }
					 if(gpname != '')
					 {
					strHtml += "<p "+myclass+"><span>"+gpname+"</span><span>Reaching Media</span><span>Keywords</span><span><span><input type='button' class='edit1' onclick='updatecnt()' value=''></span><span style='padding-left:35px;'><img alt='' onclick='delgroup("+obj.id+")' src='images/close.png'></span><span style='padding-left:24px;'><input type='button' class='dupli' onclick='duplicategrp()' value=''></span></span></p>"; 
					 }
					$(".contact-name").html(strHtml);
					$('#img_loading1').hide(); 
					$("#main").css({"opacity": ""});
					}
				})
					
					}
				}
				
				})*/
				
				console.log(data);
	
				var strhtml = "<span id=Gcontact_"+rndid+" ><div class='football'> <div class='football-left'><div class='footbal'><h6 id='Gheading_edit_"+rndid+"'>"+gpname+"</h6><p><i>Group</i></p></div><div class='three-img'><img src='images/phone.png' alt=''><img src='images/latter1.png' alt=''><img src='images/at1.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Gdone_id_"+rndid+"' onclick='updateGroup("+obj.id+","+rndid+");' style='display:none;'><input class='edit1' id='Gedit_edit_"+rndid+"' value='' type='button' onclick='showGroupBtn("+obj.id+","+rndid+")'><input type='hidden' id='gname_"+rndid+"' value='"+gpname+"'></div><div class='close123'><img src='images/cancel.png' id='Gcancel_id_"+rndid+"' onclick='hide_divGroup("+rndid+");' style='display:none;'><a href='javascript:' onclick='delGroup("+obj.id+","+rndid+")' id='Gdel_"+rndid+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=GroupEdit_"+rndid+" ></span></div></span>";	
					
					
				$('#div_groups').after(strhtml);
				$('#img_loading1').hide();
				$("#main").css({"opacity": ""});
				$('#popupContact2').hide(); 
				$('#background_load').hide();
				
				
			},
			
			error : function(e){
				console.log('error = '+e);
			} 
	
		});
		
}
	
	//Add Groups
function testbrod(){
	var brname=document.getElementById("bname").value;
	var sms = document.getElementById('checkbox_1');
	// in case sms is checked
	if (sms.checked){
		var sid=document.getElementById("sid").value;
  	}else{
		var sid='';
  	}
	var email = document.getElementById('checkbox_2');
	// in case email is checked	
	if (email.checked){
		var semail=document.getElementById("semail").value;
		var emailsbjt=document.getElementById("emailsbjt").value;
  	}else{
		var semail='';
		var emailsbjt='';
  	}
	var voicebroadcast = document.getElementById('checkbox_6');
	// in case voice is checked
	if (voicebroadcast.checked){
		//var clrid=document.getElementById("clrid").value;
  	}else{
		var clrid='';
  	}
	var textarea=document.getElementById("textarea").value;
	var from_file = document.getElementById('checkbox_3');
	var from_contactbook = document.getElementById('checkbox_4');
	var from_manual = document.getElementById('checkbox_5');
	if (from_manual.checked){
		var rname=document.getElementById("rname").value;
		var rmobile=document.getElementById("rmobile").value;
		var rlline=document.getElementById("rlline").value;
		var remail=document.getElementById("remail").value;
  	}else{
		var rname='';
		var rmobile='';
		var rlline='';
		var remail='';
  	}
	url="http://askfastmarket1.appspot.com/login?username=yasir&password=a78a9b37dce265aa2e87ca6db3e1d287";
				$.post(url,function(session){
				var jasonValue = JSON.stringify(session) ; 
			    var n=jasonValue.replace('{"X-SESSION_ID":"',"");
			 var id=n.replace('"}',"");	
				/*data = {
						   "retryMethod": "Auto",
						   "retryLimit": 3,
						   "isPersisted": 'true' ,
						   "message": "hello test message",
						   "phoneNumbers": [
							   "1234567890",
							   "0123456789"
						   ]
}*/

				datas = {
							"contactInfo": "1234567890",
							"firstName": "Test",
							"lastName": "Customer",
							"contactInfoTag": "Name|Phone|Email|Fax|Address|PURCHASED_NUMBER|Other",
							"label" : "Office",
 						}
						
				$.ajax({	
						type: "GET",
						contentType: "application/json",
						dataType: 'html', 
						beforeSend : function(xhr) {          
							xhr.setRequestHeader("X-SESSION_ID" , id)
						  },
						url : "http://askfastmarket1.appspot.com/accounts/groups",
						cache: false,
						crossDomain: true,
						xhrFields: {
						withCredentials: true
						},
			success: function (data) {
						//	alert(data);
				}
				})
/*		data = {
		"brname":brname,
		"semail":semail,
		"emailsbjt":emailsbjt,
		"textarea":textarea,s
		"rname":rname,
		"rmobile":rmobile,
		"rlline":rlline,		
		"remail":remail
		};*/
		//document.cookie=session;
				});
	}
	
	$(document).ready(function() {
    $('.bool-slider .inset .control').click(function() {
        if (!$(this).parent().parent().hasClass('disabled')) {
            if ($(this).parent().parent().hasClass('true')) {
                $(this).parent().parent().addClass('false').removeClass('true');
				$(this).parent().parent().addClass('false').removeClass('true');
				
            } else {
                $(this).parent().parent().addClass('true').removeClass('false');
            }
        }
    });
});
	
</script>
<title>Broad Cast</title>
<!-- Bootstrap core CSS -->
<link href="css/bootstrap.css" rel="stylesheet" type="text/css">
<link href="css/starter-template.css?v=1.2" rel="stylesheet" type="text/css">


<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>



      <script src="../../assets/js/html5shiv.js"></script>



      <script src="../../assets/js/respond.min.js"></script>



    <![endif]-->
	<style>
	.bool-slider 
{
         border: 1px solid #CCC;
    color: #FFF;
	float: left;
    font-size: 18px;
    font-weight: 800;
    font-family: Helvetica, Verdana, Arial, sans-serif;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    margin: 5px 0 0;
    height: 35px;
    width: 100px;
    border-radius: 25px;
}
#autoUpdate6 label {
    float: left;
    margin: -22px 15px 0 123px;
}

.bool-slider.true .inset
{
    background-color: #51a351;
        *background-color: #499249;
    background-image: linear-gradient(top, #62c462, #51a351);
    background-repeat: repeat-x;
    border-color: #51a351 #51a351 #387038;
    border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
        background-image: none;
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05);
}
.bool-slider.true .inset .control{float: left;}
.bool-slider.true .inset .control:after
{
    content: 'On';
    position: relative;
    right: -135%;
    top: 20%;
}

.bool-slider.false .inset
{
    background-color: #da4f49;
    *background-color: #bd362f;
    background-image: linear-gradient(top, #ee5f5b, #bd362f);
    background-repeat: repeat-x;
    border-color: #bd362f #bd362f #802420;
        border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
        background-image: none;
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05);
}
.bool-slider.false .inset .control{float: right;}
.bool-slider.false .inset .control:before
{
    content: 'Off';
    position: relative;
    left: -100%;
    top: 20%;
}

.bool-slider .inset
{
    width: 100%;
    height: 100%;
    border-radius: 20px;
    
}

.bool-slider .inset .control
{
    background-color: #000;
    width: 40%;
    height: 100%;
    border-radius: 20px;
    background-color: #f5f5f5;
    *background-color: #e6e6e6;
    background-image: linear-gradient(top, #ffffff, #e6e6e6);
    background-repeat: repeat-x;
}

.bool-slider .inset .control:hover
{
    cursor: pointer;
}

.bool-slider.disabled
{
    color: #CCC;
}

.bool-slider.disabled .inset
{
  background-color: #f5f5f5;
  *background-color: #e6e6e6;
  background-image: linear-gradient(top, #ffffff, #e6e6e6);
  background-repeat: repeat-x;
}
.settext {
    color: #FFFFFF;
    font-size: 16px;
    left: 417px;
    position: absolute;
    top: 575px;
    width: 348px;
}

.bool-slider.disabled .control
{
    cursor: default;
}
	</style>
</head>
<body>



<div id="main">
  <!--====================== Header Starts==========================-->
  <div class="col-md-12">
    <div class="logo"> <a href="#"><img src="images/logo_img.png" alt=""></a> </div>
  	<div class="pull-right">
    

 <div class="btn-group login_logout">
    <a class="btn btn-primary" href="#"><span class="glyphicon glyphicon-user" style="text-align:left; display:inline-block; float:none;"></span>Hi, <?php echo $session_user; ?></a>
    <a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>
    
    <ul class="lftg dropdown-menu">
    
    
    <li><a href="#"><span class="glyphicon glyphicon-list-alt" style="text-align:left; display:inline-block; float:none;"></span> Account Details</a></li>
    <li><a href="#"><span class="glyphicon glyphicon-wrench"></span>Account Settings</a></li>
    <li><a href="javascript:" onClick="logout();"><span class="glyphicon glyphicon-off" style="text-align:left; display:inline-block; float:none;"></span>Sign Out</a></li>
    <!--<li class="divider"></li>
    <li><a href="#"><i class="i"></i> Make admin</a></li>-->
    
    </ul>
    
    </div>
    
    </div>
  </div>
  <!--====================== Header Ends==========================-->
  <div class="tab-content" id="myTabContent">
    <!--================ container_1_start ===============-->
    <div id="word" class="container active tab-pane">
      <form action="" method="post">
	  
	  
        <!--================ row_1_start ===============-->
        <div class="row">
			
          <div class="col-md-12"> <!--<span style="padding-left:10px; float: right;">
            <input  class="add" type="button"  onClick="logout()" value="Logout">
            </span>-->
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
              <input type="text" id="bname" name="bname" placeholder="ASK-Fast New discount offer" required/>
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
                      <input class="ask_fast" type="number" id="sid" name="sid" required placeholder="ASK-Fast"/>
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
                        <input class="ask_fast" type="email" id="semail" name="semail"  placeholder="info@ask-fast.com" required  />
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
                      <div class="subject_id" id="autoUpdate6" style="display:none;">
                        <label>Caller ID:</label>
                        <div class="bool-slider true">
    						<div class="inset">
        					<div class="control"></div>
    						</div>
						</div>
						<div class="settext">Receivers are able to see the phone numbers of Broadcast. By turning this off,<br/>receivers are not able to see the phone numbers of your broadcast</div>
                      </div>
                      <div class="clear"></div>
                    </div>
                    <div class="clear"></div>
                  </div>
                  <div class="message">
                    <h1>3 MESSAGE</h1>
                  </div>
                  <div class="text_aria_main" style="padding-top:22px;">
                    <!--================ Alert Starts ===============-->
                    <div class="alert vanish alert-warning alert-dismissable" style="margin-left:10px;text-align:left;">
                      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                      You reached second SMS which will increase the cost of broadcasting. </div>
                    <!--================ Alert Ends ===============-->
                    <span class="scnmes"></span>
                    <textarea maxlength="155" id="textarea" name="textarea" placeholder="50 percentage discount is waiting for your business."> </textarea>
                    <label id="textarea_feedback"></label>
                  </div>
                  <!--<div class="email">
                    <div style="display:none;" class=" apish sms_bg">
                      <div class="email_text">
                        <input class="flebg" type="file" title="Upload a Voice File">
                      </div>
                      <div class="clear"></div>
                    </div>
                    <div class="clear"></div>
                  </div>-->
				  
				  
				  
				  <div class="email">
                    <div class="sms_bg">
                     <div class="language">
       <span>Language:</span>
       <select class="language1">
  		<option value="English">English</option>
  		<option value="French">French</option>
  		<option value="German">German</option>
	   </select>
      </div>  
      
      <div class="upload1_file1">
      <a href="#">Upload a Voice File</a>
                       
                       </div>
                    <div class="clear"></div>
                    </div>
                    <div class="clear"></div>
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
                    <h1>Manual entry</h1>
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
                        <label>Name</label>
                        <input type="text"  id="rname" name="rname" required value="">
                        <div class="clear"></div>
                      </div>
                      <div class="entry">
                        <label>Mobile Number</label>
                        <input type="number" id="rmobile" name="rmobile" maxlength="15" required value="">
                        <div class="clear"></div>
                      </div>
                      <div class="entry">
                        <label>Landline Number</label>
                        <input type="tel"  id="rlline" name="rlline" required value="">
                        <div class="clear"></div>
                      </div>
                      <div class="entry">
                        <label>E-mail contact</label>
                        <input type="email"  id="remail" name="remail" required value="">
                        <div class="clear"></div>
                      </div>
                    </div>
                    <div class="the_added">
                      <p> The added contact will be saved to your contact book. You can use it, other products of ASK-Fast without any action. </p>
                      <input type="submit" value="Upload from PC" class="add_contact">
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
                      <!--<div class="ahmet"> <span>Contact 2</span> <span class="icon"><img src="images/at.png" alt="latter" /><img src="images/latter.png" alt="latter" /></span>
                        <div class="clear"></div>
                      </div>
                      <div class="ahmet"> <span>Contact 3</span> <span class="icon"><img src="images/at.png" alt="latter" /><img src="images/latter.png" alt="latter" /></span>
                        <div class="clear"></div>
                      </div>-->
                    </div>
                    <div class="selected1" id="autoUpdate8" style="display:none;">
                      <h2>Selected groups (2)</h2>
					  <div class="group">
                      <input id="checkbox_10" type="checkbox" name="" />
                      Select all groups </div>
                      <div class="ahmet"> <span>Ahmet Bektes</span> <span class="icon"><img src="images/twtter.png" alt="latter" /><img src="images/at.png" alt="latter" /><img src="images/latter.png" alt="latter" /></span>
                        <div class="clear"></div>
                      </div>
                      <div class="ahmet"> <span>Contact 2</span> <span class="icon"><img src="images/at.png" alt="latter" /><img src="images/latter.png" alt="latter" /></span>
                        <div class="clear"></div>
                      </div>
                      <div class="ahmet"> <span>Contact 3</span> <span class="icon"><img src="images/at.png" alt="latter" /><img src="images/latter.png" alt="latter" /></span>
                        <div class="clear"></div>
                      </div>
                    </div>
                  </div>
                  <div class="save_broadcast">
                    <div class="save_button">
                      <input type="submit" class="sbmit123" value="Save Broadcast" onClick="AddBroadcast()">
                    </div>
                  </div>
                </div>
                <div class="test_broad">
                  <div class="save_button_2">
                    <input type="submit" class="sbmit123" onClick="AddBroadcast()" value="Test Broadcast">
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
    <!---=========================row2=====================-->
    <div id="word2" class="container tab-pane">
    
      <!-- <form action="" method="post">-->
      <!--================ row_1_start ===============-->
      
    </div>
    <!--================ row_1_End ===============-->
    <div id="word222222" class="container tab-pane">
    <form action="" method="post">
		<!--================ row_1_start ===============-->
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
				<div class="football23">
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
						<!--<div class="details">
							<input class="details1" type="button" value="">
						</div>-->
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
						<!--<div class="details">
							<input class="details1" type="button" value="">
						</div>-->
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
						<!--<div class="details">
							<input class="details1" type="button" value="">
						</div>-->
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
						<!--<div class="details">
							<input class="details1" type="button" value="">
						</div>-->
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
						<!--<div class="details">
							<input class="details1" type="button" value="">
						</div>-->
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
						<!--<div class="details">
							<input class="details1" type="button" value="">
						</div>-->
						<div class="edit">
							<input class="download4" type="button" value="">
						</div>
						<div class="close123">
							<a href="#"><img src="images/close.png" alt="" /></a>
						</div>
					</div>
				<div class="clear"></div>
				</div>
				
				
				<!--<div class="football">
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
						<div class="details">
						
						<div class="edit">
							<input class="download4" type="button" value="">
						</div>
						<div class="close123">
							<a href="#"><img src="images/close.png" alt="" /></a>
						</div>
					<div class="clear"></div>
					</div>
				<div class="clear"></div>
				</div>-->
				<!--<div class="box">
					<span>Broadcast Name</span><span>Status of Broadcast</span><span>Major media type</span><span>Actions</span>
				<div class="clear"></div>
				</div>-->
				<!--<div class="bro">
				<div class="broadcast">
					<div class="broadcast1">
						<span>Broadcast 1</span>
						<span class="u37"><img src="images/u37.png" alt="mail"><img src="images/u37.png" alt="mail"></span>
					</div>
					<div class="duplicate">
						<input class="duplicate1" type="button" value="Duplicate">
						<input class="duplicate1" type="button" value="Delete">
						<input class="duplicate1" type="button" value="Edit">
					</div>
				<div class="clear"></div>
				</div>
				
				<div class="broadcast123">
					<div class="broadcast1">
						<span>Broadcast 1</span>
						<span class="u37"><img src="images/u37.png" alt="mail"><img src="images/u37.png" alt="mail"></span>
					</div>
				<div class="clear"></div>
				</div>
				
				
				<div class="broadcast">
					<div class="broadcast1">
						<span>Broadcast 1</span>
						<span class="u37"><img src="images/u37.png" alt="mail"><img src="images/u37.png" alt="mail"></span>
					</div>
				<div class="clear"></div>
				</div>
				<div class="clear"></div>
				</div>-->
				<div class="clear"></div>
				</div>
			</div>
		<div class="clear"></div>
		</div>

		<!--================ row_1_End ===============-->
		</form>	
    </div>
    <!--</form>	-->
    <!---=========================row3=====================-->
    <!---=========================row6=====================-->
	
    <div id="word6" class="container  tab-pane" style="display:none;">
      <form action="" method="post">
        <!--================ row_1_start ===============-->
        <div class="row" >
          <div class="col-md-12" >
            <div class="contact"  id="btn_show">
              <h1 style=" color:#000; width:100%;">Hi, <?php echo $session_user; ?> </h1>
              <br>
              <h1>Groups</h1>
              <span style="padding-left:10px;">
              <input  class="add" type="button"  onClick="logout()" value="Logout">
              </span> <span>
              <input id="np" class="add" type="button"  onClick="showadd()" value="Add a Group">
              </span>
              <div class="clear"></div>
            </div>
            <div class="box"> <span>Group Name</span><span>Reaching Media</span><span>Keywords</span><span>Actions</span>
              <div class="clear"></div>
            </div>
            <div class="contact-name" id="contact-name">
              <!--					<p class="contact-name1">Contact Name 1</p>
					<p>Contact Name 2</p>
					<p class="contact-name1">Contact Name 3</p>-->
              <div class="clear"></div>
            </div>
          </div>
        </div>
        <!--================ row_1_End ===============-->
        <div class="row" >
          <div id="add" style="display:none;" class="col-md-12">
            <div class="contact"> <span>
              <input class="add" type="button" onClick="addgrp()" value="Add a Group">
              </span>
              <div class="clear"></div>
            </div>
            <div class="u17" id="add_btn_hide"> <img src="images/image_u17.png" alt="" /> </div>
            <div class="shortage123">
              <div class="shortage">
                <h3>Ahmet Bektes</h3>
                <p>Shortags</p>
                <input class="work" type="button" value="Work">
                <input class="work" type="button" value="Sportcenter">
                <img src="images/u167.png" alt="" />
                <div class="clear"></div>
              </div>
              <div class="mobile"> <span>
                <p>Group Name:</p>
                <input class="mobile123" id="gpname" name="gpname" type="text" value="">
                </span> <span class="u167"><img src="images/u167.png" alt="" /></span>
                <div class="clear"></div>
                <span>
                <p>Contact_1:</p>
                <input class="mobile123" id="ctn_1" name="ctn_1" type="text" value="">
                </span>
                <div class="clear"></div>
                <span>
                <p>Contact_2:</p>
                <input class="mobile123" id="ctn_2" name="ctn_2" type="text" value="">
                </span>
                <div class="clear"></div>
                <span>
                <p>Contact_3:</p>
                <input class="mobile123" id="ctn_3" name="ctn_3" type="text" value="">
                </span>
                <div class="clear"></div>
                <span>
                <p>Contact_4:</p>
                <input class="mobile123" id="ctn_4" name="ctn_4" type="text" value="">
                </span>
                <div class="clear"></div>
                <span>
                <p>Contact_5:</p>
                <input class="mobile123" id="ctn_5" name="ctn_5" type="text" value="">
                </span>
                <div class="clear"></div>
                <div class="clear"></div>
                <!--                      <span>
                      <p>Filename:</p>
                      <input type="file" name="file" id="attachment">
                     </span> <span class="u167"><input type="button" onClick="fileup()" name="ufile" value="Upload"></span>
                     <div class="clear"></div>
                     <div class="clear"></div>-->
              </div>
              <div class="fb-icon"> <a href="#"><img src="images/u41.png" alt="" /></a> <a href="#"><img src="images/u43.png.ico" alt="" /></a> <a href="#"><img src="images/u45.png" alt="" /></a> </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <!---=========================row6=====================-->
	<div id="google_login" style="display:none"></div>
    <!---=========================row5=====================-->
    <div id="word5" class="container  tab-pane" style="display:none;">
      <!--================ row_1_start ===============-->
      <div class="row" >
        <div class="col-md-12" >
          <div class="list">
            <h1>CONTACT BOOK</h1>
            <p>&nbsp;</p>
            <div class="clear"></div>
          </div>
          <div class="list_search">
            <form action="" method="post">
              <input class="list_search123" type="text" placeholder="search box">
              <input class="list_search1234" type="submit" value="">
            </form>
          </div>
          <div class="squaredFour">
            <input id="demo_box_1" class="css-checkbox" type="checkbox" checked="checked" onClick="chk_showContact();" />
            <label for="demo_box_1" name="demo_lbl_1" class="css-label">INDIVIDUALS</label>
          </div>
          <div class="squaredFour">
            <input id="demo_box_2" class="css-checkbox" type="checkbox" checked="checked" onClick="chk_showContact();" />
            <label for="demo_box_2" name="demo_lbl_1" class="css-label">GROUPS</label>
          </div>
          <div class="navbar navbar-static">
            <div class="navbar-inner">
              <ul role="navigation" class="nav">
                <li class="dropdown"> <a href="#" data-toggle="dropdown" class="dropdown-toggle">Add contact<b class="caret"></b></a>
                  <ul class="dropdown-menu">
                    <li><a href="javascript:" onClick="manual_EntryIndividual();">Manual Entry Individual</a></li>
                    <li><a href="javascript:" onClick="manual_EntryGroup();">Manual Entry Group</a></li>
                    <li><a href="javascript:" onClick="upload_csv_file();">Upload from a csv file</a></li>
                    <li><a href="#">Import from Facebook</a></li>
                    <li><a href="javascript:" onClick="GoogleLogin();">Import from Google</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <!--================ row_1_End ===============-->
          <div class="clear"></div>
          <div id="show_individuals">
            <div class="date">
              <h2>Individuals</h2>
              <div class="clear"></div>
            </div>
			<div id="emptycontactlist">Your contact list is empty.</div>
            <div id="div_individuals"> </div>
          </div>
          <div id="show_groups">
            <div class="date">
              <h2>Groups</h2>
              <div class="clear"></div>
            </div>
			<div id="emptyGrouplist">Your group list is empty.</div>
            <div id="div_groups"> </div>
          </div>
          <div class="clear"></div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
    <!---=========================row5=====================-->
    <div id="word4" class="container tab-pane">
      <form action="" method="post">
        <!--================ row_1_start ===============-->
        <div class="row">
            <div class="reports1" style="display:none"> </div>
          </div>
        </div>
      </form>
    </div>
    <!---=========================row4=====================-->
  </div>
  <!-- /.container -->
  <!--================ container_1_End ===============-->
  <div class="left_icon">
    <ul>
      <li><a  data-toggle="tab" href="#word"><img src="images/active_img.png" height="100%" onClick="word_1()" width="100%" alt="new"></a></li>
      <li><a data-toggle="tab" href="#word2"><img src="images/broadcast.png" height="100%" onClick="word_2()" width="100%" alt="new"></a></li>
      <li class="clk"><a data-toggle="tab" href="#word5"><img src="images/coctactbook.png" onClick="showcnt()" height="100%" width="100%" alt="new"></a> </li>
      <li><a data-toggle="tab" href="#word4"><img src="images/report.png" height="100%" onClick="word_4()" width="100%" alt="new"></a></li>
    </ul>
    <div class="clear"></div>
  </div>
  
  <div id="popupContact" class="popupContactJournal" style="z-index:9000;display:none;">
    <div class="container tab-pane" style="padding-left: 17px !important;">
      <form action="" method="post">
        <!--================ row_1_start ===============-->
        <div class="row">
          <div class="col-md-12">
            <div class="login-page-manual">
              <div class="inner-login-manual">
                <div class="top-heading-manual">
                  <div class="heading-manual">
                    <h1>MANUAL ENTRY INDIVIDUAL</h1>
                  </div>
                  <a id="popupContactClose">
                  <div class="close12345-manual"> <img src="images/u36.png.ico" alt=""> </div>
                  </a>
                  <div class="clear"></div>
                </div>
                <div class="login-page-inner-manual">
                  <div class="inner-login-img-manual"> <img src="images/manual-img.png" alt=""> </div>
                  <div class="inner-login-fild-manual"> <span>Name:</span>
                    <input class="inner-login-fild1-manual" type="text" id="fr_name" name="fr_name" value="" maxlength="20" onKeyPress="return isCharKey(event)">
                    <span class="plus-manual">&nbsp;</span>
                    <div class="clear"></div>
                    <span>Surname:</span>
                    <input class="inner-login-fild1-manual" id="srname" name="srname" type="text" value="" maxlength="20" onKeyPress="return isCharKey(event)">
                    <span class="plus-manual">&nbsp;</span>
                    <div class="clear"></div>
                    <span>Mobile:</span>
                    <input class="inner-login-fild1-manual" type="text" id="mob" name="mob" value="" maxlength="20" onKeyPress="return isNumberKey(event)">
                    <span class="plus-manual"><img src="images/plus.png" alt=""></span>
                    <div class="clear"></div>
                    <span>Landline:</span>
                    <input class="inner-login-fild1-manual" type="text" id="ldnum" name="ldnum" value="" maxlength="20" onKeyPress="return isNumberKey(event)">
                    <span class="plus-manual">&nbsp;</span>
                    <div class="clear"></div>
                    <span>E-mail:</span>
                    <input class="inner-login-fild1-manual" id="email_man" name="email_man" type="text" value="" maxlength="20" >
                    <span class="plus-manual"><img src="images/plus.png" alt=""></span>
                    <div class="clear"></div>
                    <div class="add-contact1-manual">
                      <input class="add-contact-manual" id="add_contant" type="button" onClick="addcnt();"  value="Add Contact">
                      <div class="clear"></div>
                    </div>
                  </div>
                  <div class="clear"></div>
                </div>
              </div>
              <div class="clear"></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  
  
  <div id="popupContact2" class="popupContactJournal" style="z-index:9000;display:none;">
    <div class="container tab-pane" style="padding-left: 17px !important;">
      <form action="" method="post">
        <!--================ row_1_start ===============-->
        <div class="row">
          <div class="col-md-12">
            <div class="login-page-manual" style="padding-bottom: 18px;" >
              <div class="inner-login-manual" id="scrol_plus" style=" height: 430px;overflow:auto;">
                <div class="top-heading-manual">
                  <div class="heading-manual">
                    <h1>MANUAL ENTRY GROUP</h1>
                  </div>
                  <a id="popupContactClose2">
                  <div class="close12345-manual"> <img src="images/u36.png.ico" alt=""> </div>
                  </a>
                  <div class="clear"></div>
                </div>
                <div class="login-page-inner-manual">
                  <div class="inner-login-img-manual" > <img src="images/manual-img.png" alt=""> </div>
                  <div class="inner-login-fild-manual"> <span>Name:</span>
                    <input class="inner-login-fild1-manual" type="text" id="group_name" placeholder="Group Name" name="group_name" value="">
                    <span class="plus-manual">&nbsp;</span>
                    <div class="clear"></div>
                    
                    <span>Contact ID:</span>
                    <input class="inner-login-fild1-manual" type="text" id="contactID_1" name="contactID_1" value="" placeholder="eg: 46">
                    <span class="plus-manual" id="group_plus_1"><img src="images/plus.png" alt="" onClick="add_contactid(1);"></span>
                    <div class="clear"></div>
                    
                    <div id="apend_contactid" ></div>

                    <div class="add-contact1-manual">
                    <input type="hidden" id="hdn_total_no" value='1' >
                      <input class="add-contact-manual" id="add_group_manual" type="button" onClick="addgrp();"  value="Add Group">
                      <div class="clear"></div>
                    </div>
                  </div>
                  <div class="clear"></div>
                </div>
              </div>
              <div class="clear"></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  <div id="popupContact3" class="popupContactJournal" style="z-index:9000;display:none; left: 164.5px;">
    <div class="container tab-pane" style="padding-left: 0 !important;">



	 <form action="" method="post">



		<!--================ row_1_start ===============-->




		<div class="row">



			<div class="col-md-12">
				<div class="login-page-manual">
					<div class="inner-login123456-manual">
						<div class="top-heading-manual">
							<div class="heading-manual">
								<h1>UPLOAD FROM CSV FILE</h1>
							</div>
							<a id="popupContactClose3">
							<div class="close123456-manual">
								<img src="images/u36.png.ico" alt="">
							</div>
							</a>
						<div class="clear"></div>
						</div>
						<div class="upload">
							<div class="speed-upload">
								<p>You can speed up adding contact action by using csv format files. Please indicate which csv files format do you have?</p>
							</div>
							<div class="speed-upload1">
								<div class="speed-upload123 active123">
								 <a href="#"><img src="images/upload1.png" alt=""></a>
								</div>
								<div class="speed-upload1231 active1231">
								 <a href="#"><img src="images/upload2.png" alt=""></a>
								</div>
								<div class="speed-upload1232 active1232">
								 <a href="#"><img src="images/upload3.png" alt=""></a>
								</div>
								<div class="speed-upload1233 active1233">
								 <a href="javascript:" onClick="fileup();"><u>advanced csv options</u></a>
								</div>
							   <div class="clear"></div>
							   </div>
							<div id="add_contect_btn" class="upload-butan">
									<input class="upload1-butan" type="submit" value="Add Contact">
								<div class="clear"></div>
								</div>
						<div class="clear"></div>
						</div>
						<div id="uploading_hed" class="uploadin10">
							<p class="uploadin101">uploading</p>
							<p>Our system found 123 individual contact entry in this file.<br>All of them added to your contactbook.</p>
						</div>
						<div id="status_bar" class="uploadin10" style="display:none;">
							<p class="uploadin101">uploading. 10%</p>
						</div>
						
						<div id="disply_fileform" class="upload" style="display:none;">
							<div class="speed-upload1">
								<p>We are also supporting customized csv format.<br>Please enter value head before start uploading.</p>
							</div>
							<div class="upload-fild1">
								<span>Name:</span>
								<input class="upload-fild123" type="text" value=""  onkeypress="return isCharKey(event)">
								<div class="clear"></div>
								<span>Surname:</span>
								<input class="upload-fild123" type="text" value=""  onkeypress="return isCharKey(event)">
								<div class="clear"></div>
								<span>Mobile:</span>
								<input class="upload-fild123" type="text" value="" onKeyPress="return isNumberKey(event)">
								<div class="clear"></div>
								<span>Landline:</span>
								<input class="upload-fild123" type="text" value=""  onkeypress="return isNumberKey(event)">
								<div class="clear"></div>
								<span>E-mail:</span>
								<input class="upload-fild123" type="text" value="">
								<div class="clear"></div>
							</div>
						<div class="clear"></div>
						
						</div>
						<div id="open_addcontact" class="upload-butan">
									<input class="upload1-butan" type="submit" value="Add Contact">
								<div class="clear"></div>
								</div>
					</div>
				<div class="clear"></div>
				</div>		
			</div>
			
			
		</div>
		
		
		
	</form>
	
	
	
	</div>
    </div>
  
  <div id="background_load" class="background-loader bck-color"  > </div>
  <!-- Bootstrap core JavaScript



    ================================================== -->
  <!-- Placed at the end of the document so the pages load faster -->
  <script src="js/jquery.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/tab.js"></script>
  <script src="js/file.js"></script>
  <script src="js/limit.js"></script>
  <script type="text/javascript">



$( document ).ready(function() 

{

	

var ele = $(this).find('input');

		if(ele.is(':checked'))
	
		{
	
			ele.removeAttr('checked');
	
}	
	


$('.starter-template').click(function(){    



			if($('#checkbox_1').is(":checked")){
				$('#autoUpdate').show();
			}
			if($('#checkbox_1').is(":not(:checked)")){
				$('#autoUpdate').hide();
  			}
			if($('#checkbox_2').is(":checked")){
				$('.to2').show();
			}
			if($('#checkbox_2').is(":not(:checked)")){
				$('.to2').hide();
			}
	 		if($('#checkbox_3').is(":checked")){
				$('#autoUpdate3').show();
			} 
 			if($('#checkbox_3').is(":not(:checked)")){
				$('#autoUpdate3').hide();
			} 
	 		if($('#checkbox_4').is(":checked")){
				$('#autoUpdate4').show();
			} 
 			if($('#checkbox_4').is(":not(:checked)")){
	    		$('#autoUpdate4').hide();
			}	 
	 		if($('#checkbox_5').is(":checked")){
				$('#autoUpdate5').show();
		 	} 
 			if($('#checkbox_5').is(":not(:checked)")){
	    		$('#autoUpdate5').hide();
			} 
	 		if($('#checkbox_6').is(":checked")){
				$('#autoUpdate6').show();
				$('.apish').show();
			} 
 			if($('#checkbox_6').is(":not(:checked)")){
	    		$('#autoUpdate6').hide();
				$('.apish').hide();
			} 
			if($('#checkbox_7').is(":checked")){
				$('#autoUpdate7').show();
		    } 
 			if($('#checkbox_7').is(":not(:checked)")){
	    		$('#autoUpdate7').hide();
			} 
			if($('#checkbox_8').is(":checked")){
				$('#autoUpdate8').show();
 			 } 
 			if($('#checkbox_8').is(":not(:checked)")){
	    		$('#autoUpdate8').hide();
			} 
});
	
$('#np').click(function(){

	//$('#np').hide();
	$("#add").toggle();

});

/*$('#manual_entery').click(function(){

	//$('#np').hide();
	$("#addcnt_manul").toggle();

});*/
$('#open_file').click(function(){

	//$('#np').hide();
	$("#file_hide").toggle();

});

$('#npcnt_main').click(function(){

	//$('#np').hide();
	$("#addcnt1").toggle();
	$("#mbn").focus();
});




$('.clk').click(function(){
	$('.shw').toggle(1000);
	
   
});


	
$('input[type=file]').bootstrapFileInput();
$('.file-inputs').bootstrapFileInput();	
	
var text_max = 450;
		$('#textarea_feedback').html(text_max + '/450');
		$('#textarea').keyup(function() {
			var text_length = $('#textarea').val().length;
			var text_remaining = text_max - text_length;
			$('#textarea_feedback').html(text_remaining + '/450');
		});
		
		
		
});	
</script>
</div>
</body>
</html>
<div id="img_loading1" style="display:none"><img src="images/ajax-loader.gif" id="img_loading" class="loadimageUploadAjax2" /></div>
			<div class="sd12">
			<div id="broadcastsaved" style="display:none">Broadcast saved</div>
			</div>
