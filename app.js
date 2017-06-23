'use strict';

$('.hamburger-menu-list').hide();
$('.hamburger-button').click(function() {
  $('div.panel-content').fadeOut('slow');
  $('.hamburger-menu-list').fadeIn('fast', function() {
    // $('.hamburger-menu-list').hide();
  });
});

$('#about-link').click(function() {
  $('.hamburger-menu-list').fadeOut('fast');
  $('#about-cont').fadeIn('slow');
});

$('#work-link').click(function() {
  $('.hamburger-menu-list').fadeOut('fast');
  $('#work-cont').fadeIn();
});

$('#contact-link').click(function() {
  $('.hamburger-menu-list').fadeOut('fast');
  $('#contact-cont').fadeIn();
});

$('#text-1').click(function() {
  $('.panel-content').fadeOut('slow');
  $('#about-cont').fadeIn('slow');
});

$('#text-2').click(function() {
  $('.panel-content').fadeOut('slow');
  $('#work-cont').fadeIn('slow');
});

$('#text-3').click(function() {
  $('.panel-content').fadeOut('slow');
  $('#contact-cont').fadeIn('slow');
});
