'use strict';

function showDiv() {
  document.getElementById('about-cont').style.display = '';
};

$('.hamburger-menu-list').hide();
$('.hamburger-button').click(function() {
  $('.hamburger-menu-list').fadeIn('slow', function() {
    // $('.hamburger-menu-list').hide();
  });
});

$('#about-link').click(function() {
  $('.hamburger-menu-list').fadeOut('slow');
});

$('#work-link').click(function() {
  $('.hamburger-menu-list').fadeOut('slow');
});

$('#contact-link').click(function() {
  $('.hamburger-menu-list').fadeOut('slow');
});
