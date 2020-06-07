$('.slider__slider').slick({
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnFocus: false,
  arrows: false
});

$('.certificates__slider').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnFocus: false,
  slidesToShow: 5,
  arrows: false,
  dots: true,
});

$('.gallery__slider').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnFocus: false,
  slidesToShow: 5,
  arrows: false,
  dots: true,
});

$('.partners__slider').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnFocus: false,
  slidesToShow: 5,
  arrows: false,
  dots: true,
});

$(window).scroll(function(){
  var info = $('.info__panel'),
    scroll = $(window).scrollTop();
    offset = $('.info').offset().top - 300;
  console.log(scroll);

  if (scroll >= offset) {
    info.addClass('active');
  }
  // else {
  //   sticky.removeClass('fixed');
  // }
});

