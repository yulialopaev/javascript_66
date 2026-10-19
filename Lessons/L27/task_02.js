// My application
function deleteProduct(productTitle, user) {
  if (canDelete(user)) {
    console.log(`${productTitle} успешно удалён`);
  } else {
    console.log("Операция запрещена!");
  }
}

// Имитация стороннего framework для 
// авторизации и аутентификации пользователей
function canDelete(user) {
  return user.role === "ADMIN";
}

// Имитация базы данных
const user = {
  name: "Alex",
  role: "USER",
};

const admin = {
  name: "John",
  role: "ADMIN",
};

// Вызов аппликации
deleteProduct('Banana', admin)
deleteProduct('Cheese', user)
