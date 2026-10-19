/*

HW_26_TEXT

Используя 2 информационных ресурса (API):
- `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
- https://jsonplaceholder.typicode.com/users

1. Получить список пользователей (users)
2. Для каждого пользователя получить его географические координаты (latitude, longitude)
3. Используя эти координаты получить текущую погоду для каждого пользователя
4. Определить пользователя с самой высокой температурой и вывести его имя, телефон и температуру в консоль

Решить задачу с использованием:
- axios 
- fetch (для одного из запросов)

*/

import axios from "axios";


console.log("------------FETCH------------")
async function getUsers() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  return response.json();
}

const users = await getUsers();

const people = [];
for (const user of users) {
  let myObj = {
    id: user.id,
    name: user.name,
    latitude: user?.address?.geo.lat,
    longitude: user?.address?.geo.lng,
  };
  people.push(myObj);
}

console.log(people);

async function getWeather(latitude, longitude) {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
  );
  if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();
  console.log(data);
}

getWeather(30, 40);


console.log("------------AXIOS------------")
async function getAxiosUsers() {
  return axios.get(`https://jsonplaceholder.typicode.com/users/`)
}

const usersAxios = getAxiosUsers()
console.log(usersAxios)