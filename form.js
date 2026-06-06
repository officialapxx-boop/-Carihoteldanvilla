/* ========================= */
/* AMBIL DATA DARI INDEX */
/* ========================= */
const params = new URLSearchParams(window.location.search);

const data = {
name: params.get("name"),
location: params.get("location"),
price: params.get("price"),
image: params.get("image"),
facilities: params.get("facilities"),
rating: params.get("rating")
};

/* ========================= */
/* LOAD UI */
/* ========================= */
window.onload = function(){

document.getElementById("hotelName").innerText = data.name;
document.getElementById("hotelLocation").innerText = data.location;
document.getElementById("hotelPrice").innerText = data.price;
document.getElementById("hotelImage").src = data.image;

/* fasilitas */
if(data.facilities){
let list = data.facilities.split(",");
let el = document.getElementById("facilities");

list.forEach(f=>{
let span = document.createElement("span");
span.innerText = f;
span.className = "tag";
el.appendChild(span);
});
}

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
return email.includes("@") && email.includes(".com");
}

function next(){

let inputs = steps[current].querySelectorAll("input, textarea");

for(let input of inputs){

if(!input.value){
alert("Semua harus diisi 😅");
return;
}

if(input.type === "email" && !validEmail(input.value)){
alert("Email tidak valid!");
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
/* HITUNG TOTAL */
/* ========================= */
function parseHarga(h){
return parseInt(h.replace(/[^0-9]/g,'')) || 0;
}

function hitungTotal(){

let tgl = document.querySelectorAll("input[type='date']");

if(!tgl[0].value || !tgl[1].value) return;

let inDate = new Date(tgl[0].value);
let outDate = new Date(tgl[1].value);

let malam = (outDate - inDate)/(1000*60*60*24);

if(malam <= 0){
document.getElementById("totalHarga").innerText = "Tanggal tidak valid";
return;
}

let harga = parseHarga(data.price);
let total = harga * malam;

document.getElementById("totalHarga").innerText =
"Rp" + total.toLocaleString("id-ID") + ` (${malam} malam)`;

}

/* auto hitung */
document.addEventListener("change", e=>{
if(e.target.type === "date"){
hitungTotal();
}
});

/* ========================= */
/* SUBMIT WA */
/* ========================= */
function formatTanggal(t){
let d = new Date(t);
return d.toLocaleDateString("id-ID",{day:'numeric',month:'long',year:'numeric'});
}

function submitForm(){

let nama = document.querySelector("input[placeholder='Nama lengkap']").value;
let hp = document.querySelector("input[placeholder='Nomor HP']").value;
let email = document.querySelector("input[placeholder='Email']").value;

let tgl = document.querySelectorAll("input[type='date']");
let checkin = formatTanggal(tgl[0].value);
let checkout = formatTanggal(tgl[1].value);

let tamu = document.querySelector("input[placeholder='Jumlah tamu']").value;
let req = document.querySelector("textarea").value;

/* VALIDASI FINAL */
if(!nama || !hp || !email || !tamu){
alert("Lengkapi semua data!");
return;
}

if(!validEmail(email)){
alert("Email tidak valid!");
return;
}

let totalText = document.getElementById("totalHarga").innerText;

/* PESAN */
let pesan = `Halo Admin Luxora 👋

Saya ingin booking:

🏨 ${data.name}
📍 ${data.location}
⭐ ${data.rating}

📅 ${checkin} - ${checkout}

👤 ${nama}
📞 ${hp}
📧 ${email}

👥 ${tamu} tamu

💰 ${totalText}

📝 ${req || '-'}

Mohon konfirmasi 🙏`;

let url =
`https://wa.me/6282276975906?text=${encodeURIComponent(pesan)}`;

window.open(url,"_blank");

alert("Berhasil dikirim ke WhatsApp!");
}
