// JavaScript Document


function GoogleLogin()
{//
//	$.ajax({
//		type: "POST",
//		url: "main_sik.php",
//		success: function(msg){
//			$('#google_login').append(msg);
//			$('#google_login a').attr('id','google_login_click');
//		window.location.href=document.getElementById('google_login_click');
//			
//		},
//		error: function (data){
//			alert(data.responseJSON.status);
//		}
//		
//	});
}



function Gmail_Contacts_Info1(a){//
//	
//	
//	var name = '';
//	var email = '';
//	var phone = 0;
//	var ldnum = 0;
//	$('#img_loading1').show();
//	$("#main").css({"opacity": "0.3"});
//	
//	$.ajax({ 
//		type: "POST",
//		url: "contacts_sik.php",
//		data: {'token':a},
//
//		success: function(msg){
//			$('#word').hide();
//			$('#word2').hide();
//			$('#word5').show();
//			$('#show_individuals').hide();
//			$('#show_groups').hide();
//			
//			$('#contacts_imported_from_google').show();
//			$('#main_icon').show();
//			
//			$('#img_loading1').show();
//			$("#main").css({"opacity": "0.3"});
//			var strhtml='';
//			
//			
//			var data2 = JSON.parse(msg);
//			for (var i=0; i<data2.length; i++){
//				
//				fname = data2[i].name.split(' ')[0];
//				lname = data2[i].name.split(' ')[1];
//				email = data2[i].email;
//				phone = data2[i].phone;		
//				if (fname==''){fname='empty';}
//				if (email==''){email='empty';}
//				if (lname==''){lname='empty';}
//				if (lname=='undefined'){lname='empty';}
//				if (fname=='n'){fname='empty';}
//				
//				
//				
//				
//	var rndid = Math.floor(Math.random() * (9999 - 100 + 1)) + 1;
////	var fr_name=document.getElementById("fr_name").value;
////	var srname=document.getElementById("srname").value;
////	var mob = document.getElementById('mob').value;
////	var ldnum=document.getElementById("ldnum").value;
////	var email_man = document.getElementById('email_man').value;
//	
//	//if(fr_name=="" ){
////	alert("Please input First Name");
////	 return false;
////	}
////	if(mob=="" ){
////	alert("Please input Mobile Number");
////	 return false;
////	}
////	if(ldnum=="" ){
////	alert("Please input Landline Number");
////	 return false;
////	}
////	
////	if(email_man=="" ){
////	alert("Please input E-Mail");
////	 return false;
////	}
////	
////	if(isNaN(mob))
////
////	{
////		alert("Mobile number is not an integer");
////		return false;
////	}
////	if(isNaN(ldnum))
////	{
////		alert("Landline number is not an integer");
////		return false;
////	}
//	
//	var emailRegexStr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//	var isvalid = emailRegexStr.test(email); 
//	
//	// if (!isvalid) {
////	  //alert("Not a valid e-mail address");
////	  return false;
////	}
//	
//	var phoneNovalidation = /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/;
//	var isvalidNo = phoneNovalidation.test(phone); 
//	//if (!isvalidNo) {
////	  alert("Not a valid Phone number");
////	  return false;
////	}
//	//var Landlineval = /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/;
////	var isvalidNo = Landlineval.test(ldnum); 
////	if (!isvalidNo) {
////	  alert("Not a valid Landline number");
////	  return false;
////	}
//	
//	
//	 datas = '{"contactInfoRefs":['+rndid+'],"id":'+rndid+',"lastAvailableTime":"1380909873252","ownerKey":"yasir"}';
//	// datasinfo = '{"id":'+rndid+',"contactInfoTag":"Email","contactInfo":"'+email_man+'|'+mob+'|'+ldnum+'","firstName":"'+fr_name+'","lastName":"'+srname+'"}';  
//	 datasinfo = '[{"contactInfoTag":"Email","contactInfo":"'+email+'","firstName":"'+fname+'","lastName":"'+lname+'","contactKey": "'+rndid+'"},{"contactInfoTag":"Phone","contactInfo":"'+phone+'","contactKey": "'+rndid+'"},{"contactInfoTag":"Phone","contactInfo":"'+phone+'","firstName":"ll","contactKey": "'+rndid+'"}]';   
//	// datasinfo = '{"id":'+rndid+',"contactInfoTag":"Email","contactInfo":"'+email_man+'|'+mob+'|'+ldnum+'","firstName":"'+fr_name+'","lastName":"'+srname+'"}';   
//	
//			//datasinfo = '{"id":'+rndid+',"contactInfoTag": [{ "contactInfoTag1":"Email","contactInfoTag2":"Phone","contactInfoTag3":"Mobile"}],"contactInfo": [{ "Email":"'+email_man+'","Phone":'+ldnum+',"Mobile":'+mob+'}],"firstName":"'+fr_name+'","lastName":"'+srname+'"}';   
//			
//					//		datasinfo = '{"id":'+rndid+',"contactInfoTag": [{ "contactInfoTag":"Email"}],"contactInfo": [{ "Email":"'+email_man+'"}],"firstName":"'+fr_name+'","lastName":"'+srname+'"}'; 
//					
//					if(isvalid&&isvalidNo)
//					{
//					
//					
//					$('#img_loading1').show();
//					$("#main").css({"opacity": "0.3"});
//					$.ajax({	
//						type: "POST",
//						contentType: "application/json",
//						dataType: 'json', 
//						xhrFields: {
//						withCredentials: true
//						},
//						data: datas,
//						url : "http://askfastmarket.appspot.com/accounts/contacts",
//						cache: false,
//						crossDomain: true,
//						xhrFields: {
//						withCredentials: true
//						},
//						success: function (data) {
//						$('#img_loading1').show();
//					$("#main").css({"opacity": "0.3"});
//					$.ajax({	
//						type: "PUT",
//						contentType: "application/json",
//						dataType: 'json', 
//						xhrFields: {
//						withCredentials: true
//						},
//						data: datasinfo,
//						url : "http://askfastmarket.appspot.com/accounts/contactinfos?forceNewContact=true",
//						cache: false,
//						crossDomain: true,
//						xhrFields: {
//						withCredentials: true
//						},
//						success: function (data) {
//							
//							
//						//alert(data);
//						//$('#fr_name').val('');
////						$('#srname').val('');
////						$('#mob').val('');
////						$('#ldnum').val('');
////						$('#email_man').val('');
////						
//						 strhtml = "<span id=contact_"+rndid+" ><div class='football'> <div class='football-left'><div class='footbal'><h6 id='heading_edit_"+rndid+"'>"+fname+" "+lname+"</h6><p><i>Individual</i></p></div><div class='three-img'><img src='images/phone.png' alt=''><img src='images/latter1.png' alt=''><img src='images/at1.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_cnt_"+rndid+"' onclick='editcontact("+msg.id+","+rndid+");' style='display:none;'><input class='edit1' id='cnt_edit_edit_"+rndid+"'  value='' type='button'  onclick='updatecnt("+msg.id+","+rndid+")'></div><input type='hidden' id='fname_"+rndid+"' value='"+fname+"'><input type='hidden' id='lname_"+rndid+"' value='"+lname+"'><input type='hidden' id='email_"+rndid+"' value='"+email+"'><input type='hidden' id='phone_"+rndid+"' value='"+phone+"'><input type='hidden' id='landLinecnt_"+rndid+"' value='"+phone+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_"+rndid+"' onclick='hide_divContact("+rndid+");' style='display:none;'><a href='javascript:' onclick='delcnt("+msg.id+","+rndid+")' id='Cdel_cnt_"+rndid+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_cnt_"+rndid+" ></span></div></span>";
//						
//						$("#div_imported_contacts").html(strhtml);
//						$("#div_imported_contacts").show();
//						$('#img_loading1').hide();
//						$("#main").css({"opacity": ""});
//						$('#popupContact').hide(); 
//						$('#background_load').hide(); 
//				},
//						error: function (data){
//							alert(data.responseJSON.status);
//						}
//		});
//						
//				},
//						error: function (data){
//							alert(data.responseJSON.status);
//						}
//		});
//		
//		
//					}
//					
//					
//
//				
//				//var rndid = Math.floor(Math.random() * (9999 - 100 + 1)) + 1+i;
////				 
////	 			datas = '{"contactInfoRefs":['+rndid+'],"id":'+rndid+',"lastAvailableTime":"1380909873252","ownerKey":"yasir"}';
////	  datasinfo = '{"id":'+rndid+',"contactInfoTag":"Email","contactInfo":"'+email+'","firstName":"'+fname+'","lastName":"'+lname+'"}';   
////		
////		
////	//	datasinfo = '{"id":'+rndid+',"contactInfoTag": [{ "contactInfoTag":"Email","contactInfoTag":"Phone","contactInfoTag":"Mobile"}],"contactInfo": [{ "Email":'+email+',"Phone":'+phone+',"Mobile":'+ldnum+'}],"firstName":"'+fname+'","lastName":"'+lname+'"}';   
////				
////	 			
////				var strhtml = "<span id=contact_"+rndid+" ><div class='football'> <div class='football-left'><div class='footbal'><h6 id='heading_edit_"+rndid+"'>"+fname+" "+lname+"</h6><p><i>Individual</i></p></div><div class='three-img'><img src='images/phone.png' alt=''><img src='images/latter1.png' alt=''><img src='images/at1.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_cnt_"+rndid+"' onclick='editcontact("+msg.id+","+rndid+");' style='display:none;'><input class='edit1' id='cnt_edit_edit_"+rndid+"'  value='' type='button'  onclick='updatecnt("+msg.id+","+rndid+")'></div><input type='hidden' id='fname_"+rndid+"' value='"+fname+"'><input type='hidden' id='lname_"+rndid+"' value='"+lname+"'><input type='hidden' id='email_"+rndid+"' value='"+email+"'><input type='hidden' id='phone_"+rndid+"' value='"+mob+"'><input type='hidden' id='landLine_"+rndid+"' value='"+ldnum+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_"+rndid+"' onclick='hide_divContact("+rndid+");' style='display:none;'><a href='javascript:' onclick='delcnt("+msg.id+","+rndid+")' id='Cdel_cnt_"+rndid+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_cnt_"+rndid+" ></span></div></span>";
////					
////					$('#div_individuals').after(strhtml);
////				$('#img_loading1').show();
////				$("#main").css({"opacity": "0.3"});
////				$.ajax({	
////					type: "POST",
////					contentType: "application/json",
////					dataType: 'json', 
////					beforeSend : function(xhr) {          
////					xhr.setRequestHeader("X-SESSION_ID" , id)
////		 		},
////					data: datas,
////					url : "http://askfastmarket.appspot.com/accounts/contacts",
////					crossDomain: true,
////					xhrFields: {
////					withCredentials: true
////					},
////					
////					success: function (data) {
////					$('#fr_name').val('');
////					$('#srname').val('');
////					$('#mob').val('');
////					$('#ldnum').val('');
////					$('#email_man').val('');
////					
////					
////					$('#img_loading1').hide();
////					$("#main").css({"opacity": ""});
////					$('#popupContact').hide(); 
////					$('#background_load').hide(); 
////				}
////			});
////				$('#div_individuals').after(strhtml);
////				$('#img_loading1').show();
////				$.ajax({	
////				type: "POST",
////				contentType: "application/json",
////				dataType: 'json',
////				data: datasinfo,
////				
////				beforeSend : function(xhr) {          
////					xhr.setRequestHeader("X-SESSION_ID" , id)
////				 }, 
////				url : "http://askfastmarket.appspot.com/accounts/contactinfos?strict=true",
////				crossDomain: true,
////				xhrFields: {
////				withCredentials: true
////				},
////				success: function (data) {
////					$('#img_loading1').hide();
////					$("#main").css({"opacity": ""});
////				},
//				//error: function (data){
////					alert(data.responseJSON.status);
////				}
////			});
//				
//			}	
//			
//			//showcnt1();
//		
//			
//		 },
//		error: function (data){
//			alert(data.responseJSON.status);
//		}
//	});
//
}


