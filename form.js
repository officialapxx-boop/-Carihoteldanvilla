const steps = document.querySelectorAll(".step");
let current = 0;

function showStep(){
steps.forEach(s => s.classList.remove("active"));
steps[current].classList.add("active");

document.getElementById("bar").style.width =
((current+1)/steps.length)*100 + "%";
}

function next(){
if(current < steps.length-1){
current++;
showStep();
}
}

function prev(){
if(current > 0){
current--;
showStep();
}
}

/* SUBMIT KE WHATSAPP */
function submitForm(){

let nama = document.querySelector("input[placeholder='Nama lengkap']").value;
let hp = document.querySelector("input[placeholder='Nomor HP']").value;
let email = document.querySelector("input[placeholder='Email']").value;

let pesan = `Halo Admin Luxora 👋

Saya ingin reservasi:

👤 Nama: ${nama}
📞 HP: ${hp}
📧 Email: ${email}

Mohon info lebih lanjut 🙏`;

let nomor = "6283125043684"; // tanpa 0 depan
let url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;

window.open(url, "_blank");

/* tetap munculin popup */
document.getElementById("popup").style.display="flex";
}

/* CLOSE */
function closePopup(){
window.location.href="index.html";
}

/* ========================= */
/* 🔥 FOMO NOTIFICATION */
/* ========================= */

const names = [
"Rizky", "Andi", "Budi", "Salsa", "Dina", "Rina",
"Fajar", "Yoga", "Putri", "Aldi"
];

function showFomo(){
let notif = document.createElement("div");
notif.className = "fomo";

let randomName = names[Math.floor(Math.random()*names.length)];

notif.innerText = `${randomName} baru saja booking villa ini 🔥`;

document.body.appendChild(notif);

setTimeout(()=>{
notif.classList.add("show");
},100);

setTimeout(()=>{
notif.classList.remove("show");
setTimeout(()=>notif.remove(),500);
},4000);
}

/* muncul tiap beberapa detik */
setInterval(showFomo, 7000);
