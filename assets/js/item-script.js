$(document).ready(function(){
	
// $("#carousel-prev").click(function(){
// 	var current = parseInt($('#carousel').css('margin-left').replace("px", ""));
// 	if (current == 0){
// 		return false; 
// 	} else{
// 	current = current + 960;
// 	$("#carousel").css("margin-left" , current)
// 	}
// })

// $(".test").click(function(){
// 	console.log("test successful")
// })

// BEGIN ITEM VIEW CODE
	
	// Unslider
	// $(function() {
	//     $('.item-banner').unslider();
	// });

	// var slidey = $('.item-banner').unslider(),
	//     data = slidey.data('unslider');
	    
	// //  Start Unslider
	// data.start();
	// // data.dots();

	$('.item-banner').unslider({
		speed: 500,               //  The speed to animate each slide (in milliseconds)
		delay: 3000,              //  The delay between slide animations (in milliseconds)
		// complete: function() {},  //  A function that gets called after every slide animation
		keys: true,               //  Enable keyboard (left, right) arrow shortcuts
		dots: true,               //  Display dot navigation
		fluid: true              //  Support responsive design. May break non-responsive designs
	});

});