async function doNothing() {
  const response = await Promise.resolve();
  console.log("---------DONE----------");
  return response;
}

console.log(doNothing());
console.log("1");
console.log("2");
console.log("3");

const response = fetch("https://api.example.com/users/5")
  // {"id": 5, "name": "John"}
  .then((response) => response.json())
  .then((data) => console.log(data));
console.log(response); // Promise{ <pending> }

async function getUser(id) {
    try {
  const response2 = await fetch(`https://api.example.com/users/${id}`);
  
  if(!response2.ok) {
    throw new Error(`HTTP error! status: ${response2.status}`);
  }
  const data2 = await response2.json();
  return data2;
    } catch (error) {

    }
}
