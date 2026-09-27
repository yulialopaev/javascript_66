import {GoogleGenAI} from "@google/genai";
import {AI_MODEL} from "./config.js";
// import "dotenv/config";
//
// dotenv.config({
//     path: "...env"
// });

export async function askAi(prompt) {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) throw new Error("Google API key is not set");

    const genAI = new GoogleGenAI({
        apiKey: apiKey,
    });

    const response = await genAI.models.generateContent({
        model: AI_MODEL,
        contents: prompt,
    });

    return response.text;
}