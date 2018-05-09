 function hide_show() {
    var x = document.getElementById("location_text");
    if (x.style.display === "none") {
        x.style.display = "block";

    } else {
        x.style.display = "none";
    }
}

$(".circle1").click(function() {
  $(this).toggleClass("circle_selected");
});

$(".circle2").click(function() {
  $(this).toggleClass("circle_selected");
});

$(".circle3").click(function() {
  $(this).toggleClass("circle_selected");
});

$(".circle4").click(function() {
  $(this).toggleClass("circle_selected");
});

$(".circle5").click(function() {
  $(this).toggleClass("circle_selected");
});

$(".circle6").click(function() {
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