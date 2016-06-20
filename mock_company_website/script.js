var main = function() {

    $('.arrow-next').click(function() {
    	var currentImage = $('.current-image');
    	var nextImage = currentImage.next();

    	if(nextImage.length == 0) {
    		nextImage = $('.image').first();
    	}

    	currentImage.fadeOut(300, function() {
    		currentImage.addClass('image');
    		nextImage.fadeIn(300).addClass('current-image');
    	}).removeClass('current-image');
    })

    $('.arrow-prev').click(function() {
    	var currentImage = $('.current-image');
    	var prevImage = currentImage.prev();

    	if(prevImage.length == 0) {
    		prevImage = $('.image').last();
    	}

    	currentImage.fadeOut(300, function() {
    		currentImage.addClass('image');
    		prevImage.fadeIn(300).addClass('current-image');
    	}).removeClass('current-image');
    })
};

$(document).ready(main);