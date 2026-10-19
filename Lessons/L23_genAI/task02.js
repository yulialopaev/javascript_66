import { GoogleGenAI } from "@google/genai";

async function askAi(prompt) {
  const genAI = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const response = await genAI.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });
  return response.text;
}

async function main() {
  const prompt = "Объясни что такое REST API и как его использовать в JavaScript.";
  const answer = await askAi(prompt);

  console.log(answer);
  
}

main();


