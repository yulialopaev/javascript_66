/* 
Программа запрашивает наименование продуктов в вашем холодильнике и их количество.
После ввода всез продуктов программа выводит список продуктов с их количеством 
и сохраняет в виде JSON в файл в корне проекта.

readline.createInterface()  - используется для создания интерфейса чтения данных
из стандартного ввода (stdin) и записи в стандартный вывод (stdout)

 =====================================

JSON stringify(fridge, null, 2) используется для преобразования объекта JS в строку JSON
null -> не используется функция замены replacer
2 -> указывает на количество пробелов для отступов в JSON

*/

import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { writeFile, readFile } from "node:fs/promises";
import path from "node:path";

async function runFridgeApp() {
  // 1. Создание интерфейса для работы с input и output
  const rl = readline.createInterface({ input, output });
  const fridge = [];

  console.log("----- App for managing fridge -----");
  console.log("--> Enter the name of the products. To finish enter 'exit' <--");

  while (true) {
    // 2. Запрос наименования продукта
    const productName = await rl.question("Enter the name of the product: ");
    const productNameTrim = productName.trim();

    if (productNameTrim === "exit") {
      break;
    }

    if (!productNameTrim) {
      console.log("Name cannot be empty. Try again.");
      continue;
    }

    // 3. Запрос количества продукта
    const countInput = await rl.question(
      `Enter the count of ${productNameTrim}: `,
    );
    const count = Number(countInput.trim());

    fridge.push({
      name: productNameTrim,
      count: Number.isNaN(count) ? 0 : count,
    });

    console.log(`Product ${productNameTrim}, ${count} items added to fridge`);
  }

  rl.close(); // Закрытие интерфейса readline после окончания ввода данных

  if (fridge.length > 0) {
    const filePath = path.resolve("fridge.json"); // Путь к файлу в корне проекта

    try {
      // Сохранение данных в файл
      await writeFile(filePath, JSON.stringify(fridge, null, 2), "utf-8");
      console.log(`--> Fridge data saved to ${filePath} <--`);

      // Чтение данных из файла
      console.log("Getting fridge data from file...");
      const fridgeData = await readFile(filePath, "utf-8");
      console.log("Fridge data from file (JSON):", fridgeData);

      // Преобразование данных из JSON в объект JS
      const savedProducts = JSON.parse(fridgeData);
      console.log("Fridge data (object):", savedProducts);

      // Вывод списка продуктов и количества красиво
      console.log("1. Product list in the fridge:");
      savedProducts.forEach((product) => {
        console.log(`- ${product.name}: ${product.count}`);
      });

      console.log("2. Product list in the fridge:");
      console.table(savedProducts);
    } catch (error) {
      console.error(
        "Error reading the fridge data from the file:",
        error.message,
      );
    }
  } else {
    console.log("Fridge is empty. Data not saved.");
  }
}

runFridgeApp();
