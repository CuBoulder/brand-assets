var scriptPram = document.getElementById('cu-brand-bar-embed');
var color = scriptPram.getAttribute('data-color');
var logoColor;
if (color == 'black') {
  logoColor = 'white';
}
elseif (color == 'white) {
  logoColor = 'black';
}
else {
  color = 'black';
  logoColor = 'white;
}

document.write('<link href="//cuboulder.github.io/brand-assets/css/brand-bar.css" rel="stylesheet" type="text/css" />');


var brandBar = '<div class="brand-bar brand-bar-' + color + '"><a href="https://www.colorado.edu"><img src="https://cuboulder.github.io/brand-assets/images/cu-boulder-logo-text-' + logoColor + '.svg" alt="University of Colorado Boulder"</a><a href="https://www.colorado.edu/search">Search</a></div>';
document.write(brandBar);
