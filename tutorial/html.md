---
layout: default
title: HTML Tutorial
---

<div class="progress-container">
  <div class="progress-bar" id="progressBar"></div>
</div>

<a href="../README.html" class="back-btn">← Back to Main Page</a>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

# Introduction to HTML: Structuring the Web

<div class="toc">
  <h2>Table of Contents</h2>
  <ul>
    <li><a href="#introduction-to-html-structuring-the-web">Introduction to HTML</a></li>
    <li><a href="#1-basic-structure-of-an-html-document">1. Basic Structure of an HTML Document</a></li>
    <li><a href="#common-html-elements">Common HTML Elements</a>
      <ul>
        <li><a href="#2-headings-h1-to-h6">2. Headings</a></li>
        <li><a href="#3-paragraphs-p">3. Paragraphs</a></li>
        <li><a href="#4-links-a">4. Links</a></li>
        <li><a href="#5-images-img">5. Images</a></li>
        <li><a href="#6-lists">6. Lists</a></li>
        <li><a href="#7-divisions-div-and-spans-span">7. Divisions and Spans</a></li>
        <li><a href="#8-tables-table">8. Tables</a></li>
        <li><a href="#9-forms-form">9. Forms</a></li>
        <li><a href="#10-comments">10. Comments</a></li>
      </ul>
    </li>
    <li><a href="#example">Complete Example</a></li>
    <li><a href="#learn-html-in-1-hour">Video Tutorial</a></li>
  </ul>
</div>

HTML (Hypertext Markup Language) is the foundation of web development. It provides the structure and layout of web pages and helps to define elements like headings, paragraphs, links, and images. In this, we’ll explore the essential HTML elements with example code to help you start building your own web pages.

### 1. Basic Structure of an HTML Document
Every HTML document has a standard structure, beginning with the `<!DOCTYPE html>` declaration and followed by `html`, `head`, and `body` tags. Here’s the basic structure of an HTML file:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to HTML Basics</h1>
    <p>This is a paragraph on my first webpage.</p>
</body>
</html>
```

- `<!DOCTYPE html>`: Declares the document type as HTML5.
- `<html>`: The root element that wraps all HTML content.
- `<head>`: Contains meta-information, like the page title, which is shown in the browser tab.
- `<title>`: Sets the title of the page.
- `<body>`: Contains all the content displayed on the web page.

### 2. Headings (`<h1>` to `<h6>`) 
Headings are essential for organizing content. HTML provides six heading tags, from `<h1>` (most important) to `<h6>` (least important).

```html
<h1>This is a Main Heading</h1>
<h2>This is a Sub-heading</h2>
<h3>This is a Sub-sub-heading</h3>
```

### 3. Paragraphs (`<p>`) 
The `<p>` tag is used for adding paragraphs.

```html
<p>This is a paragraph. HTML paragraphs are automatically separated by a small margin.</p>
```

### 4. Links (`<a>`) 
Links are created using the `<a>` tag, which has an `href` attribute to define the URL.

```html
<a href="https://www.example.com">Visit Example</a>
```

### 5. Images (`<img>`) 
The `<img>` tag displays images on a webpage. The `src` attribute specifies the image source, and the `alt` attribute provides alternate text.

```html
<img src="image.jpg" alt="A descriptive text for the image">
```

### 6. Lists 
HTML supports both ordered (`<ol>`) and unordered (`<ul>`) lists. Each list item is wrapped in `<li>` tags.

#### Unordered List (bulleted list):
```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

#### Ordered List (numbered list):
```html
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
```

### 7. Divisions (`<div>`) and Spans (`<span>`) 
- `<div>`: A block-level container, often used for layout purposes.

```html
<div>
    <h2>Section Title</h2>
    <p>This is a section of content.</p>
</div>
```

- `<span>`: An inline container for text or small groups of elements, often used to style specific portions of text.

```html
<p>This is a <span style="color: blue;">blue text</span> inside a paragraph.</p>
```

### 8. Tables (`<table>`) 
Tables are used to display data in rows and columns.

```html
<table border="1">
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>John</td>
        <td>30</td>
    </tr>
    <tr>
        <td>Jane</td>
        <td>25</td>
    </tr>
</table>
```

- `<table>`: Defines the table.
- `<tr>`: Defines a row.
- `<th>`: Defines a header cell (bold and centered).
- `<td>`: Defines a standard cell.

### 9. Forms (`<form>`) 
Forms allow users to submit data. Here’s an example with text and submit inputs.

```html
<form action="/submit-form" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <br>
    <input type="submit" value="Submit">
</form>
```

### 10. Comments 
Comments in HTML are written within `<!-- -->`. They’re not displayed in the browser but help document the code.

```html
<!-- This is a comment -->
<p>This is a paragraph.</p>
```

### Example:
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Simple Web Page</title>
</head>
<body>

    <!-- Header Section -->
    <header>
        <h1>Welcome to My Web Page</h1>
        <p>This is a simple webpage using basic HTML elements.</p>
    </header>

    <!-- Navigation Section -->
    <nav>
        <a href="#about">About</a> |
        <a href="#services">Services</a> |
        <a href="#contact">Contact</a>
    </nav>

    <!-- Main Content Section -->
    <main>
        <section id="about">
            <h2>About Me</h2>
            <p>Hello! I am a web development enthusiast learning HTML. This section contains some basic information about me.</p>
        </section>

        <section id="services">
            <h2>My Services</h2>
            <ul>
                <li>Web Design</li>
                <li>Content Creation</li>
                <li>SEO Optimization</li>
            </ul>
        </section>
    </main>

    <!-- Contact Section -->
    <section id="contact">
        <h2>Contact Me</h2>
        <p>You can reach me at <a href="mailto:example@example.com">example@example.com</a>.</p>
    </section>

    <!-- Footer Section -->
    <footer>
        <p>&copy; 2024 My Simple Web Page</p>
    </footer>

</body>
</html>
```
## Learn HTML in 1 Hour

Here’s a video tutorial:

<div class="video-container">
    <iframe width="1031" height="580" src="https://www.youtube.com/embed/HD13eq_Pmp8" 
    title="Learn HTML in 1 hour 🌎" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
    </iframe>
</div>

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
  text-decoration: none;
}

.progress-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 8px;
  background: transparent;
}

.progress-bar {
  height: 8px;
  background: #3498db;
  width: 0%;
  border-radius: 0 4px 4px 0;
  transition: width 0.2s ease;
}

.video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
    background: #000;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    margin: 20px auto;
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
}

.toc {
  background-color: #f8f9fa;
  border: 1px solid #eaecef;
  border-radius: 8px;
  padding: 15px 20px;
  margin: 20px 0;
}

.toc h2 {
  margin-top: 0;
  font-size: 1.2rem;
}

.toc ul {
  padding-left: 20px;
}

.toc a {
  text-decoration: none;
  color: #0366d6;
}

.toc a:hover {
  text-decoration: underline;
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
window.onscroll = function() {updateProgressBar()};

function updateProgressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('pre').forEach(function(pre) {
    const container = document.createElement('div');
    container.className = 'code-container';
    
    const button = document.createElement('button');
    button.className = 'copy-btn';
    button.innerHTML = '<i class="fas fa-copy"></i> Copy';
    
    button.addEventListener('click', function() {
      const code = pre.textContent;
      navigator.clipboard.writeText(code).then(function() {
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        button.classList.add('copy-success');
        
        setTimeout(function() {
          button.innerHTML = '<i class="fas fa-copy"></i> Copy';
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