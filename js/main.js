$(document).ready(function () {

  function addClassToSvgImages() {
    const svgImages = document.querySelectorAll('img[src$=".svg"]');
    svgImages.forEach( svgImage => svgImage.classList.add('svg'));
  }
  
  addClassToSvgImages();



  // tooltip

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

  // top header
  $(window).on("scroll resize", function () {
    if ($(window).width() > 992 && $(window).scrollTop() > 136) {
      $(".top-header").addClass("fixed-topheader");
    }
    if ($(window).scrollTop() == 0) {
      $(".top-header").removeClass("fixed-topheader");
    }
  });


// ************************************************************************************************
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

// ************************************************************************************************ 
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

  // ************************************************************************************************ 


  //  seach box
  $(".search-btn").click(function () {
    $(".search-overlay").toggleClass("open-search-box");
    $("body").toggleClass("overflow-hidden");
    $(this)
      .children(".search-btn-icon")
      .toggleClass("fa-xmark fa-magnifying-glass");
  });

//************************************************************************************************ 

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

// ************************************************************************************************ 

  // to top 

  $(".up-btn").on("click", function () {
    $("html , body").animate( { scrollTop: 0 } , 0 );
  });


// ************************************************************************************************ 

    // swipers

// client Sildes Swiper 
  const clientSildesSwiper = new Swiper(".workSamples-swiper .swiper", {
    loop: true,
   autoplay : true ,
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
  const clientsReview = new Swiper(".main-swiper", {
    loop: true,
    navigation: {
      nextEl: ".clients-review-swiper .swiper-button-next",
      prevEl: ".clients-review-swiper .swiper-button-prev",
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
    gap  : 12 ,
    delayBeforeStart: 0,
    direction: "right",
    duplicated: true,
  });


  $(" #partners .block2-marquee").marquee({
    duration: 20000,
    gap  : 24 ,
    delayBeforeStart: 0,
    direction: "right",
    duplicated: true,
  });


 





  const draggables = document.querySelectorAll('.draggable'),
      containers = document.querySelectorAll('.wrapper-cont');

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging');
    draggable.classList.add('dragDone');
  });

  

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
    draggable.classList.add('dragDone');

    


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
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return {offset: offset, element: child};
    } else {
      return closest;
    }
  }, {offset: Number.NEGATIVE_INFINITY}).element;
}

containers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientY);
    const draggable = document.querySelector('.dragging');
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
   let articleHeight = $article.prop("scrollHeight") ;


   if($article.length && $progressBar.length ){
    $(window).scroll(function () {
      let scrollTop = $(window).scrollTop() -  $article.offset().top ;
      console.log(scrollTop)
      if (scrollTop > 0) {
        let progress = Math.floor( Math.min(scrollTop / articleHeight , 1) * 100);
        $progressBar.css("width", progress + "%");
      }
    });
   }
   

//************************************************************************************************

// Eraser

