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

// Dashboard - Eaten Meals Table
$(document).ready(function () {
  // false to disable pagination (or any other option)
  $('#eaten-meals').DataTable({
		'paging': true,
		'pagingType': 'simple_numbers',
		'stateSave': true
	 });
});

// Dashboard - Past Transactions Table
$(document).ready(function () {
  // false to disable pagination (or any other option)
  $('#past-transactions').DataTable({
		'paging': true,
		'pagingType': 'simple_numbers',
		'stateSave': true
	 });
});

// Show all item from the cantina menu (front)
function showAll() {
	var tabCount = 3;
	for (var i = 1; i <= tabCount; i += 1) {
		var id = "menu" + String(i);
		document.getElementById(id).classList.add('in');
		document.getElementById(id).classList.add('active');
	}
  return ;
}

// Stroke an already passed meal
var checkMeal = function () {
	var dt = new Date();
	var currentMinutes = dt.getUTCMinutes() + (((dt.getUTCHours() - 7) % 24 ) * 60);
	const lunchHourEnd = 14;
	const dinnerHourEnd = 18.5;
	if (currentMinutes > lunchHourEnd * 60) {
		document.getElementById('menu-lunch').setAttribute('checked', true);
	}
	if (currentMinutes > dinnerHourEnd * 60) {
		document.getElementById('menu-dinner').setAttribute('checked', true);
	}
	return ;
}
setTimeout(checkMeal, 1750);
// ???
var sequences = {
  unaPena: 'u n a p e n a',
  tty: 't t y',
	konami: 'up up down down left right left right b a',
	milk: 'm i l k'
};
for (var i = 0; i < Object.keys(sequences).length; i += 1) {
	// cheet('sequences.'+Object.keys(sequences)[i]);
	console.log(Object.keys(sequences)[i]);
}
cheet(sequences.unaPena);
cheet(sequences.tty);
cheet(sequences.konami);
cheet(sequences.milk);
cheet.done(function (seq) {
  if (seq === sequences.unaPena) {
    window.alert('Una Pena...');
  }
	else if (seq === sequences.tty) {
    window.alert('Did somebody poop? 💩');
  }
	else if (seq === sequences.konami) {
    window.alert('Konami code!');
  }
	else if (seq === sequences.milk) {
    window.open("images/placeholder.jpg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
  }
});
