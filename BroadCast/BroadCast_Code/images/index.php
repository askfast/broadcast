<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="../../assets/ico/favicon.png">
<style>
.loadimageUploadAjax2 {
    
    left: 592px;
    padding: 2px;
    position: absolute;
    top: 360px;
    width: 220px;
    z-index: 1022;
}
</style>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script type="text/javascript">
function showadd(){
//alert("Hello");

$('#element1').show();
$('#element2').show();
window.scrollBy(0,50000); // horizontal and vertical scroll increments
scrolldelay = setTimeout('pageScroll()',100); // scrolls every 100 milliseconds
}
 
	/*function fileup(){
var filename = ''
if (document.getElementById('attachment').value !== '') {
 alert('File Attached');
 filename = document.getElementById('attachment').value;
}   
else { 
 alert('No File Attached');
}

   //alert(cntctid);
		url="http://askfastmarket1.appspot.com/login?username=yasir&password=a78a9b37dce265aa2e87ca6db3e1d287";
		$.post(url,function(session){
			var jasonValue = JSON.stringify(session) ; 
			var n=jasonValue.replace('{"X-SESSION_ID":"',"");
			var id=n.replace('"}',"");

			// ajax request to get contact's
			$.ajax({	
				type: "GET",
				contentType: "text/html",
				dataType: 'JSON', 
				beforeSend : function(xhr) {          
					xhr.setRequestHeader("X-SESSION_ID" , id)
				  },
				url:"http://askfastmarket1.appspot.com/blobstore/sasrgds?!",
				cache: false,
				crossDomain: true,
				xhrFields: {
				withCredentials: true
				},
				success: function (data) {
				alert(data);
				}
				}) 
		});
	}*/
