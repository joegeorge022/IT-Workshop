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

## Key Features

- Real-time validation as users type
- Form submission is prevented if validation fails
- Clear error messages guide users to correct their input
- Regular expression pattern matching for email validation

## How to Run

1. Clone this repository
2. Navigate to the Exp-2 directory
3. Open index.html in your browser

## Preview

The form looks similar to Experiment 1 but includes validation feedback when users attempt to submit invalid data.

## View Implementation

👉 <a href="index.html" target="_blank">See the live implementation</a> of this form validation example.

<div class="experiment-nav">
  <a href="#" onclick="checkNavAccess(1); return false;" class="nav-btn">Exp-1</a>
  <span class="nav-disabled">Exp-2</span>
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
</script>