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
});