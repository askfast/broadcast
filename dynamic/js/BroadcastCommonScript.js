
function editAccountDetails1()
{
	$('#accDetedit').hide();
	$('#accDetsave').fadeIn(1000);
	$('#beforeEditname').val(document.getElementById("accDetName").value);
	$('#beforeEditemail').val(document.getElementById("accDetEmail").value);
	$('#beforeEditaddress').val(document.getElementById("accDetAddress").value);
	$("#accDetName").attr("readonly", false);
	$("#accDetEmail").attr("readonly", false);
	$("#accDetAddress").attr("readonly", false);
	console.log(document.getElementById("beforeEditaddress").value);
	
}

function editAccountDetails()
{
			var namePre=document.getElementById("beforeEditname").value;
			var nameCur=document.getElementById("accDetName").value;
			var emailPre=document.getElementById("beforeEditemail").value;
			var emailCur=document.getElementById("accDetEmail").value;
			var addressPre=document.getElementById("beforeEditaddress").value;
			var addressCur=document.getElementById("accDetAddress").value;
			
			var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			if( !emailReg.test(emailCur) ) 
				 {
					 alert("Please provide valid email address");
					document.getElementById("accDetEmail").focus();
					return false;
				 }
			
			if(namePre==nameCur&&emailPre==emailCur&&addressPre==addressCur)
				{
					alert("Please update at least one field");
				}
			else
				{
					var add = document.getElementById("accDetAddress").value.split(',').join('');
			datasinfo = '[{"id":"6183466295099392","contactInfoTag":"Name","contactInfo":"'+document.getElementById("accDetName").value+'","firstName":"","lastName":"","contactKey": "6480374163046400"},{"id":"5620516341678080","contactInfoTag":"Email","contactInfo":"'+document.getElementById("accDetEmail").value+'","contactKey": "6480374163046400"},{"id":"4962237844291584","contactInfoTag":"Address","contactInfo":"'+add+'","contactKey": "6480374163046400"}]';
		
					$('#img_loading1').show();
					$("#main").css({"opacity": "0.3"});
					$.ajax({	
						type: "PUT",
						contentType: "application/json",
						dataType: 'json', 
						xhrFields: {
						withCredentials: true
						},
						data: datasinfo,
						url : "http://askfastmarket.appspot.com/accounts/contactinfos?forceNewContact=true",
						cache: false,
						crossDomain: true,
						xhrFields: {
						withCredentials: true
						},
						success: function (data) {
							$('#img_loading1').hide();
							$("#main").css({"opacity": ""});
							$('#accDetsave').hide();
							$('#accDetedit').fadeIn(1000);
							$("#accDetName").attr("readonly", true);
							$("#accDetEmail").attr("readonly", true);
							$("#accDetAddress").attr("readonly", true);
						},
						error: function (data){
							alert(data.responseJSON.status);
						}
						});
				}
			
}



function accountDetails()
{
	$('#img_loading1').show();
	$("#main").css({"opacity": "0.3"});
	$.ajax({	
		type: "GET",
		contentType: "application/json",
		dataType: 'json', 
		xhrFields: {
		withCredentials: true
		},
		url : "http://askfastmarket.appspot.com/accounts/contacts/owner?detailed=true",
		cache: false,
		crossDomain: true,
		xhrFields: {
		withCredentials: true
		},
		success: function (data) {
			$('#img_loading1').hide();
			$("#main").css({"opacity": ""});
			document.getElementById("accDetName").value=data.contactInfos[2].contactInfo;
			document.getElementById("accDetEmail").value=data.contactInfos[1].contactInfo;
			document.getElementById("accDetAddress").value=data.contactInfos[0].contactInfo;
			centerPopup();
			loadPopup5();
			$('#background_load').show();
			
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
				var popupContactWidth=	$('#popupContact5').width();
				popupContactWidth=popupContactWidth/2;
				var popupContactheight=	$('#popupContact5').height();
				popupContactheight=popupContactheight/2;
				var finalWidth=width-popupContactWidth;
				var finalheight=height-popupContactheight;
				
				$('#popupContact5').css('position', 'fixed');
				$('#popupContact5').css('top', finalheight);
				$('#popupContact5').css('left', finalWidth+22);
				for (i = zoomListeners.length - 1; i >= 0; --i) {
				zoomListeners[i]();
				}
				}
				setInterval(pollZoomFireEvent, 100);
				})();
		
		},
		error: function (data){
			alert(data.responseJSON.status);
		}
	});
					
}