function delcnt(cntctid){
   //alert(cntctid);
		url="http://askfastmarket1.appspot.com/login?username=yasir&password=a78a9b37dce265aa2e87ca6db3e1d287";
		$.post(url,function(session){
			var jasonValue = JSON.stringify(session) ; 
			var n=jasonValue.replace('{"X-SESSION_ID":"',"");
			var id=n.replace('"}',"");

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
				$('#img_loading1').show();
				
				$.ajax({	
					type: "GET",
					contentType: "application/json",
					dataType: 'html', 
				//	data: datas,
					beforeSend : function(xhr) {          
						xhr.setRequestHeader("X-SESSION_ID" , id)
					  },
					url : "http://askfastmarket1.appspot.com/accounts/contacts",
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
						num = 2;
						list = [3434,3435,3436,3437,3438,3494,3910,3911,3912,3913,3914,5656,7877];
						/*	function isInList( ctid, list ) {
						// List is an Array()
							result = false;
							for(i in list) {
								if(ctid == list[i]) { result = true }
							}
							return result
						}*/
						if(ctid != 3434 && ctid != 3435 && ctid != 3436 && ctid != 3437 && ctid != 3438 && ctid != 3494 && ctid != 3910 && ctid != 3911 && ctid != 3912 && ctid != 3913 && ctid != 3914 && ctid != 5656 && ctid != 7877) {
						
						 $.ajax({	
						type: "GET",
						contentType: "application/json",
						dataType: 'html', 
						//data: datas,
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
						//alert(data+"info");
						 obj = JSON.parse(data);
						 if(obj.firstName)
						 {
							fstname = obj.firstName;
						 }
						 else
						 {
							fstname = '';
						 }
						 if(obj.firstName)
						 {
							lstname = obj.lastName;
						 }
						 else
						 {
							lstname = '';
						 }
						 if(fstname != '' && lstname != '')
						 {
						 flname = fstname+" "+lstname;
						 counterLoop++;
						 }
						 else
						 {
							flname = '';	
						 }
						 
						// alert(obj);
						// alert(obj.id);
						 
						 if(counterLoop%2 == 0){
						 var myclass = "class='contact-name2'";
						 }else{
						 var myclass = "class='contact-name1 contact-name2'";
						 }
						 if(flname != '')
						 {
						strHtml += "<p "+myclass+"><span>"+flname +"</span><span>Reaching Media</span><span>Keywords</span><span><span><input type='button' class='edit1' value=''></span><span style='padding-left:35px;'><img alt='' onclick='delcnt("+obj.id+")' src='images/close.png'></span><span style='padding-left:24px;'><input type='button' class='dupli' value=''></span></span></p>"; 
						 }
						$(".contact-name").html(strHtml);
						$('#img_loading1').hide(); 
						}
					})
						//	alert("It's there!");
						}
						// alert(obj[0].id);
						//alert(obj.ownerKey);
						}
					}
					}) 
				//alert(data);
				}
				}) 
		});

}
	function showcnt(){
		url="http://askfastmarket1.appspot.com/login?username=yasir&password=a78a9b37dce265aa2e87ca6db3e1d287";
		$.post(url,function(session){
			var jasonValue = JSON.stringify(session) ; 
			var n=jasonValue.replace('{"X-SESSION_ID":"',"");
			var id=n.replace('"}',"");
			
			
			
			
			
			//  askfastmarket1.appspot.com/blobstore/<abcdef.csv>?!
			/*
			$.ajax({
			type: "GET",
			contentType: "application/json",
			dataType: 'json',
			data: '',
			beforeSend : function(xhr) {          
				xhr.setRequestHeader("X-SESSION_ID" , id)
			  }, 
		   // url : "askfastmarket1.appspot.com/blobstore/<abcdef.csv>?!",
			url : "askfastmarket1.appspot.com/blobstore/dfdfd.csv?!",
			cache: false,
			crossDomain: true,
			xhrFields: {
			withCredentials: true
			},
			success: function (data) {
			
			//alert('data');
				console.log(data);
				}
			})
			*/
			
			/*$.ajax({	
				type: "GET",
				contentType: "application/json",
				dataType: 'json', 
				//data: datass,
				beforeSend : function(xhr) {          
					xhr.setRequestHeader("X-SESSION_ID" , id)
				  },
				url :"http://askfastmarket1.appspot.com/blobstore/<abcdef.csv>?!",
				cache: false,
				crossDomain: true,
				xhrFields: {
				withCredentials: true
				},
				success: function (data) {
				//alert(data);
					}
			})*/
			
			


			// ajax request to get contact's
			$('#img_loading1').show();
			$.ajax({	
				type: "GET",
				contentType: "application/json",
				dataType: 'html', 
			//	data: datas,
				beforeSend : function(xhr) {          
					xhr.setRequestHeader("X-SESSION_ID" , id)
				  },
				url : "http://askfastmarket1.appspot.com/accounts/contacts",
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
					num = 2;
					list = [3434,3435,3436,3437,3438,3494,3910,3911,3912,3913,3914,5656,7877];
					/*	function isInList( ctid, list ) {
					// List is an Array()
						result = false;
						for(i in list) {
							if(ctid == list[i]) { result = true }
						}
						return result
					}*/
					if(ctid != 3434 && ctid != 3435 && ctid != 3436 && ctid != 3437 && ctid != 3438 && ctid != 3494 && ctid != 3910 && ctid != 3911 && ctid != 3912 && ctid != 3913 && ctid != 3914 && ctid != 5656 && ctid != 7877 && ctid != 4698470883524608 && ctid != 5640915557285888 && ctid != 5826733022380032) {
					
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
					// alert(data+"info");
					 obj = JSON.parse(data);
					 if(obj.firstName)
					 {
						fstname = obj.firstName;
					 }
					 else
					 {
						fstname = '';
					 }
					 if(obj.firstName)
					 {
						lstname = obj.lastName;
					 }
					 else
					 {
						lstname = '';
					 }
					 if(fstname != '' && lstname != '')
					 {
					 flname = fstname+" "+lstname;
					 counterLoop++;
					 }
					 else
					 {
						flname = '';	
					 }
					 
					// alert(obj);
					// alert(obj.id);
					 
					 if(counterLoop%2 == 0){
					 var myclass = "class='contact-name2'";
					 }else{
					 var myclass = "class='contact-name1 contact-name2'";
					 }
					 if(flname != '')
					 {
					strHtml += "<p "+myclass+"><span>"+flname +"</span><span>Reaching Media</span><span>Keywords</span><span><span><input type='button' class='edit1' value=''></span><span style='padding-left:35px;'><img alt='' onclick='delcnt("+obj.id+")' src='images/close.png'></span><span style='padding-left:24px;'><input type='button' class='dupli' value=''></span></span></p>"; 
					 }
					$(".contact-name").html(strHtml);
					$('#img_loading1').hide(); 
					}
				})
					//	alert("It's there!");
					}
					// alert(obj[0].id);
					//alert(obj.ownerKey);
					}
				}
				
				})
			
		});
	}

	// by riz

	function addcnt(){
		   
		var rndid = Math.floor(Math.random() * (9999 - 100 + 1)) + 1;
		//alert(rndid);
		 
		var mbn=document.getElementById("mbn").value;
		var ctnum=document.getElementById("ctnum").value;
		var eml=document.getElementById("eml").value;
		
		//alert("Welcome to add new contact\n Your mobile is "+mbn+"\nYour landline is "+ctnum+"\nYour email is "+eml);
		url="http://askfastmarket1.appspot.com/login?username=yasir&password=a78a9b37dce265aa2e87ca6db3e1d287";
		$.post(url,function(session){
			var jasonValue = JSON.stringify(session) ; 
			var n=jasonValue.replace('{"X-SESSION_ID":"',"");
			var id=n.replace('"}',"");
			
						datas = '{"contactInfoRefs":['+rndid+'],"id":'+rndid+',"lastAvailableTime":"1380909873252","ownerKey":"yasir"}';
		//var	eml = "test@yahoo.com";
			datasinfo = '{"id":'+rndid+',"contactInfoTag":"Email","contactInfo":"'+eml+'","firstName":"'+mbn+'","lastName":"'+ctnum+'"}';   
				// ajax request to get contact's
						$('#img_loading1').show();
						$.ajax({	
				type: "POST",
				contentType: "application/json",
				dataType: 'json', 
				data: datas,
				beforeSend : function(xhr) {          
					xhr.setRequestHeader("X-SESSION_ID" , id)
				  },
				url : "http://askfastmarket1.appspot.com/accounts/contacts",
				cache: false,
				crossDomain: true,
				xhrFields: {
				withCredentials: true
				},
				success: function (data) {
				//alert(data);
				$('#mbn').val('');
				$('#ctnum').val('');
				$('#eml').val('');
				$('#add').hide();
				$('#np').show();
				
				// tmp code
				
				
				$.ajax({	
					type: "GET",
					contentType: "application/json",
					dataType: 'html', 
				//	data: datas,
					beforeSend : function(xhr) {          
						xhr.setRequestHeader("X-SESSION_ID" , id)
					  },
					url : "http://askfastmarket1.appspot.com/accounts/contacts",
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
						num = 2;
						list = [3434,3435,3436,3437,3438,3494,3910,3911,3912,3913,3914,5656,7877];
						/*	function isInList( ctid, list ) {
						// List is an Array()
							result = false;
							for(i in list) {
								if(ctid == list[i]) { result = true }
							}
							return result
						}*/
						if(ctid != 3434 && ctid != 3435 && ctid != 3436 && ctid != 3437 && ctid != 3438 && ctid != 3494 && ctid != 3910 && ctid != 3911 && ctid != 3912 && ctid != 3913 && ctid != 3914 && ctid != 5656 && ctid != 7877) {
						
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
						//alert(data+"info");
						 obj = JSON.parse(data);
						 if(obj.firstName)
						 {
							fstname = obj.firstName;
						 }
						 else
						 {
							fstname = '';
						 }
						 if(obj.firstName)
						 {
							lstname = obj.lastName;
						 }
						 else
						 {
							lstname = '';
						 }
						 if(fstname != '' && lstname != '')
						 {
						 flname = fstname+" "+lstname;
						 counterLoop++;
						 }
						 else
						 {
							flname = '';	
						 }
						 
						// alert(obj);
						// alert(obj.id);
						 
						 if(counterLoop%2 == 0){
						 var myclass = "class='contact-name2'";
						 }else{
						 var myclass = "class='contact-name1 contact-name2'";
						 }
						 if(flname != '')
						 {
						strHtml += "<p "+myclass+"><span>"+flname +"</span><span>Reaching Media</span><span>Keywords</span><span><span><input type='button' class='edit1' value=''></span><span style='padding-left:35px;'><img alt='' onclick='delcnt("+obj.id+")' src='images/close.png'></span><span style='padding-left:24px;'><input type='button' class='dupli' value=''></span></span></p>"; 
						 }
						$(".contact-name").html(strHtml);
						$('#img_loading1').hide(); 
						}
					})
						//	alert("It's there!");
						}
						// alert(obj[0].id);
						//alert(obj.ownerKey);
						}
					}
					}) 
				
				
				
				// tmp code ends here
				
				//alert(data);
					}
			})
			
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
				})
			
			
			////temp code to add static contact
