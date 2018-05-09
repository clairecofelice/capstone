$(document).ready(function() {
  $(".t1").click(function() {
    $(".d1")
      .addClass('display_animated')
      .bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", 
      function() {
        window.location = "tour_one.html"      });
  });
});

$(document).ready(function() {
  $(".t2").click(function() {
    $(".d2")
      .addClass('display_animated')
      .bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", 
      function() {
        window.location = "tour_two.html"      });
  });
});

$(document).ready(function() {
  $(".t3").click(function() {
    $(".d3")
      .addClass('display_animated')
      .bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", 
      function() {
        window.location = "tour_three.html"      });
  });
});

function openNav() {
    document.getElementByClassName("dropdown-content").style.display = "block";
}