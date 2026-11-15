export const users = [
    {id: 1, name: 'Anna', age: 28},
    {id: 2, name: 'David', age: 17},
    {id: 3, name: 'John', age: 35}
];

const minAdultAge = 18;

export function getAdults(users) {
    return users.filter(user => user.age >= minAdultAge);
}