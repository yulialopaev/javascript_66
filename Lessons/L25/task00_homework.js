// домашка 24

import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { writeFile, readFile } from "node:fs/promises";
import path from "node:path";

async function runFridgeApp() {
  const r1 = readline.createInterface({ input, output });
  const fridge = [];

  console.log("----- Fridge inventory managing app -----\n");
  console.log(
    "--> Enter the name of the products. To finish enter 'exit', 'stop', 'стоп' or 'выход' <--\n",
  );

  while (true) {
    const name = await r1.question("Enter a name of the product: ");
    const trimmedName = name.trim();

    const exitWord = ["exit", "выход", "стоп", "stop"];
    if (exitWord.includes(trimmedName.toLowerCase())) break;

    if (!trimmedName) {
      console.log("Product name can not be empty. Enter a name.");
      continue;
    }

    const countInput = await r1.question(
      `Enter a count of the product ${trimmedName}: `,
    );
    const count = +countInput.trim();

    if (Number.isNaN(count)) {
      console.log("Count must be a number. Please enter a valid count.");
      continue;
    }

    const existingProduct = fridge.findIndex(
      (item) => item.name === trimmedName,
    );

    if (existingProduct !== -1 && count === 0) {
      fridge.splice(existingProduct, 1);
      console.log(`Product ${trimmedName} removed from the fridge.`);
    } else if (existingProduct !== -1) {
      fridge[existingProduct].count = count;
      console.log(
        `Updated ${trimmedName} count. New count: ${fridge[existingProduct]}`,
      );
    } else {
      fridge.push({ name: trimmedName, count: count });
      console.log(
        `Product ${trimmedName} added to the fridge. Count: ${count}`,
      );
    }

    console.log("Fridge product list:");
    console.table(fridge);
  }

  r1.close();

  if (fridge.length > 0) {
    const filePath = path.resolve("fridge.json");
    try {
      await writeFile(filePath, JSON.stringify(fridge, null, 2), "utf-8");
      console.log(`\n--> Final fridge data saved to JSON: ${filePath} <--`);
      console.log("Fridge JSON data:");
      const fileData = await readFile(filePath, "utf-8");
      console.log(fileData);

      const savedProducts = JSON.parse(fileData);
      console.log("Fridge product list (from object):", savedProducts);

      console.log("Fridge product list: ");
      console.table(savedProducts);
    } catch (err) {
      console.error("Error saving file:", err.message);
    }
  } else {
    console.log("Fridge is empty. ");
  }
}

runFridgeApp();
