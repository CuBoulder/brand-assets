// requires jQuery.

document.write('<link href="https://cdn.colorado.edu/static/brand-assets/live/css/brand-bar.css" rel="stylesheet" type="text/css" />');
var brandBar = '<div class="ucb-brand-bar-wrapper"><div class="ucb-brand-bar ucb-brand-bar-white"><a href="https://www.colorado.edu" class="ucb-home-link"><img class="ucb-logo" src="https://cdn.colorado.edu/static/brand-assets/live/images/cu-boulder-logo-text-black.svg" alt="University of Colorado Boulder" /></a><a class="ucb-search-link" href="https://www.colorado.edu/search"><img class="ucb-search" alt="Search Colorado.edu" src="https://cdn.colorado.edu/static/brand-assets/live/images/search-black.svg" /></a></div></div>';
$(document).ready(function(){
  $('body').prepend(brandBar);
});
