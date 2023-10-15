const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const h3One = document.querySelector("#main-title1");
const h3Two = document.querySelector("#main-title2");
const h3Tree = document.querySelector("#main-title3");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌑")) {
		main.style.background = "#000";
		main.style.color = "#000";
        h3One.style.color = "#fff";
        h3Two.style.color = "#fff";
        h3Tree.style.color = "#fff";
		modeButton.textContent = "🔆";
	} 
    else {
		main.style.background = "#fff";
		main.style.color = "#000";
        h3One.style.color = "#4f8849";
        h3Two.style.color = "#4f8849";
        h3Tree.style.color = "#4f8849";

		modeButton.textContent = "🌑";

	}
});
