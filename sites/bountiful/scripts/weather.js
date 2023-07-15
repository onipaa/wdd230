
function getCoordinates() {
  const apiKey = 'b15613884073eaa68eed10b81db6f97d';
  const cityName = 'Carlsbad';
  const stateCode = 'CA';
  const countryCode = 'US';
  
  const apiUrlLocation = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&appid=${apiKey}`;

  return fetch(apiUrlLocation)
    .then(response => response.json())
    .then(data => {
      const latValue = data[0].lat;
      const lonValue = data[0].lon;
      return { lat: latValue, lon: lonValue };
    });
}

function convertEpochToHumanReadable(epochTimestamp) {
  const milliseconds = epochTimestamp * 1000;
  const dateObject = new Date(milliseconds);
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  return dateObject.toLocaleDateString(undefined, options);
}


function getWeather(lat, lon) {
  const apiKey = 'b15613884073eaa68eed10b81db6f97d';
  const cityName = 'Carlsbad';
  const stateCode = 'CA';
  const countryCode = 'US';

  const apiUrlWeather = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=hourly,minutely&appid=${apiKey}`;

  fetch(apiUrlWeather)
      .then(response => response.json())
      .then(data => {
          const currentDate = data.current.dt;
          const currentDateHuman = convertEpochToHumanReadable(currentDate);
          const currentTemperature = data.current.temp;
          const currentWindChillTemp = data.current.feels_like;
          const currentHumidity = data.current.humidity;
          const currentBarometricPressure = data.current.pressure;
          const currentWindSpeed = data.current.wind_speed;
          const currentWindDirection = data.current.wind_deg;
          const currentWeatherDescription = data.current.weather[0].description;
          const currentWeatherIcon = data.current.weather[0].main;

          const location = document.getElementById('current-location');
          location.innerHTML = `
              <p>${lat}, ${lon}</p>
              <h3>${cityName}, ${stateCode}</h3>
          `;

          const weatherInfo = document.getElementById('widget1');
          weatherInfo.innerHTML = `
              <p>${currentDateHuman}</p>
              <img src="./images/${currentWeatherIcon}.svg" alt="${currentWeatherDescription}">
              <p>${currentWeatherDescription}</p>
              <p>${currentTemperature} °F</p>
              <p>${currentHumidity}% ${currentBarometricPressure}hPa</p>
              <p>${currentWindSpeed} m/s ${currentWindDirection}°</p>
          `;            
      })
      .catch(error => {
          console.log('An error occurred while fetching weather data:', error);
      });
}



getCoordinates()
    .then(coordinates => {
        console.log(coordinates.lat);
        console.log(coordinates.lon);

        getWeather(coordinates.lat, coordinates.lon)
});
