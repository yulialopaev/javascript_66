const arrowUser = {
    name: 'David',
    sayHello: () => {
        console.log(this.name)
    }
};

// arrowUser.sayHello();

const counter = {
    value: 0,
    increase() {
        const step = () => {
            this.value++;
        }
        step();
        console.log(this.value);
    }
}

counter.increase();
counter.increase();
counter.increase();

const counter2 = {
    value: 0,
    increase() {
        function step() {
            this.value++;
        }

        step()
    }
}

try {
    counter2.increase();
} catch (e) {
    console.log(e.message)
}