(function ($) {
  var methods = {
      init: function (options) {
          return this.each(function () {
              var $this = $(this),
                  data = $this.data('eraser');

              if (!data) {
                  var width = $this.width(),
                      height = $this.height(),
                      pos = $this.offset(),
                      $canvas = $("<canvas/>"),
                      canvas = $canvas.get(0),
                      size = (options && options.size) ? options.size : 40,
                      completeRatio = (options && options.completeRatio) ? options.completeRatio : .7,
                      completeFunction = (options && options.completeFunction) ? options.completeFunction : null,
                      parts = [],
                      colParts = Math.floor(width / size),
                      numParts = colParts * Math.floor(height / size),
                      n = numParts,
                      ctx = canvas.getContext("2d");

                  // replace target with canvas
                  $this.after($canvas);
                  canvas.id = this.id;
                  canvas.className = this.className;
                  canvas.width = width;
                  canvas.height = height;
                  ctx.drawImage(this, 0, 0);
                  $this.remove();

                  // prepare context for drawing operations
                  ctx.globalCompositeOperation = "destination-out";
                  ctx.strokeStyle = 'rgba(255,0,0,255)';
                  ctx.lineWidth = size;

                  ctx.lineCap = "round";
                  // bind events
                  $canvas.bind('mousedown.eraser', methods.mouseDown);
                  $canvas.bind('touchstart.eraser', methods.touchStart);
                  $canvas.bind('touchmove.eraser', methods.touchMove);
                  $canvas.bind('touchend.eraser', methods.touchEnd);

                  // reset parts
                  while (n--) parts.push(1);

                  // store values
                  data = {
                      posX: pos.left,
                      posY: pos.top,
                      touchDown: false,
                      touchID: -999,
                      touchX: 0,
                      touchY: 0,
                      ptouchX: 0,
                      ptouchY: 0,
                      canvas: $canvas,
                      ctx: ctx,
                      w: width,
                      h: height,
                      source: this,
                      size: size,
                      parts: parts,
                      colParts: colParts,
                      numParts: numParts,
                      ratio: 0,
                      complete: false,
                      completeRatio: completeRatio,
                      completeFunction: completeFunction
                  };
                  $canvas.data('eraser', data);

                  // listen for resize event to update offset values	
                  $(window).resize(function () {
                      var pos = $canvas.offset();
                      data.posX = pos.left;
                      data.posY = pos.top;
                  });
              }
          });
      },
      touchStart: function (event) {

          var $this = $(this),
              data = $this.data('eraser');

          if (!data.touchDown) {
              var t = event.originalEvent.changedTouches[0],
                  tx = t.pageX - data.posX,
                  ty = t.pageY - data.posY;
              methods.evaluatePoint(data, tx, ty);
              data.touchDown = true;
              data.touchID = t.identifier;
              data.touchX = tx;
              data.touchY = ty;
              event.preventDefault();
          }
      },
      touchMove: function (event) {
          var $this = $(this),
              data = $this.data('eraser');

          if (data.touchDown) {
              var ta = event.originalEvent.changedTouches,
                  n = ta.length;

              while (n--)
              if (ta[n].identifier == data.touchID) {
                  var tx = ta[n].pageX - data.posX,
                      ty = ta[n].pageY - data.posY;
                  methods.evaluatePoint(data, tx, ty);
                  data.ctx.beginPath();
                  data.ctx.moveTo(data.touchX, data.touchY);
                  data.touchX = tx;
                  data.touchY = ty;
                  data.ctx.lineTo(data.touchX, data.touchY);
                  data.ctx.stroke();
                  event.preventDefault();
                  break;
              }
          }
      },
      touchEnd: function (event) {
          var $this = $(this),
              data = $this.data('eraser');

          if (data.touchDown) {
              var ta = event.originalEvent.changedTouches,
                  n = ta.length;
              while (n--)
              if (ta[n].identifier == data.touchID) {
                  data.touchDown = false;
                  event.preventDefault();
                  break;
              }
          }
      },

      evaluatePoint: function (data, tx, ty) {
          
          var p = Math.floor(tx / data.size) + Math.floor(ty / data.size) * data.colParts;
          if (p >= 0 && p < data.numParts) {
              data.ratio += data.parts[p];
              data.parts[p] = 0;
              if (!data.complete) {
                  if (data.ratio / data.numParts >= data.completeRatio) {
                      data.complete = true;
                      if (data.completeFunction != null) data.completeFunction();
                  }
              }
          }

      },

      mouseDown: function (event) {
          var $this = $(this),
              data = $this.data('eraser'),
              tx = event.pageX - data.posX,
              ty = event.pageY - data.posY;
          methods.evaluatePoint(data, tx, ty);
          data.touchDown = true;
          data.touchX = tx;
          data.touchY = ty;
          data.ctx.beginPath();
          data.ctx.moveTo(data.touchX - 1, data.touchY);
          data.ctx.lineTo(data.touchX, data.touchY);
          data.ctx.stroke();
          $this.bind('mousemove.eraser', methods.mouseMove);
          $(document).bind('mouseup.eraser', data, methods.mouseUp);
          event.preventDefault();
      },

      mouseMove: function (event) {
          var $this = $(this),
              data = $this.data('eraser'),
              tx = event.pageX - data.posX,
              ty = event.pageY - data.posY;
          methods.evaluatePoint(data, tx, ty);
          data.ctx.beginPath();
          data.ctx.moveTo(data.touchX, data.touchY);
          data.touchX = tx;
          data.touchY = ty;
          data.ctx.lineTo(data.touchX, data.touchY);
          data.ctx.stroke();
          event.preventDefault();
      },

      mouseUp: function (event) {
          var data = event.data,
              $this = data.canvas;
          data.touchDown = false;
          $this.unbind('mousemove.eraser');
          $(document).unbind('mouseup.eraser');
          event.preventDefault();
      },

      clear: function () {
          var $this = $(this),
              data = $this.data('eraser');
          if (data) {
              data.ctx.clearRect(0, 0, data.w, data.h);
              var n = data.numParts;
              while (n--) data.parts[n] = 0;
              data.ratio = data.numParts;
              data.complete = true;
              if (data.completeFunction != null) data.completeFunction();
          }
      },

      size: function (value) {
          var $this = $(this),
              data = $this.data('eraser');
          if (data && value) {
              data.size = value;
              data.ctx.lineWidth = value;
          }
      },

      reset: function () {
          var $this = $(this),
              data = $this.data('eraser');
          if (data) {
              data.ctx.globalCompositeOperation = "source-over";
              data.ctx.drawImage(data.source, 0, 0);
              data.ctx.globalCompositeOperation = "destination-out";
              var n = data.numParts;
              while (n--) data.parts[n] = 1;
              data.ratio = 0;
              data.complete = false;
          }
      }

  };

  $.fn.eraser = function (method) {
      if (methods[method]) {
          return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
      } else if (typeof method === 'object' || !method) {
          return methods.init.apply(this, arguments);
      } else {
          $.error('Method ' + method + ' does not yet exist on jQuery.eraser');
      }
  };
})(jQuery);


addEventListener( "load", init, false );
function init( event ) {
  $("#redux").eraser();
  //  $("#redux").eraser({size: 5});
}




$(".eye-btn").click(function(){
  $("#redux").toggleClass("clear-overlay");
  if( $("#redux").hasClass("clear-overlay") ){
    $(this).children(".svg").attr("src" , "images/pages/ecommerce/hidden-costs/Eye-Show.svg")
  }else{
    $(this).children(".svg").attr("src" , "images/pages/ecommerce/hidden-costs/Eye-Hide.svg")
  }
})





});




