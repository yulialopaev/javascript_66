const userNameInput = document.querySelector('#usernameInput');
const ageInput = document.querySelector('#ageInput');
const registrationForm = document.querySelector('#registrationForm');
const message = document.querySelector('#message');
const userListBox = document.querySelector('#userListBox');
const userList = document.createElement('ul')
const h2 = document.createElement('h2')
h2.textContent = 'Registered Users'
const h4 = document.createElement('h4')
h4.textContent = 'Total Number Of Users: 0'
userListBox.append(h2, userList, h4)

const createManager = createUserManager()

registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        message.textContent = ''
        userNameInput.focus()

        try {
            const rawUser = {
                name: userNameInput.value,
                age: ageInput.value,
            }

            const newUser = createUser(rawUser);
            createManager.addUser(newUser);

            console.log("Registration completed successfully");

            userNameInput.value = '';
            ageInput.value = ''

            const users = createManager.getUsers()
            h4.textContent = `Total Number Of Users: ${users.length}`

            userList.replaceChildren()

            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = `${user.name}, ${user.age} years old`;

                const deleteButton = document.createElement('button');
                deleteButton.classList.add('deleteButton');
                deleteButton.textContent = 'Delete';
                li.append(deleteButton);

                deleteButton.addEventListener("click", (e) => {
                    e.stopPropagation();
                    createManager.deleteUser(user);
                    // дальше я запуталась и не могу сообразить, как новый массив попадет в лист пользователей
                })

                userList.append(li);
            })

        } catch (e) {
            console.log(e.message);
            message.textContent = e.message;
        } finally {
            console.log("Registration attempt completed");
        }

    }
)

