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

// Leadbeater's Possum Slide Toggle 

$(document).ready(function(){
    $(".possum-section").click(function(){
        $(".possum-summary").slideToggle("slow");
    });
});

// Roosevelt's Muntjac Slide Toggle 

$(document).ready(function(){
    $(".muntjac-section").click(function(){
        $(".muntjac-summary").slideToggle("slow");
    });
});

// Rediscovered Reptiles Page // 

// Crested Gecko //

$(document).ready(function (){
	$("button").click(function(){
		$(".gecko-summary").fadeToggle();
	});

});

// Terror Skink // 

$(document).ready(function (){
	$("button").click(function(){
		$(".skink-summary").fadeToggle();
	});

});

// Gomera Giant Lizard

$(document).ready(function (){
	$("button").click(function(){
		$(".gomera-summary").fadeToggle();
	});

});



