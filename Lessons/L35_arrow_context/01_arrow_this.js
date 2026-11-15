const user = {
    name: 'John',
    age: 30,
    showName: function () {
        console.log(this.name);
    }
}

user.showName();  // -> John

const user1 = {
    name: 'Jane',
    age: 25,
    showName() {
        console.log(this.name);
    }
}

user1.showName() // -> Jane

function showName() {
    console.log(this.name);
}

const user2 = {
    name: 'Alice',
    age: 28,
    showName
}

user2.showName() // -> Alice



const a = {}
const b = {key: "b"};
const c = {key: "c"}


a[b] = 123
a[c] = 456


console.log(a[b])