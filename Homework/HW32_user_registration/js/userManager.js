function createUserManager() {

    const users = [];

    function addUser(user) {
        users.push(user);
    }

    function getUsers() {
        return [...users];
    }

    function deleteUser(user) {
        return users.filter((u) => u !== user);
    }

    return {
        addUser,
        getUsers,
        deleteUser,
    }
}


