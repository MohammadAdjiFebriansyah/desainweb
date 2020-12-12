$(document).ready(function(){
	$(".nav-item").hover(function(){
		$(this).find(".dropdown-menu").slideToggle("normal");
	});
});