// script.js

function searchHotel(){

let input =
document.getElementById('searchInput')
.value.toLowerCase();

let cards =
document.querySelectorAll('.hotel-card');

cards.forEach(card=>{

let location =
card.getAttribute('data-location');

if(location.includes(input) || input===""){

card.style.display='block';

}else{

card.style.display='none';

}

});

}

/* SLIDER */

function changeSlide(button,direction){

const hotelImage =
button.parentElement;

const slides =
hotelImage.querySelectorAll('.slide');

let current = 0;

slides.forEach((slide,index)=>{

if(slide.classList.contains('active')){

current = index;

}

});

slides[current]
.classList.remove('active');

current += direction;

if(current >= slides.length){

current = 0;

}

if(current < 0){

current = slides.length - 1;

}

slides[current]
.classList.add('active');

}

/* PINDAH FORM */

function goToForm(hotel){

localStorage.setItem(
'selectedHotel',
hotel
);

window.location.href =
'form.html';

}
