var locSearch = document.querySelector("#loc-search");
var qInput = document.querySelector("#q");

// get weather (lat, lon)
function getGeoWeather(lat, lon) {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?appid=29f6ddfef096bce3ebb4f3b252bafe28&lat=" + lat + '&lon=' + lon + '&units=imperial')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
    }
// get city geo data
function getGeoData() {
    fetch(
      "https://api.openweathermap.org/geo/1.0/direct?appid=29f6ddfef096bce3ebb4f3b252bafe28&limit=1&q=Charlotte"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        getGeoWeather(data[0].lat, data[0].lon);
      });
  }
  // call geo data function
  getGeoData();
