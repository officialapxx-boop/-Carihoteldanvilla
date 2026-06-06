/* ========================= */
/* SEARCH HOTEL */
/* ========================= */
function searchHotel(){

let input =
document.getElementById('searchInput')
.value.toLowerCase();

let cards =
document.querySelectorAll('.hotel-card');

cards.forEach(card=>{

let location =
card.getAttribute('data-location').toLowerCase();

let name =
card.getAttribute('data-name').toLowerCase();

if(
location.includes(input) ||
name.includes(input) ||
input === ""
){
card.style.display='block';
}else{
card.style.display='none';
}

});

}

/* ========================= */
/* SLIDER IMAGE */
/* ========================= */
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

slides[current].classList.remove('active');

current += direction;

if(current >= slides.length){
current = 0;
}

if(current < 0){
current = slides.length - 1;
}

slides[current].classList.add('active');

}

/* ========================= */
/* PINDAH KE FORM (FULL DATA) */
/* ========================= */
function goToForm(
name,
location,
price,
oldprice,
discount,
image,
rating,
reviews,
facilities,
type,
maxguest
){

const url =
`form.html
?name=${encodeURIComponent(name)}
&location=${encodeURIComponent(location)}
&price=${encodeURIComponent(price)}
&oldprice=${encodeURIComponent(oldprice)}
&discount=${encodeURIComponent(discount)}
&image=${encodeURIComponent(image)}
&rating=${encodeURIComponent(rating)}
&reviews=${encodeURIComponent(reviews)}
&facilities=${encodeURIComponent(facilities)}
&type=${encodeURIComponent(type)}
&maxguest=${encodeURIComponent(maxguest)}`;

window.location.href = url;

}

/* ========================= */
/* OPTIONAL: AUTO SCROLL TOP */
/* ========================= */
function scrollToTop(){
window.scrollTo({
top: 0,
behavior: 'smooth'
});
}

/* ========================= */
/* OPTIONAL: FOMO DI INDEX 😈 */
/* ========================= */
const names = [
"Rizky","Andi","Budi","Salsa","Dina",
"Rina","Fajar","Yoga","Putri","Aldi"
];

function showFomo(){

let notif = document.createElement("div");
notif.className = "fomo";

let randomName = names[Math.floor(Math.random()*names.length)];

notif.innerText = `${randomName} baru saja melihat villa ini 👀`;

document.body.appendChild(notif);

setTimeout(()=>{
notif.classList.add("show");
},100);

setTimeout(()=>{
notif.classList.remove("show");
setTimeout(()=>notif.remove(),500);
},4000);
}

/* LOOP FOMO */
setInterval(showFomo, 8000);
