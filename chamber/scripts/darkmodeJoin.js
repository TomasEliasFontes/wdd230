// We import from the html(with the name we use also in css)
// And asign the constant value of it to change later in the program
const modeButton = document.querySelector("#toggledarkmode");
const main = document.querySelector("main");
const label = document.querySelectorAll("label");
const li = document.querySelectorAll(".member-info li");
// We Add the bottom to displey the dark mode
modeButton.addEventListener("click", () => {
    // If the bottom have a click and its true 
    // Change the colors
	if (modeButton.checked == true) {
		main.style.background = "#000";
		main.style.color = "#000";

        label[0].style.color = "#fff";
        label[1].style.color = "#fff";
        label[2].style.color = "#fff";
        label[3].style.color = "#fff";
        label[4].style.color = "#fff";
        label[5].style.color = "#fff";
        label[6].style.color = "#fff";
        label[7].style.color = "#fff";
        label[8].style.color = "#fff";
        label[9].style.color = "#fff";
        label[10].style.color = "#fff";
        label[11].style.color = "#fff";

        li[0].style.color = "#fff";
        li[1].style.color = "#fff";
        li[2].style.color = "#fff";
        li[3].style.color = "#fff";
        li[4].style.color = "#fff";
        li[5].style.color = "#fff";
        li[6].style.color = "#fff";
        li[7].style.color = "#fff";
        li[8].style.color = "#fff";
        li[9].style.color = "#fff";
        li[10].style.color = "#fff";
        li[11].style.color = "#fff";
        li[12].style.color = "#fff";
        li[13].style.color = "#fff";
        li[14].style.color = "#fff";
        li[15].style.color = "#fff";
        li[16].style.color = "#fff";
        li[17].style.color = "#fff";

    }

    else{
		main.style.background = "#fff";
		main.style.color = "#000";
        
        label[0].style.color = "#000";
        label[1].style.color = "#000";
        label[2].style.color = "#000";
        label[3].style.color = "#000";
        label[4].style.color = "#000";
        label[5].style.color = "#000";
        label[6].style.color = "#000";
        label[7].style.color = "#000";
        label[8].style.color = "#000";
        label[9].style.color = "#000";
        label[10].style.color = "#000";
        label[11].style.color = "#000";

        li[0].style.color = "#000";
        li[1].style.color = "#000";
        li[2].style.color = "#000";
        li[3].style.color = "#000";
        li[4].style.color = "#000";
        li[5].style.color = "#000";
        li[6].style.color = "#000";
        li[7].style.color = "#000";
        li[8].style.color = "#000";
        li[9].style.color = "#000";
        li[10].style.color = "#000";
        li[11].style.color = "#000";
        li[12].style.color = "#000";
        li[13].style.color = "#000";
        li[14].style.color = "#000";
        li[15].style.color = "#000";
        li[16].style.color = "#000";
        li[17].style.color = "#000";

        modeButton.textContent = "";
	}
});