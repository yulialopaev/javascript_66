export async function readFromJsonFile(filePath) {
    const response = await fetch(filePath)
    if (!response.ok) {
        throw new Error(`Fail not found`)
    }
    console.log(response.status)
    return await response.json()
}
