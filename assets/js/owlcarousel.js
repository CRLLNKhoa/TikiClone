
  $(document).ready(function(){
    $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 10,
      slidesToScroll: 3,
      prevArrow: '<span class="category_slide__arrow-left"><i class="fa-solid fa-arrow-left"></i></span>',
      nextArrow: '<span class="category_slide__arrow-right"><i class="fa-solid fa-arrow-right"></i></span>'
    });
  
    $('.autoplay').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: '.previous-btn',
      nextArrow: '.next-btn',
      dots:true,
      customPaging : function(slider, i) {
          return '<i class="fa-solid fa-circle"></i>';
      },
    });
   
    $('.sale-day__slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      prevArrow: '.previous-btn-flashsale',
      nextArrow: '.next-btn-flashsale',
    });
  
    $('.sep-slider').slick({
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots:true,
      customPaging : function(slider1, i) {
          return '<i class="fa-solid fa-circle"></i>';
      },
      prevArrow: '',
      nextArrow: '',
    });
    
    $('.frame-6__slider').slick({
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots:true,
      customPaging : function(slider1, i) {
          return '<i class="fa-solid fa-circle"></i>';
      },
      prevArrow: '.previous-btn-brand',
      nextArrow: '.next-btn-brand',
    });
   
    $('.similar__slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      prevArrow: '.previous-btn-similar',
      nextArrow: '.next-btn-similar',
    });

  });