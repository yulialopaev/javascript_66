function createUser(user) {
    const {name, age, ...details} = user

    if (!name || name.trim() === '') {
        throw new Error('Name is required');
    }
    const trimmedName = name.trim()

    if (age === '' || age === null || age === undefined) {
        throw new Error('Age is required');
    }

    const numberAge = Number(age);

    if (isNaN(numberAge) || numberAge < 0 || numberAge > 120 || !Number.isInteger(numberAge)) {
        throw new Error('Invalid age');
    }

    return {
        id: crypto.randomUUID(),
        name: trimmedName,
        age: numberAge,
        ...details
    };
}
