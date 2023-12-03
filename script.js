const locSearch = document.querySelector("#loc-search");
const qInput = document.querySelector("#q");
const buttonATL = document.querySelector("#Atlanta");
const buttonDEN = document.querySelector("#Denver");
const buttonSEA = document.querySelector("#Seattle");
const buttonSFO = document.querySelector("#San Francisco");
const buttonORL = document.querySelector("#Orlando");
const buttonNYK = document.querySelector("#New York");
const buttonCHI = document.querySelector("#Chicago");
const buttonAUS = document.querySelector("#Austin");

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
      "https://api.openweathermap.org/geo/1.0/direct?appid=29f6ddfef096bce3ebb4f3b252bafe28&limit=1&q=Denver"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        getGeoWeather(data[0].lat, data[0].lon);
      });
// for loop to be paired with button clicks
      const city = ["Atlanta", "Denver", "Seattle", "San Francisco", "Orlando", "New York", "Chicago", "Austin"];
      for (let i = 0; i < city.length; i++) {
        console.log(city + i++);
      }
  }
  // call geo data function

  getGeoData();
// added handleSearch for search bar
  function handleSearch(event) {
    event.preventDefault();
    const format = formatInput.value;
    const q = qInput.value;
    const type = "search";
    if (format) {
      type = format;
    }
    const url = "https://api.openweather.org" + type + "/?q=" + q + "&fo=json";
    console.log("URL", url);

  };