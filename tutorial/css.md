---
layout: default
title: CSS Tutorial
---

<div class="progress-container">
  <div class="progress-bar" id="progressBar"></div>
</div>

<a href="../README.html" class="back-btn">← Back to Main Page</a>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

# Introduction to CSS: Styling the Web

<div class="toc">
  <h2>Table of Contents</h2>
  <ul>
    <li><a href="#introduction-to-css-styling-the-web">Introduction to CSS</a></li>
    <li><a href="#key-concepts-in-css">Key Concepts in CSS</a></li>
    <li><a href="#css-syntax">CSS Syntax</a></li>
    <li><a href="#basic-elements-of-css">Basic Elements of CSS</a>
      <ul>
        <li><a href="#1-selectors">1. Selectors</a></li>
        <li><a href="#2-properties-and-values">2. Properties and Values</a></li>
      </ul>
    </li>
    <li><a href="#3-css-box-model">3. CSS Box Model</a>
      <ul>
        <li><a href="#margin">Margin</a></li>
        <li><a href="#padding">Padding</a></li>
        <li><a href="#border">Border</a></li>
      </ul>
    </li>
    <li><a href="#4-text-styling">4. Text Styling</a>
      <ul>
        <li><a href="#text-alignment">Text Alignment</a></li>
        <li><a href="#text-decoration">Text Decoration</a></li>
      </ul>
    </li>
    <li><a href="#ways-to-add-css">Ways to Add CSS</a>
      <ul>
        <li><a href="#inline-css">Inline CSS</a></li>
        <li><a href="#internal-css">Internal CSS</a></li>
        <li><a href="#external-css">External CSS</a></li>
      </ul>
    </li>
    <li><a href="#conclusion">Conclusion</a></li>
    <li><a href="#learn-css-in-1-hour">Video Tutorial</a></li>
  </ul>
</div>

CSS (Cascading Style Sheets) is a styling language used to describe the look and formatting of HTML documents. With CSS, we can control the layout, colors, fonts, spacing, and more, making our websites attractive and user-friendly.

### Key Concepts in CSS
- **Selectors**: CSS selectors target HTML elements to apply specific styles.
- **Properties and Values**: Each CSS rule consists of a property (like `color` or `font-size`) and a value.
- **CSS Syntax**: Basic CSS syntax involves a selector, followed by curly braces `{}`, containing property-value pairs.

### CSS Syntax
A CSS rule has the following syntax:

```css
selector {
    property: value;
}
```

For example:

```css
h1 {
    color: blue;
    font-size: 24px;
}
```

### Basic Elements of CSS

#### 1. Selectors
CSS selectors allow us to target HTML elements.

- **Element Selector**: Targets all elements of a specific type.

```css
p {
    color: green;
}
```

- **Class Selector**: Targets elements with a specific class attribute (use `.className`).

```css
.highlight {
    background-color: yellow;
}
```

- **ID Selector**: Targets a single element with a specific ID attribute (use `#idName`).

```css
#main-heading {
    font-size: 30px;
}
```

#### 2. Properties and Values
Each CSS property affects a different aspect of the element's appearance.

- **Color**: Sets the color of the text.

```css
h1 {
    color: red;
}
```

- **Font**: Controls the font style, size, and weight.

```css
p {
    font-family: Arial, sans-serif;
    font-size: 16px;
}
```

- **Background**: Sets the background color or image of an element.

```css
body {
    background-color: #f0f0f0;
}
```

## 3. CSS Box Model
Every HTML element is a rectangular box and has margins, borders, padding, and content.

### Margin
Creates space around an element.

```css
.container {
    margin: 20px;
}
```

### Padding
Creates space inside the element, around the content.

```css
.container {
    padding: 15px;
}
```

### Border
Adds a border around the element.

```css
.container {
    border: 1px solid black;
}
```

## 4. Text Styling
CSS provides many ways to style text.

