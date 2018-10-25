function setup(){

// retrieve all the SVG paths in the html
var pathEls = document.querySelectorAll('path');
	for (var i = 0; i < pathEls.length; i++) {
	  
	  // for each path
	  var pathEl = pathEls[i];

	  // Set an offset alonf the path. Here we use thge library anime.js !!Awesome library!!
	  // see documentation here: http://animejs.com/documentation/
	  var offset = anime.setDashoffset(pathEl);
	  
	  pathEl.setAttribute('stroke-dashoffset', offset);
	  
	  // Animation parameters
	  anime({
	    targets: pathEl,
	    strokeDashoffset: [offset, 0],
	    duration: anime.random(1000, 3000),
	    delay: anime.random(0, 2000),
	    loop: true,
	    direction: 'alternate',
	    easing: 'easeInOutSine',
	    autoplay: true
	  });
	}
}
