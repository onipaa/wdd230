const apiKey = '3c7e43e662084aa8bb554106232506';
const postalCode = 'B2H 1P9';

// url for insomnia:
// http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${postalCode}&aqi=no
// Construct the weather API URL with the API key and postal code
const apiUrl = `https://api.weatherapi.com/v1/current.json?key=3c7e43e662084aa8bb554106232506&q=B2H 1P9&aqi=no`;

// Fetch weather data from the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Extract the desired weather information from the response
    const locationName = data.location.name;
    const temperature = data.current.temp_f;
    const description = data.current.condition.text.toUpperCase();
    const wind = data.current.wind_mph;
    const direction = data.current.wind_dir;
    const feelsLike = data.current.feelslike_f;
    const windGusts = data.current.gust_mph;

    const windDiv = document.getElementById("wind");
    windDiv.textContent = `Windspeed: ${wind} MPH @${direction}, Wind Gusts ${windGusts} MPH`;

    const descriptionDiv = document.getElementById("description");
    descriptionDiv.textContent = `The weather is: ${description}`;

    const temperatureDiv = document.getElementById("temperature");
    temperatureDiv.textContent = `Actual Temperature: ${temperature} °F`;

    const feelsDiv = document.getElementById("feels");
    feelsDiv.textContent = `${feelsLike}°F`;

    console.log(locationName, temperature, description, wind, direction, feelsLike, windGusts);
  })
  .catch(error => {
    // Handle any errors that occur during the API request
    console.error("Error fetching weather data:", error);
  });
