import {getAuthenticatedUser} from "./authService.js";
import {createBasePromptByRole, formatProductsForPrompt, createPrompt} from "./promptService.js";
import {askAi} from "./aiService.js";

const user = getAuthenticatedUser()
// console.log(user)
const basePrompt = createBasePromptByRole(user)
//
const products = [
    { "name": "Молоко", "count": 2.0, "price": 1.5, "expDate": "2024-07-01" },
    { "name": "Свекла", "count": 0.5, "price": 0.8, "expDate": "2026-06-15" },
    { "name": "Лук", "count": 1.2, "price": 2.5, "expDate": "2025-08-10" },
    { "name": "Говядина", "count": 0.3, "price": 3.0, "expDate": "2024-07-20" },
    { "name": "Картофель", "count": 0.5, "price": 1.0, "expDate": "2024-07-20" },
    { "name": "Чеснок", "count": 0.5, "price": 1.0, "expDate": "2024-07-20" },
    { "name": "Хлеб", "count": 0.5, "price": 0.8, "expDate": "2024-06-15" },
    { "name": "Яйца", "count": 12, "price": 2.5, "expDate": "2024-07-10" },
    { "name": "Сыр", "count": 0.3, "price": 3.0, "expDate": "2024-07-20" }
];

const prompt = createPrompt(basePrompt, "Борщ", products)


const answer = await askAi("The capital of France")
console.log(answer)