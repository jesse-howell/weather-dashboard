var searchButton = document.getElementById("search-btn");

async function getWeatherData(lat, lon) {
var apiKey = "api.openweathermap.org/data/2.5/forecast?lat={35.327113512782006}&lon={-80.78882936595913}&appid={API key}";
var response = await fetch("api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}");
    return response.json();
      };
      

// Here is an example of how to write a function to request data from the OpenWeather API:

// js async function getWeatherData(lat, lon) {   const apiKey = 'your api key';    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);    return response.json(); } 

// To break it down:

// const response = await fetch(https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey});

// The fetch call makes the API request, passing the latitude, longitude, and API key as URL parameters.

// return response.json();

// The response is parsed as JSON and returned from the function.
35.327113512782006, -80.78882936595913
// So this function takes latitude and longitude coordinates as arguments, makes the API request, and returns the weather data. You would call it by passing coordinates and handling the returned promise.