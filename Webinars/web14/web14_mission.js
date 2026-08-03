'use strict';

// Define object
const astronaut = {
    name: 'John Doe',
    age: 32,
    isCommander: false,
    planet: 'Mars',
    missionDurationInDays: 240
};

Object.defineProperty(astronaut, 'name', {
    value: 'John Doe',
    writable:false,
}) // field "name" is read-only

// Calcs
const astronautAgeIn10Years = astronaut.age + 10;
const missionDurationAfterExtension = astronaut.missionDurationInDays + 30;
const astronautNameMessage = 'Hello, ' + astronaut.name + '!';
let commanderStatusMessage = 'Are you a commander? ' + (astronaut.isCommander ? 'Yes' : 'No');

// Logs
console.log(astronautAgeIn10Years);
console.log('Mission duration in days after extension: ' + missionDurationAfterExtension);
console.log(astronautNameMessage);
console.log(commanderStatusMessage);

//
astronaut.isCommander = true;
// astronaut.name = 'Vasya';
commanderStatusMessage = 'Are you a commander? ' + (astronaut.isCommander ? 'Yes' : 'No');
console.log(commanderStatusMessage);
// console.log(astronaut.name);

let statusMessage = 'Is commander: '

if (astronaut.isCommander) {
    statusMessage += 'Yes';
} else {
    statusMessage += 'No';
}

console.log(statusMessage);

astronaut.isCommander = false;


statusMessage = 'Is commander: '

if (astronaut.isCommander) {
    statusMessage += 'Yes';
} else {
    statusMessage += 'No';
}

console.log(statusMessage);
