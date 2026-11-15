console.log("task 04 run");

function getSum(number1, number2) {
    if (typeof number1 !== "number" || typeof number2 !== "number") {
        throw new Error("Both arguments must be numbers");
    }

    const sum = number1 + number2;
    return sum;
}

const value2 = 10;

try {
    const value1 = 5;
    const result = getSum(value1, value2);
    console.log(result);
} catch (error) {
    console.log(`Ошибка при выполнении функции getSum! ${error.message}`);
}


try {
    const value1 = "Hello";
    const result = getSum(value1, value2);
    console.log(result);
} catch (error) {
    console.log(`Ошибка при выполнении функции getSum! ${error.message}`);
}

try {
    const value1 = undefined;
    const result = getSum(value1, value2);
    console.log(result);
} catch (error) {
    console.log(`Ошибка при выполнении функции getSum! ${error.message}`);
}

console.log("task 04 end");