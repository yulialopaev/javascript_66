/*
1.ADV. САМОСТОЯТЕЛЬНО ИЗУЧИТЬ
Переделайте программу так, чтобы она сохраняла данные в CSV файл (такая возможность есть в Экселе)
 в корне проекта вместо JSON файла.
 
ПРИМЕР CSV ФАЙЛА:
 
Наименование,Количество
qqq,2
aaa,44.2
zzzz,55
 
2. Преработайте программу с урока или из п.1 так, чтобы ввод прекращался на слова "exit" или "выход" или "стоп" или
"stop" (без учета регистра) и сохранялись данные в CSV  (JSON) файл в корне проекта.
 
3. Доработайте программу с урока или из п.1 так, чтобы она позволяла пользователю удалять
продукты из списка по наименованию если мы ввели 0 количество для данного наименования.
После удаления продукта, программа должна обновлять CSV (JSON) файл
и выводить обновленный список продуктов.
 
4. Доработайте программу с урока или из п.1 так, чтобы она позволяла пользователю изменять
количество продукта в списке по наименованию если мы ввели другое количество для
данного наименования но отличное от 0б. После изменения количества продукта, программа
должна обновлять CSV  (JSON) файл и выводить обновленный список продуктов.
*/

import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { writeFile, readFile } from "node:fs/promises";
import path from "node:path";

// Вспомогательная функция для сохранения в CSV формат
async function saveToCSV(filePath, fridgeData) {
  const headers = "Name, Count";
  const rows = fridgeData.map((item) => `${item.name}, ${item.count}`);
  const csvContent = [headers, ...rows].join("\n");

  await writeFile(filePath, csvContent, "utf-8");
}

// Вспомогательная функция для удаления продукта (используется в 2х местах)
function removeProduct(fridge, name) {
  fridge = fridge.filter((product) => name !== product.name);
  console.log(`${name} count = 0. Product removed from the fridge`);
  return fridge;
}

async function runFridgeApp() {
  // Coздаём интерфейс для работы с input и output
  const rl = readline.createInterface({ input, output });
  let fridge = [];
  const exitCommands = ["exit", "выход", "стоп", "stop"];

  console.log("----- Fridge inventory managing app -----\n");
  console.log(
    "--> Enter the name of the products. To finish enter 'exit', 'stop' or 'finish' <--\n",
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

    // Удаление существующего продукта при вводе 0
    if (numCount === 0 && existingProduct) {
      fridge = removeProduct(fridge, existingProduct.name);
    }

    // Изменение количества существующего продукта
    if (existingProduct) {
      if (numCount > 0) {
        const sum = (existingProduct.count += numCount);
        console.log(
          `Updated ${prNameTrim} count. Added ${numCount}. New count: ${sum}`,
        );
      } else if (numCount < 0) {
        let result = existingProduct.count + numCount;

        if (result < 0) {
          console.log(
            `Cannot change product count. Current count: ${existingProduct.count}.`,
          );
        } else if (result > 0) {
          existingProduct.count = result;
          console.log(
            `Updated ${prNameTrim} count. Subtracted ${numCount}. New count: ${result}`,
          );
        } else {
          fridge = removeProduct(fridge, existingProduct.name);
        }
      }
    } else {
      // Добавление продукта в массив fridge
      fridge.push({
        name: prNameTrim,
        count: numCount,
      });
      console.log(
        `Product ${prNameTrim} added to the fridge. Count: ${numCount}`,
      );
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
    console.error("Error saving file:", err.message);
  }
  if (fridge.length === 0) console.log("Fridge is empty. ");

  // Вывод красивого списка продуктов
  if (fridge.length > 0) {
    console.log(`\nFridge product list:`);
    fridge.forEach((item) => {
      console.log(`  - ${item.name}: ${item.count}`);
    });

    // Чтение данных из файла
    console.log("\nFridge CSV data:");
    const fridgeData = await readFile(filePath, "utf-8");
    console.log(fridgeData);
  }
}

runFridgeApp();
