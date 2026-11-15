function introducer(greeting, punctuation) {
    console.log(`${greeting}, my name is ${this.name}${punctuation}`)
}

const firstUser = {name: 'Anna'};
const secondUser = {name: 'Abram'};

introducer.call(firstUser, 'Hello', '!');
introducer.call(secondUser, 'Good evening', '.');

function executeCallback(callback) {
    callback();
}

const logger = {
    message: "Hello from logger",
    print() {
        console.log(this.message);
    }
}

// executeCallback.call(logger, logger.print);
introducer.apply(firstUser, ['Hello', '!']);
introducer.apply(secondUser, ['Good evening', '.']);

let introducerAnna = introducer.bind(firstUser);
console.log("Before calling");
introducerAnna('Welcome to the binding of the name!', '!');
console.log(introducerAnna === introducer);
introducerAnna = introducer.bind(secondUser);
introducerAnna('Welcome to the binding of the name!', '!');
