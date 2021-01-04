//= vendor/_jquery.js
//= vendor/_isotope.js
//= vendor/_isotope.pkgd.js
//= vendor/_horizontal.js
//= vendor/_owl.carousel.min.js

//= angular/lib/_angular.js
//= angular/lib/_angular-animate.js
//= angular/lib/_angular-mocks.js
//= angular/lib/_angular-resource.js
//= angular/lib/_angular-route.js
//= angular/lib/_angular-sanitize.js

//= angular/_app.js
//= angular/_directives.js
//= angular/_filters.js

//= angular/controllers/_main.js
//= angular/controllers/_about.js
//= angular/controllers/_blog.js
//= angular/controllers/_contact.js
//= angular/controllers/_portfolio.js


function onPageReload() {

	var isotope = $('.isotope-grid').isotope({
		itemSelector: '.blog-post',
		onLayout: function( $elems, instance ) {
				$(window).trigger('resize');
			}
	});

	$('.isotope-grid').find('img').load(function() {
		// хак с наложением блоков
		isotope.isotope('layout');
	});

	$(".owl-slider").owlCarousel({
		items: 1,
		itemsCustom: [
			[ 0, 1 ]
		],
		responsive: true,
		autoHeight: true,
		mouseDrag: false,
		touchDrag: true
	});

	$(".testimonials-slider").owlCarousel({
		items: 1,
		autoHeight: true,
		itemsCustom: [
			[ 0, 1 ]
		],
		mouseDrag: false,
		touchDrag: true,
		pagination: false,
		stopOnHover: true,
		autoPlay: true
	});

};

$(document).ready(function() {

	$(document).on('click', '.toggle-nav', function(e) {
		e.preventDefault();

		$('.main-nav, .toggle-nav').toggleClass('active');
	});

	$(document).on('click', '.main-nav a', function() {

		if ($('.main-nav, .toggle-nav').hasClass('active'))
			$('.main-nav, .toggle-nav').toggleClass('active');
	});

	$(window).resize();

});


