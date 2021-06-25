// Filter Gallery
$(".gallery-filters li").click(function () {
  const value = $(this).attr("data-filter");
  if (value == "all") {
    $(".gallery-item").show("1000");
  } else {
    $(".gallery-item")
      .not("." + value)
      .hide("1000");
    $(".gallery-item")
      .filter("." + value)
      .show("1000");
  }
});
$(".gallery-filters li").click(function () {
  $(this).addClass("active-btn").siblings().removeClass("active-btn");
});

//Fancy BOX - Gallery
$('[data-fancybox="images"]').fancybox({
  buttons: ["slideShow", "share", "zoom", "fullScreen", "close"],
  thumbs: {
    autoStart: true,
  },
});

// Slick Slider
$(".slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  speed: 1000,
  infinite: true,
  asNavFor: ".slider-nav-thumbnails",
  prevArrow: '<i class="slick-left fas fa-chevron-left"></i>',
  nextArrow: '<i class="slick-right fas fa-chevron-right"></i>',
  autoplay: false,
  pauseOnHover: true,
  dots: false,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        arrows: true,
      },
    },
  ],
});

$(".slider-nav-thumbnails").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 1000,
  asNavFor: ".slider",
  centerPadding: "5px",
  infinite: true,
  centerMode: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  arrows: true,
  prevArrow: '<i class="slick-left fas fa-chevron-left"></i>',
  nextArrow: '<i class="slick-right fas fa-chevron-right"></i>',
  responsive: [
    {
      breakpoint: 480,
      settings: {
        arrows: false,
      },
    },
    {
      breakpoint: 576,
      settings: "unslick",
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      },
    },
  ],
});

// AOS SCROLL
AOS.init({
  disable: window.innerWidth < 992,
  once: true,
});

// Go TO Top
$(window).on("scroll", function () {
  if ($(window).scrollTop() >= 500) {
    $(".go-top").fadeIn(400);
  } else {
    $(".go-top").fadeOut(400);
  }
});

//Sticky
$(window).on("scroll", function () {
  if ($(window).scrollTop() >= 100) {
    $(".home-head").addClass("sticky");
  } else {
    $(".home-head").removeClass("sticky");
  }
});

//Scroll Spy
var dataSpyList = [].slice.call(
  document.querySelectorAll('[data-bs-spy="scroll"]')
);
