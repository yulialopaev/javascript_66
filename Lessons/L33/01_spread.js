const user = {
    name: 'John',
    address: {
        city: 'New York',
        zip: '10001'
    }
};

const copy = {
    ...user,
    address: {...user.address}
}

copy.address.zip = 55555;
console.log(user);
console.log(copy);

const user1 = {
    name: 'Anna',
    address: {
        city: 'New York',
        coordinates: {
            lat: 40.7128,
            lng: -74.0060
        },
        zip: '10001'
    }
}

const copy1 = structuredClone(user1)
copy1.address.coordinates.lat = 100;
copy1.address.coordinates.lng = 200;

console.log(user1);
console.log(copy1);
