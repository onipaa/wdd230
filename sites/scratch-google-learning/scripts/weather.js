const apiKey = '3c7e43e662084aa8bb554106232506';
const postalCode = 'B2H 1P9';

// Construct the weather API URL with the API key and postal code
const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${postalCode}&aqi=no`;

// Fetch weather data from the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Extract the desired weather information from the response
    const locationName = data.location.name;
    const temperature = data.current.temp_f;
    const description = data.current.condition.text;
    const wind = data.current.wind_mph;
    const direction = data.current.wind_dir;
    const feelsLike = data.current.feelslike_f;
    const windGusts = data.current.gust_mph;

    const locationDiv = document.getElementById("location");
    locationDiv.textContent = `Location: ${locationName}`;

    const temperatureDiv = document.getElementById("temperature");
    temperatureDiv.textContent = `Temperature: ${temperature} °F`;

    const descriptionDiv = document.getElementById("description");
    descriptionDiv.textContent = `Forcast: ${description}`;

    const windDiv = document.getElementById("wind");
    windDiv.textContent = `Windspeed: ${wind} MPH @${direction}, Wind Gusts ${windGusts} MPH`;

    const feelsDiv = document.getElementById("feels");
    feelsDiv.textContent = `It feels like: ${feelsLike} °F`

    // my brain just exploded.
    // this was a lot to "figure out."
    // first off, this is my first time seeing the api.weatherapi.com program
    // I had to tinker with that
    // secondly, I am more of a Database, system admin, bash, python, sql, plsql guy
    // but patterns are patterns and we techies persist till we get it
    // I hope that's not a stupid approach

    console.log(locationName, temperature, description, wind, direction, feelsLike, windGusts);
  })
  .catch(error => {
    // Handle any errors that occur during the API request
    console.error("Error fetching weather data:", error);
  });
