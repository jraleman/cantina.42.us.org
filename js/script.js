/*
** Landing page misc functions
** .............................................................................
*/

$(".scrollToSection").click(function(e) {
  e.preventDefault();
  var aid = $(this).attr("href");
  $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
});


/*
** Dashboard misc functions
** .............................................................................
*/

// Shows a section.
function showSection(id) {
  document.getElementById(id).style.display = "block";
  return ;
}

// Hides a section.
function hideSection(id) {
  document.getElementById(id).style.display = "none";
  return ;
}

// Changes to section.
function toggleSection(id, time) {
  if (typeof time != 'number')
    console.log("changeSection() : expected a number as transition time.")
  window.location.hash = id;
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  return ;
}

// // Logout from the dashboard.
// function closeDashboard() {
//   // redirect to index.html, for now...
//   return;
// }
//
// function loadDashboard() {
//   if (document.readyState == "complete") {
//     toggleSection('credit', 500);
//     $("#dashboard").show(500);
//    }
//   return ;
// }
// document.onreadystatechange = loadDashboard();

/*
** Navbar menu function(s)
** .............................................................................
*/

// Flag to indicate if the navigation menu is open or close.
var stateNav = false;

// Close the navigation menu.
function closeNav() {
  stateNav = false;
  $("#menuNav a").hide(400);
  document.getElementById("menuNav").style.width = "0";
  return ;
}

// Open the navigation menu.
function openNav() {
  stateNav = true;
  $("#menuNav a").show(400);
  document.getElementById("menuNav").style.width = "250px";
  return ;
}

// Toggle the navigation menu.
function toggleNav() {
  stateNav == false ? openNav() : closeNav()
  return ;
}

// Close the menu if the use clicks outside the navigation.
// UX is important afterall... :)
$("#dashboard").on("click",function(e){
  if (stateNav == true) {
    closeNav();
  }
  return ;
});

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
** pgwSlider
** .............................................................................
*/

$(document).ready(function() {
  // cant find id from dom, do like a validation here...
  var pgwSlider = $('.pgwSlider').pgwSlider();
  pgwSlider.displaySlide(3);
  pgwSlider.reload({
    selectionMode     : 'mouseOver',
    touchControls     : true,
    maxHeight         : 600,
    intervalDuration  : 4000,
    verticalCentering : true,
  });
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
** Credit section function(s)
** .............................................................................
*/

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    toggleSection('credit', 500);
    $("#dashboard").show(500);
   }
   return ;
}
