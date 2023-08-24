$('.header_slider').slick({
  autoplaySpeed: 2000,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
  infinite: true,
  dots: false,
  arrows:false,
})

$('.sets_slider').slick({
  autoplaySpeed: 2000,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  pauseOnHover: true,
  infinite: true,
  dots: false,
  arrows:false,
  responsive: [{
          breakpoint: 1135,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
      },
      {
          breakpoint: 850,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
      },
      {
          breakpoint: 590,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
      }
  ]
})

$('.rolls_slider').slick({
  autoplaySpeed: 2000,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  pauseOnHover: true,
  infinite: true,
  dots: false,
  arrows:false,
  responsive: [{
          breakpoint: 1135,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
      },
      {
          breakpoint: 850,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
      },
      {
          breakpoint: 590,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
      }
  ]
})

$('.pizza_slider').slick({
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    pauseOnHover: true,
    infinite: true,
    dots: false,
    arrows:false,
    pauseOnHover: true,
    responsive: [{
            breakpoint: 1135,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
        },
        {
            breakpoint: 850,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
        },
        {
            breakpoint: 590,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
        }
    ]
})

$('.wok_slider').slick({
  autoplaySpeed: 2000,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  pauseOnHover: true,
  infinite: true,
  dots: false,
  arrows:false,
  pauseOnHover: true,
  responsive: [{
          breakpoint: 1135,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
      },
      {
          breakpoint: 850,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
      },
      {
          breakpoint: 590,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
      }
  ]
})