//update group
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




	// del contant
	
function delcnt(cntctid,span_id){
	  var x;
      var r=confirm("Do you want to Delete this contact");
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
			$.ajax({	
				type: "DELETE",
				contentType: "application/json",
				dataType: 'html', 
				xhrFields: {
				withCredentials: true
				},
				url : "http://askfastmarket.appspot.com/accounts/contacts/"+cntctid,
				cache: false,
				crossDomain: true,
				xhrFields: {
				withCredentials: true
				},
				success: function (data) {
	
					$('#contact_'+span_id).fadeOut(1000);
				
				$('#img_loading1').hide();
				$("#main").css({"opacity": ""});
				
				},
				error: function (data){
					alert(data.responseJSON.status);
				}
				
			});
			
				
}


	// del contant
function delGroup(cntctid,span_id){
	  var x;
      var r=confirm("Do you want to Delete this Group");
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
			$.ajax({	
				type: "DELETE",
				contentType: "application/json",
				dataType: 'html', 
				xhrFields: {
				withCredentials: true
				},
				url : "http://askfastmarket.appspot.com/accounts/groups/"+cntctid, 
				cache: false,
				crossDomain: true,
				xhrFields: {
				withCredentials: true
				},
				success: function (data) {
				
					$('#Gcontact_'+span_id).fadeOut(1000);
				
				$('#img_loading1').hide();
				$("#main").css({"opacity": ""});
				
				},
				error: function (data){
					alert(data.responseJSON.status);
				}
			});
				
}
	
		//update content
function updatecnt(cntctid,div_id){

	var Note='';
	var edithtml='';
	$('#contactEdit_cnt_'+div_id).html('');
	$('#cnt_edit_edit_'+div_id).hide();
	$('#Cdone_id_cnt_'+div_id).show();
	
	$('#Cdel_cnt_'+div_id).hide();
	$('#Ccancel_id_'+div_id).show();
	
	var fname = $('#fname_'+div_id).val();
	var lname = $('#lname_'+div_id).val();
    var email = $('#email_'+div_id).val();
	var phone = $('#phone_'+div_id).val();
	var landLine = $('#landLinecnt_'+div_id).val();
	var Note = $('#Note_'+div_id).val();
	var twtname = $('#twtun_'+div_id).val();
	//alert(twtname);
	if(twtname=='undefined')
	{
		twtname='';
	}
	if(Note=='undefined')
	{
		Note='';
	}
	
	var edithtml = "<div id=edit_contact_"+div_id+" class='light-blu'><div class='light-blu-inner'><div class='light-blu-left'><h3>"+fname+" "+lname+"</h3><p>Notes:</p><textarea class='light-blu-text' id=edit_note"+div_id+">"+Note+"</textarea></div><div class='light-blu-right'><span>Name:</span><input class='light-blu-in' type='hidden' id=edit_id_"+div_id+" value='"+cntctid+"' placeholder='First Name'><input class='light-blu-in' type='text' id='edit_fname_"+div_id+"' value='"+fname+"' placeholder='First Name'><div class='clear'></div><span>Surname:</span><input class='light-blu-in' type='text' placeholder='Last Name' id='edit_lname_"+div_id+"' value='"+lname+"'><div class='clear'></div><span>Mobile:</span><input class='light-blu-in' id='edit_mobile_"+div_id+"' type='text' value='"+phone+"' ><div class='clear'></div><span>Landline:</span><input class='light-blu-in' id='edit_landno_"+div_id+"' value='"+landLine+"' type='text' placeholder=''><div class='clear'></div><span>E-mail:</span><input class='light-blu-in' type='text' id='edit_email_"+div_id+"' value='"+email+"'><div class='clear'></div><span>Twitter Username:</span><input class='light-blu-in' type='text' id='edit_twtunm_"+div_id+"' value='"+twtname+"'><div class='clear'></div></div></div><div class='clear'></div></div>"
	 
	$('#contactEdit_cnt_'+div_id).append(edithtml); 
	$('#contactEdit_cnt_'+div_id).show();
}



	
	
function updateGroup(count_id,div_id){

	var name=$('#edit_gpname_'+div_id).val();
	
	if(name==""){
		alert("Group Name cannot be empty.");
	 	return false;
	}
	datasinfo = '{"name":"'+name+'"}';   
			
	$('#img_loading1').show();
	$("#main").css({"opacity": "0.3"});
		
	$.ajax({	
		type: "PUT",
		contentType: "application/json",
		dataType: 'json',
		data: datasinfo,
		xhrFields: {
		withCredentials: true
		}, 
		url : "http://askfastmarket.appspot.com/accounts/groups/"+count_id,
		cache: false,
		crossDomain: true,
		xhrFields: {
		withCredentials: true
		},
		success: function (data) {
		//	console.log(data);
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
			
		},
		error: function (data){
			alert(data.responseJSON.status);
		}
	});
}
	
