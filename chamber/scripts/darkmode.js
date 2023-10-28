// We import from the html(with the name we use also in css)
// And asign the constant value of it to change later in the program
const modeButton = document.querySelector("#toggledarkmode");
const main = document.querySelector("main");
const hr = document.querySelectorAll("hr");
const homeMsg = document.querySelector("#home-msg");
const homeTitle = document.querySelector(".home-title");
const homeSubtitle = document.querySelector(".home-subtitle");
const newDay = document.querySelectorAll(".new-day");
const h3News = document.querySelectorAll("#main-title");
const newDayTitle = document.querySelectorAll(".new-day h2");
const newDayParaf = document.querySelectorAll(".new-day p");
const spotlightsCard = document.querySelectorAll(".spotlights-card");
const footer = document.querySelector("footer");
const h3Disc = document.querySelectorAll("#side-title");
const discoverParaf = document.querySelector("#discover-main p");

// We Add the bottom to displey the dark mode
modeButton.addEventListener("click", () => {
    // If the bottom have a click and its true 
    // Change the colors
	if (modeButton.checked == true) {
		main.style.background = "#000";
		main.style.color = "#000";
        hr[0].style.background = "#fff694"
        hr[1].style.background = "#fff694"
        hr[2].style.background = "#fff694"


        // Hero box colors
        homeMsg.style.background = "#000";
        homeTitle.style.color = "#fff";
        homeSubtitle.style.color = "#fff"

        // Main News colors
        h3News[0].style.color = "#fff";
        h3News[1].style.color = "#fff";
        h3News[2].style.color = "#fff";
        newDay[0].style.background ="#303030"
        newDay[1].style.background ="#303030"
        newDay[2].style.background ="#303030"
        newDayTitle[0].style.color = "#fff";
        newDayTitle[1].style.color = "#fff";
        newDayTitle[2].style.color = "#fff";
        newDayParaf[0].style.color = "#fff";
        newDayParaf[1].style.color = "#fff";
        newDayParaf[2].style.color = "#fff";
        // Main Spotlights Card
        //spotlightsCard[0].style.background = "#9f9f9f";
        //spotlightsCard[1].style.background = "#9f9f9f";
        //spotlightsCard[2].style.background = "#9f9f9f";
        //spotlightsCard[3].style.background = "#9f9f9f";

        //Discover 
        discoverParaf.style.color = "#fff"

        //footer.style.background ="#606263"
		modeButton.textContent = "";
	} 

    // If put back the bottom return to the normal
    else {
		main.style.background = "#fff";
		main.style.color = "#000";
        homeMsg.style.background = "#ffffff80";
        homeTitle.style.color = "#000";
        homeSubtitle.style.color = "#000"
        h3News[0].style.color = "#4f8849";
        h3News[1].style.color = "#4f8849";
        h3News[2].style.color = "#4f8849";
        newDay[0].style.background ="#eaeaea"
        newDay[1].style.background ="#eaeaea"
        newDay[2].style.background ="#eaeaea"
        newDayTitle[0].style.color = "#4f8849";
        newDayTitle[1].style.color = "#4f8849";
        newDayTitle[2].style.color = "#4f8849";
        newDayParaf[0].style.color = "#000";
        newDayParaf[1].style.color = "#000";
        newDayParaf[2].style.color = "#000";
        //newDay.style.background ="#eaeaea"
		modeButton.textContent = "";

	}
});
