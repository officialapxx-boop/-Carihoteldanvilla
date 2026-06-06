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

/* DATA HOTEL */
const p = new URLSearchParams(window.location.search);

document.getElementById("hotelName").innerText =
p.get("name") || "Luxury Villa";

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
window.location.href="index.html";
}
