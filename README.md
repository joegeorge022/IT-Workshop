---
layout: default
title: IT Workshop
---

# IT Workshop

Welcome to the IT Workshop repository. This project contains three experiments that demonstrate basic web development concepts.

## 📋 Experiments

### Experiment 1: Create a web page and deploy on a local web server

Learn how to create a basic web page with HTML and CSS and deploy it on a local web server.

<a href="Exp-1/README.html" class="btn" target="_blank">View Experiment 1</a>

### Experiment 2: Use JavaScript to validate forms

Implement client-side form validation using JavaScript to enhance user experience and data integrity.

<a href="Exp-2/README.html" class="btn" target="_blank">View Experiment 2</a>

### Experiment 3: Create an image slider using HTML, CSS, and JavaScript

Build an interactive image slider/gallery with navigation controls using HTML, CSS, and JavaScript.

<a href="Exp-3/README.html" class="btn" target="_blank">View Experiment 3</a>

## 📚 Learning Resources

<div class="resources">
  <div class="resource">
    <h3>HTML</h3>
    <p>Learn the fundamentals of HTML to structure web content</p>
    <a href="https://www.w3schools.com/html/" target="_blank" class="btn">Learn HTML</a>
  </div>
  
  <div class="resource">
    <h3>CSS</h3>
    <p>Master CSS to style and layout your web pages</p>
    <a href="https://www.w3schools.com/css/" target="_blank" class="btn">Learn CSS</a>
  </div>
  
  <div class="resource">
    <h3>JavaScript</h3>
    <p>Explore JavaScript to add interactivity to your websites</p>
    <a href="https://www.w3schools.com/js/" target="_blank" class="btn">Learn JavaScript</a>
  </div>
</div>

<br>

<div class="footer">
  <div class="badges">
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"><img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5"></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"><img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3"></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript"></a>
  </div>
  <p>&copy; 2025 IT Workshop | All Rights Reserved</p>
</div>

{% unless site.github %}
<style>
  .btn {
    display: inline-block;
    background-color: #3498db;
    color: white;
    padding: 8px 16px;
    margin: 10px 0;
    text-decoration: none;
    border-radius: 4px;
    font-weight: bold;
  }
  
  .btn:hover {
    background-color: #2980b9;
  }
  
  .resources {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 30px 0;
  }
  
  .resource {
    flex: 1;
    min-width: 250px;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
  }
  
  .footer {
    margin-top: 40px;
    padding-top: 20px;
    border-top: 1px solid #eee;
    text-align: center;
  }
  
  .badges {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 15px;
  }
  
  @media (max-width: 768px) {
    .resources {
      flex-direction: column;
    }
  }
</style>
{% endunless %}