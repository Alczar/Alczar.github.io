//TEST CHART
/*script.js*/

var player = document.querySelector('.player');
var list  = document.querySelector('.players__list');
var cs;

var pars = {
   'pac': document.getElementById('player__pac'),
   'sho': document.getElementById('player__sho'),
   'pas': document.getElementById('player__pas'),
   'dri': document.getElementById('player__dri'),
   'def': document.getElementById('player__def'),
   'phy': document.getElementById('player__phy')
};

var updatePar = function(par) {
   pars[par].textContent = cs.getPropertyValue('--' + par);
}

list.addEventListener('change', function(evt) {
   var id = evt.target.id;   
   
   /* set the ID on the main container */
   player.id = 's' + id;
   
   /* udpate values on <dd> elements: not really necessary 
    * for the demo, but I like to keep the markup aligned
    * and accessible.
    */
   cs = window.getComputedStyle(player);
   Object.keys(pars).forEach((p) => updatePar(p));
      
});