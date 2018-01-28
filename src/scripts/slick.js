import $ from 'jquery';
import 'slick-carousel';

export function sliderColorLunette() {
	$('.getProduct__sliderColor').slick({
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
   ]
  });
}

export function sliderKitLunette() {
	$('.getProduct__kitSlider').slick({
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
   ]
  });
}