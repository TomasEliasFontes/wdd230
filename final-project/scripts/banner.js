const banner = document.getElementById("banner-container");
const close = document.getElementById("close");

// The day in number
const today = new Date().getDay();

// If day is in one of the opcion it displey banner
if (today === 1 || today === 2 || today === 3 ) {
  banner.style.display = "block";
}
else{
    banner.style.display = "none";
}

close.addEventListener('click', () => {
  banner.style.display = "none";
});