function accountSettings()
{
	
	centerPopup();
	loadPopup4();
	$('#background_load').show();
	
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
		var popupContactWidth=	$('#popupContact4').width();
		popupContactWidth=popupContactWidth/2;
		var popupContactheight=	$('#popupContact4').height();
		popupContactheight=popupContactheight/2;
		var finalWidth=width-popupContactWidth;
		var finalheight=height-popupContactheight;
		
		//$('#popupContact').hide();
		$('#popupContact4').css('position', 'fixed');
		$('#popupContact4').css('top', finalheight);
		$('#popupContact4').css('left', finalWidth+22);
		for (i = zoomListeners.length - 1; i >= 0; --i) {
		zoomListeners[i]();
		}
		}
		setInterval(pollZoomFireEvent, 100);
		})();	
}

function validateNo()
{
	$("#mob").numeric();
	$("#ldnum").numeric();
}


//validation for number only text field
function isNumberKey(evt)
{
	
  var charCode = (evt.which) ? evt.which : event.keyCode;
  
  if(charCode==118||charCode==86)
  	 return true;
  if(charCode != 46 && charCode > 31&& (charCode < 48 || charCode > 57))
	 return false;

  return true;
}


//validation for character only text field
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


$(document).ready(function()
{
    var ctrlDown = false;
    var ctrlKey = 17, vKey = 86, cKey = 67;

    $(document).keydown(function(e)
    {
        if (e.keyCode == ctrlKey) ctrlDown = true;
    }).keyup(function(e)
    {
        if (e.keyCode == ctrlKey) ctrlDown = false;
		
    });
	

    $("#mob").keydown(function(e)
    {
        if (ctrlDown && (e.keyCode == vKey || e.keyCode == cKey))
			{ 
			 return true;
			}
		if (!ctrlDown && (e.keyCode == vKey || e.keyCode == cKey))
			{
				ctrlDown = false;
				 return false;
			}
    });
	
	 $("#rlline").keydown(function(e)
    {
        if (ctrlDown && (e.keyCode == vKey || e.keyCode == cKey))
			{ 
			 return true;
			}
		if (!ctrlDown && (e.keyCode == vKey || e.keyCode == cKey))
			{
				ctrlDown = false;
				 return false;
			}
    });
	
	 $("#remail").keydown(function(e)
    {
        if (ctrlDown && (e.keyCode == vKey || e.keyCode == cKey))
			{ 
			 return true;
			}
		if (!ctrlDown && (e.keyCode == vKey || e.keyCode == cKey))
			{
				ctrlDown = false;
				 return false;
			}
    });
	
	$("#ldnum").keydown(function(e)
    {
        if (ctrlDown && (e.keyCode == vKey || e.keyCode == cKey))
		 return true;
		if (!ctrlDown && (e.keyCode == vKey || e.keyCode == cKey))
			{
				ctrlDown = false;
				 return false;
			}
    });
	
});

///////////////////////////

//loader functions
function BS()
{
		$('#broadcastsaved').show();
		$("#main").css({"opacity": "0.3"});
setTimeout(function(){$('#broadcastsaved').hide();$("#main").css({"opacity": ""});},3000);
}

function MB()
{
		$('#msgBroadcasted').show();
		$("#main").css({"opacity": "0.3"});
setTimeout(function(){$('#msgBroadcasted').hide();$("#main").css({"opacity": ""});},3000);
}

