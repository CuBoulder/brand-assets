document.write('<link href="//cuboulder.github.io/brand-assets/css/brand-bar.css" rel="stylesheet" type="text/css" />');
var brandBar = '<div class="ucb-brand-bar-wrapper"><div class="ucb-brand-bar ucb-brand-bar-white"><a href="https://www.colorado.edu" class="ucb-home-link"><img class="ucb-logo" src="https://cuboulder.github.io/brand-assets/images/cu-boulder-logo-text-black.svg" alt="University of Colorado Boulder" /></a><a class="ucb-search-link" href="https://www.colorado.edu/search"><img class="ucb-search" alt="search" src="https://cuboulder.github.io/brand-assets/images/search-black.svg" /></a></div></div>';
var s = document.body.firstChild;
s.parentNode.insertBefore(brandBar, s);
