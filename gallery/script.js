$(document).ready( function() {
	$('#img-container img').on('mouseenter', function() {
		$(this).removeClass('mouseleave').addClass('mouseenter');
		$(this).css({'-webkit-filter': 'grayscale(0%)', 
    'filter': 'grayscale(0%)'});
	});

	$('#img-container img').on('mouseleave', function() {
		$(this).removeClass('mouseenter').addClass('mouseleave');
		$(this).css({'-webkit-filter': 'grayscale(40%)', 
    'filter': 'grayscale(40%)'});
	});

	$('#img-container img').on('click', function() {
		var source = $(this).attr('src').substring(7,9);
		$('body').append('<div id=large-image-container></div>');

		var height = window.innerHeight * 0.7;
		var width = window.innerWidth * 0.9;

		$('#large-image-container').append('<img class=large-image src=images/' + source + '_large.jpg>');

		$('.large-image').on('click', function() {
			$('.large-image').remove();
			$('#large-image-container').remove();
		});
		$('#large-image-container').on('click', function() {
			$('.large-image').remove();
			$('#large-image-container').remove();
		});
	});
});