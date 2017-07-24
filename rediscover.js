// Index Page 

// Solenodon Toggle Click

$(document).ready(function(){ 
	$(".solenodon").hide();
    $("button").click(function(){
        $(".solenodon").toggle();
    });
});

// Rediscovered Mammals Page //

// Chacoan Peccary Slide Toggle //

$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});

// Bavarian Pine Vole Slide Toggle //

$(document).ready(function(){
    $(".vole-section").click(function(){
        $(".vole-summary").slideToggle("slow");
    });
});

// Wallaby Section Slide Toggle

$(document).ready(function(){
    $(".wallaby-section").click(function(){
        $(".wallaby-summary").slideToggle("slow");
    });
});

