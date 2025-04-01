---
layout: default
title: HTML Tutorial
---

<a href="../README.html" class="back-btn">← Back to Main Page</a>

# HTML Tutorial

This tutorial will guide you through the fundamentals of HTML (Hypertext Markup Language), the standard markup language for documents designed to be displayed in a web browser.

## Getting Started with HTML: Essential Elements and Examples

HTML (Hypertext Markup Language) is the foundation of web development. It provides the structure and layout of web pages and helps to define elements like headings, paragraphs, links, and images. In this blog post, we’ll explore the essential HTML elements with example code to help you start building your own web pages.

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
</style>