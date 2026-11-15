const title = document.querySelector("#shopTitle");
console.log(title.textContent)

title.textContent = "My Apple Store"
title.classList.add("highlight")

title.classList.remove("highlight")

title.classList.toggle("highlight") // переключает класс. Нет - добавит. Есть - удалит
title.classList.toggle("highlight")