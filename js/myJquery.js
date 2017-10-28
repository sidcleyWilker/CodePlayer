$(document).ready(function(){

	$(".toggleButton").click(function(){
		$(this).toggleClass("active");

		var panelId = $(this).attr("id") + "Panel";

		$("#"+panelId).toggleClass("hidden");

		var numeroDePanelAtivos = 4 - $(".hidden").length;

		$(".panel").width( ($(window).width() / numeroDePanelAtivos) - 10);
	});


	$(".panel").height( $(window).height() - $("#header").height() - 15);
	$(".panel").width( ($(window).width() / 2) - 10);

	$("iframe").contents().find("html").html($("#htmlPanel").val());

	$("textarea").on('change keyup paste', function() {
    	$("iframe").contents().find("html").html(
    		"<html> <head> <style type='text/css'>" + 
    		$("#cssPanel").val() + "</style> </head> <body>" +
    		$("#htmlPanel").val() + "</body> </html>"
    	);
	});

});