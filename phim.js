$(document).ready(function(){
	//change
	var $bo = $('.bo');
	var $start = $(".start input[type='button']");
	var $divStart = $(".start");
	$bo.hide();
	
	var $daiphim_top = $('.daiphim-top').hide();
	var $daiphim_bottom = $('.daiphim-bottom').hide();	
	var $back = $(".daiphim-bottom input[type='button']");

	var video = document.getElementsByTagName('video')[0];				
			
	$start.click(function(){
		$divStart.hide();
		$bo.show();
		$daiphim_top.show();
		$daiphim_bottom.show();
		$back.show();
		
		video.load();
		video.play();
		
		//delay month
		$('.month').hide();
		$('.month').delay(5000).fadeIn(800);
		
		//delay cant_food
		$('.cant_food').hide();
		$('.cant_food').delay(10000).fadeIn(800);
		
		//delay bill_empty
		$('.bill_empty').hide();
		$('.bill_empty').delay(10000).fadeIn(800);
		
		//delay canh2
		$('.canh2').hide();
		$('.canh2').delay(18000).fadeIn(400);
			
		//delay canh3
		$('.canh3').hide();
		$('.canh3').delay(32000).fadeIn(1200);
			
		//delay canh4
		$('.canh4').hide();
		$('.canh4').delay(37000).fadeIn(1200);
			
		//delay canh5
		$('.canh5').hide();
		$('.canh5').delay(48000).fadeIn(1200);
				
		//delay canh6
		$('.canh6').hide();
		$('.canh6').delay(53000).fadeIn(1200);
					
		//delay canh7
		$('.canh7').hide();
		$('.canh7').delay(63000).fadeIn(1200);
			
	});//end-click
	
	
	
	//func-click
	$back.click(function(){
		$bo.hide();
		$divStart.show();
		$(this).hide();
		$daiphim_top.hide();
		$daiphim_bottom.hide();
		video.pause();
	});	
	//func-hover
	$('.hover_back').bind('mouseenter',function(){
		$bo.hide();
		$divStart.show();	
		$divStart.show();
		$daiphim_top.hide();
		$daiphim_bottom.hide();
		video.pause();
	})
	
});