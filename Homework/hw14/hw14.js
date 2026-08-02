'use strict';

/* 
Task: Astronaut Profile System

Mission: 
- Create a JavaScript program to store information about an astronaut

 1. Create variables:
 2. Use different data types:
    - string
    - number
    - boolean
 */

const astronautName = 'Jack';
const astronautAge = 40;
let isCommander = true;
const planet = 'Mars';
let missionDuration = 180; // in days

/* 
 3. Perform calculations:
    - Astronaut's age in 10 years
    - Mission duration after 30-day extension
*/

const newAge = astronautAge + 10;
console.log('Astronaut age in 10 years:', newAge);

const newMissionDuration = missionDuration + 30;
console.log('Mission duration after 30-day extension:', newMissionDuration);

/* 
4. Perform string concatenation 
Create messages:
    - astronaut name
    - planet
    - commander status

5. Display results
*/

console.log('Astronaut Name: ' + astronautName);
console.log('Planet: ' + planet);
console.log('Is Commander: ' + isCommander);

/* 
6. Change variable values. Display results

Change:
    - mission duration
    - commander status
*/

missionDuration = 260; // in days
isCommander = false;
console.log('Updated Mission Duration: ' + missionDuration);
console.log('Updated Commander Status: ' + isCommander);