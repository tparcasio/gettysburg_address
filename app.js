$(document).ready(function() {

    //When the page is loaded, fade in the contents slowly
    $("div").fadeIn(3000);

    //Set up a click event on every <h2> element that simultaneously fades it to 25 percent opacity while growing its left-hand margin to 20px
    $(document).on("click", "h2", function() {
        $("h2").animate({
            "opacity":".25",
            "margin-left":"20px"
        //When this animation is complete, fade the speech text to 50 percent opacity
        }, function() {
            $(".speech").animate({
              "opacity":".5"
            });
        });
    });

    //Make the style switcher work
    var originalSize = $(".label").css("font-size");

    $(document).on("click", "#switcher-default", function() {
        $(".label").css("font-size", originalSize);
    });

    $(document).on("click", "#switcher-large", function() {
        $(".label").css("font-size", "+=10");
    });

    $(document).on("click", "#switcher-small", function() {
        $(".label").css("font-size", "-=10");
    });

    //React to presses of the arrow keys by smoothly moving the switcher box 20 pixels in the corresponding direction
    $(document).keydown(function(e) {
        if(e.keyCode === 39) {
            $("#switcher").animate({
                "margin-left":"+=20px"
            });
        } else if(e.keyCode === 37) {
            $("#switcher").animate({
                "margin-left":"-=20px"
            });
        }

        if(e.keyCode === 40) {
            $("#switcher").animate({
                "margin-top":"+=20px"
            });
        } else if(e.keyCode === 38) {
            $("#switcher").animate({
                "margin-top":"-=20px"
            });
        }
    });


});//Close document ready
