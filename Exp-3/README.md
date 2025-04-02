---
layout: default
title: Experiment 3 - Image Slider
---

<a href="../README.html" class="back-btn" >← Back to Main Page</a>

# Experiment 3: Create an image slider using HTML, CSS, and JavaScript

This experiment demonstrates how to build an interactive image gallery with slider functionality.

## Overview

In this experiment, we created an image gallery with the following features:
- Grid layout for thumbnail display
- Modal view for enlarged images
- Previous and next navigation controls
- Keyboard navigation support
- Smooth transitions and animations

## Implementation

The implementation is contained in a single HTML file that includes:
- HTML structure for the gallery and modal
- CSS styling for responsive layout and animations
- JavaScript for interactivity and navigation

## Key Features

- Click on any image to view it in a modal
- Navigate between images using arrow buttons
- Close the modal by clicking outside or pressing ESC
- Keyboard navigation with arrow keys
- Responsive design that works on different screen sizes

## How to Run

1. Clone this repository
2. Navigate to the Exp-3 directory
3. Open index.html in your browser
4. Make sure the image files (1.jpg, 2.jpg, etc.) are in the same directory

## Preview

The gallery displays images in a grid, and when an image is clicked, it opens in a full-screen modal with navigation controls.

## View Implementation

👉 <a href="index.html" target="_blank">See the live implementation</a> of this image gallery.

<div class="experiment-nav">
  <a href="#" onclick="checkNavAccess(1); return false;" class="nav-btn">Exp-1</a>
  <a href="#" onclick="checkNavAccess(2); return false;" class="nav-btn">Exp-2</a>
  <span class="nav-disabled">Exp-3</span>
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
<link rel="stylesheet" href="../css/chatbot.css">
<script src="../js/chatbot.js"></script>