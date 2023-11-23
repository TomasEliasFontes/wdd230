// We import from the html(with the name we use also in css)
// And asign the constant value of it to change later in the program
const modeButton = document.querySelector("#toggledarkmode");
const h3 = document.querySelectorAll("main h3");
const main = document.querySelector("main");
const li = document.querySelectorAll(".side-content li");
const sideParaf = document.querySelectorAll(".side-content p");
const h2 = document.querySelector("#local-photos h2")
const h4 = document.querySelectorAll(".photos-section h4")

// We Add the bottom to displey the dark mode
modeButton.addEventListener("click", () => {
    // If the bottom have a click and its true 
    // Change the colors
	if (modeButton.checked == true) {
		main.style.background = "#000";
		main.style.color = "#000";

        // Side infomation main
        h3[0].style.color = "#fff";
        h3[1].style.color = "#fff";
        h3[2].style.color = "#fff";
        li[0].style.color = "#fff";
        li[1].style.color = "#fff";
        li[2].style.color = "#fff";
        li[3].style.color = "#fff";
        sideParaf[0].style.color = "#fff";
        sideParaf[1].style.color = "#fff";
        sideParaf[2].style.color = "#fff";
        sideParaf[0].style.color = "#fff";

        // Side local photos main
        h2.style.color = "#fff";
        h4[0].style.color = "#fff";
        h4[1].style.color = "#fff";
        h4[2].style.color = "#fff";
        h4[3].style.color = "#fff";
        h4[4].style.color = "#fff";
        h4[5].style.color = "#fff";

        // Main News colors
        h3News[0].style.color = "#fff";
        h3News[1].style.color = "#fff";
        h3News[2].style.color = "#fff";
        newDay[0].style.background ="#303030";
        newDay[1].style.background ="#303030";
        newDay[2].style.background ="#303030";
        newDayTitle[0].style.color = "#fff";
        newDayTitle[1].style.color = "#fff";
        newDayTitle[2].style.color = "#fff";
        newDayParaf[0].style.color = "#fff";
        newDayParaf[1].style.color = "#fff";
        newDayParaf[2].style.color = "#fff";

        //Button change
		modeButton.textContent = "";
	} 


    // If put back the bottom return to the normal
    else {
		main.style.background = "#fff";
		main.style.color = "#000";
 
        // Side infomation main
        h3[0].style.color = "#4f8849";
        h3[1].style.color = "#4f8849";
        h3[2].style.color = "#4f8849";
        li[0].style.color = "#000";
        li[1].style.color = "#000";
        li[2].style.color = "#000";
        li[3].style.color = "#000";
        sideParaf[0].style.color = "#000";
        sideParaf[1].style.color = "#000";
        sideParaf[2].style.color = "#000";
        sideParaf[0].style.color = "#000";
 
        // Side local photos main
        h2.style.color = "#4f8849";
        h4[0].style.color = "#4f8849";
        h4[1].style.color = "#4f8849";
        h4[2].style.color = "#4f8849";
        h4[3].style.color = "#4f8849";
        h4[4].style.color = "#4f8849";
        h4[5].style.color = "#v";
         
		modeButton.textContent = "";

	}
});
