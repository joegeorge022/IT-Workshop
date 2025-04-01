---
layout: default
title: JavaScript Tutorial
---

<a href="../README.html" class="back-btn">← Back to Main Page</a>

# Introduction to JavaScript: Programming the Web

<div class="toc">
  <h2>Table of Contents</h2>
  <ul>
    <li><a href="#introduction-to-javascript-programming-the-web">Introduction to JavaScript</a></li>
    <li><a href="#basics-of-javascript">Basics of JavaScript</a>
      <ul>
        <li><a href="#1-adding-javascript-to-your-html">1. Adding JavaScript to HTML</a></li>
        <li><a href="#2-variables-and-data-types">2. Variables and Data Types</a></li>
        <li><a href="#3-basic-operations">3. Basic Operations</a></li>
        <li><a href="#4-functions">4. Functions</a></li>
        <li><a href="#5-conditional-statements">5. Conditional Statements</a></li>
        <li><a href="#6-looping-statements">6. Looping Statements</a></li>
        <li><a href="#7-event-handling">7. Event Handling</a></li>
      </ul>
    </li>
    <li><a href="#understand-and-learn">Practical Examples</a>
      <ul>
        <li><a href="#example-adding-two-numbers">Example 1: Adding Two Numbers</a></li>
        <li><a href="#example-finding-prime-numbers">Example 2: Finding Prime Numbers</a></li>
      </ul>
    </li>
    <li><a href="#learn-javascript-in-12-hours">Video Tutorial</a></li>
  </ul>
</div>

## Basics of JavaScript

JavaScript is a powerful, versatile language used for adding interactivity to websites. If you're just starting with web development, JavaScript is an essential tool in your toolkit. In this post, we’ll cover the basics of JavaScript, including how to add JavaScript to your HTML, basic syntax, variables, data types, functions, and event handling.

### 1. Adding JavaScript to Your HTML
You can add JavaScript directly into your HTML file. The simplest way is by using the `<script>` tag.

```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Basics</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <script>
        alert("Welcome to JavaScript!");
    </script>
</body>
</html>
```

In this example, the `alert()` function will display a pop-up message saying "Welcome to JavaScript!" as soon as the page loads. This method is great for testing simple scripts, but for larger projects, it’s better to link an external JavaScript file.

### 2. Variables and Data Types
Variables store information that can be used later in the program. In JavaScript, you can declare variables using `let`, `const`, or `var`.

#### Example: Declaring Variables
```javascript
let name = "Alice"; // A string
const age = 25; // A number
var isStudent = true; // A boolean
```

#### Explanation:
- `let` allows you to reassign the variable later, while `const` is used for values that shouldn’t change.
- `var` is an older way of declaring variables but is still used. Generally, use `let` and `const` in modern JavaScript.

#### Data Types
JavaScript supports several data types:
- **String**: Text data, e.g., "Hello"
- **Number**: Numeric data, e.g., 10
- **Boolean**: True or false, e.g., `true`
- **Array**: A list of items, e.g., `[1, 2, 3]`
- **Object**: A collection of key-value pairs, e.g., `{ name: "Alice", age: 25 }`

### 3. Basic Operations
You can perform operations like addition, subtraction, and concatenation.

```javascript
let x = 5;
let y = 10;
let sum = x + y; // 15
let greeting = "Hello" + " " + "World"; // "Hello World"
```

### 4. Functions
Functions allow you to define reusable code blocks.

#### Example: Basic Function
```javascript
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Output: Hello, Alice!
```

#### Explanation:
- `function` declares a function.
- Functions can take parameters (like `name` in this example) and return values.

### 5. Conditional Statements
Conditions allow you to make decisions in your code.

#### Example: If-Else Statement
```javascript
let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
```

### 6. Looping Statements
JavaScript provides several types of loops that allow you to execute code multiple times.

#### **1. for Loop**
```javascript
for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i);
}
```

#### **2. while Loop**
```javascript
let i = 0;
while (i < 5) {
    console.log("Iteration:", i);
    i++;
}
```

#### **3. do...while Loop**
```javascript
let i = 0;
do {
    console.log("Iteration:", i);
    i++;
} while (i < 5);
```

#### **4. for...of Loop**
```javascript
let numbers = [10, 20, 30];
for (let number of numbers) {
    console.log(number);
}
```

#### **5. for...in Loop**
```javascript
let person = { name: "Alice", age: 25 };
for (let key in person) {
    console.log(key + ": " + person[key]);
}
```

