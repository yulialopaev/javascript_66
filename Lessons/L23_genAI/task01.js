let password = "12345"; // пароли в коде не хранятся НИКОГДА!!!!!!
let userPassword = "12345";

if (password === userPassword) {
  console.log("Passwords match");
} else {
  console.log("Passwords do not match");
}

// Environment variables
const apiKey = process.env.PASS1;
console.log(apiKey);

const geminiKey = process.env.GEMINI_API_KEY;
console.log(geminiKey);
