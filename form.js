const p = new URLSearchParams(window.location.search);

document.getElementById("hotelName").innerText =
p.get("name") || "Luxury Villa";

document.getElementById("hotelLocation").innerText =
"📍 " + (p.get("location") || "Indonesia");

document.getElementById("hotelPrice").innerText =
p.get("price") || "Rp2.500.000";

document.getElementById("hotelDiscount").innerText =
p.get("discount") || "50% OFF";

document.getElementById("hotelImage").src =
p.get("image") ||
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
