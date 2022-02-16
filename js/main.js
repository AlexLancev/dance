$(document).ready(function() {
  $('.popular-questions__heading').click(function(event) {
    $(this).toggleClass("active").next().slideToggle(300);
  });
});

$(function(){
    $('.classes__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        dots: false,
        fade: true
    });
  });

  $(function(){
    $('.photoshoot__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        dots: false,
        fade: true
    });
  });

  $(function(){
    $('.school-reviews__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        dots: false,
        fade: true
    });
  });

  $(function(){
    $('.directions__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        dots: false,
        fade: true
    });
  });

  $(document).ready(function() {
    $('.container-show').click(function(event) {
      $(this).addClass("container-show--active");
    });
  });