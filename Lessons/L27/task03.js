// Имитация базы данных
const user = {
  name: "Alex",
  role: "USER",
};

const admin = {
  name: "John",
  role: "ADMIN",
};

const manager = {
  name: "Jack",
  role: "MANAGER",
};

const product = {
  title: "Apple",
  price: 0.65,
};

function updateProduct(product, newPrice, user) {
    if (canUpdate(user)){
        product.price = newPrice;
    } else {
        console.log("Операция запрещена");        
    }
}

// Версия 1 - не очень удачная (много if, будет долго, если много пользователей)
function canUpdate1(user) {
  if (user.role === "ADMIN") return true;
  if (user.role === "MANAGER") return true;

  return false;
}

// Версия 2 - чуть лучше
function canUpdate2(user) {
  if (user.role === "ADMIN" || user.role === "MANAGER") return true;

  return false;
}

// Сторонний framework
// Версия 3 - самая хорошая
function canUpdate(user) {
  return ["ADMIN", "MANAGER"].includes(user.role);
}

console.log(product);

console.log("-----User-----")
updateProduct(product, 0.75, user);
console.log(product)

console.log("-----Manager-----")
updateProduct(product, 0.85, manager)
console.log(product);
