var scriptPram = document.getElementById('cu-brand-bar-embed');
var color = scriptPram.getAttribute('data-color');
if(color=='') {
  color = 'black';
}

var brandBar = '<div class="brand-bar brand-bar-color-' + color + '"><a href="https://www.colorado.edu">University of Colorado Boulder</a><a href="https://www.colorado.edu/search">Search</a></div>';
document.write(brandBar);
