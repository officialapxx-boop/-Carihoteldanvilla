const params = new URLSearchParams(window.location.search);

document.getElementById("hotelName").innerText =
params.get("name") || "Luxury Villa";

document.getElementById("hotelLocation").innerText =
"📍 " + (params.get("location") || "Indonesia");

document.getElementById("hotelPrice").innerText =
params.get("price") || "Rp2.500.000";

document.getElementById("hotelDiscount").innerText =
params.get("discount") || "50% OFF";

document.getElementById("hotelImage").src =
params.get("image") ||
"https://images.unsplash.com/photo-1522798514-97ceb8c4f1c?q=80&w=1400";

/* SUBMIT */
function submitForm(){
document.getElementById("popup").style.display="flex";
}

/* CLOSE */
function closePopup(){
document.getElementById("popup").style.display="none";
window.location.href="index.html";
}
