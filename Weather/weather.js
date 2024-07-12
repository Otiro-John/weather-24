const apiKey = "20eedf541d4834bddc97d84142699a51";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const country = document.getElementById("country");
const cityName = document.getElementById("city");
const temp = document.getElementById("temp");
const wind = document.getElementById("wind");
const weather = document.getElementById("weather");

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    cityName.innerHTML = data.name;
    country.innerHTML = data.sys.country ;
    temp.innerHTML = data.main.temp + "°C";
    wind.innerHTML = data.wind.speed + " km/h";
    weather.innerHTML = data.weather[0].description;

    if(data.weather[0].main == "cloudy"){

    }
}


searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});

//function for getting user weather details
// async function userWeather(country){
//     const response = await fetch(apiUrl + country + `&appid=${apiKey}`);
//     var data = await response.json();
//     console.log(data);
// }
// userWeather(country);
// // Check if the Geolocation API is available
// if (navigator.geolocation) {
//     // Get the current position
//     navigator.geolocation.getCurrentPosition(success, error);
//   } else {
//     console.log("Geolocation is not supported by this browser.");
//   }
  
//   // Success callback function
//   function success(position) {
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;
//     console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//   }
  
//   // Error callback function
//   function error(err) {
//     console.warn(`ERROR(${err.code}): ${err.message}`);
//   }
  
