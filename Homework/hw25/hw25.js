/*
## HW-25-TEXT
Главная цель этого задания — сделать код программы понятнее и аккуратнее. Сейчас функция `runFridgeApp` 
перегружена: она сама ищет элементы в массиве, вручную перезаписывает данные, сама читает и сохраняет файлы. 
При этом в самом начале файла у вас уже написаны отличные функции-помощники, которые пока почти не используются.
 
Ваша задача — провести рефакторинг и переписать основную функцию так, чтобы она поручала всю черновую работу этим 
готовым вспомогательным инструментам.
 
**Что именно нужно сделать:**
 
* **Передать работу с массивом помощникам.** Внутри цикла `while` вы сейчас вручную ищете индекс продукта и меняете 
массив. Замените эту логику на вызовы функций `removeProduct` и `addOrUpdateProduct`. При необходимости немного 
доработайте `addOrUpdateProduct`, чтобы она умела обновлять не только количество, но также цену и срок годности.
* **Использовать готовые функции для файлов.** В конце программы замените прямые вызовы `writeFile` на готовую 
утилиту `writeToJsonFile`. А вместо цепочки из `readFile` и `JSON.parse` задействуйте функции `readFromJsonFile` и `displayFileJsonContents`.
* **Убрать дублирование вывода.** В самом конце кода вы снова перебираете массив через `forEach`, чтобы напечатать 
список. Удалите этот дублирующий цикл и вместо него просто вызовите `displayFridgeContents`.
 
В результате функция `runFridgeApp` должна стать простой и понятной: она будет отвечать только за общение с 
пользователем (задавать вопросы и получать ответы), а все операции с файлами и структурой данных уполномочены делать соответствующие вспомогательные функции.
*/

import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { writeFile, readFile } from "node:fs/promises";
import path from "node:path";

// Функция для сохранения в JSON формат
async function writeToJsonFile(filePath, data) {
  await writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
}

// Чтение из JSON файла
async function displayFileJsonContents(filePath) {
  console.log("Считываем данные из файла JSON...");
  const fileData = await readFile(filePath, "utf-8");
  console.log("Данные из файла JSON:", fileData);
}

// Вспомогательная функция для сохранения в CSV формат
async function saveToCSV(filePath, fridgeData) {
  const headers = "Name, Count, Price, expDate";
  const rows = fridgeData.map(
    (item) => `${item.name}, ${item.count}, ${item.price}, ${item.expDate}`,
  );
  const csvContent = [headers, ...rows].join("\n");

  await writeFile(filePath, csvContent, "utf-8");
}

// Функция для чтения CSV файла
async function readFromCsvFile(filePath) {
  console.log("Считываем данные из файла CSV...");
  const fileData = await readFile(filePath, "utf-8");
  console.log("Данные из файла CSV:\n", fileData);
}

// Вспомогательная функция для удаления продукта 
function removeProduct(fridge, name) {
  fridge = fridge.filter((product) => name !== product.name);
  console.log(`${name} count = 0. Product removed from the fridge`);
  return fridge;
}

// Функция для добавления продукта
function addProduct(fridge, name, count, price, expDate) {
  fridge.push({ name, count, price, expDate });
  console.log(
    `Product ${name} added to the fridge. Count: ${count}, Price: ${price}, expDate: ${expDate}`,
  );
}

// Функция для обновления существующего продукта
function updateProduct(fridge, name, count, price, expDate) {
  const index = fridge.findIndex((product) => product.name === name);

  if (count > 0) {
    const sum = (fridge[index].count += count);
    console.log(
      `Updated ${name} product. Added ${count}. New count: ${sum}. New price: ${price}. New expDate: ${expDate}`,
    );
  } else if (count < 0) {
    let result = fridge[index].count + count;

    if (result < 0) {
      console.log(
        `Cannot change product count. Current count: ${fridge[index].count}.`,
      );
    } else if (result > 0) {
      fridge[index].count = result;
      fridge[index].price = price;
      fridge[index].expDate = expDate;
      console.log(
        `Updated ${name} product. Subtracted ${count}. New count: ${result}. Price: ${price}, expDate: ${expDate}`,
      );
    } else {
      fridge = removeProduct(fridge, fridge[index].name);
    }
  }
}

