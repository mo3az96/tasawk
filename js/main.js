$(window).on("load", function () {
   $(".preloader-container").fadeOut();
});

$(document).ready( function () {
  if ($(".myselect").length > 0) {
    // fire select2
    $(".myselect").select2();

    $(".form select").select2({
      minimumResultsForSearch: -1,
    });
  }

  if ($(window).width() > 992) {
    $(".blog-menu-btn").on("click", function () {
      $(".top-header-list .nested-ul").slideToggle(300);
      $(this).children(".icon").toggleClass("rotate");
    });
  }

  if ($(window).width() < 992) {
    $(".blog-menu-btn").on("click", function () {
      $(".blog-top-header .topheader-cont .top-header-list").slideToggle(300);
      $(this).children(".icon").toggleClass("rotate");
    });
    $(".big-menu .menu-item-has-children > a").removeAttr("href");
  }

  // nested nav mobile
  if ($(window).width() <= 992) {
    $(".menu-item-has-children").click(function () {
      $(this).children(".sub-menu").slideToggle(300);
      $(this).children("a").toggleClass("icon-rotate");
      $(".menu-item-has-children")
        .not($(this))
        .children(".sub-menu")
        .slideUp(300);
      $(".menu-item-has-children")
        .not($(this))
        .children("a")
        .removeClass("icon-rotate");
    });
  }

  if ($(window).width() < 992) {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 0) {
        $("header").addClass("fixed-header");
      }
      if ($(window).scrollTop() == 0) {
        $("header").removeClass("fixed-header");
      }
    });
  }

  function addClassToSvgImages() {
    const svgImages = document.querySelectorAll('img[src$=".svg"]');
    svgImages.forEach((svgImage) => svgImage.classList.add("svg"));
  }

  addClassToSvgImages();

  // tooltip

  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

  // top header
  $(window).on("scroll resize", function () {
    if ($(window).width() > 992 && $(window).scrollTop() > 136) {
      $(".page-top-header").addClass("fixed-topheader");
    }
    if ($(window).scrollTop() == 0) {
      $(".page-top-header").removeClass("fixed-topheader");
    }
  });

  // ************************************************************************************************
  // open tasawk btn menu

  $(".contact-div .tasawk-btn ").on("click", function () {
    $("header").toggleClass("open-tasawk-btn-menu");
    $("body").toggleClass("overflow-hidden");
  });

  $(".sub-menu-overlay").on("click", function () {
    $("header").removeClass("open-tasawk-btn-menu");
    $(".page-top-header").removeClass("open-tasawk-btn-menu");
    $("body").removeClass("overflow-hidden");
  });

  if ($(window).width() > 992) {
    $(".topheader-cont .tasawk-btn ").on("click", function () {
      $(".page-top-header").toggleClass("open-tasawk-btn-menu");
      $("body").toggleClass("overflow-hidden");
    });
  }

  // ************************************************************************************************
  // open and close sidebar

  $(".bars").on("click", function () {
    $(".line1").toggleClass("rotate-line1");
    $(".line2").toggleClass("hide-line2");
    $(".line3").toggleClass("rotate-line3");
    $(".navigation").toggleClass("open-sidebar");
    $("body").toggleClass("overflow-hidden");
  });

  // open and close sidebar's (tasawk btn sales)
  $("nav .tasawk-btn").on("click", function () {
    $(".sub-menu").slideToggle(400);
    $(".tasawk-btn-arrow-div").toggleClass("rotate-icon_change-bg");
  });

  // ************************************************************************************************

  //************************************************************************************************

  //  open and close footer navigation
  $(".footer-nav-item-title").on("click", function () {
    $(this).siblings(".footer-nav-ul  ").slideToggle(300);
    $(this).toggleClass("mytitle-rotate");
    $(".footer-nav-item-title")
      .not(this)
      .removeClass("mytitle-rotate")
      .siblings(".footer-nav-ul ")
      .slideUp(300);
  });

  // ************************************************************************************************

  // to top

  $(".up-btn").on("click", function () {
    $("html , body").animate({ scrollTop: 0 }, 0);
  });

  // ************************************************************************************************

  // swipers

  // client Sildes Swiper
  const clientSildesSwiper = new Swiper(".workSamples-swiper .swiper", {
    loop: true,
    autoplay: true,
    speed: 800,
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

  // thumbs swiper
  var swiper = new Swiper(".thumbs-swiper", {
    grabCursor: true,
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
  });

  // clients Review swiper
  const clientsReview = new Swiper(".clients-review .main-swiper", {
    loop: true,
    speed: 800,
    navigation: {
      nextEl: ".clients-review  .swiper-button-next",
      prevEl: ".clients-review  .swiper-button-prev",
    },
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

  // clients Review swiper
  const homeClientsReviews = new Swiper(".home-clients-review .swiper", {
    loop: true,
    speed: 800,
    navigation: {
      nextEl: ".home-clients-review .swiper-button-next",
      prevEl: ".home-clients-review .swiper-button-prev",
    },
    breakpoints: {
      350: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });

  //************************************************************************************************

  // Marquee

  // block 1 marquee

  $(" #workSamples .block1-marquee").marquee({
    duration: 23000,
    gap: 50,
    delayBeforeStart: 0,
    direction: "up",
    duplicated: true,
  });

  // block 2 marquee

  $("#workSamples .block2-marquee").marquee({
    duration: 23000,
    gap: 50,
    delayBeforeStart: 0,
    direction: "down",
    duplicated: true,
  });

  // block 3 marquee

  $(" #workSamples .block3-marquee").marquee({
    duration: 23000,
    gap: 50,
    delayBeforeStart: 0,
    direction: "up",
    duplicated: true,
  });

  //************************************************************************************************

  //  partneres marquee

  $(" #partners .block1-marquee").marquee({
    duration: 35000,
    // gap: 24,
    gap: 12,
    delayBeforeStart: 0,
    direction: "right",
    duplicated: true,
  });

  $(" #partners .block2-marquee").marquee({
    duration: 20000,
    gap: 24,
    delayBeforeStart: 0,
    direction: "right",
    duplicated: true,
  });

  const draggables = document.querySelectorAll(".draggable"),
    containers = document.querySelectorAll(".wrapper-cont");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", () => {
      draggable.classList.add("dragging");
      draggable.classList.add("dragDone");
    });

    draggable.addEventListener("dragend", () => {
      draggable.classList.remove("dragging");
      draggable.classList.add("dragDone");

      // let oldSrc = draggable.querySelector(".darggable-cont img").getAttribute("src")
      // if(draggable.classList.contains("dragDone")){
      //   var childElement = draggable.querySelector(".darggable-cont img");
      //   if (childElement) {
      //       childElement.setAttribute("src", "images/pages/software-dev/special-soft-sec/Solid-check.svg");
      //   }
      // }else{
      //   childElement.setAttribute("src", oldSrc);
      // }
    });
  });

  const getDragAfterElement = (container, y) => {
    const draggableElements = [
      ...container.querySelectorAll(".draggable:not(.dragging)"),
    ];
    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  };

  containers.forEach((container) => {
    container.addEventListener("dragover", (e) => {
      e.preventDefault();
      const afterElement = getDragAfterElement(container, e.clientY);
      const draggable = document.querySelector(".dragging");
      if (afterElement == null) {
        container.appendChild(draggable);
      } else {
        container.insertBefore(draggable, afterElement);
      }
    });
  });

  //************************************************************************************************

  let $article = $("#Article");
  let $progressBar = $(".progress");
  let articleHeight = $article.prop("scrollHeight");

  if ($article.length && $progressBar.length) {
    $(window).scroll(function () {
      let scrollTop = $(window).scrollTop() - $article.offset().top;
      if (scrollTop > 0) {
        let progress = Math.floor(Math.min(scrollTop / articleHeight, 1) * 100);
        $progressBar.css("width", progress + "%");
      }
    });
  }

  //************************************************************************************************
});