/*			




			datas = '{"contactInfoRefs": [602],"id": 602,"lastAvailableTime":"1380909873252","ownerKey":"yasir"}';
		//var	eml = "test@yahoo.com";
			datasinfo = '{"id":602,"contactInfoTag":"Email","contactInfo":"erfdfe@yahoo.com","firstName":"uyuy","lastName":"hjhj"}';   

			$.ajax({	
				type: "POST",
				contentType: "application/json",
				dataType: 'json', 
				data: datas,
				beforeSend : function(xhr) {          
					xhr.setRequestHeader("X-SESSION_ID" , id)
				  },
				url : "http://askfastmarket1.appspot.com/accounts/contacts",
				cache: false,
				crossDomain: true,
				xhrFields: {
				withCredentials: true
				},
				success: function (data) {
				//alert(data);
					}
			})
			
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
				})
			datas = '{"contactInfoRefs": [603],"id": 603,"lastAvailableTime":"1380909873252","ownerKey":"yasir"}';
		//var	eml = "test@yahoo.com";
			datasinfo = '{"id":603,"contactInfoTag":"Email","contactInfo":"erere@yahoo.com","firstName":"uiui","lastName":"hjhj"}';   

			$.ajax({	
				type: "POST",
				contentType: "application/json",
				dataType: 'json', 
				data: datas,
				beforeSend : function(xhr) {          
					xhr.setRequestHeader("X-SESSION_ID" , id)
				  },
				url : "http://askfastmarket1.appspot.com/accounts/contacts",
				cache: false,
				crossDomain: true,
				xhrFields: {
				withCredentials: true
				},
				success: function (data) {
				//alert(data);
					}
			})
			
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
				})
			datas = '{"contactInfoRefs": [604],"id": 604,"lastAvailableTime":"1380909873252","ownerKey":"yasir"}';
		//var	eml = "test@yahoo.com";
			datasinfo = '{"id":604,"contactInfoTag":"Email","contactInfo":"erwwe@yahoo.com","firstName":"we","lastName":"fggd"}';   

			$.ajax({	
				type: "POST",
				contentType: "application/json",
				dataType: 'json', 
				data: datas,
				beforeSend : function(xhr) {          
					xhr.setRequestHeader("X-SESSION_ID" , id)
				  },
				url : "http://askfastmarket1.appspot.com/accounts/contacts",
				cache: false,
				crossDomain: true,
				xhrFields: {
				withCredentials: true
				},
				success: function (data) {
				//alert(data);
					}
			})
			
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
				})
			datas = '{"contactInfoRefs": [605],"id": 605,"lastAvailableTime":"1380909873252","ownerKey":"yasir"}';
		//var	eml = "test@yahoo.com";
			datasinfo = '{"id":605,"contactInfoTag":"Email","contactInfo":"ere@yahoo.com","firstName":"wqw","lastName":"rtr"}';   

			$.ajax({	
				type: "POST",
				contentType: "application/json",
				dataType: 'json', 
				data: datas,
				beforeSend : function(xhr) {          
					xhr.setRequestHeader("X-SESSION_ID" , id)
				  },
				url : "http://askfastmarket1.appspot.com/accounts/contacts",
				cache: false,
				crossDomain: true,
				xhrFields: {
				withCredentials: true
				},
				success: function (data) {
				//alert(data);
					}
			})
			
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
				})
*/
			////temp code 

	
		});
	}
	//Add Groups
	function addgrp(){
		   
		var rndid = Math.floor(Math.random() * (9999 - 100 + 1)) + 1;
		//alert(rndid);
		 
		var mbn=document.getElementById("mbn").value;
		var ctnum=document.getElementById("ctnum").value;
		var eml=document.getElementById("eml").value;
		
		//alert("Welcome to add new contact\n Your mobile is "+mbn+"\nYour landline is "+ctnum+"\nYour email is "+eml);
		url="http://askfastmarket1.appspot.com/login?username=yasir&password=a78a9b37dce265aa2e87ca6db3e1d287";
		$.post(url,function(session){
			var jasonValue = JSON.stringify(session) ; 
			var n=jasonValue.replace('{"X-SESSION_ID":"',"");
			var id=n.replace('"}',"");
			
						datas = '{"contactInfoRefs":['+rndid+'],"id":'+rndid+',"lastAvailableTime":"1380909873252","ownerKey":"yasir"}';
		//var	eml = "test@yahoo.com";
			datasinfo = '{"id":'+rndid+',"contactInfoTag":"Email","contactInfo":"'+eml+'","firstName":"'+mbn+'","lastName":"'+ctnum+'"}';   
				// ajax request to get contact's
						$('#img_loading1').show();
						$.ajax({	
				type: "POST",
				contentType: "application/json",
				dataType: 'json', 
				data: datas,
				beforeSend : function(xhr) {          
					xhr.setRequestHeader("X-SESSION_ID" , id)
				  },
				url : "http://askfastmarket1.appspot.com/accounts/contacts",
				cache: false,
				crossDomain: true,
				xhrFields: {
				withCredentials: true
				},
				success: function (data) {
				//alert(data);
				$('#mbn').val('');
				$('#ctnum').val('');
				$('#eml').val('');
				$('#add').hide();
				$('#np').show();
				
				// tmp code
				
				
				$.ajax({	
					type: "GET",
					contentType: "application/json",
					dataType: 'html', 
				//	data: datas,
					beforeSend : function(xhr) {          
						xhr.setRequestHeader("X-SESSION_ID" , id)
					  },
					url : "http://askfastmarket1.appspot.com/accounts/contacts",
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
						num = 2;
						list = [3434,3435,3436,3437,3438,3494,3910,3911,3912,3913,3914,5656,7877];
						/*	function isInList( ctid, list ) {
						// List is an Array()
							result = false;
							for(i in list) {
								if(ctid == list[i]) { result = true }
							}
							return result
						}*/
						if(ctid != 3434 && ctid != 3435 && ctid != 3436 && ctid != 3437 && ctid != 3438 && ctid != 3494 && ctid != 3910 && ctid != 3911 && ctid != 3912 && ctid != 3913 && ctid != 3914 && ctid != 5656 && ctid != 7877) {
						
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
						//alert(data+"info");
						 obj = JSON.parse(data);
						 if(obj.firstName)
						 {
							fstname = obj.firstName;
						 }
						 else
						 {
							fstname = '';
						 }
						 if(obj.firstName)
						 {
							lstname = obj.lastName;
						 }
						 else
						 {
							lstname = '';
						 }
						 if(fstname != '' && lstname != '')
						 {
						 flname = fstname+" "+lstname;
						 counterLoop++;
						 }
						 else
						 {
							flname = '';	
						 }
						 
						// alert(obj);
						// alert(obj.id);
						 
						 if(counterLoop%2 == 0){
						 var myclass = "class='contact-name2'";
						 }else{
						 var myclass = "class='contact-name1 contact-name2'";
						 }
						 if(flname != '')
						 {
						strHtml += "<p "+myclass+"><span>"+flname +"</span><span>Reaching Media</span><span>Keywords</span><span><span><input type='button' class='edit1' value=''></span><span style='padding-left:35px;'><img alt='' onclick='delcnt("+obj.id+")' src='images/close.png'></span><span style='padding-left:24px;'><input type='button' class='dupli' value=''></span></span></p>"; 
						 }
						$(".contact-name").html(strHtml);
						$('#img_loading1').hide(); 
						}
					})
						//	alert("It's there!");
						}
						// alert(obj[0].id);
						//alert(obj.ownerKey);
						}
					}
					}) 
				
				
				
				// tmp code ends here
				
				//alert(data);
					}
			})
			
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
				})
			
			
			////temp code to add static contact
