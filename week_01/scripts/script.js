const d = new Date();
const year = d.getFullYear();
document.getElementById("currentyear").innerHTML = `${year}`;

let date = document.lastModified;
document.getElementById("result").innerHTML = `Last modified : ${date}`;