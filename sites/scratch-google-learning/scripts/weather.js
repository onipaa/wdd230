function getCoordinates() {
    const apiKey = 'b15613884073eaa68eed10b81db6f97d';
    const cityName = 'New Glasgow';
    const stateCode = 'Nova Scotia';
    const countryCode = 'CA';

    const apiUrlLocation = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&appid=${apiKey}`;

    return fetch(apiUrlLocation)
        .then(response => response.json())
        .then(data => {
            const latValue = data[0].lat;
            const lonValue = data[0].lon;
            return {
                lat: latValue,
                lon: lonValue
            };
        });
}

function convertEpochToHumanReadable(epochTimestamp) {
    const milliseconds = epochTimestamp * 1000;
    const dateObject = new Date(milliseconds);
    const options = {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    };
    return dateObject.toLocaleDateString(undefined, options);
}


function degreesToDirection(degrees) {
  const directions = ['North', 'North East', 'East', 'South Eeast', 'South', 'South West', 'West', 'North West'];
  degrees = (degrees % 360 + 360) % 360;
  const index = Math.round(degrees / 45) % 8;

  return directions[index];
}

function getWeather(lat, lon) {
    const apiKey = 'b15613884073eaa68eed10b81db6f97d';
    const cityName = 'New Glasgow';
    const stateCode = 'Nova Scotia';
    const countryCode = 'CA';

    const apiUrlWeather = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=hourly,minutely&appid=${apiKey}`;

    console.log(apiUrlWeather)

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
            const currentWeatherDescription = data.current.weather[0].description;
            const currentWeatherIcon = data.current.weather[0].main;
            const currentWindDirection = degreesToDirection(data.current.wind_deg);

            const windDiv = document.getElementById("wind");
            windDiv.textContent = `Wind: ${currentWindSpeed} MPH ${currentWindDirection}`;
    
            const descriptionDiv = document.getElementById("description");
            descriptionDiv.textContent = `The weather is: ${currentWeatherDescription}`;
    
            const temperatureDiv = document.getElementById("temperature");
            temperatureDiv.textContent = `Actual Temperature: ${currentTemperature} °F`;
    
            const feelsDiv = document.getElementById("feels");
            feelsDiv.textContent = `${currentWindChillTemp}°F`;
    
            console.log(currentDateHuman);
            console.log(currentTemperature);
            console.log(currentWindSpeed);
            console.log(currentWindDirection);
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