### Text Alignment
```css
h1 {
    text-align: center;
}
```

### Text Decoration
```css
a {
    text-decoration: none;
}
```

## Ways to Add CSS
- **Inline CSS**: Add CSS directly to an HTML element using the `style` attribute.
- **Internal CSS**: Use the `<style>` tag within the HTML `<head>`.
- **External CSS**: Link a CSS file using `<link rel="stylesheet" href="style.css">` in the HTML `<head>`.

## Conclusion
CSS is essential in web design, allowing for customization and enhancing user experience. Understanding CSS basics is the first step toward creating attractive, functional websites. Keep experimenting with different styles to see how they impact your webpage’s appearance.

---

## Inline CSS
Inline CSS allows you to apply styles directly to an HTML element using the `style` attribute, which is placed inside the opening tag of the element. Here are some examples that illustrate how to use inline CSS.

### Inline CSS Examples

### 1. Changing Text Color
To change the color of a heading directly, you can use inline CSS like this:

```html
<h1 style="color: blue;">This is a Blue Heading</h1>
```
This example applies the color blue only to this specific `<h1>` element.

### 2. Setting Background Color
To set a background color for a paragraph:

```html
<p style="background-color: lightgrey;">This paragraph has a light grey background.</p>
```
The `background-color` property only affects this paragraph, leaving other paragraphs unaffected.

### 3. Adjusting Font Size and Style
To customize the font size and style:

```html
<p style="font-size: 20px; font-family: Arial, sans-serif;">This paragraph has custom font size and style.</p>
```
Here, the font size is set to `20px`, and the font family is set to `Arial`.

### 4. Adding Border and Padding
To add a border and padding around a div:

```html
<div style="border: 2px solid black; padding: 10px;">
    This div has a black border and padding inside.
</div>
```
This `div` element has a solid black border and padding that creates space inside the border.

### 5. Centering Text with Inline CSS
To center-align text in an element:

```html
<h2 style="text-align: center;">This text is centered.</h2>
```
The `text-align: center;` rule centers the text within the element.

### 6. Setting Width and Margin for Alignment
You can control the width and alignment of elements using `width` and `margin`.

```html
<div style="width: 50%; margin: 0 auto; background-color: #f0f0f0; text-align: center;">
    This div is centered and has a 50% width.
</div>
```

Here:
- `width: 50%;` makes the `div` half as wide as its container.
- `margin: 0 auto;` centers it horizontally within the container.

### 7. Changing Link Styles
You can style a specific link using inline CSS:

```html
<a href="https://example.com" style="color: green; text-decoration: none;">Visit Example</a>
```

This changes the link color to green and removes the underline.

#### Combining Multiple Inline Styles
You can apply multiple styles at once by separating each property-value pair with a semicolon:

```html
<p style="color: white; background-color: darkblue; padding: 10px; font-weight: bold;">
    This paragraph has multiple inline styles.
</p>
```

This paragraph has white text on a dark blue background, with padding and bold text.

Inline CSS is useful for quick, single-use styling, but remember that using too much inline CSS can make the code harder to maintain. For larger projects, consider using internal or external CSS for a more organized approach.

---

## Internal CSS

Internal CSS is added within the `<style>` element inside the `<head>` section of the HTML document. This method allows you to apply styles to multiple elements on the same page without needing an external CSS file. Here are some examples to demonstrate how internal CSS works.