function loadContacts(data,x)
{
		var count = 1;
		var count2 = 1;
		var phone = '';
		var email = '' ;
		var landLine = '' ;
		var strHtml = '';
		var Note='';
		var emailTagid=1;
		var PhoneTagid=1;
		var LLineTagid=1;
		var NoteId=1;
		var nametagid=1;
		var twittername='';
		var specialtagid=1;
		
		
		var div_id = 1;
		var counterLoop = 0;
		var strHtml = '';
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
					//debugger
					var contactinfosLength=data[i].contactInfos.length;
				
					for(var j=0;j<contactinfosLength;j++)
						{
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
					
						strHtml += "<span id=contact_"+count+" ><div class='football'> <div class='football-left'><div class='footbal'><h6 id='heading_edit_"+count+"'>"+flname+"</h6><p><i>Individual</i></p></div><div class='three-img'><img src='images/at1.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_cnt_"+count+"' onclick='editcontact1("+data[i].id+","+count+","+emailTagid+","+PhoneTagid+","+LLineTagid+","+NoteId+","+nametagid+","+specialtagid+");' style='display:none;'><input class='edit1' id='cnt_edit_edit_"+count+"'  value='' type='button'  onclick='updatecnt("+data[i].id+","+count+")'></div><input type='hidden' id='fname_"+count+"' value='"+fstname+"'><input type='hidden' id='lname_"+count+"' value='"+lstname+"'><input type='hidden' id='email_"+count+"' value='"+email+"'><input type='hidden' id='phone_"+count+"' value='"+phone+"'><input type='hidden' id='landLinecnt_"+count+"' value='"+landLine+"'><input type='hidden' id='Note_"+count+"' value='"+Note+"'><input type='hidden' id='twtun_"+count+"' value='"+twittername+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_"+count+"' onclick='hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delcnt("+data[i].id+","+count+")' id='Cdel_cnt_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_cnt_"+count+" ></span></div></span>"; 
					
					 }
					 
					 //phone
					if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid!=1&&LLineTagid==1&&specialtagid==1)
					 {
						 //console.log("phone");
						count++;
						div_id++;
					
						strHtml += "<span id=contact_"+count+" ><div class='football'> <div class='football-left'><div class='footbal'><h6 id='heading_edit_"+count+"'>"+flname+"</h6><p><i>Individual</i></p></div><div class='three-img'><img src='images/phone.png' alt=''><img src='images/latter1.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_cnt_"+count+"' onclick='editcontact1("+data[i].id+","+count+","+emailTagid+","+PhoneTagid+","+LLineTagid+","+NoteId+","+nametagid+","+specialtagid+");' style='display:none;'><input class='edit1' id='cnt_edit_edit_"+count+"'  value='' type='button'  onclick='updatecnt("+data[i].id+","+count+")'></div><input type='hidden' id='fname_"+count+"' value='"+fstname+"'><input type='hidden' id='lname_"+count+"' value='"+lstname+"'><input type='hidden' id='email_"+count+"' value='"+email+"'><input type='hidden' id='phone_"+count+"' value='"+phone+"'><input type='hidden' id='landLinecnt_"+count+"' value='"+landLine+"'><input type='hidden' id='Note_"+count+"' value='"+Note+"'><input type='hidden' id='twtun_"+count+"' value='"+twittername+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_"+count+"' onclick='hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delcnt("+data[i].id+","+count+")' id='Cdel_cnt_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_cnt_"+count+" ></span></div></span>"; 
					
					 }
					 
					 //landline
					if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid==1&&LLineTagid!=1&&specialtagid==1)
					 {
						// console.log("landline");
						count++;
						div_id++;
					
						strHtml += "<span id=contact_"+count+" ><div class='football'> <div class='football-left'><div class='footbal'><h6 id='heading_edit_"+count+"'>"+flname+"</h6><p><i>Individual</i></p></div><div class='three-img'><img src='images/phone.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_cnt_"+count+"' onclick='editcontact1("+data[i].id+","+count+","+emailTagid+","+PhoneTagid+","+LLineTagid+","+NoteId+","+nametagid+","+specialtagid+");' style='display:none;'><input class='edit1' id='cnt_edit_edit_"+count+"'  value='' type='button'  onclick='updatecnt("+data[i].id+","+count+")'></div><input type='hidden' id='fname_"+count+"' value='"+fstname+"'><input type='hidden' id='lname_"+count+"' value='"+lstname+"'><input type='hidden' id='email_"+count+"' value='"+email+"'><input type='hidden' id='phone_"+count+"' value='"+phone+"'><input type='hidden' id='landLinecnt_"+count+"' value='"+landLine+"'><input type='hidden' id='Note_"+count+"' value='"+Note+"'><input type='hidden' id='twtun_"+count+"' value='"+twittername+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_"+count+"' onclick='hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delcnt("+data[i].id+","+count+")' id='Cdel_cnt_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_cnt_"+count+" ></span></div></span>"; 
					
					 }
					 
					 //twitter
					if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid==1&&LLineTagid==1&&specialtagid!=1)
					 {
						//console.log("twitter");
						count++;
						div_id++;
					
						strHtml += "<span id=contact_"+count+" ><div class='football'> <div class='football-left'><div class='footbal'><h6 id='heading_edit_"+count+"'>"+flname+"</h6><p><i>Individual</i></p></div><div class='three-img'><img src='images/twittericon.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_cnt_"+count+"' onclick='editcontact1("+data[i].id+","+count+","+emailTagid+","+PhoneTagid+","+LLineTagid+","+NoteId+","+nametagid+","+specialtagid+");' style='display:none;'><input class='edit1' id='cnt_edit_edit_"+count+"'  value='' type='button'  onclick='updatecnt("+data[i].id+","+count+")'></div><input type='hidden' id='fname_"+count+"' value='"+fstname+"'><input type='hidden' id='lname_"+count+"' value='"+lstname+"'><input type='hidden' id='email_"+count+"' value='"+email+"'><input type='hidden' id='phone_"+count+"' value='"+phone+"'><input type='hidden' id='landLinecnt_"+count+"' value='"+landLine+"'><input type='hidden' id='Note_"+count+"' value='"+Note+"'><input type='hidden' id='twtun_"+count+"' value='"+twittername+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_"+count+"' onclick='hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delcnt("+data[i].id+","+count+")' id='Cdel_cnt_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_cnt_"+count+" ></span></div></span>"; 
					
					 }
					 
					 //phone landline
					 if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid!=1&&LLineTagid!=1&&specialtagid==1)
					 {
						//console.log("phone landline");
						count++;
						div_id++;
					
						strHtml += "<span id=contact_"+count+" ><div class='football'> <div class='football-left'><div class='footbal'><h6 id='heading_edit_"+count+"'>"+flname+"</h6><p><i>Individual</i></p></div><div class='three-img'><img src='images/phone.png' alt=''><img src='images/latter1.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_cnt_"+count+"' onclick='editcontact1("+data[i].id+","+count+","+emailTagid+","+PhoneTagid+","+LLineTagid+","+NoteId+","+nametagid+","+specialtagid+");' style='display:none;'><input class='edit1' id='cnt_edit_edit_"+count+"'  value='' type='button'  onclick='updatecnt("+data[i].id+","+count+")'></div><input type='hidden' id='fname_"+count+"' value='"+fstname+"'><input type='hidden' id='lname_"+count+"' value='"+lstname+"'><input type='hidden' id='email_"+count+"' value='"+email+"'><input type='hidden' id='phone_"+count+"' value='"+phone+"'><input type='hidden' id='landLinecnt_"+count+"' value='"+landLine+"'><input type='hidden' id='Note_"+count+"' value='"+Note+"'><input type='hidden' id='twtun_"+count+"' value='"+twittername+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_"+count+"' onclick='hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delcnt("+data[i].id+","+count+")' id='Cdel_cnt_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_cnt_"+count+" ></span></div></span>"; 
					
					 }
					 
					 //phone email
					  if(flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid!=1&&LLineTagid==1&&specialtagid==1)
					 {
						//console.log("phone email");
						count++;
						div_id++;
					
						strHtml += "<span id=contact_"+count+" ><div class='football'> <div class='football-left'><div class='footbal'><h6 id='heading_edit_"+count+"'>"+flname+"</h6><p><i>Individual</i></p></div><div class='three-img'><img src='images/at1.png' alt=''><img src='images/phone.png' alt=''><img src='images/latter1.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_cnt_"+count+"' onclick='editcontact1("+data[i].id+","+count+","+emailTagid+","+PhoneTagid+","+LLineTagid+","+NoteId+","+nametagid+","+specialtagid+");' style='display:none;'><input class='edit1' id='cnt_edit_edit_"+count+"'  value='' type='button'  onclick='updatecnt("+data[i].id+","+count+")'></div><input type='hidden' id='fname_"+count+"' value='"+fstname+"'><input type='hidden' id='lname_"+count+"' value='"+lstname+"'><input type='hidden' id='email_"+count+"' value='"+email+"'><input type='hidden' id='phone_"+count+"' value='"+phone+"'><input type='hidden' id='landLinecnt_"+count+"' value='"+landLine+"'><input type='hidden' id='Note_"+count+"' value='"+Note+"'><input type='hidden' id='twtun_"+count+"' value='"+twittername+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_"+count+"' onclick='hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delcnt("+data[i].id+","+count+")' id='Cdel_cnt_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_cnt_"+count+" ></span></div></span>"; 
					
					 }
					 
					 //phone twitter
					  if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid!=1&&LLineTagid==1&&specialtagid!=1)
					 {
						// console.log("phone twitter");
						count++;
						div_id++;
					
						strHtml += "<span id=contact_"+count+" ><div class='football'> <div class='football-left'><div class='footbal'><h6 id='heading_edit_"+count+"'>"+flname+"</h6><p><i>Individual</i></p></div><div class='three-img'><img src='images/twittericon.png' alt=''><img src='images/phone.png' alt=''><img src='images/latter1.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_cnt_"+count+"' onclick='editcontact1("+data[i].id+","+count+","+emailTagid+","+PhoneTagid+","+LLineTagid+","+NoteId+","+nametagid+","+specialtagid+");' style='display:none;'><input class='edit1' id='cnt_edit_edit_"+count+"'  value='' type='button'  onclick='updatecnt("+data[i].id+","+count+")'></div><input type='hidden' id='fname_"+count+"' value='"+fstname+"'><input type='hidden' id='lname_"+count+"' value='"+lstname+"'><input type='hidden' id='email_"+count+"' value='"+email+"'><input type='hidden' id='phone_"+count+"' value='"+phone+"'><input type='hidden' id='landLinecnt_"+count+"' value='"+landLine+"'><input type='hidden' id='Note_"+count+"' value='"+Note+"'><input type='hidden' id='twtun_"+count+"' value='"+twittername+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_"+count+"' onclick='hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delcnt("+data[i].id+","+count+")' id='Cdel_cnt_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_cnt_"+count+" ></span></div></span>"; 
					
					 }
					 
					 //landline email
					  if(flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid==1&&LLineTagid!=1&&specialtagid==1)
					 {
						// console.log("landline email");
						count++;
						div_id++;
					
						strHtml += "<span id=contact_"+count+" ><div class='football'> <div class='football-left'><div class='footbal'><h6 id='heading_edit_"+count+"'>"+flname+"</h6><p><i>Individual</i></p></div><div class='three-img'><img src='images/phone.png' alt=''><img src='images/at1.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_cnt_"+count+"' onclick='editcontact1("+data[i].id+","+count+","+emailTagid+","+PhoneTagid+","+LLineTagid+","+NoteId+","+nametagid+","+specialtagid+");' style='display:none;'><input class='edit1' id='cnt_edit_edit_"+count+"'  value='' type='button'  onclick='updatecnt("+data[i].id+","+count+")'></div><input type='hidden' id='fname_"+count+"' value='"+fstname+"'><input type='hidden' id='lname_"+count+"' value='"+lstname+"'><input type='hidden' id='email_"+count+"' value='"+email+"'><input type='hidden' id='phone_"+count+"' value='"+phone+"'><input type='hidden' id='landLinecnt_"+count+"' value='"+landLine+"'><input type='hidden' id='Note_"+count+"' value='"+Note+"'><input type='hidden' id='twtun_"+count+"' value='"+twittername+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_"+count+"' onclick='hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delcnt("+data[i].id+","+count+")' id='Cdel_cnt_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_cnt_"+count+" ></span></div></span>"; 
					
					 }
					 
					 //landline twitter
					  if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid==1&&LLineTagid!=1&&specialtagid!=1)
					 {
						// console.log("landline twitter");
						count++;
						div_id++;
					
						strHtml += "<span id=contact_"+count+" ><div class='football'> <div class='football-left'><div class='footbal'><h6 id='heading_edit_"+count+"'>"+flname+"</h6><p><i>Individual</i></p></div><div class='three-img'><img src='images/phone.png' alt=''><img src='images/twittericon.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_cnt_"+count+"' onclick='editcontact1("+data[i].id+","+count+","+emailTagid+","+PhoneTagid+","+LLineTagid+","+NoteId+","+nametagid+","+specialtagid+");' style='display:none;'><input class='edit1' id='cnt_edit_edit_"+count+"'  value='' type='button'  onclick='updatecnt("+data[i].id+","+count+")'></div><input type='hidden' id='fname_"+count+"' value='"+fstname+"'><input type='hidden' id='lname_"+count+"' value='"+lstname+"'><input type='hidden' id='email_"+count+"' value='"+email+"'><input type='hidden' id='phone_"+count+"' value='"+phone+"'><input type='hidden' id='landLinecnt_"+count+"' value='"+landLine+"'><input type='hidden' id='Note_"+count+"' value='"+Note+"'><input type='hidden' id='twtun_"+count+"' value='"+twittername+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_"+count+"' onclick='hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delcnt("+data[i].id+","+count+")' id='Cdel_cnt_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_cnt_"+count+" ></span></div></span>"; 
					
					 }
					 
					  //email twitter
					  if(flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid==1&&LLineTagid==1&&specialtagid!=1)
					 {
						 //console.log("email twitter");
						count++;
						div_id++;
					
						strHtml += "<span id=contact_"+count+" ><div class='football'> <div class='football-left'><div class='footbal'><h6 id='heading_edit_"+count+"'>"+flname+"</h6><p><i>Individual</i></p></div><div class='three-img'><img src='images/at1.png' alt=''><img src='images/twittericon.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_cnt_"+count+"' onclick='editcontact1("+data[i].id+","+count+","+emailTagid+","+PhoneTagid+","+LLineTagid+","+NoteId+","+nametagid+","+specialtagid+");' style='display:none;'><input class='edit1' id='cnt_edit_edit_"+count+"'  value='' type='button'  onclick='updatecnt("+data[i].id+","+count+")'></div><input type='hidden' id='fname_"+count+"' value='"+fstname+"'><input type='hidden' id='lname_"+count+"' value='"+lstname+"'><input type='hidden' id='email_"+count+"' value='"+email+"'><input type='hidden' id='phone_"+count+"' value='"+phone+"'><input type='hidden' id='landLinecnt_"+count+"' value='"+landLine+"'><input type='hidden' id='Note_"+count+"' value='"+Note+"'><input type='hidden' id='twtun_"+count+"' value='"+twittername+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_"+count+"' onclick='hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delcnt("+data[i].id+","+count+")' id='Cdel_cnt_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_cnt_"+count+" ></span></div></span>"; 
					
					 }
					 
					 //mobile landline email
					  if(flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid!=1&&LLineTagid!=1&&specialtagid==1)
					 {
						// console.log("mobile landline email");
						count++;
						div_id++;
					
						strHtml += "<span id=contact_"+count+" ><div class='football'> <div class='football-left'><div class='footbal'><h6 id='heading_edit_"+count+"'>"+flname+"</h6><p><i>Individual</i></p></div><div class='three-img'><img src='images/phone.png' alt=''><img src='images/latter1.png' alt=''><img src='images/at1.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_cnt_"+count+"' onclick='editcontact1("+data[i].id+","+count+","+emailTagid+","+PhoneTagid+","+LLineTagid+","+NoteId+","+nametagid+","+specialtagid+");' style='display:none;'><input class='edit1' id='cnt_edit_edit_"+count+"'  value='' type='button'  onclick='updatecnt("+data[i].id+","+count+")'></div><input type='hidden' id='fname_"+count+"' value='"+fstname+"'><input type='hidden' id='lname_"+count+"' value='"+lstname+"'><input type='hidden' id='email_"+count+"' value='"+email+"'><input type='hidden' id='phone_"+count+"' value='"+phone+"'><input type='hidden' id='landLinecnt_"+count+"' value='"+landLine+"'><input type='hidden' id='Note_"+count+"' value='"+Note+"'><input type='hidden' id='twtun_"+count+"' value='"+twittername+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_"+count+"' onclick='hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delcnt("+data[i].id+","+count+")' id='Cdel_cnt_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_cnt_"+count+" ></span></div></span>"; 
					
					 }
					 
					 //mobile email twitter or all
					  if((flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid!=1&&LLineTagid==1&&specialtagid!=1)||(flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid!=1&&LLineTagid!=1&&specialtagid!=1))
					 {
						// console.log("mobile email twitter or all");
						count++;
						div_id++;
					
						strHtml += "<span id=contact_"+count+" ><div class='football'> <div class='football-left'><div class='footbal'><h6 id='heading_edit_"+count+"'>"+flname+"</h6><p><i>Individual</i></p></div><div class='three-img'><img src='images/phone.png' alt=''><img src='images/latter1.png' alt=''><img src='images/at1.png' alt=''><img src='images/twittericon.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Cdone_id_cnt_"+count+"' onclick='editcontact1("+data[i].id+","+count+","+emailTagid+","+PhoneTagid+","+LLineTagid+","+NoteId+","+nametagid+","+specialtagid+");' style='display:none;'><input class='edit1' id='cnt_edit_edit_"+count+"'  value='' type='button'  onclick='updatecnt("+data[i].id+","+count+")'></div><input type='hidden' id='fname_"+count+"' value='"+fstname+"'><input type='hidden' id='lname_"+count+"' value='"+lstname+"'><input type='hidden' id='email_"+count+"' value='"+email+"'><input type='hidden' id='phone_"+count+"' value='"+phone+"'><input type='hidden' id='landLinecnt_"+count+"' value='"+landLine+"'><input type='hidden' id='Note_"+count+"' value='"+Note+"'><input type='hidden' id='twtun_"+count+"' value='"+twittername+"'><div class='close123'><img src='images/cancel.png' id='Ccancel_id_"+count+"' onclick='hide_divContact("+count+");' style='display:none;'><a href='javascript:' onclick='delcnt("+data[i].id+","+count+")' id='Cdel_cnt_"+count+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_cnt_"+count+" ></span></div></span>"; 
					
					 }
					 
					if(x==1)
						{
							$("#div_individuals_search").html(strHtml);
							$("#div_individuals_search").show();
						}
					 else
						 {
							$("#div_individuals").html(strHtml);
							$("#div_individuals").show();
						 }
				
		}
					$('#img_loading1').hide();
					$("#main").css({"opacity": ""});
				if(data.length==0)
					 {
						$("#emptycontactlist").show();
					 }
}	
	
