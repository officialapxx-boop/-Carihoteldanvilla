function selectType(button){

document.querySelectorAll('.type-btn')
.forEach(btn=>{
btn.classList.remove('active');
});

button.classList.add('active');

}

function searchHotel(){

let input=
document.getElementById('searchInput')
.value.toLowerCase();

let cards=
document.querySelectorAll('.hotel-card');

cards.forEach(card=>{

let location=
card.getAttribute('data-location');

if(location.includes(input) || input===""){

card.style.display='block';

}else{

card.style.display='none';

}

});

}

function openForm(hotel){

document.getElementById('formPage')
.style.display='flex';

document.getElementById('selectedHotel')
.innerHTML=
'Anda memilih <b>'+hotel+'</b>';

}

function submitCheckin(){

document.getElementById('formPage')
.style.display='none';

document.getElementById('popup')
.style.display='flex';

}

function closePopup(){

document.getElementById('popup')
.style.display='none';

}
