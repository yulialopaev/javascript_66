/* 
HW_23_TEXT
1.Из полученного ответа извлеките и распечатайте данные про коды ответа и их расшифровку. 
2*** Подсчитайте, сколько раз в ответе упоминаются методы REST (GET, POST и т.д.). и распечатайте результат. Используйте методы строк и массивов.

*/

import { GoogleGenAI } from "@google/genai";
import { count } from "node:console";

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
  const prompt =
    "Объясни что такое REST API и как его использовать в JavaScript. Расскажи про методы GET, POST, PUT, DELETE и т.д. и про коды ошибок";
  const answer = await askAi(prompt);
  console.log(answer);

  // Данные по кодам ответа и их расшифровка
  const lines = answer.split("\n");

  const codeLine = lines.filter((line) => {
    return (
      line.includes("200") ||
      line.includes("201") ||
      line.includes("401") ||
      line.includes("403") ||
      line.includes("404") ||
      line.includes("500") ||
      line.includes("503")
    );
  });

  console.log(codeLine);

  const splitAnswerGet = answer.split("GET");
  const countGet = splitAnswerGet.length - 1;
  console.log(countGet);
}

main();
