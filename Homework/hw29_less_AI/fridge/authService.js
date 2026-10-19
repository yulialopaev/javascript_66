export function getUserByName(users, userName) {
    const clearName = userName.trim().toLowerCase();
    const guest = {name: "Guest", role: "GUEST"}
    const user = users.find(user => user.name.toLowerCase() === clearName)
    if (!user) return guest
    return user
}