### 7. Event Handling
JavaScript is often used to handle events like clicks or key presses.

#### Example: Button Click Event
```html
<!DOCTYPE html>
<html>
<body>
    <button onclick="showMessage()">Click Me</button>
    <script>
        function showMessage() {
            alert("Button was clicked!");
        }
    </script>
</body>
</html>
```

In this example, clicking the button triggers the `showMessage()` function, which shows an alert.



# Understand and Learn

## Example: Adding Two Numbers

```html
<!DOCTYPE html>
<html>
<head>
    <title>Add Two Numbers</title>
</head>
<body>

    <h1>Add Two Numbers</h1>
    
    <input type="number" id="num1" placeholder="Enter first number">
    <br>
    <input type="number" id="num2" placeholder="Enter second number">
    <br>
    <button onclick="addNumbers()">Add</button>

    <h2 id="result"></h2>

    <script>
        function addNumbers() {
            // Get the values from the input fields
            let num1 = parseFloat(document.getElementById("num1").value);
            let num2 = parseFloat(document.getElementById("num2").value);
            
            // Check if the inputs are valid numbers
            if (isNaN(num1) || isNaN(num2)) {
                document.getElementById("result").innerText = "Please enter valid numbers.";
            } else {
                // Calculate the sum
                let sum = num1 + num2;
                
                // Display the result
                document.getElementById("result").innerText = "Sum: " + sum;
            }
        }
    </script>

</body>
</html>
```

### Explanation:

#### HTML Structure:
- There are two input fields for entering numbers and a button to trigger the addition.
- The result will be displayed in an `<h2>` element with the `id` `result`.

#### JavaScript Function `addNumbers()`:
- The function retrieves the values from the input fields, converts them to numbers using `parseFloat()`, and checks if they are valid numbers.
- If valid, it calculates the sum and displays the result in the `<h2>` element.
- If invalid, it displays an error message asking for valid numbers.

---

## Example: Finding Prime Numbers

```html
<!DOCTYPE html>
<html>
<head>
    <title>Prime Numbers</title>
</head>
<body>

    <h1>Prime Number Finder</h1>

    <p>Enter a number:</p>
    <input type="number" id="num" placeholder="Enter N">
    <button onclick="findPrimes()">Show Prime Numbers</button>

    <h2>Prime Numbers:</h2>
    <p id="result"></p>

    <script>
        function isPrime(number) {
            if (number <= 1) return false;
            for (let i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) {
                    return false;
                }
            }
            return true;
        }

        function findPrimes() {
            let num = parseInt(document.getElementById("num").value);
            let primes = [];

            for (let i = 2; i <= num; i++) {
                if (isPrime(i)) {
                    primes.push(i);
                }
            }

            document.getElementById("result").innerText = primes.join(", ");
        }
    </script>

</body>
</html>
```

### Explanation:

#### HTML Structure:
- An input field to enter the maximum number.
- A button that, when clicked, calls the `findPrimes()` function to display prime numbers.
- A `<p>` element with the `id` `result` to show the output.

#### JavaScript Functions:
- **`isPrime(number)`**: Checks if a number is prime by seeing if it has any divisors other than 1 and itself.
- **`findPrimes()`**:
  - Retrieves the user's input.
  - Iterates through numbers from `2` up to the entered number.
  - Calls `isPrime(i)` for each number. If `isPrime(i)` returns `true`, the number is added to the `primes` array.
  - Displays the list of prime numbers in the `<p id="result">` element.

## Learn JavaScript in 12 Hours

Here’s a video tutorial:

<div class="video-container">
    <iframe width="1031" height="580" src="https://www.youtube.com/embed/lfmg-EJ8gm4" 
    title="JavaScript Full Course for free 🌐 (2024)" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
    </iframe>
</div>


<style>
    .back-btn {
  display: inline-block;
  background-color: #f1f1f1;
  color: #333;
  padding: 6px 12px;
  text-decoration: none;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 14px;
}

.back-btn:hover {
  background-color: #ddd;
  text-decoration: none;
}

.video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
    background: #000;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    margin: 20px auto;
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
}

.toc {
  background-color: #f8f9fa;
  border: 1px solid #eaecef;
  border-radius: 8px;
  padding: 15px 20px;
  margin: 20px 0;
}

.toc h2 {
  margin-top: 0;
  font-size: 1.2rem;
}

.toc ul {
  padding-left: 20px;
}

.toc a {
  text-decoration: none;
  color: #0366d6;
}

.toc a:hover {
  text-decoration: underline;
}
</style>