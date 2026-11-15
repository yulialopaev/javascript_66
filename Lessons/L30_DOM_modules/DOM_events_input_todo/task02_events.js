const title = document.querySelector('#title');
const changeButton = document.querySelector('#changeButton');

// console.log(changeButton)

changeButton.addEventListener('click', () => {
    console.log(`Before: ${title.textContent}`);
    title.textContent = 'Hello, Yulia! Have a nice day!';
    console.log(`After: ${title.textContent}`);
    }
)