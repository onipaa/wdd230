function getCoordinates() {
    const apiKey = 'b15613884073eaa68eed10b81db6f97d';
    const cityName = 'New Glasgow';
    const stateCode = 'NS';
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

function getWeather1(lat, lon) {
    const apiKey = 'b15613884073eaa68eed10b81db6f97d';
    const cityName = 'New Glasgow';
    const stateCode = 'NS';
    const countryCode = 'CA';

    const apiUrlWeather = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=hourly,minutely&appid=${apiKey}`;

    fetch(apiUrlWeather)
        .then(response => response.json())
        .then(data => {
            /* ************************************************************* */
            const currentDate = data.current.dt;
            const currentDateHuman = convertEpochToHumanReadable(currentDate);
            const currentTemperature = data.current.temp;
            const currentWindChillTemp = data.current.feels_like;
            const currentHumidity = data.current.humidity;
            const currentBarometricPressure = data.current.pressure;
            const currentWindSpeed = data.current.wind_speed;
            const currentWindDirection = degreesToDirection(data.current.wind_deg);
            const currentWeatherDescription = data.current.weather[0].description;
            const currentWeatherIcon = data.current.weather[0].main;
            /* ************************************************************* */
            const secondDateHuman = convertEpochToHumanReadable(data.daily[1].dt);
            const secondWind = data.daily[1].wind_speed;
            const secondWindDirection = degreesToDirection(data.daily[1].wind_deg);
            const secondTemperature = data.daily[1].temp.day;
            const secondWindChillTemp = data.daily[1].feels_like.day;
            const secondWeatherDescription = data.daily[1].weather[0].description;
            /* ************************************************************* */
            const thirdDateHuman = convertEpochToHumanReadable(data.daily[2].dt);
            const thirdWind = data.daily[2].wind_speed;
            const thirdWindDirection = degreesToDirection(data.daily[2].wind_deg);
            const thirdTemperature = data.daily[2].temp.day;
            const thirdWindChillTemp = data.daily[2].feels_like.day;
            const thirdWeatherDescription = data.daily[2].weather[0].description;

            /* ************************************************************* */
            // Current Day
            /* ************************************************************* */
            const latLonDiv = document.getElementById("latLon1");
            latLonDiv.textContent = `Lat: ${lat} & Lon: ${lon}`;

            const locationDiv = document.getElementById("location1");
            locationDiv.textContent = `${cityName}, ${countryCode}`;

            const windDiv = document.getElementById("wind1");
            windDiv.textContent = `Windspeed: ${currentWindSpeed} MPH ${currentWindDirection}`;

            const date1Div = document.getElementById("date1");
            date1Div.textContent = `${currentDateHuman}`;

            const descriptionDiv = document.getElementById("description1");
            descriptionDiv.textContent = `The weather is: ${currentWeatherDescription}`;

            const temperatureDiv = document.getElementById("temperature1");
            temperatureDiv.textContent = `${currentTemperature} °F`;

            const feelsDiv = document.getElementById("feels1");
            feelsDiv.textContent = `It feels like: ${currentWindChillTemp}°F`;

            /* ************************************************************* */
            // 2nd Day (feels kludgy)
            /* ************************************************************* */
            const latLon2Div = document.getElementById("latLon2");
            latLon2Div.textContent = `Lat: ${lat} & Lon: ${lon}`;

            const location2Div = document.getElementById("location2");
            location2Div.textContent = `${cityName}, ${countryCode}`;

            const wind2Div = document.getElementById("wind2");
            wind2Div.textContent = `Windspeed: ${secondWind} MPH ${secondWindDirection}`;

            const date2Div = document.getElementById("date2");
            date2Div.textContent = `${secondDateHuman}`;

            const description2Div = document.getElementById("description2");
            description2Div.textContent = `The weather is: ${secondWeatherDescription}`;

            const temperature2Div = document.getElementById("temperature2");
            temperature2Div.textContent = `${secondTemperature} °F`;

            const feels2Div = document.getElementById("feels2");
            feels2Div.textContent = `It feels like: ${secondWindChillTemp}°F`;

            /* ************************************************************* */
            // 3rd Day (feels kludgy)
            /* ************************************************************* */
            const latLon3Div = document.getElementById("latLon3");
            latLon2Div.textContent = `Lat: ${lat} & Lon: ${lon}`;

            const location3Div = document.getElementById("location3");
            location2Div.textContent = `${cityName}, ${countryCode}`;

            const wind3Div = document.getElementById("wind3");
            wind2Div.textContent = `Windspeed: ${currentWindSpeed} MPH ${currentWindDirection}`;

            const date3Div = document.getElementById("date3");
            date2Div.textContent = `${currentDateHuman}`;

            const description3Div = document.getElementById("description3");
            description2Div.textContent = `The weather is: ${currentWeatherDescription}`;

            const temperature3Div = document.getElementById("temperature3");
            temperature2Div.textContent = `${currentTemperature} °F`;

            const feels3Div = document.getElementById("feels3");
            feels2Div.textContent = `It feels like: ${currentWindChillTemp}°F`;

            console.log('Done with Weather Day 1');
        })
        .catch(error => {
            console.log('An error occurred while fetching weather data:', error);
        });
}

function getWeather2(lat, lon) {
    const apiKey = 'b15613884073eaa68eed10b81db6f97d';
    const cityName = 'New Glasgow';
    const stateCode = 'NS';
    const countryCode = 'CA';

    const apiUrlWeather = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=hourly,minutely&appid=${apiKey}`;

    fetch(apiUrlWeather)
        .then(response => response.json())
        .then(data => {
            /* ************************************************************* */
            const secondDateHuman = convertEpochToHumanReadable(data.daily[1].dt);
            const secondWind = data.daily[1].wind_speed;
            const secondWindDirection = degreesToDirection(data.daily[1].wind_deg);
            const secondTemperature = data.daily[1].temp.day;
            const secondWindChillTemp = data.daily[1].feels_like.day;
            const secondWeatherDescription = data.daily[1].weather[0].description;
            /* ************************************************************* */

            /* ************************************************************* */
            // 2nd Day (feels kludgy)
            /* ************************************************************* */
            const latLon2Div = document.getElementById("latLon2");
            latLon2Div.textContent = `Lat: ${lat} & Lon: ${lon}`;

            const location2Div = document.getElementById("location2");
            location2Div.textContent = `${cityName}, ${countryCode}`;

            const wind2Div = document.getElementById("wind2");
            wind2Div.textContent = `Windspeed: ${secondWind} MPH ${secondWindDirection}`;

            const date2Div = document.getElementById("date2");
            date2Div.textContent = `${secondDateHuman}`;

            const description2Div = document.getElementById("description2");
            description2Div.textContent = `The weather is: ${secondWeatherDescription}`;

            const temperature2Div = document.getElementById("temperature2");
            temperature2Div.textContent = `${secondTemperature} °F`;

            const feels2Div = document.getElementById("feels2");
            feels2Div.textContent = `It feels like: ${secondWindChillTemp}°F`;

            console.log('Done with Weather Day 2');
        })
        .catch(error => {
            console.log('An error occurred while fetching weather data:', error);
        });
}

function getWeather3(lat, lon) {
    const apiKey = 'b15613884073eaa68eed10b81db6f97d';
    const cityName = 'New Glasgow';
    const stateCode = 'NS';
    const countryCode = 'CA';

    const apiUrlWeather = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=hourly,minutely&appid=${apiKey}`;

    fetch(apiUrlWeather)
        .then(response => response.json())
        .then(data => {
            /* ************************************************************* */
            const thirdDateHuman = convertEpochToHumanReadable(data.daily[2].dt);
            const thirdWind = data.daily[2].wind_speed;
            const thirdWindDirection = degreesToDirection(data.daily[2].wind_deg);
            const thirdTemperature = data.daily[2].temp.day;
            const thirdWindChillTemp = data.daily[2].feels_like.day;
            const thirdWeatherDescription = data.daily[2].weather[0].description;
            /* ************************************************************* */


            console.log(thirdDateHuman);

            /* ************************************************************* */
            // 2nd Day (feels kludgy)
            /* ************************************************************* */
            const latLon3Div = document.getElementById("latLon3");
            latLon3Div.textContent = `Lat: ${lat} & Lon: ${lon}`;

            const location3Div = document.getElementById("location3");
            location3Div.textContent = `${cityName}, ${countryCode}`;

            const wind3Div = document.getElementById("wind3");
            wind3Div.textContent = `Windspeed: ${thirdWind} MPH ${thirdWindDirection}`;

            const date3Div = document.getElementById("date3");
            date3Div.textContent = `${thirdDateHuman}`;

            const description3Div = document.getElementById("description3");
            description3Div.textContent = `The weather is: ${thirdWeatherDescription}`;

            const temperature3Div = document.getElementById("temperature3");
            temperature3Div.textContent = `${thirdTemperature} °F`;

            const feels3Div = document.getElementById("feels3");
            feels3Div.textContent = `It feels like: ${thirdWindChillTemp}°F`;

            console.log('Done with Weather Day 3');

        })
        .catch(error => {
            console.log('An error occurred while fetching weather data:', error);
        });
}


getCoordinates()
    .then(coordinates => {
        console.log(coordinates.lat);
        console.log(coordinates.lon);

        getWeather1(coordinates.lat, coordinates.lon);
        getWeather2(coordinates.lat, coordinates.lon);
        getWeather3(coordinates.lat, coordinates.lon);
    });