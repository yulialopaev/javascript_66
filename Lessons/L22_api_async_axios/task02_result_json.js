async function printWeather() {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=44.49&longitude=20.27&current_weather=true",
  );

  const json = await response.json();
  console.log("-----Result json ------");

  console.log(json);

  console.log("Wind Speed: " + json.current_weather.windspeed);
  console.log("Temperature: " + json.current_weather.temperature);

  console.log("------JSON from the object response ------");
  const res = JSON.stringify(json); // string
  console.log(res);

  const obj = JSON.parse(res); // object
  console.log(obj);
}

printWeather();
 