const modeButton = document.querySelector("#toggledarkmode");
const main = document.querySelector("main");
const h3One = document.querySelector("#main-title1");
const h3Two = document.querySelector("#main-title2");
const h3Tree = document.querySelector("#main-title3");
const homeMsg = document.querySelector("#home-msg");
const homeTitle = document.querySelector(".home-title");
const homeSubtitle = document.querySelector(".home-subtitle");
const newDay = document.querySelector(".new-day");
const footer = document.querySelector("footer");

modeButton.addEventListener("click", () => {
	if (modeButton.checked == true) {
		main.style.background = "#000";
		main.style.color = "#000";
        homeMsg.style.background = "#000";
        homeTitle.style.color = "#fff";
        homeSubtitle.style.color = "#fff"
        h3One.style.color = "#fff";
        h3Two.style.color = "#fff";
        h3Tree.style.color = "#fff";
        //newDay.style.background ="#303030"
        //footer.style.background ="#606263"
		modeButton.textContent = "";
	} 
    else {
		main.style.background = "#fff";
		main.style.color = "#000";
        homeMsg.style.background = "#ffffff80";
        homeTitle.style.color = "#000";
        homeSubtitle.style.color = "#000"
        h3One.style.color = "#4f8849";
        h3Two.style.color = "#4f8849";
        h3Tree.style.color = "#4f8849";
        //newDay.style.background ="#eaeaea"
		modeButton.textContent = "";

	}
});
