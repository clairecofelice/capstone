 function hide_show() {
    var x = document.getElementById("location_text");
    if (x.style.display === "none") {
        x.style.display = "block";

    } else {
        x.style.display = "none";
    }
}

$(".c1").click(function() {
  $(this).toggleClass("circle_selected");
});

$(".c2").click(function() {
  $(this).toggleClass("circle_selected");
});

$(".c3").click(function() {
  $(this).toggleClass("circle_selected");
});

$(".c4").click(function() {
  $(this).toggleClass("circle_selected");
});

$(".c5").click(function() {
  $(this).toggleClass("circle_selected");
});

$(".c6").click(function() {
  $(this).toggleClass("circle_selected");
});


function displayText2() {
   document.getElementById("location_text2").style.display = "block";
 }

function displayTower() {
 	document.getElementById("footnote").style.display = "none";
 	document.getElementById("watertower").style.display = "block";
 }

function displayFootnote() {
 	document.getElementById("footnote").style.display = "block";
 	document.getElementById("watertower").style.display = "none";
 }

 function toggleCaption() {
    var x = document.getElementById("caption1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function toggleCaption2() {
    var x = document.getElementById("caption2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function toggleCaption3() {
    var x = document.getElementById("caption3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function toggleCaption4() {
    var x = document.getElementById("caption4");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// $(".lacledes").click(function() {
//   $(this).toggleClass("lacledes_color");
// });

$( ".expand" ).click(function() {
    $("smallMap").toggleClass("expandMap");
});


$(window).load(function(){
  $(window).scroll(function() {
    var wintop = $(window).scrollTop(), docheight = $('body').height(), winheight = $(window).height();
    console.log(wintop);
    var totalScroll = (wintop/(docheight-winheight))*100;
    console.log("total scroll" + totalScroll);
    $(".progressBar").css("width",totalScroll+"%");
  });

});

//scrolling anaimations

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("popup");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(document).ready(function() {
  $(".next_prev").click(function() {
    $(".next_prev")
      .addClass('next_animated')
      .bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", 
      function() {
        window.location = "footnote.html"      });
  });
});
