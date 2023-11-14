// select elements of the doc
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-34.6&lon=-58.37&units=metric&appid=0aa3f21cc59fecbbbe7cb27b71f722f5';

function displayResults(data) {
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt',`${desc} icon`);
    currentTemp.innerHTML = `${data.main.temp}&deg;C - ${desc}`;
  }

async function apiFetch(){
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
        else {
            throw Error(await response.text ());
        }
    }
    catch (error) {
        console.log(error);
    }
}

apiFetch();


