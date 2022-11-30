$(document).ready(function(){
  $('.video__slider').slick({
    dots: true,
    slidesToShow: 3,
    asNavFor: '.video__slider-big',
    appendArrows: $('.video__slider_control'),
    appendDots: $('.video__slider_control'),
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });
  $('.video__slider-big').slick({
    arrows: false,
    fade: true,
    draggable: false,
    swipe: false
  });
});
