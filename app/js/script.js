$(document).ready(function(){
  $('.acoustics-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false
  });
});
$(document).ready(function(){
  $("#menu ,#menu1, #ButtonMore").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 800);
  });
});
$(function(){
  $("#phone_mask").mask("8(999) 999-9999");
});