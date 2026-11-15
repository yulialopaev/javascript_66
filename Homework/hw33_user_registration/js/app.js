const userNameInput = document.querySelector('#usernameInput');
const ageInput = document.querySelector('#ageInput');
const registrationForm = document.querySelector('#registrationForm');
const message = document.querySelector('#message');
const userListBox = document.querySelector('#userListBox');
const userList = document.createElement('ul');
const h2 = document.createElement('h2');
h2.textContent = 'Registered Users';
const h4 = document.createElement('h4');
h4.textContent = 'Total Number Of Users: 0';
const showAllButton = document.createElement('button');
showAllButton.textContent = 'Show All';
const showAdultsButton = document.createElement('button');
showAdultsButton.textContent = 'Show Adults';
userListBox.append(h2, showAllButton, showAdultsButton, userList, h4);

const createManager = createUserManager();
let isAdultsOnly = false;

function renderUsers() {
    let users = createManager.getUsers();

    if (isAdultsOnly) {
        users = users.filter((user) => user.age >= 18);
        h4.textContent = `Total Number Of Adult Users: ${users.length}`;
    } else {
        h4.textContent = `Total Number Of Users: ${users.length}`;
    }

    userList.replaceChildren();

    users.forEach((user) => {
        const {name, age} = user;
        const li = document.createElement('li');
        li.textContent = `${name}, ${age} years old`;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteButton');
        deleteButton.textContent = 'Delete';
        li.append(deleteButton);

        deleteButton.addEventListener("click", (e) => {
            e.stopPropagation();
            createManager.deleteUser(user);
            renderUsers();
        })

        userList.append(li);
    })
}

registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        message.textContent = '';
        userNameInput.focus();

        try {
            const rawUser = {
                name: userNameInput.value,
                age: ageInput.value,
            }

            const newUser = createUser(rawUser);
            createManager.addUser(newUser);

            console.log("Registration completed successfully");

            renderUsers()
            userNameInput.value = '';
            ageInput.value = ''

        } catch (e) {
            console.log(e.message);
            message.textContent = e.message;
        } finally {
            console.log("Registration attempt completed");
        }
    }
)

showAllButton.addEventListener("click", (e) => {
    e.preventDefault();
    isAdultsOnly = false;
    renderUsers();
})

showAdultsButton.addEventListener("click", (e) => {
    e.preventDefault();
    userList.replaceChildren();
    isAdultsOnly = true;
    renderUsers();
})





