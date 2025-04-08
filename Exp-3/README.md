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

## Learn to build an interactive image gallery with slider functionality.

Here’s a video tutorial:

<div class="video-container">
    <iframe width="1045" height="588" src="https://www.youtube.com/embed/749ta0nvj8s" 
    title="Build a JavaScript IMAGE SLIDER in 15 minutes! 🖼️" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<br>

<div class="experiment-nav">
  <a href="../Exp-1/README.html" class="nav-btn">Exp-1</a>
  <a href="../Exp-2/README.html" class="nav-btn">Exp-2</a>
  <span class="nav-disabled">Exp-3</span>
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

<link rel="stylesheet" href="../css/chatbot.css">
<script src="../js/chatbot.js"></script>
