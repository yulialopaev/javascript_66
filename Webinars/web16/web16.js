const participants = ["John", "Sara", "Maryland"];

console.log(participants);
console.log(...participants);

participants[3] = "Mathew";
console.log(participants);
console.log(participants.length);

participants[1000] = "Lisa";
console.log(participants);
console.log(participants[1001]);

participants.push(9);
console.log(participants);

const partisipants_lectures = ["Mary", "Chang", "Lio"];
const res = participants.push(partisipants_lectures);
console.log(participants);
console.log(res);

console.log("-----------------------");
const tasksFinished = ["HTML", "CSS", "JavaScript"];
const removed = tasksFinished.pop();
console.log(removed);

const customersQueue = ["John", "MaryLand", "Ivan", "Denis"];
customersQueue.shift(); // удаляет первый элемент массива
console.log(customersQueue);

customersQueue.unshift("VIP");
console.log(customersQueue);

for (let i = 0; i < participants.length; i++) {
  if (!participants[i]) {
    console.log("Undefined" + " " + i + " " + participants[i]);
    break;
  }
}

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  if (!numbers[i]) {
    console.log("Undefined:" + " " + i + " " + numbers[i]);
    break;
  }
}

const cameraLog = [12, 14, 16, , , 20, 21, , , , 30, 29, 20, 9];
// 1 минута. 0 -> 0, 1 -> 1 min, 2 - 2 min, ..., n-1 -> n-1 min

// TASKS:
// сколько было непрерывных сессий записи
// 1. SESSIONS?
// 2. How long each session?

let sessions = 0;

for (let i = 0; i < cameraLog.length; i++) {
  if (cameraLog[i] !== undefined) {
    sessions++;
    let sessionLength = 0;

    while (i < cameraLog.length && cameraLog[i] !== undefined) {
      sessionLength++;
      i++;
    }
    console.log("Sessions: "+ sessions + " has length " + sessionLength);
    
  }
}
console.log("Total sessions: " + sessions);

