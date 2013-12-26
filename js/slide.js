$(document).ready(function() {
// Hide the div tags
	$("div").hide();
	
	$("h1").click(function() {
		$(this).next().slideToggle();
	});
	
	
});
