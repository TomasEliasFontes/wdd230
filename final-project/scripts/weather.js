// select elements of the doc
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.5&lon=-86.94&units=metric&appid=655c547e1daebb5514e8b364335a09e5';

const foreContainer = document.querySelector("#weather-tomorrow");
const forecast = "https://api.openweathermap.org/data/2.5/forecast?lat=20.5&lon=-86.95&units=metric&appid=a8bfa14a0426362600bb0e0fceeefc06";

const dailyMaxTemp = document.querySelector("#max-temp");
const humidity = document.querySelector("#humidity");


function displayResults(data) {  

    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt',`${desc} icon`);
    weatherIcon.setAttribute('width','100');
    weatherIcon.setAttribute('height','100');
    currentTemp.innerHTML = `${data.main.temp}&deg;C - ${desc}`;

    let hum = data.main.humidity;
    humidity.innerHTML = `Humidity: ${hum}%`;

}

function displayForecast(data){
    let element = 1;
             
    for (let i = 0; i < 1; i++) {
        let div = document.createElement('div');
        const iconSrc = `https://openweathermap.org/img/w/${data.list[element].weather[0].icon}.png`;
        let desc = data.list[element].weather[0].description;
        let day = getDate(data.list[element].dt_txt);
        
        div.innerHTML = `<h4>Tomorrow's Forecast</h4><br>${day}<br>${data.list[element].main.temp}&deg;C - ${desc}
        <br> <img id="weather-icon" src="${iconSrc}" alt="${desc}" width = "100" height = "100" >`;

        foreContainer.appendChild(div);
        element += 8;
    } 
    
}

function displayMaxTemp(data) {
    let maxTemp = 0;
    i = 0;
    data.list.forEach((timestamp) => {
        if ((timestamp.main.temp > maxTemp) && (i < 8)) {
            maxTemp = timestamp.main.temp;
            // console.log(timestamp.dt + ' - ' + maxTemp);
            dailyMaxTemp.innerHTML = `${maxTemp.toFixed(0)}&deg;C`
        }
        i++;
    })
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
            displayMaxTemp(week);
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