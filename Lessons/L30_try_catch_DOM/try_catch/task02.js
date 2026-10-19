console.log("task 02 run")

function getJsonFromString(content) {
    const json = JSON.parse(content);
    return json;
}

let text = '{"username": "John", "age": 25}';
let result = getJsonFromString(text);
console.log(result)

text = '{username: "John", "age": 25}';
result = getJsonFromString(text);
console.log(result) // error



console.log("task 02 end")