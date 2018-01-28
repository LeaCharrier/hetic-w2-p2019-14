$(document).ready(function () {
 	colorLunette();
});


var colorLunette = function() {
	$('.get-product__container-color-choice img').click(function() {
		if ($('.get-product__container-color-choice img').hasClass('active')) {
			// Toggle class active button
			$('.get-product__container-color-choice img').toggleClass('active', false);
			$(this).addClass('active');
			// This will have the category
			var dataColor = $(this).data('color');
			var allImg = $('.get-product__container-color-image');

			// Current item is should be active
	    var $currImg = $('.get-product__container-color-image[data-color=' + dataColor + ']');
	    $currImg.addClass('active');
	    // Remove the active class for other items
    	allImg.not($currImg).removeClass('active');

		}
	});
}