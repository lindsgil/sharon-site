'use strict';

function showDiv() {
  document.getElementById('about-cont').style.display = '';
};

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

$('#first-icon').hover(function() {
  $('#first-icon').animate({opacity:0});
  $('.overlay').animate({opacity:0});
  $('.text-1').animate({opacity:1});
});

$('#second-icon').hover(function() {
  $('#second-icon').animate({opacity:0});
  $('.overlay').animate({opacity:0});
});
