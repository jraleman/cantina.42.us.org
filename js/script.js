/*
** Navbar function(s)
** .............................................................................
*/

function closeNav() {
  document.getElementById("menuNav").style.width = "0";
}

function openNav() {
  document.getElementById("menuNav").style.width = "250px";
}

/*
** Slider function(s)
** .............................................................................
*/

$(document).ready(function() {
    $('.pgwSlider').pgwSlider();
});
