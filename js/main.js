(function($) {
	"use strict"

	// Preloader
	$(window).on('load', function() {
		$("#preloader").delay(600).fadeOut();
	});

	// Mobile Toggle Btn
	$('.navbar-toggle').on('click',function(){
		$('#header').toggleClass('nav-collapse');
	});

	// Fixed Nav
	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();
		wScroll > $('.banner-area').height() ? $('#header').addClass('fixed') : $('#header').removeClass('fixed');
	});

	// Banner Area Height
	function bannerHeight () {
		$('.banner-area').css({'paddingTop': $('#header').height() + 30});
	}
	$(window).on('resize', function() {
		bannerHeight();
	});
	bannerHeight();

	// Gallery Slider
	$('#gallery').owlCarousel({
		items:2,
		loop:true,
		margin:0,
		dots : false,
		nav: true,
		navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		autoplay : true,
		responsive:{
			0: {
				items:1
			},
			992:{
				items:2
			}
		}
	});

	// card.js
	try {
	  var card = new Card({
	    form: 'form',
	    container: '.card-wrapper',
	    formSelectors: {
	      numberInput: 'input[id="cardNumber"]',
	      expiryInput: 'input[id="cardDate"]',
	      cvcInput:  'input[id="cardCVC"]',
	      nameInput: 'input[id="cardName"]',
				creditInput: 'input[id="creditAmount"]'
	    },
	    width: 242,
	    formatting: true,
	    messages: {
	      validDate: 'valid\ndate',
	      monthYear: 'mm/yyyy',
	    },
	    placeholders: {
				numberInput: '••• •••• •••• ••••',
	      expiryInput: '••/••',
	      cvcInput:  '•••',
	      nameInput: 'Esteban Julio Ricardo Montoya de la Rosa Ramírez',
				creditInput: '6'
	    },
	    masks: {
	      cardNumber: '•'
	    },
	    debug: false
	  });
	}
	catch (err) {
	  console.log("Error: " + err.message);
	}

})(jQuery);

function showAll() {
	var tabCount = 3;
	for (var i = 1; i <= tabCount; i += 1) {
		var id = "menu" + String(i);
		document.getElementById(id).classList.add('in');
		document.getElementById(id).classList.add('active');
	}
  return ;
}

var checkMeal = function () {
	document.getElementById('menu-lunch').setAttribute('checked', true);
	document.getElementById('menu-dinner').setAttribute('checked', true);
	return ;
}

setTimeout(checkMeal, 1750);
