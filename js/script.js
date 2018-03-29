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

// Flag to indicate if the menu is open or close.
var stateNav = false;

// Close the menu.
function closeNav() {
  stateNav = false;
  document.getElementById("menuNav").style.width = "0";
  return ;
}

// Open the menu.
function openNav() {
  stateNav = true;
  document.getElementById("menuNav").style.width = "250px";
  return ;
}

// Toggle the menu.
function toggleNav() {
  stateNav == false ? openNav() : closeNav()
  return ;
}

//Close the menu if the user tap or click outside of it.

// document.getElementById('dashboard').onclick = function(e) {
//   if (e.target != document.getElementById('menuNav')) {
//     closeNav();
//   }
//   else if (e.target == document.getElementById('menuIcon') && stateNav === false)
//     openNav();
//   return ;
// }
//
// $(document).click(function(event) {
//     console.log(event.target);
//     console.log($(event.target));
// });


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
