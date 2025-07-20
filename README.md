# 🧾 Form Validation & Object Display Demo

This project is a mini web app that demonstrates:

- Real-time **form validation** using **JavaScript and Regular Expressions (RegExp)**
- Dynamic creation of user information cards (name, surname, age)
- Use of JavaScript object properties, methods, and array iteration

---

## 📌 Features

- Validates user inputs for:
  - Name (capital letter, 2–6 letters)
  - Surname (capital letter, 2–10 letters)
  - Username (1–5 characters)
  - Age (numeric only)
  - Phone (Armenian format: `+374-XX-XXX-XXX`)
- Displays a set of user cards using `div` columns
- Demonstrates working with JavaScript objects and functions
- Includes tests for RegExp matching and object methods in `console.log`

---

## 🛠️ Technologies Used

- HTML5  
- CSS3  
- JavaScript (DOM Manipulation + RegExp + Objects)

---

## 🔍 What is RegExp (Regular Expression)?

**Regular Expressions (RegExp)** are powerful patterns used to **search or validate strings**.  
In this project, RegExp is used to validate form fields like name, email, phone number, etc.

### Example: Email Validation

```js
let email = 'vladislav_2023@gmail.com';
let pattern = /^[\w.-]+@[\w-]+\.[a-z]{2,4}$/i;
console.log(pattern.test(email)); // true

.Example: Armenian Phone Number Validation
js
let phone = '+374-94-123-456';
let regPhone = /^\+374-\d{2}-\d{3}-\d{3}$/;
console.log(regPhone.test(phone)); // true

📁 How to Use
Clone the repository:

bash

git clone https://github.com/YourUsername/your-repo-name.git
cd your-repo-name
Open index.html in your browser.

Fill out the form to see validation in action and check the console for object method results.



