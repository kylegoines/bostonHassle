var scrolled=0;


jQuery( document ).ready( function( $ ) {

		
	$("#scrollUp").on("click" ,function(){

				scrolled=0;
	
				$("#index-secondary").animate({
						scrollTop:  scrolled
				   });

			});


	$("#scrollDown").on("click" ,function(){
				scrolled=scrolled+200;
			
				$("#index-secondary").animate({
						scrollTop:  scrolled
				   });

			});


});