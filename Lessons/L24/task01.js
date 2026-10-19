// npm install @inquirer/prompts

/*

Запрос данных от пользователя
1. Установка расширения под VSCode: Inquirer Prompts или vscode.window.showInputBox
2. Использование системных модальных окон ОС для ввода данных поверх всех окон ОС
3. Интерактивный диалог в консоли Node.js - внутри вкладки терминала VS Code, в терминале ОС, 
       в терминале IDE WebStorm

*/

import { input, select, confirm, password } from "@inquirer/prompts";

async function runCli() {
  try {
    // 1. Текстовое поле с дефолтным значением
    const name = await input({
      message: "What is your name?",
      default: "Anonymous",
    });

    // 2. Поле с выбором из списка
    const color = await select({
      message: "What is your favorite color?",
      choices: ["red", "green", "blue"],
    });

    const role = await select({
      message: "What is your role?",
      choices: [
        { name: "Admin", value: "admin" },
        { name: "User", value: "user" },
        { name: "Guest", value: "guest" },
      ],
    });

    // 3. Поле для ввода пароля (скрытый ввод)
    const userPassword = await password({
      message: "Enter your password ",
      mask: "*",
    });

    // 4. Поле с подтверждением (да/нет)
    const isConfirmed = await confirm({
      message: "Are you sure you want to continue?",
      //   default: false,
    });

    // Вывод введенных данных
    console.log("Name: ", name);
    console.log("Favorite color: ", color);
    console.log("Role: ", role);
    console.log("Are you sure you want to continue?", isConfirmed);
    console.log("Password: ", userPassword);
  } catch (error) {
    console.log("Error: ", error);
    console.log("Please try again");
  }
}

runCli();