function loadGroups(data,x)
{
			var dynamicIcons='';var j=0;var phoneIcon=0;var emailIcon=0;var smsIcon=0;var twitterIcon=0;var count2 = 1
			var phoneHtml="<img src='images/phone.png' alt=''>";
			var smsHtml="<img src='images/latter1.png' alt=''><img src='images/phone.png' alt=''>";
			var emailHtml="<img src='images/at1.png' alt=''>";
			var twitterHtml="<img src='images/twittericon.png' alt=''>";
			if(x!=1)
				{
					$('#show_groups').show();
				}
			var counterLoop = 0;
			var strHtml = '';
			arrlength = data.length;
			for (var i=0; i<arrlength; i++)
			{	
					 dynamicIcons="<div class='three-img'>";phoneIcon=0;emailIcon=0;smsIcon=0;twitterIcon=0;
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
					 
					 for(j=0;j<data[i].contactInfos.length;j++)
					 {
						 if(data[i].contactInfos[j].contactInfoTag=='PHONE'&&data[i].contactInfos[j].firstName !="||")
						 {
							 smsIcon=1;
						 }
						 if(data[i].contactInfos[j].contactInfoTag=='PHONE'&&data[i].contactInfos[j].firstName =="||")
						 {
							 phoneIcon=1;
						 }
						 if(data[i].contactInfos[j].contactInfoTag=='EMAIL')
						 {
							 emailIcon=1;
						 }
						 if(data[i].contactInfos[j].contactInfoTag=='SPECIAL')
						 {
							 twitterIcon=1;
						 }
					 }
					 
					 if(emailIcon==1)
					 {
						 dynamicIcons += emailHtml;
					 }
					 if(twitterIcon==1)
					 {
						 dynamicIcons += twitterHtml;
					 }
					 if(phoneIcon==1&&smsIcon!=1)
					 {
						 dynamicIcons += phoneHtml;
					 }
					 if(smsIcon==1)
					 {
						 dynamicIcons += smsHtml;
					 }
					 dynamicIcons += "</div>";

					 if(gpname != '')
					 {
						count2++;
						strHtml += "<span id=Gcontact_"+count2+" ><div class='football'> <div class='football-left'><div class='footbal'><h6 id='Gheading_edit_"+count2+"'>"+gpname+"</h6><p><i>Group</i></p></div>"+dynamicIcons+"</div><div class='football-right'><div class='edit'><img src='images/done.png' id='Gdone_id_"+count2+"' onclick='updateGroup("+data[i].id+","+count2+");' style='display:none;'><input class='edit1' id='Gedit_edit_"+count2+"' value='' type='button' onclick='showGroupBtn("+data[i].id+","+count2+")'><input type='hidden' id='gname_"+count2+"' value='"+gpname+"'></div><div class='close123'><img src='images/cancel.png' id='Gcancel_id_"+count2+"' onclick='hide_divGroup("+count2+");' style='display:none;'><a href='javascript:' onclick='delGroup("+data[i].id+","+count2+")' id='Gdel_"+count2+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=GroupEdit_"+count2+" ></span></div></span>";
				
					 }
					 if(x==1)
						 {
							$("#div_groups_search").html(strHtml);
							$("#div_groups_search").show();
						 }
					 else
						 {
							$("#div_groups").html(strHtml);
							$("#div_groups").show();
						 }
					$('#img_loading1').hide(); 
					$("#main").css({"opacity": ""});
			}
			if(data.length==0)
			 {
				$("#div_groups").html("<span id=contact_"+count+" ><div class='football' style='padding: 18px 0px;'> <div class='football-left' style='width:100%; text-align:center !important;'><div class='footbal' style='width:100%;'><h6 id='heading_edit_"+count+"'></h6></div></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_cnt_"+count+" ></span></div></span>");
				$("#div_groups").show();
			 }
}

