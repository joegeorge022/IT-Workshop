---
layout: default
title: Experiment 1 - Web Page Creation
---

<a href="../README.html" class="back-btn" target="_blank">← Back to Main Page</a>

# Experiment 1: Create a web page and deploy on a local web server

This experiment demonstrates how to create a simple login page using HTML and CSS and deploy it on a local web server.

## Overview

In this experiment, we created a basic login form with the following features:
- Clean, responsive design
- Input fields for email and password
- Submit button with hover effects
- Proper HTML structure and CSS styling

## Implementation

The implementation consists of two main files:
- `index.html`: Contains the HTML structure of the login form
- `styles.css`: Contains all the styling for the login page

## How to Run

1. Clone this repository
2. Navigate to the Exp-1 directory
3. Open index.html in your browser or set up a local server

## Preview

When properly rendered, the login form appears centered on the page with a clean white background and blue accent colors.

## View Implementation

👉 <a href="index.html" target="_blank">See the live implementation</a> of this login page.

<div class="experiment-nav">
  <span class="nav-disabled">Exp-1</span>
  <a href="../Exp-2/README.html" class="nav-btn" >Exp-2</a>
  <a href="../Exp-3/README.html" class="nav-btn" >Exp-3</a>
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
</style>