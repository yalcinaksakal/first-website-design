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

//mobile nav
const nav = document.querySelector(".js--main-nav");
const icon = document.querySelector(".js--nav-icon");

icon.addEventListener("click", function (e) {
  if (!nav.style.display) {
    nav.style.display = "block";

    icon.classList.toggle("ion-ios-menu");
    icon.classList.toggle("ion-ios-close");
  } else {
    nav.style.display = "";
    icon.classList.toggle("ion-ios-menu");
    icon.classList.toggle("ion-ios-close");
  }
});

/*
$(".js--nav-icon").click(function () {
  const nav = $(".js--main-nav");
  const icon = $(".js--nav-icon");
  console.log(nav);
  nav.slideToggle(200);

  if (icon.hasClass("icon ion-ios-menu")) {
    icon.addClass("icon ion-ios-close");
    icon.removeClass("icon ion-ios-menu");
  } else {
    icon.removeClass("icon ion-ios-close");
    icon.addClass("icon ion-ios-menu");
  }
});*/

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
