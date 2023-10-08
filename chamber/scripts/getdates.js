
const d = new Date();
let year = d.getFullYear();
document.querySelector("#currentyear").innerHTML = `${year}`;


let date = document.lastModified;
document.querySelector("#lastmodified").innerHTML = `Last modified : ${date}`;

