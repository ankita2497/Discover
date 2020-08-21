const responsive = {
  320: {
    items: 1,
  },
  600: {
    items: 2,
  },
  950: {
    items: 3,
  },
};

$(document).ready(function () {
  $nav = $(".nav");
  $togglebtn = $(".toggle-btn");
  $togglebtn.click(function () {
    $nav.toggleClass("open");
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    responsive: responsive,
    navText: [
      $(".owl-navigation .owl-nav-prev"),
      $(".owl-navigation .owl-nav-next"),
    ],
  });
  $(".move-up").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
  AOS.init();
});
