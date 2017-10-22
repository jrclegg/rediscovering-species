// Index Page 

// Solenodon Toggle Click

$(document).ready(function(){ 
    $(".solenodon-button").click(function(){ 
        $(".solenodon").toggle();
            $('html,body').animate({
                scrollTop: $(document).height()/2,
            }, 1000);
        if ($(this).text() == "Hide the Solenodon!") {
            $(this).text("Rediscover the Solenodon!"); 
        } else {
            $(this).text("Hide the Solenodon!"); 
        }; 
    });
});

// Rediscovered Mammals Page //

// Chacoan Peccary Slide Toggle //

$(document).ready(function(){
    $(".peccary-button").click(function(){
        $(".peccary-summary").slideToggle("slow");
            $('html,body').animate({
                scrollTop: $(document).height()/5.82,
            }, 1000);
    });
});

// Bavarian Pine Vole Slide Toggle //

$(document).ready(function(){
    $(".vole-button").click(function(){
        $(".vole-summary").slideToggle("slow");
            $('html,body').animate({
                scrollTop: $(document).height()/2.85,
            }, 1000);
    });
});

// Wallaby Section Slide Toggle

$(document).ready(function(){
    $(".wallaby-button").click(function(){
        $(".wallaby-summary").slideToggle("slow");
            $('html,body').animate({
                scrollTop: $(document).height()/1.88,
            }, 1000);
    });
});

// Leadbeater's Possum Slide Toggle 

$(document).ready(function(){
    $(".possum-button").click(function(){
        $(".possum-summary").slideToggle("slow");
            $('html,body').animate({
                scrollTop: $(document).height()/1.41,
            }, 1000);
    });
});

// Roosevelt's Muntjac Slide Toggle 

$(document).ready(function(){
    $(".muntjac-button").click(function(){
        $(".muntjac-summary").slideToggle("slow");
            $('html,body').animate({
                scrollTop: $(document).height()/1.05,
            }, 1000);
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
