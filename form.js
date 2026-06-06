/* ========================= */
/* AMBIL DATA DARI INDEX */
/* ========================= */
const params = new URLSearchParams(window.location.search);

const data = {
name: params.get("name") || "-",
location: params.get("location") || "-",
price: params.get("price") || "-",
oldprice: params.get("oldprice") || "-",
discount: params.get("discount") || "-",
rating: params.get("rating") || "-",
reviews: params.get("reviews") || "-",
image: params.get("image") || "",
facilities: params.get("facilities") || "-"
};

/* ========================= */
/* LOAD DATA KE UI */
/* ========================= */
window.addEventListener("DOMContentLoaded", () => {

if(document.getElementById("hotelName")){
document.getElementById("hotelName").innerText = data.name;
}

if(document.getElementById("hotelPrice")){
document.getElementById("hotelPrice").innerText = data.price;
}

if(document.getElementById("hotelImage")){
document.getElementById("hotelImage").src = data.image;
}

if(document.getElementById("hotelLocation")){
document.getElementById("hotelLocation").innerText = data.location;
}

/* RENDER FASILITAS */
if(document.getElementById("facilities") && data.facilities){
let list = data.facilities.split(",");
let container = document.getElementById("facilities");

list.forEach(item => {
let span = document.createElement("span");
span.className = "tag";
span.innerText = item.trim();
container.appendChild(span);
});
}

});

/* ========================= */
/* STEP FORM */
/* ========================= */
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

/* ========================= */
/* FORMAT TANGGAL */
/* ========================= */
function formatTanggal(tgl){
if(!tgl) return "-";
let d = new Date(tgl);
return d.toLocaleDateString("id-ID", {
day: 'numeric',
month: 'long',
year: 'numeric'
});
}

/* ========================= */
/* SUBMIT KE WHATSAPP */
/* ========================= */
function submitForm(){

let nama = document.querySelector("input[placeholder='Nama lengkap']").value;
let hp = document.querySelector("input[placeholder='Nomor HP']").value;
let email = document.querySelector("input[placeholder='Email']").value;

let tanggal = document.querySelectorAll("input[type='date']");
let checkin = formatTanggal(tanggal[0].value);
let checkout = formatTanggal(tanggal[1].value);

let tamu = document.querySelector("input[placeholder='Jumlah tamu']").value;
let request = document.querySelector("textarea").value;

/* AMBIL DARI DATA INDEX */
let hotel = data.name;
let harga = data.price;
let lokasi = data.location;
let rating = data.rating;
let fasilitas = data.facilities;

/* VALIDASI */
if(!nama || !hp || checkin === "-" || checkout === "-"){
alert("Lengkapi data dulu bro 😅");
return;
}

/* FORMAT PESAN */
let pesan = `Halo Admin Luxora 👋

Saya ingin melakukan reservasi dengan detail berikut:

🏨 Hotel: ${hotel}
📍 Lokasi: ${lokasi}
⭐ Rating: ${rating}

💰 Harga: ${harga}

📅 Check-in: ${checkin}
📅 Check-out: ${checkout}

👤 Nama: ${nama}
📞 No HP: ${hp}
📧 Email: ${email}

👥 Jumlah Tamu: ${tamu || '-'}

🏷️ Fasilitas:
${fasilitas}

📝 Permintaan Tambahan:
${request || '-'}

Mohon konfirmasi ketersediaan 🙏`;

/* NOMOR ADMIN */
let nomor = "6282276975906";

/* OPEN WHATSAPP */
let url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;
window.open(url, "_blank");

/* POPUP */
document.getElementById("popup").style.display="flex";
}

/* ========================= */
/* CLOSE POPUP */
/* ========================= */
function closePopup(){
window.location.href="index.html";
}

/* ========================= */
/* FOMO NOTIFICATION 😈 */
/* ========================= */
const names = [
"Rizky","Andi","Budi","Salsa","Dina",
"Rina","Fajar","Yoga","Putri","Aldi"
];

function showFomo(){

let notif = document.createElement("div");
notif.className = "fomo";

let randomName = names[Math.floor(Math.random()*names.length)];

notif.innerText = `${randomName} baru saja booking ${data.name} 🔥`;

document.body.appendChild(notif);

setTimeout(()=>{
notif.classList.add("show");
},100);

setTimeout(()=>{
notif.classList.remove("show");
setTimeout(()=>notif.remove(),500);
},4000);
}

/* AUTO LOOP FOMO */
setInterval(showFomo, 7000);
