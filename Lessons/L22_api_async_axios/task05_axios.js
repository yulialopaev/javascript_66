import axios from "axios";

async function getWeather(latitude, longitude) {
  return await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
  );
}

async function main(latitude, longitude) {
  const weatherData = await getWeather(latitude, longitude);
  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  console.log(weatherData.data);
  console.log("Wind Speed: " + weatherData.data.current_weather.windspeed);
  console.log("Temperature: " + weatherData.data.current_weather.temperature);
}

main(-90, 0);