/*			




			datas = '{"contactInfoRefs": [602],"id": 602,"lastAvailableTime":"1380909873252","ownerKey":"yasir"}';
		//var	eml = "test@yahoo.com";
			datasinfo = '{"id":602,"contactInfoTag":"Email","contactInfo":"erfdfe@yahoo.com","firstName":"uyuy","lastName":"hjhj"}';   

			$.ajax({	
				type: "POST",
				contentType: "application/json",
				dataType: 'json', 
				data: datas,
				beforeSend : function(xhr) {          
					xhr.setRequestHeader("X-SESSION_ID" , id)
				  },
				url : "http://askfastmarket1.appspot.com/accounts/contacts",
				cache: false,
				crossDomain: true,
				xhrFields: {
				withCredentials: true
				},
				success: function (data) {
				//alert(data);
					}
			})
			
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
				})
			datas = '{"contactInfoRefs": [603],"id": 603,"lastAvailableTime":"1380909873252","ownerKey":"yasir"}';
		//var	eml = "test@yahoo.com";
			datasinfo = '{"id":603,"contactInfoTag":"Email","contactInfo":"erere@yahoo.com","firstName":"uiui","lastName":"hjhj"}';   

			$.ajax({	
				type: "POST",
				contentType: "application/json",
				dataType: 'json', 
				data: datas,
				beforeSend : function(xhr) {          
					xhr.setRequestHeader("X-SESSION_ID" , id)
				  },
				url : "http://askfastmarket1.appspot.com/accounts/contacts",
				cache: false,
				crossDomain: true,
				xhrFields: {
				withCredentials: true
				},
				success: function (data) {
				//alert(data);
					}
			})
			
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
				})
			datas = '{"contactInfoRefs": [604],"id": 604,"lastAvailableTime":"1380909873252","ownerKey":"yasir"}';
		//var	eml = "test@yahoo.com";
			datasinfo = '{"id":604,"contactInfoTag":"Email","contactInfo":"erwwe@yahoo.com","firstName":"we","lastName":"fggd"}';   

			$.ajax({	
				type: "POST",
				contentType: "application/json",
				dataType: 'json', 
				data: datas,
				beforeSend : function(xhr) {          
					xhr.setRequestHeader("X-SESSION_ID" , id)
				  },
				url : "http://askfastmarket1.appspot.com/accounts/contacts",
				cache: false,
				crossDomain: true,
				xhrFields: {
				withCredentials: true
				},
				success: function (data) {
				//alert(data);
					}
			})
			
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
				})
			datas = '{"contactInfoRefs": [605],"id": 605,"lastAvailableTime":"1380909873252","ownerKey":"yasir"}';
		//var	eml = "test@yahoo.com";
			datasinfo = '{"id":605,"contactInfoTag":"Email","contactInfo":"ere@yahoo.com","firstName":"wqw","lastName":"rtr"}';   

			$.ajax({	
				type: "POST",
				contentType: "application/json",
				dataType: 'json', 
				data: datas,
				beforeSend : function(xhr) {          
					xhr.setRequestHeader("X-SESSION_ID" , id)
				  },
				url : "http://askfastmarket1.appspot.com/accounts/contacts",
				cache: false,
				crossDomain: true,
				xhrFields: {
				withCredentials: true
				},
				success: function (data) {
				//alert(data);
					}
			})
			
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
				})
*/
			////temp code 

	
		});
	}
	//Add Groups
	
    function testbrod(){
	var brname=document.getElementById("bname").value;
	var sms = document.getElementById('checkbox1');
	// in case sms is checked
	if (sms.checked){
		var sid=document.getElementById("sid").value;
  	}else{
		var sid='';
  	}
	var email = document.getElementById('checkbox2');
	// in case email is checked	
	if (email.checked){
		var semail=document.getElementById("semail").value;
		var emailsbjt=document.getElementById("emailsbjt").value;
  	}else{
		var semail='';
		var emailsbjt='';
  	}
	var voicebroadcast = document.getElementById('checkbox6');
	// in case voice is checked
	if (voicebroadcast.checked){
		var clrid=document.getElementById("clrid").value;
  	}else{
		var clrid='';
  	}
	var textarea=document.getElementById("textarea").value;
	var from_file = document.getElementById('checkbox3');
	var from_contactbook = document.getElementById('checkbox4');
	var from_manual = document.getElementById('checkbox5');
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
							alert(data);
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
    </script>

    <title>Broad Cast</title>



 <link href="css/starter-template.css" rel="stylesheet" type="text/css">



    <!-- Bootstrap core CSS -->



    <link href="css/bootstrap.css" rel="stylesheet" type="text/css">







    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->



    <!--[if lt IE 9]>



      <script src="../../assets/js/html5shiv.js"></script>



      <script src="../../assets/js/respond.min.js"></script>



    <![endif]-->



  </head>







  <body>







	<!--====================== Header Starts==========================-->



		



			



			<div class="col-md-12">



			



				<div class="logo">



					



						<a href="#"><img src="images/logo_img.png" alt=""></a>			   



				</div>



			



			



			</div>







	<!--====================== Header Ends==========================-->



    



	<div class="tab-content" id="myTabContent">



	



	



	<!--================ container_1_start ===============-->



    <div id="word" class="container active tab-pane">



	 <form action="" method="post">



		<!--================ row_1_start ===============-->



		<div class="row">



			<div class="col-md-12">



		  		<div class="starter-template">



					<h1>1 BROADCAST NAME</h1>



					<p class="lead">Please give a unique name to your new broadcast.</p>



			<!--================ Alert Starts ===============-->						



						<div class="alert vanish alert-warning alert-dismissable">



						<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>



							Valid name



						</div>



						<div class="alert vanish alert-success alert-dismissable">



						<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>



						    Invalid name



						</div>



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



				



										<input id="checkbox1" class="checkbox" type="checkbox" />



										<span>SMS</span>



									<div class="clear"></div>



									</div>



									<div id="autoUpdate" style="display:none;" class="sender_id">







									<!--================ Alert Starts ===============-->



										<div class="alert vanish alert-warning alert-dismissable" style="margin-left:10px;text-align:left;">



										<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>



										The number that you entered is not verified please verify the number before using



										</div>







										<div class="alert vanish alert-warning alert-dismissable" style="margin-left:10px;text-align:left;">



										<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>



										Please use letters



										</div>



									<!--================ Alert Ends ===============-->



										<label>Sender ID:</label>



										<input class="ask_fast" type="number" id="sid" name="sid" required placeholder="ASK-Fast"/>



									</div>



								<div class="clear"></div>



								</div>



								<div class="email">



									<div class="sms_bg">



										<div class="email_text">



											<input id="checkbox2" class="checkbox" type="checkbox" />



											<span>E-mail</span>



										</div>



										<div class="sender_id to2" style="display:none;">



										<!--================ Alert Starts ===============-->										



										<div class="alert vanish alert-warning alert-dismissable" style="margin-left:10px;text-align:left;">



										<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>



											Please enter a valid e-mail address



										</div>



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



											<input id="checkbox6" class="checkbox" type="checkbox" />



											<span>Voice Broadcast</span>



										</div>



									<div class="subject_id" id="autoUpdate6" style="display:none;">



										<label>Caller ID:</label>



										<input class="ask_fast" id="clrid" name="clrid" required type="text" />



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



									You reached second SMS which will increase the cost of broadcasting.



									</div>



									<!--================ Alert Ends ===============-->									

				<span class="scnmes">	First Message:</span>

				<textarea maxlength="155" id="textarea" name="textarea" placeholder="50 percentage discount is waiting for your business."> </textarea>
					<label id="textarea_feedback"></label>
                    
                   <span class="scnmes"> Second Message:	</span>
                				<textarea maxlength="155" id="textarea1" name="textarea1" placeholder="50 percentage discount is waiting for your business."> </textarea>
					<label id="textarea_feedback1"></label>
                				
                  <span class="scnmes" >  Third Message: </span>           
                                <textarea maxlength="155" id="textarea2" name="textarea2" placeholder="50 percentage discount is waiting for your business."> </textarea>
					<label id="textarea_feedback2"></label>        
				</div>
				<div class="email">
                    <div style="display:none;" class=" apish sms_bg">
                        <div class="email_text">
                            <input class="flebg" type="file" title="Upload a Voice File">	   
                        </div>
                        <div class="clear"></div>
                    </div>
					<div class="clear"></div>
				</div>
				<div class="recep">
                    <h1>4 RECEPIENTS</h1>
				</div>



								<div class="from_file">
									<div class="from_text"><input id="checkbox3" type="checkbox" name="" />  From a file <span>( download sample .csv file )</span></div>



									<div class="from_text"><input id="checkbox4" type="checkbox" name="" />  Contact book</div>



									<div class="from_text"><input id="checkbox5" type="checkbox" name="" />  Manual</div>



								</div>



								<div class="from_file_2" id="autoUpdate3" style="display:none;padding-top:22px;">



									<!--================ Alert Starts ===============-->									



									<div class="alert vanish alert-warning alert-dismissable" style="margin-left:10px;text-align:left;margin-right:10px;">



									<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>



									From a file - Invalid file 



									</div>



								



									<div class="alert vanish alert-warning alert-dismissable" style="margin-left:10px;text-align:left;margin-right:10px;">



									<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>



									Sorry there is something wrong with server. Please try it again later. 



									</div>



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



									There are some fields that we could not recognize. 



									</div>



									<div class="alert vanish alert-warning alert-dismissable" style="margin-left:10px;text-align:left;margin-right:10px;">



									<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>



									Please enter a valid phone number.



									</div>



									<div class="alert vanish alert-warning alert-dismissable" style="margin-left:10px;text-align:left;margin-right:10px;">



									<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>



									Please enter a e-mail address



									</div>



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



										<p>



 										 	The added contact will be saved to your contact book. You can use it, other products of ASK-Fast without any action.



										</p>



										<input type="submit" value="Upload from PC" class="add_contact">



									



									</div>



								<div class="clear"></div>	



								</div>



                                



								<div class="selected" id="autoUpdate4" style="display:none;padding-top:22px;">



									<!--================ Alert Starts ===============-->									



									



									<div class="alert vanish alert-warning alert-dismissable" style="margin-left:10px;text-align:left;">



									<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>



									Empty Contact book - sorry you do not have any contact in your contact book, you can upload your contacts from gmail. Please click the link.



									</div>



									<!--================ Alert Ends ===============-->									



									



									<div class="group">



										<input id="checkbox7" type="checkbox" name="" />



										Select an individual



									</div>



									<div class="group">



										<input id="checkbox8" type="checkbox" name="" />



										Select a group



									</div>



								<div class="selected1" id="autoUpdate7" style="display:none;">	



									<h2>Selected contacts (2)</h2>



									<div class="ahmet">



									<span>Ahmet Bektes</span>



									<span class="icon"><img src="images/twtter.png" alt="latter" /><img src="images/at.png" alt="latter" /><img src="images/latter.png" alt="latter" /></span>



									<div class="clear"></div>



									</div>



									<div class="ahmet">



									<span>Contact 2</span>



									<span class="icon"><img src="images/at.png" alt="latter" /><img src="images/latter.png" alt="latter" /></span>



									<div class="clear"></div>



									</div>



									<div class="ahmet">



									<span>Contact 3</span>



									<span class="icon"><img src="images/at.png" alt="latter" /><img src="images/latter.png" alt="latter" /></span>



									<div class="clear"></div>



									</div>



								</div>	



								<div class="selected1" id="autoUpdate8" style="display:none;">



									<h2>Selected groups (2)</h2>



									<div class="ahmet">



									<span>Ahmet Bektes</span>



									<span class="icon"><img src="images/twtter.png" alt="latter" /><img src="images/at.png" alt="latter" /><img src="images/latter.png" alt="latter" /></span>



									<div class="clear"></div>



									</div>



									<div class="ahmet">



									<span>Contact 2</span>



									<span class="icon"><img src="images/at.png" alt="latter" /><img src="images/latter.png" alt="latter" /></span>



									<div class="clear"></div>



									</div>



									<div class="ahmet">



									<span>Contact 3</span>



									<span class="icon"><img src="images/at.png" alt="latter" /><img src="images/latter.png" alt="latter" /></span>



									<div class="clear"></div>



									</div>



									



									



									



								</div>



								</div>



								<div class="save_broadcast">

                                <div class="save_button">

									<input type="submit" class="sbmit123" value="Save Broadcast">

                                    </div>

								</div>

						</div>

						<div class="test_broad">

                        <div class="save_button_2">

							<input type="submit" class="sbmit123" onClick="testbrod()" value="Test Broadcast">

                        </div>

									<!--================ Alert Starts ===============-->									



						



									<div class="alert vanish  alert-success alert-dismissable" style="margin-left:10px;text-align:left;margin-top:15px;">



									<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>



									Broadcast is saved.



									</div>



									<div class="alert vanish alert-warning alert-dismissable" style="margin-left:10px;text-align:left;">



									<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>



									Broadcast could not be saved.



									</div>



									<div class="alert vanish alert-info alert-dismissable" style="margin-left:10px;text-align:left;">



									<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>



									First test is free.



									</div>



									<div class="alert vanish alert-info alert-dismissable" style="margin-left:10px;text-align:left;">



									<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>



									I agree that ASK-Fast is only provider of communication and I am responsible for my broadcast. 







									</div>



								



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



	 <form action="" method="post">
		<!--================ row_1_start ===============-->
		<div class="row">
			<div class="col-md-12">
				<div class="list">
					<h1>BROADCAST LIST</h1>
					<p>Your active broadcast will be appeared at the top of the list. </p>
				<div class="clear"></div>
				</div>
				<div class="list_search">
					<input class="list_search123" type="text" placeholder="search box">
					<input class="list_search1234" type="submit" value="">
				</div>
				<div class="football">
					<div class="football-left">
						<div class="footbal">
							<h6>Broadcast football</h6>
							<p><i>is still running...</i></p>
						</div>
						<div class="therty7">
							37
						</div>
						<div class="three-img">
							<img src="images/phone.png" alt="" /><img src="images/latter1.png" alt="" /><img src="images/at1.png" alt="" />
						</div>
					</div>
					<div class="football-right">
						<div class="details">
							<input class="details1" type="button" value="">
						</div>
						<div class="edit">
							<input class="edit1" type="button" value="">
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
							<h6>Marketing 0011</h6>
							<p><i>is still running...</i></p>
						</div>
						<div class="therty7">
							37
						</div>
						<div class="three-img">
							<img src="images/phone.png" alt="" /><img src="images/latter1.png" alt="" /><img src="images/at1.png" alt="" />
						</div>
					</div>
					<div class="football-right">
						<div class="details">
							<input class="details1" type="button" value="">
						</div>
						<div class="edit">
							<input class="edit1" type="button" value="">
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
						<div class="details">
							<input class="details1" type="button" value="">
						</div>
						<div class="edit">
							<input class="edit1" type="button" value="">
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
						<div class="details">
							<input class="details1" type="button" value="">
						</div>
						<div class="edit">
							<input class="edit1" type="button" value="">
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
						<div class="details">
							<input class="details1" type="button" value="">
						</div>
						<div class="edit">
							<input class="edit1" type="button" value="">
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
						<div class="details">
							<input class="details1" type="button" value="">
						</div>
						<div class="edit">
							<input class="edit1" type="button" value="">
						</div>
						<div class="close123">
							<a href="#"><img src="images/close.png" alt="" /></a>
						</div>
					<div class="clear"></div>
					</div>
				<div class="clear"></div>
				</div>
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
         


      


        <!---=========================row3=====================-->
		  <!---=========================row6=====================-->
        
        <div id="word6" class="container  tab-pane">
		<form action="" method="post">
		<!--================ row_1_start ===============-->
		<div class="row" >
			<div class="col-md-12" >
				<div class="contact"  id="btn_show">
					<h1>Contacts</h1>
					<span><input id="np" class="add" type="button"  onClick="showadd()" value="Add a Group"></span>
				<div class="clear"></div>
				</div>
				<div class="box">
					<span>Contact Name</span><span>Reaching Media</span><span>Keywords</span><span>Actions</span>
				<div class="clear"></div>
				</div>
				<div class="contact-name">
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
		  		<div class="contact">
						<span><input class="add" type="button" onClick="addgrp()" value="Add a Group"></span>
				<div class="clear"></div>
				</div>
				
				<div class="u17" id="add_btn_hide">
				
					<img src="images/image_u17.png" alt="" />
				
				</div>
				<div class="shortage123">
					<div class="shortage">
							<h3>Ahmet Bektes</h3>
							<p>Shortags</p>
						<input class="work" type="button" value="Work">
						<input class="work" type="button" value="Sportcenter">
						<img src="images/u167.png" alt="" />
					<div class="clear"></div>
					</div>
					<div class="mobile">
						<span>
							<p>Group Name:</p>
							<input class="mobile123" id="gpname" name="gpname" type="text" value="">
						</span>
						<span class="u167"><img src="images/u167.png" alt="" /></span>
						<div class="clear"></div>
						<span>
							<p>Contact_1:</p>
							<input class="mobile123" id="ctn_1" name="ctn_1" type="text" value="">
						</span>
						<span>
							<p>Contact_2:</p>
							<input class="mobile123" id="ctn_2" name="ctn_2" type="text" value="">
						</span>
						<span>
							<p>Contact_3:</p>
							<input class="mobile123" id="ctn_3" name="ctn_3" type="text" value="">
						</span>
						<span>
							<p>Contact_4:</p>
							<input class="mobile123" id="ctn_4" name="ctn_4" type="text" value="">
						</span>
						<span>
							<p>Contact_5:</p>
							<input class="mobile123" id="ctn_5" name="ctn_5" type="text" value="">
						</span>
						
						<div class="clear"></div>
						
						<span class="u167"><img src="images/u167.png" alt="" /></span>
						<div class="clear"></div>
					<div class="clear"></div>
<!--                      <span>
                      <p>Filename:</p>
                      <input type="file" name="file" id="attachment">
                     </span> <span class="u167"><input type="button" onClick="fileup()" name="ufile" value="Upload"></span>
                     <div class="clear"></div>
                     <div class="clear"></div>-->
					</div>
					<div class="fb-icon">
						<a href="#"><img src="images/u41.png" alt="" /></a> 
						<a href="#"><img src="images/u43.png.ico" alt="" /></a>
						<a href="#"><img src="images/u45.png" alt="" /></a>
					</div>
				</div>
			</div>
		</div>
		</form>	
        </div>
		  <!---=========================row6=====================-->
        <!---=========================row3=====================-->
<div id="word3" class="container  tab-pane">
		<form action="" method="post">
		<!--================ row_1_start ===============-->
		<div class="row" >
			<div class="col-md-12" >
				<div class="contact"  id="btn_show">
					<h1>Contacts</h1>
					<span><input id="np" class="add" type="button"  onClick="showadd()" value="Add a contact"></span>
				<div class="clear"></div>
				</div>
				<div class="box">
					<span>Contact Name</span><span>Reaching Media</span><span>Keywords</span><span>Actions</span>
				<div class="clear"></div>
				</div>
				<div class="contact-name">
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
		  		<div class="contact">
						<span><input class="add" type="button" onClick="addcnt()" value="Add a contact"></span>
				<div class="clear"></div>
				</div>
				
				<div class="u17" id="add_btn_hide">
				
					<img src="images/image_u17.png" alt="" />
				
				</div>
				<div class="shortage123">
					<div class="shortage">
							<h3>Ahmet Bektes</h3>
							<p>Shortags</p>
						<input class="work" type="button" value="Work">
						<input class="work" type="button" value="Sportcenter">
						<img src="images/u167.png" alt="" />
					<div class="clear"></div>
					</div>
					<div class="mobile">
						<span>
							<p>First Name:</p>
							<input class="mobile123" id="mbn" name="mbn" type="text" value="">
						</span>
						<span class="u167"><img src="images/u167.png" alt="" /></span>
						<div class="clear"></div>
						<span>
							<p>Last Name:</p>
							<input class="mobile123" id="ctnum" name="ctnum" type="text" value="">
						</span>
						<div class="clear"></div>
						<span>
							<p>E-mail:</p>
							<input class="mobile123" id="eml" name="eml" type="text" value="">
						</span>
						<span class="u167"><img src="images/u167.png" alt="" /></span>
						<div class="clear"></div>
					<div class="clear"></div>
<!--                      <span>
                      <p>Filename:</p>
                      <input type="file" name="file" id="attachment">
                     </span> <span class="u167"><input type="button" onClick="fileup()" name="ufile" value="Upload"></span>
                     <div class="clear"></div>
                     <div class="clear"></div>-->
					</div>
					<div class="fb-icon">
						<a href="#"><img src="images/u41.png" alt="" /></a> 
						<a href="#"><img src="images/u43.png.ico" alt="" /></a>
						<a href="#"><img src="images/u45.png" alt="" /></a>
					</div>
				</div>
			</div>
		</div>
		</form>	
        </div>



<!---=========================row4=====================-->



        



        <div id="word4" class="container tab-pane">



	 <form action="" method="post">



		<!--================ row_1_start ===============-->




		<div class="row">



			<div class="col-md-12">



		  	
				
					<div class="contact">
						<h1>Reports</h1>
					<div class="clear"></div>
					</div>
				<div class="reports1">
					
				
				
				</div>
				
				
				
			</div>
			
			
		</div>
		
		
		
	</form>
	
	
	
	</div>



        <!---=========================row4=====================-->



		



        

    </div><!-- /.container -->



	<!--================ container_1_End ===============-->


        



    



    <div class="left_icon">



    	<ul>



        	<li><a  data-toggle="tab" href="#word"><img src="images/active_img.png" height="100%" width="100%" alt="new"></a></li>



            <li><a data-toggle="tab" href="#word2"><img src="images/broadcast.png" height="100%" width="100%" alt="new"></a></li>



            <li class="clk"><a data-toggle="tab" href="#word3"><img src="images/coctactbook.png" onClick="showcnt()" height="100%" width="100%" alt="new"></a>
				

			</li>
						  <div class="shw" style="display:none;"><a data-toggle="tab" href="word5"><img src="images/coctactbook.png" height="100%" width="100%" alt="new"></a></div>
			  <div class="shw" style="display:none;"><a data-toggle="tab" href="#word6"><img src="images/coctactgp.png" height="100%" width="100%" alt="new"></a></div>	


            <li><a data-toggle="tab" href="#word4"><img src="images/report.png" height="100%" width="100%" alt="new"></a></li>



        </ul>



    <div class="clear"></div>



    </div>



		



		






	



	



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



			if($('#checkbox1').is(":checked")){
				$('#autoUpdate').show();
			}
			if($('#checkbox1').is(":not(:checked)")){
				$('#autoUpdate').hide();
  			}
			if($('#checkbox2').is(":checked")){
				$('.to2').show();
			}
			if($('#checkbox2').is(":not(:checked)")){
				$('.to2').hide();
			}
	 		if($('#checkbox3').is(":checked")){
				$('#autoUpdate3').show();
			} 
 			if($('#checkbox3').is(":not(:checked)")){
				$('#autoUpdate3').hide();
			} 
	 		if($('#checkbox4').is(":checked")){
				$('#autoUpdate4').show();
			} 
 			if($('#checkbox4').is(":not(:checked)")){
	    		$('#autoUpdate4').hide();
			}	 
	 		if($('#checkbox5').is(":checked")){
				$('#autoUpdate5').show();
		 	} 
 			if($('#checkbox5').is(":not(:checked)")){
	    		$('#autoUpdate5').hide();
			} 
	 		if($('#checkbox6').is(":checked")){
				$('#autoUpdate6').show();
				$('.apish').show();
			} 
 			if($('#checkbox6').is(":not(:checked)")){
	    		$('#autoUpdate6').hide();
				$('.apish').hide();
			} 
			if($('#checkbox7').is(":checked")){
				$('#autoUpdate7').show();
		    } 
 			if($('#checkbox7').is(":not(:checked)")){
	    		$('#autoUpdate7').hide();
			} 
			if($('#checkbox8').is(":checked")){
				$('#autoUpdate8').show();
 			 } 
 			if($('#checkbox8').is(":not(:checked)")){
	    		$('#autoUpdate8').hide();
			} 
});
	
