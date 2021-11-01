// Sources of snippets and inspiration: 
// Button style & interaction https://codepen.io/bosworthco/pen/RjErEj
// Card flip https://codepen.io/supah/pen/OMdPpW
// Apple too, i guess
// I know jquery is old fashioned, but i'm more of a UX/UI designer these days 
// tilt.js
$('.Button').tilt({ scale: 1.1, speed: 1000 });

// click event
$('.Button').on('click', function(e) {
  explode(e.pageX, e.pageY);
});

document.addEventListener("touchstart", function(){}, true);

// symbols
function explode(x, y) {
  
  var symbolArray = [
    '#donut',
    '#circle',
    '#tri_hollow',
    '#triangle',
    '#square',
    '#squ_hollow'
  ];
  
  var particles = 10, 
      explosion = $('.Button-wrapper');
      
  for (var i = 0; i < particles; i++) {
    
    var randomSymbol = Math.floor(Math.random()*symbolArray.length);
    // positioning x,y of the particles
    var x = (explosion.width() / 2) + rand(80, 150) * Math.cos(2 * Math.PI * i / rand(particles - 10, particles + 10)),
        y = (explosion.height() / 2) + rand(80, 150) * Math.sin(2 * Math.PI * i / rand(particles - 10, particles + 10)),
        deg = rand(0, 360) + 'deg',
        scale = rand(0.5, 1.1),
        // particle element creation
        elm = $(
          '<svg class="Symbol" style="top:' + y + 'px; left:' + x + 'px; transform: scale(' + scale + ') rotate(' + deg + ');">' + 
          '<use xlink:href="' + symbolArray[randomSymbol] + '" />' + 
          '</svg>'
         );

    if (i == 0) { // only need to target one of the symbols.
      // css3 animation end detection
      elm.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
        elm.siblings('svg').remove().end().remove(); // remove particles when animation is over.
      });
    }
    explosion.prepend(elm);
  }
}

function rand(min, max) {
  return Math.floor(Math.random() * (max + 1)) + min;
}
// tilts the buttons on hover
$('.primary-cta, .secondary-cta').tilt({ scale: 1.1, speed: 1000 });

//flip the card to the back and change UI

	
//send the card
$('#btn-card-send').click(function() { // 'send' button is pushed
	$('.card').addClass('whoosh'); // slides card up out of view
	$('.confirmation').addClass('visible'); // show success message
		setTimeout(function(){ 
			$('input:text').val(''); }, 300);//scrub the input fields when card when is off canvas 
		setTimeout(function(){ 
			$('.card').removeClass('whoosh');}, 2400);//resets for the next send 
			setTimeout(function(){ 
			$('.confirmation').removeClass('visible');}, 1600);//resets for the next send
			$("input:text:visible:first").focus(); //first field of form in auto-focus
	});

//flip the card to the front and change UI
$('#close').click(function() { // 'close' button is pressed
  $('.card').removeClass('flip'); // card flips over
	$('#btn-card-flip').removeClass('hidden'); // 'customise' button becomes visible //
	$('.secondary-cta').addClass('hidden'); // 'send/close' buttons go invisible //

});