### Internal CSS Examples
To use internal CSS, place the CSS code inside a `<style>` tag in the HTML `<head>`, like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Internal CSS Example</title>
    <style>
        /* Changing text color and alignment for headings */
        h1 {
            color: darkblue;
            text-align: center;
        }

        /* Styling paragraphs with font size and color */
        p {
            font-size: 18px;
            color: #555;
        }

        /* Styling divs with background color, padding, and border */
        .container {
            background-color: #f4f4f4;
            padding: 20px;
            border: 1px solid #ddd;
            margin: 10px 0;
        }

        /* Setting specific styles for links */
        a {
            color: green;
            text-decoration: none;
        }

        /* Adding a hover effect to links */
        a:hover {
            color: darkgreen;
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <h1>Welcome to Internal CSS</h1>
    <p>This is a paragraph styled with internal CSS. Internal CSS applies styles to multiple elements on a single page.</p>

    <div class="container">
        <p>This div has a light grey background, padding, and a border.</p>
    </div>

    <a href="#">This is a link styled with internal CSS.</a>
</body>
</html>
```

### Explanation of Each Section
#### Headings:
- `h1` elements are styled to have a dark blue color and centered alignment.

#### Paragraphs:
- `p` elements have a font size of 18 pixels and a light grey text color (`#555`).

#### Containers:
- The `.container` class adds styles to any `<div class="container">` element, giving it a light grey background, padding, a border, and some vertical spacing.

#### Links:
- `a` elements (links) are given a green color with no underline.
- When the user hovers over a link, the color changes to dark green, and an underline appears.

### Benefits of Internal CSS
Internal CSS is useful for:
- Small projects or single-page sites where styles don’t need to be reused across multiple pages.
- Quick customization of a single page without needing an external stylesheet.

By using internal CSS, you can keep your styles organized within the same HTML file, making it easy to manage while learning CSS or working on small projects.

---

## External CSS

External CSS is a method of separating your CSS code into a separate file, typically with a `.css` extension. This approach keeps your HTML clean and organizes the styling logic in a reusable and maintainable way.

### Benefits of External CSS
- **Reusability:** One CSS file can be linked to multiple HTML pages, ensuring consistent styling across all pages.
- **Separation of Concerns:** Keeps the content (HTML) and presentation (CSS) separate, making the code cleaner and easier to maintain.
- **Efficiency:** The browser caches the CSS file, reducing load time for pages that use the same stylesheet.

### How to Use External CSS
#### 1. Create a CSS File:
Save the CSS code in a file with a `.css` extension (e.g., `styles.css`).

#### 2. Link the CSS File:
Use the `<link>` element inside the `<head>` section of your HTML file to link the external CSS file.

### Example of External CSS
#### 1. CSS File (`styles.css`)
```css
/* Styling for the body */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
}

/* Styling for the heading */
h1 {
    color: darkblue;
    text-align: center;
    padding: 20px;
    background-color: #e0e0ff;
    border-bottom: 2px solid #ddd;
}

/* Styling for paragraphs */
p {
    font-size: 18px;
    color: #333;
    line-height: 1.6;
    margin: 15px;
}

/* Styling for a container div */
.container {
    width: 80%;
    margin: 0 auto;
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Styling for links */
a {
    color: darkgreen;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
```

#### 2. HTML File (`index.html`)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>External CSS Example</title>
    <!-- Link to the external CSS file -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Welcome to External CSS</h1>
    <div class="container">
        <p>External CSS allows you to apply consistent styles across multiple web pages. It also makes your code cleaner and easier to maintain.</p>
        <p>With an external CSS file, you can define styles once and reuse them across multiple HTML documents.</p>
        <a href="#">Learn more about CSS</a>
    </div>
</body>
</html>
```

### Folder Structure for the Example
```
project-folder/
├── css/
│   └── styles.css
├── index.html
```
Update the `<link>` path to:
```html
<link rel="stylesheet" href="css/styles.css">
```
Using external CSS is highly recommended for building professional websites, as it ensures clean, modular, and scalable code.

## Learn CSS in 1 Hour

Here’s a video tutorial:

<div class="video-container">
    <iframe width="1031" height="580" src="https://www.youtube.com/embed/wRNinF7YQqQ" 
    title="Learn CSS in 1 hour 🎨" frameborder="0" 
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
</script>
<link rel="stylesheet" href="../css/chatbot.css">
<script src="../js/chatbot.js"></script>