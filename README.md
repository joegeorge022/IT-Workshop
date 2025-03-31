---
layout: default
title: IT Workshop
---

# IT Workshop

Welcome to the IT Workshop repository. This project contains three experiments that demonstrate basic web development concepts.

## 📋 Experiments

### Experiment 1: Create a web page and deploy on a local web server

Learn how to create a basic web page with HTML and CSS and deploy it on a local web server.

<a href="Exp-1/README.html" class="btn" >View Experiment 1</a>

### Experiment 2: Use JavaScript to validate forms

Implement client-side form validation using JavaScript to enhance user experience and data integrity.

<a href="Exp-2/README.html" class="btn" >View Experiment 2</a>

### Experiment 3: Create an image slider using HTML, CSS, and JavaScript

Build an interactive image slider/gallery with navigation controls using HTML, CSS, and JavaScript.

<a href="Exp-3/README.html" class="btn" >View Experiment 3</a>

## 📚 Learning Resources

<div class="resources">
  <div class="resource">
    <i class="fab fa-html5 resource-icon"></i>
    <h3>HTML</h3>
    <p>Learn the fundamentals of HTML to structure web content</p>
    <a href="https://www.w3schools.com/html/" target="_blank" class="btn">Learn HTML</a>
  </div>
  
  <div class="resource">
    <i class="fab fa-css3-alt resource-icon"></i>
    <h3>CSS</h3>
    <p>Master CSS to style and layout your web pages effectively</p>
    <a href="https://www.w3schools.com/css/" target="_blank" class="btn">Learn CSS</a>
  </div>
  
  <div class="resource">
    <i class="fab fa-js resource-icon"></i>
    <h3>JavaScript</h3>
    <p>Explore JavaScript to add interactivity to your websites</p>
    <a href="https://www.w3schools.com/js/" target="_blank" class="btn">Learn JavaScript</a>
  </div>
</div>

## 👨‍💻 Contributors

<div class="contributors">
    <div class="contributor-card">
    <img src="https://github.com/Ananthan-didnot.png" alt="Ananthakrishnan K V" class="contributor-img">
    <h3>Ananthakrishnan K V</h3>
    <a href="https://github.com/Ananthan-didnot" target="_blank" class="contributor-link">
      <i class="fab fa-github"></i> View Profile
    </a>
  </div>
  
  <div class="contributor-card">
    <img src="https://github.com/joegeorge022.png" alt="Joe George" class="contributor-img">
    <h3>Joe George</h3>
    <a href="https://github.com/joegeorge022/" target="_blank" class="contributor-link">
      <i class="fab fa-github"></i> View Profile
    </a>
  </div>
  
</div>

<br>

<div class="footer">
  <p>&copy; 2025 IT Workshop | All Rights Reserved</p>
</div>

<style type="text/css">
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
    text-decoration: none;
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
    text-align: center;
    position: relative;
    padding-top: 40px;
  }
  
  .resource-icon {
    font-size: 2.5rem;
    margin-bottom: 15px;
  }
  
  .resource:nth-child(1) .resource-icon {
    color: #E34F26;
  }
  
  .resource:nth-child(2) .resource-icon {
    color: #1572B6;
  }
  
  .resource:nth-child(3) .resource-icon {
    color: #F7DF1E;
  }
  
  .contributors {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    margin: 30px auto;
    max-width: 800px;
  }
  
  .contributor-card {
    width: 250px;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .contributor-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  }
  
  .contributor-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 15px;
    border: 3px solid #3498db;
    transition: transform 0.4s ease-in-out, border-color 0.4s ease;
  }
  
  .contributor-card:hover .contributor-img {
    transform: scale(1.05);
    border-color: #2980b9;
  }
  
  .contributor-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    text-decoration: none !important;
    color: #333;
    font-weight: bold;
    padding: 8px 16px;
    background-color: #f1f1f1;
    border-radius: 25px;
    transition: all 0.3s ease;
    width: 80%;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .contributor-link i {
    margin-right: 8px;
    font-size: 1.2rem;
  }
  
  .contributor-link:hover {
    background-color: #333;
    color: white;
    transform: translateY(0);
    box-shadow: 0 3px 6px rgba(0,0,0,0.15);
    text-decoration: none !important;
  }
  
  .footer {
    text-align: center;
    margin: 40px auto 20px;
    padding-top: 20px;
    border-top: 1px solid #eee;
    max-width: 800px;
  }
  
  @media (max-width: 768px) {
    .resources, .contributors {
      flex-direction: column;
      align-items: center;
    }
    
    .contributor-card {
      width: 85%;
      max-width: 300px;
      margin: 0 auto 20px;
    }
    
    .resource {
      width: 85%;
      max-width: 300px;
      margin-bottom: 20px;
    }
    
    .footer {
      width: 90%;
      padding: 0 15px;
    }
  }
</style>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
