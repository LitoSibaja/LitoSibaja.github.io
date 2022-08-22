"use strict";

var slider = document.getElementById('slider');
let sliderSection = document.querySelectorAll('.slider_section');
let sliderSectionLast = sliderSection[sliderSection.length - 1];


const botonPrev = document.querySelector('.btn_prev');
const botonNext = document.querySelector('.btn_next');

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function next(){
	botonNext.style.pointerEvents = 'none';
	let sliderSectionFirst = document.querySelectorAll('.slider_section')[0];	
	slider.style.marginLeft = '-200%';	
	slider.style.transition = 'all .5s';
	setTimeout( function(){
		slider.style.transition = 'none';			
		slider.insertAdjacentElement('beforeend', sliderSectionFirst);
		slider.style.marginLeft = '-100%';
	},500);
	botonNext.style.pointerEvents = 'auto';
}

function prev(){
	botonPrev.style.pointerEvents = 'none';
	let sliderSection = document.querySelectorAll('.slider_section');
	let sliderSectionLast = sliderSection[sliderSection.length - 1];
	slider.style.marginLeft = '0';
	slider.style.transition = 'all .5s';	
	setTimeout( function(){
		slider.style.transition = 'none';
		slider.insertAdjacentElement('afterbegin', sliderSectionLast);
		slider.style.marginLeft = '-100%';
	},500);
	botonPrev.style.pointerEvents = 'auto';
}

botonNext.addEventListener('click', next);
botonPrev.addEventListener('click', prev);