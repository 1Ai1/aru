$(document).ready(function(){
$('.images').slick({
  dots: true,
  infinite: true,
  autoplay:true,
  speed: 700,
  slidesToShow: 1,
  arrow:true,
  slidesToScroll: 1,
  prevArrow:'.prev',
  nextArrow:'.next',
  responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrow:false,
                    autoplay:true,
                }
            }
            ]
});

});