$(document).ready(function () {
  $(window).on("scroll resize", function () {
    if ($(window).width() > 992 && $(window).scrollTop() > 136) {
      $(".top-header").addClass("fixed-topheader");
    }
    if ($(window).scrollTop() == 0) {
      $(".top-header").removeClass("fixed-topheader");
    }
  });
  // open tasawk btn menu

  if ($(window).width() > 992) {
    $(".search-contact-div .tasawk-btn").on("click", function () {
      $("header").toggleClass("open-tasawk-btn-menu");
      $("body").toggleClass("overflow-hidden");
    });
    $(".sub-menu-overlay").on("click", function () {
      $("header").removeClass("open-tasawk-btn-menu");
      $("body").removeClass("overflow-hidden");
    });
  }

  //************************************************************************************************* */
  // open and close sidebar

  $(".bars").on("click", function () {
    $(".header-main-nav").addClass("open-sidebar");
    $("body").addClass("overflow-hidden");
  });
  $(".closeNavBtn , .nav-overlay").on("click", function () {
    $(".header-main-nav").removeClass("open-sidebar");
    $("body").removeClass("overflow-hidden");
  });

  // open and close sidebar's (tasawk btn sales)
  $("nav .tasawk-btn").on("click", function () {
    $(".sub-menu").slideToggle(400);
    $(".tasawk-btn-arrow-div").toggleClass("rotate-icon_change-bg");
  });

  // open seach box
  $(".search-btn").click(function () {
    $(".search-overlay").toggleClass("open-search-box");
    $("body").toggleClass("overflow-hidden");
    $(this)
      .children(".search-btn-icon")
      .toggleClass("fa-xmark fa-magnifying-glass");
  });

  //  open and close footer navigation
  $(".footer-nav-item-title , .search-nav-item-title").on("click", function () {
    $(this).siblings(".footer-nav-ul , .search-nav-ul ").slideToggle(300);
    $(this).toggleClass("mytitle-rotate");
    $(".footer-nav-item-title , .search-nav-item-title")
      .not(this)
      .removeClass("mytitle-rotate")
      .siblings(".footer-nav-ul , .search-nav-ul")
      .slideUp(300);
  });

  //************************************************************************************************ */

  $(".up-btn").on("click", function () {
    $("html , body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  const clientSildesSwiper = new Swiper(".workSamples-swiper .swiper", {
    loop: true,
    autoplay: {
      delay: 1000, // Set the autoplay delay in milliseconds
    },
    navigation: {
      nextEl: ".workSamples-swiper .swiper-button-next",
      prevEl: ".workSamples-swiper .swiper-button-prev",
    },
    pagination: {
      el: ".workSamples-swiper .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      350: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  var swiper = new Swiper(".thumbs-swiper", {
    // centeredSlides : true ,
    grabCursor: true,
    // loop:true,
    // slidesPerGroupSkip: 1,
    slidesPerView: "auto",
    breakpoints: {
      350: {
        spaceBetween: 30,
      },
      768: {
        spaceBetween: 40,
      },
      992: {
        spaceBetween: 50,
      },
      1200: {
        spaceBetween: 75,
      },
    },
    // spaceBetween: 75,
    // slidesPerView: 6,
    // freeMode: true,
    // watchSlidesProgress: true,
  });

  const clientsReview = new Swiper(".main-swiper", {
    loop: true,

    //   autoplay: {
    //     delay: 4000, // Set the autoplay delay in milliseconds
    //   },
    navigation: {
      nextEl: ".clients-review-swiper .swiper-button-next",
      prevEl: ".clients-review-swiper .swiper-button-prev",
    },
    //   pagination: {
    //     el: '.mySwiper2 .swiper-pagination',
    //     clickable: true,
    //   },
    //   a11y: {
    //     enabled: false, // Disable accessibility (if needed)
    //   },
    // spaceBetween: 10,
    // slidesPerView: 1,
    //   loop: true,
    //   loopedSlides: 2,
    thumbs: {
      swiper: swiper,
    },

    breakpoints: {
      350: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });

  // block 1 marquee

  $(".block1-marquee").marquee({
    duration: 23000,
    gap: 50,
    delayBeforeStart: 0,
    direction: "up",
    duplicated: true,
    pauseOnHover: true,
  });

  // block 2 marquee

  $(".block2-marquee").marquee({
    duration: 23000,
    gap: 50,
    delayBeforeStart: 0,
    direction: "down",
    duplicated: true,
    pauseOnHover: true,
  });

  // block 3 marquee

  $(".block3-marquee").marquee({
    duration: 23000,
    gap: 50,
    delayBeforeStart: 0,
    direction: "up",
    duplicated: true,
    pauseOnHover: true,
  });
});