//function to display contacts on contactbook page
//back up function for showcnt
function showcnt1()
{
		$('#contact_search_enter').val('set');
		$('#broadcast_search_enter').val('');
		AllDivs();
		$('#word5').show();
		$('#show_groups').hide();
		$('#main_icon').show();
		$("#div_individuals_search").html('');
		$("#div_groups_search").html('');
		$('#show_individuals_search').hide();
		$('#show_groups_search').hide();
		
		
		$("#div_individuals").html('');
		$("#div_groups").html('');
		datas='{"detailed": "false"}';
	//	var count = 1;var count2 = 1;var phone = '';
//		var email = '' ;var landLine = '' ;var strHtml = '';
//		var Note='';var emailTagid=1;var PhoneTagid=1;
//		var LLineTagid=1;var NoteId=1;var nametagid=1;
//		var twittername='';var specialtagid=1;
		
		
		var div_id = 1;
	 if (!$('#demo_box_1').is(':checked'))
			{
				$('#show_individuals').show();
				$('#img_loading1').show();
				$("#main").css({"opacity": "0.3"});
				$.ajax({	
					type: "GET",
					contentType: "application/json",
					dataType: 'JSON',
					url : "http://askfastmarket.appspot.com/accounts/contacts?detailed=true&orderBy=firstName&fetchOwner=false",
					cache: false,
					xhrFields: {
				withCredentials: true
				},
					success: function (data) {
						
						loadContacts(data,0);
					},
					error: function (data){
						alert(data.responseJSON.status);
					}
				});
			}
		
		if (!$('#demo_box_2').is(':checked'))
			{
				
				$.ajax({	
					type: "GET",
					contentType: "application/json",
					dataType: 'JSON', 
					xhrFields: {
					withCredentials: true
					},
					url : "http://askfastmarket.appspot.com/accounts/groups?detailed=true",
					cache: false,
					crossDomain: true,
					success: function (data) {
						loadGroups(data,0);
					},
					error: function (data){
						alert(data.responseJSON.status);
					}
				});
			}
		
		
}


function showGroupBtn(gpID,div_id){

	$('#GroupEdit_'+div_id).html('');
	$('#Gedit_edit_'+div_id).hide();
	$('#Gdone_id_'+div_id).show();
	
	$('#Gdel_'+div_id).hide();
	$('#Gcancel_id_'+div_id).show();
	var i=0;var j=0;var output='';var s='';
	position=0;
	$('#img_loading1').show();
	$("#main").css({"opacity": "0.3"});
	
	//getting all contactinfos
	$.ajax({	
		type: "GET",
		contentType: "application/json",
		dataType: 'json',
		xhrFields: {
		withCredentials: true
		}, 
		url : "http://askfastmarket.appspot.com/accounts/contactinfos?detailed=false&orderBy=firstName",
		cache: false,
		crossDomain: true,
		xhrFields: {
		withCredentials: true
		},
		success: function (data) {
			//determining members of group
			for(i=0;i<data.length;i++)
			{
				for(j=0;j<data[i].groupKeys.length;j++)
				{
					if(data[i].groupKeys[j]==gpID&&data[i].contactInfoTag=="NAME")
					{
						s='<p>'+data[i].firstName+' '+data[i].lastName+'</p>';
						position=position+s.length;
						output = output.substr(0, position) + s + output.substr(position);
					}
				}
			}
			
			if(output=='')
				{
					output='<p>This group has no members.</p>';
				}
			
			var gpname = $('#gname_'+div_id).val();
			var edithtml = "<div class='grop-member'><div class='mygrp123'><span>Name:</span><input class='mygrp' id=edit_gpname_"+div_id+" type='text' value='"+gpname+"' /></div><div class='g-member'><div class='heading-grop'><p>Group member</p></div><div class='two-buttans'><img src='images/members.jpg' alt='' onClick='addmember("+gpID+",0)'/><img src='images/+member.jpg' alt='' onClick='addmember("+gpID+",1)'/></div><div class='clear'></div></div><div class='member-last-text'>"+output+"</div><div class='clear'></div></div>";
	
			$('#GroupEdit_'+div_id).append(edithtml); 
			$('#GroupEdit_'+div_id).show();
			$('#img_loading1').hide();
			$("#main").css({"opacity": ""});
			
		},
		error: function (data){
			alert(data.responseJSON.status);
		}
		});
}


