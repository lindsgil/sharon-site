'use strict';

function showDiv() {
  document.getElementById('about-cont').style.display = '';
};

$('.hamburger-menu-list').hide();
$('.hamburger-button').click(function() {
  $('.hamburger-menu-list').slideToggle('slow', function() {
    $('.hamburger-menu-list').hide();
  });
});
