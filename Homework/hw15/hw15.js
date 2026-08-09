// # Попытайтесь не запуская код, определить результат каждого действия.Кратко, но понятно обьясните ответ письменно. Проверьте ваш вывод запустив код.

console.log(false == 0); // true -> false = 0, типы не проверяются
console.log(false === 0); // false -> false = 0, типы отличаются (boolean и number)

console.log("" == 0); // true -> "" пустая строка - это false (0), типы не проверяются
console.log("" === 0); // false -> "" = false, типы разные (string и number)

console.log(null == undefined); // true -> null = только undefined и самому себе
console.log(null === undefined); // false -> разные типы

console.log("55" == 55); // true -> 55 приводится к number 55 = 55
console.log("55" === 55); // false -> "55" и 55 - разные типы

console.log("true" == true); // true -> Number("true")=NaN, NaN != "true"
console.log("true" === true); // false -> string != boolean

console.log(0.2 + 0.1 - 0.3 == true); // false -> (0.2+0.1-0.3)=5.551115123125783e-17. True приводится к 1 и сравниваются 2 числовых значения.
console.log(0.2 + 0.1 - 0.3 === true); // false -> разные типы (number и boolean)

console.log(0.2 + 0.1 - 0.3 == false); // false -> (0.2+0.1-0.3)=5.551115123125783e-17, false приводится к 0 и сравниваются числа. Они не равны
console.log(0.2 + 0.1 - 0.3 === false); // false -> разные типы (number и boolean)

// #  Adv *** ДОПОЛНИТЕЛЬНО Можно спрашивать ИИ,но важно понять почему такой ответ и внятно и кратко обьяснить
console.log("---------------------------------");

console.log({} == {}); // false -> {} = один объект, а {} - другой объект. У них разные ячейки памяти и они никогда не будут равны друг другу
console.log({} === {}); // false -> - "" -

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");

console.log({} == "[object Object]"); // true -> {} приводится к строке и получается [object Object] - то есть одно и то же
console.log(String({}));

console.log({} === "[object Object]"); // false -> разные объекты - object и string

console.log({} == true); // false -> приводятся к числу. {} -> NaN, true -> 1. NaN не равен никому
console.log(Number({}));
console.log(Number(true));
console.log({} == false); // false -> приводятся к числу. {} -> NaN, false -> 0. NaN не равен никому

console.log({} == 0); // false {} = true, true != 0
console.log({} == NaN); // false (NaN не равен ничему, даже самому себе)

console.log("----------------");
