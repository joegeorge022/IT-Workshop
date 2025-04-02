---
layout: default
title: IT Workshop
---

# IT Workshop

Welcome to the IT Workshop repository. This project contains three experiments that demonstrate basic web development concepts.

<div class="download-section">
  <a href="files/syllabus.pdf" download class="download-btn">
    <i class="fas fa-download"></i> Download Syllabus
  </a>
</div>

## 📝 Tutorials

<div class="tutorials-container">
  <div class="tutorial-card">
    <i class="fab fa-html5 tutorial-icon"></i>
    <h3>HTML Tutorial</h3>
    <p>Learn the fundamentals of HTML, the building blocks of web pages.</p>
    <a href="tutorial/html.html" class="tutorial-btn">
      <i class="fas fa-book"></i> View Tutorial
    </a>
  </div>
  
  <div class="tutorial-card">
    <i class="fab fa-css3-alt tutorial-icon"></i>
    <h3>CSS Tutorial</h3>
    <p>Master CSS to style and layout your web pages effectively.</p>
    <a href="tutorial/css.html" class="tutorial-btn">
      <i class="fas fa-book"></i> View Tutorial
    </a>
  </div>
  
  <div class="tutorial-card">
    <i class="fab fa-js tutorial-icon"></i>
    <h3>JavaScript Tutorial</h3>
    <p>Explore JavaScript to add interactivity to your websites.</p>
    <a href="tutorial/js.html" class="tutorial-btn">
      <i class="fas fa-book"></i> View Tutorial
    </a>
  </div>
</div>

## 📋 Experiments
### Experiment 1: Create a web page and deploy on a local web server


Learn how to create a basic web page with HTML and CSS and deploy it on a local web server.

<div class="protected-content">
  <form id="password-form-1" class="password-form" onsubmit="return checkPassword(1)">
    <input type="password" id="password-1" class="password-input" placeholder="Enter password to view">
    <button type="submit" class="password-submit">Access Experiment 1</button>
  </form>
</div>

### Experiment 2: Use JavaScript to validate forms

Implement client-side form validation using JavaScript to enhance user experience and data integrity.

<div class="protected-content">
  <form id="password-form-2" class="password-form" onsubmit="return checkPassword(2)">
    <input type="password" id="password-2" class="password-input" placeholder="Enter password to view">
    <button type="submit" class="password-submit">Access Experiment 2</button>
  </form>
</div>

### Experiment 3: Create an image slider using HTML, CSS, and JavaScript

Build an interactive image slider/gallery with navigation controls using HTML, CSS, and JavaScript.

<div class="protected-content">
  <form id="password-form-3" class="password-form" onsubmit="return checkPassword(3)">
    <input type="password" id="password-3" class="password-input" placeholder="Enter password to view">
    <button type="submit" class="password-submit">Access Experiment 3</button>
  </form>
</div>

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

## 👩‍🏫 Teachers

<div class="teachers">
  <div class="teacher-card">
    <img src="files/anu.jpg" alt="Anu V Kottath" class="teacher-img">
    <h3>Anu V Kottath</h3>
    <p class="teacher-role">Assistant Professor</p>
  </div>
  
  <div class="teacher-card">
    <img src="files/subini.jpg" alt="Subini Therese Babu" class="teacher-img">
    <h3>Subini Therese Babu</h3>
    <p class="teacher-role">Assistant Professor</p>
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
  
  .download-section {
    text-align: center;
    margin: 20px 0;
  }
  
  .download-btn {
    display: inline-block;
    background-color: #27ae60;
    color: white;
    padding: 10px 20px;
    margin: 10px 0;
    text-decoration: none;
    border-radius: 4px;
    font-weight: bold;
    transition: background-color 0.3s ease;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
  
  .download-btn:hover {
    background-color: #219653;
    text-decoration: none;
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    transform: translateY(-2px);
  }
  
  .download-btn i {
    margin-right: 8px;
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
  
  .download-section {
    text-align: center;
    margin: 20px 0;
  }
  
  .protected-content {
    position: relative;
    background-color: #f8f9fa;
    border-radius: 8px;
    padding: 20px;
    margin: 20px 0;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
  
  .password-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 15px;
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
  
  .download-btn {
    display: inline-block;
    background-color: #27ae60;
    color: white;
    padding: 10px 20px;
    margin: 10px 0;
    text-decoration: none;
    border-radius: 4px;
    font-weight: bold;
    transition: background-color 0.3s ease;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
  
  .download-btn:hover {
    background-color: #219653;
    text-decoration: none;
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    transform: translateY(-2px);
  }
  
  .download-btn i {
    margin-right: 8px;
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

  .teachers {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    margin: 30px auto;
    max-width: 800px;
  }
  
  .teacher-card {
    width: 250px;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .teacher-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  }
  
  .teacher-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 15px;
    border: 3px solid #27ae60;
    transition: transform 0.4s ease-in-out, border-color 0.4s ease;
  }
  
  .teacher-card:hover .teacher-img {
    transform: scale(1.05);
    border-color: #219653;
  }
  
  .teacher-role {
    color: #7f8c8d;
    font-style: italic;
    margin-top: 5px;
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
  .tutorials-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 30px 0;
  justify-content: center;
}

.tutorial-card {
  flex: 1;
  min-width: 250px;
  max-width: 350px;
  padding: 25px;
  background-color: #f8f9fa;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  padding-top: 40px;
}

.tutorial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.tutorial-icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

.tutorial-card:nth-child(1) .tutorial-icon {
  color: #E34F26;
}

.tutorial-card:nth-child(2) .tutorial-icon {
  color: #1572B6;
}

.tutorial-card:nth-child(3) .tutorial-icon {
  color: #F7DF1E;
}

.tutorial-btn {
  display: inline-block;
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  margin: 15px 0 5px;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.tutorial-btn:hover {
  background-color: #2980b9;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  transform: translateY(-2px);
}

.tutorial-btn i {
  margin-right: 8px;
}
  
  @media (max-width: 768px) {
  .resources, .contributors, .teachers, .tutorials-container {
    flex-direction: column;
    align-items: center;
  }
  
  .contributor-card, .teacher-card, .tutorial-card {
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
<script>
  function checkPassword(experimentId) {
    const password = document.getElementById(`password-${experimentId}`).value;
    const passwords = {
      1: "html2025",
      2: "js2025",
      3: "gallery2025"
    };
    
    if (password === passwords[experimentId]) {
      localStorage.setItem(`exp-${experimentId}-access`, "granted");
      window.location.href = `Exp-${experimentId}/README.html`;
    } else {
      alert("Incorrect password. Please try again.");
    }
    return false;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    if (path.includes('/Exp-')) {
      const expNumber = path.match(/Exp-(\d+)/)[1];
      if (!localStorage.getItem(`exp-${expNumber}-access`)) {
        window.location.href = "../README.html";
      }
    }
    
    for (let i = 1; i <= 3; i++) {
      if (localStorage.getItem(`exp-${i}-access`) === "granted") {
        const passwordForm = document.getElementById(`password-form-${i}`);
        const viewButton = document.createElement('a');
        viewButton.href = `Exp-${i}/README.html`;
        viewButton.className = 'download-btn';
        viewButton.innerHTML = '<i class="fas fa-eye"></i> View Experiment';
        
        if (passwordForm) {
          passwordForm.parentNode.replaceChild(viewButton, passwordForm);
        }
      }
    }
  });
</script>
<link rel="stylesheet" href="css/chatbot.css">
<script src="js/chatbot.js"></script>
