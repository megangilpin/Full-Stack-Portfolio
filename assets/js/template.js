$(document).ready(function () {
	// Custom function which toggles between sticky class (is-sticky)
	var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
		var stickyHeight = sticky.outerHeight();
		var stickyTop = stickyWrapper.offset().top;
		if (scrollElement.scrollTop() >= stickyTop) {
			stickyWrapper.height(stickyHeight);
			sticky.addClass("is-sticky");
		}
		else {
			sticky.removeClass("is-sticky");
			stickyWrapper.height('auto');
		}
	};

	// Find all data-toggle="sticky-onscroll" elements
	$('[data-toggle="sticky-onscroll"]').each(function () {
		var sticky = $(this);
		var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
		sticky.before(stickyWrapper);
		sticky.addClass('sticky');

		var initio_parallax_animation = function() { 
		$('.parallax').each( function(i, obj) {
			var speed = $(this).attr('parallax-speed');
			if( speed ) {
				var background_pos = '-' + (window.pageYOffset / speed) + "px";
				$(this).css( 'background-position', 'center ' + background_pos );
			}
		});
	}

		// Scroll & resize events
	$(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
			stickyToggle(sticky, stickyWrapper, $(this));
		});

		// On page load
		stickyToggle(sticky, stickyWrapper, $(window));

		$(window).scroll(function() {

			initio_parallax_animation();
		});
	});
	
});