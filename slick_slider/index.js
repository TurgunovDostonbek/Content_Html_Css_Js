$(document).ready(function () {
  $(".slider").slick({
    autoplay: true, // Avtomatik aylanish
    autoplaySpeed: 2000, // 2 soniyada o‘zgaradi
    dots: true, // Pastki nuqtalar (indikatorlar)
    arrows: true, // Chap-o‘ng tugmalar
    infinite: true, // Cheksiz aylanish
    speed: 800, // O‘tish tezligi
    slidesToShow: 1, // Nechta slayd ko‘rsatilishi
    slidesToScroll: 1, // Nechta slayd o‘zgarishi
  });
});

responsive: [
  {
    breakpoint: 768, // 768px ekran pastida
    settings: {
      slidesToShow: 1,
    },
  },
];
