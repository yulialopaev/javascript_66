// Оркестратор
import {readFromJsonFile} from "./fileService.js";
import {getUserByName} from "./authService.js";
import {FRIDGE_FILE, USERS_FILE} from "./config.js";
import {createBasePromptByRole, createPrompt} from "./promptService.js";
import {askAi} from "./aiService.js";

const users = await readFromJsonFile(USERS_FILE);
const products = await readFromJsonFile(FRIDGE_FILE);

const form = document.getElementById("searchForm");
const userNameInput = document.getElementById("userName");
const dishTitleInput = document.getElementById("dishTitle");
const result = document.getElementById("result")
const errorModal = document.getElementById("errorModal")
const errorMessage = document.getElementById("errorMessage")
const closeModal = document.getElementById("closeModal")

form.addEventListener(
    "submit",
    async event => {
        event.preventDefault();
        try {
            const userName = userNameInput.value.trim();
            const authenticatedUser = getUserByName(users, userName);
            const dishTitle = dishTitleInput.value.trim();

            console.log(authenticatedUser, dishTitle);

            if (!userName) {
                throw new Error("User name is required");
            }
            if (!dishTitle) {
                throw new Error("Dish title is required");
            }
            // if (!authenticatedUser) {
            //     throw new Error("User not found");
            //

            const basePrompt = createBasePromptByRole(authenticatedUser)
            const prompt = createPrompt(basePrompt, dishTitle, products)
            console.log(prompt);

            const answer = await askAi(prompt)
            result.textContent = answer
            console.log(answer)
        } catch (error) {
            console.error(error);
            errorMessage.textContent = error.message || "Произошла непредвиденная ошибка"
            errorModal.showModal()
        }
    })

closeModal.addEventListener(
    "click",
    () => errorModal.close())

