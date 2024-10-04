const apiKey = "732e55d1506650a90bf2a4403236a4ca";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status === 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
    let data = await response.json();

    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").textContent = data.main.humidity + "%";
    document.querySelector(".wind").textContent = data.wind.speed + "km/h";

    if(data.weather[0].main === "Clouds") {
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main === "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main === "Snow"){
        weatherIcon.src = "images/snow.png";
    }
    else if(data.weather[0].main === "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main === "Mist"){
        weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }

}

searchBtn.addEventListener("click" , () => {
    checkWeather(searchBox.value);
});