$('#np').click(function(){
	//$('#np').hide();
	$("#add").toggle();

});


$('.clk').click(function(){
	$('.shw').toggle(1000);
	
   
});


	
$('input[type=file]').bootstrapFileInput();
$('.file-inputs').bootstrapFileInput();	
	
var text_max = 155;
		$('#textarea_feedback').html(text_max + '/155');
		$('#textarea_feedback1').html(text_max + '/155');
		$('#textarea_feedback2').html(text_max + '/155');
		$('#textarea').keyup(function() {
			var text_length = $('#textarea').val().length;
			var text_remaining = text_max - text_length;
			$('#textarea_feedback').html(text_remaining + '/155');
		});
		$('#textarea1').keyup(function() {
			var text_length = $('#textarea1').val().length;
			var text_remaining = text_max - text_length;
			$('#textarea_feedback1').html(text_remaining + '/155');
		});
		$('#textarea2').keyup(function() {
			var text_length = $('#textarea2').val().length;
			var text_remaining = text_max - text_length;
			$('#textarea_feedback2').html(text_remaining + '/155');
		});
		
		
});	
</script>	
</body>
</html>
<div id="img_loading1" style="display:none">
<img src="images/loadin-Image.gif" id="img_loading" class="loadimageUploadAjax2" />
</div>