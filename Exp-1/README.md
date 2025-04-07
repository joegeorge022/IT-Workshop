---
layout: default
title: Experiment 1 - Web Page Creation
---

<a href="../README.html" class="back-btn" >← Back to Main Page</a>

# Experiment 1: Create a web page and deploy on a local web server

This experiment demonstrates how to create a simple login page using HTML and CSS and deploy it on a local web server.

## Implementation

The implementation consists of two main files:
- `index.html`: Contains the HTML structure of the login form
- `styles.css`: Contains all the styling for the login page

### HTML Code

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
</body>
</html>
```
Above HTML code as XHTML Code is given below👇👇👇


### XHTML Code (KTU Code)

```xhtml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" 
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <meta http-equiv="Content-Type" content="application/xhtml+xml; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login Page</title>
    <link rel="stylesheet" href="styles.css" />
</head>
<body>
    <div class="login-container">
        <h2>Login</h2>
        <form action="#" method="post">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required="required" />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required="required" />
            </div>
            <button type="submit" class="login-button">Login</button>
        </form>
    </div>
</body>
</html>

```

### CSS Code

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

When properly rendered, the login form appears centered on the page with a clean white background and blue accent colors.

## View Implementation

👉 <a href="index.html" target="_blank">See the live implementation</a> of this login page.

<div class="experiment-nav">
  <span class="nav-disabled">Exp-1</span>
  <a href="#" onclick="checkNavAccess(2); return false;" class="nav-btn">Exp-2</a>
  <a href="#" onclick="checkNavAccess(3); return false;" class="nav-btn">Exp-3</a>
</div>

<div id="password-prompt" class="password-prompt" style="display: none;">
  <h3>Enter Password</h3>
  <div class="password-form">
    <input type="password" id="exp-password" class="password-input" placeholder="Enter experiment password">
    <button onclick="submitPassword()" class="password-submit">Submit</button>
    <p><a href="#" onclick="cancelPassword(); return false;">Cancel</a></p>
  </div>
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

.password-prompt {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  text-align: center;
  max-width: 400px;
  width: 90%;
}

.password-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.password-submit {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.password-submit:hover {
  background-color: #2980b9;
}
</style>

<script>
function checkNavAccess(expNumber) {
  if (localStorage.getItem(`exp-${expNumber}-access`) === "granted") {
    window.location.href = `../Exp-${expNumber}/README.html`;
  } else {
    document.getElementById('password-prompt').style.display = 'block';
    localStorage.setItem('target-exp', expNumber);
  }
}

function submitPassword() {
  const password = document.getElementById('exp-password').value;
  const targetExp = localStorage.getItem('target-exp');
  const passwords = {
    1: "html2025",
    2: "js2025",
    3: "gallery2025"
  };
  
  if (password === passwords[targetExp]) {
    localStorage.setItem(`exp-${targetExp}-access`, "granted");
    window.location.href = `../Exp-${targetExp}/README.html`;
  } else {
    alert("Incorrect password. Please try again.");
  }
}

function cancelPassword() {
  document.getElementById('password-prompt').style.display = 'none';
  localStorage.removeItem('target-exp');
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
<link rel="stylesheet" href="../css/chatbot.css">
<script src="../js/chatbot.js"></script>
