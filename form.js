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

let hotel = document.getElementById("hotelName").innerText;
let harga = document.getElementById("hotelPrice").innerText;

/* VALIDASI SEDERHANA */
if(!nama || !hp || !checkin || !checkout){
alert("Lengkapi data dulu bro 😅");
return;
}

/* FORMAT PESAN */
let pesan = `Halo Admin Luxora 👋

Saya ingin melakukan reservasi dengan detail berikut:

🏨 Hotel: ${hotel}
💰 Harga: ${harga}

📅 Check-in: ${checkin}
📅 Check-out: ${checkout}

👤 Nama: ${nama}
📞 No HP: ${hp}
📧 Email: ${email}

👥 Jumlah Tamu: ${tamu || '-'}

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

/* AUTO LOOP FOMO */
setInterval(showFomo, 7000);
