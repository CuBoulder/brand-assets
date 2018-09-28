var scriptPram = document.getElementById('ucb-brand-bar-embed');
var color = scriptPram.getAttribute('data-color');
var logoColor;
if (color == 'black') {
  logoColor = 'white';
}
else if (color == 'white') {
  logoColor = 'black';
}
else {
  color = 'black';
  logoColor = 'white';
}

document.write('<link href="//cuboulder.github.io/brand-assets/css/brand-bar.css" rel="stylesheet" type="text/css" />');


var brandBar = '<div class="ucb-brand-bar ucb-brand-bar-' + color + '"><a href="https://www.colorado.edu" class="ucb-home-link"><img class="ucb-logo" src="https://cuboulder.github.io/brand-assets/images/cu-boulder-logo-text-' + logoColor + '.svg" alt="University of Colorado Boulder" /></a><a class="ucb-search-link" href="https://www.colorado.edu/search"><img class="ucb-search" alt="search" src="https://cuboulder.github.io/brand-assets/images/search-' + logoColor + '.svg" /></a></div>';
document.write(brandBar);
