var scriptPram = document.getElementById('cu-brand-bar-embed');
var color = scriptPram.getAttribute('data-color');
if(color == '') {
  color = 'black';
}

document.write('<link href="//cuboulder.github.io/brand-assets/css/brand-bar.css" rel="stylesheet" type="text/css" />');


var brandBar = '<div class="brand-bar brand-bar-color-' + color + '"><a href="https://www.colorado.edu">University of Colorado Boulder</a><a href="https://www.colorado.edu/search">Search</a></div>';
document.write(brandBar);
