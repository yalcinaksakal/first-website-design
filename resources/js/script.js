//

//

//
/*test jquery
$(document).ready(function () {
  $("h1").click(function () {
    $(this).css("background-color", "red");
  });
});
*/
//sticky nav
$(".js--section-features").waypoint(
  function (direction) {
    if (direction === "down") $("nav").addClass("sticky");
    else $("nav").removeClass("sticky");
  },
  {
    offset: "50px",
  }
);

/*
var waypoints = $("#handler-first").waypoint(
  function (direction) {
    notify(this.element.id + " hit 25% from top of window");
  },
  {
    offset: "25%",
  }
);
*/

//full button scroll behaviour
/*
$(".js--scroll-to-plan").click(function () {
  $("html, body").animate({ scrollTop: $(".js--plans").offset().top }, 100);
});
*/
/*
//animations on scroll (to be able to animate, element should be invisible first, so check css)
$(".js--wp-1").waypoint(
  function (direction) {
    $(".js--wp-1").addClass("animated fadeIn");
  },
  {
    offset: "50%",
  }
);

$(".js--wp-2").waypoint(
  function (direction) {
    $(".js--wp-2").addClass("animated fadeInUp");
  },
  {
    offset: "50%",
  }
);

$(".js--wp-3").waypoint(
  function (direction) {
    $(".js--wp-3").addClass("animated fadeIn");
  },
  {
    offset: "50%",
  }
);

$(".js--wp-4").waypoint(
  function (direction) {
    $(".js--wp-4").addClass("animated pulse");
  },
  {
    offset: "50%",
  }
);
*/
