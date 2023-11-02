// PASSWORD CHECK
const pwd = document.querySelector("#pwd");
const pwd2 = document.querySelector("#pwd2");

pwd2.addEventListener("focusout",checkPassword);

function checkPassword(){
if (pwd.value !== pwd2.value) {
    alert("❗Key Phrases DO NOT MATCH!");
    pwd.value = "";
    pwd2.value = "";
  } 
}


// RATING PAGE
const rangeValue = document.getElementById("rangevalue");
const range = document.getElementById("value");

range.addEventListener("change", () => {
    rangeValue.innerHTML = range.value;
});
