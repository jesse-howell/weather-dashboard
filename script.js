var searchButton = document.getElementById("search-btn");

async function getWeatherData(lat, lon) {
    var apiKey = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";

var response = await fetch("api.openweathermap.org/data/2.5/forecast?lat={35.327113512782006}&lon={-80.78882936595913}&appid={API key}");
    return response.json();
      };
      

searchButton.addEventListener("click", getWeatherData);