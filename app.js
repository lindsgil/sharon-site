'use strict';

$('.hamburger-menu-list').hide();
$('.hamburger-button').click(function() {
  $('div.panel-content').fadeOut('slow');
  $('.hamburger-menu-list').fadeIn('slow', function() {
    // $('.hamburger-menu-list').hide();
  });
});

$('#about-link').click(function() {
  $('.hamburger-menu-list').fadeOut('slow');
  $('#about-cont').fadeIn();
});

$('#work-link').click(function() {
  $('.hamburger-menu-list').fadeOut('slow');
  $('#work-cont').fadeIn();
});

$('#contact-link').click(function() {
  $('.hamburger-menu-list').fadeOut('slow');
  $('#contact-cont').fadeIn();
});

$('#text-1').click(function() {
  $('#about-cont').fadeIn('slow');
});
