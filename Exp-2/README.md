---
layout: default
title: Experiment 2 - Form Validation
---

<a href="../README.html" class="back-btn" target="_blank">← Back to Main Page</a>

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

👉 [See the live implementation](index.html) of this form validation example.

{% unless site.github %}
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
}
</style>
{% endunless %}