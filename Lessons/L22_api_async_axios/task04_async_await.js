async function printWeather() {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
  );
  console.log(response);

  const json = await response.json();
  console.log("-----Result json ------");

  console.log(json);
  console.log(`Latitude: ${latitude}\nLongitude: ${longitude}`);
  console.log("Wind Speed: " + json.current_weather.windspeed);
  console.log("Temperature: " + json.current_weather.temperature);
}

const latitude = -90;
const longitude = 0;

printWeather(latitude, longitude);
