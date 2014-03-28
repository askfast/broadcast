

//loading popup with jQuery magic!
function loadPopup(){
		$("#backgroundPopup").css({
			"opacity": "0.7"
		});
		$("#backgroundPopup").fadeIn("slow");
		$("#popupContact").fadeIn("slow");
}

function loadPopup2(){
		$("#backgroundPopup").css({
			"opacity": "0.7"
		});
		$("#backgroundPopup").fadeIn("slow");
		$("#popupContact2").fadeIn("slow");
}

function loadPopup3(){
		$("#backgroundPopup").css({
			"opacity": "0.7"
		});
		$("#backgroundPopup").fadeIn("slow");
		$("#popupContact3").fadeIn("slow");
}

function loadPopup4(){
		$("#backgroundPopup").css({
			"opacity": "0.7"
		});
		$("#backgroundPopup").fadeIn("slow");
		$("#popupContact4").fadeIn("slow");
}

function loadPopup5(){
		$("#backgroundPopup").css({
			"opacity": "0.7"
		});
		$("#backgroundPopup").fadeIn("slow");
		$("#popupContact5").fadeIn("slow");
}

function loadPopup6(){
		$("#backgroundPopup").css({
			"opacity": "0.7"
		});
		$("#backgroundPopup").fadeIn("slow");
		$("#popupContact6").fadeIn("slow");
}

function disablePopup(){
		$("#backgroundPopup").fadeOut("slow");
		$("#popupContact").fadeOut("slow");
		$('#background_load').hide();
}

function disablePopup2(){
		$("#backgroundPopup").fadeOut("slow");
		$("#popupContact2").fadeOut("slow");
		$('#background_load').hide();
}

function disablePopup3(){
		$("#backgroundPopup").fadeOut("slow");
		$("#popupContact3").fadeOut("slow");
		$('#background_load').hide();
}

function disablePopup4(){
		$("#backgroundPopup").fadeOut("slow");
		$("#popupContact4").fadeOut("slow");
		$('#background_load').hide();
}

function disablePopup5(){
		$("#backgroundPopup").fadeOut("slow");
		$("#popupContact5").fadeOut("slow");
		$('#background_load').hide();
		$('#accDetedit').show();
		$('#accDetsave').hide();
		$("#accDetName").attr("readonly", true);
		$("#accDetEmail").attr("readonly", true);
		$("#accDetAddress").attr("readonly", true);
}

function disablePopup6(){
		$("#backgroundPopup").fadeOut("slow");
		$("#popupContact6").fadeOut("slow");
		$('#background_load').hide();
}

//centering popup
function centerPopup(){
	//request data for centering
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = $("#popupContact").height();
	var popupWidth = $("#popupContact").width();
	
	var popupHeight2 = $("#popupContact2").height();
	var popupWidth2 = $("#popupContact2").width();
	
	var popupHeight4 = $("#popupContact4").height();
	var popupWidth4 = $("#popupContact4").width();
	
	var popupHeight5 = $("#popupContact5").height();
	var popupWidth5 = $("#popupContact5").width();
	
	var popupHeight6 = $("#popupContact6").height();
	var popupWidth6 = $("#popupContact6").width();
	//centering
	$("#popupContact").css({
		"position": "absolute",
		"top": "200px",
		"left": windowWidth/2-popupWidth/2
		
	});
	
	$("#popupContact2").css({
		"position": "absolute",
		"top": "200px",
		"left": windowWidth/2-popupWidth/2
		
	});
	$("#popupContact3").css({
		"position": "absolute",
		"top": "200px",
		
	});
	
	$("#popupContact4").css({
		"position": "absolute",
		"top": "200px",
		
	});
	
	$("#popupContact5").css({
		"position": "absolute",
		"top": "200px",
		
	});
	$("#popupContact6").css({
		"position": "absolute",
		"top": "200px",
		
	});
	
	//only need force for IE6
	
	$("#backgroundPopup").css({
		"height": windowHeight
	});
	
}


//CONTROLLING EVENTS IN jQuery
$(document).ready(function(){
	
	//LOADING POPUP
	//Click the button event!
	$("#button").click(function(){
		//centering with css
		centerPopup();
		//load popup
		loadPopup();
		
		//centering with css
		
	});
				
	//CLOSING POPUP
	//Click the x event!
	$("#popupContactClose").click(function(){
		disablePopup();
	});
	$("#popupContactClose2").click(function(){
		disablePopup2();
	});
	$("#popupContactClose3  ").click(function(){
		disablePopup3();
	});
	$("#popupContactClose4  ").click(function(){
		disablePopup4();
	});
	$("#popupContactClose5  ").click(function(){
		disablePopup5();
	});
	$("#popupContactClose6  ").click(function(){
		disablePopup6();
	});
	//Click out event!
	$("#popupContact3").css({
		"position": "absolute",
		"top": "200px",
		
	});
	$("#backgroundPopup").click(function(){
	});
	//Press Escape event!
	$(document).keypress(function(e){
		if(e.keyCode==27 && popupStatus==1){
			disablePopup();
		}
	});
	

});