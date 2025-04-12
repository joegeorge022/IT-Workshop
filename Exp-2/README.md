---
layout: default
title: Experiment 2 - Form Validation
---

<a href="../README.html" class="back-btn" >← Back to Main Page</a>

# Experiment 2: Use JavaScript to validate forms

This experiment demonstrates how to implement client-side form validation using JavaScript.

## Overview

In this experiment, we enhanced a basic login form with JavaScript validation to:
- Validate email format using regular expressions
- Ensure password meets minimum length requirements
- Provide immediate feedback to users
- Prevent form submission if validation fails

## Implementation

The implementation consists of three main files:
- `index.html`: Contains the HTML structure of the login form
- `styles.css`: Contains all the styling for the login page
- `script.js`: Contains the JavaScript validation logic

### JavaScript Code (script.js)
```javascript
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const email = form.email.value.trim();
        const password = form.password.value.trim();
        let isValid = true;
        
        if (email === "") {
            alert("Email is required.");
            isValid = false;
        }

        else if (!validateEmail(email)) {
           alert("Please enter a valid email address.");
            isValid = false;
        }

        if (password === "") {
            alert("Password is required.");
            isValid = false;
        }

        else if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            isValid = false;
        }

        
        if (isValid) {
            alert("Login successful!");
            form.submit();
        }
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
```

### HTML Code (index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="login-container">
        <h2>Login</h2>
        <form>
            <div class="form-group">
                <label for="email">Email</label>
                <input  type="email" name="email" required >
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit" class="login-button">Login</button>
        </form>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### CSS Code (styles.css)

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}
.login-container {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 300px;
}   
.login-container h2 {
    margin-bottom: 20px;
    text-align: center;
}
.form-group {
    margin-bottom: 15px;
}
.form-group label {
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
}
.form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
.login-button {
    width: 100%;
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.login-button:hover {
    background-color: #0056b3;
}
```


## Preview

The form looks similar to Experiment 1 but includes validation feedback when users attempt to submit invalid data.

## View Implementation

👉 <a href="index.html" target="_blank">See the live implementation</a> of this form validation example.

<div class="experiment-nav">
  <a href="../Exp-1/README.html" class="nav-btn">Exp-1</a>
  <span class="nav-disabled">Exp-2</span>
  <a href="../Exp-3/README.html" class="nav-btn">Exp-3</a>
</div>

<style type="text/css">
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

.experiment-nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
}

.nav-btn {
  display: inline-block;
  background-color: #3498db;
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
}

.nav-btn:hover {
  background-color: #2980b9;
  text-decoration: none;
}

.nav-disabled {
  display: inline-block;
  background-color: #e0e0e0;
  color: #999;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: bold;
  cursor: not-allowed;
}

.code-container {
  position: relative;
}

.copy-btn {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: #f1f1f1;
  border: none;
  border-radius: 4px;
  padding: 5px 8px;
  font-size: 12px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.copy-btn:hover {
  opacity: 1;
  background-color: #e0e0e0;
}

.copy-btn:active {
  background-color: #d0d0d0;
}

.copy-success {
  background-color: #4CAF50 !important;
  color: white;
}
</style>

<link rel="stylesheet" href="../css/chatbot.css">
<script src="../js/chatbot.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('pre').forEach(function(pre) {
    const container = document.createElement('div');
    container.className = 'code-container';
    
    const button = document.createElement('button');
    button.className = 'copy-btn';
    button.textContent = 'Copy';
    
    button.addEventListener('click', function() {
      const code = pre.textContent;
      navigator.clipboard.writeText(code).then(function() {
        button.textContent = 'Copied!';
        button.classList.add('copy-success');
        
        setTimeout(function() {
          button.textContent = 'Copy';
          button.classList.remove('copy-success');
        }, 2000);
      });
    });
    
    pre.parentNode.insertBefore(container, pre);
    container.appendChild(pre);
    
    container.appendChild(button);
  });
});
</script>
