$(document).ready(function () {
	sliderColorLunette();
});

var sliderColorLunette = function() {
	$('.get-product__container-color-image').slick({
	  slidesToShow: 1,
	  arrows: false,
	  slidesToScroll: 1,
	  dots: true,

	  responsive: [
    {
      breakpoint: 768,
      settings: {
      	slidesToShow: 1,
        centerMode: true,
	  		centerPadding: '30px',
      }
    },
    {
      breakpoint: 500,
      settings: {
      	slidesToShow: 1,
      	centerMode: true,
	  		centerPadding: '30px',
      }
    },
   ]
  });
}