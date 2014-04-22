<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<script type="text/javascript" src="js/BroadcastsScript1.js"></script>
<script type="text/javascript" src="js/BroadcastsScript2.js"></script>
<script>
function loadingBroadcasts()
{	
	//alert(1);
	var id = "<?php   echo $session_id; ?>";
	AllDivs();
	$('#currDateTimestamp').val('');
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
			loadBroadcast(data);
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
<input type="hidden" id="currDateTimestamp" value="" />
<input type="hidden" id="notcurrDateTimestmp" value="" />
    <div id="word1992" class="container tab-pane">
                    <div class="col-md-12">
                    <div class="list">
                        <h1>BROADCAST LIST</h1>
                        <p>Your active broadcast will be appeared at the top of the list. </p>
                    <div class="clear"></div>
                    </div>
                    <div class="list_search">
                        <input class="list_search123" id="search_broadcast_field" type="text" placeholder="search box">
                        <input class="list_search1234" id="search_broadcast_button" type="button" onClick="search_broadcast()" value="">
                    </div>
                    </div>		
        </div>
    <div id="Broadcast_Search_Results" class="container tab-pane" style="display:none;">
            <div class="date">
              <h2>Broadcast Search Results</h2>
              <div class="clear"></div>
            </div>
            <div id="Broadcast_Search_Results_div" style="display:none;"> </div>
          </div>
    <div id="word992" class="container tab-pane">
    			
    </div>
 
    
    <div id="word2" class="container tab-pane">
    
      <!-- <form action="" method="post">-->
      <!--================ row_1_start ===============-->
      
    </div>
    <input type="hidden" id="toggoleBWhidden" value="" />
    <input type="hidden" id="toggoleBWhidden1" value="" />
</body>
</html>