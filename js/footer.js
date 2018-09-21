var scriptPram = document.getElementById('cu-footer-embed');
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

var cuFooter = '<div class="ucb-footer ucb-' + color + '"><p><a href="https://www.colorado.edu"><img class="ucb-footer-be-boulder" src="https://cuboulder.github.io/brand-assets/images/cu-boulder-beboulder-' + logoColor + '.svg" alt="Be Boulder." /></a></p><p><a class="ucb-home-link" href="https://www.colorado.edu">University of Colorado Boulder</a></p><p>&copy; Regents of the University of Colorado</p><p class="ucb-footer-links"><a href="http://www.colorado.edu/about/privacy-statement">Privacy</a> &bull; <a href="http://www.colorado.edu/about/legal-trademarks">Legal &amp; Trademarks</a> &bull; <a href="http://www.colorado.edu/map">Campus Map</a></p></div>';
document.write(cuFooter);
