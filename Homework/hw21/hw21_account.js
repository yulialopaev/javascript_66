/* ### 2.ADV****  Как обязательная на понедельник 31.08.2026
a)
Создай функцию-конструктор объектов Account(iban,owner, balance),
которая возвращает объект с:
- номер счета (iban)
- именем владельца (owner)
- балансом (balance)  
методами:
- **deposit**(amount) — пополнение счёта
- **withdraw**(amount) — снятие денег (если хватает баланса)
- **getBalance**() — вывод текущего баланса
*/

console.log("==========a==========");
function Account(iban, owner, balance) {
  this.iban = iban;
  this.owner = owner;
  this.balance = balance;
  this.deposit = (amount) => (this.balance += amount);
  this.withdraw = (amount) => {
    if (this.balance >= amount) {
      this.balance -= amount;
      return true;
    } else {
      return false;
    }
  };
  this.getBalance = () => this.balance;
}

// Создайте несколько объектов счетов.
const account1 = new Account(325687963241, "Sandor Clegane", 1000);
const account2 = new Account(365986312456, "Cersei Lannister", 500);
const account3 = new Account(652341689523, "Petyr Baelish", 2000);
const account4 = new Account(123456789012, "Daenerys Targaryen", 3000);
const account5 = new Account(952314658974, "Ned Stark", 4000);

console.log(account1); // balance = 1000
account1.deposit(450);
console.log(account1.getBalance()); // -> 1450
account1.withdraw(50);
console.log(account1.getBalance()); // -> 1400
account1.withdraw(1500); // -> fail
console.log(account1.getBalance()); // -> 1400

// Создайте массив из счетов.
const accounts = [account1, account2, account3, account4, account5];

// Выведите информацию обо всех счетах в консоль
function printAccounts(array) {
  array.forEach((account, i) => {
    console.log(`Account ${i + 1}`);
    console.log(`    iban: ${account.iban}`);
    console.log(`    owner: ${account.owner}`);
    console.log(`    balance: ${account.getBalance()}`);
    console.log("-------------------------");
  });
}

printAccounts(accounts);

/*
b) напишите функцию, transfer, которая получает два счета,
и выполняет перевод между счетами вызывая методы deposit и
withdraw соответственно.
*/

console.log("==========b==========");
function transfer(from, to, amount) {
  if (from.withdraw(amount)) {
    to.deposit(amount)
  }
  else return
  
}

transfer(account1, account2, 99);
console.log(account1.getBalance());
console.log(account2.getBalance());

transfer(account1, account2, 1500);
console.log(account1.getBalance());
console.log(account2.getBalance());

/* 
с) (чуть сложнее****************)
 В качестве результата функции transfer, в случае успешной
операции, должен cформироваться объект:
- account1 (счет списания),
- account2 (счет зачисления),
- amount (сумма)
- transactionInfo() (функция, которая выводит информацию о транзакции)  
 
Если транзакция прошла неуспешно, объект должен содержать
еще и поле error c информацией об ошибке. Естественно,
transactionInfo() должна в этом случае выводить информацию
о неуспешной транзакции. В случае, если транзакция успешна,
поля error не должно быть.
 
*/

console.log("==========c==========");

function transferPro(from, to, amount) {
  if (!from.withdraw(amount)) {
    return {
      account1: from.iban,
      account2: to.iban,
      amount: amount,
      error: "Недостаточно средств",
      transactionInfo: () =>
        `Не удалось списать со счёта ${from.iban} сумму ${amount}. Недостаточно средств. Баланс: ${from.getBalance()}`,
    };
  } else {
    to.deposit(amount);
    return {
      account1: from.iban,
      account2: to.iban,
      amount: amount,
      transactionInfo: () =>
        `Перевод со счёта ${from.iban} на счёт ${to.iban} на ${amount}. Новый баланс: ${from.getBalance()} и ${to.getBalance()}`,
    };
  }
}

const transaction1 = transferPro(account3, account4, 543); // success
console.log(transaction1);
console.log(transaction1.transactionInfo()); // -> Перевод со счёта 652341689523 на счёт 123456789012 на 543. Новый баланс: 1457 и 3543

const transaction2 = transferPro(account2, account5, 800); // fail
console.log(transaction2);
console.log(transaction2.transactionInfo()); // -> Не удалось списать со счёта 365986312456 сумму 800. Недостаточно средств. Баланс: 599

console.log(account2.getBalance()); // -> 599
console.log(account5.getBalance()); // -> 4000