function isPositiveNumber(count) {
  if (typeof count === "string") {
    count = count.trim();
    if (count === "") return false;
  }

  const num = Number(count);
  return Number.isFinite(num) && num > 0;
}

// Функция для красивой печати
function printFridge(fridge) {
  if (fridge.length > 0) {
    console.log(`\nFridge product list:`);
    fridge.forEach((item) => {
      console.log(
        `  - ${item.name}: ${item.count}, ${item.price} NIS, Expiration date: ${item.expDate}`,
      );
    });
  }
}

// Функция для печати таблички
function printTable(fridge) {
  if (fridge.length > 0) {
    console.table(fridge);
  }
}

async function runFridgeApp() {
  // Coздаём интерфейс для работы с input и output
  const rl = readline.createInterface({ input, output });
  let fridge = [];
  const exitCommands = ["exit", "выход", "стоп", "stop"];

  console.log("----- Fridge inventory managing app -----\n");
  console.log(
    "--> Enter the name of the products. To finish enter 'exit', 'stop', 'стоп' or 'выход' <--\n",
  );

  while (true) {
    // Запрос наименования продукта
    const productName = await rl.question("Enter a name of the product: ");
    const prNameTrim = productName.trim().toLowerCase();
    const existingProduct = fridge.find((item) => item.name === prNameTrim);
    let shouldStop = false;
    let numCount;

    if (exitCommands.includes(prNameTrim)) break;

    if (!prNameTrim) {
      console.log("Product name can not be empty. Enter a name.");
      continue;
    }

    // Запрос количества продукта (внутренний цикл)
    while (true) {
      const productCount = await rl.question("Enter a count of the product: ");
      const count = productCount.trim();
      const lowerCount = count.toLowerCase();
      numCount = Number(count);

      if (exitCommands.includes(lowerCount)) {
        shouldStop = true;
        break;
      }

      if ((numCount <= 0 && !existingProduct) || Number.isNaN(numCount)) {
        console.log(
          "Count must be a number greater than 0. Please enter a valid count.",
        );
        continue;
      }

      break;
    }

    if (shouldStop) break;

    // Запрос цены (price)
    const productPrice = await rl.question("Enter a price of the product: ");
    if (!isPositiveNumber(productPrice)) {
      console.log(
        `Product price must be a positive number. Let's start from the beginning.`,
      );
      continue;
    }

    const price = Number(productPrice);

    // Запрос expDate
    const productExpDate = await rl.question("Enter expDate (YYYY-MM-DD): ");
    const expDate = productExpDate.trim();

    // Удаление существующего продукта при вводе 0
    if (numCount === 0 && existingProduct) {
      fridge = removeProduct(fridge, existingProduct.name);
    }

    // Изменение количества существующего продукта
    if (existingProduct) {
      updateProduct(fridge, prNameTrim, numCount, price, expDate);

    } else {
      // Добавление продукта в массив fridge
      addProduct(fridge, prNameTrim, numCount, price, expDate);
    }
  }

  // Закрытие инферфейса readline после окончания ввода данных
  rl.close();

  // Сохранение данных в файл CSV
  const filePath = path.resolve("fridge.csv");
  try {
    await saveToCSV(filePath, fridge);
    console.log(`\n--> Final fridge data saved to CSV: ${filePath} <--`);
  } catch (err) {
    console.error("Error saving CSV file:", err.message);
  }
  if (fridge.length === 0) console.log("Fridge is empty. ");

  // Чтение данных из файла CSV
  await readFromCsvFile(filePath);

  // Сохраняем данные в файл JSON
  const fileJsonPath = path.resolve("fridge.json");
  try {
    await writeToJsonFile(fileJsonPath, fridge);
    console.log(`\n --> Final fridge data saved to JSON: ${fileJsonPath}`);
  } catch (err) {
    console.error("Error saving JSON file", err.message);
  }

  // Чтение данных  из файла JSON
  await displayFileJsonContents(fileJsonPath);

  // Вывод красивого списка продуктов
  printFridge(fridge);

  // вывод таблицы
  printTable(fridge);
}

runFridgeApp();
