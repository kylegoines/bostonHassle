jQuery( document ).ready( function( $ ) {

	$("#banner").hover(function() {
		$("#art-credit").show();
	}, function() {
		$("#art-credit").fadeOut(500);
	});

});