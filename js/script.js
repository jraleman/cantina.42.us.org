/*
** Init WOW.js
** .............................................................................
*/

new WOW({
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       false,
  live:         true        // default
}).init()


/*
** Navbar function(s)
** .............................................................................
*/

function closeNav() {
  document.getElementById("menuNav").style.width = "0";
  return ;
}

function openNav() {
  document.getElementById("menuNav").style.width = "250px";
  return ;
}

/*
** Carte (food menu) filter function(s)
** .............................................................................
*/

$("#menu-filters li a").click(function() {
  $("#menu-filters li a").removeClass('active');
  $(this).addClass('active');
  var selectedFilter = $(this).data("filter");
  $(".menu-item").fadeOut();
  setTimeout(function() {
    $(selectedFilter).slideDown();
  }, 300);
});

/*
** pgwSlider
** .............................................................................
*/

$(document).ready(function() {
  $('.pgwSlider').pgwSlider();
});

/*
** scrollToSection
** .............................................................................
*/

$(".scrollToSection").click(function(e) {
  e.preventDefault();
  var aid = $(this).attr("href");
  $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
});

/*
** card.js
** .............................................................................
*/

var card = new Card({
  form: 'form',
  container: '.card-wrapper',
  formSelectors: {
    numberInput: 'input[name="number"]',
    expiryInput: 'input[name="expiry"]',
    cvcInput:  'input[name="cvc"]',
    nameInput: 'input[name="name"]',
  },
  width: 242,
  formatting: true,
  messages: {
    validDate: 'valid\ndate',
    monthYear: 'mm/yyyy',
  },
  placeholders: {
    number: '•••• •••• •••• ••••',
    name: '',
    expiry: '••/••',
    cvc: '•••'
  },
  masks: {
    cardNumber: '•'
  },
  debug: false
});

/*
** Dashboard misc functions
** .............................................................................
*/

function showSection() {
  document.getElementById("credit").style.display = "block";
  return ;
}

function hideSection() {
  document.getElementById("credit").style.display = "none";
  return ;
}
