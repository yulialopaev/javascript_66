async function printWeather(latitude, longitude) {
    console.log(`Latitude: ${latitude}\nLongitude: ${longitude}`);
  fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
  ) // then - дождись ответа
    .then((response) => response.json()) // -> Преобразует ответ в JS объект
    // .then((data) => console.log(data))
    .then(data => console.log("Wind Speed: " +data.current_weather.windspeed + " Temperature: " + data.current_weather.temperature))
    .then(() => console.log("----- Вот и всё -----"))
    .catch((error) => console.log(error));
}


const latitude = -90;
const longitude = 0;

printWeather(latitude, longitude);