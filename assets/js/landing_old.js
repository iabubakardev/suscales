/***** Landing Lage Slid Down *****/

$(document).ready(function(){
   $(".icandrag").draggable({
	   scroll: true,
	   cursor: "move",
        axis: "y",
        drag: function(e, ui) {
            console.log(ui.position.top + " dd")
            if(ui.position.top > 0) {
                ui.position.top = 0;
				$(".icandrag").css("pointer-events", "none");
            }
        },
    });
});


/***** Landing Lage Slid Down *****/