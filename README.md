---
layout: default
title: IT Workshop
---

# IT Workshop

Welcome to the IT Workshop repository. This project contains three experiments that demonstrate basic web development concepts.

## 📋 Experiments

<div class="experiments-container">
  <div class="experiment-card">
    <h3>Experiment 1</h3>
    <h4>Create a web page and deploy on a local web server</h4>
    <p>Learn how to create a basic web page with HTML and CSS and deploy it on a local web server.</p>
    <a href="Exp-1/README.html" class="button button-primary">Explore Experiment 1 →</a>
  </div>
  
  <div class="experiment-card">
    <h3>Experiment 2</h3>
    <h4>Use JavaScript to validate forms</h4>
    <p>Implement client-side form validation using JavaScript to enhance user experience and data integrity.</p>
    <a href="Exp-2/README.html" class="button button-primary">Explore Experiment 2 →</a>
  </div>
  
  <div class="experiment-card">
    <h3>Experiment 3</h3>
    <h4>Create an image slider using HTML, CSS, and JavaScript</h4>
    <p>Build an interactive image slider/gallery with navigation controls using HTML, CSS, and JavaScript.</p>
    <a href="Exp-3/README.html" class="button button-primary">Explore Experiment 3 →</a>
  </div>
</div>

<style>
.experiments-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin: 30px 0;
}

.experiment-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  padding: 25px;
  width: 300px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.experiment-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.1);
}

.experiment-card h3 {
  color: #2c3e50;
  margin-top: 0;
}

.experiment-card h4 {
  color: #3498db;
  margin-top: 10px;
  font-weight: 600;
}

.button {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 15px;
  transition: all 0.3s ease;
}

.button-primary {
  background: #3498db;
  color: white;
}

.button-primary:hover {
  background: #2980b9;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.learning-section {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 30px;
  margin: 40px 0;
}

.learning-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.learning-item {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.learning-item h3 {
  margin-top: 0;
  color: #2c3e50;
}

.footer {
  margin-top: 50px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  text-align: center;
}

.tech-badges {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 15px;
}
</style>

## 📚 Learning Resources

<div class="learning-section">
  <div class="learning-grid">
    <div class="learning-item">
      <h3>HTML</h3>
      <p>Learn the fundamentals of HTML to structure web content</p>
      <a href="https://www.w3schools.com/html/" target="_blank" class="button button-primary">Learn HTML</a>
    </div>
    
    <div class="learning-item">
      <h3>CSS</h3>
      <p>Master CSS to style and layout your web pages</p>
      <a href="https://www.w3schools.com/css/" target="_blank" class="button button-primary">Learn CSS</a>
    </div>
    
    <div class="learning-item">
      <h3>JavaScript</h3>
      <p>Explore JavaScript to add interactivity to your websites</p>
      <a href="https://www.w3schools.com/js/" target="_blank" class="button button-primary">Learn JavaScript</a>
    </div>
  </div>
</div>

<div class="footer">
  <div class="tech-badges">
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5"></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3"></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript"></a>
  </div>
  <p>&copy; 2025 IT Workshop | All Rights Reserved</p>
</div>
