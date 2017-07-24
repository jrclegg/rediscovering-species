$(document).ready(function(){ 
	$(".solenodon").hide();
    $("button").click(function(){
        $(".solenodon").toggle();
    });
});

$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});