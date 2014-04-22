// JavaScript Document

function search_cnt()
{	//search contacts only
	if (!$('#demo_box_1').is(':checked')&&$('#demo_box_2').is(':checked'))
		{
			console.log(1);
			if(document.getElementById("list_search123_cnt").value!='')
				{
					 var strHtml='';
					var search_token=document.getElementById("list_search123_cnt").value;
					
					$.ajax({	
							type: "GET",
							contentType: "application/json",
							dataType: 'html', 
							xhrFields: {
							withCredentials: true
							},
							url : "http://askfastmarket.appspot.com/accounts/contacts/prefixsearch/"+search_token+"?detailed=true&orderBy=firstName&fetchOwner=false",
							cache: false,
				
							success: function (data) {
								//if no match was found
								if(data=='[]')
									{
										AllDivs();
										$('#word5').show();
										$('#main_icon').show();
										$('#show_individuals').hide();
										$("#div_individuals").html('');
										$('#show_individuals_search').show();
										$("#div_individuals_search").html('');
										NoMatch();
										document.getElementById("list_search123_cnt").value='';
										
										var flname='Empty';
										var fstname='Empty';
										var lstname='Empty';
										var email='Empty';
										var phone='Empty';
										var landLine='Empty';
										var count = 1;
										var message="<span id=contact_"+count+" ><div class='football' style='padding: 18px 0px;'> <div class='football-left' style='width:100%; text-align:center !important;'><div class='footbal' style='width:100%;'><h6 id='heading_edit_"+count+"'>"+flname+"</h6></div></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_cnt_"+count+" ></span></div></span>";
										$("#div_individuals_search").html(message);
										$("#div_individuals_search").show();
										
										
									}
									//if match was found
								else
									{
										
										AllDivs();
										$('#word5').show();
										$('#main_icon').show();
										$('#show_individuals').hide();
										$("#div_individuals").html('');
										$('#show_individuals_search').show();
										$("#div_individuals_search").html('');
										data = JSON.parse(data);
										loadContacts(data,1);
										document.getElementById("list_search123_cnt").value='';
									}
									
							},
							error: function (data){
								alert(data.responseJSON.status);
							}
						 });
				}
				
				if(document.getElementById("list_search123_cnt").value=='')
					{
						showcnt1();
					}
		}
		
		//search groups only
		if ($('#demo_box_1').is(':checked')&&!$('#demo_box_2').is(':checked'))
			{
				console.log(2);
				if(document.getElementById("list_search123_cnt").value!='')
				{
					 var strHtml='';
					var search_token=document.getElementById("list_search123_cnt").value;
					
					$.ajax({	
							type: "GET",
							contentType: "application/json",
							dataType: 'html', 
							xhrFields: {
							withCredentials: true
							},
							url : "http://askfastmarket.appspot.com/accounts/groups/prefixsearch/"+search_token+"?detailed=true",
							cache: false,
				
							success: function (data) {
								obj = JSON.parse(data);
								
								if(data=='[]')
									{
										AllDivs();
										$('#word5').show();
										$('#main_icon').show();
										$('#show_groups').hide();
										$("#div_groups").html('');
										$('#show_groups_search').show();
										$("#div_groups_search").html('');
										NoMatch();
										document.getElementById("list_search123_cnt").value='';
										
										var flname='Empty';
										var fstname='Empty';
										var lstname='Empty';
										var email='Empty';
										var phone='Empty';
										var landLine='Empty';
										var count = 1;
										var message="<span id=contact_"+count+" ><div class='football' style='padding: 18px 0px;'> <div class='football-left' style='width:100%; text-align:center !important;'><div class='footbal' style='width:100%;'><h6 id='heading_edit_"+count+"'>"+flname+"</h6></div></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_cnt_"+count+" ></span></div></span>";
										$("#div_groups_search").html(message);
										$("#div_groups_search").show();
										
									}
								else
									{
										AllDivs();
										$('#word5').show();
										$('#main_icon').show();
										$('#show_groups').hide();
										$("#div_groups").html('');
										$('#show_groups_search').show();
										$("#div_groups_search").html('');
										data = JSON.parse(data);
										loadGroups(data,1);
										document.getElementById("list_search123_cnt").value='';
									}
									
							},
							error: function (data){
								alert(data.responseJSON.status);
							}
						 });
				}
				if(document.getElementById("list_search123_cnt").value=='')
					{
						showcnt1();
					}
			}
			//search contacts and groups both at the same time
			if (!$('#demo_box_1').is(':checked')&&!$('#demo_box_2').is(':checked')||$('#demo_box_1').is(':checked')&&$('#demo_box_2').is(':checked'))
				{
					console.log(3);
					
			if(document.getElementById("list_search123_cnt").value!='')
				{
					 var strHtml='';
					var search_token=document.getElementById("list_search123_cnt").value;
					
					$.ajax({	
							type: "GET",
							contentType: "application/json",
							dataType: 'html', 
							xhrFields: {
							withCredentials: true
							},
							url : "http://askfastmarket.appspot.com/accounts/contacts/prefixsearch/"+search_token+"?detailed=true&orderBy=firstName&fetchOwner=false",
							cache: false,
				
							success: function (data) {
								
								if(data=='[]')
									{
										AllDivs();
										$('#word5').show();
										$('#main_icon').show();
										$('#show_individuals').hide();
										$("#div_individuals").html('');
										$('#show_individuals_search').show();
										$("#div_individuals_search").html('');
										NoMatch();
										document.getElementById("list_search123_cnt").value='';
										
										var flname='Empty';
										var fstname='Empty';
										var lstname='Empty';
										var email='Empty';
										var phone='Empty';
										var landLine='Empty';
										var count = 1;
										var message="<span id=contact_"+count+" ><div class='football' style='padding: 18px 0px;'> <div class='football-left' style='width:100%; text-align:center !important;'><div class='footbal' style='width:100%;'><h6 id='heading_edit_"+count+"'>"+flname+"</h6></div></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_cnt_"+count+" ></span></div></span>";
										$("#div_individuals_search").html(message);
										$("#div_individuals_search").show();
										
									}
								else
									{
										AllDivs();
										$('#word5').show();
										$('#main_icon').show();
										$('#show_individuals').hide();
										$("#div_individuals").html('');
										$('#show_individuals_search').show();
										$("#div_individuals_search").html('');
										data = JSON.parse(data);
										loadContacts(data,1);
										document.getElementById("list_search123_cnt").value='';
									}
									
							},
							error: function (data){
								alert(data.responseJSON.status);
							}
						 });
				}
				
				if(document.getElementById("list_search123_cnt").value=='')
					{
						showcnt1();
					}
					
					
				if(document.getElementById("list_search123_cnt").value!='')
				{
					 var strHtml='';
					var search_token=document.getElementById("list_search123_cnt").value;
					
					$.ajax({	
							type: "GET",
							contentType: "application/json",
							dataType: 'html', 
							xhrFields: {
							withCredentials: true
							},
							url : "http://askfastmarket.appspot.com/accounts/groups/prefixsearch/"+search_token+"?detailed=true",
							cache: false,
				
							success: function (data) {
								obj = JSON.parse(data);
								
								if(data=='[]')
									{
										AllDivs();
										$('#word5').show();
										$('#main_icon').show();
										$('#show_groups').hide();
										$("#div_groups").html('');
										$('#show_groups_search').show();
										$("#div_groups_search").html('');
										NoMatch();
										document.getElementById("list_search123_cnt").value='';
										
										var flname='Empty';
										var fstname='Empty';
										var lstname='Empty';
										var email='Empty';
										var phone='Empty';
										var landLine='Empty';
										var count = 1;
										var message="<span id=contact_"+count+" ><div class='football' style='padding: 18px 0px;'> <div class='football-left' style='width:100%; text-align:center !important;'><div class='footbal' style='width:100%;'><h6 id='heading_edit_"+count+"'>"+flname+"</h6></div></div><div class='clear'></div></div><div class='clear'></div><span id=contactEdit_cnt_"+count+" ></span></div></span>";
										$("#div_groups_search").html(message);
										$("#div_groups_search").show();
										
									}
								else
									{
										AllDivs();
										$('#word5').show();
										$('#main_icon').show();
										$('#show_groups').hide();
										$("#div_groups").html('');
										$('#show_groups_search').show();
										$("#div_groups_search").html('');
										data = JSON.parse(data);
										loadGroups(data,1);
										document.getElementById("list_search123_cnt").value='';
									}
									
							},
							error: function (data){
								alert(data.responseJSON.status);
							}
						 });
				}
				}
				
				
}