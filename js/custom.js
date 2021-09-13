(function ($) {

    "use strict";

    //banner part js
    $('.banner-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: true,
        nextArrow: '.arrow-ar',
        prevArrow: '.arrow-al',
        autoplaySpeed: 3000,
        infinite: true,
        speed: 400,
        fade: true,
        cssEase: 'linear',
    });

    //game part js
    $('.game-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },

  ]
    });


    //game part js
    $('.match-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },

  ]
    });

    //brand part js
    $('.brand-main').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },

  ]
    });

    //player part js
    $('.player-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 2500,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },

  ]
    });

    //product part js
    $('.product-main').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },

  ]
    });

    // review slide js part
    $('.review-img-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 2500,
        infinite: true,
        fade: true,
        asNavFor: '.review-txt-main',
    });

    $('.review-txt-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 2500,
        fades: true,
        infinite: true,
        speed: 1500,
        fade: true,
        asNavFor: '.review-img-main',
    });


    //blog part js
    $('.blog-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: true,
        nextArrow: '.blog-arrow .arrow-ar',
        prevArrow: '.blog-arrow .arrow-al',
        autoplaySpeed: 2500,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },

  ]
    });

    // preloader
    $(window).on('load', function () {
        $('.preloader').delay(1000).fadeOut(1000);

    });
    // Closes responsive menu when a scroll link is clicked
    $('.menu-link, .abc, .cart').on('click', function () {
        $('.custom-menubar').slideUp(600);
    });
    //animation scroll js
    var html_body = $('html, body');
    $('.navbar a , .backtotop a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name="' + this.hash.slice(1) + '"]');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 65
                }, 1500);
                return false;
            }
        }
    });

    // smooth scroll js 
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var stikey = $('.sticky-top');

        if (scrolling >= 100) {

            $(stikey).addClass("nav-bg");

        } else {

            $(stikey).removeClass("nav-bg");
        }
        if (scrolling > 180) {
            $('.backtotop').fadeIn(500);
        } else {
            $('.backtotop').fadeOut(500);
        }
    });
    //scorllspy js
    $('body').scrollspy({
        target: ".navbar",
        offset: 70,
    });
    // Search Form js
    $('.abc').on('click', function (event) {
        event.preventDefault();
        $('.search').addClass('open');
        $('.search > form > input[type="search"]').focus();
    });
    $('.search, .search button.close').on('click keyup', function (event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    $('.fix-close').on('click', function () {
        $('.top-search').removeClass('open');
    });

    //menu part js
    $('.menu-icon').on('click', function () {
        $('.custom-menubar').slideDown(600);
    });
    $('.hide-menu-btn').on('click', function () {
        $('.custom-menubar').slideUp(600);
    });
    //lightbox js
    $('.venobox').venobox();
    // counter part js
    $('.counter').counterUp();
    // video player js
    jQuery("#bgndVideo").YTPlayer();

  /**
   * Animation on spoiler button
   */

function toggleSpoilerAnimated(spoilerElement, isInvertedCollapse, isInvertedExpand, duration=300) {
  let spoilerBody = spoilerElement.querySelector('.spoiler-body');
  let isCollapsing = spoilerElement.classList.contains('expanded');
  let heightBefore = spoilerElement.offsetHeight;
  let offsetBefore = window.pageYOffset;
  spoilerElement.classList.toggle('expanded', !isCollapsing);
  let isScrollRequired = ( isCollapsing && isInvertedCollapse) ||
                         (!isCollapsing && isInvertedExpand );
  let scrollFunc = (isScrollRequired)
    ? () => {
      let heightNow = spoilerElement.offsetHeight;
      let heightDelta = heightNow - heightBefore;
      window.scrollTo(0, offsetBefore + heightDelta);
    }
    : undefined;
  slideToggle(spoilerBody, !isCollapsing, { duration: duration, progress: scrollFunc, complete: scrollFunc });
}

for (let el of document.querySelectorAll('.spoiler-btn-top')) {
  el.addEventListener('click', e => toggleSpoilerAnimated(el.parentNode));
}
for (let el of document.querySelectorAll('.spoiler-btn-bottom')) {
  el.addEventListener('click', e => toggleSpoilerAnimated(el.parentNode, true, true));
}

function slideUp(element, options) { slideToggle(element, false, options); }
function slideDown(element, options) { slideToggle(element, true, options); }
function slideToggle(element, isOpening, options) {
  let h0 = getHeight(element);
  let duration = (options && options.duration) || 1000;
  let start = null;
  function step(timestamp) {
    if (!start) { start = timestamp; }
    let progress = 1.0 * (timestamp - start) / duration;
    let h1 = isOpening ? (h0 * progress) : (h0 * (1 - progress));
    if (progress < 1.0) {
      element.style.height = h1 + 'px';
      if (options.progress) { options.progress(); }
      window.requestAnimationFrame(step);
    } else {
      element.style.height = '';
      element.style.overflow = '';
      if (!isOpening) { element.style.display = 'none'; }
      if (options.complete) { options.complete(); }
    }
  }
  element.style.display = 'block';
  element.style.overflow = 'hidden';
  window.requestAnimationFrame(step);
}

// https://stackoverflow.com/a/29047232/3423843
function getHeight(el) {
  let el_comp_style = window.getComputedStyle(el),
    el_display    = el_comp_style.display,
    el_max_height = el_comp_style.maxHeight.replace('px', '').replace('%', ''),
    el_position   = el.style.position,
    el_visibility = el.style.visibility,
    wanted_height = 0;

  if (el_display !== 'none' && el_max_height !== '0') {
    return el.offsetHeight;
  }

  el.style.position   = 'absolute';
  el.style.visibility = 'hidden';
  el.style.display    = 'block';

  wanted_height = el.offsetHeight;

  el.style.display    = el_display;
  el.style.position   = el_position;
  el.style.visibility = el_visibility;

  return wanted_height;
}

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

}(jQuery));