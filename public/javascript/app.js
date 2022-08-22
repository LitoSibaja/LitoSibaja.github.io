"use strict";

$('.menu').hide();

const typed = new Typed('.typed', {
	strings: [
				'<i class="hobbies">Program...</i>',
				'<i class="hobbies">Desing...</i>',
				'<i class="hobbies">Play online...</i>',
				'<i class="hobbies">Read...</i>',
				'<i class="hobbies">Pets...</i>',
				'<i class="hobbies">Movies...</i>',
				'<i class="hobbies">Walk...</i>',
				'<i class="hobbies">Coffee..</i>',
				'<i class="hobbies">Mountaineering..</i>'
			],
	//stringsElement: '#cadenas',
	typeSpeed: 75,
	startDelay: 300,
	backSpeed: 75,
	//smartBackspace: true,
	shuffle: false,
	backDelay: 2500,
	loop: true,
	loopCount: false,
	showCursor: true,
	cursorChar: '|',
	contentType: 'html'
});

var menuflag = 0;
$('#responsive_menu').click( function(){
	if(menuflag == 0){
		$('#menu').show();
		menuflag = 1;
	}else{
		if(menuflag == 1){
			$('#menu').hide();
			menuflag = 0;
		}
	}
		
});

$('#home').click( function(){
	$('html, body').animate({
  		scrollTop: $('#intro').offset().top,  		
	}, 550);
	$('#menu').hide();	
});

$('#acerca').click( function(){
	$('html, body').animate({
  		scrollTop: $('#about_me').offset().top
	}, 550);
	$('#menu').hide();
});

$('#trabajo').click( function(){
	$('html, body').animate({
  		scrollTop: $('#my_work').offset().top
	}, 550);
	$('#menu').hide();
});

$('#contacto').click( function(){
	$('html, body').animate({
  		scrollTop: $('#contact').offset().top
	}, 550);
	$('#menu').hide();
});


function validate(e){
	var k;
	document.all ? k = e.keyCode : k = e.which;
	return ((k > 96 && k < 123) || k == 8 || (k >= 48 && k <= 57) || (k >= 65 && k <= 90) || k == 32 || k == 64 || k == 46);
}

$('#contact_form').submit( function(e){
	e.preventDefault();	
	$.ajax({
		url: 'public/php/contactform.php',
		type: 'POST',
		data: $('#contact_form').serialize(),		
		success: function(response){
			console.log(response);
		}
	});
});

