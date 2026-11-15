const nameInput = document.querySelector('#nameInput');
const helloButton = document.querySelector('#helloButton');
const result = document.querySelector('#result');

console.log(nameInput, helloButton, result)

console.log(nameInput.value)

helloButton.addEventListener('click', () => {
    // console.log(nameInput.value);
    const name = nameInput.value.trim();
    console.log('Name: ', name)

    if(!name) {
        result.textContent = 'Please enter your name';
        return;
    }

    result.textContent = `Hello, ${name}!`;
})

