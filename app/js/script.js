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