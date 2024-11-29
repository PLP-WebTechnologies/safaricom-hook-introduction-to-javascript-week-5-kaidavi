// Part 1: JavaScript Basics

// Variables and Data Types
let name = "John Doe";
let age = 25;
let isStudent = true;
let hobbies = ["reading", "gaming", "coding"];
let user = {
    name: "John Doe",
    age: 25,
    isStudent: true
};

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`User: ${JSON.stringify(user)} (Type: ${typeof user})`);

// Operators: Simple Calculator
function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
        return;
    }

    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation! Please choose +, -, *, or /.");
            return;
    }

    document.getElementById("result").textContent = `Result: ${result}`;
}

calculator();

// Functions: Greet User
function greetUser(name) {
    return `Hello, ${name}! Welcome to the JavaScript world.`;
}

document.getElementById("result").textContent = greetUser(name);

// Part 2: JavaScript Control Structures

// If Statements: Voting Eligibility
let userAge = parseInt(prompt("Enter your age:"));
if (userAge >= 18) {
    document.getElementById("voting-eligibility").textContent = "You are eligible to vote.";
} else {
    document.getElementById("voting-eligibility").textContent = "You are not eligible to vote.";
}

// Loops: Display Numbers 1 to 10
let numberList = document.getElementById("number-list");
for (let i = 1; i <= 10; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = i;
    numberList.appendChild(listItem);
}

// Part 3: Introduction to the DOM

// Creating HTML Structure and Modifying Elements
document.querySelector("h1").textContent = "JavaScript in Action!";
let dynamicContent = document.getElementById("dynamic-content");
let newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
dynamicContent.appendChild(newParagraph);
