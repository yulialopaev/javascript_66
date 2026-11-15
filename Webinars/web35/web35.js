const firstPromise = new Promise((res, rej) => {

    setTimeout(res, 500, "one"); //the method res will be called in 500 milleseconds with argument “one”

});



const secondPromise = new Promise((res, rej) => {

    setTimeout(res, 100, "two");

});



Promise.race([firstPromise, secondPromise]).then(res => console.log(res))


function sayHi() {

    return (() => 0)();

}

