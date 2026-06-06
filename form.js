/* LOAD */
window.onload = function(){

document.getElementById("hotelName").innerText = data.name;
document.getElementById("hotelLocation").innerText = data.location;
document.getElementById("hotelPrice").innerText = "Rp " + data.price.toLocaleString("id-ID");
document.getElementById("hotelImage").src = data.image;

let el = document.getElementById("facilities");

data.facilities.forEach(f=>{
let span = document.createElement("span");
span.className = "tag";
span.innerText = f;
el.appendChild(span);
});

};

/* ========================= */
/* STEP FORM */
/* ========================= */
const steps = document.querySelectorAll(".step");
let current = 0;

function showStep(){
steps.forEach(s=>s.classList.remove("active"));
steps[current].classList.add("active");
}

function validEmail(email){
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function next(){

let inputs = steps[current].querySelectorAll("input");

for(let input of inputs){

if(input.hasAttribute("required") && !input.value){
alert("Semua harus diisi!");
return;
}

if(input.type === "email" && !validEmail(input.value)){
alert("Email harus ada @ dan .com");
return;
}

}

current++;
showStep();
}

function prev(){
current--;
showStep();
}

/* ========================= */
/* BLOK ANGKA */
/* ========================= */
document.addEventListener("input", function(e){
if(e.target.id === "hp" || e.target.id === "tamu"){
e.target.value = e.target.value.replace(/[^0-9]/g,'');
}
});

/* ========================= */
/* HITUNG TOTAL */
/* ========================= */
function hitungTotal(){

let checkin = new Date(document.getElementById("checkin").value);
let checkout = new Date(document.getElementById("checkout").value);

if(!checkin || !checkout) return;

let malam = (checkout - checkin)/(1000*60*60*24);

if(malam <= 0){
document.getElementById("totalHarga").innerText = "Tanggal tidak valid";
return;
}

let total = data.price * malam;

document.getElementById("totalHarga").innerText =
"Rp " + total.toLocaleString("id-ID") + ` (${malam} malam)`;

}

document.getElementById("checkin").addEventListener("change", hitungTotal);
document.getElementById("checkout").addEventListener("change", hitungTotal);

/* ========================= */
/* SUBMIT */
/* ========================= */
function formatTanggal(t){
let d = new Date(t);
return d.toLocaleDateString("id-ID",{day:'numeric',month:'long',year:'numeric'});
}

function submitForm(){

let nama = document.getElementById("nama").value;
let hp = document.getElementById("hp").value;
let email = document.getElementById("email").value;
let tamu = document.getElementById("tamu").value;

let checkin = document.getElementById("checkin").value;
let checkout = document.getElementById("checkout").value;

if(!nama || !hp || !email || !tamu || !checkin || !checkout){
alert("Semua harus diisi!");
return;
}

if(!validEmail(email)){
alert("Email tidak valid!");
return;
}

let totalText = document.getElementById("totalHarga").innerText;

let pesan = `Halo Admin 👋

Saya ingin booking:

🏨 ${data.name}
📍 ${data.location}

📅 ${formatTanggal(checkin)} - ${formatTanggal(checkout)}

👤 ${nama}
📞 ${hp}
📧 ${email}

👥 ${tamu} tamu
💰 ${totalText}

Terima kasih 🙏`;

let url = `https://wa.me/6281234567890?text=${encodeURIComponent(pesan)}`;

window.open(url,"_blank");
}