function BCloned()
{
		$('#broadcastcloned').show();
		$("#main").css({"opacity": "0.3"});
setTimeout(function(){$('#broadcastcloned').hide();$("#main").css({"opacity": ""});},3000);
}


function NoMatch()
{
		$('#img_loading1').show();
		$("#main").css({"opacity": "0.3"});
setTimeout(function(){$('#img_loading1').hide();$("#main").css({"opacity": ""});},2000);
}
/////////////////////////




//function to display manual entry contact pop up box
function manual_EntryIndividual(){
	//debugger
	$('#background_load').show();
	//$('#popupContact').show(); 
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
		var popupContactWidth=	$('#popupContact').width();
		popupContactWidth=popupContactWidth/2;
		var popupContactheight=	$('#popupContact').height();
		popupContactheight=popupContactheight/2;
		var finalWidth=width-popupContactWidth;
		var finalheight=height-popupContactheight;
		
		//$('#popupContact2').hide();
		$('#popupContact').css('position', 'fixed');
		$('#popupContact').css('top', finalheight-70);
		$('#popupContact').css('left', finalWidth+10);
		for (i = zoomListeners.length - 1; i >= 0; --i) {
		zoomListeners[i]();
		}
		}
		setInterval(pollZoomFireEvent, 100);
		})();
	
	
}

//function to display manual entry group pop up box
function manual_EntryGroup(){
	centerPopup();
	loadPopup2();
	$('#background_load').show();
	
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
		
		//$('#popupContact').hide();
		$('#popupContact2').css('position', 'fixed');
		$('#popupContact2').css('top', finalheight);
		$('#popupContact2').css('left', finalWidth+22);
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
	$('#scrol_plus').scrollTop(10000);
	$('#hdn_total_no').val(no);
}



function upload_csv_file(){

	centerPopup();
	loadPopup6();
	$('#background_load').show();
	
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
		var popupContactWidth=	$('#popupContact6').width();
		popupContactWidth=popupContactWidth/2;
		var popupContactheight=	$('#popupContact6').height();
		popupContactheight=popupContactheight/2;
		var finalWidth=width-popupContactWidth;
		var finalheight=height-popupContactheight;
		
		$('#add_contect_btn').show();
		$('#open_addcontact').hide();
		$('#popupContact').hide();
		$('#popupContact2').hide();
		$('#disply_fileform').hide();
		$('#popupContact6').css('position', 'fixed');
		$('#popupContact6').css('top', finalheight);
		$('#popupContact6').css('left', finalWidth);
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

	//var id = "<?php echo $session_id; ?>";
	$.ajax({	
			type: "GET",
			contentType: "application/json",
			//dataType: 'json',
			//data: {datasinfo:datasinfo},
			//data: datasinfo,
			//beforeSend : function(xhr) {          
//				xhr.setRequestHeader("X-SESSION_ID" , id)
//			 }, 

			url : "http://askfastmarket.appspot.com/blobstore/test.csv?!",
			
			
			
			cache: false,
			crossDomain: true,
			xhrFields: {
			withCredentials: true
			},
			success: function (data) {
				//console.log(1);
			//alert("hello");
			//var jasonValue = JSON.stringify(data) ;
			//alert(jasonValue);
				},
			error: function (data){
				alert(data.responseJSON.status);
			}
		});


	$('#disply_fileform').toggle();
	$('#uploading_hed').hide();
	$('#add_contect_btn').hide();
	$('#open_addcontact').show();
}



