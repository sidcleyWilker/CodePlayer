$(document).ready(function(){

	$(".toggleButton").click(function(){
		$(this).toggleClass("active");
	});


	$(".panel").height( $(window).height() - $("#header").height() - 15);
	$(".panel").width( ($(window).width() / 2) -5);

	$("iframe").contents().find("html").html($("#panelHtml").val());

	$("textarea").on('change keyup paste', function() {
    	$("iframe").contents().find("html").html($("#panelHtml").val());
	});

});