  $('#video').click(function(){
		if($("#video-content").height() === 656){
			$(".bg-down").css({'margin-top': '0px'});
			$(".video-down").css("height","0px");
			$("#video-content").empty();
		}
		else{
			$(".bg-down").css({'margin-top': '656px'});
			$(".video-down").css("height","656px");
			$("#video-content").append('<div class="container"></div>');
			
			$('#video-content div.container').delay(400).queue(function () {

					$(this).append('<div class="row"><div class="span16"><div class="video"><iframe src="http://player.vimeo.com/video/8709313?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="960" height="540" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div></div></div>');
				$(this).append('<div class="row"  style="padding-right:35px;"><div class="span16"><div class="video-close"><a href="#" id="video-close"><img src="images/video-close.png"/></div></div></div>');
			});
		}
  });
  
  $('#video-play').click(function(){
		if($("#video-content").height() === 656){
			$(".bg-down").css({'margin-top': '0px'});
			$(".video-down").css("height","0px");
			$("#video-content").empty();
		}
		else{
			$(".bg-down").css({'margin-top': '656px'});
			$(".video-down").css("height","656px");
			$("#video-content").append('<div class="container"></div>');
			
			$('#video-content div.container').delay(400).queue(function () {
				$(this).append('<div class="row"><div class="span16"><div class="video"><iframe src="http://player.vimeo.com/video/8709313?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="960" height="540" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div></div></div>');
				$(this).append('<div class="row"  style="padding-right:35px;"><div class="span16"><div class="video-close"><a href="#" id="video-close"><img src="images/video-close.png"/></div></div></div>');
			});
		}
  });

	$('#video-content').on('click', '#video-close', function(){
		if($("#video-content").height() === 656){
			console.log("TEST");
			
			$(".bg-down").css({'margin-top': '0px'});
			$(".video-down").css("height","0px");
			$("#video-content").empty();
			
		}
	});
	
	
  $("#haltestellen").mouseover(function() {
		$("#haltestellen h3").css("color", "#00d9bd");
		//$("#iphone-center").append('<img src="images/howitworks-haltestelleniphone.png" id="iphone-over" style="position:absolute;width:470px;display:block;height:702px;margin:0px auto;margin-top: 50px;z-index: 1;" />');
		
		$("#one").removeClass("hidden").addClass("screenhot-show");
		$("#arrows").css("z-index","-1").css("background-image","url(images/arrows-haltestelle.png)");
		
		$("#datepicker").css("opacity","0.4");
		$("#suche").css("opacity","0.4");
		$("#bringmehome").css("opacity","0.4");
		$("#nextrbutton").css("opacity","0.4");
		
  }).mouseout(function(){
		$("#one").addClass("hidden").removeClass("screenhot-show");
		$("#haltestellen h3").css("color", "#000000");
		$("#arrows").css("z-index","0").css("background-image","url(images/arrows.png)");
		
		$("#datepicker").css("opacity","");
		$("#suche").css("opacity","");
		$("#bringmehome").css("opacity","");
		$("#nextrbutton").css("opacity","");
  });
	
  $("#datepicker").mouseover(function() {
		$("#datepicker h3").css("color", "#00d9bd");
		$("#arrows").css("z-index","-1").css("background-image","url(images/arrows-datepicker.png)");
		
		$("#two").removeClass("hidden").addClass("screenhot-show");

		$("#haltestellen").css("opacity","0.4");
		$("#suche").css("opacity","0.4");
		$("#bringmehome").css("opacity","0.4");
		$("#nextrbutton").css("opacity","0.4");
  }).mouseout(function(){
		$("#datepicker h3").css("color", "#000000");
		$("#arrows").css("z-index","0").css("background-image","url(images/arrows.png)");
		
		$("#two").addClass("hidden").removeClass("screenhot-show");
		$("#haltestellen").css("opacity","");
		$("#suche").css("opacity","");
		$("#bringmehome").css("opacity","");
		$("#nextrbutton").css("opacity","");
  });
	
  $("#suche").mouseover(function() {
		$("#suche h3").css("color", "#00d9bd");
		$("#arrows").css("z-index","-1").css("background-image","url(images/arrows-suche.png)");
		
		$("#three").removeClass("hidden").addClass("screenhot-show");
		$("#datepicker").css("opacity","0.4");
		$("#haltestellen").css("opacity","0.4");
		$("#bringmehome").css("opacity","0.4");
		$("#nextrbutton").css("opacity","0.4");
  }).mouseout(function(){
		$("#three").addClass("hidden").removeClass("screenhot-show");
		$("#suche h3").css("color", "#000000");
		$("#arrows").css("z-index","0").css("background-image","url(images/arrows.png)");
		
		$("#datepicker").css("opacity","");
		$("#haltestellen").css("opacity","");
		$("#bringmehome").css("opacity","");
		$("#nextrbutton").css("opacity","");
  });
	
  $("#bringmehome").mouseover(function() {
		$("#bringmehome h3").css("color", "#00d9bd");
		$("#arrows").css("z-index","-1").css("background-image","url(images/arrows-bringmehome.png)");
		
		$("#four").removeClass("hidden").addClass("screenhot-show");
		$("#datepicker").css("opacity","0.4");
		$("#suche").css("opacity","0.4");
		$("#haltestellen").css("opacity","0.4");
		$("#nextrbutton").css("opacity","0.4");
  }).mouseout(function(){
		$("#four").addClass("hidden").removeClass("screenhot-show");
		$("#bringmehome h3").css("color", "#000000");
		$("#arrows").css("z-index","0").css("background-image","url(images/arrows.png)");
		
		$("#datepicker").css("opacity","");
		$("#suche").css("opacity","");
		$("#haltestellen").css("opacity","");
		$("#nextrbutton").css("opacity","");
  });
	
  $("#nextrbutton").mouseover(function() {
		$("#nextrbutton h3").css("color", "#00d9bd");
		$("#arrows").css("z-index","-1").css("background-image","url(images/arrows-nextr.png)");
		
		$("#five").removeClass("hidden").addClass("screenhot-show");
		$("#datepicker").css("opacity","0.4");
		$("#suche").css("opacity","0.4");
		$("#bringmehome").css("opacity","0.4");
		$("#haltestellen").css("opacity","0.4");
  }).mouseout(function(){
		$("#five").addClass("hidden").removeClass("screenhot-show");
		$("#nextrbutton h3").css("color", "#000000");
		$("#arrows").css("z-index","0").css("background-image","url(images/arrows.png)");
		
		$("#datepicker").css("opacity","");
		$("#suche").css("opacity","");
		$("#haltestellen").css("opacity","");
		$("#bringmehome").css("opacity","");
  });
	
	
  $("#scroll").mouseover(function() {
		$("#scroll h3").css("color", "#00d9bd");
		
		$("#iphone-center2").append('<img src="images/howitworks2-coniphone-scroll.png" id="iphone-over" style="position:absolute;display:block;margin:0px auto;margin-top: 50px;z-index: 1;" />');
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
		
		$("#iphone-center2").append('<img src="images/howitworks2-coniphone-detail.png" id="iphone-over" style="position:absolute;display:block;margin:0px auto;margin-top: 50px;z-index: 1;" />');
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
	
 
	
	
	
  $("li#bus").mouseover(function() {
		$("li#bus .hover").css("visibility", "visible");
	
  }).mouseout(function(){
	$("li#bus .hover").css("visibility", "hidden");
	 });
	 
   $("li#sbahn").mouseover(function() {
		$("li#sbahn .hover").css("visibility", "visible");
	
   }).mouseout(function(){
   		$("li#sbahn .hover").css("visibility", "hidden");
 	 });
	
   $("li#ubahn").mouseover(function() {
		$("li#ubahn .hover").css("visibility", "visible");	
   }).mouseout(function(){
  		$("li#ubahn .hover").css("visibility", "hidden");
 	 });
	 
   $("li#zug").mouseover(function() {
		$("li#zug .hover").css("visibility", "visible");	
   }).mouseout(function(){
 		$("li#zug .hover").css("visibility", "hidden");
 	 });
	 
   $("li#sonstige").mouseover(function() {
		$("li#sonstige .hover").css("visibility", "visible");			
   }).mouseout(function(){
		$("li#sonstige .hover").css("visibility", "hidden");
 	});
	

	$('a[href=#features]').
	    click(function(){
	        var target = $('#features');
	        if (target.length)
	        {
	            var top = target.offset().top;
	            $('html,body').animate({scrollTop: top}, 1000);
	            return false;
	        }
	    });
		
		$('a[href=#page-footer]').
		    click(function(){
		        var target = $('#page-footer');
		        if (target.length)
		        {
		            var top = target.offset().top;
		            $('html,body').animate({scrollTop: top}, 1000);
		            return false;
		        }
		    });
			
			var something = document.getElementById('footer-facebook');

			something.style.cursor = 'pointer';
			something.onclick = function() {
			    window.open("http://www.facebook.com/nextrinfo");
			};
			
			var something2 = document.getElementById('footer-twitter');

			something2.style.cursor = 'pointer';
			something2.onclick = function() {
			    window.open("http://www.twitter.com/nextrinfo");
			};
			
			
			var something = document.getElementById('ober');

			something.style.cursor = 'pointer';
			something.onclick = function() {
			    window.open("http://www.oberhaeuser.info/");
			};
			
			var something2 = document.getElementById('mwermuth');

			something2.style.cursor = 'pointer';
			something2.onclick = function() {
			    window.open("http://www.mwermuth.com");
			};
			
			
	
	