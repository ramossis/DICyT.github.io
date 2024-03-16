const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: auto,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {  
        '480': {
          slidesPerView: 4,
          spaceBetween: 40,},
        '640': {
          slidesPerView: 5,
          spaceBetween: 50, },
      },
  });