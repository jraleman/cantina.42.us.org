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
** Slider function(s)
** .............................................................................
*/

$(document).ready(function() {
  $('.pgwSlider').pgwSlider();
  return ;
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
