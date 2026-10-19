// пункты 3, 4, 5
import {GoogleGenAI} from "@google/genai";
import {readFile} from "node:fs/promises";

async function getProducts(filePath) {
  const productsData = await readFile(filePath, "utf-8")
  return JSON.parse(productsData);
  // Если будет чтение из файла - функция должна быть async - await
}

function createBasePromptByRole(user) {
    if (user.role === "ADMIN") {
        return `
        Ты - квалифицированный повар, определяющий ингредиенты блюда по названию блюда.
        Тебе даётся название желаемого блюда и список продуктов, имеющихся в холодильнике.
        Твоя задача: на основе этих данных составить рекомендации для владельца холодильника,
        какие недостающие продукты надо закупить, чтобы владелец мог приготовить желаемое блюдо.
        Правила: 
            - возвращай только список продуктов, которые нужно закупить
            - не возвращай продукты, не имеющие отношения к данному блюду
            - не возвращай продукты, которые уже есть в холодильнике`;
    } else {
        return `
        Ты - квалифицированный повар, определяющий ингредиенты блюда по названию блюда.
        Тебе даётся название желаемого блюда и список продуктов, имеющихся в холодильнике.
        Твоя задача: на основе этих данных составить рекомендации для владельца холодильника,
        какие продукты надо использовать из имеющихся в холодильнике, чтобы владелец мог приготовить желаемое блюдо.
        Правила: 
            - возвращай только список продуктов, которые нужно использовать из числа имеющихся в холодильнике
            - не возвращай продукты, не имеющие отношения к данному блюду
            - не возвращай продукты, которых нет в холодильнике`;
    }
}

function createPrompt(basePrompt, dishTitle, availableProducts) {
    return `${basePrompt}. Я хочу приготовить ${dishTitle}. 
  Продукты, которые есть в холодильнике: ${availableProducts.map((p) => p.name).join(', ')}`;
}

async function askAi(prompt) {
    const genAI = new GoogleGenAI({
        apiKey: process.env.GOOGLE_API_KEY,
    });

    const response = await genAI.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
    });
    return response.text;
}

async function main() {
    const user = {
        name: "John",
        role: "USER",
    };

    const admin = {
        name: "Bill",
        role: "ADMIN",
    };

    const authenticatedUser = admin;

    // Алгоритм работы приложения:
    //  1. Получить все продукты из БД холодильника
    const availableProducts = await getProducts("fridge.json");

    //  2. Написать базовый промпт, зависящий от роли (рекомендуем либо имеющиеся
    //  в холодильнике продукты для приготовления, либо список того, что нужно закупить)
    const basePrompt = createBasePromptByRole(authenticatedUser);

    // 3. Составить промпт для AI для рекомендаций по конкретному блюду с учётом роли пользователя
    const prompt = createPrompt(basePrompt, "борщ", availableProducts);

    // 4. Отправим промпт AI и получим от него ответ
    const aiResponse = await askAi(prompt);

    // 5. Выведем ответ в консоль
    console.log(aiResponse);
}

main();
