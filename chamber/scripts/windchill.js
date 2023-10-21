
// Const of the final result of temperature
const windInfo = document.querySelector(".wind-chill");

// Const input in the html, convert to int 
const temperature = parseFloat(document.querySelector(".temp").innerHTML);
const speed = parseFloat(document.querySelector(".wind-speed").innerHTML);

// If the the temp AND speed of the wind are right
// return value of wind chill
if (temperature <= 50 && speed > 3) {

    windInfo.innerHTML = calculateWindChill(temperature, speed);
}
// Else a temperature below 50F and a wind speed greater than 3 MPH);
else {
    windInfo.innerHTML = "Wind Chill: <br> N/A";
}

function calculateWindChill(windTemp, windSpeed) {

    windchill = 35.74 + (0.6215 * windTemp) - (35.57 * (windSpeed ** 0.16)) + 0.4275 * (windTemp * (windSpeed ** 0.16));
    return `Wind chill: ${windchill.toFixed(2)} °F`;
}