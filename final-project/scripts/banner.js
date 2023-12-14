const banner = document.getElementById("banner-container");
const close = document.getElementById("close");

banner.style.display = "block";

close.addEventListener('click', () => {
  banner.style.display = "none";
});