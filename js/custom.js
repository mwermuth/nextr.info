  $('#video').click(function(){
		if($("#video-content").height() === 656){
			$(".bg-down").css({'background-position': '0px 0px'});
			$(".video-down").css("height","0px");
			$("#video-content").empty();
			$("body").addClass("fixed-top-bar");
		}
		else{
			$("body").removeClass("fixed-top-bar");
			$(".bg-down").css({'background-position': '0px 656px'});
			$(".video-down").css("height","656px");
			$("#video-content").append('<div class="container"></div>');
			
			$('#video-content div.container').delay(400).queue(function () {
				$(this).append('<div class="row"><div class="span16"><div class="video"><iframe src="http://player.vimeo.com/video/8709313?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="960" height="540" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div></div></div>');
				$(this).append('<div class="row"><div class="span16"><div class="video-close"><a href="#" id="video-close"><img src="images/video-close.png"/></div></div></div>');
			});
		}
  });

	$('#video-content').on('click', '#video-close', function(){
		if($("#video-content").height() === 656){
			console.log("TEST");
			
			$("body").removeClass("fixed-top-bar");
			$(".bg-down").css({'background-position': '0px 0px'});
			$(".video-down").css("height","0px");
			$("#video-content").empty();
			$("body").addClass("fixed-top-bar");
			
		}
	});
	
	
  $("#haltestellen").mouseover(function() {
		$("#haltestellen h3").css("color", "#00d9bd");
		$("#iphone-center").append('<img src="images/howitworks-haltestelleniphone.png" id="iphone-over" style="position:absolute;width:470px;display:block;height:702px;margin:0px auto;margin-top: 50px;z-index: 1;" />');
		
		$("#datepicker").css("opacity","0.4");
		$("#suche").css("opacity","0.4");
		$("#bringmehome").css("opacity","0.4");
		$("#nextrbutton").css("opacity","0.4");
		
  }).mouseout(function(){
		$("#iphone-over").remove();
		$("#haltestellen h3").css("color", "#000000");
		
		$("#datepicker").css("opacity","");
		$("#suche").css("opacity","");
		$("#bringmehome").css("opacity","");
		$("#nextrbutton").css("opacity","");
  });
	
  $("#datepicker").mouseover(function() {
		$("#datepicker h3").css("color", "#00d9bd");
		
		$("#iphone-center").append('<img src="images/howitworks-datepickeriphone.png" id="iphone-over" style="position:absolute;width:470px;display:block;height:702px;margin:0px auto;margin-top: 50px;z-index: 1;" />');
		$("#haltestellen").css("opacity","0.4");
		$("#suche").css("opacity","0.4");
		$("#bringmehome").css("opacity","0.4");
		$("#nextrbutton").css("opacity","0.4");
  }).mouseout(function(){
		$("#datepicker h3").css("color", "#000000");
		
		$("#iphone-over").remove();
		$("#haltestellen").css("opacity","");
		$("#suche").css("opacity","");
		$("#bringmehome").css("opacity","");
		$("#nextrbutton").css("opacity","");
  });
	
  $("#suche").mouseover(function() {
		$("#suche h3").css("color", "#00d9bd");
		
		$("#iphone-center").append('<img src="images/howitworks-sucheiphone.png" id="iphone-over" style="position:absolute;width:470px;display:block;height:702px;margin:0px auto;margin-top: 50px;z-index: 1;" />');
		$("#datepicker").css("opacity","0.4");
		$("#haltestellen").css("opacity","0.4");
		$("#bringmehome").css("opacity","0.4");
		$("#nextrbutton").css("opacity","0.4");
  }).mouseout(function(){
		$("#iphone-over").remove();
		$("#suche h3").css("color", "#000000");
		
		$("#datepicker").css("opacity","");
		$("#haltestellen").css("opacity","");
		$("#bringmehome").css("opacity","");
		$("#nextrbutton").css("opacity","");
  });
	
  $("#bringmehome").mouseover(function() {
		$("#bringmehome h3").css("color", "#00d9bd");
		
		$("#iphone-center").append('<img src="images/howitworks-bringmehomeiphone.png" id="iphone-over" style="position:absolute;width:470px;display:block;height:702px;margin:0px auto;margin-top: 50px;z-index: 1;" />');
		$("#datepicker").css("opacity","0.4");
		$("#suche").css("opacity","0.4");
		$("#haltestellen").css("opacity","0.4");
		$("#nextrbutton").css("opacity","0.4");
  }).mouseout(function(){
		$("#iphone-over").remove();
		$("#bringmehome h3").css("color", "#000000");
		
		$("#datepicker").css("opacity","");
		$("#suche").css("opacity","");
		$("#haltestellen").css("opacity","");
		$("#nextrbutton").css("opacity","");
  });
	
  $("#nextrbutton").mouseover(function() {
		$("#nextrbutton h3").css("color", "#00d9bd");
		
		$("#iphone-center").append('<img src="images/howitworks-nextrbuttoniphone.png" id="iphone-over" style="position:absolute;width:470px;display:block;height:702px;margin:0px auto;margin-top: 50px;z-index: 1;" />');
		$("#datepicker").css("opacity","0.4");
		$("#suche").css("opacity","0.4");
		$("#bringmehome").css("opacity","0.4");
		$("#haltestellen").css("opacity","0.4");
  }).mouseout(function(){
		$("#iphone-over").remove();
		$("#nextrbutton h3").css("color", "#000000");
		
		$("#datepicker").css("opacity","");
		$("#suche").css("opacity","");
		$("#haltestellen").css("opacity","");
		$("#bringmehome").css("opacity","");
  });
	
	
  $("#scroll").mouseover(function() {
		$("#scroll h3").css("color", "#00d9bd");
		
		$("#iphone-center2").append('<img src="images/howitworks2-coniphone-scroll.png" id="iphone-over" style="position:absolute;width:675px;display:block;height:668px;margin:0px auto;margin-top: 50px;z-index: 1;" />');
		$("#verbindungen").css("opacity","0.4");
		$("#detail").css("opacity","0.4");
		$("#close").css("opacity","0.4");
  }).mouseout(function(){
		$("#iphone-over").remove();
		$("#scroll h3").css("color", "#000000");
		
		$("#verbindungen").css("opacity","");
		$("#detail").css("opacity","");
		$("#close").css("opacity","");
  });
	
	
  $("#detail").mouseover(function() {
		$("#detail h3").css("color", "#00d9bd");
		
		$("#iphone-center2").append('<img src="images/howitworks2-coniphone-detail.png" id="iphone-over" style="position:absolute;width:675px;display:block;height:668px;margin:0px auto;margin-top: 50px;z-index: 1;" />');
		$("#verbindungen").css("opacity","0.4");
		$("#scroll").css("opacity","0.4");
		$("#close").css("opacity","0.4");
  }).mouseout(function(){
		$("#iphone-over").remove();
		$("#detail h3").css("color", "#000000");
		
		$("#verbindungen").css("opacity","");
		$("#scroll").css("opacity","");
		$("#close").css("opacity","");
  });
	
  $("#close1").click(function()
   {
		 if($("#howitworks").is(":visible")){
			 $("#howitworks").slideUp();
			 $("#home-close img").rotate(180);
			 $("#home-close h1").css("color","black");
		 }
		 else{
			 $("#howitworks").slideDown();
			 $("#home-close img").rotate(0);
			 $("#home-close h1").css("color","#a3a3a3");
		 }
   });
	 
	 
   $("#close2").click(function()
    {
			if($(document).width() > 768){
	 		 if($("#howitworks2").is(":visible")){
	 			 $("#howitworks2").slideUp();
				 $("#verbindungen-close img").rotate(180);
				 $("#verbindungen-close h1").css("color","black");
				 $("#close2").addClass("grey-grad");
	 		 }
	 		 else{
	 			 $("#howitworks2").slideDown();
				 $("#verbindungen-close img").rotate(0);
				 $("#verbindungen-close h1").css("color","#a3a3a3");
				 $("#close2").removeClass("grey-grad");
	 		 }
	 	}
    });
	
	
	
  $("#bus").mouseover(function() {
		$("ul#bus #hover").css("display", "block");
	
  }).mouseout(function(){
		$("#bus li#hover").css("display", "none");
	 });
	 
   $("#sbahn").mouseover(function() {
 		$("ul#sbahn #hover").css("display", "block");
	
   }).mouseout(function(){
 		$("#sbahn li#hover").css("display", "none");
 	 });
	
   $("#ubahn").mouseover(function() {
 		$("ul#ubahn #hover").css("display", "block");
	
   }).mouseout(function(){
 		$("#ubahn li#hover").css("display", "none");
 	 });
	 
   $("#zug").mouseover(function() {
 		$("ul#zug #hover").css("display", "block");
	
   }).mouseout(function(){
 		$("#zug li#hover").css("display", "none");
 	 });
	 
   $("#sonstige").mouseover(function() {
 		$("ul#sonstige #hover").css("display", "block");
	
   }).mouseout(function(){
 		$("#sonstige li#hover").css("display", "none");
 	 });