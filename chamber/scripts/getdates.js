
const d = new Date();
let year = d.getFullYear();
document.querySelector("#currentyear").innerHTML = `${year}`;


let date = document.lastModified;
document.querySelector("#lastmodified").innerHTML = `Last modified : ${date}`;

// This is just for the join page
document.querySelector("#timestamp").innerHTML = d;