function addmember(gpID,x)
{
		$('#line').hide();
		$('#forAdd').hide();
		$('#forRem').hide();
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
		$('#popupContact').hide();
		$('#popupContact2').hide();
		$('#disply_fileform').hide();
		$('#popupContact3').css('position', 'fixed');
		$('#popupContact3').css('top', finalheight);
		$('#popupContact3').css('left', finalWidth+20);
		for (i = zoomListeners.length - 1; i >= 0; --i) {
		zoomListeners[i]();
		}
		}
		setInterval(pollZoomFireEvent, 100);
		})();	
		
		$('#addmmbid').hide();
		$("#adgrpcntid").html('');
		var count = 10;
		var count2 = 1;
		var phone = '';
		var email = '' ;
		var landLine = '' ;
		var div_id = 1;var m=0;
		var phone = '';var isPart=0;
		var email = '' ;
		var landLine = '' ;
		var strHtml = '';
		var Note='';
		var twittername = '';
		var emailTagid=1;
		var PhoneTagid=1;
		var LLineTagid=1;
		var NoteId=1;
     
		$('#img_loading1').show();
		$.ajax({	
			type: "GET",
			contentType: "application/json",
			dataType: 'JSON', 
			xhrFields: {
			withCredentials: true
			},
			url : "http://askfastmarket.appspot.com/accounts/contacts?detailed=true&orderBy=firstName&fetchOwner=false",
			cache: false,

			success: function (data) {
				
						var counterLoop = 0;
						var strHtml = '';
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
									
									var contactinfosLength=data[i].contactInfos.length;
								
									for(var j=0;j<contactinfosLength;j++)
										{
											for(m=0;m<data[i].contactInfos[j].groupKeys.length;m++)
												{
													if(data[i].contactInfos[j].groupKeys[m]==gpID)
													{
														isPart=1;
													}
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
								//Block to be executed in case of add member
								if(x==1)
								{
									$('#line').show();
									$('#forRem').hide();
									$('#forAdd').show();
								//email
									 if(flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid==1&&LLineTagid==1&&specialtagid==1)
									 {
										// console.log("email");
										count++;
										div_id++;
									
										strHtml += "<div class='ah1'><span><input id='checkboxaddcntgrp_"+count+"' type='checkbox' name='chkbox' value="+emailTagid+"|"+PhoneTagid+"|"+nametagid+"|"+LLineTagid+"|"+specialtagid+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon1'><div class='leftalign'><img alt='' src='images/at1.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //phone
									if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid!=1&&LLineTagid==1&&specialtagid==1)
									 {
										// console.log("phone");
										count++;
										div_id++;
									
										strHtml += "<div class='ah1'><span><input id='checkboxaddcntgrp_"+count+"' type='checkbox' name='chkbox' value="+emailTagid+"|"+PhoneTagid+"|"+nametagid+"|"+LLineTagid+"|"+specialtagid+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon1'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/latter1.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //landline
									if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid==1&&LLineTagid!=1&&specialtagid==1)
									 {
										// console.log("landline");
										count++;
										div_id++;
									
										strHtml += "<div class='ah1'><span><input id='checkboxaddcntgrp_"+count+"' type='checkbox' name='chkbox' value="+emailTagid+"|"+PhoneTagid+"|"+nametagid+"|"+LLineTagid+"|"+specialtagid+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon1'><div class='leftalign'><img alt='' src='images/phone.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //twitter
									if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid==1&&LLineTagid==1&&specialtagid!=1)
									 {
										//console.log("twitter");
										count++;
										div_id++;
									
										strHtml += "<div class='ah1'><span><input id='checkboxaddcntgrp_"+count+"' type='checkbox' name='chkbox' value="+emailTagid+"|"+PhoneTagid+"|"+nametagid+"|"+LLineTagid+"|"+specialtagid+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon1'><div class='leftalign'><img alt='' src='images/twittericon.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //phone landline
									 if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid!=1&&LLineTagid!=1&&specialtagid==1)
									 {
										//console.log("phone landline");
										count++;
										div_id++;
									
										strHtml += "<div class='ah1'><span><input id='checkboxaddcntgrp_"+count+"' type='checkbox' name='chkbox' value="+emailTagid+"|"+PhoneTagid+"|"+nametagid+"|"+LLineTagid+"|"+specialtagid+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon1'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/latter1.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //phone email
									  if(flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid!=1&&LLineTagid==1&&specialtagid==1)
									 {
									//	console.log("phone email");
										count++;
										div_id++;
									
										strHtml += "<div class='ah1'><span><input id='checkboxaddcntgrp_"+count+"' type='checkbox' name='chkbox' value="+emailTagid+"|"+PhoneTagid+"|"+nametagid+"|"+LLineTagid+"|"+specialtagid+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon1'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/latter1.png'><img alt='' src='images/at1.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //phone twitter
									  if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid!=1&&LLineTagid==1&&specialtagid!=1)
									 {
									//	 console.log("phone twitter");
										count++;
										div_id++;
									
										strHtml += "<div class='ah1'><span><input id='checkboxaddcntgrp_"+count+"' type='checkbox' name='chkbox' value="+emailTagid+"|"+PhoneTagid+"|"+nametagid+"|"+LLineTagid+"|"+specialtagid+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon1'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/latter1.png'><img alt='' src='images/twittericon.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //landline email
									  if(flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid==1&&LLineTagid!=1&&specialtagid==1)
									 {
									//	 console.log("landline email");
										count++;
										div_id++;
									
										strHtml += "<div class='ah1'><span><input id='checkboxaddcntgrp_"+count+"' type='checkbox' name='chkbox' value="+emailTagid+"|"+PhoneTagid+"|"+nametagid+"|"+LLineTagid+"|"+specialtagid+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon1'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/at1.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //landline twitter
									  if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid==1&&LLineTagid!=1&&specialtagid!=1)
									 {
									//	 console.log("landline twitter");
										count++;
										div_id++;
									
										strHtml += "<div class='ah1'><span><input id='checkboxaddcntgrp_"+count+"' type='checkbox' name='chkbox' value="+emailTagid+"|"+PhoneTagid+"|"+nametagid+"|"+LLineTagid+"|"+specialtagid+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon1'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/twittericon.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									  //email twitter
									  if(flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid==1&&LLineTagid==1&&specialtagid!=1)
									 {
										// console.log("email twitter");
										count++;
										div_id++;
									
										strHtml += "<div class='ah1'><span><input id='checkboxaddcntgrp_"+count+"' type='checkbox' name='chkbox' value="+emailTagid+"|"+PhoneTagid+"|"+nametagid+"|"+LLineTagid+"|"+specialtagid+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon1'><div class='leftalign'><img alt='' src='images/at1.png'><img alt='' src='images/twittericon.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //mobile landline email
									  if(flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid!=1&&LLineTagid!=1&&specialtagid==1)
									 {
										// console.log("mobile landline email");
										count++;
										div_id++;
									
										strHtml += "<div class='ah1'><span><input id='checkboxaddcntgrp_"+count+"' type='checkbox' name='chkbox' value="+emailTagid+"|"+PhoneTagid+"|"+nametagid+"|"+LLineTagid+"|"+specialtagid+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon1'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/latter1.png'><img alt='' src='images/at1.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //mobile email twitter or all
									  if((flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid!=1&&LLineTagid==1&&specialtagid!=1)||(flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid!=1&&LLineTagid!=1&&specialtagid!=1))
									 {
										// console.log("mobile email twitter or all");
										count++;
										div_id++;
									
										strHtml += "<div class='ah1'><span><input id='checkboxaddcntgrp_"+count+"' type='checkbox' name='chkbox' value="+emailTagid+"|"+PhoneTagid+"|"+nametagid+"|"+LLineTagid+"|"+specialtagid+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon1'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/latter1.png'><img alt='' src='images/at1.png'><img alt='' src='images/twittericon.png'></div></span><div class='clear'></div></div>"; 
									
									 }
							 
							$("#adgrpcntid").html(strHtml);
							$('#addmmbid').show();
							$('#bothhc').show();
								}
								
								//Block to be executed in case of remove member
								if(x==0)
								{
									$('#line').show();
									$('#forAdd').hide();
									$('#forRem').show();
								//email
									 if(flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid==1&&LLineTagid==1&&specialtagid==1&&isPart==1)
									 {
									//	 console.log("email");
										count++;
										div_id++;
									
										strHtml += "<div class='ah1'><span><input id='checkboxaddcntgrp_"+count+"' type='checkbox' name='chkbox' value="+emailTagid+"|"+PhoneTagid+"|"+nametagid+"|"+LLineTagid+"|"+specialtagid+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon1'><div class='leftalign'><img alt='' src='images/at1.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //phone
									if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid!=1&&LLineTagid==1&&specialtagid==1&&isPart==1)
									 {
										// console.log("phone");
										count++;
										div_id++;
									
										strHtml += "<div class='ah1'><span><input id='checkboxaddcntgrp_"+count+"' type='checkbox' name='chkbox' value="+emailTagid+"|"+PhoneTagid+"|"+nametagid+"|"+LLineTagid+"|"+specialtagid+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon1'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/latter1.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //landline
									if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid==1&&LLineTagid!=1&&specialtagid==1&&isPart==1)
									 {
									//	 console.log("landline");
										count++;
										div_id++;
									
										strHtml += "<div class='ah1'><span><input id='checkboxaddcntgrp_"+count+"' type='checkbox' name='chkbox' value="+emailTagid+"|"+PhoneTagid+"|"+nametagid+"|"+LLineTagid+"|"+specialtagid+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon1'><div class='leftalign'><img alt='' src='images/phone.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //twitter
									if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid==1&&LLineTagid==1&&specialtagid!=1&&isPart==1)
									 {
									//	console.log("twitter");
										count++;
										div_id++;
									
										strHtml += "<div class='ah1'><span><input id='checkboxaddcntgrp_"+count+"' type='checkbox' name='chkbox' value="+emailTagid+"|"+PhoneTagid+"|"+nametagid+"|"+LLineTagid+"|"+specialtagid+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon1'><div class='leftalign'><img alt='' src='images/twittericon.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //phone landline
									 if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid!=1&&LLineTagid!=1&&specialtagid==1&&isPart==1)
									 {
									//	console.log("phone landline");
										count++;
										div_id++;
									
										strHtml += "<div class='ah1'><span><input id='checkboxaddcntgrp_"+count+"' type='checkbox' name='chkbox' value="+emailTagid+"|"+PhoneTagid+"|"+nametagid+"|"+LLineTagid+"|"+specialtagid+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon1'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/latter1.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //phone email
									  if(flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid!=1&&LLineTagid==1&&specialtagid==1&&isPart==1)
									 {
										//console.log("phone email");
										count++;
										div_id++;
									
										strHtml += "<div class='ah1'><span><input id='checkboxaddcntgrp_"+count+"' type='checkbox' name='chkbox' value="+emailTagid+"|"+PhoneTagid+"|"+nametagid+"|"+LLineTagid+"|"+specialtagid+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon1'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/latter1.png'><img alt='' src='images/at1.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //phone twitter
									  if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid!=1&&LLineTagid==1&&specialtagid!=1&&isPart==1)
									 {
									//	 console.log("phone twitter");
										count++;
										div_id++;
									
										strHtml += "<div class='ah1'><span><input id='checkboxaddcntgrp_"+count+"' type='checkbox' name='chkbox' value="+emailTagid+"|"+PhoneTagid+"|"+nametagid+"|"+LLineTagid+"|"+specialtagid+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon1'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/latter1.png'><img alt='' src='images/twittericon.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //landline email
									  if(flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid==1&&LLineTagid!=1&&specialtagid==1&&isPart==1)
									 {
									//	 console.log("landline email");
										count++;
										div_id++;
									
										strHtml += "<div class='ah1'><span><input id='checkboxaddcntgrp_"+count+"' type='checkbox' name='chkbox' value="+emailTagid+"|"+PhoneTagid+"|"+nametagid+"|"+LLineTagid+"|"+specialtagid+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon1'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/at1.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //landline twitter
									  if(flname != ''&& fstname != "N"&&emailTagid==1&&PhoneTagid==1&&LLineTagid!=1&&specialtagid!=1&&isPart==1)
									 {
									//	 console.log("landline twitter");
										count++;
										div_id++;
									
										strHtml += "<div class='ah1'><span><input id='checkboxaddcntgrp_"+count+"' type='checkbox' name='chkbox' value="+emailTagid+"|"+PhoneTagid+"|"+nametagid+"|"+LLineTagid+"|"+specialtagid+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon1'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/twittericon.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									  //email twitter
									  if(flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid==1&&LLineTagid==1&&specialtagid!=1&&isPart==1)
									 {
									//	 console.log("email twitter");
										count++;
										div_id++;
									
										strHtml += "<div class='ah1'><span><input id='checkboxaddcntgrp_"+count+"' type='checkbox' name='chkbox' value="+emailTagid+"|"+PhoneTagid+"|"+nametagid+"|"+LLineTagid+"|"+specialtagid+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon1'><div class='leftalign'><img alt='' src='images/at1.png'><img alt='' src='images/twittericon.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //mobile landline email
									  if(flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid!=1&&LLineTagid!=1&&specialtagid==1&&isPart==1)
									 {
									//	 console.log("mobile landline email");
										count++;
										div_id++;
									
										strHtml += "<div class='ah1'><span><input id='checkboxaddcntgrp_"+count+"' type='checkbox' name='chkbox' value="+emailTagid+"|"+PhoneTagid+"|"+nametagid+"|"+LLineTagid+"|"+specialtagid+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon1'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/latter1.png'><img alt='' src='images/at1.png'></div></span><div class='clear'></div></div>"; 
									
									 }
									 
									 //mobile email twitter or all
									  if((flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid!=1&&LLineTagid==1&&specialtagid!=1&&isPart==1)||(flname != ''&& fstname != "N"&&emailTagid!=1&&PhoneTagid!=1&&LLineTagid!=1&&specialtagid!=1&&isPart==1))
									 {
									//	 console.log("mobile email twitter or all");
										count++;
										div_id++;
									
										strHtml += "<div class='ah1'><span><input id='checkboxaddcntgrp_"+count+"' type='checkbox' name='chkbox' value="+emailTagid+"|"+PhoneTagid+"|"+nametagid+"|"+LLineTagid+"|"+specialtagid+" onClick='changeparent()' /></span><span>"+flname+"</span> <span class='icon1'><div class='leftalign'><img alt='' src='images/phone.png'><img alt='' src='images/latter1.png'><img alt='' src='images/at1.png'><img alt='' src='images/twittericon.png'></div></span><div class='clear'></div></div>"; 
									
									 }
							 
							$("#adgrpcntid").html(strHtml);
							$('#addmmbid').show();
								}
							
							if(i==arrlength-1&&x==1)
							{
								
								strHtml += "<div class='group-name-buttan11111111' id='addmmbid' style='display:none;'><input class='group-name-buttan123' type='button' value='Add members' onClick='add_member("+gpID+",0)' /></div>";
								$("#adgrpcntid").html(strHtml);
								$('#addmmbid').show();
							}
							
							if(i==arrlength-1&&x==0&&strHtml!='')
							{
								
								strHtml += "<div class='group-name-buttan11111111' id='addmmbid' style='display:none;'><input class='group-name-buttan123' type='button' value='Remove members' onClick='add_member("+gpID+",1)' /></div>";
								$("#adgrpcntid").html(strHtml);
								$('#addmmbid').show();
							}
							if(i==arrlength-1&&x==0&&strHtml=='')
							{
								strHtml+="<div class='ah1'><span style='padding: 15px 0 15px 257px;'>This group has no members.</span></div>";
								$("#adgrpcntid").html(strHtml);
								$('#addmmbid').show();
							}
							
					
				}
						if(arrlength==0)
							 {
							 //alert("hello");
							 	//$("#emptycontactlist").show();
							 	//$("#div_individuals").html("Your contact list is empty.");
								//$("#div_individuals").show();
							 }
			} ,
			error: function (data){
				alert(data.responseJSON.status);
			}
		});
		
			$('#img_loading1').hide();
			centerPopup();
			loadPopup3();
			$('#background_load').show();
}

//back up function for editcontact
function editcontact1(count_id,div_id,emailTagid,PhoneTagid,LLineTagid,NoteId,nametagid,specialtagid)
{
	var fname = $('#fname_'+div_id).val();
	var lname = $('#lname_'+div_id).val();
    var email = $('#email_'+div_id).val();
	var phone = $('#phone_'+div_id).val();
	var landLine = $('#landLinecnt_'+div_id).val();
	var Note = $('#Note_'+div_id).val();
	var twtname = $('#twtun_'+div_id).val();
	

	var edit_id=document.getElementById("edit_id_"+div_id).value;
	var edit_fname=document.getElementById("edit_fname_"+div_id).value;
	var edit_lname=document.getElementById("edit_lname_"+div_id).value;
	var edit_mobile=document.getElementById("edit_mobile_"+div_id).value;
	var edit_landno=document.getElementById("edit_landno_"+div_id).value;
	var edit_email = document.getElementById("edit_email_"+div_id).value;
	var edit_note = document.getElementById("edit_note"+div_id).value;
	var edit_twtname = document.getElementById("edit_twtunm_"+div_id).value;
	
//	if(fname==edit_fname&&lname==edit_lname&&email==edit_email&&landLine==edit_landno&&phone==edit_mobile&&Note==edit_note&&twtname==edit_twtname)
//		{
//			//alert("Please update atleast one field");
//			return false;
//		}
		
	if(edit_email==''&&edit_twtname==''&&edit_mobile==''&&edit_landno==''){
	alert("Please provide at least one communication alias from email, mobile, land-line and twitter username");
	 return false;
	}
	
	if(edit_fname==""){
		alert("First Name Is Empty");
	 	return false;
	}
	if(edit_lname==""){
		alert("Last Name Is Empty");
	 	return false;
	}
	
	
	if(edit_email!='')
		{
			var emailRegexStr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
			var isvalid = emailRegexStr.test(edit_email); 
			
			if (!isvalid) {
			  alert("Not a valid e-mail address");
			  return false;
			}
		}
	
	if(edit_mobile!='')
		{
			var phoneNovalidation = /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/;
			var isvalidNo = phoneNovalidation.test(edit_mobile); 
			if (!isvalidNo) {
			  alert("Not a valid Phone number");
			  return false;
			}
		}
	
	if(edit_landno!='')
		{
		var Landlineval = /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/;
		if(edit_landno)
			{
				var isvalidNo = Landlineval.test(edit_landno); 
				if (!isvalidNo) {
				  alert("Not a valid Landline number");
				  return false;
				}
			}
		}
		
		
			if(emailTagid!=1)
				{
					var putemailtag='"id":"'+emailTagid+'"';var ec=',';
				}
			
			if(specialtagid!=1)
				{
					var puttwittertag='"id":"'+specialtagid+'"';var tc=',';
				}
			
			if(LLineTagid!=1)
				{
					var putlandlinetag='"id":"'+LLineTagid+'"';var lc=',';
				}
			
			if(PhoneTagid!=1)
				{
					var putphonetag='"id":"'+PhoneTagid+'"';var pc=',';
				}
			
			if(NoteId!=1)
				{
					var putnotetag='"id":"'+NoteId+'"';var nc=',';
				}
			
			if(emailTagid==1)
				{
					var putemailtag='';var ec='';
				}
			
			if(specialtagid==1)
				{
					var puttwittertag='';var tc='';
				}
			
			if(LLineTagid==1)
				{
					var putlandlinetag='';var lc='';
				}
			
			if(PhoneTagid==1)
				{
					var putphonetag='';var pc='';
				}
			
			if(NoteId==1)
				{
					var putnotetag='';var nc='';
				}
			
			
			//console.log("case handled full name and landline and email and twitter and mobile and note");
			datasinfo = '[{"id":"'+nametagid+'","contactInfoTag":"Name","contactInfo":"'+edit_fname+' '+edit_lname+'","firstName":"'+edit_fname+'","lastName":"'+edit_lname+'","contactKey": "'+count_id+'"},{'+putemailtag+''+ec+'"contactInfoTag":"Email","contactInfo":"'+edit_email+'","contactKey": "'+count_id+'"},{'+puttwittertag+''+tc+'"contactInfoTag":"Special","contactInfo":"'+edit_twtname+'","contactKey": "'+count_id+'"},{'+putlandlinetag+''+lc+'"contactInfoTag":"Phone","contactInfo":"'+edit_landno+'","firstName":"||","contactKey": "'+count_id+'"},{'+putphonetag+''+pc+'"contactInfoTag":"Phone","contactInfo":"'+edit_mobile+'","contactKey": "'+count_id+'"},{'+putnotetag+''+nc+'"contactInfoTag":"Other","contactInfo":"'+edit_note+'","contactKey": "'+count_id+'"}]';
		
		
	
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
						//	console.log(data);
							$('#contact_'+div_id).fadeOut(40);
							$('#heading_edit_'+div_id).html(edit_fname+' '+edit_lname );
							$('#fname_'+div_id).val(edit_fname);
							$('#lname_'+div_id).val(edit_lname);
							$('#email_'+div_id).val(edit_email);
							$('#phone_'+div_id).val(edit_mobile);	
							$('#landLinecnt_'+div_id).val(edit_landno);
							$('#Note_'+div_id).val(edit_note);	
							$('#twtun_'+div_id).val(edit_twtname);	
										
							$('#contactEdit_cnt_'+div_id).hide();
							$('#edit_contact_'+div_id).hide();
							$('#cnt_edit_edit_'+div_id).show();
							$('#img_loading1').hide(); 
							$("#main").css({"opacity": ""});						
							$('#Cdone_id_cnt_'+div_id).hide();					
							$('#Cdel_cnt_'+div_id).show();
							$('#Ccancel_id_'+div_id).hide();
							
							$('#contact_'+div_id).fadeIn(2000);
							$('#contact_'+div_id).focus();
							showcnt1();
						
				},
						error: function (data){
							alert(data.responseJSON.status);
						}
		});
	
		

}





function addcnt2()
{
	var rndid = Math.floor(Math.random() * (9999 - 100 + 1)) + 1;
	var fr_name=document.getElementById("fr_name").value;
	var srname=document.getElementById("srname").value;
	var mob = document.getElementById('mob').value;
	var ldnum=document.getElementById("ldnum").value;
	var email_man = document.getElementById('email_man').value;
	var Notes = document.getElementById('Notes').value;
	var twtusername = document.getElementById('twtusername').value;
	
	if(fr_name=="" ){
	alert("Please input First Name");
	 return false;
	}
	if(srname=="" ){
	alert("Please input Surname");
	 return false;
	}
	
	if(email_man==''&&twtusername==''&&mob==''&&ldnum==''){
	alert("Please provide at least one communication alias from email, mobile, land-line and twitter username");
	 return false;
	}
	
	if(email_man!='')
		{
			var emailRegexStr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
			var isvalid = emailRegexStr.test(email_man); 
			
			 if (!isvalid) {
			  alert("Not a valid e-mail address");
			  return false;
			}
		}
	
	if(mob!='')
		{
			var phoneNovalidation = /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/;
			var isvalidNo = phoneNovalidation.test(mob); 
			if (!isvalidNo) {
			  alert("Not a valid Phone number");
			  return false;
			}
		}
		
	var Landlineval = /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/;
	if(ldnum!='')
		{
			var isvalidNo = Landlineval.test(ldnum); 
			if (!isvalidNo) {
			  alert("Not a valid Landline number");
			  return false;
			}
		}
	
	
	 datas = '{"contactInfoRefs":['+rndid+'],"id":'+rndid+',"lastAvailableTime":"1380909873252","ownerKey":"yasir"}';
	 
	 datasinfo = '[{"contactInfoTag":"Name","contactInfo":"'+fr_name+' '+srname+'","firstName":"'+fr_name+'","lastName":"'+srname+'","contactKey": "'+rndid+'"},{"contactInfoTag":"Phone","contactInfo":"'+mob+'","contactKey": "'+rndid+'"},{"contactInfoTag":"Phone","contactInfo":"'+ldnum+'","firstName":"||","contactKey": "'+rndid+'"},{"contactInfoTag":"Other","contactInfo":"'+Notes+'","contactKey": "'+rndid+'"},{"contactInfoTag":"Email","contactInfo":"'+email_man+'","contactKey": "'+rndid+'"},{"contactInfoTag":"Special","contactInfo":"'+twtusername+'","contactKey": "'+rndid+'"}]';
	
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
						url : "http://askfastmarket.appspot.com/accounts/contacts",
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
						data: datasinfo,
						url : "http://askfastmarket.appspot.com/accounts/contactinfos?forceNewContact=true",
						cache: false,
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
						$('#twtusername').val('');
						$('#Notes').val('');
						$('#popupContact').hide(); 
						$('#background_load').hide();
							showcnt1();
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


	
	// Add Cont
	
	//del Group
function delgroup(groupid){
	 var x;
      var r=confirm("Do you want to Delete this Group");
	   if (r==true)
	   {
			x="You pressed OK!";
	   }
	   else
	   {
			return false;
	  }
	
   		$.ajax({	
				type: "DELETE",
				contentType: "application/json",
				dataType: 'html', 
				xhrFields: {
				withCredentials: true
				},
				url : "http://askfastmarket.appspot.com/accounts/groups/"+groupid,
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
				xhrFields: {
				withCredentials: true
				},
				url : "http://askfastmarket.appspot.com/accounts/groups",
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
				for (var i=1; i<arrlength; i++)
						{	
					ctid = obj[i].id;
					
					 $.ajax({	
					type: "GET",
					contentType: "application/json",
					dataType: 'html', 
					xhrFields: {
					withCredentials: true
					},
					url : "http://askfastmarket.appspot.com/accounts/groups/"+ctid,
					cache: false,
					crossDomain: true,
					xhrFields: {
					withCredentials: true
					},
					success: function (data) {
					 obj = JSON.parse(data);
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
					},
					error: function (data){
						alert(data.responseJSON.status);
					}
				})
					
					}
				},
				error: function (data){
					alert(data.responseJSON.status);
				}
				
				}) 
				},
				error: function (data){
					alert(data.responseJSON.status);
				}
				}) 
		}
	//del group
	
	//show group
function showgroup(){
				

				$("#contact-name").show();
				$('#img_loading1').show();
				$("#main").css({"opacity": "0.3"});;
				$.ajax({	
				type: "GET",
				contentType: "application/json",
				dataType: 'html', 
				xhrFields: {
				withCredentials: true
				},				url : "http://askfastmarket.appspot.com/accounts/groups",
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
					for (var i=1; i<arrlength; i++)
						{	
					ctid = obj[i].id;				
					
					 $.ajax({	
					type: "GET",
					contentType: "application/json",
					dataType: 'html', 
					xhrFields: {
					withCredentials: true
					},
					url : "http://askfastmarket.appspot.com/accounts/groups/"+ctid,
					cache: false,
					crossDomain: true,
					xhrFields: {
					withCredentials: true
					},
					success: function (data) {
					 obj = JSON.parse(data);
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
					
					},
					error: function (data){
						alert(data.responseJSON.status);
					}
				})
					
			}
		},
				error: function (data){
					alert(data.responseJSON.status);
				}
				
	})
}



function add_member(gpid,x)
{
			 $('#img_loading1').show();
			 $("#main").css({"opacity": "0.3"});
			 var counter1=0;var c='';var j=0;var k=0;
			 var checkboxes = new Array();
			 var allContactinfos = [];
			 var contactsToremove = [];
			 
			 //loop to sum up all selected members
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
								j++;
								c=checkboxEmail.split("|");
								counter1++;
										if(c[0]!=''&&c[0]!=1)
										{
											s = ''+c[0]+',';
											allContactinfos.push(+c[0]);
											contactsToremove.push(+c[0]);
										}
										if(c[1]!=''&&c[1]!=1)
										{
											s1 = ''+c[1]+',';
										allContactinfos.push(+c[1]);
										contactsToremove.push(+c[1]);
										}
										if(c[2]!=''&&c[2]!=1)
										{
											s2 = ''+c[2]+',';
										allContactinfos.push(+c[2]);
										contactsToremove.push(+c[2]);
										}
										if(c[3]!=''&&c[3]!=1)
										{
											s3 = ''+c[3]+',';
										allContactinfos.push(+c[3]);
										contactsToremove.push(+c[3]);
										}
										if(c[4]!=''&&c[4]!=1)
										{
											s4 = ''+c[4]+',';
										allContactinfos.push(+c[4]);
										contactsToremove.push(+c[4]);
										}
							}
					}
			}
			});
			
				if(j==0)
					{
						alert("Please select at least one individual");
					}
				else
					{
						
						$.ajax({	
							type: "GET",
							contentType: "application/json",
							dataType: 'json',
							xhrFields: {
							withCredentials: true
							}, 
							url : "http://askfastmarket.appspot.com/accounts/groups/"+gpid,
							cache: false,
							crossDomain: true,
							xhrFields: {
							withCredentials: true
							},
							success: function (data) {
								//getting already added members to group
								for(l=0;l<data.contactInfoIds.length;l++)
								{
									allContactinfos.push(data.contactInfoIds[l]);
								}
								
								//removing duplicates
								var i, j, cur, found;
								for (i = allContactinfos.length - 1; i >= 0; i--) {
									cur = allContactinfos[i];
									found = false;
									for (j = i - 1; !found && j >= 0; j--) {
										if (cur === allContactinfos[j]) {
											if (i !== j) {
												allContactinfos.splice(i, 1);
											}
											found = true;
										}
									}
								}
								
								//removing selected members
								if(x==1)
									{
										for(var a9=0;a9<contactsToremove.length;a9++)
											{
												for(a10=0;a10<allContactinfos.length;a10++)
													{
														if(contactsToremove[a9]==allContactinfos[a10])
															{
																allContactinfos.splice(a10, 1);
															}
													}
											}
											if(allContactinfos.length==0)
											{
												allContactinfos =[];
											}
									}
								
								datasinfo = '{"id":"'+gpid+'","groupInfo": {"companyName": ""},"contactInfoIds": ['+allContactinfos+'],"ownerKey": "yasir"}';
								//alert(datasinfo);
								//adding members to group
								$.ajax({	
								type: "PUT",
								contentType: "application/json",
								dataType: 'json',
								data: datasinfo,
								xhrFields: {
								withCredentials: true
								}, 
								url : "http://askfastmarket.appspot.com/accounts/groups/"+gpid,
								cache: false,
								crossDomain: true,
								xhrFields: {
								withCredentials: true
								},
								success: function (data) {
									disablePopup3();
									showcnt1();
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
}


//Add Groups
function addgrp1(){
	
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
		
		 datasinfo = '{"contactInfoIds": ['+allID+'],"id":'+rndid+',"name":"'+gpname+'" }'; 
			
		$('#img_loading1').show();
		$("#main").css({"opacity": "0.3"});
		$.ajax({ 
			type: "POST",
			contentType: "application/json",
			dataType: 'json', 
			data: datasinfo,
			xhrFields: {
			withCredentials: true
			},
			url : "http://askfastmarket.appspot.com/accounts/groups",
			cache: false,
			crossDomain: true,
			xhrFields: {
			withCredentials: true
			},
			success: function (data) {
	
				$('#img_loading1').hide();
				$("#main").css({"opacity": ""});
				$('#popupContact2').hide(); 
				$('#background_load').hide();
				$('#group_name').val('');
				showcnt1();
				
				
			},
			error: function (data){
				alert(data.responseJSON.status);
			}
	
		});
		
}





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
		
		 datasinfo = '{"contactInfoIds": ['+allID+'],"id":'+rndid+',"name":"'+gpname+'" }'; 

			
		$('#img_loading1').show();
		$("#main").css({"opacity": "0.3"});
		$.ajax({ 
			type: "POST",
			contentType: "application/json",
			dataType: 'json', 
			data: datasinfo,
			xhrFields: {
			withCredentials: true
			},
			url : "http://askfastmarket.appspot.com/accounts/groups",
			cache: false,
			crossDomain: true,
			xhrFields: {
			withCredentials: true
			},
			success: function (data) {
	
	
				var strhtml = "<span id=Gcontact_"+rndid+" ><div class='football'> <div class='football-left'><div class='footbal'><h6 id='Gheading_edit_"+rndid+"'>"+gpname+"</h6><p><i>Group</i></p></div><div class='three-img'><img src='images/phone.png' alt=''><img src='images/latter1.png' alt=''><img src='images/at1.png' alt=''></div></div><div class='football-right'><div class='edit'><img src='images/done.png' id='Gdone_id_"+rndid+"' onclick='updateGroup("+data.id+","+rndid+");' style='display:none;'><input class='edit1' id='Gedit_edit_"+rndid+"' value='' type='button' onclick='showGroupBtn("+data.id+","+rndid+")'><input type='hidden' id='gname_"+rndid+"' value='"+gpname+"'></div><div class='close123'><img src='images/cancel.png' id='Gcancel_id_"+rndid+"' onclick='hide_divGroup("+rndid+");' style='display:none;'><a href='javascript:' onclick='delGroup("+data.id+","+rndid+")' id='Gdel_"+rndid+"'><img src='images/close.png' alt=''></a></div><div class='clear'></div></div><div class='clear'></div><span id=GroupEdit_"+rndid+" ></span></div></span>";	
					
					
				$('#div_groups').after(strhtml);
				$('#img_loading1').hide();
				$("#main").css({"opacity": ""});
				$('#popupContact2').hide(); 
				$('#background_load').hide();
				
				
			},
			error: function (data){
				alert(data.responseJSON.status);
			}
	
		});
		
}


//enabling enter key for broadcast and phonebook search
$(document).ready(function(){
	$(document).keypress(function(e) {
		
    if(e.which == 13&&document.getElementById("contact_search_enter").value=='set'&&document.getElementById("group_name").value==''&&(!$('#popupContact2').is(':visible'))) {
		search_cnt();
    }
	
	if(e.which == 13&&(document.getElementById("group_name").value==''||document.getElementById("group_name").value!='') ) {
		e.preventDefault();
	}
	
	
	
});
	

});