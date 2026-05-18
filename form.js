// form.js

// AMBIL DATA URL

const params =
new URLSearchParams(window.location.search);

const hotelName =
params.get("name");

const hotelLocation =
params.get("location");

const hotelPrice =
params.get("price");

const hotelImage =
params.get("image");

// TAMPILKAN DATA HOTEL

document.getElementById("hotelName")
.innerText =
hotelName || "Luxury Resort";

document.getElementById("hotelLocation")
.innerText =
"📍 " + (hotelLocation || "Indonesia");

document.getElementById("hotelPrice")
.innerText =
hotelPrice || "Rp0";

document.getElementById("hotelImage")
.src =
hotelImage ||
"https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?q=80&w=1400&auto=format&fit=crop";

// SUBMIT

function submitForm(){

document.getElementById("popup")
.style.display = "flex";

document.body.style.overflow = "hidden";

}

// CLOSE

function closePopup(){

document.getElementById("popup")
.style.display = "none";

document.body.style.overflow = "auto";

window.location.href = "index.html";

}