function chk_showContact(){
	
	if (!$('#demo_box_1').is(':checked')&&$('#demo_box_2').is(':checked')){
		$("#show_individuals").show();
		$("#show_individuals_search").hide();
		showcnt1();
	}
	else{
		$("#show_individuals").hide();
	}
	
	if (!$('#demo_box_2').is(':checked')&&$('#demo_box_1').is(':checked')){
		$("#show_groups").show();
		$("#show_individuals_search").hide();
		showcnt1();
	}
	else{
		$("#show_groups").hide();
	}
	
	if (!$('#demo_box_2').is(':checked')&&!$('#demo_box_1').is(':checked')){
		showcnt1();
	}
	
}



function hide_divContact(id){
	$('#contactEdit_cnt_'+id).hide();
	$('#Cdone_id_cnt_'+id).hide();
	$('#Ccancel_id_'+id).hide();
	$('#cnt_edit_edit_'+id).show();
	$('#Cdel_cnt_'+id).show();
}



function hide_hide_divContact(id){
	$('#contactEdit_'+id).hide();
	$('#Cdone_id_'+id).hide();
	$('#Ccancel_id_id_'+id).hide();
	$('#edit_edit_edit_'+id).show();
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

function word_1(){
	$('#contact_search_enter').val('');
	$('#broadcast_search_enter').val('');
	AllDivs();
	$('#word').show();
	
}





function showadd(){
	$('#element1').show();
	$('#element2').show();
}

// logout
function logout(){
	url="logout.php";
	$.post(url,function(responce){
window.location ="/product/dynamic/index.php";


	});
} 
		

function fileup(){
	//alert('hghj');


   //alert(cntctid);
		//var id = "<?php echo $session_id; ?>";
			// ajax request to get contact's
		var url = "http://askfastmarket.appspot.com/blobstore/test.csv?!=&type=json";
		//var url = "http://shravan.askfastmarket.appspot.com/blobstore/testCSV.csv?!";
		//var datasinfo='{"PHONE": ["phoneNumber"],"NAME": ["firstNameHeader://firstName","lastNameHeader://lastName"],"SPECIAL": ["groupHeader://married","groupHeader://loyaltyPoints"]}';
		//alert(datasinfo);
		//askfastmarket.appspot.com/blobstore/<someRandomFileName>?!
				
		//	var url = "http://askfastmarket.appspot.com/accounts/contacts";
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
		//$('#container').load('http://google.com');
		$.ajax({
			  url: url,
			  type: "GET",
			  //headers: { 'Access-Control-Allow-Origin': 'http://askfastmarket.appspot.com/blobstore/test.csv?!=&type=json' },
			  //jsonp : "callback",
			 // dataType: "xml",
			  //data: datasinfo,
			 // beforeSend : function(xhr) {          
		      //xhr.setRequestHeader("X-SESSION_ID" , id)
			  //},
			 async: false,
       		 //jsonpCallback: 'jsonCallback',
        	//contentType: "application/json",
        	dataType: 'jsonp',
			 
			  xhrFields: {
					withCredentials: true
					},
			  success: function (data) {
				 // var headline = $(data.responseText).find('a.tsh').text();
//        		  alert(headline);
				  //var a=$.parseJSON(data);
//				  alert(a);
				  //obj=JSON.parse(data);
				  //debugger
				  //alert(data);
				 // $('#apnd_fileUpload').html(data);
			  },
				error: function (data){
					alert(data.responseJSON.status);
				}
		});
		function localJsonpCallback(json) {
		}
		
	}

	//update content

	
	
function AllDivs()
{
	$('#word').hide();
	$('#word6').hide();
	$('#word5').hide();
	$('#word222222').hide();
	$('#word2').hide();
	$("#emptycontactlist").hide();
	$("#emptyGrouplist").hide();
	$("#word992").hide();
	$("#word1992").hide();
	$("#contacts_imported_from_google").hide();
	$('#Broadcast_Search_Results').hide();
	$('#word23456').hide();
	$("#word23456").hide();
	
	
}


//loader function
function delay()
{
		$('#img_loading1').show();
		$("#main").css({"opacity": "0.3"});
setTimeout(function(){$('#img_loading1').hide(); 
		$("#main").css({"opacity": ""});},3000);
}

function changeparent()
{

	document.getElementById("prnt").checked = false;
	var count=0;var count1='';
	
	$("input:checkbox").each(function()
		{
				var $this = $(this); 
				if($this.is(":checked"))
					{
						checkboxes=$this.attr("id");
						c=checkboxes.split("_");
						if(c[1]>=11&&c[0]=='checkbox')
							{
								count++;
							}
					}
		});
		count1 +="<h2>Selected contacts ("+count+")</h2>";
		$('#countcount').html(count1);
				
				
}

function changeparent1()
{

	document.getElementById("prnt1").checked = false;
	var count2=0;var count3='';
	
	$("input:checkbox").each(function()
		{
				var $this = $(this); 
				if($this.is(":checked"))
					{
						checkboxes=$this.attr("id");
						c=checkboxes.split("_");
						if(c[1]>=11&&c[0]=='checkbox1')
							{
								count2++;
							}
					}
		});
		count3 +="<h2>Selected groups ("+count2+")</h2>";
		$('#countcount1').html(count3);
				
				
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

function selectall1(source) 
{
  checkboxes1 = document.getElementsByName('chkbox1');
  var count2=0;var count3='';
  for(var i=0, n=checkboxes1.length;i<n;i++) 
	  {
		count2++;
		checkboxes1[i].checked = source.checked;
	  }
  		if($(source).is(':checked'))
			{
				count3 +="<h2>Selected groups ("+count2+")</h2>";
				$('#countcount1').html(count3);
			}
		if(!$(source).is(':checked'))
			{
				count3 +="<h2>Selected groups (0)</h2>";
				$('#countcount1').html(count3);
			}
		
}
	//show group
	
	
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
	
	var ele = $(this).find('input');

		if(ele.is(':checked'))
	
		{
	
			ele.removeAttr('checked');
	
}	


$('.label_radio2').click(function(){ 
			$("#lcid1").attr('class','label_radio r_off');
			if($('#radio-02').is(":checked")){
				$('#voiceLanguageDropdown').hide();
				$('#voice').show();
				$('#voiceuploadbutton').show();
			}
			if($('#radio-02').is(":not(:checked)")){
				$('#voiceuploadbutton').hide();
			}  		
});



$('.label_radio1').click(function(){ 
			if($('#radio-01').is(":checked")){
				$('#voiceuploadbutton').hide();
				$('#voice').show();
				$('#voiceLanguageDropdown').show();
			}
			if($('#radio-01').is(":not(:checked)")){
				$('#voiceLanguageDropdown').hide();
			}
});


$('.starter-template').click(function(){ 
			
			if($('#checkbox_twt').is(":checked")){
				$('#twt').show();
			}
			if($('#checkbox_twt').is(":not(:checked)")){
				$('#twt').hide();
  			}
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
				if($('#radio-01').is(":not(:checked)")&&$('#radio-02').is(":not(:checked)")){
				$("#radio-01").prop("checked", true); 
				$("#lcid1").attr('class','label_radio r_on');
				$('#voice').show();
				$('#voiceLanguageDropdown').show();
				}
			} 
 			if($('#checkbox_6').is(":not(:checked)")){
	    		$('#autoUpdate6').hide();
				$('#voice').hide();
				$('#voiceLanguageDropdown').hide();
				$('#voiceuploadbutton').hide();
				$("#radio-01").prop("checked", false)
				$("#radio-02").prop("checked", false);
				$("#lcid1").attr('class','label_radio r_off');
				$("#lcid2").attr('class','label_radio r_off');
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

	$("#add").toggle();

});


$('#open_file').click(function(){

	$("#file_hide").toggle();

});

$('#npcnt_main').click(function(){

	$("#addcnt1").toggle();
	$("#mbn").focus();
});




$('.clk').click(function(){
	$('.shw').toggle(1000);
	
   
});
	
});