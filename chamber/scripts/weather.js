// select elements of the doc
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-34.6&lon=-58.37&units=metric&appid=0aa3f21cc59fecbbbe7cb27b71f722f5';

const foreContainer = document.querySelector("#weather-days")
const forecast = "https://api.openweathermap.org/data/2.5/forecast?lat=-34.6&lon=-58.37&units=metric&appid=e06b8e26b0196b0b45076eb823e87a82"


function displayResults(data) {  

    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt',`${desc} icon`);
    currentTemp.innerHTML = `${data.main.temp}&deg;C - ${desc}`;

}

function displayForecast(data){
    let element = 4;
             
    for (let i = 0; i < 4; i++) {
        let li = document.createElement('li');
        const iconSrc = `https://openweathermap.org/img/w/${data.list[element].weather[0].icon}.png`;
        let desc = data.list[element].weather[0].description;
        let day = getDate(data.list[element].dt_txt);

        li.innerHTML = `${day}<br>${data.list[element].main.temp}&deg;C - ${desc}
        <br> <img id="weather-icon" src="${iconSrc}" alt="${desc}">`;

        foreContainer.appendChild(li);
        element += 8;
    } 
    
}

function getDate(ms) {
    var date = new Date(ms);
    var day = date.getDate();
    var month = date.getMonth() + 1; 
    var year = date.getFullYear();

    return month + '/' + day + '/' + year;
}

async function apiFetch(){
    try {
        const response = await fetch(url);
        const responseWeek = await fetch(forecast)
        if (response.ok && responseWeek.ok) {
            const data = await response.json();
            const week = await responseWeek.json();
            displayResults(data);
            displayForecast(week);
        }
        else {
            throw Error(await response.text ());
        }
    }
    catch (error) {
        console.log(error);
    }
}

apiFetch(forecast);