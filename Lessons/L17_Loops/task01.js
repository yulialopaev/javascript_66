const array1 = ["banana", "apple", "orange", 7, 3, true, undefined, null];
console.log(array1);

const array2 = ["banana", "apple", "orange", 7, 3, true, undefined, null];
console.log(array2);

array2[0] = "kiwi";
console.log(array2);

// array2 = array1 -> TypeError: Assignment to constant variable: нельзя переприсваивать массив const
// console.log(array2);

let arrayString = array1.toString();
console.log(arrayString);

const array3 = ["banana", "apple", "orange"];
console.log(array3);
arrayString = array3.toString();
console.log(arrayString); // -> banana,apple,orange

// .join()
arrayString = array3.join("-");
console.log(arrayString); // -> banana-apple-orange
arrayString = array3.join("\n");
console.log(arrayString); // -> banana
// apple
// orange

console.log(array3.at(1)); // apple
console.log(array3[1]); // apple

console.log(typeof array3); // -> object
console.log(Array.isArray(array3)); // -> true

const array4 = [1, 2, 3, 4, 5];
console.log(array4);

const array5 = array3.concat(array4);
console.log(array5); // -> [ 'banana', 'apple', 'orange', 1, 2, 3, 4, 5 ]

const array6 = array4.concat(array3, array1);
console.log(array6);

console.log(array3);
array3[6] = "grape";
console.log(array3); // -> [ 'banana', 'apple', 'orange', <3 empty items>, 'grape' ]
console.log(array3[4], typeof array3[4]); // -> undefined undefined

delete array3[0] 
console.log(array3); // -> <1 empty item>, 'apple', 'orange', <3 empty items>, 'grape' ]
