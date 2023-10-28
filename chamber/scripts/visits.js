// 1️⃣ Initialize display element variable
const latestVisit = document.querySelector("#visit");
const msToDays = 84600000;

let lastVisit = parseInt(window.localStorage.getItem("lastVisit"));
let lastVisitTime = new Date(lastVisit).getTime();
let currentDate = new Date().getTime();
let daysDiference = Math.floor((currentDate - lastVisit) / msToDays);

 
if (daysDiference === 0) {
    latestVisit.innerHTML = "Back so soon! Awesome!";
} 
else if (daysDiference === 1) {
    latestVisit.innerHTML = "You last visited 1 day ago.";
} 
else if (daysDiference > 1 ){
    latestVisit.innerHTML = `You last visited ${daysDiference} days ago`;
}
else {
    latestVisit.innerHTML = "Welcome! Let us know if you have any questions";
}

window.localStorage.setItem("lastVisit", currentDate.toString());
