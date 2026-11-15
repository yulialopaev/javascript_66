console.log("task 03 run");

function getJsonFromString(content) {
    const json = JSON.parse(content);
    return json;
}

try {
    let text = '{username: "John", "age": 25}';
    let result = getJsonFromString(text);
    console.log(result);
} catch (error) {
    console.log("Ошибка парсинга JSON");
    console.log(error.message);
}

try {
    let text = '{"username": "John", "age": 25}';
    let result = getJsonFromString(text);
    console.log(result);
} catch (error) {
    console.log("Ошибка парсинга JSON");
    console.log(error.message);
}



console.log("task 03 end");