$('#menu > li').click(function(e) {	
    
	$("#webContent").empty();
	$("#webContent").load($(this).attr("src"));

	$("#menu > li > a").removeClass("active");
	$(this).find("a").addClass("active");

});