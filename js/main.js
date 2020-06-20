$(function(){
  // TOPスライダー
  $('.top-slider').slick({
    autoplay:true,
    arrows:true,
    dots: true,
    speed:1500,
    easing:'swing',
    centerMode:true,
    centerPadding:'25%',
    prevArrow:'<div class="slide-btn prev-btn"></div>',
    nextArrow:'<div class="slide-btn next-btn"></div>',
    responsive:[
      {
        breakpoint:768,
        settings:{
          centerPadding:'0%',
          slidesToShow:1,
          slidesToScroll:1,
        }
      }
    ]
  });
  // ハンバーガーメニュー
  $('.menu-trigger').on('click',function() {
    $('.header-links').toggleClass('is-active');
    $(this).toggleClass('is-active');
  });
});

$(window).on("load", function() {
  // ローディング
  setTimeout(function() {
      $('.loader').fadeOut();
  },600)
});

// フェードイン
$(window).on('scroll', function() {
  $('[data-fadeIn]').each(function(index, el) {
    if($(window).scrollTop() > ($(el).offset().top - $(window).height() / 2 - 300) ){
      $(el).addClass('is-over');
    }
  })
});