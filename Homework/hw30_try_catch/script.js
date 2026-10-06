import axios from "axios";

function validateUser(user) {
    if (!user.name) {
        throw new Error("User name is missing");
    }
    if (!user.email) {
        throw new Error("User email is missing");
    }
    if (typeof user.id !== "number") {
        throw new Error("User id must be a number");
    }

    console.log(`User is valid: ${user.name}`);
}

function main() {
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            const users = response.data;
            users[0].email = null;
            users[3].name = "";
            users[5].id = "5";


            users.forEach(user => {
                try {
                    validateUser(user);
                } catch (error) {
                    console.log(`Validation error: ${error.message}`);
                }
            })
        })

        .catch(error => {
            console.log(`API error`);
        })
}



main();



