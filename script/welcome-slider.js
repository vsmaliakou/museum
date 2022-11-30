$(document).ready(function(){
  $('.welcome__slider').slick({
    dots: true,
    appendArrows: $('.wsc'),
    appendDots: $('.wsc'),
  });
  $('.welcome__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    let current = document.getElementById('current-slide');
    current.innerHTML = `0${nextSlide + 1}`;
  });
});