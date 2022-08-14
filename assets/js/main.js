/*---------------------------------------------
Template name :  Banglacart
Version       :  1.0
Author        :  ThemeLooks
Author url    :  http://themelooks.com

NOTE:
------
Please DO NOT EDIT THIS JS, you may need to use "custom.js" file for writing your custom js.
We may release future updates so it will overwrite this file. it's better and safer to use "custom.js".

[Table of Content]

    01: Banner Slider
    02: Category Slider
    03: Category List Dropdown
    04: Special Offer Slider
    05: Back To Top


----------------------------------------------*/


(function ($) {
    "use strict";
    /* 01:Banner Slider */ 
    var swiper = new Swiper(".banner-slider", {
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        }
    });


    /* 02:Category Slider */ 
    var swiper = new Swiper(".category-slider", {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          breakpoints: {
            991: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 30
            }
          },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });


    /* 03:Category List Dropdown */
    $(document).ready(function(){
      $(".category-title").click(function(){
        $(".category-list").toggle();
      });
    });


    /* 04:Special Offer Slider */
    var swiper = new Swiper(".special-offer-slider", {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
      // autoplay: {
      //     delay: 2500,
      //     disableOnInteraction: false,
      //   },
        breakpoints: {
          991: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });


    /* 04:Testimonial Slider */
    var swiper = new Swiper(".testimonial-slider", {
      slidesPerView: 1,
      loop: true,
      // autoplay: {
      //     delay: 2500,
      //     disableOnInteraction: false,
      //   },
 
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });


    /* 05:Back To Top */ 
    var $backToTopBtn = $(".back-to-top");
    if ($backToTopBtn.length) {
      var scrollTrigger = 400, // px
        backToTop = function () {
          var scrollTop = $(window).scrollTop();
          if (scrollTop > scrollTrigger) {
            $backToTopBtn.addClass("show");
          } else {
            $backToTopBtn.removeClass("show");
          }
        };

      backToTop();

      $(window).on("scroll", function () {
        backToTop();
      });

      $backToTopBtn.on("click", function (e) {
        e.preventDefault();
        $("html,body").animate(
          {
            scrollTop: 0
          },
          700
        );
      });
    }


    /* 06:Sticky Nav */
    var navBar = $(".main-menu");
    var hdrHeight = $("header").height();
    
    $(window).scroll(function() {
      if( $(this).scrollTop() > hdrHeight + 200) {
        navBar.addClass("navScrolled");
      } else {
        navBar.removeClass("navScrolled");
      }
    }); 

}(jQuery));