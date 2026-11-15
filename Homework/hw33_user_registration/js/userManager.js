function createUserManager() {

    const users = [];

    function addUser(user) {
        users.push(user);
    }

    function getUsers() {
        return [...users];
    }

    function deleteUser(user) {
        const index = users.findIndex(u => u.id === user.id);
        if (index !== -1) {
            users.splice(index, 1);
        }
        console.log(users)
    }

    return {
        addUser,
        getUsers,
        deleteUser,
    }
}


